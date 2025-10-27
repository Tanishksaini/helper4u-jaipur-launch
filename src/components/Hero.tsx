import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";
import { MapPin } from "lucide-react";

interface HeroProps {
  onHireClick: () => void;
  onWorkClick: () => void;
}

export const Hero = ({ onHireClick, onWorkClick }: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-soft pt-8 pb-24 lg:pt-16 lg:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full mb-6 text-sm font-medium">
              <MapPin className="w-4 h-4" />
              Launching Soon in Jaipur
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hire or Find Work –{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Instantly, Safely, Locally
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl">
              India's first verified Helper marketplace for homes & shops.
            </p>
            
            <p className="text-lg text-foreground/80 mb-8">
              Hire maids, cooks, drivers & salesmen — hourly or daily.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => window.open(`https://docs.google.com/forms/d/e/1FAIpQLSdUEkqPCNp_871f4kEomXd4ALmO0003T0I6XTDFnhoxa7ShAg/viewform?usp=publish-editor`, "_blank")}
                className="bg-primary hover:bg-primary-glow text-lg px-8 py-6 shadow-elevated hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
               I Need Helper
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open(`https://docs.google.com/forms/d/e/1FAIpQLSfg2ryLqVJnzjgDxdZvyPSFt0K0vRVyqWysHLPLwoUvGxZtGg/viewform?usp=publish-editor`, "_blank")}
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-6 transition-all duration-300 hover:-translate-y-1"
              >
                I Want Work
              </Button>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.img
              src={heroIllustration}
              alt="Helper marketplace connecting families and workers in India"
              className="w-full h-auto rounded-3xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
