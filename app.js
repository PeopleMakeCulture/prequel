const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

const port = 3000; // You can use any preferred port number

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

