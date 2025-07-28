import { Button } from "@/components/ui/button";
import { Play, Calendar, Music, Video, Mic, Users, Camera, Palette } from "lucide-react";
import BookingModal from "./BookingModal";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-background">
      {/* Modern Background with geometric patterns */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-background to-slate-800/10"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-slate-700/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-slate-600/15 rounded-lg rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-slate-500/8 rounded-full blur-2xl animate-pulse delay-2000"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:20px_20px] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Logo and Main Content Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Logo */}
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/f8c4fa20-39ea-4d76-9202-c38df7605873.png" 
                  alt="E-Local Production" 
                  className="h-24 w-auto mb-6"
                />
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Société de</span>
                  <br />
                  <span className="text-slate-400">Production</span>
                  <br />
                  <span className="bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent">Artistique</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Votre partenaire créatif pour la production audiovisuelle, 
                  l'accompagnement d'artistes et la création de contenus innovants.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingModal>
                  <Button 
                    size="lg" 
                    className="bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold text-base px-8 py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Réserver une Session
                  </Button>
                </BookingModal>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-slate-100 text-base px-8 py-6 rounded-xl transition-all duration-300"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Découvrir nos Services
                </Button>
              </div>
            </div>

            {/* Right Column - Services Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Service Cards */}
              <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6 hover:bg-slate-800/30 transition-all duration-300 group">
                <Video className="h-8 w-8 text-slate-400 mb-4 group-hover:text-slate-300 transition-colors" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Production Audiovisuelle</h3>
                <p className="text-sm text-muted-foreground">Création de contenus vidéo professionnels</p>
              </div>
              
              <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6 hover:bg-slate-800/30 transition-all duration-300 group mt-8">
                <Music className="h-8 w-8 text-slate-400 mb-4 group-hover:text-slate-300 transition-colors" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Location Matériel</h3>
                <p className="text-sm text-muted-foreground">Backline et équipements de scène</p>
              </div>
              
              <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6 hover:bg-slate-800/30 transition-all duration-300 group">
                <Users className="h-8 w-8 text-slate-400 mb-4 group-hover:text-slate-300 transition-colors" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Booking Artistes</h3>
                <p className="text-sm text-muted-foreground">Gestion et promotion d'artistes</p>
              </div>
              
              <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6 hover:bg-slate-800/30 transition-all duration-300 group mt-8">
                <Mic className="h-8 w-8 text-slate-400 mb-4 group-hover:text-slate-300 transition-colors" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Studio</h3>
                <p className="text-sm text-muted-foreground">Enregistrement et répétition</p>
              </div>
              
              <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6 hover:bg-slate-800/30 transition-all duration-300 group col-span-2">
                <Palette className="h-8 w-8 text-slate-400 mb-4 group-hover:text-slate-300 transition-colors" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Ateliers Créatifs</h3>
                <p className="text-sm text-muted-foreground">Formation artistique et éducative</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-24 pt-16 border-t border-slate-700/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-slate-300 mb-2 group-hover:text-slate-200 transition-colors">500+</div>
                <div className="text-muted-foreground">Artistes Accompagnés</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-slate-300 mb-2 group-hover:text-slate-200 transition-colors">1000+</div>
                <div className="text-muted-foreground">Heures de Studio</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-slate-300 mb-2 group-hover:text-slate-200 transition-colors">50+</div>
                <div className="text-muted-foreground">Événements Organisés</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-slate-300 mb-2 group-hover:text-slate-200 transition-colors">24/7</div>
                <div className="text-muted-foreground">Support Technique</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;