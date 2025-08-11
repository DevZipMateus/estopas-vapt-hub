
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import History from '../components/History';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all animation elements
    const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-scale-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <title>Estopas Vapt - Produtos Sustentáveis e Químicos Automotivos | Várzea Grande-MT</title>
      <meta 
        name="description" 
        content="Estopas Vapt - Há mais de 20 anos produzindo estopas industriais sustentáveis e produtos químicos automotivos de qualidade. Atendemos MT, RO, AC e PA. Solicite seu orçamento!" 
      />
      <meta 
        name="keywords" 
        content="estopas industriais, produtos químicos automotivos, sustentabilidade, Várzea Grande, Mato Grosso, estopas sustentáveis, intercap, shampoo automotivo, desengraxante" 
      />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Estopas Vapt - Produtos Sustentáveis e Químicos Automotivos" />
      <meta property="og:description" content="Há mais de 20 anos transformando resíduos têxteis em produtos sustentáveis de alta qualidade. Tradição, confiança e compromisso com o meio ambiente." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.estopasvapt.com.br" />
      <meta property="og:image" content="/lovable-uploads/f63ef34c-f0d4-41f5-ad04-9480db1811bd.png" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Estopas Vapt - Produtos Sustentáveis e Químicos Automotivos" />
      <meta name="twitter:description" content="Há mais de 20 anos transformando resíduos têxteis em produtos sustentáveis de alta qualidade." />
      <meta name="twitter:image" content="/lovable-uploads/f63ef34c-f0d4-41f5-ad04-9480db1811bd.png" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Estopas Vapt",
          "url": "https://www.estopasvapt.com.br",
          "logo": "/lovable-uploads/f63ef34c-f0d4-41f5-ad04-9480db1811bd.png",
          "description": "Empresa especializada em estopas industriais sustentáveis e produtos químicos automotivos",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "RUA INDUSTRIAL N° 09",
            "addressLocality": "Várzea Grande",
            "addressRegion": "MT",
            "addressCountry": "BR"
          },
          "telephone": "+55-65-98174-8423",
          "email": "estopasvaptcba@gmail.com",
          "sameAs": [
            "https://instagram.com/estopas_vapt"
          ],
          "foundingDate": "2000",
          "slogan": "Mais que produto: entregamos confiança."
        })}
      </script>

      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <History />
        <Services />
        <Gallery />
        <Location />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
