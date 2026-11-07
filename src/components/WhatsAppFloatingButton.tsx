import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

export const WhatsAppFloatingButton: React.FC = () => {
  const defaultMessage = encodeURIComponent(
    '¡Hola Dra. Zubiri! Quisiera información sobre citas de valoración y blanqueamiento dental.'
  );
  const waUrl = `https://wa.me/${CLINIC_INFO.whatsapp}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      <div className="hidden md:block mr-3 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        ¿Dudas o urgencias? Escríbenos por WhatsApp
      </div>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};
