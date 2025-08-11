
import React from 'react';
import { Calendar, Users, Trophy, MapPin } from 'lucide-react';

const History = () => {
  const timeline = [
    {
      year: '2000',
      title: 'Fundação da Empresa',
      description: 'Fundada pelo casal Sr. Vagnaldo e Sra. Patrícia em Várzea Grande-MT, com a visão de transformar resíduos sólidos em produtos úteis.',
      icon: Calendar
    },
    {
      year: '2003',
      title: 'Expansão da Sociedade',
      description: 'Sr. Moacir, amigo e ex-sócio, integra a sociedade para fortalecer o crescimento do negócio.',
      icon: Users
    },
    {
      year: '2005',
      title: 'Nova Gestão Familiar',
      description: 'Sr. Moacir assume a gestão total, transformando a empresa em um negócio familiar com seus filhos.',
      icon: Trophy
    },
    {
      year: 'Hoje',
      title: 'Mercado Regional',
      description: 'Atuação consolidada em Mato Grosso, Rondônia, Acre e Pará, sempre priorizando qualidade e bom atendimento.',
      icon: MapPin
    }
  ];

  return (
    <section id="historia" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up in-view">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Trophy className="w-4 h-4 mr-2" />
            Nossa História
          </div>
          <h2 className="heading-lg mb-8">
            Mais de <span className="text-gradient-primary">20 Anos</span> de Tradição
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
            Uma jornada de crescimento, transformação e compromisso com a sustentabilidade, 
            construída com união, trabalho e valores familiares que permanecem até hoje.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/30"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center animate-fade-in-up in-view ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg z-10">
                  <item.icon className="w-4 h-4 text-white" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="card-service hover-lift">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold mr-3">
                        {item.year}
                      </div>
                    </div>
                    <h3 className="heading-xs mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="body-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Heritage Section */}
        <div className="mt-16 text-center animate-fade-in-up in-view">
          <div className="card-elevated max-w-4xl mx-auto p-8 md:p-12">
            <h3 className="heading-md mb-6">
              <span className="text-gradient-primary">Nosso Jeito</span> de Atender
            </h3>
            <p className="body-lg text-muted-foreground mb-8 leading-relaxed">
              Direto, sem formalidades, com aquele jeito simples e objetivo, mas sempre com 
              eficiência e respeito. Aqui, prezamos por resolver de forma rápida, prática e 
              com atenção ao que realmente importa: a necessidade do cliente.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Relacionamentos Duradouros</h4>
                <p className="text-sm text-muted-foreground">Baseados na confiança e transparência</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Excelência</h4>
                <p className="text-sm text-muted-foreground">Compromisso com a qualidade em tudo</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Presença Regional</h4>
                <p className="text-sm text-muted-foreground">Atendimento em 4 estados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
