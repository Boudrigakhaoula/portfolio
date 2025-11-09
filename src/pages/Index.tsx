import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      
      <footer className="bg-primary/5 border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Portfolio</h3>
              <p className="text-sm text-muted-foreground">
                Engineering student passionate about web development, mobile, and artificial intelligence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
              <div className="flex flex-col gap-2">
                <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
                <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">Skills</a>
                <a href="#certificates" className="text-sm text-muted-foreground hover:text-primary transition-colors">Certificates</a>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Social</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2024 Portfolio. Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
