import React from 'react';
import { Heart, Sparkles, ShieldCheck, Clock, ArrowRight, Award } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      icon: Heart,
      title: 'Atención Centrada en el Paciente',
      desc: 'Tu tranquilidad y confort son primero. Tratamientos sin dolor en un ambiente relajado.',
    },
    {
      icon: Sparkles,
      title: 'Tecnología Moderna Philips Zoom',
      desc: 'Herramientas de última generación para diagnósticos certeros y resultados estéticos inmediatos.',
    },
    {
      icon: ShieldCheck,
      title: 'Máxima Bioseguridad e Higiene',
      desc: 'Protocolos hospitalarios estrictos de autoclave y esterilización en cada instrumento.',
    },
    {
      icon: Clock,
      title: 'Citas y Horarios Flexibles',
      desc: 'Agenda fácil en horarios de mañana o tarde, adaptados a tu rutina y compromisos.',
    },
  ];

  return (
    <section id="sobre-nosotros" className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image with clinical badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="/images/dra-zubiri-congreso.png"
                alt="Dra. Zubiri en actualización clínica y tecnología"
                className="w-full h-[520px] object-cover object-center"
              />
              
              {/* Overlay note card */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-600" />
                <span className="text-xs font-bold text-slate-800">
                  Capacitación Continua Philips
                </span>
              </div>

              {/* Floating quote badge */}
              <div className="absolute bottom-6 right-6 bg-brand-900/90 text-white backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-xs border border-brand-700/50">
                <p className="text-xs font-semibold leading-relaxed">
                  "El objetivo no es solo curar un diente, sino transformar la seguridad con la que sonríes ante el mundo."
                </p>
                <span className="block text-[11px] text-brand-300 font-bold mt-2">
                  — {CLINIC_INFO.doctorName}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & 4 Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-brand-600 font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2">
                Sobre Nosotros & Dra. Zubiri
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Más que Odontología, Cuidamos de Ti y Tu Salud
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              En <strong>Dental Zubiri</strong> unimos la ciencia odontológica más avanzada con una genuina vocación de servicio. La <strong>{CLINIC_INFO.doctorName}</strong> cuenta con amplia trayectoria en estética bucodental, blanqueamiento clínico, rehabilitación y odontología preventiva, garantizando a cada paciente un trato cercano y honesto.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid sm:grid-cols-2 gap-5 pt-2">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA action */}
            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>Conocer Horarios Disponibles</span>
                <ArrowRight className="w-4 h-4 text-brand-400" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
