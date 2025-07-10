import React from 'react';
import { Phone, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onWhatsAppClick: () => void;
  onPhoneClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onWhatsAppClick, onPhoneClick }) => {
  return (
    <header className="bg-gray-900 text-white border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo et nom */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo_vtc_val.png" 
              alt="VTC Valenciennes" 
              className="h-20 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-white">VTC-Valenciennes</h1>
              <p className="text-sm text-gray-400">Transport de personnes</p>
            </div>
          </div>

          {/* Réseaux sociaux et contact */}
          <div className="flex items-center space-x-4">
            {/* Réseaux sociaux */}
            <div className="hidden md:flex items-center space-x-3">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>

            {/* Téléphone */}
            <button
              onClick={onPhoneClick}
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">+33 6 81 83 35 29</span>
            </button>

            {/* WhatsApp */}
            <button
              onClick={onWhatsAppClick}
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-500 px-3 py-2 rounded-lg transition-colors"
            >
              <MessageCircle size={16} />
              <span className="text-sm font-medium hidden sm:block">WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;