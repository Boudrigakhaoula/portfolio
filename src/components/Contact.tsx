import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // EmailJS integration would go here
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai bientôt.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
             <span className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-accent to-purple-accent bg-clip-text text-transparent hover:opacity-90 transition-all">
              Contactez-moi</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Intéressé(e) par une collaboration ou une question ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <Card className="shadow-soft border-2">
              <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                  <Mail className="h-5 w-5 text-accent" />
                  Courriel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:Khaoula.Boudriga@esprim.tn" className="text-muted-foreground hover:text-accent transition-colors">
                  Khaoula.Boudriga@esprim.tn
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-2">
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
                  Voir mon profil LinkedIn
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-2">
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
                  Voir mes dépôts
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="lg:col-span-2 shadow-medium border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-heading">Envoyer un message</CardTitle>
              <CardDescription>Remplissez le formulaire ci-dessous et je vous répondrai dès que possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input
                    id="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Courriel</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre.email@exemple.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Votre message..."
                    className="min-h-[150px]"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
