const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'E-Commerce Platform API is running' });
});

// Product routes
app.get('/api/products', async (req, res) => {
  try {
    // Product fetching logic
    res.json({ message: 'Products endpoint', products: [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// User routes
app.post('/api/auth/register', async (req, res) => {
  try {
    // Registration logic
    res.json({ message: 'User registration endpoint' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    // Login logic
    res.json({ message: 'User login endpoint' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Order routes
app.post('/api/orders', async (req, res) => {
  try {
    // Order creation logic
    res.json({ message: 'Order creation endpoint' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

