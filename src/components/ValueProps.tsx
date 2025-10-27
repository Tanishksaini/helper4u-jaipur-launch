import { motion } from "framer-motion";
import { Shield, Clock, MapPin } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Verified Helpers",
    description: "Every helper is background-checked with verified documents and ratings.",
  },
  {
    icon: Clock,
    title: "Hourly & Daily Booking",
    description: "Flexible hiring – book help for 2 hours or 2 days, your choice.",
  },
  {
    icon: MapPin,
    title: "Local Connections",
    description: "Find helpers near you in Jaipur. Quick, convenient, community-based.",
  },
];

export const ValueProps = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-light mb-6"
              >
                <value.icon className="w-8 h-8 text-primary" strokeWidth={2} />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
