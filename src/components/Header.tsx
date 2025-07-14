import React from 'react';
import { Phone, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onWhatsAppClick: () => void;
  onPhoneClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onWhatsAppClick, onPhoneClick }) => {
  return (
    <header className="bg-gray-900 text-white border-b border-gray-800">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-2">
          {/* Logo et nom */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img 
              src="/logo_vtc_val.png" 
              alt="Presta-Val-VTC" 
              className="h-16 sm:h-20 md:h-28 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white">Presta-Val-VTC</h1>
              <p className="text-xs sm:text-sm text-gray-400">Transport de personnes</p>
            </div>
          </div>

          {/* Réseaux sociaux et contact */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Réseaux sociaux */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>

            {/* Téléphone */}
            <button
              onClick={onPhoneClick}
              className="flex items-center space-x-1 sm:space-x-2 bg-gray-800 hover:bg-gray-700 px-2 sm:px-3 py-2 rounded-lg transition-colors"
            >
              <Phone size={16} />
              <span className="text-xs sm:text-sm font-medium">06 81 83 35 29</span>
            </button>

            {/* WhatsApp */}
            <button
              onClick={onWhatsAppClick}
              className="flex items-center space-x-1 sm:space-x-2 bg-green-600 hover:bg-green-500 px-2 sm:px-3 py-2 rounded-lg transition-colors flex-shrink-0"
            >
              <MessageCircle size={16} />
              <span className="text-xs sm:text-sm font-medium hidden sm:block">WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;