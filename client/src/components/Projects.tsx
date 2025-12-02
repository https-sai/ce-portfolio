import { useEffect, useState } from "react";
import { motion } from "motion/react";
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
    description:
      "45-story mixed-use development featuring residential, commercial, and retail spaces with advanced structural systems.",
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
    description:
      "Multi-level highway interchange system designed to improve traffic flow and reduce congestion in metropolitan area.",
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
    description:
      "Elegant curved pedestrian bridge connecting urban parks with sustainable design and aesthetic considerations.",
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
    description:
      "Modern 12-story office building with innovative structural systems and LEED Gold certification.",
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
    description:
      "State-of-the-art water treatment plant serving 500,000 residents with advanced filtration systems.",
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
  const showcaseProjects = projects.slice(0, 4);
  const [activeProject, setActiveProject] = useState<
    (typeof showcaseProjects)[number] | null
  >(null);
  const [disabledLayoutId, setDisabledLayoutId] = useState<number | null>(null);

  const activeIndex = activeProject
    ? showcaseProjects.findIndex((proj) => proj.id === activeProject.id)
    : -1;

  const orderedProjects = (() => {
    if (activeIndex === -1 || activeIndex % 2 === 0) {
      return showcaseProjects;
    }
    const reordered = [...showcaseProjects];
    const [activeItem] = reordered.splice(activeIndex, 1);
    reordered.splice(activeIndex - 1, 0, activeItem);
    return reordered;
  })();

  useEffect(() => {
    if (!activeProject) return;
    const element = document.getElementById(`project-card-${activeProject.id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeProject]);

  return (
    <section id="projects" className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            data-testid="text-projects-title"
          >
            Featured Projects
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-projects-subtitle"
          >
            A showcase of innovative civil engineering solutions delivered
            across various sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {orderedProjects.map((project) => {
            const isActive = activeProject?.id === project.id;
            const gridSpanClasses = isActive
              ? "col-span-1 md:col-span-2"
              : "col-span-1";
            return (
              <motion.div
                key={project.id}
                layout
                layoutId={`project-wrapper-${project.id}`}
                transition={{ layout: { duration: 0.45, ease: "easeInOut" } }}
                className={`${gridSpanClasses} scroll-mt-32`}
                id={isActive ? `project-card-${project.id}` : undefined}
              >
                {isActive ? (
                  <Card
                    className="overflow-hidden shadow-2xl shadow-black/30 h-full rounded-none"
                    data-testid={`card-project-${project.id}`}
                  >
                    <div className="grid lg:grid-cols-2 gap-0">
                      <motion.div
                        layoutId={`project-media-${project.id}`}
                        className="relative aspect-4/3 lg:aspect-auto"
                      >
                        <motion.img
                          layoutId={`project-image-${project.id}`}
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge
                            className="bg-primary/90 backdrop-blur-sm"
                            data-testid={`badge-category-${project.id}`}
                          >
                            {project.category}
                          </Badge>
                        </div>
                      </motion.div>

                      <CardContent className="p-8 flex flex-col justify-center gap-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3
                              className="text-3xl font-bold mb-2"
                              data-testid={`text-project-title-${project.id}`}
                            >
                              {project.title}
                            </h3>
                            <p
                              className="text-muted-foreground leading-relaxed"
                              data-testid={`text-project-description-${project.id}`}
                            >
                              {project.description}
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              if (activeProject) {
                                setDisabledLayoutId(activeProject.id);
                              }
                              setActiveProject(null);
                            }}
                            className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Back to project previews"
                          >
                            Back
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="p-4 rounded-xl bg-muted/30 border border-white/40 flex flex-col gap-1">
                            <span className="text-xs uppercase tracking-wide text-muted-foreground">
                              Budget
                            </span>
                            <span
                              className="text-lg font-semibold"
                              data-testid={`text-budget-${project.id}`}
                            >
                              {project.metrics.budget}
                            </span>
                          </div>
                          <div className="p-4 rounded-xl bg-muted/30 border border-white/40 flex flex-col gap-1">
                            <span className="text-xs uppercase tracking-wide text-muted-foreground">
                              Duration
                            </span>
                            <span
                              className="text-lg font-semibold"
                              data-testid={`text-duration-${project.id}`}
                            >
                              {project.metrics.duration}
                            </span>
                          </div>
                          <div className="p-4 rounded-xl bg-muted/30 border border-white/40 flex flex-col gap-1">
                            <span className="text-xs uppercase tracking-wide text-muted-foreground">
                              Scale
                            </span>
                            <span
                              className="text-lg font-semibold"
                              data-testid={`text-scale-${project.id}`}
                            >
                              {project.metrics.scale}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {project.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                              data-testid={`badge-tag-${project.id}-${index}`}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <button
                          className="text-sm text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                          data-testid={`button-view-details-${project.id}`}
                        >
                          View Details
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </CardContent>
                    </div>
                  </Card>
                ) : (
                  <motion.button
                    layoutId={
                      disabledLayoutId === project.id
                        ? undefined
                        : `project-card-${project.id}`
                    }
                    onClick={() => {
                      setDisabledLayoutId(null);
                      setActiveProject(project);
                    }}
                    className="relative block w-full aspect-4/3 rounded-none overflow-hidden border border-white/30 backdrop-blur-sm transition-all duration-300 focus-visible:outline focus-visible:outline-primary hover:shadow-lg shadow-black/20"
                    aria-pressed={activeProject?.id === project.id}
                    data-testid={`button-project-image-${project.id}`}
                  >
                    <motion.div
                      layoutId={
                        disabledLayoutId === project.id
                          ? undefined
                          : `project-media-${project.id}`
                      }
                      className="relative w-full h-full"
                    >
                      <motion.img
                        layoutId={
                          disabledLayoutId === project.id
                            ? undefined
                            : `project-image-${project.id}`
                        }
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left">
                        <div>
                          <p className="text-white text-sm uppercase tracking-wide opacity-80">
                            {project.category}
                          </p>
                          <h3 className="text-white text-xl font-semibold">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  </motion.button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
