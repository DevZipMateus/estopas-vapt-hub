import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel';

const Gallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

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
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  // Update current slide when carousel changes
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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

        {/* Carrossel de Cards */}
        <div className="flex justify-center">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
