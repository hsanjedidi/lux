import React from 'react';
import { motion } from 'framer-motion';

// --- Assets ---
import voltoLogo from "@/assets/logo&title.png"; 
import dish1 from "@/assets/cooper.png";
import dish2 from "@/assets/caviar.png";
import dish3 from "@/assets/drink2.png";
import dish4 from "@/assets/sawndwitch.png";

const gold = "#C9A96E";
const cream = "#F5F0E8";
const darkMid = "#141210";

const menuItems = [
  { 
    id: 1, 
    img: dish1, 
    title: "Copper Rush", 
    desc: "A vibrant fusion of gin and Campari balanced with homemade grape syrup and fresh lemon juice, topped with sparkling blood orange soda. Bright, refreshing, and elegantly bittersweet, this cocktail delivers a bold citrus character with a smooth, sophisticated finish.",
    allergy: "" 
  },
  { 
    id: 2, 
    img: dish2, 
    title: "Oscietra Caviar", 
    desc: "A refined selection of premium Oscietra caviar, served with traditional accompaniments including warm blinis, finely chopped shallots, capers, sour cream, fresh chives, and boiled egg. A timeless delicacy offering a perfect balance of texture, freshness, and sophisticated flavor.",
    allergy: "Allergens: E | G | D" 
  },
  { 
    id: 3, 
    img: dish3, 
    title: "Sour Burn", 
    desc: "A bold and sophisticated blend of Jack Daniel’s No.7, double-burn caramel syrup, fresh lemon juice, and silky aquafaba, finished with a delicate red wine float. This cocktail delivers a perfect harmony of sweet and sour notes with layers of caramel richness and a subtle smoky finish.",
    allergy: "" 
  },
  { 
    id: 4, 
    img: dish4, 
    title: "Volto Wagyu Sandwich", 
    desc: "Breaded Wagyu Tenderloin Grade 4/5 served in soft milk bread with our signature Volto 3.0 BBQ sauce, accompanied by a gourmet burger patty and crispy Parmesan fries. A refined balance of rich flavor, premium texture, and elevated comfort dining.",
    allergy: "Allergens: G | D | SO | E" 
  },
];

const HospitalityManagement = () => {
  return (
    <section style={{ background: darkMid, padding: "120px 24px", color: cream, overflow: "hidden" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        
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
            <img src={voltoLogo} alt="Logo" style={{ width: "280px", marginBottom: "20px" }} />
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "0.5em", color: gold, textTransform: "uppercase" }}>
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
                  flexWrap: "wrap"
                }}
              >
                {/* Image Side */}
                <div style={{ flex: "1 1 450px", position: "relative" }}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    style={{ position: "relative", overflow: "hidden", borderRadius: "2px" }}
                  >
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      style={{ width: "100%", height: "550px", objectFit: "cover", display: "block" }} 
                    />
                  </motion.div>
                </div>

                {/* Text Side */}
                <div style={{ flex: "1 1 350px", textAlign: "left" }}>
                  <p style={{ 
                    color: gold, 
                    fontFamily: "'Jost', sans-serif", 
                    fontSize: "12px", 
                    letterSpacing: "0.3em", 
                    marginBottom: "15px" 
                  }}>
                    0{index + 1} — SELECTION
                  </p>
                  
                  <h3 style={{ 
                    fontFamily: "'Cormorant Garamond', serif", 
                    fontSize: "42px", 
                    fontWeight: 300, 
                    marginBottom: "25px",
                    lineHeight: 1.1 
                  }}>
                    {item.title}
                  </h3>
                  
                  <div style={{ 
                    width: "40px", 
                    height: "1px", 
                    background: gold, 
                    marginBottom: "25px" 
                  }} />
                  
                  <p style={{ 
                    fontFamily: "'Jost', sans-serif", 
                    fontSize: "16px", 
                    lineHeight: "1.8", 
                    color: "rgba(245,240,232,0.7)",
                    maxWidth: "400px",
                    marginBottom: "20px"
                  }}>
                    {item.desc}
                  </p>

                  {/* ── ALLERGY SECTION ── */}
                  <p style={{ 
                    fontFamily: "'Jost', sans-serif", 
                    fontSize: "11px", 
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: gold, 
                    opacity: 0.8,
                    borderLeft: `1px solid ${gold}`,
                    paddingLeft: "15px"
                  }}>
                    {item.allergy}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── FOOTER ── */}
        <div style={{ textAlign: "center", marginTop: "120px", borderTop: `1px solid rgba(201,169,110,0.2)`, paddingTop: "60px" }}>
           <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "20px" }}>
             "Where flavor meets the soul of Bahrain."
           </p>
        </div>

      </div>
    </section>
  );
};

export default HospitalityManagement;