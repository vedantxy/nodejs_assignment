🛒 Assignment 2 — E-Commerce Product API

A REST API that manages product listings using an in-memory JSON array.

🎯 Objective

Build an API that:

Implements 3 GET routes

Implements 1 POST route

Implements 3 PUT routes

Uses proper HTTP status codes

Uses middleware correctly

Follows REST principles

No database. No authentication. No validation libraries.

🛠 Technical Requirements Fulfilled

✔ Uses Express
✔ Uses express.json()
✔ Uses CORS middleware
✔ Correct middleware order
✔ Proper status codes (200, 201, 404)
✔ Everything in-memory
✔ No external libraries beyond express and cors

📦 Installation & Run
cd assignmment_2
npm install
node index.js

Server runs at:

http://localhost:3000
📦 Product Structure
{
  id: 1,
  name: "Wireless Mouse",
  category: "Electronics",
  price: 799,
  stock: 25,
  rating: 4.3
}
🔗 API Routes
✅ GET Routes
1️⃣ GET /products

Returns all products
Status: 200

2️⃣ GET /products/:id

Returns product by ID
Status:

200 → if found

404 → if not found

3️⃣ GET /products/category/:categoryName

Returns products by category
Status: 200
Returns empty array if none found

✅ POST Route
4️⃣ POST /products

Creates a new product.

Example Body:

{
  "name": "Bluetooth Speaker",
  "category": "Electronics",
  "price": 2999,
  "stock": 20,
  "rating": 4.6
}

Response:

Auto-generated ID

Status 201

Returns created product

✅ PUT Routes
5️⃣ PUT /products/:id

Replaces entire product
Status:

200 → success

404 → if not found

6️⃣ PUT /products/:id/stock

Updates only stock field

Example:

{
  "stock": 60
}
7️⃣ PUT /products/:id/price

Updates only price field

Example:

{
  "price": 1299
}
🌐 Submission Requirements

Each submission must include:

1️⃣ GitHub Repository Link

Clean structure

Proper README

Clear run instructions

2️⃣ Postman Documentation Link

All 7 routes documented

Sample requests & responses

Proper status codes visible

3️⃣ Render Deployment Link

Public API

All routes working

No localhost references

👤 Author

Vedant Patel

📜 License

ISC
