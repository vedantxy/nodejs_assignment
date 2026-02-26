# Node.js Assignments

This repository contains Node.js backend assignments built using **Express.js**.

---

## 📁 Assignment 1 — Student REST API

A simple RESTful API built with **Node.js** and **Express.js** that performs CRUD-like operations on a list of student records stored in-memory.

### 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js v5
- **Language:** JavaScript

### 📦 Installation

```bash
cd assignment_1
npm install
node index.js
```

Server will start on **http://localhost:3000**

### 🔗 API Endpoints

| Method | Endpoint                         | Description                                  |
|--------|----------------------------------|----------------------------------------------|
| GET    | `/`                              | Welcome route — returns author name          |
| GET    | `/students`                      | Returns the list of all students             |
| GET    | `/students/topper`               | Returns the student with the highest CGPA    |
| GET    | `/students/average`              | Returns the average CGPA of all students     |
| GET    | `/students/count`                | Returns the total number of students         |
| GET    | `/students/:id`                  | Returns a specific student by ID             |
| GET    | `/students/branch/:branchName`   | Returns all students of a specific branch    |

### 📄 Sample Student Data

Each student object has the following fields:

```json
{
  "id": 1,
  "name": "Aarav Sharma",
  "branch": "CSE",
  "semester": 8,
  "cgpa": 9.3
}
```

**Branches included:** CSE, IT, ECE, AI, Data Science

### 📝 Example Responses

#### GET `/students/topper`
```json
{
  "id": 1,
  "name": "Aarav Sharma",
  "branch": "CSE",
  "semester": 8,
  "cgpa": 9.3
}
```

#### GET `/students/average`
```json
{
  "averageCGPA": 8.51
}
```

#### GET `/students/count`
```json
{
  "totalstudents": 10
}
```

#### GET `/students/branch/CSE`
```json
[
  { "id": 1, "name": "Aarav Sharma", "branch": "CSE", "semester": 8, "cgpa": 9.3 },
  { "id": 4, "name": "Meera Iyer", "branch": "CSE", "semester": 8, "cgpa": 9.1 },
  { "id": 6, "name": "Ananya Reddy", "branch": "CSE", "semester": 6, "cgpa": 8.7 },
  { "id": 10, "name": "Neha Gupta", "branch": "CSE", "semester": 6, "cgpa": 7.9 }
]
```

### ✨ Features

- Retrieve all student records
- Find the topper (highest CGPA)
- Calculate the average CGPA
- Get total student count
- Search students by ID
- Filter students by branch name (case-insensitive)

---

## 📁 Assignment 2 — E-Commerce Product API

A RESTful API built with **Node.js** and **Express.js** that manages product data for an e-commerce platform using an in-memory JSON array.

### 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Middleware:** CORS, express.json()
- **Language:** JavaScript

### 📦 Installation

```bash
cd assignmment_2
npm install
node index.js
```

Server will start on **http://localhost:3000**

### 🔗 API Endpoints

| Method | Endpoint                           | Description                              | Status Code |
|--------|------------------------------------|------------------------------------------|-------------|
| GET    | `/products`                        | Returns all products                     | 200         |
| GET    | `/products/:id`                    | Returns a product by ID                  | 200 / 404   |
| GET    | `/products/category/:categoryName` | Returns products filtered by category    | 200         |
| POST   | `/products`                        | Adds a new product                       | 201         |
| PUT    | `/products/:id`                    | Replaces an entire product               | 200 / 404   |
| PUT    | `/products/:id/stock`              | Updates only the stock of a product      | 200 / 404   |
| PUT    | `/products/:id/price`              | Updates only the price of a product      | 200 / 404   |

### 📄 Sample Product Data

Each product object has the following fields:

```json
{
  "id": 1,
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 799,
  "stock": 25,
  "rating": 4.3
}
```

**Categories included:** Electronics, Footwear, Accessories, Fashion

### 📝 Example Responses

#### GET `/products/category/Electronics`
```json
[
  { "id": 1, "name": "Wireless Mouse", "category": "Electronics", "price": 799, "stock": 25, "rating": 4.3 },
  { "id": 4, "name": "Smart Watch", "category": "Electronics", "price": 4999, "stock": 12, "rating": 4.4 }
]
```

#### POST `/products`
**Request Body:**
```json
{
  "name": "Bluetooth Speaker",
  "category": "Electronics",
  "price": 2999,
  "stock": 20,
  "rating": 4.6
}
```
**Response (201):**
```json
{
  "message": "Product created",
  "product": {
    "id": 6,
    "name": "Bluetooth Speaker",
    "category": "Electronics",
    "price": 2999,
    "stock": 20,
    "rating": 4.6
  }
}
```

#### PUT `/products/2/stock`
**Request Body:**
```json
{ "stock": 60 }
```
**Response (200):** Returns the product with updated stock.

#### PUT `/products/3/price`
**Request Body:**
```json
{ "price": 1299 }
```
**Response (200):** Returns the product with updated price.

### ✨ Features

- Retrieve all product records
- Search products by ID
- Filter products by category (case-insensitive)
- Add new products with auto-generated IDs
- Replace a product entirely (PUT)
- Update only the stock of a product
- Update only the price of a product
- Proper HTTP status codes (200, 201, 404)

---

## 👤 Author

**Vedant**

## 📜 License

ISC
