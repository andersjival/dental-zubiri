import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Ritika Sharma',
      comment: 'The team at Dental Zubiri is amazing! They made my dental visit so comfortable. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    },
    {
      name: 'Amit Verma',
      comment: "Professional, friendly and gentle. The best dental clinic I've been to. My smile has never looked better!",
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    {
      name: 'Neha Kapoor',
      comment: 'Great experience with my kids too. The staff is so kind and patient. Truly a family-friendly clinic.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section id="testimonios" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-brand-600 font-extrabold text-xs tracking-widest uppercase block mb-1.5">
            WHAT OUR PATIENTS SAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Real Smiles. <br />
            Real Stories.
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
                  <span className="text-xs font-bold text-slate-900">
                    {item.name}
                  </span>
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
