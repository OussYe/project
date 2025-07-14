import React from 'react';
import { ArrowRight, MapPin, Clock, Shield } from 'lucide-react';

interface HeroProps {
  onBookingClick: () => void;
}

interface HeroProps {
  onBookingClick: () => void;
  onServicesClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookingClick, onServicesClick }) => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Votre service de transport
            <span className="text-amber-500"> premium</span> à Valenciennes
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Presta-Val-VTC est votre service de transport de personnes basé à Valenciennes, 
            spécialisé dans les trajets vers les aéroports, les déplacements professionnels, 
            le shopping et le tourisme.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={onServicesClick}
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
            >
              <span>Voir nos services</span>
              <ArrowRight size={20} />
            </button>
            <button
              onClick={onBookingClick}
              className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Réserver maintenant
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-gray-900" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Zone d'intervention</h3>
              <p className="text-gray-400">Jusqu'à 2h autour de Valenciennes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-gray-900" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ponctualité</h3>
              <p className="text-gray-400">Service disponible 24h/24</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-gray-900" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sécurité</h3>
              <p className="text-gray-400">Véhicules assurés et entretenus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;