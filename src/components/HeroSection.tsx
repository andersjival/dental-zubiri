import React, { useState } from 'react';
import { ArrowRight, Play, X, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section id="inicio" className="relative bg-white pt-4 pb-10 sm:pt-6 sm:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UNIFIED BANNER CONTAINER: Text + Photo together in the exact same box */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-white via-white to-sky-50/40 border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-12">
          
          {/* DESKTOP BACKGROUND PHOTO (lg and up): Seamlessly blended on the right of the same container */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[48%] xl:w-[46%] pointer-events-none overflow-hidden">
            <img
              src="/images/hero-patient.png"
              alt="Paciente sonriendo en revisión dental con especialista"
              className="w-full h-full object-cover object-left"
            />
            {/* Smooth gradient blend into the white text area */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/30 to-transparent pointer-events-none" />
            
            {/* Top-right subtle badge */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-white/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold text-slate-800">
                Atención Clínica Activa
              </span>
            </div>
          </div>

          {/* MOBILE / TABLET VIEW: Prominent Photo at the top inside the same container */}
          <div className="block lg:hidden mb-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200/80 aspect-[16/10] sm:aspect-[2/1] relative bg-slate-100">
              <img
                src="/images/hero-patient.png"
                alt="Paciente sonriendo en revisión dental"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-slate-800 shadow-sm border border-white/80 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#006fe6]" />
                <span>Sonrisas Radiantes</span>
              </div>
            </div>
          </div>

          {/* CONTENT SECTION (Shares the same container) */}
          <div className="relative z-10 max-w-2xl text-left space-y-6">
            
            {/* Eyebrow in Spanish */}
            <div className="text-[#006fe6] font-extrabold text-[11px] sm:text-xs tracking-[0.2em] uppercase leading-relaxed">
              <span className="block">SONRISAS SALUDABLES</span>
              <span className="block -mt-0.5">FUTURO MÁS BRILLANTE</span>
            </div>

            {/* Main Heading in Spanish */}
            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold tracking-tight text-slate-900 leading-[1.14]">
              Cuidado Dental Experto <br />
              para una Sonrisa Sana, <br />
              <span className="text-[#006fe6]">Más Feliz</span>
            </h1>

            {/* Subtitle in Spanish */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-lg leading-relaxed font-normal">
              Cuidado dental avanzado con un trato delicado. <br className="hidden sm:inline" />
              Porque cada sonrisa cuenta una historia.
            </p>

            {/* Two Pill Action Buttons with Liquid Glass Style */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                onClick={onOpenBooking}
                className="btn-glass-primary px-8 py-3.5 text-sm sm:text-base gap-2.5 w-full sm:w-auto"
              >
                <span>Agendar una Cita</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowVideoModal(true)}
                className="btn-glass-secondary px-6 py-3.5 text-sm sm:text-base gap-2.5 w-full sm:w-auto"
              >
                <div className="w-6 h-6 rounded-full bg-slate-900/5 flex items-center justify-center text-slate-800">
                  <Play className="w-3 h-3 fill-slate-800 translate-x-0.5" />
                </div>
                <span>Ver Video</span>
              </button>
            </div>

            {/* 4 Feature Badges inside the same container */}
            <div className="grid grid-cols-2 sm:grid-cols-4 pt-6 sm:pt-8 border-t border-slate-200/80 gap-3 sm:gap-0">
              
              {/* Feature 1: Dentistas Especialistas */}
              <div className="sm:pr-3">
                <div className="w-8 h-8 text-[#006fe6] flex items-center justify-start mb-1.5">
                  <svg className="w-6 h-6 stroke-[#006fe6] fill-none stroke-[1.8]" viewBox="0 0 24 24">
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
              <div className="sm:border-l sm:border-slate-200 sm:px-3">
                <div className="w-8 h-8 text-[#006fe6] flex items-center justify-start mb-1.5">
                  <svg className="w-6 h-6 stroke-[#006fe6] fill-none stroke-[1.8]" viewBox="0 0 24 24">
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
              <div className="sm:border-l sm:border-slate-200 sm:px-3">
                <div className="w-8 h-8 text-[#006fe6] flex items-center justify-start mb-1.5">
                  <svg className="w-6 h-6 stroke-[#006fe6] fill-none stroke-[1.8]" viewBox="0 0 24 24">
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
              <div className="sm:border-l sm:border-slate-200 sm:pl-3">
                <div className="w-8 h-8 text-[#006fe6] flex items-center justify-start mb-1.5">
                  <svg className="w-6 h-6 stroke-[#006fe6] fill-none stroke-[1.8]" viewBox="0 0 24 24">
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
