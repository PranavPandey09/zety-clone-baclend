// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  paymentStatus: {
    type: Boolean,
    default: false,
  },
  // You can add more fields if necessary
});

module.exports = mongoose.model('User', userSchema);
