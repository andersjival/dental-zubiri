import React, { useState } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section id="inicio" className="relative bg-white pt-6 pb-12 lg:pt-10 lg:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Grid matching template image */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Spanish Typography & Actions matching uploaded template */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left z-10">
            
            {/* Eyebrow in Spanish */}
            <div className="text-[#006fe6] font-extrabold text-[11px] sm:text-xs tracking-[0.2em] uppercase leading-relaxed">
              <span className="block">SONRISAS SALUDABLES</span>
              <span className="block -mt-0.5">FUTURO MÁS BRILLANTE</span>
            </div>

            {/* Main Heading in Spanish with 3-line cadence */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Cuidado Dental Experto <br />
              para una Sonrisa Sana, <br />
              <span className="text-[#006fe6]">Más Feliz</span>
            </h1>

            {/* Subtitle in Spanish */}
            <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed font-normal">
              Cuidado dental avanzado con un trato delicado. <br className="hidden sm:inline" />
              Porque cada sonrisa cuenta una historia.
            </p>

            {/* Two Pill Action Buttons with Liquid Glass & Frosted Glass Style */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onOpenBooking}
                className="btn-glass-primary px-8 py-3.5 text-sm sm:text-base gap-2.5"
              >
                <span>Agendar una Cita</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowVideoModal(true)}
                className="btn-glass-secondary px-6 py-3.5 text-sm sm:text-base gap-2.5"
              >
                <div className="w-6 h-6 rounded-full bg-slate-900/5 flex items-center justify-center text-slate-800">
                  <Play className="w-3 h-3 fill-slate-800 translate-x-0.5" />
                </div>
                <span>Ver Video</span>
              </button>
            </div>

            {/* 4 Feature Badges with Vertical Dividers matching reference image */}
            <div className="grid grid-cols-2 sm:grid-cols-4 pt-8 border-t border-slate-100">
              
              {/* Feature 1: Dentistas Especialistas */}
              <div className="pr-3 pb-3 sm:pb-0">
                <div className="w-9 h-9 text-[#006fe6] flex items-center justify-start mb-2">
                  <svg className="w-7 h-7 stroke-[#006fe6] fill-none stroke-[1.8]" viewBox="0 0 24 24">
                    <path d="M12 2C8 2 5 4.5 5 8c0 3.5 1.5 7 3 11 1 2.5 2 3 4 3s3-.5 4-3c1.5-4 3-7.5 3-11 0-3.5-3-6-7-6Z" />
                    <path d="M9 12c.5 1.5 1.5 2 3 2s2.5-.5 3-2" />
                  </svg>
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-tight">
                  Dentistas
                </h4>
                <p className="text-xs font-bold text-slate-900 leading-tight">
                  Especialistas
                </p>
              </div>

              {/* Feature 2: Última Tecnología */}
              <div className="sm:border-l sm:border-slate-200 px-3 pb-3 sm:pb-0">
                <div className="w-9 h-9 text-[#006fe6] flex items-center justify-start mb-2">
                  <svg className="w-7 h-7 stroke-[#006fe6] fill-none stroke-[1.8]" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-tight">
                  Última
                </h4>
                <p className="text-xs font-bold text-slate-900 leading-tight">
                  Tecnología
                </p>
              </div>

              {/* Feature 3: Ambiente Cómodo */}
              <div className="sm:border-l sm:border-slate-200 px-3">
                <div className="w-9 h-9 text-[#006fe6] flex items-center justify-start mb-2">
                  <svg className="w-7 h-7 stroke-[#006fe6] fill-none stroke-[1.8]" viewBox="0 0 24 24">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-tight">
                  Ambiente Cómodo
                </h4>
                <p className="text-xs font-bold text-slate-900 leading-tight">
                  y Agradable
                </p>
              </div>

              {/* Feature 4: Atención Personalizada */}
              <div className="sm:border-l sm:border-slate-200 pl-3">
                <div className="w-9 h-9 text-[#006fe6] flex items-center justify-start mb-2">
                  <svg className="w-7 h-7 stroke-[#006fe6] fill-none stroke-[1.8]" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-tight">
                  Atención
                </h4>
                <p className="text-xs font-bold text-slate-900 leading-tight">
                  Personalizada
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Seamless Patient Image matching template with handwritten note */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 group">
              <img
                src="/images/hero-patient.png"
                alt="Paciente atendida por especialista dental en Dental Zubiri"
                className="w-full h-[400px] sm:h-[480px] lg:h-[500px] object-cover object-center transition-transform duration-500 group-hover:scale-102"
              />

              {/* Subtle fade left to blend with text on desktop */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/60 to-transparent pointer-events-none hidden sm:block" />

              {/* Handwritten Script Note in Spanish matching reference image */}
              <div className="absolute top-6 right-6 text-right select-none pointer-events-none drop-shadow-md">
                <span className="font-handwritten text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-800 leading-tight block transform rotate-2">
                  Una Sonrisa <br />
                  Más Sana, <br />
                  Un Tú Más <br />
                  Radiante ♡
                </span>
                {/* Decorative underline curve matching reference */}
                <div className="w-16 h-1 bg-[#006fe6]/60 rounded-full ml-auto mt-1 transform rotate-2" />
              </div>

              {/* Floating Doctor Credential Badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <img
                  src="/images/dra-zubiri-consultorio.png"
                  alt="Dra. Zubiri"
                  className="w-10 h-10 rounded-full object-cover border border-brand-500 shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">
                    Dra. Zubiri
                  </h4>
                  <p className="text-[11px] text-brand-600 font-semibold leading-tight">
                    Odontología Integral & Estética Dental
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Video Modal if clicked */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full p-6 relative">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Conoce el Cuidado Dental Zubiri
            </h3>
            <div className="aspect-video bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white p-6 text-center">
              <Play className="w-12 h-12 text-brand-400 mb-3 fill-brand-400/20" />
              <p className="text-sm font-semibold">Video de Presentación Clínica</p>
              <p className="text-xs text-slate-400 mt-1 max-w-md">
                Tecnología de última generación Philips Zoom, confort para el paciente y diseño de sonrisa con la Dra. Zubiri.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
