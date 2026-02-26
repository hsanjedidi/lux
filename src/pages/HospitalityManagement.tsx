import React from 'react';
import { motion } from 'framer-motion';

// ─── Assets ──────────────────────────────────────────────────────────────────
// Remplacez par vos chemins réels
import voltoLogo from "@/assets/volto_login-Photoroom.png"; 
import dish1 from "@/assets/copper_rush.jpeg";
import dish2 from "@/assets/oscietra_caviar.jpeg";
import dish3 from "@/assets/sour_burn.jpeg";
import dish4 from "@/assets/volto_wagyu_sandwich.jpg";
import dish5 from "@/assets/wagyu_striploin.jpg";
import dish6 from "@/assets/popcorn_martini.jpeg";
import dish7 from "@/assets/fin_de_claire_oysters_half_a_dozen.jpg";
import dish8 from "@/assets/fruit_platter.jpeg";
// ─── Design Tokens ─────────────────────────────────────────────────────────────
const gold = "#C9A96E";
const cream = "#F5F0E8";
const darkMid = "#141210";

const menuItems = [
  { id: 1, img: dish1, title: "Copper Rush" },
  { id: 2, img: dish2, title: "Oscietra Caviar" },
  { id: 3, img: dish3, title: "Sour Burn" },
  { id: 4, img: dish4, title: "Volto Wagyu Sandwich" },
  { id: 5, img: dish5, title: "Wagyu Striploin" },
  { id: 6, img: dish6, title: "Popcorn Martini" },
  { id: 7, img: dish7, title: "Fin de Claire Oysters Half A Dozen" },
  { id: 8, img: dish8, title: "Fruit Platter" },
];

const HospitalityManagement = () => {
  return (
    <section style={{ background: darkMid, padding: "120px 24px", color: cream }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* ── VOLTO BRAND HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.a 
            href="https://voltobahrain.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: "inline-block", textDecoration: "none" }}
          >
            <img 
              src={voltoLogo} 
              alt="Volto Bahrain Logo" 
              style={{ width: "320px", height: "auto", marginBottom: "20px", filter: "brightness(1.2)" }}
            />
            <p style={{ 
              fontFamily: "'Jost', sans-serif", 
              fontSize: "12px", 
              letterSpacing: "0.4em", 
              color: gold, 
              textTransform: "uppercase",
              marginTop: "10px"
            }}>
              Visit Official Website
            </p>
          </motion.a>
        </div>

        {/* ── FROM OUR MENU SECTION ── */}
        <div style={{ marginBottom: "40px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px", color: gold, textTransform: "uppercase", letterSpacing: "0.2em" }}>
              Culinary Excellence
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, margin: "10px 0" }}>
              From Our <em style={{ color: gold }}>Menu</em>
            </h2>
          </div>
          <div style={{ width: "100px", height: "1px", background: gold, opacity: 0.3, marginBottom: "15px" }} />
        </div>

        {/* ── MENU IMAGES GRID ── */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "24px" 
        }}>
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              style={{ position: "relative", cursor: "pointer", overflow: "hidden", aspectRatio: "4/5" }}
            >
              {/* Overlay Gradient */}
              <div style={{ 
                position: "absolute", 
                inset: 0, 
                background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.8))", 
                zIndex: 1 
              }} />
              
              <img 
                src={item.img} 
                alt={item.title} 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover",
                  transition: "transform 0.8s ease" 
                }} 
              />
              
              <div style={{ 
                position: "absolute", 
                bottom: "20px", 
                left: "20px", 
                zIndex: 2 
              }}>
                <p style={{ 
                  fontFamily: "'Cormorant Garamond', serif", 
                  fontSize: "20px", 
                  fontStyle: "italic",
                  color: cream 
                }}>
                  {item.title}
                </p>
              </div>

              {/* Decorative Frame on Hover */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{ 
                  position: "absolute", 
                  inset: "15px", 
                  border: `1px solid ${gold}`, 
                  zIndex: 3,
                  pointerEvents: "none"
                }} 
              />
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "60px" }}>
           <p style={{ 
             fontFamily: "'Jost', sans-serif", 
             fontSize: "14px", 
             color: "rgba(245,240,232,0.5)", 
             maxWidth: "600px", 
             margin: "0 auto",
             lineHeight: "1.8"
           }}>
             Experience the fusion of traditional flavors and modern culinary techniques at Volto, 
             the heartbeat of Bahrain's Block 338.
           </p>
        </div>

      </div>
    </section>
  );
};

export default HospitalityManagement;