#!/usr/bin/env python3
"""Parse CSV files and generate defaultData JS for app.js"""
import re, json, csv, io

def parse_amount(s):
    if not s or not isinstance(s, str): return 0
    s = re.sub(r'[฿$₪р.]', '', s).strip()
    s = s.replace('\xa0', '').replace(' ', '')
    if ',' in s:
        parts = s.split(',')
        s = parts[0].replace('.', '') + '.' + (parts[1] if len(parts) > 1 else '0')
    try: return round(float(s), 2)
    except: return 0

def parse_date(s):
    if not s or not isinstance(s, str): return ''
    s = s.strip().replace('/', '.')
    m = re.match(r'(\d{1,2})\.(\d{1,2})\.(\d{4})', s)
    if not m: return ''
    d, mo, y = m.group(1).zfill(2), m.group(2).zfill(2), m.group(3)
    if mo == '06' and d == '31': d = '30'
    return f'{y}-{mo}-{d}'

def parse_csv_line(line):
    reader = csv.reader(io.StringIO(line))
    for row in reader:
        return row
    return []

# ===== Parse ALL INCOME_OUTCOME =====
with open('ThaiProperty Report - ALL INCOME_OUTCOME .csv', 'r', encoding='utf-8') as f:
    lines = f.readlines()

txns = []
deps = []
tid = 1
did = 800

for i, line in enumerate(lines):
    if i == 0: continue  # skip header
    line = line.strip()
    if not line: continue
    cols = parse_csv_line(line)
    if len(cols) < 5: continue
    
    name = cols[0].strip() if cols[0] else ''
    income = parse_amount(cols[2]) if len(cols) > 2 else 0
    outcome = parse_amount(cols[3]) if len(cols) > 3 else 0
    date = parse_date(cols[4]) if len(cols) > 4 else ''
    comment = cols[5].strip() if len(cols) > 5 else ''
    prop_amt = parse_amount(cols[8]) if len(cols) > 8 else 0
    
    if name.lower().startswith('balance'): continue
    if not name: continue
    
    if income > 0:
        desc = name
        if prop_amt > 0:
            desc += f' ({prop_amt:,.0f} THB property)'
        txns.append({
            'id': tid, 'date': date or '2025-09-01', 'type': 'income',
            'category': 'commission', 'description': desc,
            'amount': income, 'agent': ''
        })
        tid += 1
    
    if outcome > 0:
        cat, agent = 'commission_out', ''
        if re.search(r'roman', name, re.I): agent = 'Roman'
        elif re.search(r'ariel', name, re.I): agent = 'Ariel'
        elif re.search(r'deposit 15', name, re.I):
            deps.append({
                'id': did, 'name': f'Company 15% — {name}',
                'amount': outcome, 'date': date or '2025-09-01', 'type': 'company_15pct'
            })
            did += 1
            continue
        elif re.search(r'maintenance|lawyer|Accesories|Withholding|Roy|Roi|Yuval|Yossef', name, re.I):
            cat = 'other'
        
        desc = name + (f' ({comment})' if comment else '')
        txns.append({
            'id': tid, 'date': date or '2025-09-01', 'type': 'expense',
            'category': cat, 'description': desc,
            'amount': outcome, 'agent': agent
        })
        tid += 1

# ===== Parse Company Spends =====
with open('ThaiProperty Report - Company spends 01.09.2025.csv', 'r', encoding='utf-8') as f:
    lines = f.readlines()

months = ['2025-09-15','2025-10-15','2025-11-15','2025-12-15','2026-01-15','2026-02-15']
cat = 'office'

for i, line in enumerate(lines):
    if i == 0: continue
    line = line.strip()
    if not line: continue
    cols = parse_csv_line(line)
    if len(cols) < 17: continue
    
    name = cols[0].strip() if cols[0] else ''
    thb_total = parse_amount(cols[16]) if len(cols) > 16 else 0
    
    if re.search(r'Employee|Goverment', name, re.I): cat = 'salary'; continue
    if re.search(r'Advertising|marketing', name, re.I): cat = 'ads'; continue
    if re.search(r'Software.*CRM', name, re.I): cat = 'software'; continue
    if re.search(r'Transportation.*Customer', name, re.I): cat = 'transport'; continue
    if re.search(r'^Total|^Date|^Office exp', name, re.I) or not name: continue
    
    if thb_total <= 0: continue
    
    # Try monthly THB entries
    has_monthly = False
    for m_idx in range(6):
        mv = parse_amount(cols[1 + m_idx]) if len(cols) > 1 + m_idx else 0
        # Check if it's THB (starts with ฿ or is a plain number in THB context)
        raw = cols[1 + m_idx].strip() if len(cols) > 1 + m_idx else ''
        is_thb = raw.startswith('฿') or (not raw.startswith('$') and not raw.startswith('₪') and not raw.startswith('р'))
        if mv > 0 and is_thb:
            has_monthly = True
            txns.append({
                'id': tid, 'date': months[m_idx], 'type': 'expense',
                'category': cat, 'description': f'{name} — {months[m_idx][:7]}',
                'amount': mv, 'agent': ''
            })
            tid += 1
    
    if not has_monthly:
        txns.append({
            'id': tid, 'date': '2025-12-15', 'type': 'expense',
            'category': cat, 'description': f'{name} (Sep 2025–Feb 2026)',
            'amount': thb_total, 'agent': ''
        })
        tid += 1

# ===== Dashboard extras =====
deps.extend([
    {'id': did, 'name': 'Amir Deposit', 'amount': 1758, 'date': '2026-01-15', 'type': 'client'},
    {'id': did+1, 'name': 'Eli Rent money Jan 2026', 'amount': 22000, 'date': '2026-01-01', 'type': 'rent'},
    {'id': did+2, 'name': 'Eli Rent money Feb 2026', 'amount': 30000, 'date': '2026-02-01', 'type': 'rent'},
])

# Calculate agent totals
roman_comm = sum(t['amount'] for t in txns if t['type']=='expense' and t['category']=='commission_out' and t['agent']=='Roman')
roman_deals = sum(1 for t in txns if t['type']=='expense' and t['category']=='commission_out' and t['agent']=='Roman')
ariel_comm = sum(t['amount'] for t in txns if t['type']=='expense' and t['category']=='commission_out' and t['agent']=='Ariel')
ariel_deals = sum(1 for t in txns if t['type']=='expense' and t['category']=='commission_out' and t['agent']=='Ariel')
total_income = sum(t['amount'] for t in txns if t['type']=='income')
total_expenses = sum(t['amount'] for t in txns if t['type']=='expense')

print(f'=== SUMMARY ===')
print(f'Transactions: {len(txns)}')
print(f'Deposits: {len(deps)}')
print(f'Total Income: {total_income:,.2f}')
print(f'Total Expenses: {total_expenses:,.2f}')
print(f'Roman: {roman_comm:,.2f} ({roman_deals} commission payments)')
print(f'Ariel: {ariel_comm:,.2f} ({ariel_deals} commission payments)')

data = {
    'transactions': txns,
    'deposits': deps,
    'agents': [
        {'id':301,'name':'Roman','role':'Co-Founder / Agent','commission':round(roman_comm,2),'deals':roman_deals,'color':'#3b82f6','investment':154838.62},
        {'id':302,'name':'Ariel','role':'Co-Founder / Agent','commission':round(ariel_comm,2),'deals':ariel_deals,'color':'#8b5cf6','investment':4910},
    ],
    'investments': [
        {'id':401,'name':'Company investment','amount':699872.20,'investor':'Company'},
        {'id':402,'name':'Ariel investment','amount':4910,'investor':'Ariel'},
        {'id':403,'name':'Roman investment','amount':154838.62,'investor':'Roman'},
    ],
    'nextId': tid + 100,
}

js = json.dumps(data, indent=2, ensure_ascii=False)
with open('generated-data.js', 'w', encoding='utf-8') as f:
    f.write(f'  const defaultData = {js};\n')
print(f'\nWritten to generated-data.js ({len(js)} bytes)')
