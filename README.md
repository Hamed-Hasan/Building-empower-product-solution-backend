# Empowering Energy Product Solution

## Overview

 Proven track record in MERN stack development. Adept at building advanced features, as showcased by the implementation of a seamless file upload system. Skilled in integrating JavaScript libraries like FileReader API for efficient file handling and PDF.js for PDF viewing and annotation. Excels in UI/UX design, ensuring responsive and visually appealing interfaces. Proficient in user and item management with search, pagination, and CRUD operations, complemented by a custom JWT-based authentication system. Committed to code quality, readability, and modularity, with meticulous attention to detail. Eager to contribute technical excellence to impactful projects.


**View the live site frontend [here](https://empowering-energy.netlify.app).**

**View the live site backend [here](https://arraytics-product-solution-backend.vercel.app).**

## Empowering Energy Product Solution Management System 🚀


![Empowering Energy Solution](https://i.ibb.co/192QS89/uploads-bg.png)

# Entity-Relationship Diagram (ERD)

```

+-------------------+     +-----------------+
|       Item        |     |       User      |
+-------------------+     +-----------------+
| _id: ObjectId     |     | _id: ObjectId   |
| name: String      |     | name: String    |
| created_at: Date  |     | email: String   |
| created_by: String|     | password: String|
+-------------------+     | created_at: Date|
                          | created_by: String|
                          +-----------------+

```


# API Endpoints

## Main Route

# Authentication Routes 🛡️
- **POST /auth/signup:** Register a new user. 📝
- **POST /auth/login:** Log in a user. 🔐

# Item Routes 📦
- **GET /items:** Get all items. 📋
- **GET /items/:itemId:** Get a specific item by ID. 📖
- **POST /items/create-item:** Create a new item. ✨
- **PUT /items/:itemId:** Update an item by ID. 🔄
- **DELETE /items/:itemId:** Delete an item by ID. 🗑️

# User Routes 👤
- **GET /users:** Get all users. 🧑‍💼
- **GET /users/:userId:** Get a specific user by ID. 🧑‍💻
- **POST /users/create-user:** Create a new user. ➕
- **PUT /users/:userId:** Update a user by ID. 🔄
- **DELETE /users/:userId:** Delete a user by ID. 🗑️


# API ENDPOINTS & DATA

Certainly! Here are the API endpoints and JSON data for the provided code with emojis:

### Authentication Routes
**POST /signup: Register a new user. 📝**
- Endpoint: `/auth/signup`
- JSON Data:
  ```json
  {
    "username": "example",
    "email": "example@example.com",
    "password": "your_password"
  }
  ```

**POST /login: Log in a user. 🔐**
- Endpoint: `/auth/login`
- JSON Data:
  ```json
  {
    "email": "example@example.com",
    "password": "your_password"
  }
  ```

### Item Routes
**GET /items: Get all items. 📋**
- Endpoint: `/items`

**GET /items/:itemId: Get a specific item by ID. 📖**
- Endpoint: `/items/:itemId`

**POST /items/create-item: Create a new item. 📦**
- Endpoint: `/items/create-item`
- JSON Data:
  ```json
  {
    "name": "New Item",
    "created_by": "user_id"
  }
  ```

**PUT /items/:itemId: Update an item by ID. 🔄**
- Endpoint: `/items/:itemId`
- JSON Data:
  ```json
  {
    "name": "Updated Item",
    "created_by": "user_id"
  }
  ```

**DELETE /items/:itemId: Delete an item by ID. 🗑️**
- Endpoint: `/items/:itemId`

### User Routes
**GET /users: Get all users. 📊**
- Endpoint: `/users`

**GET /users/:userId: Get a specific user by ID. 🧑‍💻**
- Endpoint: `/users/:userId`

**POST /users/create-user: Create a new user. 🧑‍🚀**
- Endpoint: `/users/create-user`
- JSON Data:
  ```json
  {
    "name": "New User",
    "email": "newuser@example.com",
    "password": "user_password",
    "created_by": "admin_id"
  }
  ```

**PUT /users/:userId: Update a user by ID. 🔄**
- Endpoint: `/users/:userId`
- JSON Data:
  ```json
  {
    "name": "Updated User",
    "email": "updateduser@example.com",
    "password": "updated_password",
    "created_by": "admin_id"
  }
  ```

**DELETE /users/:userId: Delete a user by ID. 🗑️**
- Endpoint: `/users/:userId`

### Model Definitions
**User Model: 👤**
```javascript
{
  "name": "String",
  "email": "String",
  "password": "String",
  "created_at": "Date",
  "created_by": "String"
}
```

**Item Model: 📦**
```javascript
{
  "name": "String",
  "created_at": "Date",
  "created_by": "String"
}
```



## Backend Features and Technologies 🚀

**Features:**
- Custom Authentication with JWT 🔐
- Role-Based Access Control (RBAC) 🛡️
- Item Management API 📦
- User Management API 👤
- Authentication Routes 🛡️

**Technologies:**
- Node.js 💻
- Express.js ⚡
- MongoDB with Mongoose 🐘
- Bcrypt for password hashing 🔑
- Body-parser for parsing incoming request bodies 📝
- CORS for enabling cross-origin resource sharing ⚙️
- Dotenv for environment variable management 🌐
- Nodemon for development server auto-reloading 🔄
- Zod for TypeScript-first schema declaration and validation 🏗️

## Frontend Features and Technologies 🌐

## Features
- **Upload Functionality:**
  - Create a button for initiating the file upload process.
  - Develop a form allowing users to select/upload an image or PDF from their device or take a photo.

- **File Type Handling:**
  - Verify the selected file's type (image, PDF, etc.).
  - Display the selected file in a viewer within the browser.

- **Highlighting Feature:**
  - Implement a tool enabling users to highlight specific areas (like invoice numbers) within the displayed image or PDF.
  - Enable updating the file with highlighted information.

## Technologies
- **Frontend:**
  - React for building user interfaces ⚛️
  - Vite for frontend tooling and development 🛠️
  - Chakra UI for building accessible and themeable UI components 👩‍🎨
  - Emotion for styling components with JavaScript 💅
  - Axios for making HTTP requests 🌐
  - Framer Motion for creating smooth animations 🔄
  - React Query for data fetching and state management 📊
  - React Router for navigation 🚦
  - React Icons for including popular icon sets 🎨
  - Yup for form validation 📝
  - SweetAlert2 for displaying beautiful alerts 🍬
  - Tailwind CSS for utility-first styling 🎨

## Additional Information
- Use relevant JavaScript libraries for file handling, such as FileReader API for uploading and displaying files.
- For PDF viewing and annotation, consider using libraries like PDF.js or other suitable options.
- For image highlighting, utilize canvas or image editing libraries.
- Ensure compatibility across browsers/devices and responsive design principles.
- Bonus points for clean UI/UX and performance optimization.


# Installation Frontend - Backend

To make the installation process for both the frontend and backend repositories attractive, you can follow these steps:

### Backend Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Hamed-Hasan/Building-empower-product-solution-backend.git
   cd empower-product-solution-backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Environment Variables:**
   Create a `.env` file in the root directory and add the necessary environment variables like `MONGODB_URI`, `JWT_SECRET`, etc.

4. **Run the Application:**
   ```bash
   npm start
   ```

   This will start the backend server.

5. **Verify Backend Installation:**
   Open your browser and go to [http://localhost:5000](http://localhost:5000) to verify that the backend server is running.

### Frontend Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Hamed-Hasan/Building-empower-product-solution-frontend.git
   cd empower-product-solution-frontend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Backend API URL:**
   In the `.env` file or in your configuration, set the `REACT_APP_API_URL` to the backend API URL (e.g., `http://localhost:5000`).

4. **Run the Application:**
   ```bash
   npm run dev
   ```

   This will start the frontend development server.

5. **Verify Frontend Installation:**
   Open your browser and go to [http://localhost:5471](http://localhost:5471) to verify that the frontend application is running.

Now, you have both the backend and frontend up and running. You can explore the Empowering Energy Product Solution Management System by navigating through the provided routes and endpoints.

Feel free to reach out if you encounter any issues during the installation process or if you have any questions about the codebase!