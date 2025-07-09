
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Eduardo",
      role: "Aluno de Muay Thai",
      testimonial: "Desde que comecei a treinar na CNTEAM minha condição física melhorou significativamente. Os professores são excelentes e a estrutura é completa.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Fernanda Lima",
      role: "Aluna de Jiu-Jitsu",
      testimonial: "Comecei com o objetivo de aprender defesa pessoal e me apaixonei pelo Jiu-Jitsu. O ambiente é muito acolhedor e os instrutores são muito pacientes com iniciantes.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Rafael Moreira",
      role: "Aluno de Judô",
      testimonial: "Treino Judô há 2 anos na CNTEAM e a evolução foi impressionante. A metodologia de ensino é muito eficiente e os treinos são desafiadores na medida certa.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Patricia Santos",
      role: "Aluna de Muay Thai",
      testimonial: "Encontrei na CNTEAM não só uma academia, mas uma segunda família. A energia é incrível e os resultados são reais quando você se dedica.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=400&auto=format&fit=crop"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-academy relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl -z-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 relative inline-block">
            Depoimentos
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            O que nossos alunos dizem
          </h3>
          <p className="text-white/70 mt-4">
            Conheça as histórias de quem já transformou sua vida treinando conosco.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel 
            className="w-full"
            onSelect={(index) => {
              // Fix: Convert index to number before setting state
              if (typeof index === 'number') {
                setActiveIndex(index);
              }
            }}
            opts={{
              loop: true,
              align: "center",
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-3/4 lg:basis-3/5">
                  <div className="bg-academy-gray border border-white/10 rounded-lg p-8 h-full transition-all duration-500 transform hover:scale-[1.02] hover:border-primary/30">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/0 transition-all duration-500 hover:border-primary">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover transition-all duration-700 grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 transition-all duration-300 ${
                                i < testimonial.rating ? "text-primary" : "text-white/20"
                              }`} 
                              fill={i < testimonial.rating ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                        
                        <blockquote className="text-white/90 italic mb-4">
                          "{testimonial.testimonial}"
                        </blockquote>
                        
                        <div>
                          <h4 className="text-white font-bold">{testimonial.name}</h4>
                          <p className="text-primary text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static mx-2 bg-transparent border border-white/20 text-white hover:bg-primary hover:border-primary transition-colors" />
              <CarouselNext className="static mx-2 bg-transparent border border-white/20 text-white hover:bg-primary hover:border-primary transition-colors" />
            </div>
            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "bg-primary w-4" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
