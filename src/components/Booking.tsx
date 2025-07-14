import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Phone, Mail } from 'lucide-react';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    departure: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1',
    service: 'private'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.phone.trim()) newErrors.phone = 'Le téléphone est requis';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    if (!formData.departure.trim()) newErrors.departure = 'L\'adresse de départ est requise';
    if (!formData.destination.trim()) newErrors.destination = 'La destination est requise';
    if (!formData.date) newErrors.date = 'La date est requise';
    if (!formData.time) newErrors.time = 'L\'heure est requise';
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Create WhatsApp message
    const message = `Nouvelle réservation Presta-Val-VTC:
Nom: ${formData.name}
Téléphone: ${formData.phone}
Email: ${formData.email}
Départ: ${formData.departure}
Destination: ${formData.destination}
Date: ${formData.date}
Heure: ${formData.time}
Passagers: ${formData.passengers}
Service: ${formData.service}`;
    
    const whatsappUrl = `https://wa.me/33681833529?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Réservation</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Réservez votre transport en quelques clics. Nous vous contacterons rapidement pour confirmer votre réservation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Informations personnelles */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  <Mail className="inline mr-2" size={16} />
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-600'
                  } focus:border-amber-500 focus:outline-none transition-colors`}
                  placeholder="Votre nom complet"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <Phone className="inline mr-2" size={16} />
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 rounded-lg border ${
                    errors.phone ? 'border-red-500' : 'border-gray-600'
                  } focus:border-amber-500 focus:outline-none transition-colors`}
                  placeholder="Votre numéro de téléphone"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  <Mail className="inline mr-2" size={16} />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-600'
                  } focus:border-amber-500 focus:outline-none transition-colors`}
                  placeholder="votre@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Trajet */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  <MapPin className="inline mr-2" size={16} />
                  Adresse de départ *
                </label>
                <input
                  type="text"
                  name="departure"
                  value={formData.departure}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 rounded-lg border ${
                    errors.departure ? 'border-red-500' : 'border-gray-600'
                  } focus:border-amber-500 focus:outline-none transition-colors`}
                  placeholder="Adresse de prise en charge"
                />
                {errors.departure && <p className="text-red-500 text-sm mt-1">{errors.departure}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <MapPin className="inline mr-2" size={16} />
                  Destination *
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 rounded-lg border ${
                    errors.destination ? 'border-red-500' : 'border-gray-600'
                  } focus:border-amber-500 focus:outline-none transition-colors`}
                  placeholder="Adresse de destination"
                />
                {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
              </div>

              {/* Date et heure */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  <Calendar className="inline mr-2" size={16} />
                  Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 rounded-lg border ${
                    errors.date ? 'border-red-500' : 'border-gray-600'
                  } focus:border-amber-500 focus:outline-none transition-colors`}
                />
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <Clock className="inline mr-2" size={16} />
                  Heure *
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 rounded-lg border ${
                    errors.time ? 'border-red-500' : 'border-gray-600'
                  } focus:border-amber-500 focus:outline-none transition-colors`}
                />
                {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
              </div>

              {/* Détails du voyage */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  <Users className="inline mr-2" size={16} />
                  Nombre de passagers
                </label>
                <select
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-amber-500 focus:outline-none transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7].map(num => (
                    <option key={num} value={num}>{num} passager{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Type de service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-amber-500 focus:outline-none transition-colors"
                >
                  <option value="private">Trajet privé</option>
                  <option value="airport">Transport aéroport</option>
                  <option value="business">Service entreprise</option>
                  <option value="shopping">Shopping/Tourisme</option>
                </select>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
              >
                <span>Réserver maintenant</span>
                <Phone size={20} />
              </button>
              <p className="text-gray-400 text-sm mt-4">
                * Champs obligatoires - Vous serez redirigé vers WhatsApp pour finaliser votre réservation
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;