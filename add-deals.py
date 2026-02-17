#!/usr/bin/env python3
"""Parse deals from ALL INCOME_OUTCOME CSV and add Deals page to the app"""
import re, json, csv, io

def parse_amount(s):
    if not s or not isinstance(s, str): return 0
    s = re.sub(r'[฿$₪р.]', '', s).strip().replace('\xa0', '').replace(' ', '')
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
    for row in reader: return row
    return []

# Read CSV
with open('ThaiProperty Report - ALL INCOME_OUTCOME .csv', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Parse into deal groups
deals = []
current_deal = None

for i, line in enumerate(lines):
    if i == 0: continue  # header
    line = line.strip()
    if not line: continue
    cols = parse_csv_line(line)
    if len(cols) < 5: continue
    
    name = cols[0].strip() if cols[0] else ''
    deal_type = cols[1].strip() if len(cols) > 1 else ''
    income = parse_amount(cols[2]) if len(cols) > 2 else 0
    outcome = parse_amount(cols[3]) if len(cols) > 3 else 0
    date = parse_date(cols[4]) if len(cols) > 4 else ''
    comment = cols[5].strip() if len(cols) > 5 else ''
    deposit_15 = parse_amount(cols[6]) if len(cols) > 6 else 0
    left_company = parse_amount(cols[7]) if len(cols) > 7 else 0
    prop_amount = parse_amount(cols[8]) if len(cols) > 8 else 0
    comm_pct = cols[9].strip() if len(cols) > 9 else ''
    
    if name.lower().startswith('balance'): continue
    if not name: continue
    
    # Is this a deal header? (has income or property amount, and not a sub-entry)
    is_deal_header = (income > 0 or prop_amount > 0) and not re.search(r'Roman|Ariel|deposit 15|maintenance|Accesories|Withholding|Roy A\.|Roi and|Laywer fee', name, re.I)
    
    if is_deal_header:
        if current_deal:
            deals.append(current_deal)
        
        # Extract client name from deal description
        client = ''
        m = re.search(r'\(([^)]+)\)', name)
        if m:
            client = m.group(1)
        
        # Determine deal category
        deal_cat = 'sale'
        if re.search(r'rent', name, re.I): deal_cat = 'rent'
        elif re.search(r'lawyer|visa|Comission from', name, re.I): deal_cat = 'service'
        
        current_deal = {
            'id': len(deals) + 1,
            'name': name,
            'client': client,
            'dealType': deal_type if deal_type else '',
            'paymentMethod': deal_type if deal_type else '',
            'category': deal_cat,
            'date': date,
            'income': income,
            'propertyPrice': prop_amount,
            'commissionPct': comm_pct,
            'comment': comment,
            'deposit15': 0,
            'romanCommission': 0,
            'arielCommission': 0,
            'otherCommissions': [],
            'fees': [],
            'taxes': [],
            'leftInCompany': left_company,
            'status': 'completed' if income > 0 else 'pending',
        }
    elif current_deal:
        # This is a sub-entry for the current deal
        if re.search(r'deposit 15', name, re.I):
            current_deal['deposit15'] += outcome
        elif re.search(r'Roman', name, re.I):
            current_deal['romanCommission'] += outcome
            if comment and 'stay in company' in comment.lower():
                current_deal['leftInCompany'] += left_company
        elif re.search(r'Ariel', name, re.I):
            current_deal['arielCommission'] += outcome
            if comment:
                if not current_deal['comment']:
                    current_deal['comment'] = comment
        elif re.search(r'maintenance|Accesories', name, re.I):
            current_deal['fees'].append({'name': name, 'amount': outcome})
        elif re.search(r'Withholding|tax', name, re.I):
            current_deal['taxes'].append({'name': name, 'amount': outcome})
        elif re.search(r'Laywer|lawyer', name, re.I):
            current_deal['fees'].append({'name': name, 'amount': outcome})
        elif re.search(r'Yossef|Roy A\.|Roi and', name, re.I):
            current_deal['otherCommissions'].append({'name': name, 'amount': outcome, 'comment': comment})
        # Update date if sub-entry has one and main doesn't
        if not current_deal['date'] and date:
            current_deal['date'] = date

if current_deal:
    deals.append(current_deal)

# Calculate net received for each deal
for d in deals:
    total_out = d['deposit15'] + d['romanCommission'] + d['arielCommission']
    total_out += sum(f['amount'] for f in d['fees'])
    total_out += sum(t['amount'] for t in d['taxes'])
    total_out += sum(c['amount'] for c in d['otherCommissions'])
    d['totalExpenses'] = round(total_out, 2)
    d['netReceived'] = round(d['income'] - total_out, 2) if d['income'] > 0 else 0

print(f'Parsed {len(deals)} deals')
for d in deals:
    status = '✅' if d['status'] == 'completed' else '⏳'
    print(f"  {status} {d['name'][:50]:50s} | ₿{d['income']:>12,.2f} | Property: ₿{d['propertyPrice']:>14,.2f} | Net: ₿{d['netReceived']:>12,.2f}")

# Write deals data as JS
js_deals = json.dumps(deals, indent=2, ensure_ascii=False)

# Now update app.js to include deals data and render function
with open('app.js', 'r', encoding='utf-8') as f:
    app = f.read()

# Add deals array to defaultData
deals_insert = f',\n    "deals": {json.dumps(deals, indent=4, ensure_ascii=False)}'
app = app.replace('"nextId":', deals_insert + ',\n    "nextId":')

# Add Deals to navigate titles
app = app.replace(
    "expenses: ['Expenses', 'All company expenses and payouts'],",
    "expenses: ['Expenses', 'All company expenses and payouts'],\n      deals: ['Deals', 'Property deals and commission details'],"
)

# Add Deals render call in navigate
app = app.replace(
    "else if (page === 'expenses') renderExpenses();",
    "else if (page === 'expenses') renderExpenses();\n    else if (page === 'deals') renderDeals();"
)

# Add renderDeals function
render_deals = '''

  // ============ RENDER: DEALS ============
  function renderDeals() {
    const grid = document.getElementById('deals-grid');
    if (!grid) return;
    let deals = appData.deals || [];

    // Filters
    const search = document.getElementById('deals-search')?.value?.toLowerCase() || '';
    const catFilter = document.getElementById('deals-cat-filter')?.value || 'all';
    const statusFilter = document.getElementById('deals-status-filter')?.value || 'all';

    if (search) deals = deals.filter(d => (d.name + ' ' + d.client).toLowerCase().includes(search));
    if (catFilter !== 'all') deals = deals.filter(d => d.category === catFilter);
    if (statusFilter !== 'all') deals = deals.filter(d => d.status === statusFilter);

    // Sort by date desc
    deals.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

    // Summary metrics
    const completed = deals.filter(d => d.status === 'completed');
    const totalIncome = completed.reduce((s, d) => s + d.income, 0);
    const totalPropValue = deals.reduce((s, d) => s + d.propertyPrice, 0);
    const el = id => document.getElementById(id);
    el('deals-total-income').textContent = formatCurrency(totalIncome);
    el('deals-count').textContent = deals.length;
    el('deals-prop-value').textContent = formatCurrency(totalPropValue);

    // Badge
    const badge = document.querySelector('[data-page="deals"] .deals-badge');
    if (badge) badge.textContent = (appData.deals || []).length;

    if (!deals.length) {
      grid.innerHTML = '<div class="empty-state"><div class="empty-icon">🏠</div><h4>No deals found</h4><p>Try adjusting filters</p></div>';
      return;
    }

    grid.innerHTML = deals.map(d => {
      const feesHtml = d.fees.map(f => `<div class="deal-line"><span>${escapeHtml(f.name)}</span><span class="amount-negative">-${formatCurrency(f.amount)}</span></div>`).join('');
      const taxesHtml = d.taxes.map(t => `<div class="deal-line"><span>${escapeHtml(t.name)}</span><span class="amount-negative">-${formatCurrency(t.amount)}</span></div>`).join('');
      const otherHtml = d.otherCommissions.map(c => `<div class="deal-line"><span>${escapeHtml(c.name)}</span><span class="amount-negative">-${formatCurrency(c.amount)}</span></div>`).join('');
      const statusBadge = d.status === 'completed'
        ? '<span class="status-badge completed">✅ Completed</span>'
        : '<span class="status-badge pending">⏳ Pending</span>';
      const catIcon = d.category === 'rent' ? '🏠' : d.category === 'service' ? '⚖️' : '🏢';
      const catLabel = d.category === 'rent' ? 'Rent' : d.category === 'service' ? 'Service' : 'Sale';

      return `
        <div class="deal-card ${d.status}">
          <div class="deal-card-header">
            <div class="deal-card-title">
              <span class="deal-cat-icon">${catIcon}</span>
              <div>
                <h4>${escapeHtml(d.name)}</h4>
                <div class="deal-meta">
                  ${d.date ? formatDate(d.date) : '<em>No date</em>'} · ${catLabel}
                  ${d.paymentMethod ? ' · ' + escapeHtml(d.paymentMethod) : ''}
                </div>
              </div>
            </div>
            ${statusBadge}
          </div>

          <div class="deal-card-body">
            <div class="deal-info-grid">
              <div class="deal-info-item">
                <span class="deal-info-label">Client</span>
                <span class="deal-info-value">${d.client ? escapeHtml(d.client) : '<em class="empty-field">—</em>'}</span>
              </div>
              <div class="deal-info-item">
                <span class="deal-info-label">Property Price</span>
                <span class="deal-info-value">${d.propertyPrice ? formatCurrency(d.propertyPrice) : '<em class="empty-field">—</em>'}</span>
              </div>
              <div class="deal-info-item">
                <span class="deal-info-label">Commission %</span>
                <span class="deal-info-value">${d.commissionPct ? d.commissionPct + '%' : '<em class="empty-field">—</em>'}</span>
              </div>
              <div class="deal-info-item highlight-green">
                <span class="deal-info-label">Total Commission</span>
                <span class="deal-info-value amount-positive">${d.income ? '+' + formatCurrency(d.income) : '<em class="empty-field">—</em>'}</span>
              </div>
            </div>

            <div class="deal-breakdown">
              <div class="deal-section-title">Commission Split</div>
              <div class="deal-line"><span>🔵 Roman</span><span class="amount-negative">${d.romanCommission ? '-' + formatCurrency(d.romanCommission) : '—'}</span></div>
              <div class="deal-line"><span>🟣 Ariel</span><span class="amount-negative">${d.arielCommission ? '-' + formatCurrency(d.arielCommission) : '—'}</span></div>
              <div class="deal-line"><span>🏦 Company 15%</span><span class="amount-negative">${d.deposit15 ? '-' + formatCurrency(d.deposit15) : '—'}</span></div>
              ${otherHtml}
              ${feesHtml ? '<div class="deal-section-title">Fees & Expenses</div>' + feesHtml : ''}
              ${taxesHtml ? '<div class="deal-section-title">Taxes</div>' + taxesHtml : ''}
            </div>

            <div class="deal-footer">
              <div class="deal-net ${d.netReceived >= 0 ? 'positive' : 'negative'}">
                <span>Net Received</span>
                <span class="deal-net-value">${d.income ? formatCurrency(d.netReceived) : '—'}</span>
              </div>
            </div>
          </div>
          ${d.comment ? '<div class="deal-comment">💬 ' + escapeHtml(d.comment) + '</div>' : ''}
        </div>
      `;
    }).join('');
  }

  function clearDealsFilters() {
    const s = document.getElementById('deals-search'); if (s) s.value = '';
    const c = document.getElementById('deals-cat-filter'); if (c) c.value = 'all';
    const st = document.getElementById('deals-status-filter'); if (st) st.value = 'all';
    renderDeals();
  }
'''

app = app.replace(
    '  function clearIncomeFilters()',
    render_deals + '\n  function clearIncomeFilters()'
)

# Add clearDealsFilters to public API
app = app.replace(
    'clearIncomeFilters,',
    'clearDealsFilters,\n    clearIncomeFilters,'
)

# Add event listeners for deals filters
deals_listeners = '''
    // Deals filters
    document.getElementById('deals-search')?.addEventListener('input', () => renderDeals());
    document.getElementById('deals-cat-filter')?.addEventListener('change', () => renderDeals());
    document.getElementById('deals-status-filter')?.addEventListener('change', () => renderDeals());
'''
app = app.replace(
    '    // Income filters',
    deals_listeners + '\n    // Income filters'
)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app)

print('\\napp.js updated with deals data and renderDeals function')

# ===== Update index.html =====
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Add Deals nav item after Expenses
deals_nav = '''        <a class="nav-item" data-page="deals">
          <span class="nav-icon">🏠</span> Deals
          <span class="nav-badge deals-badge">0</span>
        </a>
'''
html = html.replace(
    '        <a class="nav-item" data-page="agents">',
    deals_nav + '        <a class="nav-item" data-page="agents">'
)

# Add Deals page section
deals_page = '''
        <!-- ============ PAGE: DEALS ============ -->
        <section class="page-section" id="page-deals">
          <div class="metrics-grid" style="margin-bottom:24px;">
            <div class="metric-card green">
              <div class="metric-header"><div class="metric-icon">💰</div><span class="metric-label">Total Commissions</span></div>
              <div class="metric-value" id="deals-total-income">฿0</div>
            </div>
            <div class="metric-card blue">
              <div class="metric-header"><div class="metric-icon">🏢</div><span class="metric-label">Number of Deals</span></div>
              <div class="metric-value" id="deals-count">0</div>
            </div>
            <div class="metric-card purple">
              <div class="metric-header"><div class="metric-icon">🏷️</div><span class="metric-label">Total Property Value</span></div>
              <div class="metric-value" id="deals-prop-value">฿0</div>
            </div>
          </div>
          <div class="filters-bar advanced-filters" style="margin-bottom:24px;">
            <div class="search-input">
              <span class="search-icon">🔍</span>
              <input type="text" id="deals-search" placeholder="Search deals or clients...">
            </div>
            <select class="filter-select" id="deals-cat-filter">
              <option value="all">All Types</option>
              <option value="sale">Sales</option>
              <option value="rent">Rentals</option>
              <option value="service">Services</option>
            </select>
            <select class="filter-select" id="deals-status-filter">
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
            <button class="btn btn-sm btn-secondary" onclick="app.clearDealsFilters()">✕ Clear</button>
          </div>
          <div class="deals-grid" id="deals-grid"></div>
        </section>
'''
html = html.replace(
    '        <!-- ============ PAGE: AGENTS ============ -->',
    deals_page + '        <!-- ============ PAGE: AGENTS ============ -->'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('index.html updated with Deals page')
