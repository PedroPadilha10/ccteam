
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSectionPB from "@/components/HeroSectionPB";
import AboutSection from "@/components/AboutSection";
import ModalidadesSection from "@/components/ModalidadesSection";
import InstrutoresSection from "@/components/InstrutoresSection";
import PlanosSection from "@/components/PlanosSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="min-h-screen bg-black flex items-center justify-center fixed inset-0 z-50">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-4">
              <span className="text-white">ACADEMIA</span>
              <span className="text-primary ml-2">CNTEAM</span>
            </div>
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary/80 to-primary"
                style={{
                  width: '100%',
                  animation: 'loading 1.5s ease-in-out'
                }}
              ></div>
            </div>
            <style>
              {`
                @keyframes loading {
                  0% { width: 0%; }
                  100% { width: 100%; }
                }
              `}
            </style>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-black text-white overflow-hidden">
          <Navbar />
          <HeroSectionPB />
          <AboutSection />
          <ModalidadesSection />
          <InstrutoresSection />
          <PlanosSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer />

          {/* Cursor effect (optional - follows mouse) */}
          <div
            id="cursor-glow"
            className="fixed w-40 h-40 rounded-full bg-primary/5 filter blur-3xl pointer-events-none z-0"
            style={{
              transform: 'translate(-50%, -50%)',
              opacity: 0,
              transition: 'opacity 0.3s ease-out'
            }}
          ></div>

          <script dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('mousemove', (e) => {
                const cursor = document.getElementById('cursor-glow');
                if (cursor) {
                  cursor.style.opacity = '0.4';
                  cursor.style.left = e.clientX + 'px';
                  cursor.style.top = e.clientY + 'px';
                }
              });

              document.addEventListener('mouseleave', () => {
                const cursor = document.getElementById('cursor-glow');
                if (cursor) {
                  cursor.style.opacity = '0';
                }
              });
            `
          }} />
        </div>
      )}
    </>
  );
};

export default Index;
