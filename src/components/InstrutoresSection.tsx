
import { useState } from "react";
import { Star } from "lucide-react";

const InstrutoresSection = () => {
  return (
    <section id="instrutores" className="py-20 bg-academy-gray relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px] animate-pulse"></div>
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px] animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
            Nosso Time
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Profissionais preparados para te levar ao próximo nível
          </h3>

          <p className="text-white/70 mt-6 leading-relaxed">
            Contamos com um time de profissionais qualificados, experientes e
            comprometidos com a excelência no ensino. Nossa metodologia é
            construída a partir da prática, disciplina e evolução contínua,
            garantindo um ambiente seguro, motivador e focado em resultados.
          </p>

          <p className="text-white/70 mt-4 leading-relaxed">
            Aqui, cada treino é conduzido com responsabilidade, técnica e paixão
            pelo esporte, respeitando o ritmo e os objetivos individuais de cada
            aluno.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstrutoresSection;
