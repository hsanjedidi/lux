import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/IMG-20260225-WA0001.jpg";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Menu", path: "/menu" },
  { label: "Events", path: "/events" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Luxuria" className="h-8 invert" />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`font-body text-[13px] tracking-[0.2em] uppercase transition-opacity duration-300 hover:opacity-60 ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-primary"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background fixed inset-0 top-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-8 text-primary"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <ul className="flex flex-col items-center gap-8">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="font-display text-3xl text-primary hover:opacity-60 transition-opacity"
                >
                  Home
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-3xl text-primary hover:opacity-60 transition-opacity"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
