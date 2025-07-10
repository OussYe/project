import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contactez-nous pour toute question ou demande de devis personnalisé
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-750 transition-colors">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-gray-900" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Téléphone</h3>
            <p className="text-gray-300">+33 6 81 83 35 29</p>
            <p className="text-gray-400 text-sm mt-2">Disponible 24h/24</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-750 transition-colors">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-300">+33 6 81 83 35 29</p>
            <p className="text-gray-400 text-sm mt-2">Réponse rapide</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-750 transition-colors">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-300">contact@vtc-valenciennes.fr</p>
            <p className="text-gray-400 text-sm mt-2">Devis personnalisé</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-750 transition-colors">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Adresse</h3>
            <p className="text-gray-300">Av d'Amsterdam</p>
            <p className="text-gray-300">59300 Valenciennes</p>
          </div>
        </div>

        <div className="mt-16 bg-gray-800 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Horaires de disponibilité</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Clock className="mx-auto mb-4" size={32} />
              <h4 className="text-lg font-semibold mb-2">Service client</h4>
              <p className="text-gray-300">Lundi - Vendredi : 8h - 20h</p>
              <p className="text-gray-300">Weekend : 9h - 18h</p>
            </div>
            <div>
              <Phone className="mx-auto mb-4" size={32} />
              <h4 className="text-lg font-semibold mb-2">Réservations</h4>
              <p className="text-gray-300">Disponible 24h/24</p>
              <p className="text-gray-300">7 jours sur 7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;