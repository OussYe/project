import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'Réservation', href: '#booking' },
    { label: 'Services', href: '#services' },
    { label: 'Flotte', href: '#fleet' },
    { label: 'À propos', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Navigation desktop */}
          <div className="hidden md:flex space-x-8 mx-auto">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="hover:text-amber-500 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Menu mobile */}
          <div className="md:hidden mx-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-500 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left py-2 px-4 hover:bg-gray-700 hover:text-amber-500 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;