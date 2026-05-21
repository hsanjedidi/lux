// server.js
import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();

const upload = multer({
  storage: multer.memoryStorage(), // important: we need buffer for email
});

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);
app.options("*", cors());

app.use(express.json());

app.post("/api/send-contact", async (req, res) => {
  try {
    const recipient = process.env.RECIPIENT;
    const payload = req.body;
    if (typeof payload !== "object" || payload === null) {
      res.status(400).json({ success: false, error: "Invalid payload" });
      return;
    }
    payload.to = [{ email: "m.aziz.hlel@gmail.com" }];
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
    console.log("payload of the request on error : ", req.body);
    console.error(error.response?.data || error.message);
    res
      .status(500)
      .json({ success: false, error: error.response?.data || error.message });
  }
});

app.post("/api/send-carrers", upload.single("cv"), async (req, res) => {
  try {
    const recipient = process.env.RECIPIENT;

    const body = req.body;

    const payload = {
      sender: {
        name: "Luxuria Bot",
        email: "no-reply@luxuriabahrain.com",
      },
      to: [{ email: recipient }],
      subject: "New Career Application",

      textContent: `
Name: ${body.fullName}
Nationality: ${body.nationality}
Email: ${body.email}
Phone: ${body.phone}
Position: ${body.designation}

Currently in Bahrain : ${body.inBahrain}
Worked in Bahrain before : ${body.workedInBahrain}
${
  body.workedInBahrain === "Yes"
    ? `Years Experience in Bahrain : ${body.yearsWorkedInBahrain || "N/A"}
Last Companies : ${body.lastThreeCompanies || "N/A"}`
    : ""
}

Used Micros POS : ${body.usedMicros}
Own Accommodation : ${body.ownAccommodation}
Languages : ${body.languages}

CV Attached : ${req.file ? "Yes" : "No"}
`,

      // 👇 THIS is the important part
      attachment: req.file
        ? [
            {
              name: req.file.originalname,
              content: req.file.buffer.toString("base64"),
            },
          ]
        : [],
    };

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.carrersKey,
        },
      },
    );

    res.json({ success: true, data: response.data });
  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      success: false,
      error: error.response?.data || error.message,
    });
  }
});

app.get("/api/health", async (req, res) => {
  res.json({ success: true, data: "yes" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Email proxy running on port ${PORT}`));
