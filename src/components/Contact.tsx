import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          <span className="bg-gradient-to-r from-primary via-accent to-purple-accent bg-clip-text text-transparent">
            Contactez-moi
          </span>
        </h2>
        <p className="text-lg text-muted-foreground mb-16">
          Besoin de me joindre ? Voici mes liens directs.
        </p>

        {/* CONTACT ITEMS */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Email */}
          <Card className="shadow-soft border-2 w-full md:w-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Mail className="h-5 w-5 text-accent" />
                Courriel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:Khaoula.Boudriga@esprim.tn"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Khaoula.Boudriga@esprim.tn
              </a>
            </CardContent>
          </Card>

          {/* LinkedIn */}
          <Card className="shadow-soft border-2 w-full md:w-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Linkedin className="h-5 w-5 text-accent" />
                LinkedIn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="https://www.linkedin.com/in/khaoula-boudriga-63717623b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Voir mon profil
              </a>
            </CardContent>
          </Card>

          {/* GitHub */}
          <Card className="shadow-soft border-2 w-full md:w-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Github className="h-5 w-5 text-accent" />
                GitHub
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="https://github.com/Boudrigakhaoula"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Voir mes projets
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
