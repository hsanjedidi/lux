import { motion } from "framer-motion";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  fullHeight?: boolean;
}

const HeroSection = ({ image, title, subtitle, fullHeight = false }: HeroSectionProps) => {
  return (
    <section className={`relative ${fullHeight ? "h-screen" : "h-[80vh]"} flex items-center justify-center overflow-hidden`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-5xl md:text-7xl lg:text-[90px] text-primary leading-[1.1]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-elegant text-xl md:text-2xl text-primary/70 tracking-[0.2em] uppercase mt-6"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
