import { Card, CardContent } from "@/components/ui/card";
import { Compass, HardHat, FileCheck, Users } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Structural Design",
    description:
      "Advanced structural engineering for residential, commercial, and industrial projects with emphasis on safety, efficiency, and innovation.",
    features: [
      "Seismic design analysis",
      "Load calculations & optimization",
      "Foundation engineering",
      "Steel & concrete design",
    ],
  },
  {
    icon: Users,
    title: "Project Management",
    description:
      "End-to-end project management services ensuring on-time, on-budget delivery with comprehensive stakeholder coordination.",
    features: [
      "Schedule development & tracking",
      "Budget management",
      "Risk assessment & mitigation",
      "Quality control oversight",
    ],
  },
  {
    icon: HardHat,
    title: "Site Supervision",
    description:
      "Professional construction oversight ensuring adherence to design specifications, safety standards, and regulatory compliance.",
    features: [
      "Daily site inspections",
      "Construction documentation",
      "Safety compliance monitoring",
      "Change order management",
    ],
  },
  {
    icon: FileCheck,
    title: "Technical Consulting",
    description:
      "Expert consultation on complex engineering challenges, feasibility studies, and regulatory compliance for diverse projects.",
    features: [
      "Feasibility studies",
      "Code compliance review",
      "Value engineering",
      "Expert witness services",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-services-title">
            Services & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            Comprehensive civil engineering solutions tailored to your project needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
              <CardContent className="p-6">
                <div className="mb-4 p-3 rounded-md bg-primary/10 inline-block">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2" data-testid={`text-feature-${index}-${featureIndex}`}>
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
