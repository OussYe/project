import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et présentation */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo_vtc_val.png" 
                alt="VTC Valenciennes" 
                className="h-28 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">VTC-Valenciennes</h3>
                <p className="text-sm text-gray-400">Transport premium</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Votre service de transport de personnes de confiance à Valenciennes et dans toute la région.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Transport aéroport</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Déplacements privés</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Services entreprises</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Shopping & Tourisme</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#fleet" className="hover:text-amber-500 transition-colors">Notre flotte</a></li>
              <li><a href="#booking" className="hover:text-amber-500 transition-colors">Réservation</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">À propos</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+33 6 81 83 35 29</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>contact@vtc-valenciennes.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Av d'Amsterdam, 59300 Valenciennes</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 VTC-Valenciennes. Tous droits réservés.</p>
          <p className="text-sm mt-2">Transport de personnes - Licence VTC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;