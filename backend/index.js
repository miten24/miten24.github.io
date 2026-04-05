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

/* ── HTML Email Templates ─────────────────────────────────────────── */

const baseStyle = `
  body { margin:0; padding:0; background:#0a0a0a; font-family:Arial,Helvetica,sans-serif; }
  table { border-collapse:collapse; }
`;

const adminEmailHtml = (name, email, message) => `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${baseStyle}</style></head>
<body>
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a; padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#111111; border:1px solid rgba(255,255,255,0.06); border-radius:4px; overflow:hidden; max-width:600px; width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1d4ed8,#3b82f6); padding:32px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div style="display:inline-block; width:44px; height:44px; background:rgba(255,255,255,0.15); border-radius:50%; text-align:center; line-height:44px; font-family:Georgia,serif; font-size:18px; font-weight:700; color:#ffffff; margin-bottom:16px;">MS</div>
                  <h1 style="margin:0; font-family:Georgia,'Times New Roman',serif; font-size:22px; font-weight:700; color:#ffffff; letter-spacing:0.02em;">New Portfolio Inquiry</h1>
                  <p style="margin:6px 0 0; font-family:'Courier New',monospace; font-size:11px; color:rgba(255,255,255,0.6); letter-spacing:0.2em; text-transform:uppercase;">Contact Form Submission</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">

            <!-- Sender info rows -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.06);">
                  <p style="margin:0 0 4px; font-family:'Courier New',monospace; font-size:10px; color:#525252; letter-spacing:0.2em; text-transform:uppercase;">Name</p>
                  <p style="margin:0; font-family:Arial,sans-serif; font-size:15px; color:#ffffff; font-weight:600;">${name}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.06);">
                  <p style="margin:0 0 4px; font-family:'Courier New',monospace; font-size:10px; color:#525252; letter-spacing:0.2em; text-transform:uppercase;">Email</p>
                  <a href="mailto:${email}" style="margin:0; font-family:Arial,sans-serif; font-size:15px; color:#60a5fa; text-decoration:none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;">
                  <p style="margin:0 0 8px; font-family:'Courier New',monospace; font-size:10px; color:#525252; letter-spacing:0.2em; text-transform:uppercase;">Message</p>
                  <div style="background:#0a0a0a; border-left:3px solid #3b82f6; border-radius:0 4px 4px 0; padding:16px 20px;">
                    <p style="margin:0; font-family:Arial,sans-serif; font-size:14px; color:#a3a3a3; line-height:1.7;">${message.replace(/\n/g, '<br/>')}</p>
                  </div>
                </td>
              </tr>
            </table>

            <!-- Reply CTA -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center" style="padding-top:8px;">
                  <a href="mailto:${email}" style="display:inline-block; padding:12px 28px; background:#3b82f6; color:#ffffff; font-family:Arial,sans-serif; font-size:13px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; border-radius:3px;">Reply to ${name}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px; border-top:1px solid rgba(255,255,255,0.04);">
            <p style="margin:0; font-family:'Courier New',monospace; font-size:10px; color:#525252; text-align:center; letter-spacing:0.1em;">
              Received via mitenshah.vercel.app — ${new Date().toUTCString()}
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`;

const userConfirmationHtml = (name) => `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${baseStyle}</style></head>
<body>
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a; padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#111111; border:1px solid rgba(255,255,255,0.06); border-radius:4px; overflow:hidden; max-width:600px; width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1d4ed8,#3b82f6); padding:32px 40px; text-align:center;">
            <div style="display:inline-block; width:52px; height:52px; background:rgba(255,255,255,0.15); border-radius:50%; text-align:center; line-height:52px; font-family:Georgia,serif; font-size:20px; font-weight:700; color:#ffffff; margin-bottom:20px;">MS</div>
            <h1 style="margin:0; font-family:Georgia,'Times New Roman',serif; font-size:24px; font-weight:700; color:#ffffff;">Thanks for reaching out, ${name}.</h1>
            <p style="margin:10px 0 0; font-family:Arial,sans-serif; font-size:14px; color:rgba(255,255,255,0.75); line-height:1.6;">Your message has been received.</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px 40px 32px;">
            <p style="margin:0 0 20px; font-family:Arial,sans-serif; font-size:15px; color:#a3a3a3; line-height:1.8;">
              Hi <strong style="color:#ffffff;">${name}</strong>,
            </p>
            <p style="margin:0 0 20px; font-family:Arial,sans-serif; font-size:15px; color:#a3a3a3; line-height:1.8;">
              Thank you for getting in touch through my portfolio. I've received your message and will review it shortly. You can expect to hear back from me within <strong style="color:#60a5fa;">24–48 hours</strong>.
            </p>
            <p style="margin:0 0 32px; font-family:Arial,sans-serif; font-size:15px; color:#a3a3a3; line-height:1.8;">
              In the meantime, feel free to connect with me on LinkedIn or browse more of my work on the portfolio.
            </p>

            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center">
                  <a href="https://mitenshah.vercel.app" style="display:inline-block; padding:13px 32px; background:#3b82f6; color:#ffffff; font-family:Arial,sans-serif; font-size:13px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; border-radius:3px;">View Portfolio ↗</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Signature -->
        <tr>
          <td style="padding:0 40px 32px;">
            <table cellpadding="0" cellspacing="0" style="border-top:1px solid rgba(255,255,255,0.06); padding-top:24px; width:100%; margin-top:8px;">
              <tr>
                <td>
                  <p style="margin:0 0 4px; font-family:Georgia,serif; font-size:16px; font-weight:700; color:#ffffff; font-style:italic;">Miten Shah</p>
                  <p style="margin:0 0 2px; font-family:'Courier New',monospace; font-size:10px; color:#525252; letter-spacing:0.15em; text-transform:uppercase;">Project / Product Manager</p>
                  <p style="margin:8px 0 0;">
                    <a href="mailto:mitenshah24@gmail.com" style="font-family:Arial,sans-serif; font-size:13px; color:#60a5fa; text-decoration:none;">mitenshah24@gmail.com</a>
                    &nbsp;·&nbsp;
                    <a href="https://linkedin.com/in/mitenshah24" style="font-family:Arial,sans-serif; font-size:13px; color:#60a5fa; text-decoration:none;">LinkedIn</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:16px 40px; border-top:1px solid rgba(255,255,255,0.04);">
            <p style="margin:0; font-family:'Courier New',monospace; font-size:10px; color:#525252; text-align:center; letter-spacing:0.08em;">
              This is an automated confirmation — please do not reply to this email.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`;

/* ── Contact route ────────────────────────────────────────────────── */
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Admin notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Inquiry from ${name} — Portfolio`,
      html: adminEmailHtml(name, email, message),
    });

    // User confirmation
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Got your message, ${name} — Miten Shah`,
      html: userConfirmationHtml(name),
    });

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Error submitting form" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
