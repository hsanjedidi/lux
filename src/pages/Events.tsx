import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import eventsImg from "@/assets/events-hero.jpg";
import { Calendar, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";

const pastEvents = [
  {
    id: 1,
    title: "DYSTINCT",
    subtitle: "Multi Platinum",
    tag: "FOR THE FIRST TIME IN BAHRAIN",
    date: "THURSDAY 15.01.2026",
    time: "FROM 7PM TO 2:30AM",
    category: "SPECIAL",
    location: "Volto Restaurant & Lounge",
    image: "/dystinct.webp",
    description:
      "Experience an exclusive evening of music, luxury, and high energy as DYSTINCT takes the stage in one of Bahrain’s most premium nightlife destinations. Known for his global hits and unique international sound, this special event promises an extraordinary atmosphere, premium vibes, and a world-class entertainment experience.",
    accent: "#c9a84c",
    bg: "#1a1008",
  },
  {
    id: 2,
    title: "FANTOMEL KATE LINN & DONY",
    subtitle: "DAME UN GRRR –",
    tag: "FOR THE FIRST TIME IN BAHRAIN",
    date: "SATURDAY 07.02.2026",
    time: "FROM 3PM TO 9PM",
    category: "SPECIAL",
    location: "Volto Restaurant & Lounge",
    image: "/FinalFLyerbysaad.webp",
    description:
      "Volto lights up with an explosive night of sound and energy. Get ready for a high-voltage live experience with Fantomel, Kate Linn & Dony, bringing their signature global vibes to the dancefloor. Feel the crowd erupt as Fantomel & Kate Linn perform their massive hit “DAME UN GRRR”, the track that’s taken clubs worldwide by storm.",
    accent: "#e8e0d0",
    bg: "#141414",
  },
  {
    id: 3,
    title: "New Year Celebrations",
    subtitle: "20% DISCOUNT",
    tag: "FOR COUPLES ON FOOD & WINE",
    date: "SATURDAY 14TH FEB",
    time: "FROM 7PM TO 10PM",
    category: "SPECIAL",
    location: "Volto Restaurant",
    image: "/NewYear2026Flyer.webp",
    description:
      "🔥 This New Year’s Eve… Volto Bahrain goes BIG! 🔥 Live DJs, fire acts, aerial performers, sax & violin, and a rooftop energy like nowhere else. Step into 2025 with a party you’ll never forget! ✨🥂",
    accent: "#e03c3c",
    bg: "#120808",
  },
];

const PastEventCard = ({ event, index, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(event)}
      className="relative cursor-pointer group"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      <div
        className="relative overflow-hidden rounded-sm"
        style={{
          aspectRatio: "9/16",
          maxHeight: "520px",
          background: event.bg,
          border: `1px solid ${event.accent}22`,
          boxShadow: hovered
            ? `0 20px 50px ${event.accent}20`
            : "0 8px 32px rgba(0,0,0,0.5)",
          transition: "all 0.6s ease",
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={event.image}
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(10%) brightness(0.6)" }}
            animate={{ scale: hovered ? 1.05 : 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>

        <div className="absolute top-0 left-0 right-0 p-5 flex justify-between">
          <span
            className="text-[9px] tracking-[0.3em] uppercase font-sans font-medium px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10"
            style={{ color: event.accent }}
          >
            {event.category}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-[9px] tracking-[0.2em] uppercase mb-2 font-sans opacity-70">
            {event.tag}
          </p>
          <h3
            className="font-serif italic text-2xl mb-3 leading-tight"
            style={{ color: event.accent }}
          >
            {event.title}
          </h3>
          <p className="text-[10px] tracking-widest uppercase font-sans text-white/40">
            {event.date}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const PreviousEvents = ({ onSelectEvent }) => {
  const scrollRef = useRef(null);
  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 350, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <motion.h2 className="text-4xl md:text-6xl font-serif italic text-white">
            Upcoming Events
          </motion.h2>
          <div className="hidden md:flex gap-3">
            {[ChevronLeft, ChevronRight].map((Icon, i) => (
              <button
                key={i}
                onClick={() => scroll(i === 0 ? -1 : 1)}
                className="w-12 h-12 flex items-center justify-center border border-white/10 text-white/40 hover:text-white transition-all"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-10 no-scrollbar"
        >
          {pastEvents.map((event, index) => (
            <div key={event.id} className="flex-shrink-0 w-[280px]">
              <PastEventCard
                event={event}
                index={index}
                onClick={onSelectEvent}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedEvent ? "hidden" : "unset";
  }, [selectedEvent]);

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      <HeroSection
        image={eventsImg}
        title="Events"
        subtitle="The Art of Celebration"
      />
      <PreviousEvents onSelectEvent={setSelectedEvent} />

      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              className="relative w-full max-w-4xl flex flex-col md:flex-row overflow-hidden bg-[#0d0d0d] border border-white/10 shadow-2xl rounded-sm"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-30 text-white/40 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Image : Plus petite et cadrée */}
              <div className="w-full md:w-[45%] h-[30vh] md:h-auto overflow-hidden">
                <img
                  src={selectedEvent.image}
                  className="w-full h-full object-cover"
                  alt={selectedEvent.title}
                />
              </div>

              {/* Contenu : Plus compact */}
              <div className="w-full md:w-[55%] p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-white/[0.02] to-transparent">
                <p className="text-[9px] tracking-[0.3em] uppercase mb-3 font-sans text-amber-500/80">
                  {selectedEvent.tag}
                </p>

                <h2 className="text-3xl md:text-4xl font-serif italic mb-5 text-white leading-tight">
                  {selectedEvent.title}
                </h2>

                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 border-y border-white/5 py-4">
                  <div className="flex items-center gap-2 text-white/50 font-sans text-[11px] tracking-wide">
                    <Calendar size={14} className="text-amber-500/50" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/50 font-sans text-[11px] tracking-wide">
                    <MapPin size={14} className="text-amber-500/50" />
                    <span>{selectedEvent.location}</span>
                  </div>
                </div>

                <p className="text-white/60 font-sans leading-relaxed text-xs mb-8">
                  {selectedEvent.description}
                </p>

                <button
                  onClick={() => setSelectedEvent(null)}
                  className="w-fit py-3 px-8 border border-white/10 hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-[0.2em] text-[9px] font-sans"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Events;
