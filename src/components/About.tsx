import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Heart, Zap, Users, Building2, Trophy, CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence Technique",
      description: "Équipement professionnel de pointe et expertise technique reconnue pour des résultats d'exception."
    },
    {
      icon: Target,
      title: "Innovation Continue",
      description: "Veille technologique constante et adoption des dernières innovations pour rester à l'avant-garde."
    },
    {
      icon: Heart,
      title: "Passion Artistique",
      description: "L'amour de l'art et de la création guide chaque projet et inspire notre engagement quotidien."
    },
    {
      icon: Zap,
      title: "Réactivité & Flexibilité",
      description: "Équipe agile et réactive, capable de s'adapter rapidement aux besoins spécifiques de chaque projet."
    }
  ];

  const achievements = [
    {
      icon: Building2,
      title: "Studio Moderne",
      description: "Équipement professionnel dernière génération dans un environnement optimal."
    },
    {
      icon: Users,
      title: "Équipe Experte",
      description: "Professionnels passionnés avec une expertise reconnue dans l'industrie."
    },
    {
      icon: Trophy,
      title: "Projets Primés",
      description: "Plusieurs productions récompensées et reconnues par les professionnels."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-10 w-32 h-32 bg-slate-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-48 h-48 bg-slate-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Company Story */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-full px-4 py-2 mb-6">
                <Building2 className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-400">Notre Histoire</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-foreground">À Propos</span>
                <br />
                <span className="text-slate-400">d'E-Local</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p className="text-xl leading-relaxed">
                <span className="text-slate-300 font-semibold">E-Local Production</span> est une société de production artistique 
                innovante, spécialisée dans l'accompagnement complet des créateurs et artistes contemporains.
              </p>
              
              <p>
                Notre approche unique combine <span className="text-slate-300 font-medium">expertise technique de pointe</span> et 
                <span className="text-slate-300 font-medium"> sensibilité artistique</span> pour donner vie à vos projets les plus ambitieux. 
                De la conception initiale à la diffusion finale, nous vous accompagnons à chaque étape.
              </p>
              
              <p>
                Installés dans un <span className="text-slate-300 font-medium">studio moderne de 200m²</span>, nous offrons 
                un environnement créatif optimal avec des équipements professionnels dernière génération et une 
                équipe passionnée de 8 spécialistes.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-xl p-4 hover:bg-slate-800/30 transition-all duration-300">
                    <Icon className="h-6 w-6 text-slate-400 mb-2" />
                    <h4 className="font-semibold text-slate-300 text-sm mb-1">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold px-8 py-6 rounded-xl"
              >
                <Users className="mr-2 h-5 w-5" />
                Rencontrer l'Équipe
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-slate-100 px-8 py-6 rounded-xl"
              >
                Nos Références
              </Button>
            </div>
          </div>

          {/* Right Column - Values & Approach */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Nos Valeurs</h3>
              <div className="grid grid-cols-1 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  
                  return (
                    <Card 
                      key={index} 
                      className="group bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 hover:bg-slate-800/30 transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-slate-700/30 flex items-center justify-center group-hover:bg-slate-600/40 transition-colors flex-shrink-0">
                            <Icon className="h-5 w-5 text-slate-300" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
            
            {/* Our Commitment */}
            <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6">
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-slate-400" />
                Notre Engagement
              </h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                  <span>Accompagnement personnalisé de A à Z</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                  <span>Transparence totale sur les coûts et délais</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                  <span>Support technique 24/7 pendant la production</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                  <span>Garantie satisfaction ou remboursement</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 pt-16 border-t border-slate-700/30">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Chiffres Clés
            </h3>
            <p className="text-muted-foreground text-lg">
              Plus de 5 ans d'expérience au service de la création artistique
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-slate-300 mb-2 group-hover:text-slate-200 transition-colors">500+</div>
              <div className="text-muted-foreground">Projets Réalisés</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-slate-300 mb-2 group-hover:text-slate-200 transition-colors">200+</div>
              <div className="text-muted-foreground">Artistes Accompagnés</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-slate-300 mb-2 group-hover:text-slate-200 transition-colors">50+</div>
              <div className="text-muted-foreground">Événements Produits</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-slate-300 mb-2 group-hover:text-slate-200 transition-colors">98%</div>
              <div className="text-muted-foreground">Satisfaction Client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;