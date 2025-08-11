
import React from 'react';
import { ArrowRight, Recycle, Award, Clock } from 'lucide-react';

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
    <section id="inicio" className="section-hero section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up in-view">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Recycle className="w-4 h-4 mr-2" />
              Sustentabilidade e Qualidade desde 2000
            </div>
            
            <h1 className="heading-xl text-foreground mb-6">
              Transformando 
              <span className="text-gradient-primary"> Resíduos </span>
              em 
              <span className="text-gradient-primary"> Soluções </span>
              Sustentáveis
            </h1>
            
            <p className="body-lg text-muted-foreground mb-8 max-w-2xl">
              Há mais de 20 anos produzindo estopas industriais de alta qualidade 
              e produtos químicos automotivos, sempre com foco na sustentabilidade, 
              agilidade e atendimento personalizado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button onClick={handleContactClick} className="btn-hero group">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={handleServicesClick} className="btn-outline">
                Nossos Produtos
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="heading-sm text-primary">+20</div>
                <div className="body-sm text-muted-foreground">Anos de Tradição</div>
              </div>
              <div className="text-center">
                <div className="heading-sm text-primary">4</div>
                <div className="body-sm text-muted-foreground">Estados Atendidos</div>
              </div>
              <div className="text-center">
                <div className="heading-sm text-primary">100%</div>
                <div className="body-sm text-muted-foreground">Sustentável</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative animate-scale-in in-view">
            <div className="relative z-10">
              <div className="card-elevated p-8 max-w-md mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-xs mb-3">Qualidade Garantida</h3>
                  <p className="body-sm text-muted-foreground mb-6">
                    "Mais que produto: entregamos confiança."
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>Produtos 100% sustentáveis</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>Atendimento ágil e personalizado</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>Preços justos e competitivos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-8 right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
