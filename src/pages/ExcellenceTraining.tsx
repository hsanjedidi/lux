import React from "react";
import { motion } from "framer-motion";

// ─── Assets ──────────────────────────────────────────────────────────────────
import training1 from "@/assets/train1.jpg";
import training2 from "@/assets/train2.jpg";
import training3 from "@/assets/train3.jpg";
import training4 from "@/assets/train4.jpg";
import training5 from "@/assets/train5.jpg";

// ─── Design Tokens ─────────────────────────────────────────────────────────────
const gold = "#C9A96E";
const cream = "#F5F0E8";
const dark = "#0C0A08";

const ExcellenceTraining = () => {
  const images = [training1, training2, training3, training4, training5];

  return (
    <section
      style={{
        background: dark,
        padding: "160px 24px 120px 24px",
        color: cream,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* ── HEADER SECTION CENTRÉE ── */}
        <div
          style={{
            marginBottom: "80px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* 1. TITRE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "12px",
                color: gold,
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                marginBottom: "15px",
              }}
            >
              Human Capital
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 300,
                lineHeight: 1.1,
                margin: 0,
              }}
            >
            Excellence is not a moment, it is a continuous journey.
            </h2>

            {/* Ligne de séparation centrée */}
            <div
              style={{
                width: "80px",
                height: "1px",
                background: gold,
                margin: "30px auto 40px auto", // "auto" sur les côtés pour centrer
              }}
            />
          </motion.div>

          {/* 2. TEXTE / DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ maxWidth: "800px" }} // Légèrement réduit pour un meilleur bloc de texte centré
          >
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "17px",
                lineHeight: "1.9",
                color: "rgba(245,240,232,0.7)",
                fontWeight: 300,
                textAlign: "center", // Texte centré
              }}
            >
           Through our weekly training programmes, we invest in refining the skills, creativity, and professionalism of every team member across all departments. By nurturing a culture of learning and innovation, we ensure that each guest experience reflects the highest standards of luxury hospitality and world-class service.
            </p>
          </motion.div>
        </div>

        {/* ── IMAGES GALLERY ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                position: "relative",
                height: "450px",
                overflow: "hidden",
              }}
            >
              <div
                className="hover-border"
                style={{
                  position: "absolute",
                  inset: 0,
                  border: `1px solid ${gold}`,
                  margin: "15px",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />

              <img
                src={img}
                alt={`Training session ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(20%) brightness(0.9)",
                  transition: "all 0.8s ease",
                }}
              />

              <style>{`
                div:hover > .hover-border { opacity: 0.6 !important; }
                div:hover > img { filter: grayscale(0%) brightness(1.1) !important; transform: scale(1.1); }
              `}</style>
            </motion.div>
          ))}
        </div>

        {/* ── QUOTE FOOTER ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: "80px",
            textAlign: "center",
            borderTop: "1px solid rgba(201,169,110,0.1)",
            paddingTop: "40px",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "20px",
              fontStyle: "italic",
              color: gold,
            }}
          >
            "Cultivating talent to redefine the standards of hospitality."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExcellenceTraining;
