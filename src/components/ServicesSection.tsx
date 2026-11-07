import React from 'react';
import {
  Sparkles,
  Smile,
  ShieldCheck,
  Stethoscope,
  HeartHandshake,
  Baby,
  ArrowRight,
  Calendar,
} from 'lucide-react';
import { DENTAL_SERVICES } from '../data/dentalData';

interface ServicesSectionProps {
  onSelectServiceToBook: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceToBook }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return Sparkles;
      case 'Smile':
        return Smile;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Stethoscope':
        return Stethoscope;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'Baby':
        return Baby;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-brand-600 font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2">
              Nuestros Tratamientos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Cuidado Dental Integral para Cada Sonrisa
            </h2>
          </div>
          <a
            href="#agendamiento"
            className="inline-flex items-center gap-1.5 text-brand-600 font-bold text-sm hover:text-brand-700 group transition-colors"
          >
            <span>Ver Disponibilidad de Citas</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 6 Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DENTAL_SERVICES.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="group relative bg-slate-50/70 hover:bg-white rounded-3xl p-7 border border-slate-200/80 hover:border-brand-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-brand-600 text-brand-600 group-hover:text-white flex items-center justify-center shadow-md transition-colors duration-300 border border-slate-100">
                      <Icon className="w-7 h-7" />
                    </div>

                    {service.popular && (
                      <span className="bg-brand-100 text-brand-700 text-xs font-bold px-3 py-1 rounded-full border border-brand-200">
                        Destacado
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    {service.category} · {service.estimatedDuration}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    onClick={() => onSelectServiceToBook(service.id)}
                    className="inline-flex items-center gap-2 text-brand-600 font-bold text-sm hover:text-brand-700 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Agendar Cita</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-xs text-slate-400 font-medium">
                    Valoración Incluida
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
