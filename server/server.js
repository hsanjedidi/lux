// server.js
import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(
  cors({ origin: ["http://localhost:8080", "https://luxuriabahrain.com"] }),
);
app.use(express.json());

app.post("/api/send-contact", async (req, res) => {
  try {
    const { payload } = req.body;
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.contactUsKey,
        },
      },
    );
    res.json({ success: true, data: response.data });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res
      .status(500)
      .json({ success: false, error: error.response?.data || error.message });
  }
});

app.post("/api/send-carrers", async (req, res) => {
  try {
    const { payload } = req.body;
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.contactUsKey,
        },
      },
    );
    res.json({ success: true, data: response.data });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res
      .status(500)
      .json({ success: false, error: error.response?.data || error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Email proxy running on port ${PORT}`));
