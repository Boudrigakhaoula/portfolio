import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Brain, Container, Database, Cpu } from "lucide-react";
import bd from "../../public/data/bd.json";

interface SkillCategoryRaw {
  title: string;
  icon?: string;
  skills: string[];
  color?: string;
}

const skillCategories: SkillCategoryRaw[] = (bd as unknown as { skillCategories: SkillCategoryRaw[] }).skillCategories;

const iconMap: Record<string, React.ComponentType<unknown>> = {
  Code2,
  Server,
  Brain,
  Container,
  Database,
  Cpu,
};

// Using simple CSS/Tailwind transitions instead of framer-motion to avoid
// adding a dependency and still provide smooth visuals.

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
             <span className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-accent to-purple-accent bg-clip-text text-transparent hover:opacity-90 transition-all"> Compétences</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-fade-up">
              <Card className="h-full glass hover:shadow-lg transition-all border-border/50 hover:border-accent/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                          {(() => {
                            const Icon = category.icon ? iconMap[category.icon] : Code2;
                            return <span className="text-foreground"><Icon className="h-6 w-6" /></span>;
                          })()}
                          <span className="font-heading text-black dark:text-white">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="transition-colors hover:bg-gradient-to-r     cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
