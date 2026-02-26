import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="pt-24">
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="font-body text-[13px] tracking-[0.2em] uppercase text-primary/50 mb-6">
              Get In Touch
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-primary">
              Contact Us
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-20">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="font-display text-2xl text-primary mb-8">
                Visit Us
              </h3>
              <ul className="space-y-6 font-body text-sm text-primary/70">
                <li className="flex items-start gap-4">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-primary/40"
                  />
                  <span>
                    Building 436-2, Road 3815, Block 338 – Manama, Bahrain
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone size={16} className="shrink-0 text-primary/40" />
                  <span>+973 XXXX XXXX</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail size={16} className="shrink-0 text-primary/40" />
                  <span>info@luxuriahm.com</span>
                </li>
                <li className="flex items-center gap-4">
                  <Clock size={16} className="shrink-0 text-primary/40" />
                  <span>Daily: 12:00 PM – 2:00 AM</span>
                </li>
              </ul>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {[
                { name: "name", label: "Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "phone", label: "Phone", type: "tel" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block font-body text-[12px] tracking-[0.2em] uppercase text-primary/50 mb-3">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.name]: e.target.value })
                    }
                    required={field.name !== "phone"}
                    className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-primary focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="block font-body text-[12px] tracking-[0.2em] uppercase text-primary/50 mb-3">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-primary focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="border border-primary/40 text-primary px-10 py-4 font-body text-[13px] tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
