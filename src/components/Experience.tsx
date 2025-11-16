import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import bd from "@/data/bd.json";

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

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-background/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
        
         <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
             <span className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-accent to-purple-accent bg-clip-text text-transparent hover:opacity-90 transition-all">
             Expérience professionnelle</span>
             
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
           </p>
        </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <Card
              key={idx}
              className="overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50 bg-card min-h-[18rem]"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="px-6 pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    {/* Titles for two specific experiences should be plain black with dark-mode fallback */}
                    {(["Web & AI Development Intern (Summer Internship)", "Software Engineering Intern (Final Project)"] as string[]).includes(exp.title as string) ? (
                      <h3 className="text-xl font-heading font-bold mb-1 text-black dark:text-white">{exp.title}</h3>
                    ) : (
                      <h3 className="text-xl font-heading font-bold mb-1 bg-gradient-to-r from-primary via-accent to-purple-accent bg-clip-text text-transparent">{exp.title}</h3>
                    )}
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" />{exp.company}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{exp.location}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.start}{exp.end && ` – ${exp.end}`}</span>
                  </div>
                </div>
              </div>

              <CardContent className="space-y-4 px-8 pb-8">
                {exp.summary && <p className="text-sm text-muted-foreground">{exp.summary}</p>}

                <div className="flex flex-wrap gap-2">
                  {exp.technologies?.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="transition-colors      cursor-default">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 hover:-translate-y-0.5 transition-all border-0 ring-1 ring-purple-300/20"
                      asChild
                    >
                      <Link to={`/experience/${idx}`}>
                        Voir les détails
                      </Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
