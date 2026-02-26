import { Link } from "react-router-dom";
import logo from "@/assets/luxuria-logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-8 py-20">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo & Address */}
          <div className="md:col-span-1">
            <img src={logo} alt="Luxuria" className="h-8 invert mb-8" />
            <p className="font-body text-sm text-primary/60 leading-relaxed">
              Building 436-2, Road 3815, Block 338
            </p>
            <p className="font-body text-sm text-primary/60 mb-6">
              Manama, Kingdom of Bahrain
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[12px] tracking-[0.2em] uppercase text-primary hover:opacity-60 transition-opacity"
            >
              Get Directions
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[12px] tracking-[0.2em] uppercase text-primary/50 mb-6">
              Contact
            </h4>
            <ul className="space-y-3 font-body text-sm text-primary/70">
              <li>
                TEL: <a href="tel:+973XXXXX" className="hover:text-primary transition-colors">+973 XXXX XXXX</a>
              </li>
              <li>
                <a href="mailto:info@luxuriahm.com" className="hover:text-primary transition-colors">
                  info@luxuriahm.com
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-[12px] tracking-[0.2em] uppercase text-primary/50 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About", path: "/about" },
                { label: "Menu", path: "/menu" },
                { label: "Events", path: "/events" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="font-body text-sm text-primary/70 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-[12px] tracking-[0.2em] uppercase text-primary/50 mb-6">
              Follow Us
            </h4>
            <ul className="space-y-3">
              {["Instagram", "Facebook", "LinkedIn"].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="font-body text-sm text-primary/70 hover:text-primary transition-colors"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[11px] tracking-[0.15em] uppercase text-primary/40">
            © 2025 Luxuria Hospitality Management W.L.L — CR.142116-1
          </p>
          <div className="flex gap-6">
            <span className="font-body text-[11px] tracking-[0.15em] uppercase text-primary/40">
              Privacy Policy
            </span>
            <span className="font-body text-[11px] tracking-[0.15em] uppercase text-primary/40">
              Legal Notice
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
