import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homemaker, Jaipur",
    image: "PS",
    rating: 5,
    text: "Can't wait for Helperr4U to launch! Finally, a trusted platform for finding Helpers. The verification process sounds perfect for safety-conscious families like ours.",
  },
  {
    name: "Rajesh Gupta",
    role: "Shop Owner, Jaipur",
    image: "RG",
    rating: 5,
    text: "As a shop owner, I need temporary help during festive seasons. Helper4U's hourly booking feature is exactly what I've been looking for!",
  },
  {
    name: "Meera Patel",
    role: "Working Professional",
    image: "MP",
    rating: 5,
    text: "Already on the waitlist! The idea of having verified, rated Helpers available at my fingertips will be a game-changer for working parents.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What People Are Saying</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Early supporters from Jaipur share their excitement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-lg shadow-soft">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
