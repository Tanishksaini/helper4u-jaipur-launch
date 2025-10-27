import { motion } from "framer-motion";
import { Shield, Clock, Users, Star, BadgeCheck, Headphones } from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "100% Verified Helpers",
    description: "Every Helper undergoes strict background verification, document checks, and skill assessment before joining our platform.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Your safety is our priority. All Helpers are ID-verified with police verification and reference checks.",
  },
  {
    icon: Clock,
    title: "Flexible Booking",
    description: "Book help for any duration - 2 hours, half day, full day, or weekly. Complete flexibility based on your needs.",
  },
  {
    icon: Star,
    title: "Rated Professionals",
    description: "Check ratings, reviews, and work history before booking. Only top-rated Helpers stay on our platform.",
  },
  {
    icon: Users,
    title: "Local & Reliable",
    description: "Connect with Helpers from your neighborhood. Fast response times and familiar faces you can trust.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated support team is always ready to help you with any queries or concerns.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Helperr4U</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building India's most trusted Helper marketplace with your safety and convenience as our top priority
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-light mb-6 group-hover:bg-primary group-hover:shadow-soft transition-all duration-300"
              >
                <reason.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={2} />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
