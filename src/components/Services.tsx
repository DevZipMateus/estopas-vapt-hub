
import React from 'react';
import { Package, Droplets, Factory, Car, Wrench, Recycle } from 'lucide-react';

const Services = () => {
  const industrialProducts = [
    'Estopas para oficinas',
    'Uso em indústrias',
    'Postos de combustível',
    'Transportadoras',
    'Empresas de limpeza',
    'Segmentos industriais'
  ];

  const chemicalProducts = [
    'Intercap (Intercapador)',
    'Shampoo automotivo com cera',
    'Shampoo automotivo sem cera',
    'Desengraxante',
    'Solupan',
    'Cera líquida'
  ];

  return (
    <section id="servicos" className="section-padding section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up in-view">
          <div className="inline-flex items-center px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
            <Package className="w-4 h-4 mr-2" />
            Nossos Produtos
          </div>
          <h2 className="heading-lg text-white mb-8">
            Soluções <span className="text-gradient-primary">Completas</span> para Sua Empresa
          </h2>
          <p className="body-lg text-gray-300 max-w-3xl mx-auto">
            Oferecemos uma linha completa de produtos sustentáveis e químicos automotivos 
            de alta qualidade para atender todas as necessidades do seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Estopas Industriais */}
          <div className="animate-fade-in-up in-view">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mr-4 shadow-glow">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="heading-sm text-white mb-2">Estopas Industriais</h3>
                  <p className="body-sm text-gray-300">100% sustentáveis e resistentes</p>
                </div>
              </div>
              
              <p className="body-md text-gray-300 mb-6 leading-relaxed">
                Produzidas a partir de resíduos sólidos têxteis (fiação), nossas estopas são 
                ideais para diversos segmentos que exigem um produto resistente, absorvente e sustentável.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-white mb-4 flex items-center">
                  <Recycle className="w-5 h-5 mr-2 text-primary" />
                  Aplicações:
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {industrialProducts.map((product, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span>{product}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/20">
                <p className="text-sm text-gray-300">
                  <strong className="text-primary">Sustentabilidade:</strong> Contribuímos para a 
                  redução de resíduos têxteis, transformando-os em produtos úteis e de qualidade.
                </p>
              </div>
            </div>
          </div>

          {/* Produtos Químicos */}
          <div className="animate-fade-in-up in-view" style={{ animationDelay: '200ms' }}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mr-4 shadow-glow">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="heading-sm text-white mb-2">Produtos Químicos Automotivos</h3>
                  <p className="body-sm text-gray-300">Linha completa para cuidado automotivo</p>
                </div>
              </div>
              
              <p className="body-md text-gray-300 mb-6 leading-relaxed">
                Oferecemos uma linha completa de produtos químicos voltados para o cuidado 
                automotivo e uso profissional, com alta qualidade e performance garantida.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-white mb-4 flex items-center">
                  <Droplets className="w-5 h-5 mr-2 text-primary" />
                  Produtos Disponíveis:
                </h4>
                <div className="space-y-3">
                  {chemicalProducts.map((product, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span>{product}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/20">
                <p className="text-sm text-gray-300">
                  <strong className="text-primary">Alto Desempenho:</strong> Produtos desenvolvidos 
                  para uso profissional com qualidade superior e resultados garantidos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-in-up in-view">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold text-white mb-2">Qualidade Garantida</h4>
            <p className="text-sm text-gray-300">Produtos testados e aprovados para uso profissional</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Recycle className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold text-white mb-2">100% Sustentável</h4>
            <p className="text-sm text-gray-300">Contribuindo para um meio ambiente mais limpo</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold text-white mb-2">Pronta Entrega</h4>
            <p className="text-sm text-gray-300">Estoque disponível para atendimento imediato</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up in-view">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="heading-md text-white mb-4">
              Precisa de um <span className="text-gradient-primary">Orçamento?</span>
            </h3>
            <p className="body-md text-gray-300 mb-6">
              Entre em contato conosco e receba uma proposta personalizada para suas necessidades.
            </p>
            <button 
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
