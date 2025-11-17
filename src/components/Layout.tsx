
import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Github, Linkedin, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
export const Layout = () => {
   const navigate = useNavigate();
  const location = useLocation();
const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/"); // retourne à l'accueil
      setTimeout(() => {
        const element = document.querySelector(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      const element = document.querySelector(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />

      <footer className="bg-primary/5 border-t border-border py-12 px-4 mt-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* À propos */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Portfolio</h3>
              <p className="text-sm text-muted-foreground">
                Étudiante en ingénierie passionnée par le développement web, mobile et l'intelligence artificielle.
              </p>
            </div>

            {/* Liens rapides */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Liens rapides</h3>
              <div className="flex flex-col gap-2">
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("#projects"); }} className="text-sm text-muted-foreground hover:text-primary transition-colors">Projets</a>
                 <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection("#experience"); }} className="text-sm text-muted-foreground hover:text-primary transition-colors">Expérience</a>
                <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection("#skills"); }} className="text-sm text-muted-foreground hover:text-primary transition-colors">Compétences</a>
               <a href="#certificates" onClick={(e) => { e.preventDefault(); scrollToSection("#certificates"); }} className="text-sm text-muted-foreground hover:text-primary transition-colors">Certificats</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("#contact"); }} className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>

            </div>

            {/* Réseaux */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Réseaux</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Boudrigakhaoula"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/khaoula-boudriga-63717623b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:Khaoula.Boudriga@esprim.tn"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2025 Khaoula Boudriga. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
