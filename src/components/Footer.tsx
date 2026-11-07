import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface FooterProps {
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  return (
    <footer id="contacto" className="bg-white text-slate-600 text-xs border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
          
          {/* Col 1: Brand & Socials */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 text-brand-600 flex items-center justify-center">
                <svg
                  className="w-8 h-8 stroke-brand-600 fill-none stroke-[1.8]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8 2 5 4.5 5 8c0 3.5 1.5 7 3 11 1 2.5 2 3 4 3s3-.5 4-3c1.5-4 3-7.5 3-11 0-3.5-3-6-7-6Z" />
                  <path d="M9 12c.5 1.5 1.5 2 3 2s2.5-.5 3-2" />
                </svg>
              </div>
              <div>
                <span className="text-base font-bold text-slate-900 block leading-tight">
                  Dental Zubiri
                </span>
                <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase block">
                  CLÍNICA DENTAL
                </span>
              </div>
            </div>

            <p className="text-slate-500 text-[11px] leading-tight font-medium">
              Sonrisas Saludables. Vidas Más Radiantes.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-slate-300 hover:border-brand-600 hover:text-brand-600 flex items-center justify-center text-slate-600 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-slate-300 hover:border-brand-600 hover:text-brand-600 flex items-center justify-center text-slate-600 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-slate-300 hover:border-brand-600 hover:text-brand-600 flex items-center justify-center text-slate-600 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs tracking-wider uppercase mb-3">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-slate-600 text-xs">
              <li><a href="#inicio" className="hover:text-brand-600">Inicio</a></li>
              <li><a href="#sobre-nosotros" className="hover:text-brand-600">Sobre Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-brand-600">Tratamientos</a></li>
              <li><a href="#casos-clinicos" className="hover:text-brand-600">Casos Clínicos</a></li>
              <li><a href="#testimonios" className="hover:text-brand-600">Testimonios</a></li>
              <li><a href="#contacto" className="hover:text-brand-600">Contacto</a></li>
            </ul>
          </div>

          {/* Col 3: Tratamientos */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs tracking-wider uppercase mb-3">
              Nuestros Tratamientos
            </h4>
            <ul className="space-y-2 text-slate-600 text-xs">
              <li><a href="#servicios" className="hover:text-brand-600">Odontología General</a></li>
              <li><a href="#servicios" className="hover:text-brand-600">Ortodoncia & Alineadores</a></li>
              <li><a href="#servicios" className="hover:text-brand-600">Implantes Dentales</a></li>
              <li><a href="#servicios" className="hover:text-brand-600">Blanqueamiento Philips</a></li>
              <li><a href="#servicios" className="hover:text-brand-600">Odontopediatría</a></li>
              <li><a href="#servicios" className="hover:text-brand-600">Diseño de Sonrisa</a></li>
              <li><a href="#agendamiento" className="text-brand-600 font-semibold hover:underline">Urgencias Dentales</a></li>
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs tracking-wider uppercase mb-3">
              Contacto & Horarios
            </h4>
            <ul className="space-y-2.5 text-slate-600 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-800 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                <a href={`tel:${CLINIC_INFO.whatsapp}`} className="hover:text-brand-600 font-medium">
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-800 shrink-0 mt-0.5" />
                <div>
                  <p>Lunes a Sábado: 9:00 AM – 7:00 PM</p>
                  <p className="text-[11px] text-slate-400">Domingos: Solo Urgencias</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 5: Handwritten Script Note en Español */}
          <div className="flex flex-col items-start lg:items-end justify-center pt-4 lg:pt-0">
            <div className="text-left lg:text-right select-none pointer-events-none">
              <span className="font-handwritten text-3xl sm:text-4xl font-bold text-slate-800 leading-tight block transform rotate-3">
                Una Sonrisa <br />
                Más Sana y <br />
                Feliz ♡
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar en Español */}
        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Clínica Dental Zubiri. Todos los derechos reservados.</p>
          
          <div className="flex items-center gap-5">
            <span className="hover:text-slate-600 cursor-pointer">Aviso de Privacidad</span>
            <span className="hover:text-slate-600 cursor-pointer">Términos del Servicio</span>
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="text-brand-600 hover:text-brand-700 font-semibold cursor-pointer underline"
              >
                Acceso Doctora
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
