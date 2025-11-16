import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import bd from "@/data/bd.json";
import { useNavigate } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = (bd as unknown as { projects: Project[] }).projects;

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
        
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
             <span className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-accent to-purple-accent bg-clip-text text-transparent hover:opacity-90 transition-all">
             Projets académiques</span>
             
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(() => {
            const visible = showAll ? projects : projects.slice(0, 3);
            return visible.map((project, index) => (
            <Card 
              key={index} 
              role="button"
              onClick={() => navigate(`/project/${index}`)}
              className="cursor-pointer shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50 bg-card"
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
                  {project.github && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={(e) => e.stopPropagation()}
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                         Voir le code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-white shadow-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all border-0 ring-1 ring-purple-300/20"
                      onClick={(e) => e.stopPropagation()}
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                         Démo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
            ));
          })()}
        </div>
        {projects.length > 3 && (
          <div className="text-center mt-8">
            <Button onClick={() => setShowAll((s) => !s)} size="lg" variant="ghost" className="border-2 transform transition-all hover:bg-gradient-to-r hover:from-purple-600 hover:via-purple-500 hover:to-purple-400 hover:text-white hover:-translate-y-0.5 border-0 ring-1 ring-purple-300/20">
              {showAll ? "Voir moins" : "Voir plus"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
