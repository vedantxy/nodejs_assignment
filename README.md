# 📦 Assignment 2 — E-Commerce Product API

A RESTful API built with **Node.js** and **Express.js** that manages product data for an e-commerce platform using an in-memory JSON array.

---

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Middleware:** CORS, express.json()
- **Language:** JavaScript

---

## 📦 Installation

```bash
cd assignmment_2
npm install
node index.js
```

Server will start on **http://localhost:3000**

---

## 🔗 API Endpoints

| Method | Endpoint                              | Description                              | Status Code |
|--------|---------------------------------------|------------------------------------------|-------------|
| GET    | `/products`                           | Returns all products                     | 200         |
| GET    | `/products/:id`                       | Returns a product by ID                  | 200 / 404   |
| GET    | `/products/category/:categoryName`    | Returns products filtered by category   | 200         |
| POST   | `/products`                           | Adds a new product                       | 201         |
| PUT    | `/products/:id`                       | Replaces an entire product               | 200 / 404   |
| PUT    | `/products/:id/stock`                 | Updates only the stock of a product      | 200 / 404   |
| PUT    | `/products/:id/price`                 | Updates only the price of a product      | 200 / 404   |

---

## 📄 Sample Product Data

Each product has the following structure:

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

---

## 📝 Example Requests & Responses

### GET `/products`
Returns all products.
```json
[
  { "id": 1, "name": "Wireless Mouse", "category": "Electronics", "price": 799, "stock": 25, "rating": 4.3 },
  { "id": 2, "name": "Running Shoes", "category": "Footwear", "price": 2499, "stock": 40, "rating": 4.5 }
]
```

---

### GET `/products/3`
Returns product with ID 3.
```json
{
  "id": 3,
  "name": "Laptop Stand",
  "category": "Accessories",
  "price": 999,
  "stock": 30,
  "rating": 4.2
}
```

---

### GET `/products/category/Electronics`
Returns all products in the Electronics category (case-insensitive).
```json
[
  { "id": 1, "name": "Wireless Mouse", "category": "Electronics", "price": 799, "stock": 25, "rating": 4.3 },
  { "id": 4, "name": "Smart Watch", "category": "Electronics", "price": 4999, "stock": 12, "rating": 4.4 }
]
```

---

### POST `/products`
**Body:**
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

---

### PUT `/products/2`
Replaces the entire product with ID 2.

**Body:**
```json
{
  "name": "Running Shoes Pro",
  "category": "Footwear",
  "price": 2999,
  "stock": 35,
  "rating": 4.7
}
```
**Response (200):** Returns the updated product object.

---

### PUT `/products/2/stock`
Updates only the stock of product with ID 2.

**Body:**
```json
{ "stock": 60 }
```
**Response (200):** Returns the product with updated stock.

---

### PUT `/products/3/price`
Updates only the price of product with ID 3.

**Body:**
```json
{ "price": 1299 }
```
**Response (200):** Returns the product with updated price.

---

## ✨ Features

- Retrieve all product records
- Search products by ID
- Filter products by category (case-insensitive)
- Add new products with auto-generated IDs
- Replace a product entirely (PUT)
- Update only stock of a product
- Update only price of a product
- Proper HTTP status codes (200, 201, 404)

---

## 👤 Author

**Vedant**

## 📜 License

ISC

