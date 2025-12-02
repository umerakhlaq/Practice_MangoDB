# 🚀 Project Title

A clean and modular Node.js + MongoDB project demonstrating CRUD (Create, Read, Update, Delete) operations using **Express**, **MongoDB**, and **Mongoose**.

---

## 📌 Overview

This project is a simple yet professional backend structure that shows how to:

* Connect Node.js to MongoDB
* Create a clean API using Express
* Perform CRUD operations
* Organize your project files professionally

It is ideal for beginners learning MERN stack or anyone who wants a reusable project template.

---

## 📁 Folder Structure

```
project/
│── db.js
│── models/
│    └── Student.js
│── routes/
│    └── studentRoutes.js
│── app.js
└── package.json
```

---

## 🔧 Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **CORS**

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone <your-repo-url>
cd project
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Start the server

```
node app.js
```

Server will start on:

```
http://localhost:3000
```

---

## 🗄️ Database Connection

The project connects to MongoDB using a separate `db.js` file for clean code separation.

```
mongoose.connect("mongodb://127.0.0.1:27017/students")
```

When successfully connected, it prints:

```
MongoDB Connected Successfully
```

---

## 📚 CRUD API Endpoints

### ➤ **Create Student**

**POST** `/students/add`

Body example:

```json
{
  "name": "Ali",
  "age": 21,
  "city": "Karachi"
}
```

---

### ➤ **Get All Students**

**GET** `/students/all`

Returns list of all students.

---

### ➤ **Update Student**

**PUT** `/students/update/:id`

Example body:

```json
{
  "age": 20
}
```

---

### ➤ **Delete Student**

**DELETE** `/students/delete/:id`

Deletes by ID.

---

## 🧪 Testing the API

You can test the endpoints using:

* Postman
* Thunder Client (VS Code)
* cURL
* Any frontend app

---

## 🌟 Features

* Clean project structure
* Async/await MongoDB operations
* Professional error-handling
* Easy to extend for full MERN projects
* Beginner-friendly, production-style code

---

## 📝 License

This project is free to use and modify.

---

## 👨‍💻 Author

**Your Name**
Full-stack / MERN Developer

Feel free to use or modify this project anytime.
