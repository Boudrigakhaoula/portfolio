import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";
import { useState } from "react";
import bd from "@/data/bd.json";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

const certificates = (bd as unknown as { certificates: Certificate[] }).certificates;

export const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section id="certificates" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
        
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                 <span className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-accent to-purple-accent bg-clip-text text-transparent hover:opacity-90 transition-all">
                  Certificats </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
      </p>
       
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCertificates.map((cert, index) => (
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
                  className="w-full transform transition-all hover:bg-gradient-to-r hover:from-purple-600 hover:via-purple-500 hover:to-purple-400 hover:text-white hover:-translate-y-0.5 border-0 ring-1 ring-purple-300/20"
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    Voir le certificat
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {certificates.length > 3 && (
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
