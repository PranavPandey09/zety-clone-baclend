const express = require("express");
const { sendConfirmationEmail } = require("../controllers/emailController");
const router = express.Router();

router.post("/api/email", sendConfirmationEmail);

module.exports = router;
