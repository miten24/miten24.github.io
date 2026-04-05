const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: 'https://mitenshah.vercel.app', credentials: true }));
app.use(express.json());

/* ── Health check ── */
app.get("/", (_, res) => res.json({ status: "ok", service: "miten-portfolio-backend" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
