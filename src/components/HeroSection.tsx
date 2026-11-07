import React, { useState } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section id="inicio" className="relative pt-10 pb-16 lg:pt-16 lg:pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs faithfully matching template */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Template Eyebrow Badge */}
            <div className="text-brand-600 font-extrabold text-xs tracking-widest uppercase">
              <span className="block">HEALTHY SMILES</span>
              <span className="block -mt-0.5">BRIGHTER TOMORROWS</span>
            </div>

            {/* Template Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Expert Dental Care <br />
              for a Healthier, <br />
              <span className="text-[#006fe6]">Happier You</span>
            </h1>

            {/* Template Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Advanced dental care with a gentle touch. <br className="hidden sm:inline" />
              Because every smile tells a story.
            </p>

            {/* Two Pill Buttons matching template */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#006fe6] hover:bg-[#005bb8] active:scale-95 text-white text-sm sm:text-base font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-brand-600/25 transition-all cursor-pointer"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowVideoModal(true)}
                className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm sm:text-base font-semibold px-6 py-3.5 rounded-full border border-slate-300 shadow-sm transition-all cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-800">
                  <Play className="w-3 h-3 fill-slate-800 translate-x-0.5" />
                </div>
                <span>Watch Our Video</span>
              </button>
            </div>

            {/* 4 Feature Badges in a Row matching template */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-100">
              
              {/* Feature 1: Experienced Dentists */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-brand-600 mb-2">
                  <svg className="w-5 h-5 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
                    <path d="M12 2C8 2 5 4.5 5 8c0 3.5 1.5 7 3 11 1 2.5 2 3 4 3s3-.5 4-3c1.5-4 3-7.5 3-11 0-3.5-3-6-7-6Z" />
                    <path d="M9 12c.5 1.5 1.5 2 3 2s2.5-.5 3-2" />
                  </svg>
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-tight">
                  Experienced Dentists
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Dra. Zubiri & Equipo</p>
              </div>

              {/* Feature 2: Latest Technology */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-brand-600 mb-2">
                  <svg className="w-5 h-5 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-tight">
                  Latest Technology
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Philips Zoom LED</p>
              </div>

              {/* Feature 3: Comfortable & Friendly */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-brand-600 mb-2">
                  <svg className="w-5 h-5 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-tight">
                  Comfortable & Friendly
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Sin dolor ni estrés</p>
              </div>

              {/* Feature 4: Personalized Care */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-brand-600 mb-2">
                  <svg className="w-5 h-5 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-tight">
                  Personalized Care
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Atención integral</p>
              </div>

            </div>

          </div>

          {/* Right Column: Hero Image with Doctor & Handwritten Note */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-lg">
              
              {/* Doctor Main Photograph Frame */}
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="/images/dra-zubiri-consultorio.png"
                  alt="Dra. Zubiri en consulta dental con paciente"
                  className="w-full h-[470px] sm:h-[500px] object-cover object-top"
                />

                {/* Floating Handwritten Style Script (Top-Right) exactly like template */}
                <div className="absolute top-6 right-6 text-right select-none pointer-events-none drop-shadow-sm">
                  <span className="font-handwritten text-3xl sm:text-4xl font-bold text-slate-800 leading-tight block transform rotate-3">
                    A Healthier <br />
                    Smile <br />
                    A Brighter <br />
                    You ♡
                  </span>
                </div>

                {/* Bottom doctor label overlay */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Dra. Zubiri
                    </h3>
                    <p className="text-xs text-brand-600 font-semibold">
                      Odontología Integral & Estética Dental
                    </p>
                  </div>
                  <span className="bg-brand-50 text-brand-700 text-xs font-bold px-2.5 py-1 rounded-full border border-brand-200">
                    Consultorio Activo
                  </span>
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
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Conoce la Experiencia Dental Zubiri
            </h3>
            <div className="aspect-video bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white p-6 text-center">
              <Play className="w-12 h-12 text-brand-400 mb-3 fill-brand-400/20" />
              <p className="text-sm font-semibold">Video Institucional Dental Zubiri</p>
              <p className="text-xs text-slate-400 mt-1 max-w-md">
                Tecnología de vanguardia Philips Zoom, confort para el paciente y diseño de sonrisa con la Dra. Zubiri.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
