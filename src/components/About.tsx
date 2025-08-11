
import React from 'react';
import { Target, Heart, Zap, Users, CheckCircle, Leaf } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      description: 'Reaproveitamos o que seria descartado. Trabalhamos em favor do planeta.'
    },
    {
      icon: Heart,
      title: 'Honestidade e Justiça',
      description: 'Negociamos com total transparência. Agimos com correção em tudo o que fazemos.'
    },
    {
      icon: Zap,
      title: 'Agilidade com Eficiência',
      description: 'Atendimento rápido, direto e sem burocracia. Aqui, o cliente é prioridade.'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente é único. Oferecemos atenção, escuta e soluções sob medida.'
    },
    {
      icon: CheckCircle,
      title: 'Compromisso com a Qualidade',
      description: 'Produto de confiança, com padrão elevado e preço justo.'
    },
    {
      icon: Target,
      title: 'Tradição e Confiança',
      description: 'Mais de duas décadas de história e parcerias duradouras nos mercados em que atuamos.'
    }
  ];

  return (
    <section id="sobre" className="section-padding section-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission */}
        <div className="text-center mb-16 animate-fade-in-up in-view">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            Nossa Missão
          </div>
          <h2 className="heading-lg text-center mb-8">
            Transformar <span className="text-gradient-primary">Resíduos Têxteis</span> em Produtos Úteis
          </h2>
          <p className="body-lg text-muted-foreground max-w-4xl mx-auto">
            Oferecemos soluções simples, eficientes e com atendimento ágil e personalizado, 
            sempre respeitando o meio ambiente e contribuindo para um futuro mais limpo.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="card-feature hover-lift animate-fade-in-up in-view group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:shadow-glow transition-all duration-300">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="heading-xs mb-3 group-hover:text-primary transition-colors">
                {value.title}
              </h3>
              <p className="body-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up in-view">
          <div className="card-elevated max-w-2xl mx-auto p-8">
            <h3 className="heading-md mb-4">
              Estopas Vapt — <span className="text-gradient-primary">Tradição, Qualidade e Compromisso</span>
            </h3>
            <p className="body-md text-muted-foreground mb-6">
              "Mais que produto: entregamos confiança."
            </p>
            <button 
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Fale Conosco Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
