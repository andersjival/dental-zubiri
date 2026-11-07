import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/dentalData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonios" className="py-16 sm:py-24 bg-slate-50/60 border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand-600 font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2">
            Opiniones de Nuestros Pacientes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sonrisas Reales. Historias Reales.
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            La confianza de nuestros pacientes es nuestro mayor orgullo. Conoce cómo transformamos su experiencia dental.
          </p>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              {/* Patient Card Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={item.avatarUrl}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-100"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 inline" />
                  </h4>
                  <span className="text-xs text-brand-600 font-medium">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
