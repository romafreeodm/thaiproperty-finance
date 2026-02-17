#!/usr/bin/env python3
"""Replace defaultData in app.js with generated data and bump version"""
import re

with open('app.js', 'r', encoding='utf-8') as f:
    app = f.read()

with open('generated-data.js', 'r', encoding='utf-8') as f:
    new_data = f.read().strip()

# Find and replace defaultData block (from "const defaultData = {" to "};\n")
pattern = r'  const defaultData = \{.*?\n  \};'
replacement = new_data
app_new = re.sub(pattern, replacement, app, count=1, flags=re.DOTALL)

# Bump DATA_VERSION
app_new = app_new.replace('const DATA_VERSION = 2;', 'const DATA_VERSION = 3;')

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app_new)

# Verify
lines = app_new.count('\n')
has_default = 'const defaultData' in app_new
has_v3 = 'DATA_VERSION = 3' in app_new
print(f'app.js updated: {lines} lines, hasDefaultData={has_default}, version=3={has_v3}')
