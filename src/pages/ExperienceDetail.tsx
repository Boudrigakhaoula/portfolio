import React from "react";
import { useParams, Link } from "react-router-dom";
import bd from "@/data/bd.json";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, CheckCircle } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location?: string;
  start?: string;
  end?: string;
  summary?: string;
  responsibilities?: string[];
  technologies?: string[];
}

const experiences: Experience[] = (bd as unknown as { experiences: Experience[] }).experiences || [];

const ExperienceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const idx = Number(id);
  const exp = experiences[idx];

  if (!exp) {
    return (
      <div className="container mx-auto py-20 px-6">
        <h2 className="text-2xl font-heading font-bold mb-4">Expérience introuvable</h2>
        <p className="text-muted-foreground">L'expérience que vous recherchez n'existe pas.</p>
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
          {/* Make specific experience titles plain black (with dark fallback) */}
          {(["Web & AI Development Intern (Summer Internship)", "Software Engineering Intern (Final Project)"] as string[]).includes(exp.title as string) ? (
            <h1 className="text-4xl font-heading font-bold mb-2 text-black dark:text-white">{exp.title}</h1>
          ) : (
            <h1 className="text-4xl font-heading font-bold mb-2 bg-gradient-to-r from-primary via-accent to-purple-accent bg-clip-text text-transparent">{exp.title}</h1>
          )}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />{exp.start}{exp.end && ` – ${exp.end}`}</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{exp.location}</span>
              <span className="flex items-center gap-2"><strong className="font-medium">{exp.company}</strong></span>
            </div>
            <div>
              <Link to="/" className="inline-block">
                <Button variant="outline">Retour</Button>
              </Link>
            </div>
          </div>
        </header>

        <Card className="shadow-medium">
          <CardContent>
            {exp.summary && <p className="mb-4 text-foreground/90">{exp.summary}</p>}

            {exp.responsibilities && (
              <div className="mb-6">
                <h2 className="font-heading font-bold mb-3">Responsabilités</h2>
                <ul className="space-y-2">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-accent mt-1" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {exp.technologies && (
              <div>
                <h2 className="font-heading font-bold mb-3">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((t, i) => (
                    <Badge key={i} variant="secondary" className="transition-colors cursor-default">{t}</Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default ExperienceDetail;
