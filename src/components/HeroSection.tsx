import React from 'react';
import { Calendar, ArrowRight, UserCheck, ShieldCheck, Heart, Sparkles, Star } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const trustFeatures = [
    {
      icon: UserCheck,
      title: 'Odontólogos Certificados',
      subtitle: 'Atención profesional especializada',
    },
    {
      icon: Sparkles,
      title: 'Última Tecnología Philips',
      subtitle: 'Blanqueamiento y diagnóstico digital',
    },
    {
      icon: Heart,
      title: 'Ambiente Seguro & Cómodo',
      subtitle: 'Tratamientos libres de dolor y ansiedad',
    },
    {
      icon: ShieldCheck,
      title: 'Atención Personalizada',
      subtitle: 'Planes a la medida de tu salud',
    },
  ];

  return (
    <section id="inicio" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-slate-50">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-24 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 border border-brand-200 text-brand-700 text-xs sm:text-sm font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
              Sonrisas Sanas · Futuro Radiante
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Cuidado Dental de <span className="text-brand-600 underline decoration-brand-300 underline-offset-8">Excelencia</span> para una Sonrisa Saludable
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Odontología avanzada, estética dental y blanqueamiento clínico con tecnología de punta y el toque delicado de la <strong>Dra. Zubiri</strong>. Porque cada sonrisa merece el mejor cuidado.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-semibold text-base px-8 py-4 rounded-2xl shadow-lg shadow-brand-600/30 transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Cita Médica</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#casos-clinicos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base px-6 py-4 rounded-2xl border border-slate-200 shadow-sm transition-all"
              >
                <span>Ver Casos de Éxito</span>
              </a>
            </div>

            {/* Micro rating */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                4.9 / 5.0 en Google & Doctoralia (+350 reseñas)
              </span>
            </div>
          </div>

          {/* Right Column: Doctor Hero Image & Floating Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Doctor Main Card Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-brand-100/50 to-white p-3 shadow-2xl border border-white">
                <img
                  src="/images/dra-zubiri-consultorio.png"
                  alt="Dra. Zubiri en consultorio dental"
                  className="w-full h-[460px] object-cover object-top rounded-2xl shadow-inner"
                  loading="eager"
                />

                {/* Floating Handwritten Style Badge (Top Right) */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-100 text-right transform rotate-2">
                  <p className="text-xs font-bold text-brand-800 leading-tight">
                    Una Sonrisa Sana,
                  </p>
                  <p className="text-xs font-semibold text-slate-600">
                    Tu Mejor Versión ♡
                  </p>
                </div>

                {/* Doctor Name Card Badge (Bottom Overlay) */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Dra. Zubiri
                    </h3>
                    <p className="text-xs text-brand-600 font-semibold">
                      Odontología Integral & Estética
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Feature Pills Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-200/80">
          {trustFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3.5"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {feat.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-snug">
                    {feat.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
