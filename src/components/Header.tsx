import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import helperrLogo from "@/assets/helperr4u-logo.png";

interface HeaderProps {
  onJoinClick: () => void;
}

export const Header = ({ onJoinClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-2 text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:+919549471019" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 9549471019</span>
              </a>
              <a href="mailto:contact@helper4u.in" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail className="w-4 h-4" />
                <span>contact@helper4u.in</span>
              </a>
            </div>
            <div className="text-xs font-medium">
              🎁 First 100 Signups Get Lifetime Free Access
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3"> {/* reduced vertical padding for better balance */}
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            {/* logo container - fixed height to keep vertical alignment with nav/buttons */}
            <div className="flex items-center h-12 md:h-16 lg:h-20">
              <img
                src={helperrLogo}
                alt="Helperr4U"
                className="h-12 md:h-16 lg:h-20 w-auto object-contain block"
              />
            </div>

            {/* badge — spaced and vertically centered */}
            <span className="hidden sm:inline-flex items-center text-xs bg-secondary/20 text-secondary px-3 py-1 rounded-full font-semibold ml-2">
              Launching Soon
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </a>
            <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="text-foreground/80 hover:text-primary transition-colors">
              Benefits
            </a>
            <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>

          <Button
            onClick={onJoinClick}
            className="bg-secondary hover:bg-secondary/90 px-4 py-2"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
};
