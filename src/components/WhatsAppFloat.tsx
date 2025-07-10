import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppFloatProps {
  onClick: () => void;
}

const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-pulse"
      aria-label="Contacter par WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppFloat;