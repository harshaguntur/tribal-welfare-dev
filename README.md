TribalConnect

TribalConnect is a full‑stack MERN (MongoDB, Express, React, Node) web application designed to support tribal communities by facilitating donations and local goods e‑commerce. The platform connects donors, community members, and small local vendors to increase economic opportunities and direct social impact through secure, easy‑to‑use technology.

Table of Contents

Key Features

Tech Stack

Architecture Overview

Key Features

Donation flow (one‑time and recurring) with payment gateway integration

E‑commerce for local goods: product listings, cart, checkout

Secure user authentication and role‑based access (Donor, Vendor, Admin)

Vendor dashboard for inventory and order management

Admin panel to manage users, monitor donations and product approvals

Order history, receipts, and simple reporting for impact tracking

Responsive UI for desktop & mobile

Tech Stack

Frontend: React (Create React App / Vite), React Router, Context / Redux 

Backend: Node.js, Express.js

Database: MongoDB 

Payments: Razorpay

Authentication: JWT (access + refresh tokens) and bcrypt for password hashing

Architecture Overview

Client (React) — UI, authentication flows, product browsing, cart, checkout. Talks to backend via REST API.

Server (Node + Express) — REST API for authentication, products, orders, donations, admin endpoints. Handles payment webhooks.

Database (MongoDB) — Users, Products, Orders, Donations, Transactions, VendorProfiles.

Third‑party services — Razorpay for payments
