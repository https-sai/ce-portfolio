import { Button } from "@/components/ui/button";
import { ChevronDown, Download, FolderOpen } from "lucide-react";
import DottedHoverGrid from "./DottedHoverGrid";
import HighlightText from "./HighlightText";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <DottedHoverGrid className="absolute inset-0 z-0" />
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center text-foreground">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          data-testid="text-hero-title"
        >
          <HighlightText
            text="Building the Future,"
            className="text-5xl md:text-6xl lg:text-7xl font-bold"
          />
          <br />
          <HighlightText
            text="One Structure at a Time"
            className="text-5xl md:text-6xl lg:text-7xl font-bold"
          />
        </h1>
        <p
          className="text-lg md:text-xl font-bold lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          data-testid="text-hero-subtitle"
        >
          Professional Civil Engineer specializing in structural design,
          infrastructure development, and large-scale construction project
          management
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            variant="secondary"
            onClick={() => scrollToSection("projects")}
            className="text-base px-8 py-6 h-auto"
            data-testid="button-view-projects"
          >
            <FolderOpen className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          <Button
            size="lg"
            className="text-base px-8 py-6 h-auto"
            data-testid="button-download-resume"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={() => scrollToSection("projects")}
          className="text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-scroll-indicator"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
