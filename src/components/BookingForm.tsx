import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    duration: "",
    message: ""
  });

  const services = [
    "Production Audiovisuelle",
    "Location Matériel Backline",
    "Booking Artistes",
    "Studio d'Enregistrement",
    "Salle de Répétition",
    "Ateliers Créatifs"
  ];

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", 
    "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
  ];

  const durations = [
    "1 heure", "2 heures", "3 heures", "4 heures", 
    "Demi-journée", "Journée complète", "Plusieurs jours"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.service || !formData.date) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Booking data:", formData);
    
    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons dans les plus brefs délais pour confirmer votre réservation.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      duration: "",
      message: ""
    });
  };

  return (
    <section id="booking" className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">RÉSERVER</span>{" "}
            <span className="text-accent">UNE SESSION</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contactez-nous pour réserver votre créneau et discuter de votre projet
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border bg-card shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <Calendar className="mr-3 h-6 w-6 text-accent" />
                Formulaire de Réservation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="flex items-center text-foreground">
                        <User className="mr-2 h-4 w-4" />
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-input border-border text-foreground"
                        placeholder="Votre nom et prénom"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="flex items-center text-foreground">
                        <Mail className="mr-2 h-4 w-4" />
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-input border-border text-foreground"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="flex items-center text-foreground">
                        <Phone className="mr-2 h-4 w-4" />
                        Téléphone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-input border-border text-foreground"
                        placeholder="Votre numéro de téléphone"
                      />
                    </div>
                  </div>

                  {/* Booking Details */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="service" className="text-foreground">
                        Service souhaité *
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger className="bg-input border-border text-foreground">
                          <SelectValue placeholder="Sélectionner un service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="date" className="text-foreground">
                        Date souhaitée *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        className="bg-input border-border text-foreground"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="time" className="flex items-center text-foreground">
                          <Clock className="mr-2 h-4 w-4" />
                          Heure
                        </Label>
                        <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                          <SelectTrigger className="bg-input border-border text-foreground">
                            <SelectValue placeholder="Heure" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="duration" className="text-foreground">
                          Durée
                        </Label>
                        <Select value={formData.duration} onValueChange={(value) => handleInputChange("duration", value)}>
                          <SelectTrigger className="bg-input border-border text-foreground">
                            <SelectValue placeholder="Durée" />
                          </SelectTrigger>
                          <SelectContent>
                            {durations.map((duration) => (
                              <SelectItem key={duration} value={duration}>
                                {duration}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="flex items-center text-foreground">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Détails du projet
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-input border-border text-foreground min-h-[120px]"
                    placeholder="Décrivez votre projet, vos besoins spécifiques, le nombre de personnes, etc."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <Button 
                    type="submit" 
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow-green px-12 py-4 text-lg"
                  >
                    Envoyer la Demande
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;