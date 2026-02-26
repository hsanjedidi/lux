import React, { useState } from "react";
import { motion } from "framer-motion";

// 👉 Remplace par tes vraies photos de l'équipe
import team1Img from "@/assets/team-mohamed-khalid.jpg";
import team2Img from "@/assets/team-elias.jpg";
import team3Img from "@/assets/team-saad.jpg";
import team4Img from "@/assets/team-andy.jpg";
import team5Img from "@/assets/team-mohamed-l.jpg";
import team6Img from "@/assets/team-andrei.jpg";
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
      "Under his leadership, Luxuria Hospitality Management achieved remarkable growth within its first year, establishing itself as a leading hospitality, entertainment, and lifestyle destination by creating Volto Restaurant located in Block 338, Adliya. Volto is concedered as the highest footfall restaurant & lounge in bahrain as its fully booked everyday. Volto won Fact Dining Awards 2025 for the people’s favorite experience in Bahrain.Beyond Volto, Mohamed is an experienced businessman with over 12 years in the entertainment industry as an event organizer. His background spans hotels, resorts, restaurants, lounges, concerts, and corporate events. Throughout his career, he has collaborated with many international brands and global artists, both in Bahrain and internationally. His strategic mindset, combined with a willingness to take well-calculated risks, continues to drive sustainable growth and long-term success. He has played a key role in shaping the restaurant’s business development strategy, introducing innovative concepts that enhanced operations, strengthened the brand identity, and significantly improved profitability. ",
      
  },
  {
    name: "Elias Fernandes",
    role: "General Manager",
    image: team2Img,
    description:
      "Originally from Goa, India—renowned for its vibrant tourism and hospitality culture—Elias brings over 24 years of extensive operational experience to the organization.A university graduate with a strong track record in business growth and operational efficiency, he has built expertise in operations management, supplier relations, team leadership, and financial oversight. Prior to joining Luxuria Hospitality Management, Elias served as General Manager of the well-known Alumni Club in Bahrain, where he successfully led large-scale operations and community-driven initiatives.At Volto, Elias oversees day-to-day administration, vendor management, HR operations, procurement, and overall financial management, ensuring operational excellence, cost control, and sustainable performance across the organization.",
  },
  {
    name: "Saad Al Romaihi",
    role: "Operation Manager",
    image: team3Img,
    description:
      "Operations are led by Saad Al Romaihi, a multi-talented Bahraini hospitality professional with over 15 years of industry experience. He has built a strong track record in operations management, venue leadership, and nightlife hospitality across several prominent first-class destinations in Bahrain, including , Apollo, Level 5, The One, Cielo and more.Over six years in high-profile restaurant and nightlife management, Saad refined his expertise in team leadership, guest experience, operational control, and event-driven environments. In 2020, he advanced to the role of General Manager at Retro Lounge, where he oversaw full operational management, staff allocation, customer relations, and marketing initiatives.In 2023, he joined Volto Restaurant, bringing extensive hands-on experience in day-to-day operations, supplier coordination, staff training, and performance management—ensuring smooth operations and consistent service excellence.",
  },
  {
    name: "Andy Zyla",
    role: "Group Executive Chef",
    image: team4Img,
    description:
      "an internationally experienced culinary executive with over 25 years of leadership across the United Kingdom, Maldives, United Arab Emirates, Saudi Arabia, and Bahrain. Originally trained in Mathematics and Physics in Poland, he combines analytical thinking with strong operational expertise, positioning him as a strategic leader within luxury hospitality and multi-unit environments.He began his career in London in 1999, rising quickly into senior kitchen roles at prestigious establishments including Chelsea Arts Club and William IV. In 2008, he joined Soneva Fushi in the Maldives, where he led the launch of the country’s first Japanese-Peruvian restaurant.Andy later held executive positions in Dubai, including Address Montgomerie, and oversaw multi-unit culinary operations across 12 outlets with Point-Select. He played a key role in the pre-opening of The Ritz-Carlton Al-Hamra Beach and later served as Group Executive Chef at Golf Saudi, leading culinary strategy across multiple venues.In 2022, he led the opening of Gallery 7/40 Beach Club on Palm Jumeirah. Today, as Group Executive Chef of Luxuria Hospitality Managemnet Group in Bahrain, he oversees all current and upcoming concepts, aligning culinary innovation with strategic growth, operational excellence, and financial performance.",
  },
  {
    name: "Mohamed Loumrhari",
    role: "Floor Manager",
    image: team5Img,
    description:
      "Brings over a decade of hospitality experience to his role as Floor Manager at Volto. With a background in fine dining, luxury hotels, and high-end restaurant openings across the GCC, he is recognized for delivering seamless operations and elevated guest experiences.He has successfully led diverse teams, strengthened service standards, and supported the launch and growth of upscale concepts. Known for his precision, professionalism, and attention to detail, Mohamed ensures that every guest interaction reflects Volto’s commitment to excellence. Fluent in Arabic, English, and French, he brings a strong multicultural perspective and a refined approach to hospitality.",
  },
  {
    name: "Andrei Bodrug",
    role: "Bar Manager",
    image: team6Img,
    description:
      "15 years of experience in the hospitality industry, building a strong reputation for precision, creativity, and excellence in mixology. He is known for reinterpreting classic techniques into refined, modern experiences, treating bartending as both a craft and a form of storytelling.His career spans the Middle East and Europe, where he has worked in high-profile venues and developed a diverse understanding of global flavor profiles. A recognized competitor in multiple bar competitions, Andrei combines technical expertise with innovation to create cocktails that embody elegance, originality, and lasting impression.",
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
