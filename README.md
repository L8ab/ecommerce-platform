# E-Commerce Platform

A modern, full-featured e-commerce platform built with Node.js, Express, and MongoDB.

## Features

- Product management with categories and search
- User authentication and authorization
- Shopping cart functionality
- Order processing
- Payment integration ready
- RESTful API architecture

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcrypt for password hashing

## Project Structure

\`\`\`
ecommerce-platform/
├── src/
│   ├── controllers/     # Business logic controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Authentication middleware
│   ├── utils/           # Utility functions
│   └── index.js         # Application entry point
├── tests/               # Test files
├── package.json
├── Dockerfile
└── docker-compose.yml
\`\`\`

## Installation

\`\`\`bash
npm install
\`\`\`

## Configuration

Copy \`.env.example\` to \`.env\` and configure:

\`\`\`
PORT=3000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your-secret-key
\`\`\`

## Running

\`\`\`bash
# Development
npm run dev

# Production
npm start
\`\`\`

## API Endpoints

- \`GET /api/products\` - Get all products
- \`GET /api/products/:id\` - Get product by ID
- \`POST /api/products\` - Create product (authenticated)

## Testing

\`\`\`bash
npm test
\`\`\`

## Docker

\`\`\`bash
docker-compose up
\`\`\`

---

**POWERED BY L8AB SYSTEMS**
