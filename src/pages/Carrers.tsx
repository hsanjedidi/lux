import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, CheckCircle } from "lucide-react";

// --- Design Tokens ---
const gold = "#C9A96E";
const cream = "#F5F0E8";
const dark = "#0C0A08";

const NATIONALITIES = [
  "Afghan", "Albanian", "Algerian", "American", "Argentine", "Australian", 
  "Austrian", "Bangladeshi", "Belgian", "Brazilian", "British", "Bulgarian", 
  "Cameroonian", "Canadian", "Chilean", "Chinese", "Colombian", "Croatian", 
  "Czech", "Danish", "Dutch", "Egyptian", "Ethiopian", "Finnish", "French", 
  "German", "Ghanaian", "Greek", "Hungarian", "Indian", "Indonesian", "Iranian", 
  "Iraqi", "Irish", "Israeli", "Italian", "Japanese", "Jordanian", "Kenyan", 
  "Korean", "Lebanese", "Libyan", "Malaysian", "Mexican", "Moroccan", "Nigerian", 
  "Norwegian", "Pakistani", "Palestinian", "Peruvian", "Polish", "Portuguese", 
  "Romanian", "Russian", "Saudi", "Senegalese", "Serbian", "Singaporean", 
  "South African", "Spanish", "Sri Lankan", "Swedish", "Swiss", "Syrian", 
  "Taiwanese", "Thai", "Tunisian", "Turkish", "Ukrainian", "Emirati", 
  "Venezuelan", "Vietnamese", "Other"
];

const Carrers = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    nationality: "",
    email: "",
    phone: "",
    desiredPosition: "",
  });
  const [cvFile, setCvFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const handleFile = (file) => {
    if (file && file.type === "application/pdf") setCvFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application Data:", formData, "File:", cvFile?.name);
    setSubmitted(true);
  };

  return (
    <main style={{ background: dark, color: cream, minHeight: "100vh" }}>
      {/* ── HERO SECTION ── */}
      <section style={{ padding: "180px 24px 100px 24px", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "12px",
              color: gold,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}>
            Career Opportunities
          </p>
          <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(48px, 8vw, 84px)",
              fontWeight: 300,
              lineHeight: 1,
            }}>
            Join <em style={{ color: gold, fontStyle: "italic" }}>Our Team</em>
          </h1>
          <div style={{ width: "60px", height: "1px", background: gold, margin: "40px auto" }} />
        </motion.div>
      </section>

      <section style={{ padding: "0 24px 160px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  display: "flex", flexDirection: "column", alignItems: "center",
                  justifyContent: "center", gap: "24px", padding: "60px 0", textAlign: "center",
                }}
              >
                <CheckCircle size={48} color={gold} strokeWidth={1.2} />
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 300 }}>
                  Application <em style={{ color: gold }}>Received</em>
                </h4>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "14px", color: "rgba(245,240,232,0.6)", maxWidth: "300px" }}>
                  Thank you for your interest. We will review your application and be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                
                {/* Row 1: Full Name + Nationality */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
                  <CustomInput
                    label="Full Name"
                    value={formData.fullName}
                    onChange={(v) => setFormData({ ...formData, fullName: v })}
                    placeholder="John Doe"
                  />
                  <CustomSelect
                    label="Nationality"
                    value={formData.nationality}
                    onChange={(v) => setFormData({ ...formData, nationality: v })}
                    options={NATIONALITIES}
                  />
                </div>

                {/* Row 2: Email + Phone */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
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

                {/* Desired Position - Champ Texte Libre */}
                <CustomInput
                  label="Desired Position"
                  value={formData.desiredPosition}
                  onChange={(v) => setFormData({ ...formData, desiredPosition: v })}
                  placeholder="e.g. Senior Mixologist"
                />

                {/* CV Upload Section */}
                <div>
                  <label style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(201,169,110,0.6)", display: "block", marginBottom: "15px" }}>
                    Curriculum Vitae
                  </label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files[0]); }}
                    style={{
                      border: `1px dashed ${dragOver ? gold : "rgba(201,169,110,0.2)"}`,
                      background: dragOver ? "rgba(201,169,110,0.03)" : "transparent",
                      padding: "40px 20px", textAlign: "center", cursor: "pointer", transition: "all 0.3s ease",
                    }}
                  >
                    <input ref={fileInputRef} type="file" accept=".pdf" required={!cvFile} onChange={(e) => handleFile(e.target.files[0])} style={{ display: "none" }} />
                    <Upload size={24} color={cvFile ? gold : "rgba(201,169,110,0.4)"} strokeWidth={1.2} style={{ margin: "0 auto 15px" }} />
                    {cvFile ? (
                      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", color: gold }}>{cvFile.name}</p>
                    ) : (
                      <>
                        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", color: "rgba(245,240,232,0.5)" }}>Drop your PDF or click to browse</p>
                        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", color: "rgba(245,240,232,0.25)", marginTop: "5px" }}>MAX FILE SIZE 5MB</p>
                      </>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ backgroundColor: cream, color: dark }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  style={{ 
                    background: gold, color: dark, border: "none", padding: "20px", 
                    fontFamily: "'Jost', sans-serif", fontSize: "12px", fontWeight: 600, 
                    textTransform: "uppercase", letterSpacing: "0.3em", cursor: "pointer",
                    transition: "all 0.4s ease" 
                  }}
                >
                  Submit Application
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

// ─── Sub-Components ───────────────────────────────────────────────────────────

const CustomInput = ({ label, value, onChange, type = "text", placeholder }) => (
  <div style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid rgba(201,169,110,0.2)", paddingBottom: "10px" }}>
    <label style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(201,169,110,0.6)", marginBottom: "8px" }}>{label}</label>
    <input 
      required 
      type={type} 
      value={value} 
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={{ 
        background: "transparent", border: "none", color: cream, 
        fontFamily: "'Jost', sans-serif", fontSize: "15px", outline: "none", padding: "5px 0" 
      }}
    />
  </div>
);

const CustomSelect = ({ label, value, onChange, options }) => (
  <div style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid rgba(201,169,110,0.2)", paddingBottom: "10px" }}>
    <label style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(201,169,110,0.6)", marginBottom: "8px" }}>{label}</label>
    <select 
      required 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      style={{
        background: "transparent", border: "none", color: value ? cream : "rgba(245,240,232,0.3)",
        fontFamily: "'Jost', sans-serif", fontSize: "15px", outline: "none", padding: "5px 0", cursor: "pointer",
        appearance: "none", WebkitAppearance: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23C9A96E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat", backgroundPosition: "right 0px center", paddingRight: "20px",
      }}
    >
      <option value="" disabled>Select Nationality</option>
      {options.map((opt) => (
        <option key={opt} value={opt} style={{ background: "#1a120b", color: cream }}>{opt}</option>
      ))}
    </select>
  </div>
);

export default Carrers;