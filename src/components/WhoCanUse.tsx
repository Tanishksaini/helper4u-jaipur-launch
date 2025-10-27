import { motion } from "framer-motion";
import { Home, Store, Heart, Briefcase } from "lucide-react";

const categories = [
  {
    icon: Home,
    title: "Families",
    description: "Need a maid or cook hourly for home cleaning or meal prep.",
  },
  {
    icon: Store,
    title: "Shop Owners",
    description: "Need a salesman or Helper for 2 days during festive seasons.",
  },
  {
    icon: Heart,
    title: "Elderly Care",
    description: "Need a caretaker or driver for regular medical appointments.",
  },
  {
    icon: Briefcase,
    title: "Students",
    description: "Need part-time jobs as delivery boy or shop assistant.",
  },
];

export const WhoCanUse = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Who Can Use Helperr4U</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Perfect for everyone who needs help or wants to earn
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-hero mb-4 shadow-soft">
                <category.icon className="w-10 h-10 text-primary-foreground" strokeWidth={2} />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-muted-foreground">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
