// ============================================
// ThaiProperty Finance — Main Application
// ============================================

(function () {
  'use strict';

  // ============ DATA STORE ============
  const STORAGE_KEY = 'thaiproperty_finance_data';
  const DATA_VERSION_KEY = 'thaiproperty_data_version';
  const DATA_VERSION = 5; // Bump this when defaultData changes

  const defaultData = window.defaultData || {
    "transactions": [
      {
        "id": 1,
        "date": "2025-02-01",
        "type": "income",
        "category": "commission",
        "description": "Comission from Lawyer Aee (Shahar) (2,000 THB property)",
        "amount": 2000.0,
        "agent": ""
      },
      {
        "id": 2,
        "date": "2025-02-05",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 1000.0,
        "agent": "Roman"
      },
      {
        "id": 3,
        "date": "2025-02-05",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S.",
        "amount": 1000.0,
        "agent": "Ariel"
      },
      {
        "id": 4,
        "date": "2025-03-25",
        "type": "income",
        "category": "commission",
        "description": "Comission Dusit (Shahar) Pristine Park 3 (3,506,000 THB property)",
        "amount": 272083.0,
        "agent": ""
      },
      {
        "id": 5,
        "date": "2025-03-25",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 115636.0,
        "agent": "Roman"
      },
      {
        "id": 6,
        "date": "2025-03-25",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S.",
        "amount": 115636.0,
        "agent": "Ariel"
      },
      {
        "id": 7,
        "date": "2025-03-30",
        "type": "income",
        "category": "commission",
        "description": "Commision from lawyer Haim & Sason (Contract review) (6,000 THB property)",
        "amount": 6000.0,
        "agent": ""
      },
      {
        "id": 8,
        "date": "2025-04-25",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 3000.0,
        "agent": "Roman"
      },
      {
        "id": 9,
        "date": "2025-04-25",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S.",
        "amount": 3000.0,
        "agent": "Ariel"
      },
      {
        "id": 10,
        "date": "2025-06-30",
        "type": "income",
        "category": "commission",
        "description": "Rent Olympus (3,928 THB property)",
        "amount": 3928.0,
        "agent": ""
      },
      {
        "id": 11,
        "date": "2025-06-30",
        "type": "income",
        "category": "commission",
        "description": "Rent CGT (2,910 THB property)",
        "amount": 2910.0,
        "agent": ""
      },
      {
        "id": 12,
        "date": "2025-06-30",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 1338.0,
        "agent": "Roman"
      },
      {
        "id": 13,
        "date": "2025-06-30",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S.",
        "amount": 5500.0,
        "agent": "Ariel"
      },
      {
        "id": 14,
        "date": "2025-07-01",
        "type": "income",
        "category": "commission",
        "description": "Commision (Igal Cohen) Park Royal 3 (4,000,000 THB property)",
        "amount": 96250.0,
        "agent": ""
      },
      {
        "id": 15,
        "date": "2025-07-02",
        "type": "income",
        "category": "commission",
        "description": "Commision (Igal Cohen) Park Royal 3 (Extra Commission)",
        "amount": 150000.0,
        "agent": ""
      },
      {
        "id": 16,
        "date": "2025-07-03",
        "type": "expense",
        "category": "commission_out",
        "description": "Paid maintanace fee",
        "amount": 12505.0,
        "agent": ""
      },
      {
        "id": 17,
        "date": "2025-07-04",
        "type": "expense",
        "category": "other",
        "description": "Commision Yossef Ben David",
        "amount": 32083.0,
        "agent": ""
      },
      {
        "id": 18,
        "date": "2025-07-05",
        "type": "expense",
        "category": "commission_out",
        "description": "Laywer fee",
        "amount": 1000.0,
        "agent": ""
      },
      {
        "id": 19,
        "date": "2025-07-07",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 85282.0,
        "agent": "Roman"
      },
      {
        "id": 20,
        "date": "2025-07-08",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S.",
        "amount": 85281.0,
        "agent": "Ariel"
      },
      {
        "id": 21,
        "date": "2025-07-08",
        "type": "income",
        "category": "commission",
        "description": "Comission visa Israel (Eden) (9,000 THB property)",
        "amount": 9000.0,
        "agent": ""
      },
      {
        "id": 22,
        "date": "2025-07-08",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 4500.0,
        "agent": "Roman"
      },
      {
        "id": 23,
        "date": "2025-07-08",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S.",
        "amount": 4500.0,
        "agent": "Ariel"
      },
      {
        "id": 24,
        "date": "2025-08-18",
        "type": "income",
        "category": "commission",
        "description": "Comission Arom Jomtien (Dov) (12,636,000 THB property)",
        "amount": 736078.0,
        "agent": ""
      },
      {
        "id": 25,
        "date": "2025-08-18",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 312834.0,
        "agent": "Roman"
      },
      {
        "id": 26,
        "date": "2025-08-18",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S.",
        "amount": 312833.0,
        "agent": "Ariel"
      },
      {
        "id": 27,
        "date": "2025-08-25",
        "type": "income",
        "category": "commission",
        "description": "Comission Eli Ezra (Panora 3004) (6,450,000 THB property)",
        "amount": 500520.0,
        "agent": ""
      },
      {
        "id": 28,
        "date": "2025-08-25",
        "type": "expense",
        "category": "other",
        "description": "Accesories fro Eli",
        "amount": 49800.0,
        "agent": ""
      },
      {
        "id": 29,
        "date": "2025-08-25",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 191556.0,
        "agent": "Roman"
      },
      {
        "id": 30,
        "date": "2025-08-25",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S.",
        "amount": 191556.0,
        "agent": "Ariel"
      },
      {
        "id": 31,
        "date": "2025-08-25",
        "type": "income",
        "category": "commission",
        "description": "Comission Gold 1 (THB 53500) (53,500 THB property)",
        "amount": 53500.0,
        "agent": ""
      },
      {
        "id": 32,
        "date": "2025-08-25",
        "type": "expense",
        "category": "other",
        "description": "Withholding tax 5%",
        "amount": 2517.0,
        "agent": ""
      },
      {
        "id": 33,
        "date": "2025-08-25",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S. GOLD 1 THB",
        "amount": 43686.0,
        "agent": "Ariel"
      },
      {
        "id": 34,
        "date": "2025-08-25",
        "type": "income",
        "category": "commission",
        "description": "Lawyer Alen Will Agreement (2,000 THB property)",
        "amount": 2000.0,
        "agent": ""
      },
      {
        "id": 35,
        "date": "2025-08-25",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 1000.0,
        "agent": "Roman"
      },
      {
        "id": 36,
        "date": "2025-08-25",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S.",
        "amount": 1000.0,
        "agent": "Ariel"
      },
      {
        "id": 37,
        "date": "2025-09-01",
        "type": "income",
        "category": "commission",
        "description": "Alen (Grand Coribean C804)",
        "amount": 60750.0,
        "agent": ""
      },
      {
        "id": 38,
        "date": "2025-09-01",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 30375.0,
        "agent": "Roman"
      },
      {
        "id": 39,
        "date": "2025-09-01",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S.",
        "amount": 30375.0,
        "agent": "Ariel"
      },
      {
        "id": 40,
        "date": "2025-10-05",
        "type": "income",
        "category": "commission",
        "description": "Comission Aquarous B0503 (4,475,000 THB property)",
        "amount": 347195.0,
        "agent": ""
      },
      {
        "id": 41,
        "date": "2025-10-07",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 98371.0,
        "agent": "Roman"
      },
      {
        "id": 42,
        "date": "2025-10-08",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S.",
        "amount": 98371.0,
        "agent": "Ariel"
      },
      {
        "id": 43,
        "date": "2025-10-09",
        "type": "expense",
        "category": "other",
        "description": "Comission to Roy A.",
        "amount": 98374.0,
        "agent": ""
      },
      {
        "id": 44,
        "date": "2025-10-05",
        "type": "income",
        "category": "commission",
        "description": "Comission Eli Ezra (Panora 3104) (6,350,000 THB property)",
        "amount": 358899.0,
        "agent": ""
      },
      {
        "id": 45,
        "date": "2025-10-07",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 140207.0,
        "agent": "Roman"
      },
      {
        "id": 46,
        "date": "2025-10-08",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S.",
        "amount": 140207.0,
        "agent": "Ariel"
      },
      {
        "id": 47,
        "date": "2025-10-09",
        "type": "expense",
        "category": "other",
        "description": "Accesories fro Eli",
        "amount": 29000.0,
        "agent": ""
      },
      {
        "id": 48,
        "date": "2025-10-24",
        "type": "income",
        "category": "commission",
        "description": "Comission Cloud deal with Jeassy 2,35 M (2,000,000 THB property)",
        "amount": 102500.0,
        "agent": ""
      },
      {
        "id": 49,
        "date": "2025-10-24",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 43560.0,
        "agent": "Roman"
      },
      {
        "id": 50,
        "date": "2025-10-24",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S.",
        "amount": 43565.0,
        "agent": "Ariel"
      },
      {
        "id": 51,
        "date": "2025-10-24",
        "type": "income",
        "category": "commission",
        "description": "Comission Rizin deal 1bedroom ( 6 and 7 floor) 2,5 M (2,500,000 THB property)",
        "amount": 150466.0,
        "agent": ""
      },
      {
        "id": 52,
        "date": "2025-10-24",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 75233.0,
        "agent": "Roman"
      },
      {
        "id": 53,
        "date": "2025-10-24",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S.",
        "amount": 75233.0,
        "agent": "Ariel"
      },
      {
        "id": 54,
        "date": "2025-10-27",
        "type": "income",
        "category": "commission",
        "description": "Comission PTY (Haim) (7,550,000 THB property)",
        "amount": 228000.0,
        "agent": ""
      },
      {
        "id": 55,
        "date": "2025-10-27",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 96900.0,
        "agent": "Roman"
      },
      {
        "id": 56,
        "date": "2025-10-27",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S. (Give cash to Ariel 100K (100000-96900=3100)",
        "amount": 96900.0,
        "agent": "Ariel"
      },
      {
        "id": 57,
        "date": "2025-11-05",
        "type": "income",
        "category": "commission",
        "description": "Comission Rizin deal 2 bedroom deal 2,85 M. (2,850,000 THB property)",
        "amount": 183300.0,
        "agent": ""
      },
      {
        "id": 58,
        "date": "2025-11-05",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 91650.0,
        "agent": "Roman"
      },
      {
        "id": 59,
        "date": "2025-11-05",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S.",
        "amount": 91650.0,
        "agent": "Ariel"
      },
      {
        "id": 60,
        "date": "2025-09-01",
        "type": "income",
        "category": "commission",
        "description": "Comission Haim & Sason (6,044,000 THB property)",
        "amount": 142447.0,
        "agent": ""
      },
      {
        "id": 61,
        "date": "2025-09-01",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S. (Stay in company)",
        "amount": 60539.98,
        "agent": "Roman"
      },
      {
        "id": 62,
        "date": "2025-09-01",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S. (Stay in company)",
        "amount": 60539.98,
        "agent": "Ariel"
      },
      {
        "id": 63,
        "date": "2025-09-01",
        "type": "income",
        "category": "commission",
        "description": "Comission Zenit Eli B426\B427 (5,800,000 THB property)",
        "amount": 266542.0,
        "agent": ""
      },
      {
        "id": 64,
        "date": "2025-09-01",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S. (Stay in company)",
        "amount": 113280.35,
        "agent": "Roman"
      },
      {
        "id": 65,
        "date": "2025-09-01",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S. (Stay in company)",
        "amount": 113280.35,
        "agent": "Ariel"
      },
      {
        "id": 66,
        "date": "2026-01-14",
        "type": "income",
        "category": "commission",
        "description": "Comission Avenue Boutiqe (Nati) (3,380,000 THB property)",
        "amount": 198680.0,
        "agent": ""
      },
      {
        "id": 67,
        "date": "2026-01-14",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S. (Stay in company)",
        "amount": 84439.0,
        "agent": "Roman"
      },
      {
        "id": 68,
        "date": "2026-01-14",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S. (Stay in company)",
        "amount": 84439.0,
        "agent": "Ariel"
      },
      {
        "id": 69,
        "date": "2025-09-01",
        "type": "income",
        "category": "commission",
        "description": "Comission Zenit Amir (3,100,000 THB property)",
        "amount": 241046.0,
        "agent": ""
      },
      {
        "id": 70,
        "date": "2025-12-24",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S. (Stay in company)",
        "amount": 102444.55,
        "agent": "Roman"
      },
      {
        "id": 71,
        "date": "2025-12-24",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S. (Stay in company)",
        "amount": 102444.55,
        "agent": "Ariel"
      },
      {
        "id": 72,
        "date": "2025-11-07",
        "type": "income",
        "category": "commission",
        "description": "Comission Samui Villa (Sapir) (10,000,000 THB property)",
        "amount": 40540.0,
        "agent": ""
      },
      {
        "id": 73,
        "date": "2025-11-07",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 17229.5,
        "agent": "Roman"
      },
      {
        "id": 74,
        "date": "2025-11-07",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S. (Paid 25.11.2025 (12200 cash + 5000 transfer))",
        "amount": 17229.5,
        "agent": "Ariel"
      },
      {
        "id": 75,
        "date": "2025-11-08",
        "type": "income",
        "category": "commission",
        "description": "Comission TT3 (Haim and Sasson) (45,500 THB property)",
        "amount": 45500.0,
        "agent": ""
      },
      {
        "id": 76,
        "date": "2025-11-08",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 19337.5,
        "agent": "Roman"
      },
      {
        "id": 77,
        "date": "2025-11-08",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S. (19337-3100=16237 (Paid cash incl 10000 for Katia from Parfan) 25.11.2025)",
        "amount": 19337.5,
        "agent": "Ariel"
      },
      {
        "id": 78,
        "date": "2025-11-10",
        "type": "income",
        "category": "commission",
        "description": "Comission lawyer Nadin (POA for Moshe)",
        "amount": 9000.0,
        "agent": ""
      },
      {
        "id": 79,
        "date": "2025-11-10",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 3825.0,
        "agent": "Roman"
      },
      {
        "id": 80,
        "date": "2025-11-10",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S. (3825 (Paida cash 25.11.2025))",
        "amount": 3825.0,
        "agent": "Ariel"
      },
      {
        "id": 81,
        "date": "2026-02-02",
        "type": "income",
        "category": "commission",
        "description": "Comission The Palm (Moshe) (4,000,000 THB property)",
        "amount": 122000.0,
        "agent": ""
      },
      {
        "id": 82,
        "date": "2026-02-02",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 51850.0,
        "agent": "Roman"
      },
      {
        "id": 83,
        "date": "2026-02-02",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S.",
        "amount": 51850.0,
        "agent": "Ariel"
      },
      {
        "id": 84,
        "date": "2026-01-06",
        "type": "income",
        "category": "commission",
        "description": "Comission Rizin (Dorit) (1,900,000 THB property)",
        "amount": 89467.0,
        "agent": ""
      },
      {
        "id": 85,
        "date": "2026-01-06",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S.",
        "amount": 44733.0,
        "agent": "Roman"
      },
      {
        "id": 86,
        "date": "2026-01-06",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S. (Paid)",
        "amount": 44733.0,
        "agent": "Ariel"
      },
      {
        "id": 87,
        "date": "2025-09-01",
        "type": "income",
        "category": "commission",
        "description": "Comission Embassy life 2 bed (Paul) (6,089,000 THB property)",
        "amount": 243492.0,
        "agent": ""
      },
      {
        "id": 88,
        "date": "2025-11-10",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S. (Stay in company)",
        "amount": 103484.1,
        "agent": "Roman"
      },
      {
        "id": 89,
        "date": "2025-11-10",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S. (Stay in company)",
        "amount": 103484.1,
        "agent": "Ariel"
      },
      {
        "id": 90,
        "date": "2025-09-01",
        "type": "income",
        "category": "commission",
        "description": "Comission Embassy life 1 bed (Yosi / Yoni) (4,000,000 THB property)",
        "amount": 198365.0,
        "agent": ""
      },
      {
        "id": 91,
        "date": "2025-11-10",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S. (Stay in company)",
        "amount": 84305.13,
        "agent": "Roman"
      },
      {
        "id": 92,
        "date": "2025-11-10",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S. (Stay in company)",
        "amount": 84305.13,
        "agent": "Ariel"
      },
      {
        "id": 93,
        "date": "2025-09-01",
        "type": "income",
        "category": "commission",
        "description": "Elis Company comission (25,000 THB property)",
        "amount": 25000.0,
        "agent": ""
      },
      {
        "id": 94,
        "date": "2025-09-01",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S. (Stay in company)",
        "amount": 12500.0,
        "agent": "Roman"
      },
      {
        "id": 95,
        "date": "2025-09-01",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S. (Stay in company)",
        "amount": 12500.0,
        "agent": "Ariel"
      },
      {
        "id": 96,
        "date": "2026-01-26",
        "type": "income",
        "category": "commission",
        "description": "Commision Aquarous (Roi customer) 434010 THB (5,600,000 THB property)",
        "amount": 434010.0,
        "agent": ""
      },
      {
        "id": 97,
        "date": "2026-01-26",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S. (Stay in company)",
        "amount": 132991.85,
        "agent": "Roman"
      },
      {
        "id": 98,
        "date": "2026-01-26",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S. (Stay in company)",
        "amount": 132991.85,
        "agent": "Ariel"
      },
      {
        "id": 99,
        "date": "2026-02-03",
        "type": "expense",
        "category": "other",
        "description": "Comission Roi and Yuval (Paid Roi and Yuval)",
        "amount": 121088.0,
        "agent": ""
      },
      {
        "id": 100,
        "date": "2026-02-03",
        "type": "income",
        "category": "commission",
        "description": "Visa comm from Eden",
        "amount": 10000.0,
        "agent": ""
      },
      {
        "id": 101,
        "date": "2026-02-03",
        "type": "expense",
        "category": "commission_out",
        "description": "Comiision to Roman S. (Paid to Ariel 03.02.2026 (bank transfer))",
        "amount": 5000.0,
        "agent": "Roman"
      },
      {
        "id": 102,
        "date": "2026-02-03",
        "type": "expense",
        "category": "commission_out",
        "description": "Comission to Ariel S.",
        "amount": 5000.0,
        "agent": "Ariel"
      },
      {
        "id": 103,
        "date": "2025-09-15",
        "type": "expense",
        "category": "office",
        "description": "Office rent — 2025-09",
        "amount": 10000.0,
        "agent": ""
      },
      {
        "id": 104,
        "date": "2025-10-15",
        "type": "expense",
        "category": "office",
        "description": "Office rent — 2025-10",
        "amount": 10000.0,
        "agent": ""
      },
      {
        "id": 105,
        "date": "2025-11-15",
        "type": "expense",
        "category": "office",
        "description": "Office rent — 2025-11",
        "amount": 10000.0,
        "agent": ""
      },
      {
        "id": 106,
        "date": "2025-12-15",
        "type": "expense",
        "category": "office",
        "description": "Office rent — 2025-12",
        "amount": 10000.0,
        "agent": ""
      },
      {
        "id": 107,
        "date": "2026-01-15",
        "type": "expense",
        "category": "office",
        "description": "Office rent — 2026-01",
        "amount": 14000.0,
        "agent": ""
      },
      {
        "id": 108,
        "date": "2026-02-15",
        "type": "expense",
        "category": "office",
        "description": "Office rent — 2026-02",
        "amount": 20000.0,
        "agent": ""
      },
      {
        "id": 109,
        "date": "2025-09-15",
        "type": "expense",
        "category": "office",
        "description": "Water — 2025-09",
        "amount": 900.0,
        "agent": ""
      },
      {
        "id": 110,
        "date": "2025-10-15",
        "type": "expense",
        "category": "office",
        "description": "Water — 2025-10",
        "amount": 900.0,
        "agent": ""
      },
      {
        "id": 111,
        "date": "2025-11-15",
        "type": "expense",
        "category": "office",
        "description": "Water — 2025-11",
        "amount": 192.0,
        "agent": ""
      },
      {
        "id": 112,
        "date": "2025-12-15",
        "type": "expense",
        "category": "office",
        "description": "Water — 2025-12",
        "amount": 864.0,
        "agent": ""
      },
      {
        "id": 113,
        "date": "2026-01-15",
        "type": "expense",
        "category": "office",
        "description": "Water — 2026-01",
        "amount": 465.0,
        "agent": ""
      },
      {
        "id": 114,
        "date": "2025-09-15",
        "type": "expense",
        "category": "office",
        "description": "Electricity — 2025-09",
        "amount": 1861.0,
        "agent": ""
      },
      {
        "id": 115,
        "date": "2025-10-15",
        "type": "expense",
        "category": "office",
        "description": "Electricity — 2025-10",
        "amount": 929.0,
        "agent": ""
      },
      {
        "id": 116,
        "date": "2025-11-15",
        "type": "expense",
        "category": "office",
        "description": "Electricity — 2025-11",
        "amount": 4078.0,
        "agent": ""
      },
      {
        "id": 117,
        "date": "2025-12-15",
        "type": "expense",
        "category": "office",
        "description": "Electricity — 2025-12",
        "amount": 2557.0,
        "agent": ""
      },
      {
        "id": 118,
        "date": "2025-09-15",
        "type": "expense",
        "category": "office",
        "description": "Wiff — 2025-09",
        "amount": 1800.0,
        "agent": ""
      },
      {
        "id": 119,
        "date": "2025-10-15",
        "type": "expense",
        "category": "office",
        "description": "Wiff — 2025-10",
        "amount": 426.0,
        "agent": ""
      },
      {
        "id": 120,
        "date": "2025-11-15",
        "type": "expense",
        "category": "office",
        "description": "Wiff — 2025-11",
        "amount": 2816.0,
        "agent": ""
      },
      {
        "id": 121,
        "date": "2025-09-15",
        "type": "expense",
        "category": "office",
        "description": "Renovation — 2025-09",
        "amount": 28000.0,
        "agent": ""
      },
      {
        "id": 122,
        "date": "2025-11-15",
        "type": "expense",
        "category": "office",
        "description": "Renovation — 2025-11",
        "amount": 26745.0,
        "agent": ""
      },
      {
        "id": 123,
        "date": "2025-09-15",
        "type": "expense",
        "category": "office",
        "description": "Furniture and equipment , cleaning — 2025-09",
        "amount": 32162.0,
        "agent": ""
      },
      {
        "id": 124,
        "date": "2025-10-15",
        "type": "expense",
        "category": "office",
        "description": "Furniture and equipment , cleaning — 2025-10",
        "amount": 20395.0,
        "agent": ""
      },
      {
        "id": 125,
        "date": "2025-12-15",
        "type": "expense",
        "category": "office",
        "description": "Furniture and equipment , cleaning — 2025-12",
        "amount": 5410.0,
        "agent": ""
      },
      {
        "id": 126,
        "date": "2025-09-15",
        "type": "expense",
        "category": "salary",
        "description": "Yung Acount + Direcotor Fee — 2025-09",
        "amount": 5000.0,
        "agent": ""
      },
      {
        "id": 127,
        "date": "2025-10-15",
        "type": "expense",
        "category": "salary",
        "description": "Yung Acount + Direcotor Fee — 2025-10",
        "amount": 5000.0,
        "agent": ""
      },
      {
        "id": 128,
        "date": "2025-11-15",
        "type": "expense",
        "category": "salary",
        "description": "Yung Acount + Direcotor Fee — 2025-11",
        "amount": 5000.0,
        "agent": ""
      },
      {
        "id": 129,
        "date": "2025-12-15",
        "type": "expense",
        "category": "salary",
        "description": "Yung Acount + Direcotor Fee — 2025-12",
        "amount": 5000.0,
        "agent": ""
      },
      {
        "id": 130,
        "date": "2026-01-15",
        "type": "expense",
        "category": "salary",
        "description": "Yung Acount + Direcotor Fee — 2026-01",
        "amount": 5000.0,
        "agent": ""
      },
      {
        "id": 131,
        "date": "2026-02-15",
        "type": "expense",
        "category": "salary",
        "description": "Yung Acount + Direcotor Fee — 2026-02",
        "amount": 5000.0,
        "agent": ""
      },
      {
        "id": 132,
        "date": "2025-09-15",
        "type": "expense",
        "category": "salary",
        "description": "TAX & SSO Staff — 2025-09",
        "amount": 16000.0,
        "agent": ""
      },
      {
        "id": 133,
        "date": "2025-10-15",
        "type": "expense",
        "category": "salary",
        "description": "TAX & SSO Staff — 2025-10",
        "amount": 15305.0,
        "agent": ""
      },
      {
        "id": 134,
        "date": "2025-11-15",
        "type": "expense",
        "category": "salary",
        "description": "TAX & SSO Staff — 2025-11",
        "amount": 16000.0,
        "agent": ""
      },
      {
        "id": 135,
        "date": "2025-12-15",
        "type": "expense",
        "category": "salary",
        "description": "TAX & SSO Staff — 2025-12",
        "amount": 17800.0,
        "agent": ""
      },
      {
        "id": 136,
        "date": "2026-01-15",
        "type": "expense",
        "category": "salary",
        "description": "TAX & SSO Staff — 2026-01",
        "amount": 15900.0,
        "agent": ""
      },
      {
        "id": 137,
        "date": "2025-10-15",
        "type": "expense",
        "category": "salary",
        "description": "Other payment to — 2025-10",
        "amount": 6750.0,
        "agent": ""
      },
      {
        "id": 138,
        "date": "2025-12-15",
        "type": "expense",
        "category": "salary",
        "description": "Other payment to — 2025-12",
        "amount": 69000.0,
        "agent": ""
      },
      {
        "id": 139,
        "date": "2026-01-15",
        "type": "expense",
        "category": "salary",
        "description": "Other payment to — 2026-01",
        "amount": 15000.0,
        "agent": ""
      },
      {
        "id": 140,
        "date": "2026-02-15",
        "type": "expense",
        "category": "ads",
        "description": "Video creator Nadia — 2026-02",
        "amount": 10000.0,
        "agent": ""
      },
      {
        "id": 141,
        "date": "2025-12-15",
        "type": "expense",
        "category": "ads",
        "description": "Salary (Administrator) (Sep 2025–Feb 2026)",
        "amount": 20374.73,
        "agent": ""
      },
      {
        "id": 142,
        "date": "2025-11-15",
        "type": "expense",
        "category": "ads",
        "description": "Sallary  (Designer) — 2025-11",
        "amount": 3000.0,
        "agent": ""
      },
      {
        "id": 143,
        "date": "2025-12-15",
        "type": "expense",
        "category": "ads",
        "description": "Sallary WebDesigner (Website) (Sep 2025–Feb 2026)",
        "amount": 22828.19,
        "agent": ""
      },
      {
        "id": 144,
        "date": "2025-12-15",
        "type": "expense",
        "category": "ads",
        "description": "Sallary Maxbuild AI + Catalog + CRM + SEO (Sep 2025–Feb 2026)",
        "amount": 233910.81,
        "agent": ""
      },
      {
        "id": 145,
        "date": "2025-12-15",
        "type": "expense",
        "category": "ads",
        "description": "Sallary Develooper (Website) (Sep 2025–Feb 2026)",
        "amount": 39730.72,
        "agent": ""
      },
      {
        "id": 146,
        "date": "2025-12-15",
        "type": "expense",
        "category": "ads",
        "description": "Saallary Waris (Secretary) — 2025-12",
        "amount": 2825.0,
        "agent": ""
      },
      {
        "id": 147,
        "date": "2026-01-15",
        "type": "expense",
        "category": "ads",
        "description": "Saallary Waris (Secretary) — 2026-01",
        "amount": 20600.0,
        "agent": ""
      },
      {
        "id": 148,
        "date": "2025-12-15",
        "type": "expense",
        "category": "ads",
        "description": "Meta Ads Campaign (Sep 2025–Feb 2026)",
        "amount": 327545.65,
        "agent": ""
      },
      {
        "id": 149,
        "date": "2025-12-15",
        "type": "expense",
        "category": "ads",
        "description": "YouTube Alex Sloune (Sep 2025–Feb 2026)",
        "amount": 227371.02,
        "agent": ""
      },
      {
        "id": 150,
        "date": "2025-12-15",
        "type": "expense",
        "category": "software",
        "description": "Notion.so (Sep 2025–Feb 2026)",
        "amount": 938.14,
        "agent": ""
      },
      {
        "id": 151,
        "date": "2025-12-15",
        "type": "expense",
        "category": "software",
        "description": "Make.com (Sep 2025–Feb 2026)",
        "amount": 2345.36,
        "agent": ""
      },
      {
        "id": 152,
        "date": "2025-12-15",
        "type": "expense",
        "category": "software",
        "description": "ManyChat (Sep 2025–Feb 2026)",
        "amount": 1876.29,
        "agent": ""
      },
      {
        "id": 153,
        "date": "2025-12-15",
        "type": "expense",
        "category": "software",
        "description": "ChatGpt,Abacus.Ai (Sep 2025–Feb 2026)",
        "amount": 3127.15,
        "agent": ""
      },
      {
        "id": 154,
        "date": "2025-12-15",
        "type": "expense",
        "category": "software",
        "description": "Mobile Phone Israel (Sep 2025–Feb 2026)",
        "amount": 1876.29,
        "agent": ""
      },
      {
        "id": 155,
        "date": "2025-12-15",
        "type": "expense",
        "category": "software",
        "description": "Zadarma (Sep 2025–Feb 2026)",
        "amount": 4690.72,
        "agent": ""
      },
      {
        "id": 156,
        "date": "2025-12-15",
        "type": "expense",
        "category": "software",
        "description": "Monday.com + Whatsable — 2025-12",
        "amount": 100.0,
        "agent": ""
      },
      {
        "id": 157,
        "date": "2025-12-15",
        "type": "expense",
        "category": "software",
        "description": "OPEN AI API (Sep 2025–Feb 2026)",
        "amount": 5191.07,
        "agent": ""
      },
      {
        "id": 158,
        "date": "2025-12-15",
        "type": "expense",
        "category": "software",
        "description": "Softwear (Sep 2025–Feb 2026)",
        "amount": 7505.16,
        "agent": ""
      },
      {
        "id": 159,
        "date": "2025-09-15",
        "type": "expense",
        "category": "transport",
        "description": "Buying or renting a car — 2025-09",
        "amount": 14500.0,
        "agent": ""
      },
      {
        "id": 160,
        "date": "2025-10-15",
        "type": "expense",
        "category": "transport",
        "description": "Buying or renting a car — 2025-10",
        "amount": 14500.0,
        "agent": ""
      },
      {
        "id": 161,
        "date": "2025-11-15",
        "type": "expense",
        "category": "transport",
        "description": "Buying or renting a car — 2025-11",
        "amount": 14500.0,
        "agent": ""
      },
      {
        "id": 162,
        "date": "2025-12-15",
        "type": "expense",
        "category": "transport",
        "description": "Buying or renting a car — 2025-12",
        "amount": 14500.0,
        "agent": ""
      },
      {
        "id": 163,
        "date": "2026-01-15",
        "type": "expense",
        "category": "transport",
        "description": "Buying or renting a car — 2026-01",
        "amount": 14500.0,
        "agent": ""
      },
      {
        "id": 164,
        "date": "2026-02-15",
        "type": "expense",
        "category": "transport",
        "description": "Buying or renting a car — 2026-02",
        "amount": 280.0,
        "agent": ""
      },
      {
        "id": 165,
        "date": "2025-09-15",
        "type": "expense",
        "category": "transport",
        "description": "Gasoline and car maintenance — 2025-09",
        "amount": 2000.0,
        "agent": ""
      },
      {
        "id": 166,
        "date": "2025-10-15",
        "type": "expense",
        "category": "transport",
        "description": "Gasoline and car maintenance — 2025-10",
        "amount": 2000.0,
        "agent": ""
      },
      {
        "id": 167,
        "date": "2025-11-15",
        "type": "expense",
        "category": "transport",
        "description": "Gasoline and car maintenance — 2025-11",
        "amount": 2000.0,
        "agent": ""
      },
      {
        "id": 168,
        "date": "2025-12-15",
        "type": "expense",
        "category": "transport",
        "description": "Gasoline and car maintenance — 2025-12",
        "amount": 2000.0,
        "agent": ""
      },
      {
        "id": 169,
        "date": "2026-01-15",
        "type": "expense",
        "category": "transport",
        "description": "Gasoline and car maintenance — 2026-01",
        "amount": 2000.0,
        "agent": ""
      },
      {
        "id": 170,
        "date": "2025-10-15",
        "type": "expense",
        "category": "transport",
        "description": "Business trips — 2025-10",
        "amount": 35000.0,
        "agent": ""
      }
    ],
    "deposits": [
      {
        "id": 800,
        "name": "Company 15% — Company deposit 15%",
        "amount": 40812.0,
        "date": "2025-03-25",
        "type": "company_15pct"
      },
      {
        "id": 801,
        "name": "Company 15% — Company deposit 15%",
        "amount": 30099.0,
        "date": "2025-07-06",
        "type": "company_15pct"
      },
      {
        "id": 802,
        "name": "Company 15% — Company deposit 15%",
        "amount": 110411.0,
        "date": "2025-08-18",
        "type": "company_15pct"
      },
      {
        "id": 803,
        "name": "Company 15% — Company deposit 15%",
        "amount": 67608.0,
        "date": "2025-08-25",
        "type": "company_15pct"
      },
      {
        "id": 804,
        "name": "Company 15% — Company deposit 15% (47833 THB)",
        "amount": 7147.0,
        "date": "2025-08-25",
        "type": "company_15pct"
      },
      {
        "id": 805,
        "name": "Company 15% — Company deposit 15%",
        "amount": 9112.5,
        "date": "2025-09-01",
        "type": "company_15pct"
      },
      {
        "id": 806,
        "name": "Company 15% — Company deposit 15%",
        "amount": 52079.0,
        "date": "2025-10-06",
        "type": "company_15pct"
      },
      {
        "id": 807,
        "name": "Company 15% — Company deposit 15%",
        "amount": 49484.0,
        "date": "2025-10-06",
        "type": "company_15pct"
      },
      {
        "id": 808,
        "name": "Company 15% — Company deposit 15%",
        "amount": 15375.0,
        "date": "2025-10-24",
        "type": "company_15pct"
      },
      {
        "id": 809,
        "name": "Company 15% — Company deposit 15%",
        "amount": 34200.0,
        "date": "2025-10-27",
        "type": "company_15pct"
      },
      {
        "id": 810,
        "name": "Company 15% — Company deposit 15%",
        "amount": 21367.05,
        "date": "2025-09-01",
        "type": "company_15pct"
      },
      {
        "id": 811,
        "name": "Company 15% — Company deposit 15%",
        "amount": 39981.3,
        "date": "2025-09-01",
        "type": "company_15pct"
      },
      {
        "id": 812,
        "name": "Company 15% — Company deposit 15%",
        "amount": 29802.0,
        "date": "2026-01-14",
        "type": "company_15pct"
      },
      {
        "id": 813,
        "name": "Company 15% — Company deposit 15%",
        "amount": 36156.9,
        "date": "2025-12-24",
        "type": "company_15pct"
      },
      {
        "id": 814,
        "name": "Company 15% — Company deposit 15%",
        "amount": 6081.0,
        "date": "2025-11-07",
        "type": "company_15pct"
      },
      {
        "id": 815,
        "name": "Company 15% — Company deposit 15%",
        "amount": 6825.0,
        "date": "2025-11-08",
        "type": "company_15pct"
      },
      {
        "id": 816,
        "name": "Company 15% — Company deposit 15%",
        "amount": 1350.0,
        "date": "2025-11-10",
        "type": "company_15pct"
      },
      {
        "id": 817,
        "name": "Company 15% — Company deposit 15%",
        "amount": 18300.0,
        "date": "2026-02-02",
        "type": "company_15pct"
      },
      {
        "id": 818,
        "name": "Company 15% — Company deposit 15%",
        "amount": 36523.8,
        "date": "2025-11-10",
        "type": "company_15pct"
      },
      {
        "id": 819,
        "name": "Company 15% — Company deposit 15%",
        "amount": 29754.75,
        "date": "2025-11-10",
        "type": "company_15pct"
      },
      {
        "id": 820,
        "name": "Company 15% — Company deposit 15%",
        "amount": 46938.0,
        "date": "2026-01-26",
        "type": "company_15pct"
      },
      {
        "id": 821,
        "name": "Amir Deposit",
        "amount": 1758,
        "date": "2026-01-15",
        "type": "client"
      },
      {
        "id": 822,
        "name": "Eli Rent money Jan 2026",
        "amount": 22000,
        "date": "2026-01-01",
        "type": "rent"
      },
      {
        "id": 823,
        "name": "Eli Rent money Feb 2026",
        "amount": 30000,
        "date": "2026-02-01",
        "type": "rent"
      }
    ],
    "agents": [
      {
        "id": 301,
        "name": "Roman",
        "role": "Co-Founder / Agent",
        "commission": 2128401.96,
        "deals": 30,
        "color": "#3b82f6",
        "investment": 154838.62
      },
      {
        "id": 302,
        "name": "Ariel",
        "role": "Co-Founder / Agent",
        "commission": 2176252.96,
        "deals": 31,
        "color": "#8b5cf6",
        "investment": 4910
      }
    ],
    "investments": [
      {
        "id": 401,
        "name": "Company investment",
        "amount": 699872.2,
        "investor": "Company"
      },
      {
        "id": 402,
        "name": "Ariel investment",
        "amount": 4910,
        "investor": "Ariel"
      },
      {
        "id": 403,
        "name": "Roman investment",
        "amount": 154838.62,
        "investor": "Roman"
      }
    ],
    "deals": [
      {
        "id": 1,
        "name": "Comission from Lawyer Aee (Shahar)",
        "client": "Shahar",
        "dealType": "CASH",
        "paymentMethod": "CASH",
        "category": "service",
        "date": "2025-02-01",
        "income": 2000.0,
        "propertyPrice": 2000.0,
        "commissionPct": "",
        "comment": "",
        "deposit15": 0,
        "romanCommission": 1000.0,
        "arielCommission": 1000.0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 2000.0,
        "netReceived": 0.0,
        "dealCategory": "service",
        "serviceType": "legal"
      },
      {
        "id": 2,
        "name": "Comission Dusit (Shahar) Pristine Park 3",
        "client": "Shahar",
        "dealType": "BANK TRANSFER",
        "paymentMethod": "BANK TRANSFER",
        "category": "sale",
        "date": "2025-03-25",
        "income": 272083.0,
        "propertyPrice": 3506000.0,
        "commissionPct": "8",
        "comment": "",
        "deposit15": 40812.0,
        "romanCommission": 115636.0,
        "arielCommission": 115636.0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 272084.0,
        "netReceived": -1.0,
        "dealCategory": "developer_sale",
        "projectName": "Pristine Park 3",
        "unitNumber": "",
        "developerName": "",
        "developerId": null
      },
      {
        "id": 3,
        "name": "Commision from lawyer Haim & Sason (Contract review)",
        "client": "Contract review",
        "dealType": "CASH",
        "paymentMethod": "CASH",
        "category": "service",
        "date": "2025-03-30",
        "income": 6000.0,
        "propertyPrice": 6000.0,
        "commissionPct": "",
        "comment": "",
        "deposit15": 0,
        "romanCommission": 3000.0,
        "arielCommission": 3000.0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 6000.0,
        "netReceived": 0.0,
        "dealCategory": "secondary_sale",
        "propertyName": "",
        "ownerName": "",
        "ownerId": null
      },
      {
        "id": 4,
        "name": "Rent Olympus",
        "client": "",
        "dealType": "BANK TRANSFER",
        "paymentMethod": "BANK TRANSFER",
        "category": "rent",
        "date": "2025-06-30",
        "income": 3928.0,
        "propertyPrice": 3928.0,
        "commissionPct": "",
        "comment": "",
        "deposit15": 0,
        "romanCommission": 0,
        "arielCommission": 0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 0,
        "netReceived": 3928.0,
        "dealCategory": "rental",
        "propertyName": "Olympus",
        "tenantName": "",
        "ownerName": "",
        "ownerId": null,
        "rentPeriod": "",
        "monthlyRent": 0
      },
      {
        "id": 5,
        "name": "Rent CGT",
        "client": "",
        "dealType": "BANK TRANSFER",
        "paymentMethod": "BANK TRANSFER",
        "category": "rent",
        "date": "2025-06-30",
        "income": 2910.0,
        "propertyPrice": 2910.0,
        "commissionPct": "",
        "comment": "",
        "deposit15": 0,
        "romanCommission": 1338.0,
        "arielCommission": 5500.0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 6838.0,
        "netReceived": -3928.0,
        "dealCategory": "rental",
        "propertyName": "CGT",
        "tenantName": "",
        "ownerName": "",
        "ownerId": null,
        "rentPeriod": "",
        "monthlyRent": 0
      },
      {
        "id": 6,
        "name": "Commision (Igal Cohen) Park Royal 3",
        "client": "Igal Cohen",
        "dealType": "CASH",
        "paymentMethod": "CASH",
        "category": "sale",
        "date": "2025-07-01",
        "income": 96250.0,
        "propertyPrice": 4000000.0,
        "commissionPct": "5",
        "comment": "",
        "deposit15": 0,
        "romanCommission": 0,
        "arielCommission": 0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 0,
        "netReceived": 96250.0,
        "dealCategory": "developer_sale",
        "projectName": "Park Royal 3",
        "unitNumber": "",
        "developerName": "",
        "developerId": null
      },
      {
        "id": 7,
        "name": "Commision (Igal Cohen) Park Royal 3 (Extra Commission)",
        "client": "Igal Cohen",
        "dealType": "CASH",
        "paymentMethod": "CASH",
        "category": "sale",
        "date": "2025-07-02",
        "income": 150000.0,
        "propertyPrice": 0,
        "commissionPct": "",
        "comment": "",
        "deposit15": 30099.0,
        "romanCommission": 85282.0,
        "arielCommission": 85281.0,
        "otherCommissions": [
          {
            "name": "Commision Yossef Ben David",
            "amount": 32083.0,
            "comment": ""
          }
        ],
        "fees": [
          {
            "name": "Laywer fee",
            "amount": 1000.0
          }
        ],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 233745.0,
        "netReceived": -83745.0,
        "dealCategory": "developer_sale",
        "projectName": "Park Royal 3",
        "unitNumber": "",
        "developerName": "",
        "developerId": null
      },
      {
        "id": 8,
        "name": "Comission visa Israel (Eden)",
        "client": "Eden",
        "dealType": "BANK TRANSFER",
        "paymentMethod": "BANK TRANSFER",
        "category": "service",
        "date": "2025-07-08",
        "income": 9000.0,
        "propertyPrice": 9000.0,
        "commissionPct": "",
        "comment": "",
        "deposit15": 0,
        "romanCommission": 4500.0,
        "arielCommission": 4500.0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 9000.0,
        "netReceived": 0.0,
        "dealCategory": "service",
        "serviceType": "visa"
      },
      {
        "id": 9,
        "name": "Comission Arom Jomtien (Dov)",
        "client": "Dov",
        "dealType": "BANK TRANSFER",
        "paymentMethod": "BANK TRANSFER",
        "category": "sale",
        "date": "2025-08-18",
        "income": 736078.0,
        "propertyPrice": 12636000.0,
        "commissionPct": "6",
        "comment": "",
        "deposit15": 110411.0,
        "romanCommission": 312834.0,
        "arielCommission": 312833.0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 736078.0,
        "netReceived": 0.0,
        "dealCategory": "developer_sale",
        "projectName": "Arom Jomtien",
        "unitNumber": "",
        "developerName": "",
        "developerId": null
      },
      {
        "id": 10,
        "name": "Comission Eli Ezra (Panora 3004)",
        "client": "Panora 3004",
        "dealType": "BANK TRANSFER",
        "paymentMethod": "BANK TRANSFER",
        "category": "sale",
        "date": "2025-08-25",
        "income": 500520.0,
        "propertyPrice": 6450000.0,
        "commissionPct": "8",
        "comment": "",
        "deposit15": 67608.0,
        "romanCommission": 191556.0,
        "arielCommission": 191556.0,
        "otherCommissions": [],
        "fees": [
          {
            "name": "Accesories fro Eli",
            "amount": 49800.0
          }
        ],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 500520.0,
        "netReceived": 0.0,
        "dealCategory": "developer_sale",
        "projectName": "Panora",
        "unitNumber": "3004",
        "developerName": "",
        "developerId": null
      },
      {
        "id": 11,
        "name": "Comission Gold 1 (THB 53500)",
        "client": "THB 53500",
        "dealType": "BANK TRANSFER",
        "paymentMethod": "BANK TRANSFER",
        "category": "sale",
        "date": "2025-08-25",
        "income": 53500.0,
        "propertyPrice": 53500.0,
        "commissionPct": "",
        "comment": "",
        "deposit15": 7147.0,
        "romanCommission": 0,
        "arielCommission": 43686.0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [
          {
            "name": "Withholding tax 5%",
            "amount": 2517.0
          }
        ],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 53350.0,
        "netReceived": 150.0,
        "dealCategory": "secondary_sale",
        "propertyName": "Gold 1",
        "ownerName": "",
        "ownerId": null
      },
      {
        "id": 12,
        "name": "Lawyer Alen Will Agreement",
        "client": "",
        "dealType": "CASH",
        "paymentMethod": "CASH",
        "category": "service",
        "date": "2025-08-25",
        "income": 2000.0,
        "propertyPrice": 2000.0,
        "commissionPct": "",
        "comment": "",
        "deposit15": 0,
        "romanCommission": 1000.0,
        "arielCommission": 1000.0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 2000.0,
        "netReceived": 0.0,
        "dealCategory": "service",
        "serviceType": "legal"
      },
      {
        "id": 13,
        "name": "Alen (Grand Coribean C804)",
        "client": "Grand Coribean C804",
        "dealType": "CASH",
        "paymentMethod": "CASH",
        "category": "sale",
        "date": "",
        "income": 60750.0,
        "propertyPrice": 0,
        "commissionPct": "",
        "comment": "",
        "deposit15": 9112.5,
        "romanCommission": 30375.0,
        "arielCommission": 30375.0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 69862.5,
        "netReceived": -9112.5,
        "dealCategory": "secondary_sale",
        "propertyName": "Grand Coribean C804",
        "ownerName": "",
        "ownerId": null
      },
      {
        "id": 14,
        "name": "Comission Aquarous B0503",
        "client": "",
        "dealType": "BANK TRANSFER",
        "paymentMethod": "BANK TRANSFER",
        "category": "sale",
        "date": "2025-10-05",
        "income": 347195.0,
        "propertyPrice": 4475000.0,
        "commissionPct": "",
        "comment": "",
        "deposit15": 52079.0,
        "romanCommission": 98371.0,
        "arielCommission": 98371.0,
        "otherCommissions": [
          {
            "name": "Comission to Roy A.",
            "amount": 98374.0,
            "comment": ""
          }
        ],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 347195.0,
        "netReceived": 0.0,
        "dealCategory": "developer_sale",
        "projectName": "Aquarous",
        "unitNumber": "B0503",
        "developerName": "",
        "developerId": null
      },
      {
        "id": 15,
        "name": "Comission Eli Ezra (Panora 3104)",
        "client": "Panora 3104",
        "dealType": "BANK TRANSFER",
        "paymentMethod": "BANK TRANSFER",
        "category": "sale",
        "date": "2025-10-05",
        "income": 358899.0,
        "propertyPrice": 6350000.0,
        "commissionPct": "",
        "comment": "He has a deposit in company 30786 THB",
        "deposit15": 49484.0,
        "romanCommission": 140207.0,
        "arielCommission": 140207.0,
        "otherCommissions": [],
        "fees": [
          {
            "name": "Accesories fro Eli",
            "amount": 29000.0
          }
        ],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 358898.0,
        "netReceived": 1.0,
        "dealCategory": "developer_sale",
        "projectName": "Panora",
        "unitNumber": "3104",
        "developerName": "",
        "developerId": null
      },
      {
        "id": 16,
        "name": "Comission Cloud deal with Jeassy 2,35 M",
        "client": "",
        "dealType": "BANK TRANSFER",
        "paymentMethod": "BANK TRANSFER",
        "category": "sale",
        "date": "2025-10-24",
        "income": 102500.0,
        "propertyPrice": 2000000.0,
        "commissionPct": "",
        "comment": "",
        "deposit15": 15375.0,
        "romanCommission": 43560.0,
        "arielCommission": 43565.0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 102500.0,
        "netReceived": 0.0,
        "dealCategory": "developer_sale",
        "projectName": "Cloud",
        "unitNumber": "",
        "developerName": "",
        "developerId": null
      },
      {
        "id": 17,
        "name": "Comission Rizin deal 1bedroom ( 6 and 7 floor) 2,5 M",
        "client": " 6 and 7 floor",
        "dealType": "CASH",
        "paymentMethod": "CASH",
        "category": "sale",
        "date": "2025-10-24",
        "income": 150466.0,
        "propertyPrice": 2500000.0,
        "commissionPct": "",
        "comment": "",
        "deposit15": 0.0,
        "romanCommission": 75233.0,
        "arielCommission": 75233.0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 150466.0,
        "netReceived": 0.0,
        "dealCategory": "developer_sale",
        "projectName": "Rizin",
        "unitNumber": "Floor 6-7 (1BR)",
        "developerName": "",
        "developerId": null
      },
      {
        "id": 18,
        "name": "Comission PTY (Haim)",
        "client": "Haim",
        "dealType": "CASH",
        "paymentMethod": "CASH",
        "category": "sale",
        "date": "2025-10-27",
        "income": 228000.0,
        "propertyPrice": 7550000.0,
        "commissionPct": "",
        "comment": "Give cash to Ariel 100K (100000-96900=3100",
        "deposit15": 34200.0,
        "romanCommission": 96900.0,
        "arielCommission": 96900.0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 228000.0,
        "netReceived": 0.0,
        "dealCategory": "secondary_sale",
        "propertyName": "PTY",
        "ownerName": "",
        "ownerId": null
      },
      {
        "id": 19,
        "name": "Comission Rizin deal 2 bedroom deal 2,85 M.",
        "client": "",
        "dealType": "CASH",
        "paymentMethod": "CASH",
        "category": "sale",
        "date": "2025-11-05",
        "income": 183300.0,
        "propertyPrice": 2850000.0,
        "commissionPct": "",
        "comment": "",
        "deposit15": 0.0,
        "romanCommission": 91650.0,
        "arielCommission": 91650.0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 183300.0,
        "netReceived": 0.0,
        "dealCategory": "developer_sale",
        "projectName": "Rizin",
        "unitNumber": "2BR",
        "developerName": "",
        "developerId": null
      },
      {
        "id": 20,
        "name": "Comission Haim & Sason",
        "client": "",
        "dealType": "BANK TRANSFER",
        "paymentMethod": "BANK TRANSFER",
        "category": "sale",
        "date": "",
        "income": 142447.0,
        "propertyPrice": 6044000.0,
        "commissionPct": "",
        "comment": "Stay in company",
        "deposit15": 21367.05,
        "romanCommission": 60539.98,
        "arielCommission": 60539.98,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 60539.98,
        "status": "completed",
        "totalExpenses": 142447.01,
        "netReceived": -0.01,
        "dealCategory": "secondary_sale",
        "propertyName": "",
        "ownerName": "",
        "ownerId": null
      },
      {
        "id": 21,
        "name": "Comission Zenit Eli B426\\B427",
        "client": "",
        "dealType": "BANK TRANSFER",
        "paymentMethod": "BANK TRANSFER",
        "category": "sale",
        "date": "",
        "income": 266542.0,
        "propertyPrice": 5800000.0,
        "commissionPct": "",
        "comment": "Stay in company",
        "deposit15": 39981.3,
        "romanCommission": 113280.35,
        "arielCommission": 113280.35,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 113280.35,
        "status": "completed",
        "totalExpenses": 266542.0,
        "netReceived": 0.0,
        "dealCategory": "developer_sale",
        "projectName": "Zenit",
        "unitNumber": "B426/B427",
        "developerName": "",
        "developerId": null
      },
      {
        "id": 22,
        "name": "Comission Avenue Boutiqe (Nati)",
        "client": "Nati",
        "dealType": "BANK TRANSFER",
        "paymentMethod": "BANK TRANSFER",
        "category": "sale",
        "date": "2026-01-14",
        "income": 198680.0,
        "propertyPrice": 3380000.0,
        "commissionPct": "",
        "comment": "Stay in company",
        "deposit15": 29802.0,
        "romanCommission": 84439.0,
        "arielCommission": 84439.0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 84439.0,
        "status": "completed",
        "totalExpenses": 198680.0,
        "netReceived": 0.0,
        "dealCategory": "developer_sale",
        "projectName": "Avenue Boutique",
        "unitNumber": "",
        "developerName": "",
        "developerId": null
      },
      {
        "id": 23,
        "name": "Comission Zenit Amir",
        "client": "",
        "dealType": "BANK TRANSFER",
        "paymentMethod": "BANK TRANSFER",
        "category": "sale",
        "date": "2025-12-24",
        "income": 241046.0,
        "propertyPrice": 3100000.0,
        "commissionPct": "",
        "comment": "Stay in company",
        "deposit15": 36156.9,
        "romanCommission": 102444.55,
        "arielCommission": 102444.55,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 102444.55,
        "status": "completed",
        "totalExpenses": 241046.0,
        "netReceived": 0.0,
        "dealCategory": "developer_sale",
        "projectName": "Zenit",
        "unitNumber": "",
        "developerName": "",
        "developerId": null
      },
      {
        "id": 24,
        "name": "Comission Samui Villa (Sapir)",
        "client": "Sapir",
        "dealType": "BANK TRANSFER",
        "paymentMethod": "BANK TRANSFER",
        "category": "sale",
        "date": "2025-11-07",
        "income": 40540.0,
        "propertyPrice": 10000000.0,
        "commissionPct": "",
        "comment": "Paid 25.11.2025 (12200 cash + 5000 transfer)",
        "deposit15": 6081.0,
        "romanCommission": 17229.5,
        "arielCommission": 17229.5,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 40540.0,
        "netReceived": 0.0,
        "dealCategory": "secondary_sale",
        "propertyName": "Samui Villa",
        "ownerName": "",
        "ownerId": null
      },
      {
        "id": 25,
        "name": "Comission TT3 (Haim and Sasson)",
        "client": "Haim and Sasson",
        "dealType": "CASH",
        "paymentMethod": "CASH",
        "category": "sale",
        "date": "2025-11-08",
        "income": 45500.0,
        "propertyPrice": 45500.0,
        "commissionPct": "",
        "comment": "81000-35500=45,500",
        "deposit15": 6825.0,
        "romanCommission": 19337.5,
        "arielCommission": 19337.5,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 45500.0,
        "netReceived": 0.0,
        "dealCategory": "secondary_sale",
        "propertyName": "TT3",
        "ownerName": "",
        "ownerId": null
      },
      {
        "id": 26,
        "name": "Comission lawyer Nadin (POA for Moshe)",
        "client": "POA for Moshe",
        "dealType": "BANK TRANSFER",
        "paymentMethod": "BANK TRANSFER",
        "category": "service",
        "date": "2025-11-10",
        "income": 9000.0,
        "propertyPrice": 0,
        "commissionPct": "",
        "comment": "3825 (Paida cash 25.11.2025)",
        "deposit15": 1350.0,
        "romanCommission": 3825.0,
        "arielCommission": 3825.0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 9000.0,
        "netReceived": 0.0,
        "dealCategory": "service",
        "serviceType": "legal"
      },
      {
        "id": 27,
        "name": "Comission The Palm (Moshe)",
        "client": "Moshe",
        "dealType": "CASH",
        "paymentMethod": "CASH",
        "category": "sale",
        "date": "2026-02-02",
        "income": 122000.0,
        "propertyPrice": 4000000.0,
        "commissionPct": "",
        "comment": "",
        "deposit15": 18300.0,
        "romanCommission": 51850.0,
        "arielCommission": 51850.0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 122000.0,
        "netReceived": 0.0,
        "dealCategory": "secondary_sale",
        "propertyName": "The Palm",
        "ownerName": "",
        "ownerId": null
      },
      {
        "id": 28,
        "name": "Comission Rizin (Dorit)",
        "client": "Dorit",
        "dealType": "BANK TRANSFER",
        "paymentMethod": "BANK TRANSFER",
        "category": "sale",
        "date": "2026-01-06",
        "income": 89467.0,
        "propertyPrice": 1900000.0,
        "commissionPct": "",
        "comment": "140000/3=46,666.667 (Ariel Parfunand me)",
        "deposit15": 0,
        "romanCommission": 44733.0,
        "arielCommission": 44733.0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 89466.0,
        "netReceived": 1.0,
        "dealCategory": "developer_sale",
        "projectName": "Rizin",
        "unitNumber": "",
        "developerName": "",
        "developerId": null
      },
      {
        "id": 29,
        "name": "Comission Embassy life 2 bed (Paul)",
        "client": "Paul",
        "dealType": "BANK TRANSFER",
        "paymentMethod": "BANK TRANSFER",
        "category": "sale",
        "date": "2025-11-10",
        "income": 243492.0,
        "propertyPrice": 6089000.0,
        "commissionPct": "",
        "comment": "Stay in company",
        "deposit15": 36523.8,
        "romanCommission": 103484.1,
        "arielCommission": 103484.1,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 103484.1,
        "status": "completed",
        "totalExpenses": 243492.0,
        "netReceived": -0.0,
        "dealCategory": "developer_sale",
        "projectName": "Embassy Life",
        "unitNumber": "2 Bedroom",
        "developerName": "",
        "developerId": null
      },
      {
        "id": 30,
        "name": "Comission Embassy life 1 bed (Yosi / Yoni)",
        "client": "Yosi / Yoni",
        "dealType": "BANK TRANSFER",
        "paymentMethod": "BANK TRANSFER",
        "category": "sale",
        "date": "2025-11-10",
        "income": 198365.0,
        "propertyPrice": 4000000.0,
        "commissionPct": "",
        "comment": "Stay in company",
        "deposit15": 29754.75,
        "romanCommission": 84305.13,
        "arielCommission": 84305.13,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 84305.13,
        "status": "completed",
        "totalExpenses": 198365.01,
        "netReceived": -0.01,
        "dealCategory": "developer_sale",
        "projectName": "Embassy Life",
        "unitNumber": "1 Bedroom",
        "developerName": "",
        "developerId": null
      },
      {
        "id": 31,
        "name": "Elis Company comission",
        "client": "",
        "dealType": "CASH",
        "paymentMethod": "CASH",
        "category": "sale",
        "date": "",
        "income": 25000.0,
        "propertyPrice": 25000.0,
        "commissionPct": "",
        "comment": "Stay in company",
        "deposit15": 0,
        "romanCommission": 12500.0,
        "arielCommission": 12500.0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 12500.0,
        "status": "completed",
        "totalExpenses": 25000.0,
        "netReceived": 0.0,
        "dealCategory": "secondary_sale",
        "propertyName": "",
        "ownerName": "",
        "ownerId": null
      },
      {
        "id": 32,
        "name": "Commision Aquarous (Roi customer) 434010 THB",
        "client": "Roi customer",
        "dealType": "",
        "paymentMethod": "",
        "category": "sale",
        "date": "2026-01-26",
        "income": 434010.0,
        "propertyPrice": 5600000.0,
        "commissionPct": "",
        "comment": "Stay in company",
        "deposit15": 46938.0,
        "romanCommission": 132991.85,
        "arielCommission": 132991.85,
        "otherCommissions": [
          {
            "name": "Comission Roi and Yuval",
            "amount": 121088.0,
            "comment": "Paid Roi and Yuval"
          }
        ],
        "fees": [],
        "taxes": [],
        "leftInCompany": 132991.85,
        "status": "completed",
        "totalExpenses": 434009.7,
        "netReceived": 0.3,
        "dealCategory": "developer_sale",
        "projectName": "Aquarous",
        "unitNumber": "",
        "developerName": "",
        "developerId": null
      },
      {
        "id": 33,
        "name": "Visa comm from Eden",
        "client": "",
        "dealType": "",
        "paymentMethod": "",
        "category": "service",
        "date": "2026-02-03",
        "income": 10000.0,
        "propertyPrice": 0,
        "commissionPct": "",
        "comment": "",
        "deposit15": 0,
        "romanCommission": 5000.0,
        "arielCommission": 5000.0,
        "otherCommissions": [],
        "fees": [],
        "taxes": [],
        "leftInCompany": 0,
        "status": "completed",
        "totalExpenses": 10000.0,
        "netReceived": 0.0,
        "dealCategory": "service",
        "serviceType": "visa"
      }
    ],
    "owners": [],
    "developers": [],
    "nextId": 271
  };

  let appData = loadData();

  function loadData() {
    try {
      const storedVersion = parseInt(localStorage.getItem(DATA_VERSION_KEY), 10);
      if (storedVersion === DATA_VERSION) {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved);
      } else {
        // Version mismatch — clear old data and load fresh defaults
        localStorage.removeItem(STORAGE_KEY);
        localStorage.setItem(DATA_VERSION_KEY, DATA_VERSION);
      }
    } catch (e) {
      console.error('Failed to load data:', e);
    }
    return JSON.parse(JSON.stringify(defaultData));
  }

  function saveData() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
      localStorage.setItem(DATA_VERSION_KEY, DATA_VERSION);
    } catch (e) {
      console.error('Failed to save data:', e);
    }
  }

  function getNextId() {
    return ++appData.nextId;
  }

  // ============ FORMAT HELPERS ============
  function formatCurrency(amount) {
    const abs = Math.abs(amount);
    const formatted = abs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const sign = amount < 0 ? '-' : '';
    return `${sign}฿${formatted}`;
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ============ CALCULATIONS ============
  function calcMetrics() {
    const txns = appData.transactions;
    const totalIncome = txns.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const totalCommissionsOut = txns.filter(t => t.category === 'commission_out').reduce((s, t) => s + t.amount, 0);
    const operatingExpenses = txns.filter(t => t.type === 'expense' && t.category !== 'commission_out').reduce((s, t) => s + t.amount, 0);
    const totalExpenses = txns.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    const netIncome = totalIncome - totalCommissionsOut;
    const operatingProfit = netIncome - operatingExpenses;
    const totalDeposits = appData.deposits.reduce((s, d) => s + d.amount, 0);
    const securityDeposits = appData.deposits.filter(d => d.type === 'security').reduce((s, d) => s + d.amount, 0);
    const totalInvestments = appData.investments.reduce((s, i) => s + i.amount, 0);
    const balance = totalIncome - totalExpenses;

    return {
      totalIncome,
      totalExpenses,
      totalCommissionsOut,
      operatingExpenses,
      netIncome,
      operatingProfit,
      totalDeposits,
      securityDeposits,
      totalInvestments,
      balance,
    };
  }

  function getCategoryLabel(cat) {
    const labels = {
      commission: 'Commission',
      commission_out: 'Agent Commission',
      office: 'Office',
      salary: 'Salary',
      ads: 'Advertising',
      software: 'Software',
      transport: 'Transport',
      rent: 'Rent',
      other_income: 'Other Income',
      other_expense: 'Other Expense',
    };
    return labels[cat] || cat;
  }

  function getCategoryBadgeClass(type) {
    if (type === 'income') return 'income';
    if (type === 'commission_out') return 'commission';
    return 'expense';
  }

  // ============ EXPENSE BREAKDOWN FOR CHARTS ============
  function getExpenseBreakdown() {
    const cats = {};
    appData.transactions.filter(t => t.type === 'expense').forEach(t => {
      const label = getCategoryLabel(t.category);
      cats[label] = (cats[label] || 0) + t.amount;
    });
    return cats;
  }

  function getMonthlyData() {
    const months = {};
    appData.transactions.forEach(t => {
      const d = new Date(t.date);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      if (!months[key]) months[key] = { income: 0, expense: 0 };
      if (t.type === 'income') months[key].income += t.amount;
      else months[key].expense += t.amount;
    });
    const sorted = Object.keys(months).sort();
    return {
      labels: sorted.map(k => {
        const [y, m] = k.split('-');
        return `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][parseInt(m) - 1]} ${y}`;
      }),
      income: sorted.map(k => months[k].income),
      expense: sorted.map(k => months[k].expense),
    };
  }

  // ============ NAVIGATION ============
  let currentPage = 'dashboard';

  function navigate(page) {
    currentPage = page;
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.page === page);
    });
    document.querySelectorAll('.page-section').forEach(sec => {
      sec.classList.toggle('active', sec.id === `page-${page}`);
    });
    const titles = {
      dashboard: ['Dashboard', 'Financial Overview'],
      transactions: ['Transactions', 'All income and expenses'],
      income: ['Income', 'All deals and commissions received'],
      expenses: ['Expenses', 'All company expenses and payouts'],
      deals: ['Deals', 'Property deals and commission details'],
      agents: ['Agents', 'Agent commissions and performance'],
      deposits: ['Deposits', 'Security deposits and rent'],
      developers: ['Developers', 'Property developers database'],
      owners: ['Owners', 'Property owners database'],
      reports: ['Reports', 'Financial reports and analytics'],
      settings: ['Settings', 'Import / Export / Google Sheets'],
    };
    const t = titles[page] || ['', ''];
    document.getElementById('page-title').textContent = t[0];
    document.getElementById('page-subtitle').textContent = t[1];

    // Render page-specific content
    if (page === 'dashboard') renderDashboard();
    else if (page === 'transactions') renderTransactions();
    else if (page === 'agents') renderAgents();
    else if (page === 'deposits') renderDeposits();
    else if (page === 'income') renderIncome();
    else if (page === 'expenses') renderExpenses();
    else if (page === 'deals') renderDeals();
    else if (page === 'developers') renderDevelopers();
    else if (page === 'owners') renderOwners();
    else if (page === 'reports') renderReports();
  }

  // ============ TOAST ============
  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ============ RENDER: DASHBOARD ============
  let barChart = null;
  let doughnutChart = null;

  function renderDashboard() {
    const m = calcMetrics();

    document.getElementById('metric-income').textContent = formatCurrency(m.totalIncome);
    document.getElementById('metric-expenses').textContent = formatCurrency(m.totalExpenses);
    document.getElementById('metric-balance').textContent = formatCurrency(m.balance);
    document.getElementById('metric-deposits').textContent = formatCurrency(m.totalDeposits);
    document.getElementById('metric-commissions').textContent = formatCurrency(m.totalCommissionsOut);
    document.getElementById('metric-investments').textContent = formatCurrency(m.totalInvestments);

    // Balance indicator
    const balEl = document.getElementById('metric-balance');
    balEl.parentElement.parentElement.className = `metric-card ${m.balance >= 0 ? 'blue' : 'red'}`;

    renderBarChart();
    renderDoughnutChart();
    renderRecentTransactions();
  }

  function renderBarChart() {
    const data = getMonthlyData();
    const ctx = document.getElementById('chart-bar').getContext('2d');

    if (barChart) barChart.destroy();

    barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'Income',
            data: data.income,
            backgroundColor: 'rgba(16, 185, 129, 0.7)',
            borderColor: '#10b981',
            borderWidth: 1,
            borderRadius: 6,
            barPercentage: 0.6,
          },
          {
            label: 'Expenses',
            data: data.expense,
            backgroundColor: 'rgba(239, 68, 68, 0.7)',
            borderColor: '#ef4444',
            borderWidth: 1,
            borderRadius: 6,
            barPercentage: 0.6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#9ca3af', font: { family: 'Inter', size: 12 }, boxWidth: 12, boxHeight: 12, borderRadius: 3, useBorderRadius: true },
          },
          tooltip: {
            backgroundColor: '#1f2937',
            titleColor: '#f3f4f6',
            bodyColor: '#9ca3af',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            cornerRadius: 8,
            callbacks: { label: ctx => `${ctx.dataset.label}: ${formatCurrency(ctx.raw)}` },
          },
        },
        scales: {
          x: { ticks: { color: '#6b7280', font: { family: 'Inter', size: 11 } }, grid: { display: false } },
          y: {
            ticks: { color: '#6b7280', font: { family: 'Inter', size: 11 }, callback: v => `฿${(v / 1000000).toFixed(1)}M` },
            grid: { color: 'rgba(255,255,255,0.04)' },
          },
        },
      },
    });
  }

  function renderDoughnutChart() {
    const breakdown = getExpenseBreakdown();
    const labels = Object.keys(breakdown);
    const values = Object.values(breakdown);
    const colors = ['#ef4444', '#8b5cf6', '#f59e0b', '#3b82f6', '#06b6d4', '#10b981', '#ec4899'];
    const ctx = document.getElementById('chart-doughnut').getContext('2d');

    if (doughnutChart) doughnutChart.destroy();

    doughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [{
          data: values,
          backgroundColor: colors.slice(0, labels.length),
          borderWidth: 0,
          hoverBorderColor: '#fff',
          hoverBorderWidth: 2,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: '#9ca3af', font: { family: 'Inter', size: 11 }, boxWidth: 10, boxHeight: 10, borderRadius: 3, useBorderRadius: true, padding: 12 },
          },
          tooltip: {
            backgroundColor: '#1f2937',
            titleColor: '#f3f4f6',
            bodyColor: '#9ca3af',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            cornerRadius: 8,
            callbacks: { label: ctx => `${ctx.label}: ${formatCurrency(ctx.raw)}` },
          },
        },
      },
    });
  }

  function renderRecentTransactions() {
    const tbody = document.getElementById('recent-transactions');
    const recent = [...appData.transactions].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

    if (recent.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" class="empty-state"><div class="empty-icon">📭</div><h4>No transactions yet</h4><p>Add your first transaction</p></td></tr>`;
      return;
    }

    tbody.innerHTML = recent.map(t => `
      <tr>
        <td>${formatDate(t.date)}</td>
        <td>${escapeHtml(t.description)}</td>
        <td><span class="category-badge ${getCategoryBadgeClass(t.type)}">${getCategoryLabel(t.category)}</span></td>
        <td class="${t.type === 'income' ? 'amount-positive' : 'amount-negative'}">${t.type === 'income' ? '+' : '-'}${formatCurrency(t.amount)}</td>
      </tr>
    `).join('');
  }

  // ============ RENDER: TRANSACTIONS ============
  function renderTransactions() {
    const tbody = document.getElementById('transactions-tbody');
    let txns = [...appData.transactions];

    // Apply filters
    const search = document.getElementById('txn-search')?.value?.toLowerCase() || '';
    const typeFilter = document.getElementById('txn-type-filter')?.value || 'all';
    const catFilter = document.getElementById('txn-cat-filter')?.value || 'all';

    if (search) txns = txns.filter(t => t.description.toLowerCase().includes(search));
    if (typeFilter !== 'all') txns = txns.filter(t => t.type === typeFilter);
    if (catFilter !== 'all') txns = txns.filter(t => t.category === catFilter);

    txns.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (txns.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" class="empty-state"><div class="empty-icon">📭</div><h4>No transactions found</h4><p>Try adjusting your filters</p></td></tr>`;
      return;
    }

    tbody.innerHTML = txns.map(t => `
      <tr>
        <td>${formatDate(t.date)}</td>
        <td>${escapeHtml(t.description)}</td>
        <td><span class="category-badge ${getCategoryBadgeClass(t.type)}">${getCategoryLabel(t.category)}</span></td>
        <td>${escapeHtml(t.agent || '—')}</td>
        <td class="${t.type === 'income' ? 'amount-positive' : 'amount-negative'}">${t.type === 'income' ? '+' : '-'}${formatCurrency(t.amount)}</td>
        <td>
          <div class="action-btns">
            <button class="action-btn" onclick="app.editTransaction(${t.id})" title="Edit">✏️</button>
            <button class="action-btn delete" onclick="app.deleteTransaction(${t.id})" title="Delete">🗑️</button>
          </div>
        </td>
      </tr>
    `).join('');

    // Transaction count badge
    const badge = document.querySelector('[data-page="transactions"] .nav-badge');
    if (badge) badge.textContent = appData.transactions.length;
  }

  // ============ RENDER: AGENTS ============
  function renderAgents() {
    const container = document.getElementById('agents-grid');
    const colors_bg = ['rgba(59,130,246,0.15)', 'rgba(139,92,246,0.15)', 'rgba(16,185,129,0.15)', 'rgba(245,158,11,0.15)'];
    const colors_text = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];

    container.innerHTML = appData.agents.map((agent, i) => `
      <div class="agent-card">
        <div class="agent-avatar" style="background: ${colors_bg[i % colors_bg.length]}; color: ${colors_text[i % colors_text.length]}">
          ${agent.name.charAt(0)}
        </div>
        <h4>${escapeHtml(agent.name)}</h4>
        <div class="agent-role">${escapeHtml(agent.role)}</div>
        <div class="agent-stats">
          <div class="agent-stat">
            <div class="stat-label">Commission</div>
            <div class="stat-value" style="color: ${colors_text[i % colors_text.length]}">${formatCurrency(agent.commission)}</div>
          </div>
          <div class="agent-stat">
            <div class="stat-label">Deals</div>
            <div class="stat-value">${agent.deals}</div>
          </div>
          <div class="agent-stat">
            <div class="stat-label">Investment</div>
            <div class="stat-value">${formatCurrency(agent.investment || 0)}</div>
          </div>
          <div class="agent-stat">
            <div class="stat-label">Status</div>
            <div class="stat-value" style="color: var(--accent-green); font-size: 13px;">Active</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // ============ RENDER: DEPOSITS ============
  function renderDeposits() {
    const container = document.getElementById('deposits-list');
    const icons = { security: '🔒', client: '👤', rent: '🏠' };

    container.innerHTML = appData.deposits.map(d => `
      <div class="deposit-item">
        <div class="deposit-info">
          <div class="deposit-icon">${icons[d.type] || '💰'}</div>
          <div>
            <div class="deposit-name">${escapeHtml(d.name)}</div>
            <div class="deposit-date">${formatDate(d.date)} · ${d.type}</div>
          </div>
        </div>
        <div class="deposit-amount">${formatCurrency(d.amount)}</div>
      </div>
    `).join('');

    // Deposit summary
    const totalSec = appData.deposits.filter(d => d.type === 'security').reduce((s, d) => s + d.amount, 0);
    const totalRent = appData.deposits.filter(d => d.type === 'rent').reduce((s, d) => s + d.amount, 0);
    const totalClient = appData.deposits.filter(d => d.type === 'client').reduce((s, d) => s + d.amount, 0);
    const totalAll = appData.deposits.reduce((s, d) => s + d.amount, 0);

    document.getElementById('dep-security').textContent = formatCurrency(totalSec);
    document.getElementById('dep-rent').textContent = formatCurrency(totalRent);
    document.getElementById('dep-client').textContent = formatCurrency(totalClient);
    document.getElementById('dep-total').textContent = formatCurrency(totalAll);
  }

  // ============ RENDER: REPORTS ============
  function renderReports() {
    const m = calcMetrics();
    document.getElementById('rep-income').textContent = formatCurrency(m.totalIncome);
    document.getElementById('rep-expenses').textContent = formatCurrency(m.operatingExpenses);
    document.getElementById('rep-commissions').textContent = formatCurrency(m.totalCommissionsOut);
    document.getElementById('rep-net-income').textContent = formatCurrency(m.netIncome);
    document.getElementById('rep-op-profit').textContent = formatCurrency(m.operatingProfit);
    document.getElementById('rep-balance').textContent = formatCurrency(m.balance);
    document.getElementById('rep-deposits').textContent = formatCurrency(m.totalDeposits);
    document.getElementById('rep-investments').textContent = formatCurrency(m.totalInvestments);

    // Color based on value
    const balEl = document.getElementById('rep-balance');
    balEl.style.color = m.balance >= 0 ? 'var(--accent-green)' : 'var(--accent-red)';
    const profEl = document.getElementById('rep-op-profit');
    profEl.style.color = m.operatingProfit >= 0 ? 'var(--accent-green)' : 'var(--accent-red)';
  }

  // ============ MODALS ============
  function openModal(id) {
    document.getElementById(id).classList.add('active');
  }

  function closeModal(id) {
    document.getElementById(id).classList.remove('active');
  }

  // ============ ADD TRANSACTION ============
  function openAddTransactionModal() {
    document.getElementById('txn-form').reset();
    document.getElementById('txn-modal-title').textContent = 'Add Transaction';
    document.getElementById('txn-edit-id').value = '';
    openModal('txn-modal');
  }

  function saveTransaction() {
    const editId = document.getElementById('txn-edit-id').value;
    const type = document.getElementById('txn-type').value;
    const category = document.getElementById('txn-category').value;
    const description = document.getElementById('txn-description').value.trim();
    const amount = parseFloat(document.getElementById('txn-amount').value);
    const date = document.getElementById('txn-date').value;
    const agent = document.getElementById('txn-agent').value.trim();

    if (!description || isNaN(amount) || amount <= 0 || !date) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    if (editId) {
      const idx = appData.transactions.findIndex(t => t.id === parseInt(editId));
      if (idx >= 0) {
        appData.transactions[idx] = { ...appData.transactions[idx], type, category, description, amount, date, agent };
        showToast('Transaction updated successfully');
      }
    } else {
      appData.transactions.push({ id: getNextId(), type, category, description, amount, date, agent });
      showToast('Transaction added successfully');
    }

    saveData();
    closeModal('txn-modal');
    if (currentPage === 'dashboard') renderDashboard();
    else if (currentPage === 'transactions') renderTransactions();
    else if (currentPage === 'reports') renderReports();
  }

  function editTransaction(id) {
    const t = appData.transactions.find(t => t.id === id);
    if (!t) return;

    document.getElementById('txn-modal-title').textContent = 'Edit Transaction';
    document.getElementById('txn-edit-id').value = t.id;
    document.getElementById('txn-type').value = t.type;
    document.getElementById('txn-category').value = t.category;
    document.getElementById('txn-description').value = t.description;
    document.getElementById('txn-amount').value = t.amount;
    document.getElementById('txn-date').value = t.date;
    document.getElementById('txn-agent').value = t.agent || '';
    openModal('txn-modal');
  }

  function deleteTransaction(id) {
    if (!confirm('Delete this transaction?')) return;
    appData.transactions = appData.transactions.filter(t => t.id !== id);
    saveData();
    showToast('Transaction deleted', 'info');
    if (currentPage === 'transactions') renderTransactions();
    else if (currentPage === 'dashboard') renderDashboard();
    else if (currentPage === 'reports') renderReports();
  }

  // ============ ADD DEPOSIT ============
  function openAddDepositModal() {
    document.getElementById('dep-form').reset();
    openModal('dep-modal');
  }

  function saveDeposit() {
    const name = document.getElementById('dep-name').value.trim();
    const amount = parseFloat(document.getElementById('dep-amount').value);
    const date = document.getElementById('dep-date').value;
    const type = document.getElementById('dep-type').value;

    if (!name || isNaN(amount) || amount <= 0 || !date) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    appData.deposits.push({ id: getNextId(), name, amount, date, type });
    saveData();
    closeModal('dep-modal');
    showToast('Deposit added successfully');
    if (currentPage === 'deposits') renderDeposits();
    else if (currentPage === 'dashboard') renderDashboard();
  }

  // ============ ADD AGENT ============
  function openAddAgentModal() {
    document.getElementById('agent-form').reset();
    openModal('agent-modal');
  }

  function saveAgent() {
    const name = document.getElementById('agent-name').value.trim();
    const role = document.getElementById('agent-role').value.trim();

    if (!name) {
      showToast('Please enter agent name', 'error');
      return;
    }

    const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#06b6d4', '#ec4899'];
    appData.agents.push({
      id: getNextId(),
      name,
      role: role || 'Agent',
      commission: 0,
      deals: 0,
      color: colors[appData.agents.length % colors.length],
      investment: 0,
    });
    saveData();
    closeModal('agent-modal');
    showToast('Agent added successfully');
    if (currentPage === 'agents') renderAgents();
  }

  // ============ CSV IMPORT ============
  function handleCSVImport(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const text = e.target.result;
        const lines = text.split('\n').map(l => l.trim()).filter(l => l);

        let imported = 0;
        // Try to detect header
        const firstLine = lines[0].toLowerCase();
        const hasHeader = firstLine.includes('date') || firstLine.includes('description') || firstLine.includes('type') || firstLine.includes('amount');
        const startIdx = hasHeader ? 1 : 0;

        for (let i = startIdx; i < lines.length; i++) {
          const cols = parseCSVLine(lines[i]);
          if (cols.length < 4) continue;

          // Expected format: date, type, category, description, amount, agent (optional)
          const date = cols[0] ? cols[0].trim() : '';
          const type = cols[1] ? cols[1].trim().toLowerCase() : 'expense';
          const category = cols[2] ? cols[2].trim().toLowerCase() : 'other_expense';
          const description = cols[3] ? cols[3].trim() : '';
          const amountStr = cols[4] ? cols[4].replace(/[฿,\s]/g, '').trim() : '0';
          const amount = parseFloat(amountStr);
          const agent = cols[5] ? cols[5].trim() : '';

          if (!date || isNaN(amount) || amount === 0) continue;

          // Try to parse the date
          let parsedDate = date;
          const dateObj = new Date(date);
          if (!isNaN(dateObj.getTime())) {
            parsedDate = dateObj.toISOString().split('T')[0];
          }

          appData.transactions.push({
            id: getNextId(),
            date: parsedDate,
            type: type === 'income' ? 'income' : 'expense',
            category: category || (type === 'income' ? 'other_income' : 'other_expense'),
            description: description || `Imported record #${i + 1}`,
            amount: Math.abs(amount),
            agent,
          });
          imported++;
        }

        saveData();
        showToast(`Imported ${imported} transaction(s) from CSV`, 'success');
        navigate(currentPage); // Refresh current page
      } catch (err) {
        console.error('CSV import error:', err);
        showToast('Error importing CSV: ' + err.message, 'error');
      }
    };
    reader.readAsText(file);
  }

  function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        inQuotes = !inQuotes;
      } else if (ch === ',' && !inQuotes) {
        result.push(current);
        current = '';
      } else {
        current += ch;
      }
    }
    result.push(current);
    return result;
  }

  // ============ CSV EXPORT ============
  function exportCSV() {
    const headers = ['Date', 'Type', 'Category', 'Description', 'Amount', 'Agent'];
    const rows = appData.transactions.map(t => [
      t.date,
      t.type,
      t.category,
      `"${t.description}"`,
      t.amount.toFixed(2),
      `"${t.agent || ''}"`,
    ]);

    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    downloadFile(csv, 'thaiproperty_transactions.csv', 'text/csv');
    showToast('CSV exported successfully');
  }

  function exportFullReport() {
    const m = calcMetrics();
    const lines = [
      'ThaiProperty Financial Report',
      `Generated: ${new Date().toLocaleDateString('en-GB')}`,
      '',
      '--- SUMMARY ---',
      `Total Income,${m.totalIncome.toFixed(2)}`,
      `Total Expenses,${m.totalExpenses.toFixed(2)}`,
      `Agent Commissions,${m.totalCommissionsOut.toFixed(2)}`,
      `Operating Expenses,${m.operatingExpenses.toFixed(2)}`,
      `Net Income,${m.netIncome.toFixed(2)}`,
      `Operating Profit,${m.operatingProfit.toFixed(2)}`,
      `Balance,${m.balance.toFixed(2)}`,
      `Total Deposits,${m.totalDeposits.toFixed(2)}`,
      `Total Investments,${m.totalInvestments.toFixed(2)}`,
      '',
      '--- TRANSACTIONS ---',
      'Date,Type,Category,Description,Amount,Agent',
      ...appData.transactions.map(t => `${t.date},${t.type},${t.category},"${t.description}",${t.amount.toFixed(2)},"${t.agent || ''}"`),
      '',
      '--- DEPOSITS ---',
      'Name,Amount,Date,Type',
      ...appData.deposits.map(d => `"${d.name}",${d.amount.toFixed(2)},${d.date},${d.type}`),
      '',
      '--- AGENTS ---',
      'Name,Role,Commission,Deals,Investment',
      ...appData.agents.map(a => `"${a.name}","${a.role}",${a.commission.toFixed(2)},${a.deals},${(a.investment || 0).toFixed(2)}`),
    ];

    const csv = lines.join('\n');
    downloadFile(csv, 'thaiproperty_full_report.csv', 'text/csv');
    showToast('Full report exported');
  }

  function downloadFile(content, filename, mimeType) {
    const blob = new Blob(['\uFEFF' + content], { type: `${mimeType};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // ============ RESET DATA ============
  function resetData() {
    if (!confirm('Are you sure you want to reset all data to defaults? This cannot be undone.')) return;
    appData = JSON.parse(JSON.stringify(defaultData));
    saveData();
    showToast('Data reset to defaults', 'info');
    navigate(currentPage);
  }



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

  // ============ RENDER: DEALS ============
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
          <div class="deal-info-item"><span class="deal-info-label">Project</span><span class="deal-info-value">${d.projectName ? escapeHtml(d.projectName) : '<em class=\"empty-field\">—</em>'}</span></div>
          <div class="deal-info-item"><span class="deal-info-label">Unit #</span><span class="deal-info-value">${d.unitNumber ? escapeHtml(d.unitNumber) : '<em class=\"empty-field\">—</em>'}</span></div>
          <div class="deal-info-item"><span class="deal-info-label">Developer</span><span class="deal-info-value">${d.developerName ? escapeHtml(d.developerName) : '<em class=\"empty-field\">—</em>'}</span></div>
        `;
      } else if (d.dealCategory === 'secondary_sale') {
        specificHtml = `
          <div class="deal-info-item"><span class="deal-info-label">Property</span><span class="deal-info-value">${d.propertyName ? escapeHtml(d.propertyName) : '<em class=\"empty-field\">—</em>'}</span></div>
          <div class="deal-info-item"><span class="deal-info-label">Owner</span><span class="deal-info-value">${d.ownerName ? escapeHtml(d.ownerName) : '<em class=\"empty-field\">—</em>'}</span></div>
        `;
      } else if (d.dealCategory === 'rental') {
        specificHtml = `
          <div class="deal-info-item"><span class="deal-info-label">Property</span><span class="deal-info-value">${d.propertyName ? escapeHtml(d.propertyName) : '<em class=\"empty-field\">—</em>'}</span></div>
          <div class="deal-info-item"><span class="deal-info-label">Tenant</span><span class="deal-info-value">${d.tenantName ? escapeHtml(d.tenantName) : '<em class=\"empty-field\">—</em>'}</span></div>
          <div class="deal-info-item"><span class="deal-info-label">Owner</span><span class="deal-info-value">${d.ownerName ? escapeHtml(d.ownerName) : '<em class=\"empty-field\">—</em>'}</span></div>
          <div class="deal-info-item"><span class="deal-info-label">Rent Period</span><span class="deal-info-value">${d.rentPeriod ? escapeHtml(d.rentPeriod) : '<em class=\"empty-field\">—</em>'}</span></div>
        `;
      } else {
        const stLabel = { legal: '⚖️ Legal', visa: '✈️ Visa', consultation: '💼 Consultation', other: '📋 Other' }[d.serviceType] || '📋 Other';
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
              <div class="deal-info-item"><span class="deal-info-label">Client</span><span class="deal-info-value">${d.client ? escapeHtml(d.client) : '<em class=\"empty-field\">—</em>'}</span></div>
              <div class="deal-info-item"><span class="deal-info-label">Property Price</span><span class="deal-info-value">${d.propertyPrice ? formatCurrency(d.propertyPrice) : '<em class=\"empty-field\">—</em>'}</span></div>
              <div class="deal-info-item"><span class="deal-info-label">Commission %</span><span class="deal-info-value">${d.commissionPct ? d.commissionPct + '%' : '<em class=\"empty-field\">—</em>'}</span></div>
              <div class="deal-info-item highlight-${conf.color}"><span class="deal-info-label">Total Commission</span><span class="deal-info-value amount-positive">${d.income ? '+' + formatCurrency(d.income) : '<em class=\"empty-field\">—</em>'}</span></div>
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

  function clearDealsFilters() {
    const s = document.getElementById('deals-search'); if (s) s.value = '';
    const c = document.getElementById('deals-cat-filter'); if (c) c.value = 'all';
    const st = document.getElementById('deals-status-filter'); if (st) st.value = 'all';
    renderDeals();
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

  // ============ INIT ============
  function init() {
    // Navigation clicks
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const page = item.dataset.page;
        if (page) navigate(page);
      });
    });

    // Mobile sidebar toggle
    const toggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    if (toggle) {
      toggle.addEventListener('click', () => sidebar.classList.toggle('open'));
    }

    // Close sidebar on page click (mobile)
    document.querySelector('.main-content').addEventListener('click', () => {
      sidebar.classList.remove('open');
    });

    // Transaction filters
    const txnSearch = document.getElementById('txn-search');
    const txnTypeFilter = document.getElementById('txn-type-filter');
    const txnCatFilter = document.getElementById('txn-cat-filter');
    if (txnSearch) txnSearch.addEventListener('input', () => renderTransactions());
    if (txnTypeFilter) txnTypeFilter.addEventListener('change', () => renderTransactions());
    if (txnCatFilter) txnCatFilter.addEventListener('change', () => renderTransactions());

    // CSV file upload
    const csvInput = document.getElementById('csv-file-input');
    const uploadZone = document.getElementById('upload-zone');
    if (csvInput) {
      csvInput.addEventListener('change', (e) => {
        if (e.target.files[0]) handleCSVImport(e.target.files[0]);
      });
    }
    if (uploadZone) {
      uploadZone.addEventListener('click', () => csvInput?.click());
      uploadZone.addEventListener('dragover', (e) => { e.preventDefault(); uploadZone.style.borderColor = 'var(--accent-blue)'; });
      uploadZone.addEventListener('dragleave', () => { uploadZone.style.borderColor = ''; });
      uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.style.borderColor = '';
        if (e.dataTransfer.files[0]) handleCSVImport(e.dataTransfer.files[0]);
      });
    }

    // Update transaction badge
    const badge = document.querySelector('[data-page="transactions"] .nav-badge');
    if (badge) badge.textContent = appData.transactions.length;

    // Initial render
    navigate('dashboard');


    // Deals filters
    document.getElementById('deals-search')?.addEventListener('input', () => renderDeals());
    document.getElementById('deals-cat-filter')?.addEventListener('change', () => renderDeals());
    document.getElementById('deals-status-filter')?.addEventListener('change', () => renderDeals());

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

  }

  // ============ PUBLIC API ============
  window.app = {
    openAddTransactionModal,
    saveTransaction,
    editTransaction,
    deleteTransaction,
    openAddDepositModal,
    saveDeposit,
    openAddAgentModal,
    saveAgent,
    exportCSV,
    exportFullReport,
    resetData,
    renderDeals,
    clearDealsFilters,
    clearIncomeFilters,
    clearExpenseFilters,
    openModal,
    closeModal,
    navigate,
    toggleTheme,
  };

  // ============ THEME MANAGEMENT ============
  function initTheme() {
    const savedTheme = localStorage.getItem('thaiproperty_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('thaiproperty_theme', next);
    updateThemeIcon(next);
  }

  function updateThemeIcon(theme) {
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '🌞' : 'tj';
    if (btn) btn.textContent = theme === 'dark' ? '🌞' : '🌙';
  }

  // Start app
  document.addEventListener('DOMContentLoaded', () => {
    init();
    initTheme();
  });

})();
