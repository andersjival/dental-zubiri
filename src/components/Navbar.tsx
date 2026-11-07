import React, { useState } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { label: 'Casos Clínicos', href: '#casos-clinicos' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Agendar Cita', href: '#agendamiento' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white shadow-md shadow-brand-500/25 group-hover:scale-105 transition-transform">
            <svg
              className="w-6 h-6 stroke-current fill-none stroke-[2]"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C8 2 5 4.5 5 8c0 3.5 1.5 7 3 11 1 2.5 2 3 4 3s3-.5 4-3c1.5-4 3-7.5 3-11 0-3.5-3-6-7-6Z" />
              <path d="M9 12c.5 1.5 1.5 2 3 2s2.5-.5 3-2" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
                Dental Zubiri
              </span>
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
            </div>
            <span className="block text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
              Clínica Odontológica & Estética
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-brand-600 after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href={`tel:${CLINIC_INFO.whatsapp}`}
            className="hidden xl:flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
              <Phone className="w-4 h-4" />
            </div>
            <span>{CLINIC_INFO.phoneDisplay}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 active:scale-95 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-brand-600/25 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Cita</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="sm:hidden bg-brand-600 text-white p-2 rounded-lg text-xs font-semibold flex items-center gap-1"
          >
            <Calendar className="w-4 h-4" />
            <span>Cita</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-brand-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-brand-600/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Cita Médica</span>
            </button>
            <a
              href={`tel:${CLINIC_INFO.whatsapp}`}
              className="w-full border border-slate-200 text-slate-700 font-medium py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 text-sm"
            >
              <Phone className="w-4 h-4 text-brand-600" />
              <span>Llamar al {CLINIC_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
