
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after 3 seconds
      setTimeout(() => setShowTooltip(true), 3000);
      // Hide tooltip after 8 seconds
      setTimeout(() => setShowTooltip(false), 8000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    setShowTooltip(false);
    window.open('https://wa.me/5565981748423?text=Olá! Gostaria de mais informações sobre os produtos da Estopas Vapt.', '_blank');
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-20 right-0 mb-2 animate-fade-in-up">
          <div className="bg-white rounded-lg shadow-xl border border-border p-4 max-w-xs relative">
            <button
              onClick={handleCloseTooltip}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="pr-6">
              <p className="text-sm font-medium text-foreground mb-1">
                👋 Olá! Como podemos ajudar?
              </p>
              <p className="text-xs text-muted-foreground">
                Fale conosco via WhatsApp para orçamentos e dúvidas!
              </p>
            </div>
            {/* Arrow */}
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-border"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        
        {/* Badge */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          1
        </div>
      </button>
    </div>
  );
};

export default WhatsAppFloat;
