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
  const handleFormOpen = () => {
    // Replace with your actual Google Form URL
    window.open("https://forms.google.com/", "_blank");
  };

  const getTitle = () => {
    if (mode === "hire") return "I Want a Helper";
    if (mode === "work") return "I Want Work";
    return "Join Helper4U Waitlist";
  };

  const getDescription = () => {
    if (mode === "hire") {
      return "Tell us what kind of help you need. We'll notify you when we launch in Jaipur!";
    }
    if (mode === "work") {
      return "Create your helper profile and be ready to earn when we launch in Jaipur!";
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

          <Button
            onClick={handleFormOpen}
            className="w-full bg-primary hover:bg-primary-glow text-lg py-6"
            size="lg"
          >
            Open Signup Form
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By signing up, you'll be redirected to our Google Form to complete your registration.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
