
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PlanosSection = () => {
const planos = [
  {
    id: "mensal",
    name: "Plano Mensal",
    price: "R$ 80,00",
    period: "por mês",
    description: "Plano mensal individual com flexibilidade e cobrança recorrente.",
    features: [
      "Valor fixo até a data de vencimento escolhida pelo aluno",
      "Após o vencimento, há acréscimo mensal em caso de atraso",
      "Acesso completo às modalidades e estrutura da academia",
      "1 aula experimental em qualquer modalidade"
    ],
    highlighted: false
  },
  {
    id: "trimestral",
    name: "Plano Trimestral",
    price: "R$ 75,00",
    period: "por mês",
    description: "Plano com menor custo mensal e validade de 3 meses.",
    features: [
      "R$ 75,00 por mês com pagamento antecipado do trimestre",
      "Valor fixo até o vencimento escolhido pelo aluno",
      "Acréscimo mensal em caso de atraso",
      "1 aula experimental em qualquer modalidade"
    ],
    highlighted: false
  },
  {
    id: "semestral",
    name: "Plano Semestral",
    price: "R$ 70,00",
    period: "por mês",
    description: "Plano ideal para quem busca constância e economia a longo prazo.",
    features: [
      "R$ 70,00 por mês com pagamento antecipado do semestre",
      "Valor fixo até o vencimento escolhido pelo aluno",
      "Acréscimo mensal em caso de atraso",
      "1 aula experimental em qualquer modalidade"
    ],
    highlighted: false
  },
  {
    id: "anual",
    name: "Plano Anual",
    price: "R$ 60,00",
    period: "por mês",
    description: "Plano mais econômico e indicado para alunos dedicados.",
    features: [
      "R$ 60,00 por mês com pagamento anual antecipado",
      "Valor garantido até a data de vencimento",
      "Acréscimo em caso de atraso após vencimento",
      "1 aula experimental em qualquer modalidade"
    ],
    highlighted: true
  },
  {
    id: "familia",
    name: "Plano Família",
    price: "R$ 55,00",
    period: "por mês",
    description: "Desconto especial para grupos de 2 a 5. Ideal para treinar em conjunto.",
    features: [
      "2 a 3 membros: R$ 75,00 (mensal), R$ 70,00 (trimestral), R$ 65,00 (semestral), R$ 60,00 (anual)",
      "4 a 5 membros: R$ 70,00 (mensal), R$ 65,00 (trimestral), R$ 60,00 (semestral), R$ 55,00 (anual)",
      "Válido para: pai, filho, cônjuge ou irmão, familiares que residem na mesma residência"
    ],
    highlighted: false
  }
];


  return (
    <section id="planos" className="py-20 bg-black relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
            Nossos Planos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Escolha o plano ideal para seus objetivos
          </h3>
          <p className="text-white/70 mt-4">
            Oferecemos opções flexíveis para atender diferentes perfis de alunos, 
            desde iniciantes até atletas avançados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {planos.map((plano) => (
            <div 
              key={plano.id}
              className={`bg-academy-gray border rounded-lg overflow-hidden hover-scale ${
                plano.highlighted 
                  ? "border-primary relative" 
                  : "border-white/10"
              }`}
            >
              {plano.highlighted && (
                <div className="bg-primary text-white text-xs font-bold uppercase py-1 px-3 absolute top-6 right-0">
                  Mais popular
                </div>
              )}
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">{plano.name}</h4>
                <p className="text-white/70 text-sm mb-6">{plano.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">{plano.price}</span>
                  <span className="text-white/60 ml-1">{plano.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plano.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-white/80">
                      <Check className="text-primary mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#contato" className="group block">
                  <Button 
                    variant={plano.highlighted ? "default" : "academy"} 
                    className="w-full relative font-bold uppercase hover:scale-105 transition-all duration-300"
                  >
                    <span className="relative z-10">COMEÇAR AGORA</span>
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white/10 rounded-lg transition-opacity duration-500"></span>
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm">
            Oferecemos descontos para pagamentos anuais. Entre em contato para mais informações.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlanosSection;
