
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-academy">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-md overflow-hidden">
              <img 
                src="images/boxe.jpg" 
                alt="Academia CNTEAM" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-primary p-4 rounded shadow-lg">
              <span className="text-4xl font-bold text-white">5+</span>
              <p className="text-white text-sm">anos de experiência</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-sm font-semibold tracking-widest text-primary uppercase relative">
                Sobre a Academia
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
              </h2>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              O lugar perfeito para treinar e evoluir como atleta
            </h3>
            
            <p className="text-white/80">
              Fundada há mais de 5 anos, a CNTEAM se consolidou como referência
              em artes marciais. Nossa estrutura completa e equipe de instrutores
              altamente qualificados garantem a melhor experiência para quem
              busca excelência técnica em lutas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-academy-gray p-4 rounded-md border border-white/10 animate-fade-in">
                <div className="text-primary text-xl font-bold mb-2">Equipe Profissional</div>
                <p className="text-white/70 text-sm">
                  Instrutores certificados e com ampla experiência competitiva.
                </p>
              </div>
              
              <div className="bg-academy-gray p-4 rounded-md border border-white/10 animate-fade-in">
                <div className="text-primary text-xl font-bold mb-2">Estrutura Completa</div>
                <p className="text-white/70 text-sm">
                  Espaço amplo, equipamentos de ponta e áreas especializadas.
                </p>
              </div>
              
              <div className="bg-academy-gray p-4 rounded-md border border-white/10 animate-fade-in">
                <div className="text-primary text-xl font-bold mb-2">Metodologia Exclusiva</div>
                <p className="text-white/70 text-sm">
                  Técnicas adaptadas para cada nível, do iniciante ao avançado.
                </p>
              </div>
              
              <div className="bg-academy-gray p-4 rounded-md border border-white/10 animate-fade-in">
                <div className="text-primary text-xl font-bold mb-2">Resultados Garantidos</div>
                <p className="text-white/70 text-sm">
                  Evolução técnica, física e mental em menos tempo.
                </p>
              </div>
            </div>
            
            <a
              href="https://www.instagram.com/cnteambjj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="academy" size="lg" className="mt-4">
                CONHEÇA NOSSA HISTÓRIA
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
