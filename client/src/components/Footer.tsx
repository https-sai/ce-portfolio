import { Linkedin, Mail } from "lucide-react";
import { SiResearchgate } from "react-icons/si";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-brand">
              CE Portfolio
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional civil engineering services for innovative infrastructure and structural
              solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-projects"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("credentials")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-credentials"
                >
                  Credentials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-experience"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li data-testid="text-service-structural">Structural Design</li>
              <li data-testid="text-service-management">Project Management</li>
              <li data-testid="text-service-supervision">Site Supervision</li>
              <li data-testid="text-service-consulting">Technical Consulting</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Professional</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li data-testid="text-membership-asce">ASCE Member</li>
              <li data-testid="text-membership-nspe">NSPE Member</li>
              <li data-testid="text-membership-sei">SEI Member</li>
              <li data-testid="text-license-pe">Licensed PE</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Professional Civil Engineer. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
              data-testid="link-footer-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://researchgate.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="ResearchGate"
              data-testid="link-footer-researchgate"
            >
              <SiResearchgate className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@civilengineer.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
              data-testid="link-footer-email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
