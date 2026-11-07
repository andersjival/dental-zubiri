import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-[32px] overflow-hidden bg-slate-50 border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Smiling Family Photo matching template */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80"
                  alt="Familia sonriente en Dental Zubiri"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Content matching template */}
            <div className="lg:col-span-7 space-y-6 relative">
              
              {/* Handwritten script note: Smiles Change Lives ♡ */}
              <div className="absolute top-0 right-0 hidden sm:block text-right select-none pointer-events-none">
                <span className="font-handwritten text-3xl sm:text-4xl font-bold text-slate-800 block transform rotate-2">
                  Smiles <br />
                  Change <br />
                  Lives ♡
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-md">
                  Healthy Smiles for a Brighter Tomorrow
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-lg leading-relaxed">
                  Book your appointment today and take the first step towards a healthier, happier smile.
                </p>
              </div>

              <div>
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 bg-[#006fe6] hover:bg-[#005bb8] active:scale-95 text-white font-semibold text-sm px-7 py-3 rounded-full shadow-md shadow-brand-600/20 transition-all cursor-pointer"
                >
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* 3 Outline Icons below */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center text-brand-600 shrink-0">
                    <svg className="w-4 h-4 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
                      <path d="M12 2C8 2 5 4.5 5 8c0 3.5 1.5 7 3 11 1 2.5 2 3 4 3s3-.5 4-3c1.5-4 3-7.5 3-11 0-3.5-3-6-7-6Z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    General & Preventive Care
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center text-brand-600 shrink-0">
                    <svg className="w-4 h-4 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
                      <rect x="3" y="8" width="18" height="8" rx="2" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    Cosmetic & Restorative Care
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center text-brand-600 shrink-0">
                    <div className="w-4 h-4 text-brand-600 flex items-center justify-center">
                      <svg className="w-4 h-4 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    Family Dental Care
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
