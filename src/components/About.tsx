import React from 'react';
import { Award, Clock, Shield, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: "Qualité de service",
      description: "Un service premium avec des chauffeurs professionnels et expérimentés."
    },
    {
      icon: Clock,
      title: "Ponctualité",
      description: "Respect des horaires et suivi en temps réel de vos trajets."
    },
    {
      icon: Shield,
      title: "Sécurité",
      description: "Véhicules assurés, contrôlés et conduite défensive garantie."
    },
    {
      icon: Users,
      title: "Relation client",
      description: "Écoute, conseil et adaptation à vos besoins spécifiques."
    }
  ];

  return (
    <section id="about" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">À propos de Presta-Val-VTC</h2>
            <p className="text-xl text-gray-300">
              Votre partenaire de confiance pour tous vos déplacements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Notre Histoire</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Créée avec la passion du service et de l'excellence, Presta-Val-VTC s'est imposée 
                  comme une référence dans le transport de personnes dans la région valenciennoise.
                </p>
                <p>
                  Nous proposons des solutions de transport adaptées à tous vos besoins : 
                  trajets vers les aéroports, déplacements professionnels, sorties shopping, 
                  ou encore accompagnement touristique.
                </p>
                <p>
                  Notre service couvre toutes destinations, vous permettant de rejoindre 
                  facilement n'importe quelle destination selon vos besoins.
                </p>
              </div>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-6">Service disponible</h3>
              <div className="space-y-6">
                <div>
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-gray-900" size={32} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Toutes destinations</h4>
                  <p className="text-gray-300">Nous vous conduisons partout où vous souhaitez aller</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Service 7/7 24/24</h4>
                  <p className="text-gray-300">Disponible à tout moment pour vos déplacements</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 text-center hover:bg-gray-750 transition-colors">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-gray-900" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;