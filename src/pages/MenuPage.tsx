import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import menuImg from "@/assets/menu-hero.jpg";

const menuCategories = [
  {
    name: "Starters",
    items: [
      { name: "Truffle Burrata", desc: "Fresh burrata, black truffle, heirloom tomatoes", price: "BD 8.5" },
      { name: "Tuna Tartare", desc: "Yellowfin tuna, avocado, sesame, ponzu", price: "BD 9.0" },
      { name: "Wagyu Carpaccio", desc: "Thinly sliced wagyu, rocket, parmesan, truffle oil", price: "BD 12.0" },
      { name: "Lobster Bisque", desc: "Creamy lobster soup, cognac cream, chives", price: "BD 7.5" },
    ],
  },
  {
    name: "Main Courses",
    items: [
      { name: "Grilled Seabass", desc: "Mediterranean seabass, lemon butter, capers, asparagus", price: "BD 18.0" },
      { name: "Wagyu Ribeye", desc: "Australian wagyu MB6, truffle jus, roasted vegetables", price: "BD 28.0" },
      { name: "Lobster Linguine", desc: "Fresh lobster, cherry tomatoes, basil, white wine", price: "BD 22.0" },
      { name: "Lamb Rack", desc: "New Zealand lamb, herb crust, rosemary jus", price: "BD 24.0" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Chocolate Fondant", desc: "Dark Valrhona chocolate, vanilla ice cream", price: "BD 7.0" },
      { name: "Crème Brûlée", desc: "Classic vanilla, caramelized sugar", price: "BD 6.0" },
      { name: "Tiramisu", desc: "Mascarpone, espresso, amaretto", price: "BD 6.5" },
    ],
  },
  {
    name: "Signature Cocktails",
    items: [
      { name: "Luxuria Martini", desc: "Premium vodka, lychee, elderflower", price: "BD 8.0" },
      { name: "Smoky Old Fashioned", desc: "Bourbon, smoked maple, bitters", price: "BD 9.0" },
      { name: "Bahrain Sunset", desc: "Rum, passion fruit, coconut, lime", price: "BD 8.5" },
    ],
  },
];

const MenuPage = () => {
  return (
    <main>
      <HeroSection image={menuImg} title="Our Menu" subtitle="Culinary Excellence" />

      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          {menuCategories.map((category, ci) => (
            <div key={ci} className="mb-24 last:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <p className="font-body text-[13px] tracking-[0.2em] uppercase text-primary/50 mb-4">
                  {String(ci + 1).padStart(2, "0")}
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-primary">{category.name}</h2>
              </motion.div>

              <div>
                {category.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="flex justify-between items-baseline py-6 border-b border-border group"
                  >
                    <div>
                      <h3 className="font-display text-lg text-primary group-hover:opacity-70 transition-opacity">{item.name}</h3>
                      <p className="font-body text-sm text-primary/50 mt-1">{item.desc}</p>
                    </div>
                    <span className="font-elegant text-lg text-primary/70 ml-6 whitespace-nowrap">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
