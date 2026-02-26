import { motion } from "framer-motion";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  fullHeight?: boolean;
}

const HeroSection = ({ image, title, subtitle, fullHeight = false }: HeroSectionProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* Arrière-plan */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
    style={{ backgroundImage: `url(${image})` }}
  />
  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 text-center px-6 max-w-5xl flex flex-col items-center">
    
    {/* 1. Sous-titre (Eyebrow text) */}
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-elegant text-xs md:text-sm text-yellow-500 tracking-[0.4em] uppercase mb-6"
      >
        {subtitle}
      </motion.p>
    )}

    {/* 2. Séparateur Doré (Ligne avec point central) */}
    <motion.div 
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className="flex items-center gap-4 mb-8 w-full max-w-[200px]"
    >
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary/50" />
      <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary/50" />
    </motion.div>

    {/* 3. Titre Principal (About Us) */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="font-display text-6xl md:text-8xl lg:text-[110px] text-white font-light leading-none"
    >
      {/* Logique pour mettre le dernier mot en italique doré comme sur l'image */}
      {title.split(' ').map((word, i, arr) => (
        <span key={i}>
          <span className={i === arr.length - 1 ? "italic text-primary font-normal ml-3" : ""}>
            {word}
          </span>
          {i !== arr.length - 1 && " "}
        </span>
      ))}
    </motion.h1>

  </div>
</section>
  );
};

export default HeroSection;
