import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

// --- Design Tokens ---
const gold = "#C9A96E";
const cream = "#F5F0E8";
const dark = "#0C0A08";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main style={{ background: dark, color: cream, minHeight: "100vh" }}>
      {/* ── HERO SECTION ── */}
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
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "12px",
              color: gold,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Concierge & Inquiries
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(48px, 8vw, 84px)",
              fontWeight: 300,
              lineHeight: 1,
            }}
          >
            Contact <em style={{ color: gold, fontStyle: "italic" }}>Us</em>
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
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "100px",
          }}
        >
          {/* ── INFO SIDE ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "32px",
                marginBottom: "40px",
                fontWeight: 300,
              }}
            >
              Luxuria <br /> <span style={{ color: gold }}>Headquarters</span>
            </h3>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "40px" }}
            >
              <ContactItem icon={<MapPin size={18} />} title="Address">
                Building 436-2, Road 3815, <br /> Block 338 – Manama, Bahrain
              </ContactItem>

              <ContactItem icon={<Phone size={18} />} title="Phone">
                +973 3458 8466 <br /> +973 3422 1111
              </ContactItem>

              <ContactItem icon={<Mail size={18} />} title="Email">
                info@luxury.com
              </ContactItem>

              <ContactItem icon={<Clock size={18} />} title="Inquiries">
                Daily: 12:00 PM – 2:00 AM
              </ContactItem>
            </div>
          </motion.div>

          {/* ── FORM SIDE ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                <CustomInput
                  label="Name"
                  value={formData.name}
                  onChange={(v) => setFormData({ ...formData, name: v })}
                />
                <CustomInput
                  label="Phone"
                  value={formData.phone}
                  onChange={(v) => setFormData({ ...formData, phone: v })}
                />
              </div>
              <CustomInput
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(v) => setFormData({ ...formData, email: v })}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: gold,
                    marginBottom: "10px",
                  }}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(201,169,110,0.2)",
                    padding: "15px",
                    color: cream,
                    fontFamily: "'Jost', sans-serif",
                    outline: "none",
                    resize: "none",
                    transition: "border 0.3s ease",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = gold)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(201,169,110,0.2)")
                  }
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                style={{
                  background: gold,
                  color: dark,
                  border: "none",
                  padding: "18px",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.3em",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

// ─── Sub-Components ──────────────────────────────────────────────────────────

const ContactItem = ({ icon, title, children }) => (
  <div style={{ display: "flex", gap: "20px" }}>
    <div style={{ color: gold, marginTop: "4px" }}>{icon}</div>
    <div>
      <h4
        style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: gold,
          marginBottom: "8px",
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "15px",
          fontWeight: 300,
          color: "rgba(245,240,232,0.8)",
          lineHeight: 1.6,
        }}
      >
        {children}
      </p>
    </div>
  </div>
);

const CustomInput = ({ label, value, onChange, type = "text" }) => (
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
        marginBottom: "5px",
      }}
    >
      {label}
    </label>
    <input
      required
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        background: "transparent",
        border: "none",
        color: cream,
        fontFamily: "'Jost', sans-serif",
        fontSize: "16px",
        outline: "none",
        padding: "5px 0",
      }}
    />
  </div>
);

export default Contact;
