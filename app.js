const express = require('express');
const app = express();

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

// Sources

// Source - GET: returns list of sources
app.get('/api/sources', (req, res) => {
  res.json({ sources: source_list });
});

// Source - POST: adds a new source object to source_list

// Destinations
app.get('/api/destinations', (req, res) => {
  res.json({ destinations: dest_list });
});


// server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

