import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, CheckCircle } from "lucide-react";
import axios from "axios";

// --- Design Tokens ---
const gold = "#C9A96E";
const cream = "#F5F0E8";
const dark = "#0C0A08";

const NATIONALITIES = [
  "Afghan",
  "Albanian",
  "Algerian",
  "American",
  "Argentine",
  "Australian",
  "Austrian",
  "Bangladeshi",
  "Belgian",
  "Brazilian",
  "British",
  "Bulgarian",
  "Cameroonian",
  "Canadian",
  "Chilean",
  "Chinese",
  "Colombian",
  "Croatian",
  "Czech",
  "Danish",
  "Dutch",
  "Egyptian",
  "Ethiopian",
  "Finnish",
  "French",
  "German",
  "Ghanaian",
  "Greek",
  "Hungarian",
  "Indian",
  "Indonesian",
  "Iranian",
  "Iraqi",
  "Irish",
  "Israeli",
  "Italian",
  "Japanese",
  "Jordanian",
  "Kenyan",
  "Korean",
  "Lebanese",
  "Libyan",
  "Malaysian",
  "Mexican",
  "Moroccan",
  "Nigerian",
  "Norwegian",
  "Pakistani",
  "Palestinian",
  "Peruvian",
  "Polish",
  "Portuguese",
  "Romanian",
  "Russian",
  "Saudi",
  "Senegalese",
  "Serbian",
  "Singaporean",
  "South African",
  "Spanish",
  "Sri Lankan",
  "Swedish",
  "Swiss",
  "Syrian",
  "Taiwanese",
  "Thai",
  "Tunisian",
  "Turkish",
  "Ukrainian",
  "Emirati",
  "Venezuelan",
  "Vietnamese",
  "Other",
];

const DESIGNATIONS = [
  "Chef/Cook",
  "Hostess/Reservation/Reception",
  "Security",
  "Waiter/Waitress/Service",
  "Housekeeping",
  "Cashir/Account/Finance",
  "Entertainment",
  "Maintanance/Driver",
  "Management Position",
  "Other",
];

const LANGUAGES = ["English", "Arabic", "French", "Spanish"];

const Carrers = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    nationality: "",
    otherNationality: "",
    email: "",
    phone: "",
    designation: "",
    otherDesignation: "",
    inBahrain: "",
    workedInBahrain: "",
    yearsWorkedInBahrain: "",
    lastThreeCompanies: "",
    usedMicros: "",
    ownAccommodation: "",
    languages: [],
  });

  const [cvFile, setCvFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const handleLanguageChange = (lang) => {
    const updated = formData.languages.includes(lang)
      ? formData.languages.filter((l) => l !== lang)
      : [...formData.languages, lang];
    setFormData({ ...formData, languages: updated });
  };

  const handleFile = (file) => {
    if (file && file.type === "application/pdf") setCvFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Logique pour formater la nationalité et la position si "Other" est choisi
    const finalNationality =
      formData.nationality === "Other"
        ? formData.otherNationality
        : formData.nationality;
    const finalDesignation =
      formData.designation === "Other"
        ? formData.otherDesignation
        : formData.designation;

    const payload = {
      sender: { name: "Luxuria Bot", email: "no-reply@luxuriabahrain.com" },
      to: [{ email: "m.aziz.hlel@gmail.com" }],
      subject: "New Career Application",
      textContent: `
        Name: ${formData.fullName}
        Nationality: ${finalNationality}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Position: ${finalDesignation}
        Currently in Bahrain: ${formData.inBahrain}
        Worked in Bahrain before: ${formData.workedInBahrain}
        ${formData.workedInBahrain === "Yes" ? `Years Experience: ${formData.yearsWorkedInBahrain}\nLast Companies: ${formData.lastThreeCompanies}` : ""}
        Used Micros POS: ${formData.usedMicros}
        Own Accommodation: ${formData.ownAccommodation}
        Languages: ${formData.languages.join(", ")}
        CV File: ${cvFile?.name}
      `,
    };

    try {
      await sendEmail(payload);
      setSubmitted(true);
      alert("Thank you for your application.");
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  const sendEmail = async (payload) => {
    await axios.post("https://api.brevo.com/v3/smtp/email", payload, {
      headers: {
        "Content-Type": "application/json",
        "api-key": import.meta.env.VITE_carrersKey,
      },
    });
  };

  return (
    <main style={{ background: dark, color: cream, minHeight: "100vh" }}>
      <section
        style={{ padding: "180px 24px 100px 24px", textAlign: "center" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "12px",
              color: gold,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Career Opportunities
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(48px, 8vw, 84px)",
              fontWeight: 300,
            }}
          >
            Join <em style={{ color: gold, fontStyle: "italic" }}>Our Team</em>
          </h1>
          <div
            style={{
              width: "60px",
              height: "1px",
              background: gold,
              margin: "40px auto",
            }}
          />
        </motion.div>
      </section>

      <section style={{ padding: "0 24px 160px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textAlign: "center", padding: "60px 0" }}
            >
              <CheckCircle
                size={48}
                color={gold}
                style={{ margin: "0 auto 24px" }}
              />
              <h4
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "28px",
                }}
              >
                Application <em style={{ color: gold }}>Received</em>
              </h4>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "40px" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "30px",
                }}
              >
                <CustomInput
                  label="Full Name"
                  value={formData.fullName}
                  onChange={(v) => setFormData({ ...formData, fullName: v })}
                  placeholder="John Doe"
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}
                >
                  <CustomSelect
                    label="Nationality"
                    value={formData.nationality}
                    onChange={(v) =>
                      setFormData({ ...formData, nationality: v })
                    }
                    options={NATIONALITIES}
                  />
                  <AnimatePresence>
                    {formData.nationality === "Other" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <CustomInput
                          label="Please specify nationality"
                          value={formData.otherNationality}
                          onChange={(v) =>
                            setFormData({ ...formData, otherNationality: v })
                          }
                          placeholder="Type your nationality"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "30px",
                }}
              >
                <CustomInput
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(v) => setFormData({ ...formData, email: v })}
                  placeholder="email@example.com"
                />
                <CustomInput
                  label="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(v) => setFormData({ ...formData, phone: v })}
                  placeholder="+973 — — — —"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <CustomSelect
                  label="Choose your Designation / Department"
                  value={formData.designation}
                  onChange={(v) => setFormData({ ...formData, designation: v })}
                  options={DESIGNATIONS}
                />
                <AnimatePresence>
                  {formData.designation === "Other" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <CustomInput
                        label="Please specify position"
                        value={formData.otherDesignation}
                        onChange={(v) =>
                          setFormData({ ...formData, otherDesignation: v })
                        }
                        placeholder="Type your desired role"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "30px",
                }}
              >
                <CustomRadio
                  label="Are you currently in Bahrain?"
                  name="inBahrain"
                  value={formData.inBahrain}
                  onChange={(v) => setFormData({ ...formData, inBahrain: v })}
                />
                <CustomRadio
                  label="Have you worked in Bahrain?"
                  name="workedInBahrain"
                  value={formData.workedInBahrain}
                  onChange={(v) =>
                    setFormData({ ...formData, workedInBahrain: v })
                  }
                />
              </div>

              {formData.workedInBahrain === "Yes" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                  }}
                >
                  <CustomInput
                    label="How many years have you worked in Bahrain?"
                    value={formData.yearsWorkedInBahrain}
                    onChange={(v) =>
                      setFormData({ ...formData, yearsWorkedInBahrain: v })
                    }
                    placeholder="e.g. 5 years"
                  />
                  <CustomInput
                    label="Mention the last 3 companies"
                    value={formData.lastThreeCompanies}
                    onChange={(v) =>
                      setFormData({ ...formData, lastThreeCompanies: v })
                    }
                    placeholder="Company A, Company B, Company C"
                  />
                </motion.div>
              )}

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "30px",
                }}
              >
                <CustomRadio
                  label="Have you used Micros POS?"
                  name="usedMicros"
                  value={formData.usedMicros}
                  onChange={(v) => setFormData({ ...formData, usedMicros: v })}
                />
                <CustomRadio
                  label="Do you have your own accommodation in Bahrain?"
                  name="ownAccommodation"
                  value={formData.ownAccommodation}
                  onChange={(v) =>
                    setFormData({ ...formData, ownAccommodation: v })
                  }
                />
              </div>

              <div>
                <label
                  style={{
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "rgba(201,169,110,0.6)",
                    display: "block",
                    marginBottom: "15px",
                  }}
                >
                  Which languages do you speak?
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                  {LANGUAGES.map((lang) => (
                    <label
                      key={lang}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        cursor: "pointer",
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "14px",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={formData.languages.includes(lang)}
                        onChange={() => handleLanguageChange(lang)}
                        style={{ accentColor: gold }}
                      />
                      {lang}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label
                  style={{
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "rgba(201,169,110,0.6)",
                    display: "block",
                    marginBottom: "15px",
                  }}
                >
                  Curriculum Vitae (PDF)
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragOver(false);
                    handleFile(e.dataTransfer.files[0]);
                  }}
                  style={{
                    border: `1px dashed ${dragOver ? gold : "rgba(201,169,110,0.2)"}`,
                    padding: "40px 20px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf"
                    required={!cvFile}
                    onChange={(e) => handleFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                  <Upload
                    size={24}
                    color={cvFile ? gold : "rgba(201,169,110,0.4)"}
                    style={{ margin: "0 auto 15px" }}
                  />
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "13px",
                      color: cvFile ? gold : "rgba(245,240,232,0.5)",
                    }}
                  >
                    {cvFile ? cvFile.name : "Drop your PDF or click to browse"}
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ backgroundColor: cream, color: dark }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                style={{
                  background: gold,
                  color: dark,
                  border: "none",
                  padding: "20px",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.3em",
                  cursor: "pointer",
                }}
              >
                Submit Application
              </motion.button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

// ─── Sub-Components ───────────────────────────────────────────────────────────

const CustomInput = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      borderBottom: "1px solid rgba(201,169,110,0.2)",
      paddingBottom: "10px",
    }}
  >
    <label
      style={{
                    fontSize: "14px",
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        color: "rgba(201,169,110,0.6)",
        marginBottom: "8px",
      }}
    >
      {label}
    </label>
    <input
      required
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={{
        background: "transparent",
        border: "none",
        color: cream,
        fontFamily: "'Jost', sans-serif",
        fontSize: "15px",
        outline: "none",
      }}
    />
  </div>
);

const CustomSelect = ({ label, value, onChange, options }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      borderBottom: "1px solid rgba(201,169,110,0.2)",
      paddingBottom: "10px",
    }}
  >
    <label
      style={{
        fontSize: "10px",
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        color: "rgba(201,169,110,0.6)",
        marginBottom: "8px",
      }}
    >
      {label}
    </label>
    <select
      required
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        background: "transparent",
        border: "none",
        color: value ? cream : "rgba(245,240,232,0.3)",
        fontFamily: "'Jost', sans-serif",
        fontSize: "15px",
        outline: "none",
        cursor: "pointer",
      }}
    >
      <option value="" disabled>
        Select Option
      </option>
      {options.map((opt) => (
        <option
          key={opt}
          value={opt}
          style={{ background: "#1a120b", color: cream }}
        >
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const CustomRadio = ({ label, name, value, onChange }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <label
      style={{
        fontSize: "10px",
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        color: "rgba(201,169,110,0.6)",
      }}
    >
      {label}
    </label>
    <div style={{ display: "flex", gap: "20px" }}>
      {["Yes", "No"].map((option) => (
        <label
          key={option}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            fontFamily: "'Jost', sans-serif",
            fontSize: "14px",
          }}
        >
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={(e) => onChange(e.target.value)}
            required
            style={{ accentColor: gold }}
          />
          {option}
        </label>
      ))}
    </div>
  </div>
);

export default Carrers;
