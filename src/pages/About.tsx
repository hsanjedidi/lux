import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-hero.jpg";

// ─── Design Tokens ─────────────────────────────────────────────────────────────
const gold = "#C9A96E";
const goldLight = "#E8D5A3";
const goldDim = "rgba(201,169,110,0.12)";
const dark = "#0C0A08";
const darkMid = "#141210";
const cream = "#F5F0E8";

// ─── Team Data ─────────────────────────────────────────────────────────────────
const teamMembers = [
  {
    name: "Mohamed Khalid AlMuharraqi",
    role: "Co-Founder – Managing Director",
    bio: "Over 12 years in the entertainment industry. Under his leadership, Luxuria achieved remarkable growth, establishing Volto as the highest footfall restaurant & lounge in Bahrain. Winner of Fact Dining Awards 2025.",
  },
  {
    name: "Elias Fernandes",
    role: "General Manager",
    bio: "Over 24 years of extensive operational experience. Oversees day-to-day administration, vendor management, HR operations, procurement, and overall financial management.",
  },
  {
    name: "Saad Al Romaihi",
    role: "Operations Manager",
    bio: "Over 15 years of hospitality experience across prominent destinations in Bahrain. Expert in team leadership, guest experience, and operational control.",
  },
  {
    name: "Andy Zyla",
    role: "Group Executive Chef",
    bio: "Over 25 years of culinary leadership across the UK, Maldives, UAE, Saudi Arabia, and Bahrain. Previously at The Ritz-Carlton, Soneva Fushi, and Golf Saudi.",
  },
  {
    name: "Mohamed Loumrhari",
    role: "Floor Manager",
    bio: "Over a decade of hospitality experience in fine dining and luxury hotels across the GCC. Fluent in Arabic, English, and French.",
  },
  {
    name: "Andrei Bodrug",
    role: "Bar Manager",
    bio: "15 years in the hospitality industry. Known for reinterpreting classic techniques into refined, modern experiences. Recognized competitor in bar competitions.",
  },
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
      fontFamily: "'Cormorant Garamond', Georgia, serif",
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

// ─── Font Injection ─────────────────────────────────────────────────────────────
const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Jost:wght@200;300;400&display=swap');
  `}</style>
);

// ─── About Page ─────────────────────────────────────────────────────────────────
const About = () => {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  // Parallax: image moves slightly as you scroll down
  const heroImgY = useTransform(heroScroll, [0, 1], ["0%", "20%"]);
  // Fade out the title as you scroll
  const heroTitleOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const heroTitleY = useTransform(heroScroll, [0, 0.5], ["0%", "-20%"]);

  return (
    <main style={{ background: dark }}>
      <FontStyle />

      {/* ── Full-Screen Hero ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Parallax image */}
        <motion.div
          style={{
            position: "absolute",
            inset: "-10% 0",
            y: heroImgY,
          }}
        >
          <img
            src={aboutImg}
            alt="About Us"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
        </motion.div>

        {/* Dark gradient overlay — stronger at bottom for text legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(12,10,8,0.35) 0%, rgba(12,10,8,0.25) 40%, rgba(12,10,8,0.65) 80%, rgba(12,10,8,0.92) 100%)",
          }}
        />

        {/* Subtle vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(12,10,8,0.55) 100%)",
          }}
        />

        {/* Centered title */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: heroTitleOpacity,
            y: heroTitleY,
          }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "11px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: gold,
              marginBottom: "1rem",
            }}
          >
            Luxuria Hospitality
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ width: 60, height: 1, background: gold, opacity: 0.5 }} />
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: gold,
                opacity: 0.7,
              }}
            />
            <div style={{ width: 60, height: 1, background: gold, opacity: 0.5 }} />
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(56px, 9vw, 110px)",
              fontWeight: 300,
              color: cream,
              letterSpacing: "0.04em",
              textAlign: "center",
              lineHeight: 1,
              margin: 0,
            }}
          >
            About{" "}
            <em style={{ fontStyle: "italic", color: gold, fontWeight: 400 }}>
              Us
            </em>
          </motion.h1>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "9px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: gold,
              opacity: 0.6,
            }}
          >
            Scroll
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            style={{
              width: 1,
              height: 36,
              background: `linear-gradient(to bottom, ${gold}, transparent)`,
              opacity: 0.5,
            }}
          />
        </motion.div>
      </section>

      {/* ── Section: Our Story (About Us) ───────────────────────────────────── */}
      <section
        style={{
          background: darkMid,
          padding: "140px 24px",
          position: "relative",
          overflow: "hidden",
          borderBottom: `1px solid rgba(201,169,110,0.1)`,
        }}
      >
        {/* Left glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "-8%",
            transform: "translateY(-50%)",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <CornerOrnament style={{ top: 36, left: 36 }} />
        <CornerOrnament style={{ bottom: 36, right: 36 }} />

        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{ marginBottom: "5rem" }}
          >
            <Eyebrow>Who We Are</Eyebrow>
            <GoldDivider />
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(42px, 5.5vw, 68px)",
                fontWeight: 300,
                color: cream,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                marginTop: "0.5rem",
                maxWidth: 700,
              }}
            >
              The{" "}
              <em style={{ fontStyle: "italic", color: gold, fontWeight: 400 }}>
                Luxuria
              </em>{" "}
              Story
            </h2>
          </motion.div>

          {/* ── Body: two-column layout ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "5rem",
              alignItems: "start",
            }}
          >
            {/* Left column */}
            <div>
              {[
                {
                  label: "Our Foundation",
                  text: "Luxuria Hospitality Management is a passionate and ambitious organization driven by vision, creativity, and strategic decision-making. With over 25 years of experience in the entertainment industry and more than 15 years across hospitality and lifestyle sectors—including hotels, beach clubs, restaurants, lounges, concerts, and corporate events—we deliver strong industry expertise and operational excellence across every venture.",
                },
                {
                  label: "Our Origins",
                  text: "Originally established as DJ Jackson Productions by Abdulla AlMuharraqi, the company rebranded in 2020 to Luxuria Hospitality Management to reflect its expanded focus and long-term vision within the hospitality and lifestyle industry, led by his brother Mohamed AlMuharraqi as Co-Founder and Managing Director.",
                },
              ].map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  style={{ marginBottom: "3rem" }}
                >
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "9px",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: gold,
                      opacity: 0.75,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {block.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Jost', 'Helvetica Neue', sans-serif",
                      fontSize: "15px",
                      lineHeight: 1.9,
                      color: "rgba(245,240,232,0.62)",
                      fontWeight: 300,
                    }}
                  >
                    {block.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Right column */}
            <div>
              {[
                {
                  label: "Global Reach",
                  text: "Our portfolio includes collaborations with more than 15 international brands and over 20 global artists, both in Bahrain and internationally.",
                },
                {
                  label: "Volto Restaurant",
                  text: "In 2022, we established Volto Restaurant in Manama Block 338. The concept was originally developed in 2019, when founder Mohamed AlMuharraqi and his brothers transformed their passion for food and beverage into a refined dining destination. Their vision was to create authentic culinary experiences that connect people and celebrate exceptional cuisine.",
                },
                {
                  label: "Today",
                  text: "With over 100 employees across Luxuria Hospitality Management and Volto Restaurant, that vision has grown into a recognized brand across the GCC in under a year. Our commitment to innovative design, exceptional service, and memorable guest experiences continues to drive sustainable growth and long-term success.",
                },
              ].map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.15 }}
                  style={{ marginBottom: "3rem" }}
                >
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "9px",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: gold,
                      opacity: 0.75,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {block.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Jost', 'Helvetica Neue', sans-serif",
                      fontSize: "15px",
                      lineHeight: 1.9,
                      color: "rgba(245,240,232,0.62)",
                      fontWeight: 300,
                    }}
                  >
                    {block.text}
                  </p>
                </motion.div>
              ))}

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{
                  display: "flex",
                  gap: "2.5rem",
                  paddingTop: "2rem",
                  borderTop: `1px solid rgba(201,169,110,0.15)`,
                  flexWrap: "wrap",
                }}
              >
                {[
                  { value: "25+", label: "Years Experience" },
                  { value: "15+", label: "International Brands" },
                  { value: "100+", label: "Employees" },
                  { value: "20+", label: "Global Artists" },
                ].map((stat, i) => (
                  <div key={i} style={{ minWidth: 90 }}>
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(32px, 4vw, 44px)",
                        fontWeight: 300,
                        color: gold,
                        lineHeight: 1,
                        marginBottom: "0.35rem",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "9px",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "rgba(245,240,232,0.45)",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 1: Mission & Commitment ─────────────────────────────────── */}
      <section
        style={{
          background: dark,
          padding: "120px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CornerOrnament style={{ top: 36, left: 36 }} />
        <CornerOrnament style={{ bottom: 36, right: 36 }} />
        <WatermarkNumber number="01" />

        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "80px",
              alignItems: "start",
            }}
          >
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Eyebrow>Our Story</Eyebrow>
              <GoldDivider />
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(40px, 5vw, 62px)",
                  fontWeight: 300,
                  color: cream,
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  marginTop: "0.5rem",
                }}
              >
                Mission &{" "}
                <em
                  style={{ fontStyle: "italic", color: gold, fontWeight: 400 }}
                >
                  Commitment
                </em>
              </h2>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <p
                style={{
                  fontFamily: "'Jost', 'Helvetica Neue', sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.9,
                  color: "rgba(245,240,232,0.6)",
                  marginBottom: "1.75rem",
                  fontWeight: 300,
                }}
              >
                Luxuria Hospitality Management is dedicated to developing and
                managing distinctive hospitality concepts that deliver
                exceptional and memorable experiences. Our portfolio is united
                by a shared commitment to innovation, operational excellence,
                and refined guest engagement.
              </p>
              <p
                style={{
                  fontFamily: "'Jost', 'Helvetica Neue', sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.9,
                  color: "rgba(245,240,232,0.6)",
                  fontWeight: 300,
                }}
              >
                Driven by visionary leadership and a passion for creativity, we
                transform bold ideas into world-class hospitality destinations.
                Our dedication to superior standards in service, quality, and
                design extends beyond guest satisfaction — it shapes a dynamic
                work culture that fosters professional growth, empowers talent,
                and generates sustainable value for our stakeholders.
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                style={{
                  height: 1,
                  background: `linear-gradient(90deg, ${gold}, transparent)`,
                  marginTop: "2.5rem",
                  transformOrigin: "left",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Vision & Excellence ──────────────────────────────────── */}
      <section
        style={{
          background: darkMid,
          padding: "120px 24px",
          position: "relative",
          overflow: "hidden",
          borderTop: `1px solid rgba(201,169,110,0.1)`,
          borderBottom: `1px solid rgba(201,169,110,0.1)`,
        }}
      >
        {/* Gold radial glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "-10%",
            transform: "translateY(-50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(201,169,110,0.055) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <WatermarkNumber number="02" />

        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "80px",
              alignItems: "start",
            }}
          >
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Eyebrow>Our Story</Eyebrow>
              <GoldDivider />
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(40px, 5vw, 62px)",
                  fontWeight: 300,
                  color: cream,
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  marginTop: "0.5rem",
                }}
              >
                Vision &{" "}
                <em
                  style={{ fontStyle: "italic", color: gold, fontWeight: 400 }}
                >
                  Excellence
                </em>
              </h2>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {[
                "Our vision is to position Luxuria Hospitality Management as a leading hospitality group in the Kingdom of Bahrain and beyond, setting new benchmarks in quality, service excellence, and experiential luxury.",
                "We combine strategic insight and data-driven hospitality management with innovation, collaboration, and customer-centric excellence. By continuously elevating standards, we aim to enhance Bahrain's global reputation as a premium tourism and lifestyle destination.",
                "In the coming years, Luxuria Hospitality Management seeks to expand regionally into key markets such as Riyadh and Dubai, with long-term ambitions of entering prominent European destinations, establishing Luxuria as an internationally recognized hospitality brand.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
                  style={{
                    fontFamily: "'Jost', 'Helvetica Neue', sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.9,
                    color: "rgba(245,240,232,0.6)",
                    marginBottom: "1.75rem",
                    fontWeight: 300,
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: dark,
          padding: "120px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CornerOrnament style={{ top: 36, right: 36 }} />

        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center", marginBottom: "5rem" }}
          >
            <Eyebrow>Leadership</Eyebrow>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "0.5rem 0 1.5rem",
              }}
            >
              <GoldDivider />
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(40px, 5vw, 60px)",
                fontWeight: 300,
                color: cream,
                lineHeight: 1.1,
              }}
            >
              Meet Our{" "}
              <em style={{ fontStyle: "italic", color: gold, fontWeight: 400 }}>
                Team
              </em>
            </h2>
          </motion.div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "0",
            }}
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{
                  borderTop: `1px solid rgba(201,169,110,0.15)`,
                  borderLeft:
                    i % 2 === 1 ? `1px solid rgba(201,169,110,0.08)` : "none",
                  padding: "2.5rem 2rem",
                  position: "relative",
                  transition: "background 0.3s ease",
                }}
                whileHover={{
                  backgroundColor: "rgba(201,169,110,0.04)",
                }}
              >
                {/* Index number */}
                <span
                  style={{
                    position: "absolute",
                    top: "2rem",
                    right: "2rem",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    color: gold,
                    opacity: 0.4,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: cream,
                    marginBottom: "0.4rem",
                    lineHeight: 1.2,
                  }}
                >
                  {member.name}
                </h3>

                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: gold,
                    marginBottom: "1.25rem",
                    opacity: 0.85,
                  }}
                >
                  {member.role}
                </p>

                {/* Gold accent line */}
                <div
                  style={{
                    height: 1,
                    width: 32,
                    background: gold,
                    opacity: 0.4,
                    marginBottom: "1.25rem",
                  }}
                />

                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "13.5px",
                    lineHeight: 1.8,
                    color: "rgba(245,240,232,0.5)",
                    fontWeight: 300,
                  }}
                >
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom border */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              height: 1,
              background: `rgba(201,169,110,0.15)`,
              marginTop: 0,
              transformOrigin: "left",
            }}
          />
        </div>
      </section>
    </main>
  );
};

export default About;