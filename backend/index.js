const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({
  origin: 'https://mitenshah.vercel.app',
  credentials: true
}));

app.use(express.json());



const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


app.post("/contact", async (req, res) => {
  const { name,email,message } = req.body;

  try {


    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,  
      subject: "Thank You for Contacting Us!",
      text: `Hi ${name},\n\nThank you for getting in touch!\n\nI’ve received your message and will get back to you as soon as possible. I really appreciate your interest.\n\nFeel free to reach out again if you have any urgent queries.\n\nBest regards,\nMiten Shah\n+91-7874393172\nmitenshah24@gmail.com`,
    });

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error submitting form" });
  }
});

app.listen(3000,()=>{
    console.log("Server running")
})