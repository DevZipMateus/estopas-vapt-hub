
import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const Location = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5565981748423?text=Olá! Gostaria de mais informações sobre os produtos da Estopas Vapt.', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:estopasvaptcba@gmail.com';
  };

  const handleMapClick = () => {
    window.open('https://maps.google.com?q=RUA+INDUSTRIAL+N+09,+BAIRRO+ALAMEDA,+VÁRZEA+GRANDE-MT', '_blank');
  };

  return (
    <section id="localizacao" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up in-view">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            Nossa Localização
          </div>
          <h2 className="heading-lg mb-8">
            Visite Nossa <span className="text-gradient-primary">Empresa</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos estrategicamente localizados em Várzea Grande-MT, atendendo toda a região 
            Centro-Oeste e expandindo para outros estados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="animate-fade-in-up in-view">
            <div className="space-y-8">
              <div>
                <h3 className="heading-sm mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Endereço</h4>
                      <p className="text-muted-foreground">
                        RUA INDUSTRIAL N° 09<br />
                        BAIRRO ALAMEDA<br />
                        VÁRZEA GRANDE - MT
                      </p>
                      <button 
                        onClick={handleMapClick}
                        className="text-primary hover:text-primary/80 font-medium text-sm mt-2 inline-flex items-center"
                      >
                        <Navigation className="w-4 h-4 mr-1" />
                        Ver no Google Maps
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Telefone / WhatsApp</h4>
                      <p className="text-muted-foreground mb-2">(65) 98174-8423</p>
                      <button 
                        onClick={handleWhatsAppClick}
                        className="btn-outline text-sm"
                      >
                        Chamar no WhatsApp
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">E-mail</h4>
                      <p className="text-muted-foreground mb-2">estopasvaptcba@gmail.com</p>
                      <button 
                        onClick={handleEmailClick}
                        className="text-primary hover:text-primary/80 font-medium text-sm"
                      >
                        Enviar E-mail
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Horário de Atendimento</h4>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Segunda a Sexta: 08:00 - 18:00</p>
                        <p>Sábado: 08:00 - 12:00</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage Area */}
          <div className="animate-fade-in-up in-view" style={{ animationDelay: '200ms' }}>
            <div className="card-elevated p-8">
              <h3 className="heading-sm mb-6">Área de Atendimento</h3>
              <p className="body-md text-muted-foreground mb-6">
                Atendemos com excelência em toda a região Centro-Oeste e Norte do país:
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Mato Grosso', 'Rondônia', 'Acre', 'Pará'].map((state, index) => (
                  <div key={index} className="flex items-center p-3 bg-primary/5 rounded-lg">
                    <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                    <span className="font-medium">{state}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-subtle p-6 rounded-xl border border-border/30">
                <h4 className="font-semibold mb-3 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Por que nos escolher?
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Localização estratégica para atendimento regional</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Logística eficiente para entregas rápidas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Conhecimento profundo do mercado local</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Relacionamento próximo com clientes regionais</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-16 text-center animate-fade-in-up in-view">
          <div className="card-elevated max-w-md mx-auto p-6">
            <h3 className="heading-xs mb-4">Nos Siga nas Redes Sociais</h3>
            <p className="body-sm text-muted-foreground mb-4">
              Acompanhe nossas novidades e produtos no Instagram
            </p>
            <button 
              onClick={() => window.open('https://instagram.com/estopas_vapt', '_blank')}
              className="btn-outline w-full"
            >
              @estopas_vapt
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
