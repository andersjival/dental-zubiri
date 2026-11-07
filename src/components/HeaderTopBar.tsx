import React, { useState } from 'react';
import { Sparkles, ArrowRight, X, Lock, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface HeaderTopBarProps {
  onOpenBooking?: () => void;
  onOpenAdmin?: () => void;
}

export const HeaderTopBar: React.FC<HeaderTopBarProps> = ({ onOpenBooking, onOpenAdmin }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#0f172a] text-white text-xs sm:text-sm py-2 px-4 border-b border-slate-800 transition-all relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left spacer for centering balance on desktop */}
        <div className="hidden lg:flex items-center gap-2 text-slate-400 text-xs">
          <Phone className="w-3.5 h-3.5 text-brand-400" />
          <span>{CLINIC_INFO.phoneDisplay}</span>
        </div>

        {/* Center: Faithful Announcement matching template */}
        <div className="flex-1 flex items-center justify-center gap-2.5 sm:gap-3 flex-wrap text-center">
          <div className="flex items-center gap-1.5 text-slate-200 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-brand-400 shrink-0" />
            <span>Atención Odontológica Especializada con Tecnología Philips Zoom</span>
          </div>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-slate-900 font-bold text-[11px] sm:text-xs px-3.5 py-1 rounded-full shadow-sm transition-transform active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>Agendar Cita</span>
            <ArrowRight className="w-3 h-3 text-brand-600" />
          </button>
        </div>

        {/* Right side: Doctor Admin & Dismiss button */}
        <div className="flex items-center gap-2">
          {onOpenAdmin && (
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-750 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-colors border border-slate-700/80 cursor-pointer"
              title="Panel confidencial de la doctora"
            >
              <Lock className="w-3 h-3 text-brand-400" />
              <span className="hidden sm:inline">Panel</span> Doctora
            </button>
          )}

          <button
            onClick={() => setIsVisible(false)}
            className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
