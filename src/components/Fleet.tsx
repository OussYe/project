import React from 'react';
import { Users, Luggage, Wifi, UsbIcon } from 'lucide-react';

const Fleet: React.FC = () => {
  const vehicles = [
    {
      name: "Toyota RAV4",
      capacity: "5 passagers",
      comfort: "Standard",
      usage: "Trajets privés",
      features: ["USB", "Climatisation", "Bluetooth"],
      image: "/toyota.jpg"
    },
    {
      name: "Mercedes Vito",
      capacity: "7 passagers",
      comfort: "Premium",
      usage: "Familles, groupes",
      features: ["Espace bagages", "Sièges cuir", "Wi-Fi", "USB"],
      image: "/vito.png"
    }
  ];

  return (
    <section id="fleet" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Notre Flotte</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des véhicules modernes et parfaitement entretenus pour votre confort et votre sécurité.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gray-700 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-gray-400 text-sm">Capacité</p>
                    <p className="font-semibold">{vehicle.capacity}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Confort</p>
                    <p className="font-semibold">{vehicle.comfort}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-gray-400 text-sm">Usage recommandé</p>
                  <p className="font-semibold">{vehicle.usage}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature, idx) => (
                    <span key={idx} className="bg-amber-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tableau récapitulatif */}
        <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Comparatif des véhicules</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-3 px-4 font-semibold">Modèle</th>
                <th className="py-3 px-4 font-semibold">Capacité</th>
                <th className="py-3 px-4 font-semibold">Confort</th>
                <th className="py-3 px-4 font-semibold">Usage recommandé</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                  <td className="py-3 px-4 font-medium">{vehicle.name}</td>
                  <td className="py-3 px-4">{vehicle.capacity}</td>
                  <td className="py-3 px-4">{vehicle.comfort}</td>
                  <td className="py-3 px-4">{vehicle.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Fleet;