
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5565981748423', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:estopasvaptcba@gmail.com';
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/estopas_vapt', '_blank');
  };

  const handleMapClick = () => {
    window.open('https://maps.google.com?q=RUA+INDUSTRIAL+N+09,+BAIRRO+ALAMEDA,+VÁRZEA+GRANDE-MT', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="section-dark section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/f63ef34c-f0d4-41f5-ad04-9480db1811bd.png" 
              alt="Estopas Vapt Logo" 
              className="h-12 w-auto mb-6 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Há mais de 20 anos transformando resíduos têxteis em produtos sustentáveis 
              de alta qualidade. Tradição, confiança e compromisso com o meio ambiente.
            </p>
            <div className="text-primary font-semibold text-lg">
              "Mais que produto: entregamos confiança."
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Navegação</h3>
            <ul className="space-y-3">
              {[
                { label: 'Início', id: '#inicio' },
                { label: 'Sobre', id: '#sobre' },
                { label: 'História', id: '#historia' },
                { label: 'Serviços', id: '#servicos' },
                { label: 'Localização', id: '#localizacao' },
                { label: 'Contato', id: '#contato' }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <button 
                onClick={handleMapClick}
                className="flex items-start text-gray-300 hover:text-primary transition-colors duration-300 text-left"
              >
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  RUA INDUSTRIAL N° 09<br />
                  BAIRRO ALAMEDA<br />
                  VÁRZEA GRANDE - MT
                </span>
              </button>

              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center text-gray-300 hover:text-primary transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-sm">(65) 98174-8423</span>
              </button>

              <button 
                onClick={handleEmailClick}
                className="flex items-center text-gray-300 hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-sm">estopasvaptcba@gmail.com</span>
              </button>

              <button 
                onClick={handleInstagramClick}
                className="flex items-center text-gray-300 hover:text-primary transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-sm">@estopas_vapt</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Estopas Vapt. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center text-gray-300 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              <span>para nossos clientes</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
