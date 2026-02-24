# 🛒 Multi Vendor Grocery App

A web-based grocery shopping application where multiple sellers can sell products and customers can purchase them online.

**Developed by:** Sajin C L

---

## 📌 Project Overview

This application supports multiple sellers and customers within a single platform.  
The system includes authentication, product management, cart functionality, order tracking, and role-based dashboards.

---

## 👥 User Roles

### 👤 Customer
- Register & Login
- Browse products
- Search & Filter products
- Pagination support
- View product details
- Add to cart
- Place order
- View order history
- Reset password using Email OTP

### 🏪 Seller
- Add / Edit / Delete products
- Manage stock
- View customer orders
- Update order status
- View earnings
- Seller dashboard access

### 🛠 Admin
- Manage users & sellers
- Block / Unblock accounts
- Manage categories & brands
- Monitor all orders
- Cancel orders if needed
- Admin dashboard access

---

## 🏗️ Tech Stack

### Frontend
- React.js
- Bootstrap
- CSS
- Axios

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

## 🔄 Order Flow

1. User places an order  
2. Order goes to Seller  
3. Seller ships the order to Admin  
4. Admin ships the order to Customer  
5. Admin can cancel the order if the seller fails to ship  

**Flow:** User → Seller → Admin → Customer

---

# 📸 Screenshots

## 🧑‍💻 Customer Side

### Landing Page
<p align="center">
  <img src="screenshots/landing_page.png" width="600"/>
</p>

### Pagination Support
<p align="center">
  <img src="screenshots/pagination_support.png" width="600"/>
</p>

### User Profile
<p align="center">
  <img src="screenshots/user_profile.png" width="600"/>
</p>

### Product Details
<p align="center">
  <img src="screenshots/product_details.png" width="600"/>
</p>

### My Cart
<p align="center">
  <img src="screenshots/my_cart.png" width="600"/>
</p>

### Checkout Page
<p align="center">
  <img src="screenshots/checkout_page.png" width="600"/>
</p>

### Order Success Page
<p align="center">
  <img src="screenshots/order_success_page.png" width="600"/>
</p>

### My Order Page
<p align="center">
  <img src="screenshots/my_order_page.png" width="600"/>
</p>

---

## 🏪 Seller Side

### Seller Profile
<p align="center">
  <img src="screenshots/seller_profile.png" width="600"/>
</p>

### Seller Dashboard
<p align="center">
  <img src="screenshots/seller_dashboard.png" width="600"/>
</p>

### Seller Earnings
<p align="center">
  <img src="screenshots/seller_earnings.png" width="600"/>
</p>

### Seller Products
<p align="center">
  <img src="screenshots/seller_products.png" width="600"/>
</p>

### Seller Orders
<p align="center">
  <img src="screenshots/seller_orders.png" width="600"/>
</p>

---

## 🛠 Admin Side

### Admin Dashboard
<p align="center">
  <img src="screenshots/admin_dashboard.png" width="600"/>
</p>

### Admin Brand List
<p align="center">
  <img src="screenshots/admin_brand_list.png" width="600"/>
</p>

### Admin Category List
<p align="center">
  <img src="screenshots/admin_category_list.png" width="600"/>
</p>

### Admin User List
<p align="center">
  <img src="screenshots/customer_list.png" width="600"/>
</p>

### Admin Seller List
<p align="center">
  <img src="screenshots/seller_list.png" width="600"/>
</p>

### Admin Orders
<p align="center">
  <img src="screenshots/admin_orders.png" width="600"/>
</p>

### Customer Details
<p align="center">
  <img src="screenshots/admin_customer_details.png" width="600"/>
</p>

---

## 🔐 Authentication Pages

### Register Page
<p align="center">
  <img src="screenshots/register_page.png" width="600"/>
</p>

### Login Page
<p align="center">
  <img src="screenshots/login_page.png" width="600"/>
</p>

### Forgot Password Page
<p align="center">
  <img src="screenshots/reset_password.png" width="600"/>
</p>

### OTP Verification
<p align="center">
  <img src="screenshots/otp.png" width="600"/>
</p>

---


## 📄 License

This project is for educational purposes.
