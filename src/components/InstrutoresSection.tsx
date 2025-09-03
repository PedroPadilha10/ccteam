
import { useState } from "react";
import { Star } from "lucide-react";

const InstrutoresSection = () => {
  const [hoveredInstructor, setHoveredInstructor] = useState<number | null>(null);

  const instrutores = [
    {
      id: 1,
      name: "Gilmar Seabra",
      role: "Professor de Jiu-Jitsu",
      experience: "15 anos de experiência",
      awards: ["Campeão 6x estadual ", "Cursor de primeiro socorros"],
      image: "images/perfil1.jpg",
      instagram: "#"
    },
    {
      id: 2,
      name: "Arissandro Farias ",
      role: "Professor de No-Gi",
      experience: "11 anos de experiência",
      awards: ["Faixa marrom de jiujitsu", "Campeão estadual 3x (No-gi)"],
      image: "images/perfil2.jpg",
      instagram: "https://www.instagram.com/arissandrodasilvamora?igsh=aTFjMWZvcXFqMzBs"
    },
    {
      id: 3,
      name: "Gildson walber",
      role: "Professor de Judô",
      experience: "15 anos de experiência",
      awards: ["1° lugar na seletiva Brasileiro", "Psicologia do esporte"],
      image: "images/perfil3.jpg",
      instagram: "https://www.instagram.com/gildson_walber?igsh=dm43bTBteDJ2bWVv"
    },
    {
      id: 4,
      name: "Clodomir Neto",
      role: "Instrutor de MMA",
      experience: "8 anos de experiência",
      awards: ["Ex Atleta profissional de MMA", "Campeão Brasileiro CBLP(Gi)"],
      image: "images/Clodomir22.jpg",
      instagram: "https://www.instagram.com/clodomir_netobjj/"
    },
    {
      id: 5,
      name: "Wandercléa Sobrinho",
      role: "Instrutora de pilates solo",
      experience: "7 anos de experiência",
      awards: ["Formada em fisioterapia", "Massoterapia pela UFRN"],
      image: "images/menina.jpg",
      instagram: "https://www.instagram.com/wandercleasobrinho/"
    },
    {
      id: 6,
      name: "Alexandre Andrade",
      role: "Instrutor de Muay Thai",
      experience: "6 anos de experiência",
      awards: ["Cartel de 5 lutas ", "2 armador e 3 profissionais", "Curso de primeiros socorros"],
      image: "images/Alexandre.jpg",
      instagram: "https://www.instagram.com/cnteambjj"
    },
    {
      id: 7,
      name: "Matheus Carvalho",
      role: "Instrutor de Boxe",
      experience: "8 anos de experiência",
      awards: ["Oriundo do Muay Thai", "Especialidade em boxe", "Curso de primeiros socorros"],
      image: "images/Matheus.jpg",
      instagram: "https://www.instagram.com/matheuscarvalhobr099"
    }
  ];

  return (
    <section id="instrutores" className="py-20 bg-academy-gray relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px] animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 relative inline-block">
            Nossos Instrutores
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Aprenda com os melhores profissionais
          </h3>
          <p className="text-white/70 mt-4">
            Nossa equipe é formada por atletas e profissionais com vasta experiência 
            em competições nacionais e internacionais.
          </p>
        </div>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">

          {instrutores.map((instrutor, index) => (
            <div 
              key={instrutor.id}
              className="group bg-academy border border-white/10 rounded-lg overflow-hidden relative"
              style={{ 
                animationDelay: `${index * 150}ms`,
                transform: hoveredInstructor === instrutor.id ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredInstructor === instrutor.id ? '0 15px 30px rgba(0, 0, 0, 0.3)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={() => setHoveredInstructor(instrutor.id)}
              onMouseLeave={() => setHoveredInstructor(null)}
            >
              {/* Red corner accent effect */}
              <div 
                className="absolute -top-10 -right-10 w-20 h-20 bg-primary transform rotate-45 transition-all duration-500"
                style={{
                  opacity: hoveredInstructor === instrutor.id ? 1 : 0,
                  transform: hoveredInstructor === instrutor.id ? 'translate(0, 0) rotate(45deg)' : 'translate(10px, -10px) rotate(45deg)'
                }}
              ></div>
              
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={instrutor.image} 
                  alt={instrutor.name} 
                  className="w-full h-full object-cover transition-all duration-700"
                  style={{
                    objectPosition: 'center 10%',
                    filter: hoveredInstructor === instrutor.id ? 'grayscale(0%)' : 'grayscale(100%)',
                    transform: hoveredInstructor === instrutor.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t transition-all duration-500"
                  style={{
                    background: hoveredInstructor === instrutor.id 
                      ? 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)' 
                      : 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
                  }}
                ></div>
                <div 
                  className="absolute bottom-0 left-0 w-full p-4 transition-all duration-500"
                  style={{
                    transform: hoveredInstructor === instrutor.id ? 'translateY(-8px)' : 'translateY(0)'
                  }}
                >
                  <h4 className="text-xl font-bold text-white">{instrutor.name}</h4>
                  <p 
                    className="text-primary relative"
                    style={{
                      textShadow: hoveredInstructor === instrutor.id ? '0 0 10px rgba(234, 56, 76, 0.5)' : 'none'
                    }}
                  >
                    {instrutor.role}
                  </p>
                </div>
              </div>
              
              <div className="p-4">
                <p 
                  className="text-white/80 text-sm mb-3 transition-all duration-500"
                  style={{
                    transform: hoveredInstructor === instrutor.id ? 'translateX(5px)' : 'translateX(0)'
                  }}
                >
                  {instrutor.experience}
                </p>
                
                <div className="space-y-2">
                  {instrutor.awards.map((award, i) => (
                    <div 
                      key={i} 
                      className="flex items-center text-white/80 text-sm transition-all duration-500"
                      style={{
                        transform: hoveredInstructor === instrutor.id ? `translateX(${(i+1)*3}px)` : 'translateX(0)',
                        transitionDelay: `${i * 100}ms`
                      }}
                    >
                      <Star 
                        className="text-primary mr-2 h-4 w-4 transition-all duration-300" 
                        style={{
                          transform: hoveredInstructor === instrutor.id ? 'scale(1.2) rotate(5deg)' : 'scale(1) rotate(0)',
                        }}
                      />
                      {award}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* View profile button that appears on hover */}
              <a
                href={instrutor.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 left-0 w-full bg-primary text-white text-center py-3 font-semibold transition-all duration-500 overflow-hidden"
                style={{
                  height: hoveredInstructor === instrutor.id ? '40px' : '0',
                  opacity: hoveredInstructor === instrutor.id ? 1 : 0
                }}
              >
                Ver Perfil Completo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstrutoresSection;
