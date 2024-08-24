Project Title: Node.js User Authentication, Profile Management, and Email Confirmation API

Description:
This project involves developing a secure and scalable API for user authentication, profile management, and email confirmation functionality using Node.js, Express.js, and MongoDB. The API provides endpoints for user signup, login, and profile retrieval, ensuring security through password hashing and JWT-based authentication. Additionally, the project integrates an email confirmation system using Nodemailer to enhance user verification after registration.

Key Features:
User Signup:

Endpoint: /api/signup
Users can register with a username, email, and password.
User input validation and secure password hashing.
Confirmation email sent upon successful registration.
User Login:

Endpoint: /api/login
Allows users to log in with their email and password.
Validates user credentials and issues a JWT for session management.
User Profile Management:

Endpoint: /api/profile
Retrieves and displays user profile information based on the provided JWT.
Email Confirmation:

Integration of Nodemailer for sending confirmation emails after signup.
Emails include a confirmation link for verifying the user’s email address.

Technologies:
Node.js
Express.js
MongoDB
JWT (JSON Web Tokens)
bcrypt
Nodemailer
Project Goals:
Ensure secure user registration and login workflows.
Provide JWT-based authentication for protecting user profiles.
Implement an efficient email verification system to validate new users.
