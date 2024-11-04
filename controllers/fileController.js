// controllers/fileController.js
const User = require('../models/user');
const multer = require('multer');
const path = require('path');
const nodemailer = require('nodemailer');

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).single('file');

// Payment processing function
const processPayment = async (req, res) => {
  const { cardNumber, cardHolder, expiry, cvv } = req.body;

  // Here, you would integrate a payment processor API
  // This example just simulates successful payment processing
  if (cardNumber && cardHolder && expiry && cvv) {
    // Simulate a payment success
    const userEmail = req.body.email; // Assuming you send email in request

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: 'Payment Confirmation',
      text: 'Your payment has been successfully processed!',
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Payment processed successfully!' });
  } else {
    res.status(400).json({ message: 'Payment failed!' });
  }
};

// Upload file function
const uploadFile = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: 'File upload failed!' });
    }
    res.status(200).json({ message: 'File uploaded successfully!', file: req.file });
  });
};

module.exports = {
  processPayment,
  uploadFile,
};
