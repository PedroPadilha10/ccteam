
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  
  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const { top, height } = heroRef.current.getBoundingClientRect();
        // Only update if hero section is visible
        if (top < window.innerHeight && top + height > 0) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative h-screen bg-black overflow-hidden flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('images/boxe.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundPositionY: `calc(50% + ${scrollY * 0.2}px)`,
      }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"
        style={{ 
          opacity: 1 - (scrollY * 0.001),
          transform: `translateY(${scrollY * 0.05}px)`
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10">
        <div 
          className="max-w-3xl space-y-6 animate-slide-up"
          style={{ 
            transform: `translateY(${scrollY * -0.1}px)`,
            opacity: 1 - (scrollY * 0.002) 
          }}
        >
          <div className="overflow-hidden relative">
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight inline-block"
            >
              SUPERE SEUS <span 
                className="text-primary relative"
                style={{
                  textShadow: `0 0 ${10 + scrollY * 0.02}px rgba(234, 56, 76, 0.5)`
                }}
              >LIMITES</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-white/80">
            Academia especializada em artes marciais com foco em excelência técnica e desenvolvimento pessoal. Conheça nossas modalidades e transforme seu corpo e mente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="default" size="lg" className="group relative overflow-hidden">
              <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative z-10">COMEÇAR AGORA</span>
              <ArrowRight className="relative z-10 ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <Button 
              variant="academy" 
              size="lg"
              className="group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative z-10">CONHEÇA NOSSOS PLANOS</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated backgrounds */}
      <div 
        className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full filter blur-[80px] animate-pulse"
        style={{ animationDuration: '7s' }}
      ></div>
      <div 
        className="absolute -bottom-40 -left-20 w-80 h-80 bg-primary/5 rounded-full filter blur-[120px] animate-pulse"
        style={{ animationDuration: '10s', animationDelay: '2s' }}
      ></div>
      
      <div className="absolute bottom-10 w-full text-center">
        <a 
          href="#sobre" 
          className="inline-flex flex-col items-center text-white hover:text-primary transition-colors duration-300 animate-bounce"
          style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}
        >
          <span className="text-sm mb-2">Saiba mais</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/10 to-primary/80"></div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
