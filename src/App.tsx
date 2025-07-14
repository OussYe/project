import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Booking from './components/Booking';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  const handleWhatsAppClick = () => {
    const message = "Bonjour, je souhaite réserver un transport avec Presta-Val-VTC.";
    const whatsappUrl = `https://wa.me/33681833529?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+33681833529';
  };

  const handleBookingClick = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleServicesClick = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header onWhatsAppClick={handleWhatsAppClick} onPhoneClick={handlePhoneClick} />
      <Navigation />
      <main>
        <section id="home">
          <Hero onBookingClick={handleBookingClick} onServicesClick={handleServicesClick} />
        </section>
        <Booking />
        <Services />
        <Fleet />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat onClick={handleWhatsAppClick} />
    </div>
  );
}

export default App;