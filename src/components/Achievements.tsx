import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import bd from "../../public/data/bd.json";

// Import all achievement images dynamically using Vite's import.meta.glob
const imageModules = import.meta.glob("@/assets/*.{jpg,jpeg,png,webp}", { eager: true, import: 'default' }) as Record<string, string>;

// Create a map of image names to their imported paths
const getImagePath = (imageName: string): string => {
  const key = Object.keys(imageModules).find(k => k.includes(imageName));
  return key ? imageModules[key] : '';
};

interface Achievement {
  title: string;
  event: string;
  date: string;
  rank: string;
  description: string;
  highlights: string[];
  note?: string;
  team?: string;
  gallery: string[];
}

const achievements = (bd as unknown as { achievements: Achievement[] }).achievements;

export const Achievements = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const newIndex = { ...prev };
        achievements.forEach((achievement, index) => {
          if (achievement.gallery && achievement.gallery.length > 1) {
            newIndex[index] = ((prev[index] || 0) + 1) % achievement.gallery.length;
          }
        });
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = (achievementIndex: number, galleryLength: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [achievementIndex]: ((prev[achievementIndex] || 0) + 1) % galleryLength,
    }));
  };

  const prevImage = (achievementIndex: number, galleryLength: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [achievementIndex]: ((prev[achievementIndex] || 0) - 1 + galleryLength) % galleryLength,
    }));
  };

  return (
    <section id="achievements" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-purple-accent bg-clip-text text-transparent hover:opacity-90 transition-all">
              Réalisations
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mes accomplissements et distinctions lors de compétitions et événements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50 bg-card overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gallery Carousel */}
              {achievement.gallery && achievement.gallery.length > 0 && (
                <div className="relative h-72 bg-muted overflow-hidden group flex items-center justify-center">
                  <img
                    src={getImagePath(achievement.gallery[currentImageIndex[index] || 0])}
                    alt={`${achievement.event} - Image ${(currentImageIndex[index] || 0) + 1}`}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Navigation arrows */}
                  {achievement.gallery.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => prevImage(index, achievement.gallery.length)}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => nextImage(index, achievement.gallery.length)}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </>
                  )}

                  {/* Image indicators */}
                  {achievement.gallery.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {achievement.gallery.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          className={`w-2 h-2 rounded-full transition-all ${
                            (currentImageIndex[index] || 0) === imgIndex
                              ? "bg-white w-4"
                              : "bg-white/50 hover:bg-white/75"
                          }`}
                          onClick={() =>
                            setCurrentImageIndex((prev) => ({ ...prev, [index]: imgIndex }))
                          }
                        />
                      ))}
                    </div>
                  )}

                  {/* Rank badge */}
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-primary to-accent px-3 py-1.5 rounded-full text-white font-semibold text-sm shadow-lg">
                    {achievement.rank}
                  </div>
                </div>
              )}

              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Trophy className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-heading mb-1">{achievement.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {achievement.event} • {achievement.date}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {achievement.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Team badge */}
                {achievement.team && (
                  <div className="flex items-center gap-2 pt-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Équipe: {achievement.team}</span>
                  </div>
                )}

                {/* Note */}
                {achievement.note && (
                  <div className="bg-accent/10 p-3 rounded-lg border border-accent/20">
                    <p className="text-sm text-accent font-medium">{achievement.note}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
