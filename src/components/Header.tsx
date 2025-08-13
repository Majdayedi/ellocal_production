import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Music, Headphones } from "lucide-react";
import BookingModal from "./BookingModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Accueil", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "À Propos", href: "#about" },
    { label: "farouk laroussi (le grand)", href: "#studio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-teal-400 to-cyan-400 p-2 rounded-lg">
              <Music className="h-6 w-6 text-slate-900" />
              <Headphones className="h-5 w-5 text-slate-900" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                E-Local Production
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Société de Production Artistique
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-teal-400 transition-all duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <BookingModal>
              <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Réserver une Session
              </Button>
            </BookingModal>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-slate-300" />
            ) : (
              <Menu className="h-6 w-6 text-slate-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-slate-700/50">
            <nav className="flex flex-col space-y-4 pt-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-300 hover:text-teal-400 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-slate-800/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <BookingModal>
                  <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold w-full py-3 rounded-lg shadow-lg transition-all duration-300">
                    Réserver une Session
                  </Button>
                </BookingModal>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;