import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `
    *Novo contato via site*

    • *Nome:* ${form.name}
    • *Email:* ${form.email}
    • *Telefone:* ${form.phone}
    • *Interesse:* ${form.interest}
    • *Mensagem:* ${form.message}
    `.trim();



    const url = `https://wa.me/5584987776762?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-academy-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div>
            <div className="inline-block mb-6">
              <h2 className="text-sm font-semibold tracking-widest text-primary uppercase relative">
                Contato
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
              </h2>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Entre em contato conosco
            </h3>
            
            <p className="text-white/70 mb-8">
              Estamos prontos para tirar suas dúvidas e ajudar você a começar sua jornada nas artes marciais.
              Visite nossa academia ou entre em contato pelos canais abaixo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Telefone</h4>
                  <p className="text-white/70">(84) 98777-6762</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Mail className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">E-mail</h4>
                  <p className="text-white/70">academiacnteam@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Endereço</h4>
                  <p className="text-white/70">Av. Perimetral , 227 - Parnamirim, RN</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-white font-bold mb-4">Horário de Funcionamento</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white font-medium">Segunda à Sexta</p>
                  <p className="text-white/70">08:00 - 22:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-academy border border-white/10 rounded-lg p-8">
            <h4 className="text-xl font-bold text-white mb-6">Envie uma mensagem</h4>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:border-primary"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:border-primary"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-white/80 mb-2 text-sm">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:border-primary"
                  placeholder="(84) 98777-6762"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-white/80 mb-2 text-sm">
                  Interesse
                </label>
                <select
                  id="interest"
                  value={form.interest}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white focus:outline-none focus:border-primary"
                >
                  <option value="" disabled className="bg-academy text-white">Selecione uma opção</option>
                  <option value="Muay Thai" className="bg-academy text-white">Muay Thai</option>
                  <option value="Jiu-Jitsu" className="bg-academy text-white">Jiu-Jitsu</option>
                  <option value="No-gi" className="bg-academy text-white">No-gi</option>
                  <option value="Judô" className="bg-academy text-white">Judô</option>
                  <option value="MMA" className="bg-academy text-white">MMA</option>
                  <option value="Pilates Solo" className="bg-academy text-white">Pilates Solo</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 mb-2 text-sm">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:border-primary resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <Button type="submit" className="w-full">
                ENVIAR MENSAGEM
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
