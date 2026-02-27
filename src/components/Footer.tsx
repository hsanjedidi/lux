import { Link } from "react-router-dom";
import logo from "@/assets/log1.png";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Hospitality Management", path: "/hospitality-management" },
    { label: "Excellence Training", path: "/excellence-training" },
    { label: "Events", path: "/events" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-16 py-24">
        {/* Grid Container : Centré sur mobile (items-center), aligné à gauche sur desktop (md:items-start) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-center md:items-start text-center md:text-left">
          
          {/* Section 1: Brand & Identity */}
          <div className="md:col-span-4 space-y-8 flex flex-col items-center md:items-start">
            <Link to="/" className="inline-block group">
              <img 
                src={logo} 
                alt="Luxuria" 
                className="h-20 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" 
              />
            </Link>
            <div className="space-y-3">
              <p className="text-sm font-light text-neutral-400 leading-relaxed max-w-[280px]">
                Building 436-2, Road 3815, Block 338<br />
                Manama, Kingdom of Bahrain
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[10px] tracking-[0.3em] uppercase font-medium text-white/40 hover:text-white transition-colors duration-300 group"
              >
                Get Directions
                <span className="ml-2 h-[1px] w-8 bg-white/20 group-hover:bg-white transition-all"></span>
              </a>
            </div>
          </div>

          {/* Section 2: Contact */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h4 className="text-[11px] tracking-[0.3em] uppercase font-bold text-white/30 mb-8 md:mb-10">
              Contact
            </h4>
            <div className="space-y-5">
              <div className="flex flex-col space-y-4 items-center md:items-start">
                {[ "+973 3458 8466", "+973 3422 1111" ].map((tel) => (
                  <div key={tel} className="group flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#D4AF37]/10 transition-colors">
                      <Phone size={14} className="text-[#D4AF37]" strokeWidth={2.5} />
                    </div>
                    <a href={`tel:${tel}`} className="text-neutral-300 hover:text-white transition-colors tracking-wide text-sm">
                      {tel}
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="group flex items-center space-x-3 pt-2 justify-center md:justify-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#D4AF37]/10 transition-colors duration-500">
                  <Mail size={12} className="text-[#D4AF37]" strokeWidth={2.5} />
                </div>
                <a href="mailto:info@luxuriahm.com" className="text-sm font-light text-neutral-400 group-hover:text-white transition-all italic underline-offset-4 hover:underline">
                  info@luxuriahm.com
                </a>
              </div>
            </div>
          </div>

          {/* Section 3: Navigation */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <h4 className="text-[11px] tracking-[0.3em] uppercase font-bold text-white/30 mb-8 md:mb-10">
              Navigation
            </h4>
            <ul className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-neutral-400 hover:text-white transition-all duration-300 relative group inline-block"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/40 transition-all duration-500 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Social */}
    <div className="md:col-span-3 flex flex-col items-center md:items-start">
  <h4 className="text-[11px] tracking-[0.3em] uppercase font-bold text-white/30 mb-8 md:mb-10">
    Social
  </h4>
  <div className="flex flex-col space-y-4">
    {[
      { 
        name: "Instagram", 
        url: "https://www.instagram.com/luxuriabahrain/" 
      },
      { 
        name: "LinkedIn", 
        url: "https://www.linkedin.com/company/volto-bahrain" 
      },
    ].map((social) => (
      <a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-neutral-400 hover:text-white transition-all duration-300 flex items-center group"
      >
        {/* Petit trait élégant qui apparaît au survol sur Desktop */}
        <span className="hidden md:block h-[1px] w-0 bg-[#D4AF37] mr-0 group-hover:w-4 group-hover:mr-3 transition-all duration-300"></span>
        
        {social.name}
      </a>
    ))}
  </div>
</div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-24 md:mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <div className="text-[10px] tracking-[0.2em] text-neutral-600 uppercase">
            © {currentYear} Luxuria Hospitality Management — CR.142116-1
          </div>
          <div className="flex space-x-8 md:space-x-10">
            {["Privacy", "Legal"].map((text) => (
              <a key={text} href="#" className="text-[10px] tracking-[0.2em] text-neutral-600 uppercase hover:text-white transition-colors">
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;