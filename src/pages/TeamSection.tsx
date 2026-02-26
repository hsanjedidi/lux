import React, { useState } from "react";
import { motion } from "framer-motion";

// 👉 Remplace par tes vraies photos de l'équipe
import team1Img from "@/assets/team-mohamed-khalid.jpg";
import team2Img from "@/assets/team-elias.jpg";
import team3Img from "@/assets/team-saad.jpg";
import team4Img from "@/assets/team-andy.jpg";
import team5Img from "@/assets/team-mohamed-l.jpg";
import team6Img from "@/assets/team-mohamed-l.jpg";
import TeamDialog from "@/components/teamDialog/TeamDialog";

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
};
const team: TeamMember[] = [
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

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  console.log("team member =", selectedMember);

  return (
    <>
      {/* Team Section — Editorial Luxury Redesign */}
      {/* 
  Required: 
  - @fontsource/playfair-display or Google Fonts: Playfair Display + DM Sans
  - framer-motion
  - tailwindcss
*/}

      <section className="relative py-32 px-6 bg-white overflow-hidden">
        <TeamDialog
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
        {/* Background texture / ambient element */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(180,160,130,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto max-w-7xl">
          {/* ── Header ── */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Eyebrow */}
              <p
                className="font-body text-[11px] tracking-[0.3em] uppercase text-[#9B8B76] mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Our Team
              </p>
              {/* Headline — serif display */}
              <h2
                className="text-5xl md:text-7xl font-light text-[#1A1714] leading-none"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                The people
                <br />
                <em className="italic text-[#7A6A55]">behind the work</em>
              </h2>
            </motion.div>

            {/* Decorative rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden md:block h-px flex-1 mx-12 bg-[#C8B89A] origin-left"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-xs text-[13px] leading-relaxed text-[#7A6A55]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              A collective of specialists united by a shared belief in
              thoughtful, purposeful craft.
            </motion.p>
          </div>

          {/* ── Grid ── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {team.map((member, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12 }}
                className="group relative"
              >
                {/* Index badge */}
                <span
                  className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-[#F5F2ED]/80 backdrop-blur-sm flex items-center justify-center text-[10px] tracking-widest text-[#9B8B76] font-medium select-none"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* ── Image wrapper ── */}
                <div
                  onClick={() => handleMemberClick(member)}
                  className="relative aspect-[3/4] overflow-hidden mb-6"
                >
                  {/* Grain overlay */}
                  <div
                    aria-hidden
                    className="absolute inset-0 z-10 opacity-30 mix-blend-overlay pointer-events-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                      backgroundSize: "200px 200px",
                    }}
                  />

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />

                  {/* Gradient overlay — reveals on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover CTA */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span
                      className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#F5F2ED]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      View Profile
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* ── Text ── */}
                <div className="pl-1">
                  {/* Thin separator line */}
                  <div className="h-px w-8 bg-[#C8B89A] mb-4 transition-all duration-500 group-hover:w-16" />

                  <h3
                    className="text-[22px] font-light text-[#1A1714] mb-1 leading-snug"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-[10px] tracking-[0.25em] uppercase text-[#9B8B76] mb-3"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-[13px] leading-relaxed text-[#5C5044] max-w-[280px]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {member.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
