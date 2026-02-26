import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/heo1.jpeg";
import menuImg from "@/assets/menu-hero.jpg";

import sculptureImg from "@/assets/hero.jpg";

// 👉 Imports Équipe
import logoPartner1 from "@/assets/sp.png";
import logoPartner2 from "@/assets/sp1.png";
import logoPartner3 from "@/assets/sp2.png";
import logoPartner4 from "@/assets/sp3.png";
import logoPartner5 from "@/assets/sp4.png";
import logoPartner6 from "@/assets/sp5.png";
import logoPartner7 from "@/assets/sp6.png";
import logoPartner8 from "@/assets/sp7.png";

import TeamSection from "./TeamSection";
import { V } from "vitest/dist/chunks/reporters.d.BFLkQcL6.js";

// --- CONFIGURATION DES SPONSORS ---
// Remplace les liens par tes logos réels dans /assets/
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

const SponsorBand = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-white overflow-hidden">
  <div className="mb-10 text-center">
    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="font-body text-[10px] tracking-[0.4em] uppercase text-primary/30"
    >
      Our Partners & Collaborators
    </motion.p>
  </div>

  <div className="flex overflow-hidden relative">
    {/* Optionnel : Dégradés sur les côtés pour masquer l'entrée/sortie proprement */}
 

    <motion.div
      className="flex space-x-16 md:space-x-24 whitespace-nowrap will-change-transform"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      }}
      style={{ transformStyle: "preserve-3d" }} // Évite le flou sur certains navigateurs
    >
      {[...sponsors, ...sponsors].map((sponsor, index) => (
        <div
          key={index}
          className="flex items-center justify-center min-w-[120px] md:min-w-[180px] transition-all duration-700"
        >
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            // backface-visibility et transform-gpu empêchent le flou durant le mouvement
            className="h-8 md:h-20 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-500 transform-gpu"
            style={{ 
               WebkitBackfaceVisibility: "hidden",
               backfaceVisibility: "hidden"
            }}
          />
        </div>
      ))}
    </motion.div>
  </div>
</section>
  );
};

const Index = () => {
  return (
    <main className="bg-[#111]">
      {/* Hero — Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-5xl md:text-7xl lg:text-[90px] text-primary leading-[1.1] mb-8"
          >
            Crafting Exceptional Experiences
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link
              to="/about"
              className="inline-block border border-primary/40 text-primary px-10 py-4 font-body text-[13px] tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              Discover Our Story
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-12 bg-primary/40"
          />
        </motion.div>
      </section>

      {/* Intro Statement */}
      <section className="relative overflow-hidden bg-[#111]">
        <div className="relative min-h-[880px] flex flex-col items-center justify-center py-24 px-6">
          {/* LEFT image — sculpture */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="absolute hidden lg:block overflow-hidden"
            style={{
              width: "clamp(200px, 22vw, 320px)",
              aspectRatio: "3/4",
              bottom: "0",
              left: "10%",
            }}
          >
            <img
              src={sculptureImg}
              alt="Sculpture art"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* RIGHT image — cocktails */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute hidden lg:block overflow-hidden"
            style={{
              width: "clamp(200px, 22vw, 320px)",
              aspectRatio: "4/3",
              top: "20%",
              right: "10%",
            }}
          >
            <img
              src={menuImg}
              alt="Cocktails and dining"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-body text-[11px] md:text-[13px] tracking-[0.22em] uppercase text-center mb-10 z-10"
            style={{ color: "rgba(240,230,210,0.7)" }}
          >
            DESIGNED EXPERIENCES WHERE YOU
            <br />
            CAN CONNECT WITH YOUR INNER-SELF
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-center z-10 leading-[1.05] mb-12"
            style={{
              color: "#e8dcc8",
              fontSize: "clamp(60px, 9vw, 90px)",
              fontStyle: "italic",
            }}
          >
            Lights,
            <br />
            Camera,
            <br />
            Action!
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-10"
          >
            <Link
              to="/about"
              className="inline-block font-body text-[12px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white/10"
              style={{
                color: "#e8dcc8",
                border: "1px solid rgba(232,220,200,0.5)",
                borderRadius: "50px",
                padding: "14px 40px",
              }}
            >
              LEARN MORE
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BANDE SPONSORS - Positionnée stratégiquement avant l'équipe */}
     

      {/* Team Section */}
      <TeamSection />
 <SponsorBand />
      {/* Newsletter / CTA */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-[13px] tracking-[0.2em] uppercase text-primary/50 mb-6">
              Stay In Touch
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-10">
              Experience the extraordinary
            </h2>
            <Link
              to="/contact"
              className="inline-block border border-primary/40 text-primary px-10 py-4 font-body text-[13px] tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              See Events
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;