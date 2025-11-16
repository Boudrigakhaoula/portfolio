import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
  <Experience />
      <Projects />
      <Skills />
      <Certificates />
      <Contact /> 
      
    </main>
  );
};

export default Index;
