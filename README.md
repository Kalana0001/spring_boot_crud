# Spring Boot CRUD Application with MySQL

This project is a Spring Boot-based CRUD (Create, Read, Update, Delete) application for managing employee data. It uses MySQL as the database and includes a RESTful API for performing CRUD operations.

## Features

- Add new employees.
- Retrieve all employees or fetch details of a specific employee by ID.
- Update existing employee details.
- Delete an employee by ID.
- Cross-Origin Resource Sharing (CORS) enabled for integration with frontend frameworks like React.

## Technologies Used

- **Backend:** Spring Boot
- **Database:** MySQL
- **ORM:** Hibernate (JPA)
- **Java:** Java 17+
- **Build Tool:** Maven

## Setup Instructions

### Prerequisites

1. **Java Development Kit (JDK) 17 or later**  
   Ensure that Java is installed and set up on your system.
   ```bash
   java -version
   ```
   
2. **MySQL Database**  
   Install and configure a MySQL server. Create a database for this project.

3. **Maven**  
   Install Maven for dependency management and build.

4. **IDE**  
   Use an IDE such as IntelliJ IDEA, Eclipse, or Spring Tool Suite.

---

### Clone the Repository

```bash
git clone <repository-url>
cd spring-boot-crud-app
```

### Configure MySQL Database

Update the `application.properties` file in `src/main/resources` with your MySQL database configuration:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### Build and Run the Application

1. Build the project:
   ```bash
   mvn clean install
   ```

2. Run the application:
   ```bash
   mvn spring-boot:run
   ```

The application will start at `http://localhost:8080`.

---

## API Endpoints

Here are the available API endpoints:

### Base URL: `/api/employee`

1. **Add Employee**  
   **POST** `/addEmployee`  
   **Request Body:**  
   ```json
   {
       "name": "John Doe",
       "position": "Software Engineer",
       "salary": 50000
   }
   ```
   **Response:** Returns the added employee object.

2. **Get All Employees**  
   **GET** `/getEmployee`  
   **Response:**  
   Returns a list of all employees.

3. **Get Employee by ID**  
   **GET** `/getEmployee/{id}`  
   **Path Parameter:** `id` (Employee ID)  
   **Response:** Returns the employee object or 404 if not found.

4. **Update Employee**  
   **PATCH** `/updateEmployee/{id}`  
   **Path Parameter:** `id` (Employee ID)  
   **Request Body:**  
   ```json
   {
       "name": "Jane Doe",
       "position": "Senior Engineer",
       "salary": 70000
   }
   ```
   **Response:** Returns the updated employee object.

5. **Delete Employee**  
   **DELETE** `/deleteEmployee/{id}`  
   **Path Parameter:** `id` (Employee ID)  
   **Response:**  
   - `200 OK` if the employee is deleted successfully.
   - `404 Not Found` if the employee does not exist.

---

## Prerequisites

1. **Backend Setup**  
   Ensure that the Spring Boot application is running. Follow the backend setup instructions in this repository.

2. **Frontend Setup**  
   Make sure you have Node.js and npm installed:
   ```bash
   node -v
   npm -v
   ```

---

## React Frontend Setup

If you have a React frontend, make sure to run it on a different port (e.g., `3000`). The backend API is configured with `@CrossOrigin("*")` to allow CORS requests.

Update your React application to point to the base URL of the Spring Boot API (e.g., `http://localhost:8080/api/employee`).

---

### 1. Create a React App

Run the following commands to set up the React application:
```bash
npx create-react-app employee-crud-frontend
cd employee-crud-frontend
```

### 2. Install Dependencies

Install Axios for making API calls:
```bash
npm install axios
```

(Optional) Install `react-router-dom` for routing:
```bash
npm install react-router-dom
```

### 3. Start the React App

Start the development server:
```bash
npm start
```

The app will be available at `http://localhost:3000/`.

---

## Frontend-Backend Integration

1. Update the Axios base URL in your React app to match your Spring Boot backend's URL:
   ```javascript
   const API_BASE_URL = "http://localhost:8080/api/employee";
   ```

2. Ensure the backend is running and CORS is configured to allow requests from the React frontend.

---

## Final Steps

- Run the backend using your IDE or the command:
  ```bash
  mvn spring-boot:run
  ```
- Run the frontend using:
  ```bash
  npm start
  ```
- Access the application and perform CRUD operations.
