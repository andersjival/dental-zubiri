import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      title: 'Patient-Centered Care',
      subtitle: 'Your comfort comes first.',
      iconSvg: (
        <svg className="w-5 h-5 stroke-brand-600 fill-none stroke-[1.8]" viewBox="0 0 24 24">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
    {
      title: 'Modern Technology',
      subtitle: 'Advanced tools for better results.',
      iconSvg: (
        <svg className="w-5 h-5 stroke-brand-600 fill-none stroke-[1.8]" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
    {
      title: 'Hygienic & Safe',
      subtitle: 'Highest standards of sterilization.',
      iconSvg: (
        <svg className="w-5 h-5 stroke-brand-600 fill-none stroke-[1.8]" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Flexible Appointments',
      subtitle: 'Convenient timings for your busy life.',
      iconSvg: (
        <svg className="w-5 h-5 stroke-brand-600 fill-none stroke-[1.8]" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
  ];

  return (
    <section id="sobre-nosotros" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left: Clinic Photo & Script Note matching template */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[28px] overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80"
                alt="Recepción e instalaciones Dental Zubiri"
                className="w-full h-[420px] object-cover"
              />

              {/* Logo on reception wall mockup watermark */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-slate-100 flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-brand-600 flex items-center justify-center text-white">
                  <svg className="w-3.5 h-3.5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                    <path d="M12 2C8 2 5 4.5 5 8c0 3.5 1.5 7 3 11 1 2.5 2 3 4 3s3-.5 4-3c1.5-4 3-7.5 3-11 0-3.5-3-6-7-6Z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-900">Dental Zubiri</span>
              </div>

              {/* Handwritten script note matching template: Confident Smiles Brighter Lives ♡ */}
              <div className="absolute top-8 right-8 text-right select-none pointer-events-none">
                <span className="font-handwritten text-3xl sm:text-4xl font-bold text-slate-800 leading-tight block transform rotate-2 drop-shadow-sm">
                  Confident <br />
                  Smiles <br />
                  Brighter <br />
                  Lives ♡
                </span>
              </div>
            </div>
          </div>

          {/* Right: Text & 4 Pillars matching template */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-brand-600 font-extrabold text-xs tracking-widest uppercase block mb-1.5">
                ABOUT US
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                More Than Dental Care <br />
                We Care About You
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Dental Zubiri, we combine advanced technology with a compassionate approach to deliver exceptional dental care for you and your family. Your comfort, health, and confidence are always our top priority.
            </p>

            <div>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#006fe6] hover:bg-[#005bb8] active:scale-95 text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-md shadow-brand-600/20 transition-all cursor-pointer"
              >
                <span>Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* 4 Points in a 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {pillars.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                    {item.iconSvg}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-snug mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
