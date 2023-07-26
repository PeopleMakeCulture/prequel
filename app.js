const express = require('express');
const app = express();

app.use(express.json())

// Dummy Data - BQ
const SOURCE_SEED = {
  "source": {
    "vendor": "bigquery",
    "service_account_key": {},
    "name": "orders",
    "host": "bq_project_id",
    "username": "bq_client_email",
    "bucket_name": "bq_bucket_name",
    "bucket_region": "bq_region_name"
  }
}

const source_list = [SOURCE_SEED]


// Dummy Data - Google Sheets
// NOTE: Enabled models is required

const DEST_SEED = {
  "destination": {
    "vendor": "google_sheets",
    "enabled_models": [
      "*"
    ],
    "frequency_minutes": 60,
    "recipient_id": "recipient_id_one",
    "name": "orders",
    "host": "https://docs.google.com/spreadsheets/d/1KESF76DGEjsIwJ70-8y-n6mXB8xB0Nvx6hvJwINuHJw/edit?usp=sharing"
  }
}

const dest_list = [DEST_SEED]

// Home
app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});
app.post('/api', (req, res) => {
  res.status(201).send('POST request to the homepage')
});

// Sources

// GET: returns list of sources
app.get('/api/sources', (req, res) => {
  res.json({ sources: source_list });
});

// POST: adds a new source object to source_list
app.post('/api/sources', (req, res, next) => {
  const newSource = req.body.source 
  source_list.push(newSource);
  res.status(201).json({ message: 'New source created successfully!', source: newSource});
});


// Destinations 

// GET: returns the configured data destinations
app.get('/api/destinations', (req, res) => {
  res.json({ destinations: dest_list });
});

// POST:
app.post('/api/destinations', (req, res, next) => {
  const newDestination = req.body.destination;
  dest_list.push(newDestination);
  res.status(201).json({ message: 'New destination created successfully!', destination: newDestination });
});



// server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

