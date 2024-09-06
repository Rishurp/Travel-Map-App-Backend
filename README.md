# Travel Map App Backend

This is the backend API for the **Travel Map App**, built using Node.js, Express, and MongoDB. The backend handles user authentication, secure data storage, and provides API endpoints for managing user accounts and travel destinations.

### Deployed Link
- **[Live API](https://travel-map-ch6g.onrender.com)**

---

## Features

- **User Authentication:** Secure registration and login using bcrypt for password hashing.
- **Interactive Map Pins:** Users can add, view, and manage travel destination pins.
- **MongoDB Integration:** The backend uses MongoDB to store user data and travel destination pins.

---

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend server.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: Database for storing user information and pins.
- **Mongoose**: ODM library to connect MongoDB with Node.js.
- **bcrypt**: Used for hashing passwords.
- **dotenv**: Environment variables management.

---

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Rishurp/Travel-Map-App-Backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd travel-map-backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection URL:

   ```
   MONGO_URL=your-mongo-connection-string
   ```

5. Start the server:

   ```bash
   npm start
   ```

The server will run on **http://localhost:8800**.

---

## API Endpoints

### User Routes

- **POST /api/users/register**
  - Register a new user.
  - Request Body: `{ username, email, password }`

- **POST /api/users/login**
  - Log in a user.
  - Request Body: `{ username, password }`

### Pin Routes

- **POST /api/pins/**
  - Add a new pin.
  - Request Body: `{ title, description, location, etc. }`

- **GET /api/pins/**
  - Retrieve all pins.

---

## License

This project is licensed under the ISC License.

---

## Author

- **Rishu Pandey**
