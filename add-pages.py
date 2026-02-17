#!/usr/bin/env python3
"""Add Income and Expenses pages with advanced filters to index.html and app.js"""

# ===== 1. UPDATE index.html =====
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Add Income and Expenses nav items after Transactions
nav_additions = '''        <a class="nav-item" data-page="income">
          <span class="nav-icon">📈</span> Income
          <span class="nav-badge income-badge">0</span>
        </a>
        <a class="nav-item" data-page="expenses">
          <span class="nav-icon">📉</span> Expenses
          <span class="nav-badge expense-badge">0</span>
        </a>'''

html = html.replace(
    '        <a class="nav-item" data-page="agents">',
    nav_additions + '\n        <a class="nav-item" data-page="agents">'
)

# Add deposit categories to filter options
deposit_cat = '<option value="deposit_15pct">Company 15% Deposit</option>\n              <option value="other">Other</option>'

# Add Income page section (after transactions section)
income_page = '''
        <!-- ============ PAGE: INCOME ============ -->
        <section class="page-section" id="page-income">
          <div class="metrics-grid" style="margin-bottom:24px;">
            <div class="metric-card green">
              <div class="metric-header"><div class="metric-icon">💰</div><span class="metric-label">Total Income</span></div>
              <div class="metric-value" id="income-total">฿0</div>
            </div>
            <div class="metric-card cyan">
              <div class="metric-header"><div class="metric-icon">📋</div><span class="metric-label">Deals Count</span></div>
              <div class="metric-value" id="income-count">0</div>
            </div>
            <div class="metric-card purple">
              <div class="metric-header"><div class="metric-icon">📊</div><span class="metric-label">Avg Deal Size</span></div>
              <div class="metric-value" id="income-avg">฿0</div>
            </div>
          </div>
          <div class="filters-bar advanced-filters">
            <div class="search-input">
              <span class="search-icon">🔍</span>
              <input type="text" id="inc-search" placeholder="Search income...">
            </div>
            <input type="date" class="filter-date" id="inc-date-from" title="From date">
            <input type="date" class="filter-date" id="inc-date-to" title="To date">
            <select class="filter-select" id="inc-cat-filter">
              <option value="all">All Categories</option>
              <option value="commission">Commission</option>
            </select>
            <select class="filter-select" id="inc-agent-filter">
              <option value="all">All Agents</option>
            </select>
            <button class="btn btn-sm btn-secondary" onclick="app.clearIncomeFilters()">✕ Clear</button>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Category</th>
                      <th>Agent</th>
                      <th>Amount</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody id="income-tbody"></tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <!-- ============ PAGE: EXPENSES ============ -->
        <section class="page-section" id="page-expenses">
          <div class="metrics-grid" style="margin-bottom:24px;">
            <div class="metric-card red">
              <div class="metric-header"><div class="metric-icon">💸</div><span class="metric-label">Total Expenses</span></div>
              <div class="metric-value" id="exp-total">฿0</div>
            </div>
            <div class="metric-card amber">
              <div class="metric-header"><div class="metric-icon">🤝</div><span class="metric-label">Agent Commissions</span></div>
              <div class="metric-value" id="exp-commissions">฿0</div>
            </div>
            <div class="metric-card blue">
              <div class="metric-header"><div class="metric-icon">🏢</div><span class="metric-label">Operating Costs</span></div>
              <div class="metric-value" id="exp-operating">฿0</div>
            </div>
            <div class="metric-card cyan">
              <div class="metric-header"><div class="metric-icon">📋</div><span class="metric-label">Entries</span></div>
              <div class="metric-value" id="exp-count">0</div>
            </div>
          </div>
          <div class="filters-bar advanced-filters">
            <div class="search-input">
              <span class="search-icon">🔍</span>
              <input type="text" id="exp-search" placeholder="Search expenses...">
            </div>
            <input type="date" class="filter-date" id="exp-date-from" title="From date">
            <input type="date" class="filter-date" id="exp-date-to" title="To date">
            <select class="filter-select" id="exp-cat-filter">
              <option value="all">All Categories</option>
              <option value="commission_out">Agent Commission</option>
              <option value="office">Office</option>
              <option value="salary">Salary</option>
              <option value="ads">Advertising</option>
              <option value="software">Software</option>
              <option value="transport">Transport</option>
              <option value="deposit_15pct">Company 15%</option>
              <option value="other">Other</option>
            </select>
            <select class="filter-select" id="exp-agent-filter">
              <option value="all">All / By whom</option>
              <option value="Roman">Roman</option>
              <option value="Ariel">Ariel</option>
              <option value="none">Company (no agent)</option>
            </select>
            <button class="btn btn-sm btn-secondary" onclick="app.clearExpenseFilters()">✕ Clear</button>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Category</th>
                      <th>Agent / By</th>
                      <th>Amount</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody id="expenses-tbody"></tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
'''

html = html.replace(
    '        <!-- ============ PAGE: AGENTS ============ -->',
    income_page + '        <!-- ============ PAGE: AGENTS ============ -->'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('index.html updated with Income and Expenses pages')

# ===== 2. UPDATE app.js — add render functions and update navigate =====
with open('app.js', 'r', encoding='utf-8') as f:
    app = f.read()

# Add page titles for income and expenses
app = app.replace(
    "transactions: ['Transactions', 'All income and expenses'],",
    """transactions: ['Transactions', 'All income and expenses'],
      income: ['Income', 'All deals and commissions received'],
      expenses: ['Expenses', 'All company expenses and payouts'],"""
)

# Add navigation handlers for income and expenses
app = app.replace(
    "else if (page === 'reports') renderReports();",
    """else if (page === 'income') renderIncome();
    else if (page === 'expenses') renderExpenses();
    else if (page === 'reports') renderReports();"""
)

# Add render functions before the closing of the IIFE
render_funcs = '''

  // ============ RENDER: INCOME ============
  function renderIncome() {
    let txns = appData.transactions.filter(t => t.type === 'income');
    const search = document.getElementById('inc-search')?.value?.toLowerCase() || '';
    const dateFrom = document.getElementById('inc-date-from')?.value || '';
    const dateTo = document.getElementById('inc-date-to')?.value || '';
    const catFilter = document.getElementById('inc-cat-filter')?.value || 'all';
    const agentFilter = document.getElementById('inc-agent-filter')?.value || 'all';

    if (search) txns = txns.filter(t => t.description.toLowerCase().includes(search));
    if (dateFrom) txns = txns.filter(t => t.date >= dateFrom);
    if (dateTo) txns = txns.filter(t => t.date <= dateTo);
    if (catFilter !== 'all') txns = txns.filter(t => t.category === catFilter);
    if (agentFilter !== 'all') txns = txns.filter(t => t.agent === agentFilter);

    txns.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Metrics
    const total = txns.reduce((s, t) => s + t.amount, 0);
    const el = id => document.getElementById(id);
    el('income-total').textContent = formatCurrency(total);
    el('income-count').textContent = txns.length;
    el('income-avg').textContent = txns.length ? formatCurrency(total / txns.length) : '฿0';

    // Populate agent filter dynamically
    const agentSel = document.getElementById('inc-agent-filter');
    const currentAgent = agentSel.value;
    const agents = [...new Set(appData.transactions.filter(t => t.type === 'income' && t.agent).map(t => t.agent))];
    agentSel.innerHTML = '<option value="all">All Agents</option>' + agents.map(a => `<option value="${a}">${a}</option>`).join('');
    agentSel.value = currentAgent;

    // Badge
    const badge = document.querySelector('[data-page="income"] .income-badge');
    if (badge) badge.textContent = appData.transactions.filter(t => t.type === 'income').length;

    const tbody = document.getElementById('income-tbody');
    if (!txns.length) {
      tbody.innerHTML = '<tr><td colspan="6" class="empty-state"><div class="empty-icon">📭</div><h4>No income found</h4><p>Try adjusting your filters</p></td></tr>';
      return;
    }
    tbody.innerHTML = txns.map(t => `
      <tr>
        <td>${formatDate(t.date)}</td>
        <td>${escapeHtml(t.description)}</td>
        <td><span class="category-badge income">${getCategoryLabel(t.category)}</span></td>
        <td>${escapeHtml(t.agent || '—')}</td>
        <td class="amount-positive">+${formatCurrency(t.amount)}</td>
        <td>
          <div class="action-btns">
            <button class="action-btn" onclick="app.editTransaction(${t.id})" title="Edit">✏️</button>
            <button class="action-btn delete" onclick="app.deleteTransaction(${t.id})" title="Delete">🗑️</button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  // ============ RENDER: EXPENSES ============
  function renderExpenses() {
    let txns = appData.transactions.filter(t => t.type === 'expense');
    const search = document.getElementById('exp-search')?.value?.toLowerCase() || '';
    const dateFrom = document.getElementById('exp-date-from')?.value || '';
    const dateTo = document.getElementById('exp-date-to')?.value || '';
    const catFilter = document.getElementById('exp-cat-filter')?.value || 'all';
    const agentFilter = document.getElementById('exp-agent-filter')?.value || 'all';

    if (search) txns = txns.filter(t => t.description.toLowerCase().includes(search));
    if (dateFrom) txns = txns.filter(t => t.date >= dateFrom);
    if (dateTo) txns = txns.filter(t => t.date <= dateTo);
    if (catFilter !== 'all') txns = txns.filter(t => t.category === catFilter);
    if (agentFilter === 'none') txns = txns.filter(t => !t.agent);
    else if (agentFilter !== 'all') txns = txns.filter(t => t.agent === agentFilter);

    txns.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Metrics
    const total = txns.reduce((s, t) => s + t.amount, 0);
    const commTotal = txns.filter(t => t.category === 'commission_out').reduce((s, t) => s + t.amount, 0);
    const opTotal = total - commTotal;
    const el = id => document.getElementById(id);
    el('exp-total').textContent = formatCurrency(total);
    el('exp-commissions').textContent = formatCurrency(commTotal);
    el('exp-operating').textContent = formatCurrency(opTotal);
    el('exp-count').textContent = txns.length;

    // Badge
    const badge = document.querySelector('[data-page="expenses"] .expense-badge');
    if (badge) badge.textContent = appData.transactions.filter(t => t.type === 'expense').length;

    const tbody = document.getElementById('expenses-tbody');
    if (!txns.length) {
      tbody.innerHTML = '<tr><td colspan="6" class="empty-state"><div class="empty-icon">📭</div><h4>No expenses found</h4><p>Try adjusting your filters</p></td></tr>';
      return;
    }
    tbody.innerHTML = txns.map(t => `
      <tr>
        <td>${formatDate(t.date)}</td>
        <td>${escapeHtml(t.description)}</td>
        <td><span class="category-badge expense">${getCategoryLabel(t.category)}</span></td>
        <td>${escapeHtml(t.agent || '—')}</td>
        <td class="amount-negative">-${formatCurrency(t.amount)}</td>
        <td>
          <div class="action-btns">
            <button class="action-btn" onclick="app.editTransaction(${t.id})" title="Edit">✏️</button>
            <button class="action-btn delete" onclick="app.deleteTransaction(${t.id})" title="Delete">🗑️</button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  function clearIncomeFilters() {
    ['inc-search', 'inc-date-from', 'inc-date-to'].forEach(id => { const e = document.getElementById(id); if (e) e.value = ''; });
    const sel1 = document.getElementById('inc-cat-filter'); if (sel1) sel1.value = 'all';
    const sel2 = document.getElementById('inc-agent-filter'); if (sel2) sel2.value = 'all';
    renderIncome();
  }

  function clearExpenseFilters() {
    ['exp-search', 'exp-date-from', 'exp-date-to'].forEach(id => { const e = document.getElementById(id); if (e) e.value = ''; });
    const sel1 = document.getElementById('exp-cat-filter'); if (sel1) sel1.value = 'all';
    const sel2 = document.getElementById('exp-agent-filter'); if (sel2) sel2.value = 'all';
    renderExpenses();
  }
'''

# Find the return statement that exposes the public API and add new functions
app = app.replace(
    'resetData,',
    'resetData,\n    clearIncomeFilters,\n    clearExpenseFilters,'
)

# Add the render functions before the return statement
app = app.replace(
    '  // ============ INIT ============',
    render_funcs + '\n  // ============ INIT ============'
)

# Add event listeners for the new filters
event_listeners = '''
    // Income filters
    document.getElementById('inc-search')?.addEventListener('input', () => renderIncome());
    document.getElementById('inc-date-from')?.addEventListener('change', () => renderIncome());
    document.getElementById('inc-date-to')?.addEventListener('change', () => renderIncome());
    document.getElementById('inc-cat-filter')?.addEventListener('change', () => renderIncome());
    document.getElementById('inc-agent-filter')?.addEventListener('change', () => renderIncome());

    // Expense filters
    document.getElementById('exp-search')?.addEventListener('input', () => renderExpenses());
    document.getElementById('exp-date-from')?.addEventListener('change', () => renderExpenses());
    document.getElementById('exp-date-to')?.addEventListener('change', () => renderExpenses());
    document.getElementById('exp-cat-filter')?.addEventListener('change', () => renderExpenses());
    document.getElementById('exp-agent-filter')?.addEventListener('change', () => renderExpenses());
'''

app = app.replace(
    "navigate('dashboard');",
    "navigate('dashboard');\n" + event_listeners
)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app)

print('app.js updated with Income and Expenses render functions + filters')
