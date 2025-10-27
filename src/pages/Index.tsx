import { useState } from "react";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { ValueProps } from "@/components/ValueProps";
import { HowItWorks } from "@/components/HowItWorks";
import { WhoCanUse } from "@/components/WhoCanUse";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Helmet } from "react-helmet";

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<"hire" | "work" | "general">("general");

  const handleHireClick = () => {
    setDialogMode("hire");
    setDialogOpen(true);
  };

  const handleWorkClick = () => {
    setDialogMode("work");
    setDialogOpen(true);
  };

  const handleGeneralWaitlist = () => {
    setDialogMode("general");
    setDialogOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Helper4U - India's Verified Helper Marketplace | Launching in Jaipur</title>
        <meta
          name="description"
          content="Hire maids, cooks, drivers & salesmen hourly or daily. India's first verified helper marketplace launching soon in Jaipur. Join the waitlist for lifetime free access!"
        />
        <meta name="keywords" content="helper marketplace, maid service, cook hire, driver booking, Jaipur helpers, verified helpers India" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Helper4U - Hire or Find Work Instantly, Safely, Locally" />
        <meta property="og:description" content="India's verified helper marketplace for homes & shops. Launching soon in Jaipur!" />
        <meta property="og:type" content="website" />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#00ADEF" />
      </Helmet>

      <div className="min-h-screen">
        <Hero onHireClick={handleHireClick} onWorkClick={handleWorkClick} />
        <SocialProof />
        <ValueProps />
        <HowItWorks />
        <WhoCanUse />
        <Waitlist onJoinClick={handleGeneralWaitlist} />
        <Footer />
        <StickyMobileCTA onClick={handleGeneralWaitlist} />
        
        <WaitlistDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          mode={dialogMode}
        />
      </div>
    </>
  );
};

export default Index;
