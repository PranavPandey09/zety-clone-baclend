// server.js
require('dotenv').config(); // This line must be at the very top

const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/dotenv'); // Ensure this is correct
const fileRoutes = require('./routes/fileRoutes');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
connectDB();

// Routes
app.use('/api', fileRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
