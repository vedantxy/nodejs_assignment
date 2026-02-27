# Assignment 3 - Indian States REST API

A RESTful API built with **Node.js** and **Express.js** that manages data of all 28 Indian States. It supports full CRUD operations including GET, POST, PUT, PATCH, and DELETE routes.

---

## 🚀 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Middleware:** CORS, express.json

---

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Start the server
node index.js
```

Server runs on: `http://localhost:3000`

---

## 🗄️ Data Structure

Each state object contains the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `id` | Number | Unique identifier |
| `name` | String | Name of the state |
| `population` | Number | Total population |
| `literacyRate` | Number | Literacy rate (%) |
| `annualBudget` | Number | Annual budget (in crores) |
| `gdp` | Number | GDP (in lakhs) |

### Sample Data

```json
{
  "id": 14,
  "name": "Maharashtra",
  "population": 112374333,
  "literacyRate": 82.34,
  "annualBudget": 340000,
  "gdp": 35000000
}
```

---

## 🛣️ API Routes

### ✅ GET Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Returns a welcome message |
| GET | `/states` | Returns all 28 states |
| GET | `/states/highest-gdp` | Returns the state with the highest GDP |
| GET | `/states/:id` | Returns a specific state by ID |

#### Example Response — `GET /states/:id`
```json
{
  "id": 7,
  "name": "Gujarat",
  "population": 63872399,
  "literacyRate": 78.03,
  "annualBudget": 243965,
  "gdp": 21000000
}
```

---

### ➕ POST Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/states` | Add a new state |

#### Request Body
```json
{
  "name": "New State",
  "population": 5000000,
  "literacyRate": 75.00,
  "annualBudget": 50000,
  "gdp": 3000000
}
```

#### Response — `201 Created`
```json
{
  "id": 29,
  "name": "New State",
  "population": 5000000,
  "literacyRate": 75.00,
  "annualBudget": 50000,
  "gdp": 3000000
}
```

---

### ✏️ PUT Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| PUT | `/states/:id` | Fully update a state by ID |
| PUT | `/states/:id/budget` | Update only the annual budget of a state |
| PUT | `/states/:id/population` | Update only the population of a state |

#### Example — `PUT /states/:id/budget` Request Body
```json
{
  "annualBudget": 500000
}
```

---

### 🔧 PATCH Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| PATCH | `/states/:id` | Partially update any field(s) of a state |
| PATCH | `/states/:id/literacy` | Update only the literacy rate of a state |
| PATCH | `/states/:id/gdp` | Update only the GDP of a state |

#### Example — `PATCH /states/:id/literacy` Request Body
```json
{
  "literacyRate": 85.50
}
```

---

### ❌ DELETE Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| DELETE | `/states/:id` | Delete a state by ID |
| DELETE | `/states/name/:stateName` | Delete a state by name |
| DELETE | `/states/low-literacy/:percentage` | Delete all states with literacy rate below given percentage |

#### Example — `DELETE /states/low-literacy/70`
Deletes all states with a literacy rate below 70%.

#### Response
```json
{
  "deletedCount": 5
}
```

---

## 📋 All 28 States Included

| ID | State | Population | Literacy Rate |
|----|-------|-----------|---------------|
| 1 | Andhra Pradesh | 49,386,799 | 67.02% |
| 2 | Arunachal Pradesh | 1,383,727 | 65.38% |
| 3 | Assam | 31,205,576 | 72.19% |
| 4 | Bihar | 104,099,452 | 61.80% |
| 5 | Chhattisgarh | 25,545,198 | 70.28% |
| 6 | Goa | 1,458,545 | 88.70% |
| 7 | Gujarat | 63,872,399 | 78.03% |
| 8 | Haryana | 25,351,462 | 75.55% |
| 9 | Himachal Pradesh | 6,864,602 | 82.80% |
| 10 | Jharkhand | 32,988,134 | 66.41% |
| 11 | Karnataka | 61,095,297 | 75.36% |
| 12 | Kerala | 33,406,061 | 94.00% |
| 13 | Madhya Pradesh | 72,626,809 | 69.32% |
| 14 | Maharashtra | 112,374,333 | 82.34% |
| 15 | Manipur | 2,855,794 | 79.85% |
| 16 | Meghalaya | 2,966,889 | 75.48% |
| 17 | Mizoram | 1,097,206 | 91.33% |
| 18 | Nagaland | 1,978,502 | 79.55% |
| 19 | Odisha | 41,974,218 | 72.87% |
| 20 | Punjab | 27,743,338 | 75.84% |
| 21 | Rajasthan | 68,548,437 | 66.11% |
| 22 | Sikkim | 610,577 | 81.42% |
| 23 | Tamil Nadu | 72,147,030 | 80.09% |
| 24 | Telangana | 35,003,674 | 72.80% |
| 25 | Tripura | 3,673,917 | 87.22% |
| 26 | Uttar Pradesh | 199,812,341 | 67.68% |
| 27 | Uttarakhand | 10,086,292 | 78.82% |
| 28 | West Bengal | 91,276,115 | 76.26% |

---

## 📁 Project Structure

```
assignment_3/
├── index.js          # Main server file with all routes
├── package.json      # Project metadata and dependencies
├── package-lock.json # Dependency lock file
├── .gitignore        # Ignores node_modules
└── README.md         # Project documentation
```

---

## 👤 Author

**Vedant**
