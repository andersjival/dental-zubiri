import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceToBook: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceToBook }) => {
  const services = [
    {
      id: 'general',
      title: 'General Dentistry',
      subtitle: 'Odontología General',
      desc: 'Routine checkups, cleanings and preventive care.',
      descEs: 'Revisiones rutinarias, limpiezas ultrasónicas y cuidado preventivo.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&auto=format&fit=crop&q=80',
      iconSvg: (
        <svg className="w-5 h-5 stroke-brand-600 fill-none stroke-[1.8]" viewBox="0 0 24 24">
          <path d="M12 2C8 2 5 4.5 5 8c0 3.5 1.5 7 3 11 1 2.5 2 3 4 3s3-.5 4-3c1.5-4 3-7.5 3-11 0-3.5-3-6-7-6Z" />
          <path d="M9 12c.5 1.5 1.5 2 3 2s2.5-.5 3-2" />
        </svg>
      ),
    },
    {
      id: 'ortodoncia',
      title: 'Orthodontics',
      subtitle: 'Ortodoncia & Alineadores',
      desc: 'Braces & clear aligners for a straighter smile.',
      descEs: 'Brackets y alineadores transparentes para una sonrisa alineada.',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=500&auto=format&fit=crop&q=80',
      iconSvg: (
        <svg className="w-5 h-5 stroke-brand-600 fill-none stroke-[1.8]" viewBox="0 0 24 24">
          <rect x="3" y="8" width="18" height="8" rx="2" />
          <line x1="7" y1="8" x2="7" y2="16" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="17" y1="8" x2="17" y2="16" />
        </svg>
      ),
    },
    {
      id: 'implantes',
      title: 'Dental Implants',
      subtitle: 'Implantes Dentales',
      desc: 'A permanent solution for missing teeth.',
      descEs: 'Una solución permanente y fija para piezas dentales perdidas.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&auto=format&fit=crop&q=80',
      iconSvg: (
        <svg className="w-5 h-5 stroke-brand-600 fill-none stroke-[1.8]" viewBox="0 0 24 24">
          <path d="M12 2v6" />
          <path d="M8 8h8l-1.5 14h-5L8 8z" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="9.5" y1="16" x2="14.5" y2="16" />
        </svg>
      ),
    },
    {
      id: 'blanqueamiento',
      title: 'Teeth Whitening',
      subtitle: 'Blanqueamiento Philips',
      desc: 'Brighter, whiter smile in just one visit.',
      descEs: 'Sonrisa más brillante y blanca en una sola sesión clínica.',
      image: '/images/blanqueamiento-caso1.png',
      iconSvg: (
        <svg className="w-5 h-5 stroke-brand-600 fill-none stroke-[1.8]" viewBox="0 0 24 24">
          <path d="M12 2C8 2 5 4.5 5 8c0 3.5 1.5 7 3 11 1 2.5 2 3 4 3s3-.5 4-3c1.5-4 3-7.5 3-11 0-3.5-3-6-7-6Z" />
          <path d="m16 8 2-2m-2 0 2 2" />
        </svg>
      ),
    },
    {
      id: 'odontopediatria',
      title: 'Kids Dentistry',
      subtitle: 'Odontopediatría',
      desc: 'Gentle, friendly care for growing smiles.',
      descEs: 'Cuidado delicado y amigable para las sonrisas en crecimiento.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&auto=format&fit=crop&q=80',
      iconSvg: (
        <svg className="w-5 h-5 stroke-brand-600 fill-none stroke-[1.8]" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
    },
    {
      id: 'diseno-sonrisa',
      title: 'Cosmetic Dentistry',
      subtitle: 'Estética & Carillas',
      desc: 'Enhance your smile with modern solutions.',
      descEs: 'Realza tu sonrisa con soluciones estéticas de alta definición.',
      image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=500&auto=format&fit=crop&q=80',
      iconSvg: (
        <svg className="w-5 h-5 stroke-brand-600 fill-none stroke-[1.8]" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="servicios" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching template faithfully */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-brand-600 font-extrabold text-xs tracking-widest uppercase block mb-1.5">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Dental Care for Every Smile
            </h2>
          </div>

          <a
            href="#agendamiento"
            className="inline-flex items-center gap-1.5 text-slate-800 hover:text-brand-600 font-bold text-sm transition-colors group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-slate-800 group-hover:text-brand-600" />
          </a>
        </div>

        {/* 6 Cards Grid matching template layout exactly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-brand-300 p-3 pb-5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Image Box */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 mb-5">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Circular White Badge overlapping bottom left */}
                  <div className="absolute -bottom-3 left-3 w-10 h-10 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center">
                    {srv.iconSvg}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2 px-1">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-[12px] text-slate-500 leading-snug line-clamp-2">
                    {srv.desc}
                  </p>
                </div>
              </div>

              {/* Action Link: Learn More -> */}
              <div className="pt-4 px-1">
                <button
                  onClick={() => onSelectServiceToBook(srv.id)}
                  className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-bold text-xs group-hover:underline cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
