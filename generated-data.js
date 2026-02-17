  const defaultData = {
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
      "description": "Comission Zenit Eli B426\\B427 (5,800,000 THB property)",
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
  "nextId": 271
};
