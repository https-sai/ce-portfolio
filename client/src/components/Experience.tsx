import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const timeline = [
  {
    year: "2023",
    role: "Lead Structural Engineer",
    client: "Metropolitan Development Corp",
    project: "Downtown Tower Complex",
    achievement: "Successfully designed 45-story mixed-use development with innovative seismic design",
    type: "High-Rise",
  },
  {
    year: "2022",
    role: "Principal Civil Engineer",
    client: "State Department of Transportation",
    project: "Interstate 95 Interchange Reconstruction",
    achievement: "Completed $85M highway infrastructure project 3 months ahead of schedule",
    type: "Infrastructure",
  },
  {
    year: "2021",
    role: "Project Manager & Structural Lead",
    client: "City Parks & Recreation",
    project: "Riverwalk Pedestrian Bridge",
    achievement: "Designed award-winning pedestrian bridge with 95% public approval rating",
    type: "Bridge Design",
  },
  {
    year: "2020",
    role: "Senior Civil Engineer",
    client: "TechCorp Global",
    project: "Corporate Campus Headquarters",
    achievement: "Delivered LEED Gold certified office complex under budget",
    type: "Commercial",
  },
  {
    year: "2019",
    role: "Structural Engineering Consultant",
    client: "Regional Water Authority",
    project: "Water Treatment Facility Upgrade",
    achievement: "Modernized treatment plant serving 500,000 residents with zero downtime",
    type: "Infrastructure",
  },
  {
    year: "2017-2018",
    role: "Civil Engineer",
    client: "Urban Development Partners",
    project: "Multi-Family Residential Complex",
    achievement: "Engineered 8-building residential development with sustainable design",
    type: "Residential",
  },
  {
    year: "2015-2016",
    role: "Junior Structural Engineer",
    client: "National Engineering Consultants",
    project: "Transportation Infrastructure Projects",
    achievement: "Contributed to multiple DOT projects across three states",
    type: "Infrastructure",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-experience-title">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-experience-subtitle">
            A timeline of major projects and career milestones
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                data-testid={`timeline-item-${index}`}
              >
                <div className="md:w-1/2 md:pr-12 flex justify-end">
                  <div
                    className={`flex-1 pl-12 md:pl-0 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-primary" data-testid={`text-year-${index}`}>
                        {item.year}
                      </span>
                      <Badge variant="secondary" className="text-xs" data-testid={`badge-type-${index}`}>
                        {item.type}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-1" data-testid={`text-role-${index}`}>
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <Building2 className="h-4 w-4" />
                      <span className="text-sm" data-testid={`text-client-${index}`}>
                        {item.client}
                      </span>
                    </div>
                    <p className="font-medium mb-2" data-testid={`text-project-${index}`}>
                      {item.project}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-achievement-${index}`}>
                      {item.achievement}
                    </p>
                  </div>
                </div>

                <div className="absolute left-2 md:left-1/2 top-2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <div className="md:w-1/2 md:pl-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
