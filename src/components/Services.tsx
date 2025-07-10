import React from 'react';
import { Plane, Briefcase, ShoppingBag, MapPin } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Plane,
      title: "Transport aéroport",
      description: "Trajets vers les aéroports de Lille, Paris, Bruxelles",
      features: ["Suivi de vol", "Attente gratuite jusqu'à 15 min", "Prise en charge à domicile"],
      color: "bg-blue-600"
    },
    {
      icon: MapPin,
      title: "Déplacements privés",
      description: "Jusqu'à 2h autour de Valenciennes",
      features: ["Trajet personnalisé", "Confort garanti", "Tarification transparente"],
      color: "bg-green-600"
    },
    {
      icon: Briefcase,
      title: "Offres entreprises",
      description: "Solutions sur-mesure pour professionnels",
      features: ["Facturation simplifiée", "Réservation récurrente", "Service dédié"],
      color: "bg-purple-600"
    },
    {
      icon: ShoppingBag,
      title: "Shopping & Guide touristique",
      description: "Accompagnement personnalisé pour vos sorties",
      features: ["Attente pendant shopping", "Visite guidée", "Conseils locaux"],
      color: "bg-amber-600"
    }
  ];

  return (
    <section id="services" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des solutions de transport adaptées à tous vos besoins, avec un service premium 
            et une attention particulière à votre confort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors group">
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;