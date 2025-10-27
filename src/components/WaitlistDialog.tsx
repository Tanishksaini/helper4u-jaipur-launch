import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "hire" | "work" | "general";
}

export const WaitlistDialog = ({ open, onOpenChange, mode }: WaitlistDialogProps) => {
  const handleFormOpen = (formType: 'hire' | 'work') => {
    const hireFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdUEkqPCNp_871f4kEomXd4ALmO0003T0I6XTDFnhoxa7ShAg/viewform?usp=publish-editor";
    const workFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfg2ryLqVJnzjgDxdZvyPSFt0K0vRVyqWysHLPLwoUvGxZtGg/viewform?usp=publish-editor";
    window.open(formType === 'hire' ? hireFormUrl : workFormUrl, "_blank");
  };

  const getTitle = () => {
    if (mode === "hire") return "I Want a Helper";
    if (mode === "work") return "I Want Work";
    return "Join Helperr4U Waitlist";
  };

  const getDescription = () => {
    if (mode === "hire") {
      return "Tell us what kind of help you need. We'll notify you when we launch in Jaipur!";
    }
    if (mode === "work") {
      return "Create your Helper profile and be ready to earn when we launch in Jaipur!";
    }
    return "Be among the first 100 to get lifetime free access!";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">{getTitle()}</DialogTitle>
          <DialogDescription className="text-base pt-2">
            {getDescription()}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="bg-primary-light rounded-xl p-4 border-2 border-primary/20">
            <p className="font-semibold text-primary mb-2">🎁 Early Bird Bonus</p>
            <p className="text-sm text-foreground/80">
              First 100 signups get <strong>lifetime free Pro access</strong> — no platform fees, forever!
            </p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={() => handleFormOpen('hire')}
              className="w-full bg-primary hover:bg-primary-glow text-lg py-6"
              size="lg"
            >
              I Need Helper
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>

            <Button
              onClick={() => handleFormOpen('work')}
              className="w-full bg-primary hover:bg-primary-glow text-lg py-6"
              size="lg"
            >
              I Want Work
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            By signing up, you'll be redirected to our Google Form to complete your registration.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
