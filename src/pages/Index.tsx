import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/background.jpg";
import menuImg from "@/assets/cheese_board.jpeg";

import sculptureImg from "@/assets/tikki_blaze.jpeg";

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
                  backfaceVisibility: "hidden",
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
            Setting New Standards in Luxury Hospitality
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
              to="/events"
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
