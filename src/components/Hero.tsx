import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="max-w-6xl mx-auto text-center animate-fade-up">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-accent shadow-medium flex items-center justify-center text-5xl font-bold text-white">
            SE
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-accent to-purple-accent bg-clip-text text-transparent">
          Software Engineer
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          Engineering Student passionate about
        </p>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
          Web & Mobile Development • AI & Machine Learning • DevOps
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button size="lg" className="gradient-primary shadow-medium hover:shadow-lg transition-all">
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
          
          <Button size="lg" variant="outline" className="border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all">
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Github className="h-7 w-7" />
          </a>
          <a 
            href="https://linkedin.com" 
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
