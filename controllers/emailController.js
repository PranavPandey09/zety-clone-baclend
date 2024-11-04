const nodemailer = require("nodemailer");

exports.sendConfirmationEmail = async (req, res) => {
  try {
    const { email, amount } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Payment Confirmation",
      text: `Thank you! Your payment of $${amount / 100} was successful.`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Confirmation email sent!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
