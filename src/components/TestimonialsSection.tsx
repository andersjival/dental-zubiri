import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Carolina Mendiola',
      role: 'Paciente de Blanqueamiento',
      comment: '¡El equipo de Dental Zubiri es increíble! Hicieron que mi visita fuera muy cómoda y sin dolor. El blanqueamiento superó mis expectativas.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    },
    {
      name: 'Roberto Valenzuela',
      role: 'Paciente de Ortodoncia',
      comment: 'Profesionales, amables y muy delicados en su trato. La mejor clínica dental a la que he ido. ¡Mi sonrisa nunca se había visto mejor!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    {
      name: 'Mariana Fuentes',
      role: 'Mamá de Paciente Infantil',
      comment: 'Excelente experiencia con mis hijos. La doctora tiene una paciencia infinita y logró que perdieran el miedo al dentista. 100% recomendada.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section id="testimonios" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header 100% en Español */}
        <div className="mb-12">
          <span className="text-brand-600 font-extrabold text-xs tracking-widest uppercase block mb-1.5">
            OPINIONES DE NUESTROS PACIENTES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Sonrisas Reales. <br />
            Historias Reales.
          </h2>
        </div>

        {/* 3 Testimonials in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between"
            >
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                "{item.comment}"
              </p>

              {/* Bottom user + 5 stars */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-brand-600 font-medium block leading-tight">
                      {item.role}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
