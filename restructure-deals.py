#!/usr/bin/env python3
"""Restructure deals into 4 color-coded categories with owners/developers databases"""
import re, json

# Deal classification map: deal name pattern → (dealCategory, extra fields)
DEAL_CLASSIFICATION = {
    # --- Developer Sales (blue) ---
    'Dusit': ('developer_sale', {'projectName': 'Pristine Park 3', 'unitNumber': '', 'developerName': ''}),
    'Park Royal': ('developer_sale', {'projectName': 'Park Royal 3', 'unitNumber': '', 'developerName': ''}),
    'Arom Jomtien': ('developer_sale', {'projectName': 'Arom Jomtien', 'unitNumber': '', 'developerName': ''}),
    'Panora 3004': ('developer_sale', {'projectName': 'Panora', 'unitNumber': '3004', 'developerName': ''}),
    'Panora 3104': ('developer_sale', {'projectName': 'Panora', 'unitNumber': '3104', 'developerName': ''}),
    'Cloud deal': ('developer_sale', {'projectName': 'Cloud', 'unitNumber': '', 'developerName': ''}),
    'Rizin deal 1bedroom': ('developer_sale', {'projectName': 'Rizin', 'unitNumber': 'Floor 6-7 (1BR)', 'developerName': ''}),
    'Rizin deal 2 bedroom': ('developer_sale', {'projectName': 'Rizin', 'unitNumber': '2BR', 'developerName': ''}),
    'Rizin (Dorit)': ('developer_sale', {'projectName': 'Rizin', 'unitNumber': '', 'developerName': ''}),
    'Embassy life 2': ('developer_sale', {'projectName': 'Embassy Life', 'unitNumber': '2 Bedroom', 'developerName': ''}),
    'Embassy life 1': ('developer_sale', {'projectName': 'Embassy Life', 'unitNumber': '1 Bedroom', 'developerName': ''}),
    'Zenit Eli': ('developer_sale', {'projectName': 'Zenit', 'unitNumber': 'B426/B427', 'developerName': ''}),
    'Zenit Amir': ('developer_sale', {'projectName': 'Zenit', 'unitNumber': '', 'developerName': ''}),
    'Aquarous B0503': ('developer_sale', {'projectName': 'Aquarous', 'unitNumber': 'B0503', 'developerName': ''}),
    'Aquarous (Roi': ('developer_sale', {'projectName': 'Aquarous', 'unitNumber': '', 'developerName': ''}),
    'Evgeniy Soskin': ('developer_sale', {'projectName': '', 'unitNumber': '', 'developerName': ''}),
    'Avenue Boutiqe': ('developer_sale', {'projectName': 'Avenue Boutique', 'unitNumber': '', 'developerName': ''}),
    'Seaspire': ('developer_sale', {'projectName': 'Seaspire', 'unitNumber': '', 'developerName': ''}),
    'Amir (Zenith': ('developer_sale', {'projectName': 'Zenith', 'unitNumber': '', 'developerName': ''}),

    # --- Secondary Market (green) ---
    'PTY': ('secondary_sale', {'propertyName': 'PTY', 'ownerName': ''}),
    'The Palm': ('secondary_sale', {'propertyName': 'The Palm', 'ownerName': ''}),
    'Grand Coribean': ('secondary_sale', {'propertyName': 'Grand Coribean C804', 'ownerName': ''}),
    'Gold 1': ('secondary_sale', {'propertyName': 'Gold 1', 'ownerName': ''}),
    'Haim & Sason': ('secondary_sale', {'propertyName': '', 'ownerName': ''}),
    'TT3': ('secondary_sale', {'propertyName': 'TT3', 'ownerName': ''}),
    'Samui Villa': ('secondary_sale', {'propertyName': 'Samui Villa', 'ownerName': ''}),
    'Elis Company': ('secondary_sale', {'propertyName': '', 'ownerName': ''}),

    # --- Rental (amber) ---
    'Rent Olympus': ('rental', {'propertyName': 'Olympus', 'tenantName': '', 'ownerName': '', 'rentPeriod': '', 'monthlyRent': 0}),
    'Rent CGT': ('rental', {'propertyName': 'CGT', 'tenantName': '', 'ownerName': '', 'rentPeriod': '', 'monthlyRent': 0}),

    # --- Services (purple) ---
    'Lawyer Aee': ('service', {'serviceType': 'legal'}),
    'lawyer Haim': ('service', {'serviceType': 'legal'}),
    'visa Israel': ('service', {'serviceType': 'visa'}),
    'Lawyer Alen': ('service', {'serviceType': 'legal'}),
    'lawyer Nadin': ('service', {'serviceType': 'legal'}),
    'Visa comm': ('service', {'serviceType': 'visa'}),
    'Igal Cohen': ('service', {'serviceType': 'other'}),
}

# Also handle Park Royal Extra Commission
EXTRA_PATTERNS = {
    'Extra Commission': ('developer_sale', {'projectName': 'Park Royal 3', 'unitNumber': '', 'developerName': ''}),
}


def classify_deal(deal_name):
    """Classify a deal by matching its name against known patterns"""
    for pattern, (cat, fields) in DEAL_CLASSIFICATION.items():
        if pattern.lower() in deal_name.lower():
            return cat, dict(fields)
    for pattern, (cat, fields) in EXTRA_PATTERNS.items():
        if pattern.lower() in deal_name.lower():
            return cat, dict(fields)
    # Default: service/other
    return 'service', {'serviceType': 'other'}


# ---- Read app.js and modify deals ----
with open('app.js', 'r', encoding='utf-8') as f:
    app = f.read()

# Extract the deals array from defaultData
deals_start = app.find('"deals": [')
if deals_start == -1:
    print('ERROR: Could not find deals array')
    exit(1)

# Find the matching closing bracket
bracket_count = 0
i = app.index('[', deals_start)
start_i = i
for i in range(start_i, len(app)):
    if app[i] == '[': bracket_count += 1
    elif app[i] == ']': bracket_count -= 1
    if bracket_count == 0: break

deals_json = app[start_i:i+1]
deals = json.loads(deals_json)

print(f'Found {len(deals)} deals to classify')

# Classify each deal
stats = {'developer_sale': 0, 'secondary_sale': 0, 'rental': 0, 'service': 0}
for d in deals:
    cat, extra_fields = classify_deal(d['name'])
    d['dealCategory'] = cat

    # All categories get these base empty fields for manual fill
    if cat == 'developer_sale':
        d.setdefault('projectName', extra_fields.get('projectName', ''))
        d.setdefault('unitNumber', extra_fields.get('unitNumber', ''))
        d.setdefault('developerName', extra_fields.get('developerName', ''))
        d.setdefault('developerId', None)
        d['projectName'] = extra_fields.get('projectName', d.get('projectName', ''))
        d['unitNumber'] = extra_fields.get('unitNumber', d.get('unitNumber', ''))
    elif cat == 'secondary_sale':
        d.setdefault('propertyName', extra_fields.get('propertyName', ''))
        d.setdefault('ownerName', extra_fields.get('ownerName', ''))
        d.setdefault('ownerId', None)
        d['propertyName'] = extra_fields.get('propertyName', d.get('propertyName', ''))
    elif cat == 'rental':
        d.setdefault('propertyName', extra_fields.get('propertyName', ''))
        d.setdefault('tenantName', '')
        d.setdefault('ownerName', '')
        d.setdefault('ownerId', None)
        d.setdefault('rentPeriod', '')
        d.setdefault('monthlyRent', 0)
        d['propertyName'] = extra_fields.get('propertyName', d.get('propertyName', ''))
    elif cat == 'service':
        d.setdefault('serviceType', extra_fields.get('serviceType', 'other'))
        d['serviceType'] = extra_fields.get('serviceType', d.get('serviceType', 'other'))

    stats[cat] += 1
    icon = {'developer_sale': '🏗️', 'secondary_sale': '🏠', 'rental': '🏡', 'service': '⚖️'}
    print(f"  {icon[cat]} {d['name'][:55]:55s} → {cat}")

print(f"\nStats: Developer={stats['developer_sale']}, Secondary={stats['secondary_sale']}, Rental={stats['rental']}, Service={stats['service']}")

# Replace the deals array in app.js
new_deals_json = json.dumps(deals, indent=4, ensure_ascii=False)
app = app[:start_i] + new_deals_json + app[i+1:]

# Add owners + developers databases if not present
if '"owners"' not in app:
    owners_devs = """,
    "owners": [],
    "developers": []"""
    app = app.replace('"nextId":', owners_devs + ',\n    "nextId":')

# Bump DATA_VERSION
app = re.sub(r'const DATA_VERSION = \d+;', 'const DATA_VERSION = 5;', app)

# ---- Now replace renderDeals function ----
render_old_start = app.find('// ============ RENDER: DEALS ============')
render_old_end = app.find('function clearDealsFilters()')
if render_old_start != -1 and render_old_end != -1:
    new_render = '''// ============ RENDER: DEALS ============
  function renderDeals() {
    const grid = document.getElementById('deals-grid');
    if (!grid) return;
    let deals = appData.deals || [];

    // Filters
    const search = document.getElementById('deals-search')?.value?.toLowerCase() || '';
    const catFilter = document.getElementById('deals-cat-filter')?.value || 'all';
    const statusFilter = document.getElementById('deals-status-filter')?.value || 'all';

    if (search) deals = deals.filter(d => {
      const searchFields = [d.name, d.client, d.projectName, d.propertyName, d.tenantName, d.ownerName, d.developerName].filter(Boolean).join(' ').toLowerCase();
      return searchFields.includes(search);
    });
    if (catFilter !== 'all') deals = deals.filter(d => d.dealCategory === catFilter);
    if (statusFilter !== 'all') deals = deals.filter(d => d.status === statusFilter);

    // Sort by date desc
    deals.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

    // Summary metrics
    const completed = deals.filter(d => d.status === 'completed');
    const totalIncome = completed.reduce((s, d) => s + d.income, 0);
    const totalPropValue = deals.reduce((s, d) => s + (d.propertyPrice || 0), 0);
    const el = id => document.getElementById(id);
    if (el('deals-total-income')) el('deals-total-income').textContent = formatCurrency(totalIncome);
    if (el('deals-count')) el('deals-count').textContent = deals.length;
    if (el('deals-prop-value')) el('deals-prop-value').textContent = formatCurrency(totalPropValue);

    // Update sub-tab counts
    const allDeals = appData.deals || [];
    const tabCounts = {
      all: allDeals.length,
      developer_sale: allDeals.filter(d => d.dealCategory === 'developer_sale').length,
      secondary_sale: allDeals.filter(d => d.dealCategory === 'secondary_sale').length,
      rental: allDeals.filter(d => d.dealCategory === 'rental').length,
      service: allDeals.filter(d => d.dealCategory === 'service').length,
    };
    document.querySelectorAll('.deal-tab').forEach(tab => {
      const cat = tab.dataset.dealcat;
      const countEl = tab.querySelector('.deal-tab-count');
      if (countEl && tabCounts[cat] !== undefined) countEl.textContent = tabCounts[cat];
      tab.classList.toggle('active', cat === catFilter);
    });

    // Badge
    const badge = document.querySelector('[data-page="deals"] .deals-badge');
    if (badge) badge.textContent = allDeals.length;

    if (!deals.length) {
      grid.innerHTML = '<div class="empty-state"><div class="empty-icon">🏠</div><h4>No deals found</h4><p>Try adjusting filters</p></div>';
      return;
    }

    const catConfig = {
      developer_sale: { icon: '🏗️', label: 'Developer Sale', color: 'blue' },
      secondary_sale: { icon: '🏠', label: 'Secondary Market', color: 'green' },
      rental: { icon: '🏡', label: 'Rental', color: 'amber' },
      service: { icon: '⚖️', label: 'Service', color: 'purple' },
    };

    grid.innerHTML = deals.map(d => {
      const conf = catConfig[d.dealCategory] || catConfig.service;
      const feesHtml = (d.fees || []).map(f => `<div class="deal-line"><span>${escapeHtml(f.name)}</span><span class="amount-negative">-${formatCurrency(f.amount)}</span></div>`).join('');
      const taxesHtml = (d.taxes || []).map(t => `<div class="deal-line"><span>${escapeHtml(t.name)}</span><span class="amount-negative">-${formatCurrency(t.amount)}</span></div>`).join('');
      const otherHtml = (d.otherCommissions || []).map(c => `<div class="deal-line"><span>${escapeHtml(c.name)}</span><span class="amount-negative">-${formatCurrency(c.amount)}</span></div>`).join('');
      const statusBadge = d.status === 'completed'
        ? '<span class="status-badge completed">✅ Completed</span>'
        : '<span class="status-badge pending">⏳ Pending</span>';

      // Category-specific info block
      let specificHtml = '';
      if (d.dealCategory === 'developer_sale') {
        specificHtml = `
          <div class="deal-info-item"><span class="deal-info-label">Project</span><span class="deal-info-value">${d.projectName ? escapeHtml(d.projectName) : '<em class=\\"empty-field\\">—</em>'}</span></div>
          <div class="deal-info-item"><span class="deal-info-label">Unit #</span><span class="deal-info-value">${d.unitNumber ? escapeHtml(d.unitNumber) : '<em class=\\"empty-field\\">—</em>'}</span></div>
          <div class="deal-info-item"><span class="deal-info-label">Developer</span><span class="deal-info-value">${d.developerName ? escapeHtml(d.developerName) : '<em class=\\"empty-field\\">—</em>'}</span></div>
        `;
      } else if (d.dealCategory === 'secondary_sale') {
        specificHtml = `
          <div class="deal-info-item"><span class="deal-info-label">Property</span><span class="deal-info-value">${d.propertyName ? escapeHtml(d.propertyName) : '<em class=\\"empty-field\\">—</em>'}</span></div>
          <div class="deal-info-item"><span class="deal-info-label">Owner</span><span class="deal-info-value">${d.ownerName ? escapeHtml(d.ownerName) : '<em class=\\"empty-field\\">—</em>'}</span></div>
        `;
      } else if (d.dealCategory === 'rental') {
        specificHtml = `
          <div class="deal-info-item"><span class="deal-info-label">Property</span><span class="deal-info-value">${d.propertyName ? escapeHtml(d.propertyName) : '<em class=\\"empty-field\\">—</em>'}</span></div>
          <div class="deal-info-item"><span class="deal-info-label">Tenant</span><span class="deal-info-value">${d.tenantName ? escapeHtml(d.tenantName) : '<em class=\\"empty-field\\">—</em>'}</span></div>
          <div class="deal-info-item"><span class="deal-info-label">Owner</span><span class="deal-info-value">${d.ownerName ? escapeHtml(d.ownerName) : '<em class=\\"empty-field\\">—</em>'}</span></div>
          <div class="deal-info-item"><span class="deal-info-label">Rent Period</span><span class="deal-info-value">${d.rentPeriod ? escapeHtml(d.rentPeriod) : '<em class=\\"empty-field\\">—</em>'}</span></div>
        `;
      } else {
        const stLabel = {legal: '⚖️ Legal', visa: '✈️ Visa', consultation: '💼 Consultation', other: '📋 Other'}[d.serviceType] || '📋 Other';
        specificHtml = `
          <div class="deal-info-item"><span class="deal-info-label">Service Type</span><span class="deal-info-value">${stLabel}</span></div>
        `;
      }

      return `
        <div class="deal-card ${d.status} deal-cat-${conf.color}">
          <div class="deal-card-header">
            <div class="deal-card-title">
              <span class="deal-cat-icon">${conf.icon}</span>
              <div>
                <h4>${escapeHtml(d.name)}</h4>
                <div class="deal-meta">
                  ${d.date ? formatDate(d.date) : '<em>No date</em>'}
                  <span class="deal-cat-badge deal-cat-badge-${conf.color}">${conf.label}</span>
                  ${d.paymentMethod ? ' · ' + escapeHtml(d.paymentMethod) : ''}
                </div>
              </div>
            </div>
            ${statusBadge}
          </div>

          <div class="deal-card-body">
            <div class="deal-info-grid">
              <div class="deal-info-item"><span class="deal-info-label">Client</span><span class="deal-info-value">${d.client ? escapeHtml(d.client) : '<em class=\\"empty-field\\">—</em>'}</span></div>
              <div class="deal-info-item"><span class="deal-info-label">Property Price</span><span class="deal-info-value">${d.propertyPrice ? formatCurrency(d.propertyPrice) : '<em class=\\"empty-field\\">—</em>'}</span></div>
              <div class="deal-info-item"><span class="deal-info-label">Commission %</span><span class="deal-info-value">${d.commissionPct ? d.commissionPct + '%' : '<em class=\\"empty-field\\">—</em>'}</span></div>
              <div class="deal-info-item highlight-${conf.color}"><span class="deal-info-label">Total Commission</span><span class="deal-info-value amount-positive">${d.income ? '+' + formatCurrency(d.income) : '<em class=\\"empty-field\\">—</em>'}</span></div>
              ${specificHtml}
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
              <div class="deal-net ${(d.netReceived || 0) >= 0 ? 'positive' : 'negative'}">
                <span>Net Received</span>
                <span class="deal-net-value">${d.income ? formatCurrency(d.netReceived || 0) : '—'}</span>
              </div>
            </div>
          </div>
          ${d.comment ? '<div class="deal-comment">💬 ' + escapeHtml(d.comment) + '</div>' : ''}
        </div>
      `;
    }).join('');
  }

  '''
    app = app[:render_old_start] + new_render + app[render_old_end:]

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app)
print('\napp.js updated with categorized deals + owners/developers DBs')


# ---- Update index.html ----
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace Deals page section with enhanced version with sub-tabs
old_deals_section = html[html.find('<!-- ============ PAGE: DEALS ============ -->'):html.find('<!-- ============ PAGE: AGENTS ============ -->')]
new_deals_section = '''<!-- ============ PAGE: DEALS ============ -->
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

          <!-- Deal Category Sub-Tabs -->
          <div class="deal-tabs" style="margin-bottom:20px;">
            <button class="deal-tab active" data-dealcat="all" onclick="document.getElementById('deals-cat-filter').value='all'; app.renderDeals();">
              📊 All <span class="deal-tab-count">0</span>
            </button>
            <button class="deal-tab deal-tab-blue" data-dealcat="developer_sale" onclick="document.getElementById('deals-cat-filter').value='developer_sale'; app.renderDeals();">
              🏗️ Developer <span class="deal-tab-count">0</span>
            </button>
            <button class="deal-tab deal-tab-green" data-dealcat="secondary_sale" onclick="document.getElementById('deals-cat-filter').value='secondary_sale'; app.renderDeals();">
              🏠 Secondary <span class="deal-tab-count">0</span>
            </button>
            <button class="deal-tab deal-tab-amber" data-dealcat="rental" onclick="document.getElementById('deals-cat-filter').value='rental'; app.renderDeals();">
              🏡 Rental <span class="deal-tab-count">0</span>
            </button>
            <button class="deal-tab deal-tab-purple" data-dealcat="service" onclick="document.getElementById('deals-cat-filter').value='service'; app.renderDeals();">
              ⚖️ Services <span class="deal-tab-count">0</span>
            </button>
          </div>

          <div class="filters-bar advanced-filters" style="margin-bottom:24px;">
            <div class="search-input">
              <span class="search-icon">🔍</span>
              <input type="text" id="deals-search" placeholder="Search deals, clients, projects...">
            </div>
            <select class="filter-select" id="deals-cat-filter" style="display:none;">
              <option value="all">All Types</option>
              <option value="developer_sale">Developer</option>
              <option value="secondary_sale">Secondary</option>
              <option value="rental">Rental</option>
              <option value="service">Service</option>
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
html = html.replace(old_deals_section, new_deals_section)

# Add Developers and Owners nav items
if 'data-page="developers"' not in html:
    html = html.replace(
        '        <a class="nav-item" data-page="reports">',
        '''        <a class="nav-item" data-page="developers">
          <span class="nav-icon">🏗️</span> Developers
          <span class="nav-badge developers-badge">0</span>
        </a>
        <a class="nav-item" data-page="owners">
          <span class="nav-icon">👤</span> Owners
          <span class="nav-badge owners-badge">0</span>
        </a>
        <a class="nav-item" data-page="reports">'''
    )

# Add Developers and Owners page sections
if 'page-developers' not in html:
    reports_marker = '        <!-- ============ PAGE: REPORTS ============ -->'
    devs_owners_pages = '''        <!-- ============ PAGE: DEVELOPERS ============ -->
        <section class="page-section" id="page-developers">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
            <p style="color:var(--text-muted); font-size:14px;">Database of property developers and their projects</p>
          </div>
          <div class="developers-grid" id="developers-grid">
            <div class="empty-state">
              <div class="empty-icon">🏗️</div>
              <h4>No developers added yet</h4>
              <p>Developer profiles will be linked to deals automatically</p>
            </div>
          </div>
        </section>

        <!-- ============ PAGE: OWNERS ============ -->
        <section class="page-section" id="page-owners">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
            <p style="color:var(--text-muted); font-size:14px;">Database of property owners</p>
          </div>
          <div class="owners-grid" id="owners-grid">
            <div class="empty-state">
              <div class="empty-icon">👤</div>
              <h4>No owners added yet</h4>
              <p>Owner profiles will be linked to deals and properties</p>
            </div>
          </div>
        </section>

        '''
    html = html.replace(reports_marker, devs_owners_pages + reports_marker)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('index.html updated with sub-tabs, developers and owners pages')

# Add renderDeals to public API if not already exposed
with open('app.js', 'r', encoding='utf-8') as f:
    app = f.read()

if 'renderDeals,' not in app:
    app = app.replace('clearDealsFilters,', 'renderDeals,\n    clearDealsFilters,')
    with open('app.js', 'w', encoding='utf-8') as f:
        f.write(app)
    print('Exposed renderDeals in public API')

# Also add navigate entries for developers/owners
with open('app.js', 'r', encoding='utf-8') as f:
    app = f.read()

if "'developers'" not in app or "developers:" not in app:
    app = app.replace(
        "reports: ['Reports', 'Financial reports and analytics'],",
        "developers: ['Developers', 'Property developers database'],\n      owners: ['Owners', 'Property owners database'],\n      reports: ['Reports', 'Financial reports and analytics'],"
    )
    # Add render calls
    app = app.replace(
        "else if (page === 'reports') renderReports();",
        "else if (page === 'developers') renderDevelopers();\n    else if (page === 'owners') renderOwners();\n    else if (page === 'reports') renderReports();"
    )

    # Add render functions
    render_devs_owners = '''
  // ============ RENDER: DEVELOPERS ============
  function renderDevelopers() {
    const grid = document.getElementById('developers-grid');
    if (!grid) return;
    const devs = appData.developers || [];
    const badge = document.querySelector('.developers-badge');
    if (badge) badge.textContent = devs.length;
    if (!devs.length) {
      grid.innerHTML = '<div class="empty-state"><div class="empty-icon">🏗️</div><h4>No developers added yet</h4><p>Developer profiles will be linked to deals automatically</p></div>';
      return;
    }
    grid.innerHTML = devs.map(d => `
      <div class="agent-card">
        <div class="agent-avatar" style="background:var(--accent-blue-glow);color:var(--accent-blue);">${(d.name || '?')[0]}</div>
        <h4>${escapeHtml(d.name)}</h4>
        <div class="agent-role">${d.projects ? d.projects.join(', ') : '—'}</div>
        <div class="agent-stats">
          <div class="agent-stat"><span class="stat-label">Contact</span><span class="stat-value">${d.contactPerson || '—'}</span></div>
          <div class="agent-stat"><span class="stat-label">Comm %</span><span class="stat-value">${d.commissionRate || '—'}</span></div>
        </div>
      </div>
    `).join('');
  }

  // ============ RENDER: OWNERS ============
  function renderOwners() {
    const grid = document.getElementById('owners-grid');
    if (!grid) return;
    const owners = appData.owners || [];
    const badge = document.querySelector('.owners-badge');
    if (badge) badge.textContent = owners.length;
    if (!owners.length) {
      grid.innerHTML = '<div class="empty-state"><div class="empty-icon">👤</div><h4>No owners added yet</h4><p>Owner profiles will be linked to deals and properties</p></div>';
      return;
    }
    grid.innerHTML = owners.map(o => `
      <div class="agent-card">
        <div class="agent-avatar" style="background:var(--accent-green-glow);color:var(--accent-green);">${(o.name || '?')[0]}</div>
        <h4>${escapeHtml(o.name)}</h4>
        <div class="agent-role">${o.properties ? o.properties.join(', ') : '—'}</div>
        <div class="agent-stats">
          <div class="agent-stat"><span class="stat-label">Phone</span><span class="stat-value">${o.phone || '—'}</span></div>
          <div class="agent-stat"><span class="stat-label">Email</span><span class="stat-value">${o.email || '—'}</span></div>
        </div>
      </div>
    `).join('');
  }

'''
    # Insert before renderDeals
    app = app.replace('// ============ RENDER: DEALS ============', render_devs_owners + '  // ============ RENDER: DEALS ============')

    with open('app.js', 'w', encoding='utf-8') as f:
        f.write(app)
    print('Added navigate entries and render functions for Developers/Owners')

print('\\n✅ All done!')
