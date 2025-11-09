import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, Brain, Cog, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["Angular", "React", "Flutter", "HTML/CSS", "TypeScript"],
    color: "text-accent"
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Spring Boot", "Node.js", "Express.js", "NestJS"],
    color: "text-purple-accent"
  },
  {
    title: "AI/ML",
    icon: Brain,
    skills: ["Python", "scikit-learn", "Ollama", "TensorFlow"],
    color: "text-accent"
  },
  {
    title: "DevOps",
    icon: Cog,
    skills: ["Jenkins", "Docker", "GitHub Actions", "Kubernetes"],
    color: "text-primary"
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
    color: "text-purple-accent"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise across the full development stack with focus on modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="shadow-soft hover:shadow-medium transition-all duration-300 border-2 hover:border-accent/30 bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-3 rounded-lg bg-secondary ${category.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl font-heading">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2 text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
