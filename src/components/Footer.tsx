import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground/5 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-3 bg-gradient-hero bg-clip-text text-transparent">
              Helper4U
            </h3>
            <p className="text-muted-foreground mb-4">
              India's verified helper marketplace. Connecting families and workers instantly and safely.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Jaipur, Rajasthan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3">Launching Soon</h4>
            <p className="text-muted-foreground mb-2">December 2025</p>
            <p className="text-sm text-muted-foreground">
              Sign up now and be part of the first verified helper community in Jaipur.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-3">Stay Connected</h4>
            <div className="flex items-center gap-2 mb-3 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <a href="mailto:contact@helper4u.in" className="hover:text-primary transition-colors">
                contact@helper4u.in
              </a>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-light hover:bg-primary text-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-light hover:bg-primary text-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Helper4U. All Rights Reserved.</p>
          <p className="mt-2">www.helper4u.in</p>
        </div>
      </div>
    </footer>
  );
};
