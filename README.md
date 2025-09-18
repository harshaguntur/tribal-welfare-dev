# VanaEkam

**VanaEkam** is a full-stack **MERN (MongoDB, Express, React, Node.js)** web application created to empower tribal communities.  
It enables **secure donations** and supports **local e-commerce** by connecting donors, community members, and vendors — driving economic growth and social impact.

---

## 🚀 Features

- 💳 Donation flow (one-time & recurring) with Razorpay integration  
- 🛍️ E-commerce module: product listings, shopping cart & checkout  
- 🔐 Secure authentication with role-based access (Donor, Vendor, Admin)  
- 📦 Vendor dashboard for product & order management  
- 🛠️ Admin panel to monitor donations, approve products & manage users  
- 📜 Order history, receipts & reporting for impact tracking  
- 📱 Fully responsive design for desktop & mobile  

---

## 🛠️ Tech Stack

- **Frontend:** React, React Router, Redux/Context API  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose  
- **Payments:** Razorpay API  
- **Authentication:** JWT (access + refresh tokens), bcrypt  

---

## 🏗️ Architecture

- **Client (React):** User interface, product browsing, checkout, authentication flows.  
- **Server (Express):** REST APIs for users, products, donations & admin operations; payment webhooks.  
- **Database (MongoDB):** Stores users, products, orders, donations, and vendor profiles.  
- **Third-Party Services:** Razorpay for payment processing.  

---

## ⚡ Getting Started

### Prerequisites
- Node.js v16+  
- MongoDB (local or Atlas)  
- Razorpay account (for payments)  

### Installation

```bash
# Clone repo
git clone https://github.com/your-username/vanaekam.git
cd vanaekam

# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### Running the app
Start backend
```bash
cd server && npm run dev
```

# Start frontend
```bash
cd client && npm start
```

### 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.
