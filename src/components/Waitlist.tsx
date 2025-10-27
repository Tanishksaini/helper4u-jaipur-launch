import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gift, Shield, Headphones, Users } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Verified Helper Badge",
    description: "Stand out with a verified profile badge",
  },
  {
    icon: Gift,
    title: "No Platform Fees",
    description: "Lifetime free access for first 100 signups",
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "Get dedicated help whenever you need it",
  },
  {
    icon: Users,
    title: "Early Access Community",
    description: "Join the founding members of Helper4U",
  },
];

interface WaitlistProps {
  onJoinClick: () => void;
}

export const Waitlist = ({ onJoinClick }: WaitlistProps) => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Join the Waitlist
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-6">
            Be the first to join Helperr4U. Get early access before we launch — and lifetime free benefits!
          </p>
          
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl font-bold text-2xl shadow-elevated mb-8"
          >
            🎁 First 100 Signups = Lifetime Free Pro Access
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20"
            >
              <benefit.icon className="w-10 h-10 text-primary-foreground mb-3" strokeWidth={2} />
              <h3 className="text-lg font-bold text-primary-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={onJoinClick}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xl px-12 py-8 shadow-elevated hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Join the Waitlist Now
          </Button>
          
          <p className="text-primary-foreground/80 mt-4 text-sm">
            No credit card required • Launching December 2025
          </p>
        </div>
      </div>
    </section>
  );
};
