// routes/fileRoutes.js
const express = require('express');
const router = express.Router();
const { processPayment, uploadFile } = require('../controllers/fileController');

router.post('/payments', processPayment); // Payment processing endpoint
router.post('/upload', uploadFile); // File upload endpoint

module.exports = router;
