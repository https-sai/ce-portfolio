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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
        isScrolled
          ? "bg-gray-100/20 backdrop-blur-md border-b border-white/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold tracking-tight hover-elevate active-elevate-2 px-2 py-1 rounded-md hover:backdrop-blur-md hover:border-gray-200/80"
            data-testid="link-logo"
          >
            <span
              className={isScrolled ? "text-foreground" : "text-foreground"}
            >
              CE
            </span>
            <span
              className={`ml-1 ${isScrolled ? "text-primary" : "text-primary"}`}
            >
              Portfolio
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => scrollToSection("projects")}
              className={`px-3 py-1 rounded-md text-foreground transition-colors ${
                isScrolled
                  ? "bg-gray-100/30 backdrop-blur-md shadow-sm shadow-black/30 hover:bg-gray-200/70"
                  : "bg-transparent border border-transparent hover:text-foreground/90 hover:bg-gray-100/80 hover:border-gray-200/80 hover:backdrop-blur-md"
              }`}
              data-testid="link-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("credentials")}
              className={`px-3 py-1 rounded-md text-foreground transition-colors ${
                isScrolled
                  ? "bg-gray-100/30 backdrop-blur-md shadow-sm shadow-black/30 hover:bg-gray-200/70"
                  : "bg-transparent border border-transparent hover:text-foreground/90 hover:bg-gray-100/80 hover:border-gray-200/80 hover:backdrop-blur-md"
              }`}
              data-testid="link-credentials"
            >
              Credentials
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`px-3 py-1 rounded-md text-foreground transition-colors ${
                isScrolled
                  ? "bg-gray-100/30 backdrop-blur-md shadow-sm shadow-black/30 hover:bg-gray-200/70"
                  : "bg-transparent border border-transparent hover:text-foreground/90 hover:bg-gray-100/80 hover:border-gray-200/80 hover:backdrop-blur-md"
              }`}
              data-testid="link-experience"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`px-3 py-1 rounded-md text-foreground transition-colors ${
                isScrolled
                  ? "bg-gray-100/30 backdrop-blur-md shadow-sm shadow-black/30 hover:bg-gray-200/70"
                  : "bg-transparent border border-transparent hover:text-foreground/90 hover:bg-gray-100/80 hover:border-gray-200/80 hover:backdrop-blur-md"
              }`}
              data-testid="link-services"
            >
              Services
            </button>
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
            className={`md:hidden text-foreground hover:text-foreground/90 ${
              isScrolled
                ? ""
                : "bg-transparent! border-transparent! backdrop-blur-none!"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div
            className="md:hidden mt-4 pb-4 flex flex-col gap-2"
            data-testid="mobile-menu"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className={`justify-start px-3 py-2 rounded-md text-left text-foreground transition-colors ${
                isScrolled
                  ? "bg-gray-10/40 backdrop-blur-md shadow-sm hover:bg-gray-100/70"
                  : "bg-transparent border border-transparent hover:text-foreground/90 hover:bg-gray-100/80 hover:border-gray-200/80 hover:backdrop-blur-md"
              }`}
              data-testid="link-projects-mobile"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("credentials")}
              className={`justify-start px-3 py-2 rounded-md text-left text-foreground transition-colors ${
                isScrolled
                  ? "bg-gray-10/40 backdrop-blur-md shadow-sm hover:bg-gray-100/70"
                  : "bg-transparent border border-transparent hover:text-foreground/90 hover:bg-gray-100/80 hover:border-gray-200/80 hover:backdrop-blur-md"
              }`}
              data-testid="link-credentials-mobile"
            >
              Credentials
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`justify-start px-3 py-2 rounded-md text-left text-foreground transition-colors ${
                isScrolled
                  ? "bg-gray-10/40 backdrop-blur-md shadow-sm hover:bg-gray-100/70"
                  : "bg-transparent border border-transparent hover:text-foreground/90 hover:bg-gray-100/80 hover:border-gray-200/80 hover:backdrop-blur-md"
              }`}
              data-testid="link-experience-mobile"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`justify-start px-3 py-2 rounded-md text-left text-foreground transition-colors ${
                isScrolled
                  ? "bg-gray-10/40 backdrop-blur-md shadow-sm hover:bg-gray-100/70"
                  : "bg-transparent border border-transparent hover:text-foreground/90 hover:bg-gray-100/80 hover:border-gray-200/80 hover:backdrop-blur-md"
              }`}
              data-testid="link-services-mobile"
            >
              Services
            </button>
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
