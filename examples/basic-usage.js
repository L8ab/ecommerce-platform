// Basic E-Commerce Platform Usage Example

const express = require('express');
const app = express();
const productRoutes = require('../src/routes/productRoutes');

app.use(express.json());
app.use('/api/products', productRoutes);

// Example: Get all products
// GET /api/products

// Example: Get product by ID
// GET /api/products/:id

// Example: Create product (authenticated)
// POST /api/products
// Body: { name, price, category, description }

app.listen(3000, () => {
  console.log('E-Commerce Platform running on port 3000');
});
