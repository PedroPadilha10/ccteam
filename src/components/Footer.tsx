
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <a href="#" className="text-white text-3xl font-bold inline-block mb-6">
              Academia <span className="text-primary">CNTEAM</span>
            </a>
            <p className="text-white/60 mb-6">
              Academia especializada em artes marciais com foco em excelência 
              técnica e desenvolvimento pessoal.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/cnteambjj/" target="_blank" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/60 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#sobre" className="text-white/60 hover:text-primary transition-colors">Sobre nós</a>
              </li>
              <li>
                <a href="#modalidades" className="text-white/60 hover:text-primary transition-colors">Modalidades</a>
              </li>
              <li>
                <a href="#instrutores" className="text-white/60 hover:text-primary transition-colors">Instrutores</a>
              </li>
              <li>
                <a href="#planos" className="text-white/60 hover:text-primary transition-colors">Planos</a>
              </li>
              <li>
                <a href="#contato" className="text-white/60 hover:text-primary transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Modalidades</h4>
            <ul className="space-y-3">
              <li>
                <a href="#muay-thai" className="text-white/60 hover:text-primary transition-colors">Muay Thai</a>
              </li>
              <li>
                <a href="#jiu-jitsu" className="text-white/60 hover:text-primary transition-colors">Jiu-Jitsu</a>
              </li>
              <li>
                <a href="#boxe" className="text-white/60 hover:text-primary transition-colors">No-gi</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors">Judô</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors">MMA</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors">Pilates Solo</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Horários</h4>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-white/60">Segunda-Feira:</span>
                <span className="text-white">08:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/60">Terça-Feira:</span>
                <span className="text-white">08:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/60">Quarta-Feira:</span>
                <span className="text-white">08:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/60">Quinta-Feira:</span>
                <span className="text-white">08:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/60">Sexta-Feira:</span>
                <span className="text-white">08:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/60">Sábado:</span>
                <span className="text-white">Fechado</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/60">Domingo:</span>
                <span className="text-white">Fechado</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 CNTEAM. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
