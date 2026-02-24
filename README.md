# 🛒 Multi Vendor Grocery App

A web-based grocery shopping application where multiple sellers can sell products and customers can purchase them online.

Developed by: Sajin C L

---

## 📌 Project Overview

This application supports multiple sellers and customers within a single platform.

- Customers can browse and order grocery products
- Sellers can manage products and handle orders
- Admin can control users, sellers, and categories

The system includes secure authentication, product management, cart system, order tracking, and role-based dashboards.

---

## 🏗️ Tech Stack

### Frontend
- React.js
- Bootstrap
- CSS
- Axios (API Integration)

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication & Security
- JWT Token Authentication
- Password hashing using bcrypt
- Forgot Password with Email OTP verification

---

## 👥 User Roles

### 👤 Customer
- Register & Login
- Browse products
- Pagination for product listing
- Search & Filter products
- Add to cart
- Place order
- View order history
- Reset password using Email OTP

### 🏪 Seller
- Add / Edit / Delete products
- Manage stock
- View customer orders
- Update order status

### 🛠 Admin
- Manage users & sellers
- Block / Unblock accounts
- Manage categories & brands
- Monitor and cancel orders

---

## 🛍️ Main Features

- JWT-based authentication
- Forgot password with Email OTP
- Product search & category filter
- Mongoose schema validation
- Pagination for product listing
- Cart system
- Order management system
- Seller dashboard
- Admin control panel
- REST API integration between frontend and backend

---

## 🔄 Order Flow

1. User places an order
2. Order goes to the Seller
3. Seller ships the order to Admin
4. Admin ships the order to Customer
5. Admin can cancel the order if the seller fails to ship

Flow:
User → Seller → Admin → Customer

