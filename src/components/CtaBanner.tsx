import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Sparkles, Heart } from 'lucide-react';

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-14 bg-gradient-to-r from-brand-600 via-brand-700 to-sky-700 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Empieza Hoy Mismo
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Sonrisas Saludables para un Mejor Mañana
          </h2>

          <p className="text-brand-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Reserva tu consulta con la Dra. Zubiri hoy mismo y da el primer paso hacia una salud bucal duradera y una sonrisa brillante.
          </p>

          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 active:scale-95 text-brand-700 font-bold text-base px-8 py-4 rounded-2xl shadow-xl transition-all cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-brand-600" />
              <span>Agendar mi Consulta Médica</span>
              <ArrowRight className="w-4 h-4 text-brand-600" />
            </button>
          </div>

          {/* 3 bottom points matching template */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/20 text-xs sm:text-sm font-semibold text-brand-100">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-200" />
              <span>General & Preventiva</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-200" />
              <span>Estética & Blanqueamiento</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 text-brand-200" />
              <span>Cuidado Familiar Dental</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
