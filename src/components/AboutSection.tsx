import { motion } from "framer-motion";
import { Target, Users, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: Target,
    value: "Mission",
    label: "Connect Every Home & Helper",
  },
  {
    icon: Users,
    value: "300+",
    label: "Early Waitlist Signups",
  },
  {
    icon: Award,
    value: "100%",
    label: "Verified Profiles Only",
  },
  {
    icon: TrendingUp,
    value: "Growing",
    label: "Jaipur's Trusted Platform",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Helperr4U
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Helperr4U is India's upcoming <strong className="text-foreground">verified Helper marketplace</strong> that connects people who need daily help with those looking for work — instantly and safely.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Whether you need a <strong className="text-foreground">maid for 2 hours</strong>, a <strong className="text-foreground">driver for 1 trip</strong>, or a <strong className="text-foreground">salesman for your shop</strong> — Helper4U makes it simple, safe, and local.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We're starting our journey in <strong className="text-primary">Jaipur</strong> this December 2025, bringing a much-needed solution to families, shop owners, and Helpers across the city.
            </p>

            <div className="space-y-3">
              {[
                "✓ Verified Helpers with background checks",
                "✓ Flexible hourly & daily booking options",
                "✓ Local connections for faster service",
                "✓ Transparent ratings & reviews system",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-lg"
                >
                  <span className="text-primary font-semibold">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-light mb-4">
                  <stat.icon className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
                <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
