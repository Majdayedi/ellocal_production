import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Video, 
  Music, 
  Users, 
  Mic, 
  Palette, 
  Calendar,
  Clock,
  Euro,
  Star,
  ArrowRight
} from "lucide-react";
import BookingModal from "./BookingModal";

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Production Audiovisuelle",
      description: "Création de contenus vidéo professionnels, clips musicaux, documentaires et films promotionnels avec équipe technique complète.",
      features: ["Tournage HD/4K", "Montage professionnel", "Color grading", "Post-production", "Équipe technique"],
      price: "À partir de 500€/jour",
      duration: "1 jour - 1 semaine",
      popular: true,
      badge: "Populaire"
    },
    {
      icon: Music,
      title: "Location Matériel Backline",
      description: "Location d'équipements backline complets et de matériel scénique pour vos événements, concerts et représentations.",
      features: ["Sonorisation complète", "Éclairage LED", "Instruments premium", "Matériel scénique", "Transport inclus"],
      price: "À partir de 150€/jour",
      duration: "1 jour - 1 mois",
      popular: false,
      badge: "Flexible"
    },
    {
      icon: Users,
      title: "Booking & Management d'Artistes",
      description: "Gestion complète d'artistes, booking pour événements, développement de carrière et accompagnement personnalisé.",
      features: ["Réseau d'artistes pro", "Gestion contrats", "Coordination événements", "Promotion digitale", "Développement carrière"],
      price: "Sur devis",
      duration: "Contrat mensuel/annuel",
      popular: false,
      badge: "Premium"
    },
    {
      icon: Mic,
      title: "Studio d'Enregistrement & Répétition",
      description: "Studio professionnel équipé pour enregistrement, mixage, mastering et répétitions avec ingénieur du son inclus.",
      features: ["Enregistrement multipiste", "Mixage professionnel", "Mastering", "Salle de répétition", "Ingénieur inclus"],
      price: "À partir de 80€/heure",
      duration: "2h minimum",
      popular: true,
      badge: "Studio Pro"
    },
    {
      icon: Palette,
      title: "Ateliers Créatifs & Formation",
      description: "Ateliers artistiques, formations techniques, coaching personnalisé et masterclass avec professionnels de l'industrie.",
      features: ["Formation audio/vidéo", "Ateliers créatifs", "Coaching artistique", "Masterclass pro", "Certification"],
      price: "À partir de 50€/session",
      duration: "2h - Formation complète",
      popular: false,
      badge: "Éducatif"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-40 h-40 bg-slate-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-60 h-60 bg-slate-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-slate-400" />
            <span className="text-sm text-slate-400">Services Professionnels</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Nos</span>
            <br className="md:hidden" />
            <span className="text-slate-400 ml-4">Services</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Solutions complètes pour la création, production et gestion de vos projets artistiques
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <Card 
                key={index} 
                className="group bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 hover:bg-slate-800/30 transition-all duration-300 overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-700/30 flex items-center justify-center group-hover:bg-slate-600/40 transition-colors">
                      <Icon className="h-6 w-6 text-slate-300" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="secondary" className="bg-slate-700/50 text-slate-300 border-slate-600/50">
                        {service.badge}
                      </Badge>
                      {service.popular && (
                        <div className="flex items-center gap-1 text-slate-400">
                          <Star className="h-3 w-3 fill-current" />
                          <span className="text-xs">Populaire</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-slate-300">
                        <ArrowRight className="h-3 w-3 mr-2 text-slate-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Pricing & Duration */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-slate-700/30">
                    <div className="flex items-center gap-2">
                      <Euro className="h-4 w-4 text-slate-400" />
                      <span className="text-sm font-medium text-slate-300">{service.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-400">{service.duration}</span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <BookingModal selectedService={service.title}>
                      <Button 
                        className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-900 font-medium transition-all duration-300"
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        Réserver
                      </Button>
                    </BookingModal>
                    
                    <Button 
                      variant="outline" 
                      className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-slate-100"
                    >
                      Détails
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Service Categories Overview */}
        <div className="text-center">
          <div className="inline-flex items-center gap-6 bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-300 mb-1">5</div>
              <div className="text-sm text-muted-foreground">Services</div>
            </div>
            <div className="w-px h-12 bg-slate-700/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-300 mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="w-px h-12 bg-slate-700/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-300 mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Sur mesure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;