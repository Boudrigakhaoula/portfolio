import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("Accueil");

  const navItems = [
    { name: "Accueil", href: "#hero" },
    { name: "Expérience", href: "#experience" },
    { name: "Projets", href: "#projects" },
    { name: "Compétences", href: "#skills" },
    { name: "Certificats", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => { scrollToSection("#hero"); setActiveItem("Home"); }}
            className="text-xl font-heading font-bold mb-0 bg-gradient-to-r from-primary via-accent to-purple-accent bg-clip-text text-transparent hover:opacity-90 transition-all"
          >
            Khaoula Boudriga
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => { scrollToSection(item.href); setActiveItem(item.name); }}
                className={`text-sm font-medium transition-colors ${activeItem === item.name ? 'bg-gradient-to-r from-primary via-accent to-purple-accent bg-clip-text text-transparent' : 'text-muted-foreground hover:text-primary'}`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => { scrollToSection(item.href); setActiveItem(item.name); }}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${activeItem === item.name ? 'bg-gradient-to-r from-primary via-accent to-purple-accent bg-clip-text text-transparent' : 'text-muted-foreground hover:text-primary hover:bg-muted/50'}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
