import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      
      <footer className="bg-primary text-primary-foreground py-8 text-center">
        <p className="text-sm">
          © 2024 Portfolio. Built with React, TypeScript & Tailwind CSS
        </p>
      </footer>
    </main>
  );
};

export default Index;
