const Payment = require("../models/Payment");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const nodemailer = require("nodemailer");

exports.processPayment = async (req, res) => {
  const { cardNumber, cardHolder, expiry, cvv } = req.body;
  const amount = 4999; // $49.99 in cents

  try {
    // Mock payment processing with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    const newPayment = await Payment.create({ cardNumber, cardHolder, expiry, cvv, amount });

    // Email notification setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "user@example.com",
      subject: "Payment Successful",
      text: "Your payment of $49.99 has been successfully processed.",
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Payment processed successfully and email sent!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
