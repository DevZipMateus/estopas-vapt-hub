
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'História', href: '#historia' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/lovable-uploads/f63ef34c-f0d4-41f5-ad04-9480db1811bd.png" alt="Estopas Vapt Logo" className="h-24 md:h-28 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map(item => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white text-sm lg:text-base font-medium hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('#contato')}
              className="btn-hero text-sm"
            >
              Fale Conosco
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary hover:bg-gray-800 transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md shadow-lg">
          {navItems.map(item => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary hover:bg-gray-800 transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contato')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium btn-hero mt-4"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
