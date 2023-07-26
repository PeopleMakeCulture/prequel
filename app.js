const express = require('express');
const app = express();

// Dummy Data 
const SOURCE_SEED = {

}

const DEST_SEED = {}

// Routes
app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});

// Sources
app.get('/api/sources', (req, res) => {
  const sources = ['Source A', 'Source B', 'Source C'];
  res.json({ sources });
});

// Destinations
app.get('/api/destinations', (req, res) => {
  const destinations = ['Destination X', 'Destination Y', 'Destination Z'];
  res.json({ destinations });
});


// server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

