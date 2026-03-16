import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const gold = "#C9A96E";
const cream = "#F5F0E8";
const darkMid = "#141210";

const menuItems = [
  {
    id: 4,
    // On passe maintenant un tableau d'images
    images: ["/assets/m2.jpg", "/assets/m5.jpg", "/assets/m3.jpg"],
    desc: "At our restaurants, we take immense pride in sourcing the finest ingredients from Bahrain’s top vendors. Whether it’s fresh fruits, premium meats, or the freshest catch of the day, every item is carefully selected to meet the highest standards. Our commitment is to exceed our guests’ expectations, ensuring every dish reflects the quality and care that define our dining experience.",
  },
  {
    id: 1,
    images: ["/assets/m4.jpg", "/assets/m1.jpg"],
    desc: "We take immense pride in offering a beverage experience that is second to none. Partnering with the top suppliers in the country and beyond, we curate a broad selection of the finest wines and premium spirits. Our cocktails are elevated with artisanal syrups of the highest quality. Every fruit and garnish is freshly prepared in-house, ensuring each drink is not only flavorful but crafted with care. From global inspiration to local creativity, we bring you a world-class drink in every glass.",
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      style={{
        background: darkMid,
        padding: isMobile ? "60px 0" : "120px 0",
        color: cream,
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* ── HEADER ── */}
        <div
          style={{
            textAlign: "center",
            marginTop: isMobile ? "60px" : "100px",
          }}
        >
          <motion.a
            href="https://voltobahrain.com/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{ display: "inline-block", textDecoration: "none" }}
          >
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: isMobile ? "8px" : "10px",
                letterSpacing: "0.5em",
                color: gold,
                textTransform: "uppercase",
                marginBottom: isMobile ? "30px" : "50px",
              }}
            >
              The Art of Hospitality
            </p>
          </motion.a>
        </div>

        {/* ── ALTERNATING SECTIONS ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "80px" : "140px",
            padding: "20px 0",
          }}
        >
          {menuItems.map((item, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                style={{
                  display: "flex",
                  flexDirection: isMobile
                    ? "column"
                    : isEven
                      ? "row-reverse"
                      : "row",
                  alignItems: "center",
                  gap: isMobile ? "30px" : "80px",
                  maxWidth: "1200px",
                  margin: "0 auto",
                }}
              >
                {/* ── MULTIPLE IMAGES CONTAINER ── */}
                <div
                  style={{
                    width: "100%",
                    flex: "1 1 400px",
                    maxWidth: isMobile ? "100%" : "500px",
                    display: "flex",
                    gap: "12px", // Espace entre les photos
                  }}
                >
                  {item.images.map((imgSrc, imgIdx) => (
                    <div
                      key={imgIdx}
                      style={{
                        flex: 1,
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: "4px",
                        height: isMobile ? "220px" : "320px",
                      }}
                    >
                      <img
                        src={imgSrc}
                        alt={`Presentation ${imgIdx}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          filter: "brightness(0.8) sepia(0.1)",
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* ── TEXT CONTENT ── */}
                <div
                  style={{
                    flex: "2 1 0",
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: isMobile ? "20px" : "28px",
                      lineHeight: "1.5",
                      color: "#fff",
                      fontWeight: "300",
                      position: "relative",
                      padding: isMobile ? "0 10px" : "0",
                    }}
                  >
                    {!isMobile && (
                      <span
                        style={{
                          position: "absolute",
                          top: "-30px",
                          left: "-20px",
                          fontSize: "60px",
                          opacity: 0.1,
                        }}
                      >
                        “
                      </span>
                    )}
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── BANDE DE SPONSORS ── */}
      <div
        style={{
          marginTop: isMobile ? "80px" : "150px",
          background: "#FFFFFF",
          padding: isMobile ? "40px 0" : "70px 0",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: isMobile ? "18px" : "24px",
            letterSpacing: "0.4em",
            color: "#c4a02f",
            textTransform: "uppercase",
            marginBottom: isMobile ? "30px" : "60px",
            fontWeight: 800,
            width: "100%",
          }}
        >
          Our Suppliers
        </p>

        <div
          style={{
            display: "flex",
            overflow: "hidden",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{
              display: "flex",
              gap: isMobile ? "50px" : "100px",
              alignItems: "center",
            }}
          >
            {[...sponsors, ...sponsors, ...sponsors].map((brand, i) => (
              <img
                key={i}
                src={brand.logo}
                alt={brand.name}
                style={{
                  height: isMobile ? "50px" : "80px",
                  objectFit: "contain",
                  flexShrink: 0,
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
            marginTop: "60px",
            borderTop: `1px solid rgba(201,169,110,0.2)`,
            paddingTop: "40px",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: isMobile ? "16px" : "20px",
            }}
          >
            "Where flavor meets the soul of Bahrain."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HospitalityManagement;
