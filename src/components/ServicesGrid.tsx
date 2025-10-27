import { motion } from "framer-motion";
import { Home, ChefHat, Car, ShoppingBag, Heart, Users, Baby, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "House Maid",
    description: "Cleaning, laundry, and household chores",
    popular: true,
  },
  {
    icon: ChefHat,
    title: "Cook",
    description: "Daily meals, party cooking, tiffin service",
    popular: true,
  },
  {
    icon: Car,
    title: "Driver",
    description: "Personal driver, trip-based or monthly",
    popular: true,
  },
  {
    icon: ShoppingBag,
    title: "Salesman",
    description: "Shop assistant, retail help",
    popular: false,
  },
  {
    icon: Baby,
    title: "Babysitter",
    description: "Childcare and baby monitoring",
    popular: false,
  },
  {
    icon: Heart,
    title: "Elder Care",
    description: "Senior citizen care and companionship",
    popular: false,
  },
  {
    icon: Stethoscope,
    title: "Patient Care",
    description: "Healthcare assistance at home",
    popular: false,
  },
  {
    icon: Users,
    title: "Office Support",
    description: "Office assistants and support staff",
    popular: false,
  },
];

export const ServicesGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services We Offer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find verified helpers for all your home and business needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="relative bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 group cursor-pointer"
            >
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-soft">
                  Popular
                </div>
              )}
              
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-light mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={2} />
              </div>
              
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            And many more services coming soon! 
            <span className="text-primary font-semibold ml-1">Join the waitlist to stay updated.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
