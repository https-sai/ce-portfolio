import { Button } from "@/components/ui/button";
import { ChevronDown, Download, FolderOpen } from "lucide-react";
import heroImage from "@assets/generated_images/hero_bridge_at_sunset.png";

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
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="text-hero-title">
          Building the Future,
          <br />
          <span className="text-primary-foreground">One Structure at a Time</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
          Professional Civil Engineer specializing in structural design, infrastructure
          development, and large-scale construction project management
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="text-base px-8 py-6 h-auto"
            data-testid="button-view-projects"
          >
            <FolderOpen className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 py-6 h-auto bg-background/10 backdrop-blur-sm border-white/20 text-white hover:bg-background/20 hover:text-white"
            data-testid="button-download-resume"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("projects")}
            className="text-white/70 hover:text-white transition-colors"
            data-testid="button-scroll-indicator"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
