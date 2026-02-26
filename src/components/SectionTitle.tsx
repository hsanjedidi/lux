import { motion } from "framer-motion";

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
}

const SectionTitle = ({ label, title, description }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      {label && (
        <p className="font-body text-xs tracking-luxe uppercase text-muted-foreground mb-4">
          {label}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">{title}</h2>
      <div className="section-divider mx-auto mb-6" />
      {description && (
        <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
