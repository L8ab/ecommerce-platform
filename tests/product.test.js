const request = require('supertest');
const app = require('../src/index');

describe('Product API', () => {
  test('GET /api/products should return products', async () => {
    const response = await request(app)
      .get('/api/products')
      .expect(200);
    
    expect(response.body).toHaveProperty('success', true);
    expect(response.body).toHaveProperty('data');
  });
  
  test('POST /api/products should create product', async () => {
    const product = {
      name: 'Test Product',
      price: 99.99,
      category: 'Electronics'
    };
    
    const response = await request(app)
      .post('/api/products')
      .send(product)
      .expect(201);
    
    expect(response.body).toHaveProperty('success', true);
  });
});
