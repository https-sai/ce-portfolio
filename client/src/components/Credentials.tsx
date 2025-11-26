import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, Shield, Users, TrendingUp } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "Professional Engineer (PE)",
    issuer: "State Board of Engineering",
    year: "2015",
    license: "PE-123456",
  },
  {
    icon: Award,
    title: "LEED Accredited Professional",
    issuer: "U.S. Green Building Council",
    year: "2017",
    license: "LEED AP BD+C",
  },
  {
    icon: Award,
    title: "Project Management Professional",
    issuer: "Project Management Institute",
    year: "2018",
    license: "PMP-789012",
  },
  {
    icon: Shield,
    title: "Structural Engineering Certification",
    issuer: "National Council of Structural Engineers",
    year: "2016",
    license: "SE-345678",
  },
];

const education = [
  {
    degree: "Master of Science in Civil Engineering",
    institution: "Massachusetts Institute of Technology",
    year: "2014",
    specialization: "Structural Engineering",
  },
  {
    degree: "Bachelor of Science in Civil Engineering",
    institution: "University of California, Berkeley",
    year: "2012",
    specialization: "Infrastructure Systems",
  },
];

const affiliations = [
  "American Society of Civil Engineers (ASCE)",
  "National Society of Professional Engineers (NSPE)",
  "Structural Engineering Institute (SEI)",
  "International Association for Bridge and Structural Engineering",
];

const stats = [
  { value: "12+", label: "Years Experience", icon: TrendingUp },
  { value: "85+", label: "Projects Completed", icon: Award },
  { value: "45+", label: "Enterprise Clients", icon: Users },
  { value: "$2.5B+", label: "Total Project Value", icon: TrendingUp },
];

export default function Credentials() {
  return (
    <section id="credentials" className="py-20 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-credentials-title">
            Credentials & Qualifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-credentials-subtitle">
            Professional certifications, education, and industry recognition
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center" data-testid={`card-stat-${index}`}>
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1" data-testid={`text-stat-value-${index}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2" data-testid="text-certifications-heading">
              <Shield className="h-6 w-6 text-primary" />
              Certifications & Licenses
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-certification-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-md bg-primary/10">
                        <cert.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1" data-testid={`text-cert-title-${index}`}>
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2" data-testid={`text-cert-issuer-${index}`}>
                          {cert.issuer}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-xs" data-testid={`badge-cert-year-${index}`}>
                            {cert.year}
                          </Badge>
                          <Badge variant="outline" className="text-xs" data-testid={`badge-cert-license-${index}`}>
                            {cert.license}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2" data-testid="text-education-heading">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-4 mb-8">
              {education.map((edu, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-education-${index}`}>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2" data-testid={`text-edu-degree-${index}`}>
                      {edu.degree}
                    </h4>
                    <p className="text-muted-foreground mb-2" data-testid={`text-edu-institution-${index}`}>
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs" data-testid={`badge-edu-year-${index}`}>
                        {edu.year}
                      </Badge>
                      <Badge variant="outline" className="text-xs" data-testid={`badge-edu-specialization-${index}`}>
                        {edu.specialization}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2" data-testid="text-affiliations-heading">
              <Users className="h-6 w-6 text-primary" />
              Professional Affiliations
            </h3>
            <Card data-testid="card-affiliations">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {affiliations.map((affiliation, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`text-affiliation-${index}`}>
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">{affiliation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
