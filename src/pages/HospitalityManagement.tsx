import React from "react";
import { motion } from "framer-motion";

// --- Assets ---
import voltoLogo from "@/assets/logo&title.png";
import dish1 from "@/assets/m4.jpg";
import dish4 from "@/assets/m2.jpg";

const gold = "#C9A96E";
const cream = "#F5F0E8";
const darkMid = "#141210";

const menuItems = [
  {
    id: 1,
    img: dish1,
    title: "Copper Rush",
    desc: "We take immense pride in offering a beverage experience that is second to none. Partnering with the top suppliers in the country and beyond, we curate a broad selection of the finest wines and premium spirits.",
    allergy: "",
  },
  {
    id: 4,
    img: dish4,
    title: "Volto Wagyu Sandwich",
    desc: "At our restaurants, we take immense pride in sourcing the finest ingredients from Bahrain’s top vendors. Whether it’s fresh fruits, premium meats, or the freshest catch of the day.",
    allergy: "Allergens: G | D | SO | E",
  },
];

const sponsors = [
  { id: 1, name: "Partner 1", logo: "/spon6.jpg" },
  { id: 2, name: "Partner 2", logo: "/spon2.png" },
  { id: 3, name: "Partner 3", logo: "/spon3.png" },
  { id: 4, name: "Partner 4", logo: "/spon4.png" },
  { id: 5, name: "Partner 5", logo: "/spon1-Photoroom.png" },
];

const HospitalityManagement = () => {
  return (
    <section
      style={{
        background: darkMid,
        padding: "120px 0",
        color: cream,
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* ── HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: "100px" }}>
          <motion.a
            href="https://voltobahrain.com/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{ display: "inline-block", textDecoration: "none" }}
          >
            <img
              src={voltoLogo}
              alt="Logo"
              style={{ width: "280px", marginBottom: "20px" }}
            />
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.5em",
                color: gold,
                textTransform: "uppercase",
              }}
            >
              The Art of Hospitality
            </p>
          </motion.a>
        </div>

        {/* ── ALTERNATING SECTIONS ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
          {menuItems.map((item, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                  display: "flex",
                  flexDirection: isEven ? "row-reverse" : "row",
                  alignItems: "center",
                  gap: "60px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: "1 1 450px", position: "relative" }}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "2px",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "550px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </motion.div>
                </div>

                <div style={{ flex: "1 1 350px", textAlign: "left" }}>
              
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 300, marginBottom: "25px", lineHeight: 1.1 }}>
                    {item.title}
                  </h3>
                  <div style={{ width: "40px", height: "1px", background: gold, marginBottom: "25px" }} />
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "16px", lineHeight: "1.8", color: "rgba(245,240,232,0.7)", maxWidth: "400px", marginBottom: "20px" }}>
                    {item.desc}
                  </p>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "0.05em", textTransform: "uppercase", color: gold, opacity: 0.8, borderLeft: `1px solid ${gold}`, paddingLeft: "15px" }}>
                    {item.allergy}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── BANDE DE SPONSORS (White Background) ── */}
      <div 
        style={{ 
          marginTop: "150px", 
          background: "#FFFFFF", // Fond Blanc pur
          padding: "70px 0",
          boxShadow: "inset 0 0 50px rgba(0,0,0,0.05)" // Légère ombre interne pour le relief
        }}
      >
        <p style={{ 
          textAlign: "center", 
         
          fontSize: "20px", 
          letterSpacing: "0.4em", 
          color: "#C9A96E", // Texte sombre pour lisibilité sur blanc
          textTransform: "uppercase", 
          marginBottom: "50px", 
          fontWeight: 500,
          opacity: 0.6
        }}>
          Our Suppliers
        </p>
        
        <div style={{ 
          display: "flex", 
          overflow: "hidden", 
          // Masquage sur fond blanc
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
        }}>
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ 
              duration: 35, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ 
              display: "flex", 
              gap: "120px", 
              whiteSpace: "nowrap", 
              alignItems: "center"
            }}
          >
            {[...sponsors, ...sponsors, ...sponsors].map((brand, i) => (
              <img
                key={i}
                src={brand.logo}
                alt={brand.name}
                style={{
                  height: "100px",
                  opacity: 1,
                  filter: "none",
                  objectFit: "contain",
                  flexShrink: 0
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            textAlign: "center",
            marginTop: "80px",
            borderTop: `1px solid rgba(201,169,110,0.2)`,
            paddingTop: "60px",
          }}
        >
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "20px" }}>
            "Where flavor meets the soul of Bahrain."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HospitalityManagement;