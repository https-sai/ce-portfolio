import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold tracking-tight hover-elevate active-elevate-2 px-2 py-1 rounded-md"
            data-testid="link-logo"
          >
            <span className={isScrolled ? "text-foreground" : "text-white"}>CE</span>
            <span className={`ml-1 ${isScrolled ? "text-primary" : "text-white/90"}`}>
              Portfolio
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("projects")}
              className={isScrolled ? "" : "text-white hover:text-white/90"}
              data-testid="link-projects"
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("credentials")}
              className={isScrolled ? "" : "text-white hover:text-white/90"}
              data-testid="link-credentials"
            >
              Credentials
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("experience")}
              className={isScrolled ? "" : "text-white hover:text-white/90"}
              data-testid="link-experience"
            >
              Experience
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("services")}
              className={isScrolled ? "" : "text-white hover:text-white/90"}
              data-testid="link-services"
            >
              Services
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="ml-2"
              data-testid="button-contact-nav"
            >
              Contact
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? "" : "text-white hover:text-white/90"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-2" data-testid="mobile-menu">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("projects")}
              className="justify-start"
              data-testid="link-projects-mobile"
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("credentials")}
              className="justify-start"
              data-testid="link-credentials-mobile"
            >
              Credentials
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("experience")}
              className="justify-start"
              data-testid="link-experience-mobile"
            >
              Experience
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("services")}
              className="justify-start"
              data-testid="link-services-mobile"
            >
              Services
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="justify-start"
              data-testid="button-contact-mobile"
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
