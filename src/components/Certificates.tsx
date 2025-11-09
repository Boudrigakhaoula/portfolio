import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Coursera",
    date: "2024",
    link: "https://coursera.org"
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "2024",
    link: "https://coursera.org"
  },
  {
    title: "Docker & Kubernetes",
    issuer: "Udemy",
    date: "2023",
    link: "https://udemy.com"
  },
  {
    title: "AI for Everyone",
    issuer: "NVIDIA",
    date: "2023",
    link: "https://nvidia.com"
  },
  {
    title: "Professional Scrum Master",
    issuer: "Scrum.org",
    date: "2023",
    link: "https://scrum.org"
  },
  {
    title: "React Development",
    issuer: "Udemy",
    date: "2023",
    link: "https://udemy.com"
  }
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through recognized professional certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card 
              key={index}
              className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-heading mb-2">{cert.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {cert.issuer} • {cert.date}
                    </CardDescription>
                  </div>
                  <Award className="h-8 w-8 text-accent flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full hover:bg-accent hover:text-accent-foreground transition-colors"
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certificate
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
