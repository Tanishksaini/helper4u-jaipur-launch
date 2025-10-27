import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface StickyMobileCTAProps {
  onClick: () => void;
}

export const StickyMobileCTA = ({ onClick }: StickyMobileCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-lg border-t border-border shadow-elevated p-4"
    >
      <Button
        size="lg"
        onClick={onClick}
        className="w-full bg-primary hover:bg-primary-glow text-lg font-semibold shadow-lg"
      >
        Join the Waitlist
      </Button>
    </motion.div>
  );
};
