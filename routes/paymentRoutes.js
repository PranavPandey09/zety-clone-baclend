const express = require("express");
const { processPayment } = require("../controllers/paymentController");
const router = express.Router();

router.post("/api/payments", processPayment);

module.exports = router;
