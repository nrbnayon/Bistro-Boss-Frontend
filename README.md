# Bistro-Boss

Bistro-Boss is a full-stack MERN (MongoDB, Express.js, React, Node.js) application designed for efficient restaurant management. It provides functionalities for managing reservations, orders, menus, staff, and customer feedback.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication:** Secure login and registration for staff and customers.
- **Reservations:** Manage customer reservations with ease.
- **Order Management:** Track and manage orders efficiently.
- **Menu Management:** Create, update, and delete menu items.
- **Staff Management:** Manage staff details and roles.
- **Customer Feedback:** Collect and view customer feedback.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/nrbnayon/bistro-boss-frontend.git
    cd bistro-boss
    ```

2. **Install server dependencies:**

    ```bash
    cd server
    npm install
    ```

3. **Install client dependencies:**

    ```bash
    cd ../client
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the `server` directory and add the following:

    ```env
    MONGO_URI=your_mongo_db_connection_string
    JWT_SECRET=your_jwt_secret
    ```

5. **Run the development servers:**

    ```bash
    # In the server directory
    npm run dev

    # In the client directory
    npm start
    ```

## Usage

1. **Starting the Application:**

    Open your browser and go to `http://localhost:3000`.

2. **Login/Register:**

    - For staff, use the staff login.
    - For customers, use the customer login.

3. **Navigate through the Dashboard:**

    - Manage reservations, orders, menu items, staff, and customer feedback through the admin dashboard.

## Screenshots

![Login Page](path_to_login_screenshot)
![Dashboard](path_to_dashboard_screenshot)
![Menu Management](path_to_menu_management_screenshot)
![Order Management](path_to_order_management_screenshot)

## Technologies

- **Frontend:**
  - React
  - Redux (for state management)
  - React Router (for navigation)
  - Axios (for HTTP requests)
  - Tailwind (for styling)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose (for MongoDB object modeling)
  - JWT (for authentication)

## API Endpoints

### Auth

- **POST /api/auth/register**
  - Register a new user

- **POST /api/auth/login**
  - Login a user

### Reservations

- **GET /api/reservations**
  - Get all reservations

- **POST /api/reservations**
  - Create a new reservation

### Orders

- **GET /api/orders**
  - Get all orders

- **POST /api/orders**
  - Create a new order

### Menu

- **GET /api/menu**
  - Get all menu items

- **POST /api/menu**
  - Add a new menu item

- **PUT /api/menu/:id**
  - Update a menu item

- **DELETE /api/menu/:id**
  - Delete a menu item

### Staff

- **GET /api/staff**
  - Get all staff members

- **POST /api/staff**
  - Add a new staff member

### Feedback

- **GET /api/feedback**
  - Get all customer feedback

- **POST /api/feedback**
  - Submit feedback

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

- **Email:** nrbnayon@gmail.com
- **GitHub:** [nrbnauon](https://github.com/nrbnayon)
