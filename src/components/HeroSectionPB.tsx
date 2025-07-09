
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSectionPB = () => {
  // Ref para animação quando aparecer na viewport
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return;
      const rect = mainRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        mainRef.current.classList.add("animate-fade-in", "opacity-100");
      } else {
        mainRef.current.classList.remove("animate-fade-in", "opacity-100");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Fundo preto absoluto */}
      <div className="absolute inset-0 bg-black" />

      {/* Overlays em vermelho para energia */}
      <div className="absolute left-0 top-0 w-56 h-56 rounded-full bg-primary/20 blur-[100px] z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-72 bg-primary/10 rounded-full blur-[120px] z-0 pointer-events-none" />

      {/* Imagem de fundo fullscreen escura e desfocada */}
      <div className="absolute inset-0 z-10 pointer-events-none select-none overflow-hidden">
        <img
          src="/images/lutadores.jpg"
          alt="Lutador"
          className="w-full h-full object-cover grayscale blur-sm transition-all duration-700 ease-out"
          style={{
            filter: "grayscale(1) brightness(0.4) blur(2px)",
          }}
          loading="lazy"
          draggable="false"
        />
      </div>

      {/* Conteúdo principal (logo, headline, cta) */}
      <div ref={mainRef} className="relative z-30 w-full px-6 sm:px-10 opacity-0 transition-opacity duration-700 pt-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

          {/* Logo em destaque */}
          <div className="-mb-14 select-none">
            <img
              src="images/logoacad.png"
              alt="Logo CNTEAM"
              className="mx-auto max-w-[500px] md:max-w-[600px] h-auto drop-shadow-lg"
              loading="lazy"
              draggable="false"
            />
          </div>

          {/* Texto da logo */}
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 mb-4 select-none text-center">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-widest text-white drop-shadow-lg">
              ACADEMIA
            </span>
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-widest text-primary drop-shadow-lg">
              CNTEAM
            </span>
          </div>

          <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-8 animate-slide-up delay-100">
            Academia especializada em artes marciais! Sinta a energia e evolução diária. Treine com disciplina, técnica e segurança.
          </p>

          {/* Botão CTA */}
          <a href="#contato" className="group">
            <Button
              variant="default"
              size="lg"
              className="relative px-8 py-4 text-lg font-bold uppercase bg-primary hover:bg-primary/90 transition-colors duration-300 ring-2 ring-primary/40 hover:scale-105 hover:shadow-lg animate-fade-in"
              style={{ letterSpacing: 2 }}
            >
              <span className="relative z-10 flex items-center">
                MATRICULE-SE
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <span className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-20 bg-white/10 rounded-lg"></span>
            </Button>
          </a>

        </div>
      </div>


      {/* Sombra/gradient para leitura de navegação */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-40 pointer-events-none" />
    </section>
  );
};

export default HeroSectionPB;
