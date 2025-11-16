import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail } from "lucide-react";
import khaoulaImg from "@/assets/khaoula.jpg";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20 pt-32 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="max-w-6xl mx-auto text-center animate-fade-up">
        <div className="mb-8 inline-block">
          <div className="w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto rounded-full bg-gradient-accent shadow-medium flex items-center justify-center overflow-hidden">
            <img
              src={khaoulaImg}
              alt="Khaoula Boudriga"
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 30%' }}
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-accent to-purple-accent bg-clip-text text-transparent">
          Ingénieure en Génie Logiciel
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          Passionnée par
        </p>

        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
          Développement Web & Mobile • IA & ML • DevOps
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {/* Place `khaoula-boudriga-cv.pdf` in the `public/` folder at project root so it's available at `/khaoula-boudriga-cv.pdf` */}
          <a href="/KHAOULA-BOUDRIGA-CV.pdf" download aria-label="Télécharger le CV">
            <Button size="lg" className="gradient-primary shadow-medium  transition-all">
              <Download className="mr-2 h-5 w-5" />
              Télécharger  CV
            </Button>
          </a>

          <a href="#contact" aria-label="Aller à la section contact">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-white shadow-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all border-0 ring-1 ring-purple-300/20">
              <Mail className="mr-2 h-5 w-5" />
              Contactez-moi
            </Button>
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          <a 
            href="https://github.com/Boudrigakhaoula"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Github className="h-7 w-7" />
          </a>
          <a 
            href="https://www.linkedin.com/in/khaoula-boudriga-63717623b" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Linkedin className="h-7 w-7" />
          </a>
        </div>
      </div>
    </section>
  );
};
