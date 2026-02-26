import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MDPhoto from '@/assets/team-mohamed-khalid.jpg'; // Adaptez le chemin et l'extension
// ─── Assets ──────────────────────────────────────────────────────────────────
import aboutImg from "@/assets/about-hero.jpg";
// Note: Remplacez par le chemin réel de la photo du directeur
// import mdPhoto from "@/assets/md-photo.jpg";
import logoPartner1 from "@/assets/sp.png";
import logoPartner2 from "@/assets/sp1.png";
import logoPartner3 from "@/assets/sp2.png";
import logoPartner4 from "@/assets/sp3.png";
import logoPartner5 from "@/assets/sp4.png";
import logoPartner6 from "@/assets/sp5.png";
import logoPartner7 from "@/assets/sp6.png";
import logoPartner8 from "@/assets/sp7.png";

// ─── Design Tokens ─────────────────────────────────────────────────────────────
const gold = "#C9A96E";
const dark = "#0C0A08";
const darkMid = "#141210";
const cream = "#F5F0E8";

// ─── Data ──────────────────────────────────────────────────────────────────────
const sponsors = [
  { name: "Partner 1", logo: logoPartner1 },
  { name: "Partner 2", logo: logoPartner2 },
  { name: "Partner 3", logo: logoPartner3 },
  { name: "Partner 4", logo: logoPartner4 },
  { name: "Partner 5", logo: logoPartner5 },
  { name: "Partner 6", logo: logoPartner6 },
  { name: "Partner 7", logo: logoPartner7 },
  { name: "Partner 8", logo: logoPartner8 },
];

// ─── Shared Components ─────────────────────────────────────────────────────────
const GoldDivider = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 12,
      margin: "1.25rem 0",
    }}
  >
    <div style={{ width: 40, height: 1, background: gold, opacity: 0.6 }} />
    <div
      style={{
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: gold,
        opacity: 0.8,
      }}
    />
    <div style={{ width: 40, height: 1, background: gold, opacity: 0.6 }} />
  </div>
);

const Eyebrow = ({ children }) => (
  <p
    style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "11px",
      letterSpacing: "0.35em",
      textTransform: "uppercase",
      color: gold,
      marginBottom: "0.25rem",
      opacity: 0.9,
    }}
  >
    {children}
  </p>
);

const CornerOrnament = ({ style = {} }) => (
  <svg
    style={{
      position: "absolute",
      opacity: 0.07,
      pointerEvents: "none",
      ...style,
    }}
    width="160"
    height="160"
    viewBox="0 0 160 160"
    fill="none"
  >
    <rect x="1" y="1" width="158" height="158" stroke={gold} strokeWidth="1" />
    <rect
      x="12"
      y="12"
      width="136"
      height="136"
      stroke={gold}
      strokeWidth="0.5"
    />
    <line x1="1" y1="1" x2="26" y2="26" stroke={gold} strokeWidth="0.5" />
    <line x1="159" y1="1" x2="134" y2="26" stroke={gold} strokeWidth="0.5" />
    <line x1="1" y1="159" x2="26" y2="134" stroke={gold} strokeWidth="0.5" />
    <line x1="159" y1="159" x2="134" y2="134" stroke={gold} strokeWidth="0.5" />
  </svg>
);

const WatermarkNumber = ({ number }) => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "clamp(120px, 20vw, 260px)",
      fontWeight: 700,
      color: "transparent",
      WebkitTextStroke: `1px ${gold}`,
      opacity: 0.035,
      pointerEvents: "none",
      whiteSpace: "nowrap",
      userSelect: "none",
      lineHeight: 1,
    }}
  >
    {number}
  </div>
);

const SponsorBand = () => {
  return (
    <section
      style={{
        padding: "100px 0",
        background: cream,
        borderTop: `1px solid rgba(201,169,110,0.1)`,
        borderBottom: `1px solid rgba(201,169,110,0.1)`,
        overflow: "hidden",
      }}
    >
      <div style={{ marginBottom: "50px", textAlign: "center" }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color: gold,
            opacity: 0.6,
          }}
        >
          Our Partners & Collaborators
        </motion.p>
      </div>
      <div
        style={{ display: "flex", overflow: "hidden", position: "relative" }}
      >
        <motion.div
          style={{
            display: "flex",
            gap: "6rem",
            whiteSpace: "nowrap",
            willChange: "transform",
          }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "160px",
              }}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                style={{
                  height: "55px",
                  width: "auto",
                  objectFit: "contain",
                  opacity: 0.4,
                  filter: "grayscale(100%) brightness(120%)",
                  transition: "all 0.6s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.filter =
                    "grayscale(0%) brightness(100%)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.opacity = "0.4";
                  e.currentTarget.style.filter =
                    "grayscale(100%) brightness(120%)";
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Jost:wght@200;300;400&display=swap');
    body { margin: 0; background: ${dark}; }
  `}</style>
);

// ─── About Page Component ──────────────────────────────────────────────────────
const About = () => {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImgY = useTransform(heroScroll, [0, 1], ["0%", "25%"]);
  const heroTitleOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);

  return (
    <main style={{ background: dark, color: cream }}>
      <FontStyle />

      {/* ── HERO SECTION ── */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{ position: "absolute", inset: "-10% 0", y: heroImgY }}
        >
          <img
            src={aboutImg}
            alt="Hero"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to bottom, rgba(12,10,8,0.3), ${dark})`,
          }}
        />
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: heroTitleOpacity,
          }}
        >
          <Eyebrow>Luxuria Hospitality</Eyebrow>
          <GoldDivider />
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(50px, 8vw, 100px)",
              fontWeight: 300,
              textAlign: "center",
              margin: 0,
            }}
          >
            About{" "}
            <em style={{ fontStyle: "italic", color: gold, fontWeight: 400 }}>
              Us
            </em>
          </h1>
        </motion.div>
      </section>

      {/* ── SECTION: OUR STORY ── */}
      <section
        style={{
          background: darkMid,
          padding: "160px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CornerOrnament style={{ top: 60, left: 60 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Eyebrow>Who We Are</Eyebrow>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 300,
                color: cream,
                marginBottom: "2rem",
                lineHeight: 1.1,
              }}
            >
              The{" "}
              <span style={{ color: gold, fontStyle: "italic" }}>Luxuria</span>{" "}
              Story
            </h2>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "clamp(18px, 2vw, 22px)",
                lineHeight: 1.6,
                color: gold,
                fontWeight: 300,
                maxWidth: "800px",
                marginBottom: "5rem",
                opacity: 0.9,
              }}
            >
              Luxuria Hospitality Management is a passionate and ambitious
              organization driven by vision, creativity, and strategic
              decision-making.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "80px 100px",
              alignItems: "start",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div
                style={{
                  width: "30px",
                  height: "1px",
                  background: gold,
                  marginBottom: "20px",
                }}
              />
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.7)",
                  fontWeight: 300,
                }}
              >
                With over 25 years of experience in the entertainment industry
                and more than 15 years across hospitality and lifestyle
                sectors—including hotels, beach clubs, and corporate events—we
                deliver strong industry expertise.
                <br />
                <br />
                Originally established as{" "}
                <strong>DJ Jackson Productions</strong> by Abdulla AlMuharraqi,
                the company rebranded in 2020 to reflect its expanded focus,
                lead by Mohamed AlMuharraqi as co-founder and managing director.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div
                style={{
                  width: "30px",
                  height: "1px",
                  background: gold,
                  marginBottom: "20px",
                }}
              />
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.7)",
                  fontWeight: 300,
                }}
              >
                In 2022, we established <strong>Volto Restaurant</strong> in
                Manama Block 338. A vision transformed into a refined dining
                destination that celebrates exceptional cuisine and connects
                people through authentic experiences.
                <br />
                <br />
                Today, with over 100 employees, the vision has grown into a
                recognized brand across the GCC in under a year, driven by our
                commitment to innovative design and memorable guest experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BANDE SPONSORS ANIMÉE ── */}
      <SponsorBand />

      {/* ── SECTION: MANAGING DIRECTOR'S MESSAGE ── */}
      <section
        style={{
          padding: "160px 24px",
          background: dark,
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Côté Gauche : Photo avec bordures décoratives */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ position: "relative", padding: "15px" }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100px",
                height: "100px",
                borderLeft: `1px solid ${gold}`,
                borderTop: `1px solid ${gold}`,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "100px",
                height: "100px",
                borderRight: `1px solid ${gold}`,
                borderBottom: `1px solid ${gold}`,
              }}
            />
            <div
              style={{
                width: "100%",
                height: "550px",
                background: "#1a1a1a",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Image Placeholder - à remplacer par {mdPhoto} */}
         <div
  style={{
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(45deg, #0C0A08, #1a1a1a)",
    overflow: "hidden", // Assure que l'image ne dépasse pas du cadre
  }}
>
  <img
    src={MDPhoto}
    alt="Managing Director"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover", // Remplit le cadre sans déformer
      opacity: 0.8,       // Optionnel : garde l'aspect sobre et élégant
      display: "block"
    }}
  />
</div>
            </div>
          </motion.div>

          {/* Côté Droit : Le Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Eyebrow>Leadership Message</Eyebrow>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 300,
                color: cream,
                marginBottom: "2.5rem",
                lineHeight: 1.2,
              }}
            >
              A Word from our <br />
              <em style={{ color: gold }}>Managing Director</em>
            </h2>

            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  top: "-40px",
                  left: "-20px",
                  fontSize: "120px",
                  color: gold,
                  opacity: 0.1,
                  fontFamily: "'Cormorant Garamond', serif",
                  pointerEvents: "none",
                }}
              >
                “
              </span>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "17px",
                  lineHeight: "1.9",
                  color: "rgba(245,240,232,0.8)",
                  fontWeight: 300,
                  marginBottom: "2rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                At Luxuria Hospitality Management, we don't just manage venues;
                we curate emotions and lasting memories. Our journey is fueled
                by a relentless pursuit of excellence and a deep-rooted passion
                for redefining the art of service in the GCC region.
                <br />
                <br />
                We believe that every detail matters, and it is this meticulous
                attention to the 'small things' that allows us to create
                world-class experiences that resonate with our guests long after
                they leave.
              </p>
            </div>

            <div
              style={{
                marginTop: "3rem",
                borderTop: "1px solid rgba(201,169,110,0.2)",
                paddingTop: "2rem",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "26px",
                  color: gold,
                  marginBottom: "0.2rem",
                  fontStyle: "italic",
                }}
              >
                Mohamed AlMuharraqi
              </p>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "rgba(245,240,232,0.5)",
                }}
              >
                Co-Founder & Managing Director
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION: MISSION ── */}
      <section
        style={{
          padding: "160px 24px",
          position: "relative",
          background: darkMid,
          overflow: "hidden",
        }}
      >
        <WatermarkNumber number="01" />
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "100px",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Eyebrow>Our Purpose</Eyebrow>
            <div style={{ margin: "24px 0" }}>
              <div style={{ width: "60px", height: "2px", background: gold }} />
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(40px, 4vw, 56px)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: cream,
              }}
            >
              Mission & <br />
              <em style={{ color: gold, fontStyle: "italic", fontWeight: 400 }}>
                Commitment
              </em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "17px",
              lineHeight: 1.9,
              color: "rgba(245,240,232,0.8)",
              fontWeight: 300,
              position: "relative",
              paddingLeft: "40px",
              borderLeft: "1px solid rgba(201,169,110,0.2)",
            }}
          >
            <p style={{ marginBottom: "2rem", color: cream, fontSize: "19px" }}>
              Luxuria Hospitality Management is dedicated to developing and
              managing distinctive hospitality concepts that deliver{" "}
              <strong>exceptional and memorable experiences</strong>.
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              Driven by visionary leadership and a passion for creativity, we
              transform bold ideas into world-class hospitality destinations.
              Our portfolio is united by a shared commitment to innovation,
              operational excellence, and refined guest engagement.
            </p>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(245,240,232,0.5)",
                fontStyle: "italic",
              }}
            >
              Our dedication extends beyond guest satisfaction — it shapes a
              dynamic work culture that fosters professional growth and
              generates sustainable value for our stakeholders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION: VISION ── */}
      <section
        style={{
          padding: "120px 24px",
          position: "relative",
          background: dark,
        }}
      >
        <WatermarkNumber number="02" />
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Eyebrow>The Future</Eyebrow>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "45px",
                fontWeight: 300,
                marginBottom: "2rem",
              }}
            >
              Vision & <em style={{ color: gold }}>Excellence</em>
            </h2>
            <p
              style={{
                maxWidth: "800px",
                margin: "0 auto",
                fontFamily: "'Jost', sans-serif",
                fontSize: "16px",
                lineHeight: 1.9,
                color: "rgba(245,240,232,0.6)",
              }}
            >
              Our vision is to position Luxuria Hospitality Management as a
              leading hospitality group in the Kingdom of Bahrain and beyond,
              setting new benchmarks in quality, service excellence, and
              experiential luxury. We combine strategic insight and data-driven
              hospitality management with innovation, collaboration, and
              customer-centric excellence. By continuously elevating standards,
              we aim to enhance Bahrain’s global reputation as a premium tourism
              and lifestyle destination.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
