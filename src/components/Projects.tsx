import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "EduBridge",
    description: "Educational platform connecting students and tutors with real-time collaboration features",
    stack: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "OverTimeOps",
    description: "DevOps automation tool for managing CI/CD pipelines and infrastructure monitoring",
    stack: ["Jenkins", "Docker", "Kubernetes", "Python"],
    github: "https://github.com",
  },
  {
    title: "EcoFinIA",
    description: "AI-powered financial advisor for sustainable investment recommendations",
    stack: ["Python", "scikit-learn", "React", "Express.js"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Hotel Nation",
    description: "Complete hotel management system with booking, inventory, and customer management",
    stack: ["Angular", "Spring Boot", "MySQL", "TypeScript"],
    github: "https://github.com",
  },
  {
    title: "BookShare",
    description: "Social platform for book lovers to share reviews, recommendations, and reading lists",
    stack: ["React", "NestJS", "PostgreSQL", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "PricePoint",
    description: "Price comparison and tracking tool with real-time notifications for deals",
    stack: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    github: "https://github.com",
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my academic and personal projects showcasing full-stack development skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-accent hover:bg-accent/90"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
