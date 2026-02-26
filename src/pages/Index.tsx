import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/heo1.jpeg";
import menuImg from "@/assets/menu-hero.jpg";
import eventsImg from "@/assets/events-hero.jpg";
import aboutImg from "@/assets/about-hero.jpg";
import sculptureImg from "@/assets/hero.jpg";

// 👉 Remplace par tes vraies photos de l'équipe
import team1Img from "@/assets/team-mohamed-khalid.jpg";
import team2Img from "@/assets/team-elias.jpg";
import team3Img from "@/assets/team-saad.jpg";
import team4Img from "@/assets/team-andy.jpg";
import team5Img from "@/assets/team-mohamed-l.jpg";
import team6Img from "@/assets/team-mohamed-l.jpg";
import TeamSection from "./TeamSection";

const concepts = [
  {
    title: "Fine Dining",
    desc: "Authentic culinary experiences that connect people and celebrate exceptional cuisine crafted by world-class chefs.",
    image: menuImg,
    link: "/menu",
  },
  {
    title: "Events & Entertainment",
    desc: "Over 25 years of experience in entertainment with collaborations with 15+ international brands creating unforgettable nights.",
    image: eventsImg,
    link: "/events",
  },
  {
    title: "Lifestyle Destinations",
    desc: "Creating premium hospitality destinations that set new benchmarks in quality, service, and experiential luxury.",
    image: aboutImg,
    link: "/about",
  },
];

const team = [
  {
    name: "Mohamed Khalid AlMuharraqi",
    role: "Co-Founder – Managing Director",
    image: team1Img,
    description:
      "With over 12 years in the entertainment industry, Mohamed led Luxuria Hospitality Management to become a leading destination in Bahrain, creating Volto — the highest footfall restaurant & lounge, winner of Fact Dining Awards 2025 for People's Favorite Experience.",
  },
  {
    name: "Elias Fernandes",
    role: "General Manager",
    image: team2Img,
    description:
      "Originally from Goa, India, Elias brings over 24 years of operational experience. Former General Manager of the Alumni Club in Bahrain, he oversees administration, HR, procurement, and financial management at Volto.",
  },
  {
    name: "Saad Al Romaihi",
    role: "Operation Manager",
    image: team3Img,
    description:
      "A Bahraini hospitality professional with over 15 years of experience across premier venues including Apollo, Level 5, and Cielo. Saad ensures smooth day-to-day operations, staff training, and consistent service excellence at Volto.",
  },
  {
    name: "Andy Zyla",
    role: "Group Executive Chef",
    image: team4Img,
    description:
      "With 25+ years across the UK, Maldives, UAE, Saudi Arabia, and Bahrain, Andy has helmed kitchens at Soneva Fushi, The Ritz-Carlton, and Golf Saudi. He leads all culinary strategy and innovation across Luxuria's concepts.",
  },
  {
    name: "Mohamed Loumrhari",
    role: "Floor Manager",
    image: team5Img,
    description:
      "With over a decade in fine dining and luxury hospitality across the GCC, Mohamed ensures seamless operations and elevated guest experiences. Fluent in Arabic, English, and French, he embodies Volto's standard of excellence.",
  },
  {
    name: "Andrei Bodrug",
    role: "Bar Manager",
    image: team6Img,
    description:
      "A master mixologist with 15 years spanning Europe and the Middle East, Andrei reinterprets classic techniques into refined modern experiences — treating every cocktail as a craft and a form of storytelling.",
  },
];

const Index = () => {
  return (
    <main>
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
      <section
        style={{ backgroundColor: "#111" }}
        className="relative overflow-hidden"
      >
        <div className="relative min-h-[880px] flex flex-col items-center justify-center py-24 px-6">
          {/* LEFT image — sculpture, lower-left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="absolute overflow-hidden"
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

          {/* RIGHT image — cocktails, upper-right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute overflow-hidden"
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

          {/* Subtitle — top center */}
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

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-center z-10 leading-[1.05] mb-12"
            style={{
              color: "#e8dcc8",
              fontSize: "clamp(60px, 9vw, 115px)",
              fontStyle: "italic",
            }}
          >
            Lights,
            <br />
            Camera,
            <br />
            Action!
          </motion.h2>

          {/* CTA button */}
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

      <TeamSection />

      {/* Newsletter / CTA */}
      <section className="py-32 px-6 border-t border-border">
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
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
