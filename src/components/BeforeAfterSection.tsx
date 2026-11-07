import React from 'react';
import { Sparkles, Calendar, CheckCircle2 } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data/dentalData';

interface BeforeAfterSectionProps {
  onSelectServiceToBook: (serviceId: string) => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onSelectServiceToBook }) => {
  return (
    <section id="casos-clinicos" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            Casos Clínicos Reales
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Antes y Después: Sonrisas Transformadas
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Evidencia fotográfica tomada directamente en el consultorio de la Dra. Zubiri. Resultados visibles e inmediatos desde la primera sesión con tecnología Philips Zoom.
          </p>
        </div>

        {/* 2 Real Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {BEFORE_AFTER_CASES.map((caso) => (
            <div
              key={caso.id}
              className="bg-slate-50/80 rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative bg-slate-900 group">
                <img
                  src={caso.image}
                  alt={caso.title}
                  className="w-full h-80 sm:h-96 object-contain bg-slate-900 transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                  Caso Documentado
                </div>
                <div className="absolute top-4 right-4 bg-brand-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  Sesión Única
                </div>
              </div>

              {/* Case Information */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {caso.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {caso.subtitle}
                  </p>

                  <div className="space-y-2 mb-6 bg-white p-4 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                      <span><strong>Técnica:</strong> {caso.technique}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Resultado:</strong> {caso.shadeResult}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onSelectServiceToBook('blanqueamiento')}
                  className="w-full btn-glass-primary py-3.5 text-sm gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Quiero mi Cita de Blanqueamiento</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Note Guarantee */}
        <div className="mt-10 bg-brand-50/60 border border-brand-200/80 rounded-2xl p-4 sm:p-5 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <Sparkles className="w-5 h-5 text-brand-600 shrink-0" />
          <p className="text-xs sm:text-sm text-brand-900 font-medium">
            <strong>Garantía de Cuidado:</strong> Todos nuestros tratamientos de blanqueamiento incluyen valoración previa de salud gingival y gel remineralizante desensibilizante.
          </p>
        </div>

      </div>
    </section>
  );
};
