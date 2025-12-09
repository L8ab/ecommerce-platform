const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePrice = (price) => {
  return typeof price === 'number' && price > 0;
};

const validateProduct = (product) => {
  const errors = [];
  
  if (!product.name || product.name.trim().length === 0) {
    errors.push('Product name is required');
  }
  
  if (!validatePrice(product.price)) {
    errors.push('Valid price is required');
  }
  
  if (!product.category) {
    errors.push('Category is required');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

module.exports = {
  validateEmail,
  validatePrice,
  validateProduct
};
