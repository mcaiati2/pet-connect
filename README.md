# Pet-Connect

Pet-Connect is a social networking application designed for pet owners to connect and share their pets' activities. Users can register, log in, add their pets, and create posts about their pets. The application features a responsive design and is optimized for both desktop and mobile devices.

## Features
User Authentication: Secure user registration and login functionality using JWT.
Pet Management: Add, view, and manage pets.
Post Creation: Create and view posts for each pet.
Responsive Design: Optimized for both desktop and mobile devices.
Modern UI: Visually appealing design with Bootstrap.

## Technologies Used
Frontend: React, TypeScript, Bootstrap
Backend: Node.js, Express, MongoDB, Mongoose
GraphQL: Apollo Server, Apollo Client
Testing: Cypress
Styling: CSS, Flexbox, Grid

## Installation
### Prerequisites
Node.js (v14 or higher)
MongoDB

### Setup
Clone the repository:

git clone https://github.com/your-username/pet-connect.git cd pet-connect

### Installation

Install dependencies:

npm install

Set up environment variables:

Create a .env file in the root directory and add the following variables:

JWT_SECRET: A secret key for JWT authentication
MONGODB_URL: The connection string for your MongoDB database
PORT: The port number for the server (optional, default is 3333)
Run the development server:

npm run dev

This will start both the client and server in development mode.

## Running Tests
To run the tests, use the following command:

npm test

Building for Production
To build the project for production, use the following command:

npm run build

This will create optimized builds for both the client and server.

# Deployment
The project is configured to deploy to Render. Ensure you have the necessary environment variables set in your Render dashboard:

* RENDER_API_KEY: Your Render API key
* SERVICE_ID: The ID of your Render service
The deployment process is automated using GitHub Actions. On merging a pull request to the main branch, the CI workflow will run tests and deploy the application to Render.

# License
This project is licensed under the MIT License.