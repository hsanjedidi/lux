import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import eventsImg from "@/assets/events-hero.jpg";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

const upcomingEvents = [
  {
    title: "International DJ Night",
    date: "March 15, 2026",
    time: "9:00 PM - 3:00 AM",
    location: "Volto Restaurant & Lounge",
    desc: "An electrifying night featuring world-renowned DJs, premium cocktails, and an unforgettable atmosphere.",
  },
  {
    title: "Wine & Dine Experience",
    date: "March 22, 2026",
    time: "7:00 PM - 11:00 PM",
    location: "Volto Restaurant",
    desc: "A curated five-course dinner paired with exclusive wines from renowned vineyards around the world.",
  },
  {
    title: "Private Corporate Gala",
    date: "April 5, 2026",
    time: "7:30 PM - 12:00 AM",
    location: "Luxuria Private Venue",
    desc: "Bespoke corporate events designed to impress, with personalized menus and world-class entertainment.",
  },
  {
    title: "Chef's Table: An Intimate Experience",
    date: "April 12, 2026",
    time: "8:00 PM - 11:00 PM",
    location: "Volto Restaurant",
    desc: "An exclusive 8-seat experience with Group Executive Chef Andy Zyla, featuring a surprise multi-course tasting menu.",
  },
];

const Events = () => {
  return (
    <main>
      <HeroSection image={eventsImg} title="Events" subtitle="Unforgettable Nights" />

      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="font-body text-[13px] tracking-[0.2em] uppercase text-primary/50 mb-6">
              Upcoming
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-primary">
              What's Next
            </h2>
          </motion.div>

          <div className="space-y-0">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-t border-border py-12 group"
              >
                <h3 className="font-display text-2xl md:text-3xl text-primary mb-4 group-hover:opacity-70 transition-opacity">
                  {event.title}
                </h3>
                <p className="font-body text-sm text-primary/60 mb-6 max-w-2xl">{event.desc}</p>
                <div className="flex flex-wrap gap-8 text-[12px] tracking-[0.15em] uppercase text-primary/50 font-body">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} /> {event.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={14} /> {event.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} /> {event.location}
                  </span>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">
              Host Your Event With Us
            </h2>
            <p className="font-body text-primary/60 max-w-xl mx-auto mb-10">
              From corporate galas to private celebrations, we create bespoke experiences tailored to your vision.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-primary/40 text-primary px-10 py-4 font-body text-[13px] tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              Get In Touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Events;
