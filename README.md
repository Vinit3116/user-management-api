# User Management API

## Overview

This project is a **RESTful API** for managing users using **Node.js, Express, and MongoDB**.  
It provides **CRUD (Create, Read, Update, Delete)** operations with proper error handling and validation.

## Features

✅ Create a new user  
✅ Get all users  
✅ Get a user by ID  
✅ Update user details  
✅ Delete a user  
✅ Input validation and error handling  
✅ Secure environment variable handling  

---

## Technologies Used

- **Node.js** (Backend Framework)
- **Express.js** (Web Framework)
- **MongoDB with Mongoose** (Database)
- **Postman** (API Testing)

---

## **Setup Instructions**

### **Prerequisites**
Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Runtime)
- [MongoDB](https://www.mongodb.com/) (Database)
- [Postman](https://www.postman.com/) (API Testing)

### **Installation**
1. **Clone the repository:**
   ```sh
   git clone <repository_url>
   cd <project_directory>
2. **Install dependencies:**
    npm install
3. **Create a .env file in the root directory and add your MongoDB connection string:**
    MONGO_URL=mongodb://localhost:27017/userDB
    PORT=5000
4. **Start the server:**
    npm start

---

### **API Endpoints**

### 1. Create a User
**POST** `/users`

#### Request Body
```json
{
  "name": "Vinit Patel",
  "email": "vinitpatel16@gmail.com",
  "age": 21
}

#### Response
```json
{
  "_id": "67d31af9fd3af147ef687fdd",
  "name": "Vinit Patel",
  "email": "vinitpatel31@gmail.com",
  "age": 21,
  "createdAt": "2025-03-13T17:50:49.367Z",
  "updatedAt": "2025-03-13T17:50:49.367Z",
  "__v": 0
}

### **2. Create a User**
**GET** `/users`

#### **Response**
[
    {
        "_id": "67d31af9fd3af147ef687fdd",
        "name": "Vinit Patel",
        "email": "vinitpatel31@gmail.com",
        "age": 21,
        "createdAt": "2025-03-13T17:50:49.367Z",
        "updatedAt": "2025-03-13T17:50:49.367Z",
        "__v": 0
    }
] 

### **3. Get User By ID**
**GET** `/users/:id`

#### **Example Request**
**
GET** /users/67d31af9fd3af147ef687fdd

#### **Response**
{
        "_id": "67d31af9fd3af147ef687fdd",
        "name": "Vinit Patel",
        "email": "vinitpatel31@gmail.com",
        "age": 21,
}

### **4. Update a User**
**PUT** /users/:id

#### **Request Body**
```json
{
  "name": "Vinit Updated",
  "email": "vinitpatel16@gmail.com"
}

#### **Response**
{
  "message": "User updated successfully"
}

### **5. Delete a User**
**DELETE** `/users/:id`

Error Handling
The API includes proper error handling:

Error Code             Reason
    400	       Bad Request (Invalid input)
    404	       Not Found (User not found)
    500	       Internal Server Error

Security Considerations
Environment Variables:
Sensitive data like database connection strings are stored in .env (not pushed to GitHub).

Validation:
All input is validated to prevent injection attacks.

Error Handling:
API responses do not expose internal errors.
Rate Limiting & CORS (For Deployment):
Can be added to prevent API abuse.

Testing with Postman
Open Postman.
Choose request type (GET, POST, PUT, DELETE).
Enter request URL (e.g., http://localhost:5000/users).
Add JSON data (for POST and PUT).
Click Send and verify the response.