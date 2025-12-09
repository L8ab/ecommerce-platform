const Product = require('../models/Product');

class ProductController {
  async getAllProducts(req, res) {
    try {
      const { page = 1, limit = 10, category, search } = req.query;
      const query = {};
      
      if (category) query.category = category;
      if (search) query.name = { $regex: search, $options: 'i' };
      
      const products = await Product.find(query)
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 });
      
      const total = await Product.countDocuments(query);
      
      res.json({
        success: true,
        data: products,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / limit)
        }
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async getProductById(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json({ success: true, data: product });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async createProduct(req, res) {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json({ success: true, data: product });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new ProductController();
