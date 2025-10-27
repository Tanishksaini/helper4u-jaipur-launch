import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Users, CheckCircle, Star } from "lucide-react";

const employerSteps = [
  {
    icon: Search,
    title: "Post What You Need",
    description: "Maid for 2 hrs, Driver for 1 day – tell us your requirement.",
  },
  {
    icon: Users,
    title: "Get Matched",
    description: "Receive profiles of verified nearby helpers instantly.",
  },
  {
    icon: CheckCircle,
    title: "Book Instantly",
    description: "Contact directly and confirm your booking in seconds.",
  },
  {
    icon: Star,
    title: "Rate & Rebook",
    description: "Leave reviews and easily rebook your trusted helpers.",
  },
];

const helperSteps = [
  {
    icon: Users,
    title: "Create Your Profile",
    description: "Add your skill – Cook, Driver, Salesman, or Maid.",
  },
  {
    icon: Search,
    title: "Get Job Alerts",
    description: "Receive notifications for jobs near your location.",
  },
  {
    icon: CheckCircle,
    title: "Accept & Start",
    description: "Accept the job and start earning safely.",
  },
  {
    icon: Star,
    title: "Build Your Rating",
    description: "Get reviews and earn more jobs with higher ratings.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple steps for both employers and helpers
          </p>
        </motion.div>

        <Tabs defaultValue="employer" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 h-14">
            <TabsTrigger value="employer" className="text-lg">
              For Employers
            </TabsTrigger>
            <TabsTrigger value="helper" className="text-lg">
              For Helpers
            </TabsTrigger>
          </TabsList>

          <TabsContent value="employer">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {employerSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 h-full">
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-light mb-4 mt-2">
                      <step.icon className="w-7 h-7 text-primary" strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="helper">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helperSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 h-full">
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-warm flex items-center justify-center text-secondary-foreground font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary-light mb-4 mt-2">
                      <step.icon className="w-7 h-7 text-secondary" strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
