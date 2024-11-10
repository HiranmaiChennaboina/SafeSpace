require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const incidentRoutes = require('./routes/incidentRoutes');

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());

// Configure CORS to allow requests from your frontend
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow specific headers
}));

// Root route to verify server status
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Routes
app.use('/api/incidents', incidentRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
