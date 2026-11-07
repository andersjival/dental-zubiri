import React from 'react';
import { Phone, Clock, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

export const HeaderTopBar: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="inline-flex items-center gap-1.5 bg-brand-600/30 text-brand-300 px-2 py-0.5 rounded-full text-[11px] font-medium border border-brand-500/20">
            <Sparkles className="w-3 h-3 text-brand-400" /> Tecnología Philips Zoom
          </span>
          <span className="hidden md:inline text-slate-400">|</span>
          <span className="hidden md:inline">Consultas y valoraciones de estética dental con la Dra. Zubiri</span>
        </div>

        <div className="flex items-center gap-4 text-slate-300 font-medium">
          <a
            href={`tel:${CLINIC_INFO.whatsapp}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-400" />
            <span>{CLINIC_INFO.phoneDisplay}</span>
          </a>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-brand-400" />
            <span>Lun - Sáb: 9:00 - 19:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
