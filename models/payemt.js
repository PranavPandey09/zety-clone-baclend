const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  cardHolder: String,
  cardNumber: String,
  expiry: String,
  cvv: String,
  amount: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Payment', PaymentSchema);
