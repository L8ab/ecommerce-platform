const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to L8ab Systems API', version: '1.0.0' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
