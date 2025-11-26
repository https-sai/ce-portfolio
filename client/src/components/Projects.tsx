import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, DollarSign, Ruler } from "lucide-react";
import highRiseImage from "@assets/generated_images/high-rise_construction_project.png";
import highwayImage from "@assets/generated_images/highway_interchange_infrastructure.png";
import pedestrianBridgeImage from "@assets/generated_images/pedestrian_bridge_design.png";
import commercialBuildingImage from "@assets/generated_images/commercial_building_exterior.png";
import waterTreatmentImage from "@assets/generated_images/water_treatment_infrastructure.png";

const projects = [
  {
    id: 1,
    title: "Metropolitan Tower Complex",
    category: "High-Rise Development",
    description: "45-story mixed-use development featuring residential, commercial, and retail spaces with advanced structural systems.",
    image: highRiseImage,
    metrics: {
      budget: "$180M",
      duration: "36 months",
      scale: "450,000 sq ft",
    },
    tags: ["Structural Design", "High-Rise", "Urban Development"],
  },
  {
    id: 2,
    title: "Interstate Highway Interchange",
    category: "Infrastructure",
    description: "Multi-level highway interchange system designed to improve traffic flow and reduce congestion in metropolitan area.",
    image: highwayImage,
    metrics: {
      budget: "$85M",
      duration: "28 months",
      scale: "2.5 miles",
    },
    tags: ["Infrastructure", "Transportation", "Public Works"],
  },
  {
    id: 3,
    title: "Riverwalk Pedestrian Bridge",
    category: "Bridge Design",
    description: "Elegant curved pedestrian bridge connecting urban parks with sustainable design and aesthetic considerations.",
    image: pedestrianBridgeImage,
    metrics: {
      budget: "$12M",
      duration: "18 months",
      scale: "320 ft span",
    },
    tags: ["Bridge Design", "Pedestrian", "Sustainability"],
  },
  {
    id: 4,
    title: "Corporate Headquarters",
    category: "Commercial Building",
    description: "Modern 12-story office building with innovative structural systems and LEED Gold certification.",
    image: commercialBuildingImage,
    metrics: {
      budget: "$65M",
      duration: "24 months",
      scale: "180,000 sq ft",
    },
    tags: ["Commercial", "LEED Certified", "Modern Design"],
  },
  {
    id: 5,
    title: "Regional Water Treatment Facility",
    category: "Infrastructure",
    description: "State-of-the-art water treatment plant serving 500,000 residents with advanced filtration systems.",
    image: waterTreatmentImage,
    metrics: {
      budget: "$42M",
      duration: "20 months",
      scale: "50 MGD capacity",
    },
    tags: ["Water Systems", "Public Infrastructure", "Environmental"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-subtitle">
            A showcase of innovative civil engineering solutions delivered across various sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden group hover-elevate active-elevate-2 cursor-pointer flex flex-col"
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  data-testid={`img-project-${project.id}`}
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 backdrop-blur-sm" data-testid={`badge-category-${project.id}`}>
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Budget:</span>
                    <span className="font-medium" data-testid={`text-budget-${project.id}`}>{project.metrics.budget}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium" data-testid={`text-duration-${project.id}`}>{project.metrics.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Ruler className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Scale:</span>
                    <span className="font-medium" data-testid={`text-scale-${project.id}`}>{project.metrics.scale}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs" data-testid={`badge-tag-${project.id}-${index}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>

                <button className="text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all" data-testid={`button-view-details-${project.id}`}>
                  View Details
                  <ExternalLink className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
