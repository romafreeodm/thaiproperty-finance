#!/usr/bin/env node
// Parse CSV files and generate defaultData for app.js
const fs = require('fs');

function parseAmount(s) {
    if (!s || typeof s !== 'string') return 0;
    s = s.trim().replace(/[฿$₪р.]/g, '').replace(/\s/g, '');
    // European format: "1 234,00" → "1234.00"
    if (s.includes(',')) {
        const parts = s.split(',');
        s = parts[0].replace(/\./g, '') + '.' + (parts[1] || '0');
    }
    const n = parseFloat(s);
    return isNaN(n) ? 0 : n;
}

function parseDate(s) {
    if (!s || typeof s !== 'string') return '';
    s = s.trim().replace('/', '.');
    const m = s.match(/(\d{1,2})\.(\d{1,2})\.(\d{4})/);
    if (!m) return '';
    let d = m[1].padStart(2, '0'), mo = m[2].padStart(2, '0'), y = m[3];
    // Fix invalid dates like 31.06
    if (mo === '06' && d === '31') d = '30';
    return `${y}-${mo}-${d}`;
}

// ===== Parse ALL INCOME_OUTCOME =====
const incomeCSV = fs.readFileSync('ThaiProperty Report - ALL INCOME_OUTCOME .csv', 'utf8');
const incomeLines = incomeCSV.split('\n').map(l => l.replace(/\r/, ''));

const transactions = [];
const deposits = [];
let id = 1;

// Parse each row
for (let i = 1; i < incomeLines.length - 1; i++) { // skip header and balance row
    const raw = incomeLines[i];
    if (!raw.trim()) continue;

    // Simple CSV parse handling quoted fields
    const cols = [];
    let cur = '', inQ = false;
    for (const ch of raw) {
        if (ch === '"') { inQ = !inQ; }
        else if (ch === ',' && !inQ) { cols.push(cur); cur = ''; }
        else { cur += ch; }
    }
    cols.push(cur);

    const name = (cols[0] || '').trim();
    const dealType = (cols[1] || '').trim();
    const income = parseAmount(cols[2]);
    const outcome = parseAmount(cols[3]);
    const date = parseDate(cols[4]);
    const comment = (cols[5] || '').trim();
    const dep15 = parseAmount(cols[6]);
    const leftInCo = parseAmount(cols[7]);
    const propAmount = parseAmount(cols[8]);

    if (!name) continue;

    if (income > 0) {
        transactions.push({
            id: id++, date: date || '2025-09-01', type: 'income', category: 'commission',
            description: name + (propAmount ? ` (${propAmount.toLocaleString('en')} THB property)` : ''),
            amount: income, agent: ''
        });
    }

    if (outcome > 0) {
        let cat = 'commission_out', agent = '';
        if (name.match(/Roman/i)) { agent = 'Roman'; }
        else if (name.match(/Ariel/i)) { agent = 'Ariel'; }
        else if (name.match(/deposit 15/i)) { cat = 'deposit_15pct'; }
        else if (name.match(/maintenance|lawyer|Accesories|Withholding|Roy|Roi|Yuval|Yossef/i)) { cat = 'other'; }

        if (cat === 'deposit_15pct') {
            deposits.push({
                id: 800 + deposits.length, name: 'Company 15% — ' + (transactions.length > 0 ? transactions[transactions.length - 1].description.substring(0, 40) : name),
                amount: outcome, date: date || '2025-09-01', type: 'company_15pct'
            });
        } else {
            transactions.push({
                id: id++, date: date || '2025-09-01', type: 'expense', category: cat,
                description: name + (comment ? ` (${comment})` : ''),
                amount: outcome, agent
            });
        }
    }
}

// ===== Parse Company Spends — use THB totals per sub-category =====
const spendsCSV = fs.readFileSync('ThaiProperty Report - Company spends 01.09.2025.csv', 'utf8');
const spendsLines = spendsCSV.split('\n').map(l => l.replace(/\r/, ''));

const months = ['2025-09-15', '2025-10-15', '2025-11-15', '2025-12-15', '2026-01-15', '2026-02-15'];
let currentCategory = 'office';

for (let i = 1; i < spendsLines.length; i++) {
    const raw = spendsLines[i];
    if (!raw.trim()) continue;

    const cols = [];
    let cur = '', inQ = false;
    for (const ch of raw) {
        if (ch === '"') { inQ = !inQ; }
        else if (ch === ',' && !inQ) { cols.push(cur); cur = ''; }
        else { cur += ch; }
    }
    cols.push(cur);

    const name = (cols[0] || '').trim();
    const thbTotal = parseAmount(cols[16]); // column Q = THB total

    // Detect category headers
    if (name.match(/Employee|Goverment/i)) { currentCategory = 'salary'; continue; }
    if (name.match(/Advertising|marketing/i)) { currentCategory = 'ads'; continue; }
    if (name.match(/Software.*CRM/i)) { currentCategory = 'software'; continue; }
    if (name.match(/Transportation.*Customer/i)) { currentCategory = 'transport'; continue; }
    if (name.match(/^Total|^Date|^Office exp/i) || !name) continue;

    if (thbTotal > 0) {
        // Create monthly entries from individual month columns
        let hasMonthly = false;
        for (let m = 0; m < 6; m++) {
            const monthVal = parseAmount(cols[1 + m]); // columns B-G = Sep-Feb
            if (monthVal > 0) {
                hasMonthly = true;
                transactions.push({
                    id: id++, date: months[m], type: 'expense', category: currentCategory,
                    description: `${name} — ${months[m].substring(0, 7)}`,
                    amount: monthVal, agent: ''
                });
            }
        }
        // If no monthly breakdown in THB (foreign currency), add one total entry
        if (!hasMonthly) {
            transactions.push({
                id: id++, date: '2025-12-15', type: 'expense', category: currentCategory,
                description: `${name} (total Sep 2025–Feb 2026)`,
                amount: thbTotal, agent: ''
            });
        }
    }
}

// ===== Dashboard extras =====
deposits.push(
    { id: 900, name: 'Amir Deposit', amount: 1758, date: '2026-01-15', type: 'client' },
    { id: 901, name: 'Eli Rent money Jan 2026', amount: 22000, date: '2026-01-01', type: 'rent' },
    { id: 902, name: 'Eli Rent money Feb 2026', amount: 30000, date: '2026-02-01', type: 'rent' }
);

// Calculate agent totals from actual data
let romanComm = 0, romanDeals = 0, arielComm = 0, arielDeals = 0;
transactions.forEach(t => {
    if (t.type === 'expense' && t.category === 'commission_out') {
        if (t.agent === 'Roman') { romanComm += t.amount; romanDeals++; }
        if (t.agent === 'Ariel') { arielComm += t.amount; arielDeals++; }
    }
});

const totalIncome = transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
const totalExpenses = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);

const defaultData = {
    transactions,
    deposits,
    agents: [
        { id: 301, name: 'Roman', role: 'Co-Founder / Agent', commission: Math.round(romanComm * 100) / 100, deals: romanDeals, color: '#3b82f6', investment: 154838.62 },
        { id: 302, name: 'Ariel', role: 'Co-Founder / Agent', commission: Math.round(arielComm * 100) / 100, deals: arielDeals, color: '#8b5cf6', investment: 4910 },
    ],
    investments: [
        { id: 401, name: 'Company investment', amount: 699872.20, investor: 'Company' },
        { id: 402, name: 'Ariel investment', amount: 4910, investor: 'Ariel' },
        { id: 403, name: 'Roman investment', amount: 154838.62, investor: 'Roman' },
    ],
    nextId: id + 100,
};

console.log('=== SUMMARY ===');
console.log('Transactions:', transactions.length);
console.log('Deposits:', deposits.length);
console.log('Total Income:', totalIncome);
console.log('Total Expenses:', totalExpenses);
console.log('Roman commissions:', romanComm, '(' + romanDeals + ' deals)');
console.log('Ariel commissions:', arielComm, '(' + arielDeals + ' deals)');

// Write as JS module
const output = `  const defaultData = ${JSON.stringify(defaultData, null, 2)};`;
fs.writeFileSync('generated-data.js', output, 'utf8');
console.log('\nWritten to generated-data.js');
