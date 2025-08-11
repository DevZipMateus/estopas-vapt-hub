
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lista de imagens da galeria
  const galleryImages = [
    {
      src: "/lovable-uploads/galeria/1754341275278_nova_logo.jpg",
      alt: "Nova Logo Estopas Vapt"
    },
    {
      src: "/lovable-uploads/galeria/1754341276590_1_estopa_desfiada_azul_especial.jpg",
      alt: "Estopa Desfiada Azul Especial"
    },
    {
      src: "/lovable-uploads/galeria/1754341276929_2_pano_costurado_especial.jpg",
      alt: "Pano Costurado Especial"
    },
    {
      src: "/lovable-uploads/galeria/1754341277299_3_pano_costurado_tradicional.jpg",
      alt: "Pano Costurado Tradicional"
    },
    {
      src: "/lovable-uploads/galeria/1754341277626_4_estopa_desfiada_mista.jpg",
      alt: "Estopa Desfiada Mista"
    },
    {
      src: "/lovable-uploads/galeria/1754341277976_5_flanela_colorida.jpg",
      alt: "Flanela Colorida"
    },
    {
      src: "/lovable-uploads/galeria/1754341278417_6_pano_retalho_limpeza_pesada_2.jpg",
      alt: "Pano Retalho Limpeza Pesada"
    },
    {
      src: "/lovable-uploads/galeria/1754341278779_7_capa_de_fardo.jpg",
      alt: "Capa de Fardo"
    },
    {
      src: "/lovable-uploads/galeria/1754341279244_8_imagem_do_whatsapp_de_2025_08_04_a_s_16_35_38_ba971429.jpg",
      alt: "Produto WhatsApp 1"
    },
    {
      src: "/lovable-uploads/galeria/1754341279601_9_img_20250804_wa0022.jpg",
      alt: "Produto WhatsApp 2"
    },
    {
      src: "/lovable-uploads/galeria/1754341279882_10_img_20250804_wa0023.jpg",
      alt: "Produto WhatsApp 3"
    },
    {
      src: "/lovable-uploads/galeria/1754341280165_11_img_20250804_wa0028.jpg",
      alt: "Produto WhatsApp 4"
    },
    {
      src: "/lovable-uploads/galeria/1754341280470_12_img_20250804_wa0030.jpg",
      alt: "Produto WhatsApp 5"
    },
    {
      src: "/lovable-uploads/galeria/1754341280815_13_img_20250804_wa0031.jpg",
      alt: "Produto WhatsApp 6"
    },
    {
      src: "/lovable-uploads/galeria/1754341281178_14_img_20250804_wa0029.jpg",
      alt: "Produto WhatsApp 7"
    },
    {
      src: "/lovable-uploads/galeria/1754341281665_15_img_20250804_wa0026.jpg",
      alt: "Produto WhatsApp 8"
    },
    {
      src: "/lovable-uploads/galeria/1754341282124_16_img_20250804_wa0027.jpg",
      alt: "Produto WhatsApp 9"
    }
  ];

  // Auto-play: troca a imagem a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossa <span className="text-primary">Galeria</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossos produtos sustentáveis e de alta qualidade
          </p>
        </div>

        {/* Carrossel Principal */}
        <div className="relative max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    {/* Overlay com informações */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-lg font-semibold">{image.alt}</h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          {/* Indicadores de posição */}
          <div className="flex justify-center mt-6 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid de miniaturas */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {galleryImages.slice(0, 12).map((image, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-square overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
                index === currentIndex 
                  ? 'ring-4 ring-primary shadow-lg' 
                  : 'hover:ring-2 hover:ring-primary/50 hover:shadow-md'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
