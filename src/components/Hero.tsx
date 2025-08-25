
import React from 'react';
import { ArrowRight, Recycle } from 'lucide-react';

const Hero = () => {
  const handleContactClick = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServicesClick = () => {
    const element = document.querySelector('#servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-primary/20 border border-primary/30 text-primary rounded-full text-sm font-medium mb-8 animate-fade-in-up in-view">
          <Recycle className="w-4 h-4 mr-2" />
          Sustentabilidade e Qualidade desde 2000
        </div>
        
        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 animate-fade-in-up in-view">
          Transformando 
          <span className="block text-gradient-primary mt-2">Resíduos</span>
          <span className="block text-black mt-2">em Soluções</span>
          <span className="block text-gradient-primary mt-2">Sustentáveis</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up in-view">
          Há mais de 20 anos produzindo estopas industriais de alta qualidade 
          e produtos químicos automotivos, sempre com foco na sustentabilidade, 
          agilidade e atendimento personalizado.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up in-view">
          <button 
            onClick={handleContactClick} 
            className="bg-primary hover:bg-primary/90 text-black font-bold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group text-lg"
          >
            Solicitar Orçamento
            <ArrowRight className="w-6 h-6 ml-2 inline group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={handleServicesClick} 
            className="border-2 border-black text-black hover:bg-black hover:text-white font-bold px-10 py-4 rounded-lg transition-all duration-300 text-lg"
          >
            Nossos Produtos
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up in-view">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+20</div>
            <div className="text-gray-600 text-lg">Anos de Tradição</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4</div>
            <div className="text-gray-600 text-lg">Estados Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
            <div className="text-gray-600 text-lg">Sustentável</div>
          </div>
        </div>

        {/* Company Slogan */}
        <div className="mt-16 animate-fade-in-up in-view">
          <p className="text-primary font-semibold text-xl italic">
            "Mais que produto: entregamos confiança."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
