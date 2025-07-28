import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Accueil", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "À Propos", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const services = [
    "Production Audiovisuelle",
    "Location Matériel",
    "Booking Artistes", 
    "Studio d'Enregistrement",
    "Ateliers Créatifs"
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/f8c4fa20-39ea-4d76-9202-c38df7605873.png" 
                alt="E-Local Production" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Votre partenaire créatif pour tous vos projets artistiques. 
              Studio professionnel, équipe passionnée, résultats exceptionnels.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent text-muted-foreground hover:text-accent-foreground transition-all duration-300 flex items-center justify-center group hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <div>123 Rue de la Musique</div>
                  <div>75000 Paris, France</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a 
                  href="tel:+33123456789"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                >
                  +33 1 23 45 67 89
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a 
                  href="mailto:contact@elocal-production.fr"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                >
                  contact@elocal-production.fr
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} E-Local Production. Tous droits réservés.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a 
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Mentions Légales
              </a>
              <a 
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Politique de Confidentialité
              </a>
              <a 
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;