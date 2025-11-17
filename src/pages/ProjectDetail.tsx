import React from "react";
import { useParams, Link } from "react-router-dom";
import bd from "../../public/data/bd.json";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  role?: string;
  period?: string;
  description?: string;
  tasks?: string[];
  stack?: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = (bd as unknown as { projects: Project[] }).projects || [];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const idx = Number(id);
  const project = projects[idx];

  if (!project) {
    return (
      <div className="container mx-auto py-20 px-6">
        <h2 className="text-2xl font-heading font-bold mb-4">Projet introuvable</h2>
        <p className="text-muted-foreground">Le projet que vous recherchez n'existe pas.</p>
        <Link to="/" className="inline-block mt-6">
          <Button>Retour à l'accueil</Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="container mx-auto py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-6">
          <h1 className="text-4xl font-heading font-bold mb-2 bg-gradient-to-r from-primary via-accent to-purple-accent bg-clip-text text-transparent">{project.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {project.role && <span className="font-medium">{project.role}</span>}
            {project.period && <span className="text-sm">{project.period}</span>}
          </div>
        </header>

        <Card className="shadow-medium">
          <CardContent>
            {project.description && <p className="mb-4 text-foreground/90">{project.description}</p>}

            {project.tasks && (
              <div className="mb-6">
                <h2 className="font-heading font-bold mb-3">Tâches</h2>
                <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
                  {project.tasks.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.stack && (
              <div className="mb-4">
                <h2 className="font-heading font-bold mb-3">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s, i) => (
                    <Badge key={i} variant="secondary" className="cursor-default">{s}</Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3 mt-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block">
                      <Button size="sm" variant="outline">
                        <Github className="mr-2 h-4 w-4" />
                        Voir le code
                      </Button>
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-block">
                      <Button size="sm" className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-white">
                    <ExternalLink className="mr-2 h-4 w-4" />
                        Démo
                  </Button>
                </a>
              )}
              <Link to="/" className="inline-block ml-auto">
                    <Button variant="outline">Retour</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default ProjectDetail;
