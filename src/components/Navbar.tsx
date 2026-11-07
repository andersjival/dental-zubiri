import React, { useState } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Inicio');

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Casos Clínicos', href: '#casos-clinicos' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Tooth outline matching template */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center text-brand-600 transition-transform group-hover:scale-105">
            <svg
              className="w-9 h-9 stroke-brand-600 fill-none stroke-[1.8]"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C8 2 5 4.5 5 8c0 3.5 1.5 7 3 11 1 2.5 2 3 4 3s3-.5 4-3c1.5-4 3-7.5 3-11 0-3.5-3-6-7-6Z" />
              <path d="M9 12c.5 1.5 1.5 2 3 2s2.5-.5 3-2" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="text-xl font-bold tracking-tight text-slate-900 block group-hover:text-brand-600 transition-colors">
              Dental Zubiri
            </span>
            <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase block -mt-0.5">
              CLÍNICA DENTAL
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeLink === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`text-sm font-semibold transition-colors relative py-1.5 ${
                  isActive ? 'text-brand-600 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Phone & Pill Button */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href={`tel:${CLINIC_INFO.whatsapp}`}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-600 fill-brand-600/10" />
            <span>{CLINIC_INFO.phoneDisplay}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-[#006fe6] hover:bg-[#005bb8] active:scale-95 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-md shadow-brand-600/20 transition-all cursor-pointer"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="sm:hidden bg-[#006fe6] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold"
          >
            Cita ➔
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 animate-fadeIn shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveLink(link.label);
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#006fe6] text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 shadow-md shadow-brand-600/20"
            >
              <span>Agendar Consulta Médica</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
