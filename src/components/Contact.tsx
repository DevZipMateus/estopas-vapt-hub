
import React, { useState } from 'react';
import { Send, Phone, Mail, MessageSquare, User, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Preparar mensagem para WhatsApp
    const message = `Olá! Meu nome é ${formData.name}${formData.company ? ` da empresa ${formData.company}` : ''}.

${formData.message}

Dados para contato:
📧 E-mail: ${formData.email}
📱 Telefone: ${formData.phone}

Aguardo retorno. Obrigado!`;

    const whatsappUrl = `https://wa.me/5565981748423?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleWhatsAppDirect = () => {
    window.open('https://wa.me/5565981748423?text=Olá! Gostaria de mais informações sobre os produtos da Estopas Vapt.', '_blank');
  };

  const handleEmailDirect = () => {
    window.location.href = 'mailto:estopasvaptcba@gmail.com';
  };

  const handlePhoneDirect = () => {
    window.location.href = 'tel:+5565981748423';
  };

  return (
    <section id="contato" className="section-padding section-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up in-view">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            Entre em Contato
          </div>
          <h2 className="heading-lg mb-8">
            Vamos <span className="text-gradient-primary">Conversar?</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender suas necessidades com agilidade e atenção personalizada. 
            Entre em contato conosco e descubra como podemos ajudar seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Quick Contact Options */}
          <div className="lg:col-span-1">
            <div className="space-y-6 animate-fade-in-up in-view">
              <h3 className="heading-sm mb-6">Fale Conosco Agora</h3>
              
              <button 
                onClick={handleWhatsAppDirect}
                className="w-full p-4 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
              >
                <MessageSquare className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-sm opacity-90">(65) 98174-8423</div>
                </div>
              </button>

              <button 
                onClick={handlePhoneDirect}
                className="w-full p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="font-semibold">Telefone</div>
                  <div className="text-sm opacity-90">(65) 98174-8423</div>
                </div>
              </button>

              <button 
                onClick={handleEmailDirect}
                className="w-full p-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="font-semibold">E-mail</div>
                  <div className="text-sm opacity-90">estopasvaptcba@gmail.com</div>
                </div>
              </button>

              <div className="card-feature p-6 mt-8">
                <h4 className="font-semibold mb-3">Atendimento Rápido</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Respondemos rapidamente via WhatsApp e telefone durante o horário comercial.
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <p>📅 Segunda a Sexta: 08:00 - 18:00</p>
                  <p>📅 Sábado: 08:00 - 12:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-elevated p-8 animate-fade-in-up in-view" style={{ animationDelay: '200ms' }}>
              <h3 className="heading-sm mb-6">Envie sua Mensagem</h3>
              <p className="body-sm text-muted-foreground mb-8">
                Preencha o formulário abaixo e entraremos em contato via WhatsApp
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Conte-nos sobre suas necessidades, produtos de interesse ou dúvidas..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-hero group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Enviar via WhatsApp
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  * Campos obrigatórios. Ao enviar, você será redirecionado para o WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
