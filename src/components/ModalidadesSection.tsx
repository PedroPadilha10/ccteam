import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const modalidades = [
  {
    id: "muay-thai",
    title: "Muay Thai",
    description: "A arte das oito armas: resistência, poder e superação.",
    image: "images/muay.jpg",
  },
  {
    id: "jiu-jitsu",
    title: "Jiu-Jitsu",
    description: "Técnica e estratégia: vença no chão e na vida.",
    image: "images/jiu.jpg",
  },
  {
    id: "pilates",
    title: "Pilates Solo",
    description: "Melhorar a postura, o equilíbrio e a coordenação.",
    image: "images/karate.jpg",
  },
  {
    id: "no-gi",
    title: "No-Gi",
    description: "Explosão, disciplina e reflexos afiados. Supere-se.",
    image: "images/boxe1.jpg",
  },
  {
    id: "judo",
    title: "Judô",
    description: "Suavidade, técnica e autoconhecimento em cada projeção.",
    image: "images/judo.jpg",
  },
];

const ModalidadesSection = () => {
  const [activeIdx, setActiveIdx] = useState<number>(1);

  return (
    <section id="modalidades" className="py-20 bg-black relative overflow-hidden">
      {/* 🔴 Removido o brilho vermelho do fundo */}

      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs uppercase font-bold tracking-widest text-academy-red mb-2">
            MODALIDADES
          </h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Treine com Propósito
          </h3>
          <p className="text-white/70 text-base sm:text-lg">
            Escolha sua arte marcial e libere o seu potencial com treinadores experientes.
          </p>
        </div>

        <Carousel
          opts={{ loop: true, align: "center", slidesToScroll: 1 }}
          className="w-full max-w-6xl mx-auto"
        >
          {/* Botão anterior */}
          <CarouselPrevious
            className="left-0 md:-left-8 top-1/2 -translate-y-1/2 z-10
            bg-white/10 text-white hover:bg-white/20 transition-all
            shadow-none border-none"
          />

          {/* Conteúdo do carrossel */}
          <CarouselContent>
            {modalidades.map((item, idx) => (
              <CarouselItem
                key={item.id}
                className="group md:basis-1/3 sm:basis-2/5 basis-[84%] px-4"
                onMouseEnter={() => setActiveIdx(idx)}
                onFocus={() => setActiveIdx(idx)}
              >
                <div className="relative rounded-xl overflow-hidden shadow-none transition-all duration-300 transform hover:scale-105">
                  {/* Imagem da modalidade */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover brightness-90 group-hover:brightness-100 transition-all"
                  />

                  {/* Overlay com informações */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 flex flex-col justify-end">
                    <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white/80 text-sm mb-4">{item.description}</p>
                    <a href="#contato">
                      <Button
                        variant="ghost"
                        className="self-start bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white hover:text-black transition-all"
                      >
                        Quero treinar
                      </Button>
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Botão próximo */}
          <CarouselNext
            className="right-0 md:-right-8 top-1/2 -translate-y-1/2 z-10
            bg-white/10 text-white hover:bg-white/20 transition-all
            shadow-none border-none"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default ModalidadesSection;
