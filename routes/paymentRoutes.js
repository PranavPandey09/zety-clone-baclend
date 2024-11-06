// paymentRoutes.js
const express = require('express');
const router = express.Router();
const { savePaymentData, getAllPayments } = require('../controllers/paymentController');

// POST route for saving payment data
router.post('/api/payments', savePaymentData);

// GET route for retrieving all payment data
router.get('/api/payments', getAllPayments);

module.exports = router;
