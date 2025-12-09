import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data.products || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>E-Commerce Platform</h1>
        <p>Powered by L8ab</p>
      </header>
      
      <main>
        {loading ? (
          <div>Loading products...</div>
        ) : (
          <div className="products-grid">
            {products.length === 0 ? (
              <p>No products available. Add some products to get started!</p>
            ) : (
              products.map((product) => (
                <div key={product.id} className="product-card">
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              ))
            )}
          </div>
        )}
        
        <div className="cart">
          <h2>Shopping Cart ({cart.length})</h2>
          {cart.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

