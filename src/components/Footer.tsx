import React from 'react';
import { MapPin, Mail, Phone, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/referral';

interface FooterProps {
  onOpenHtmlModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenHtmlModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white p-1 overflow-hidden flex-shrink-0 shadow-sm">
                <img
                  src="/assets/aistudio/1792579283927_420327b5.jpg"
                  alt="Eben-ezer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
                  Eben-ezer
                </span>
                <p className="text-xs text-amber-400 font-medium">
                  "{BUSINESS_CONFIG.slogan}"
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Tu imprenta de confianza en San Fernando de Apure. Calidad fotográfica, copias de alta
              definición, stickers comerciales y atención cálida con base en la fe.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-white flex items-center justify-center transition-all border border-slate-800"
                aria-label="Instagram de Eben-ezer"
              >
                <i className="fa-brands fa-instagram text-lg" />
              </a>
              <a
                href={BUSINESS_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-600 text-white flex items-center justify-center transition-all border border-slate-800"
                aria-label="Facebook de Eben-ezer"
              >
                <i className="fa-brands fa-facebook-f text-lg" />
              </a>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.mainPhoneDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white flex items-center justify-center transition-all border border-slate-800"
                aria-label="WhatsApp principal"
              >
                <i className="fa-brands fa-whatsapp text-lg" />
              </a>
              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-amber-600 text-white flex items-center justify-center transition-all border border-slate-800"
                aria-label="Correo electrónico"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-white text-base">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="hover:text-amber-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-amber-400 transition-colors">
                  Servicios de Impresión
                </a>
              </li>
              <li>
                <a href="#portafolio" className="hover:text-amber-400 transition-colors">
                  Portafolio de Trabajos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-amber-400 transition-colors">
                  ¿Cómo Funciona?
                </a>
              </li>
              <li>
                <a href="#referidos" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Programa de Referidos</span>
                  <span className="text-[10px] font-bold bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded-full">
                    10% OFF
                  </span>
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-amber-400 transition-colors">
                  Cotizar por WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-white text-base">
              Contacto y Ubicación
            </h4>

            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.location}</span>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div>
                    <span className="text-xs text-slate-400 block">WhatsApp Principal:</span>
                    <a
                      href={`https://wa.me/${BUSINESS_CONFIG.mainPhoneDigits}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono hover:text-emerald-300"
                    >
                      {BUSINESS_CONFIG.mainPhone}
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">WhatsApp Secundario:</span>
                    <a
                      href={`https://wa.me/${BUSINESS_CONFIG.secondaryPhoneDigits}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono hover:text-emerald-300"
                    >
                      {BUSINESS_CONFIG.secondaryPhone}
                    </a>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${BUSINESS_CONFIG.email}`}
                  className="hover:text-amber-300 break-all"
                >
                  {BUSINESS_CONFIG.email}
                </a>
              </li>
            </ul>

            {onOpenHtmlModal && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenHtmlModal}
                  className="text-xs text-slate-400 hover:text-amber-400 underline flex items-center gap-1"
                >
                  <i className="fa-solid fa-code text-xs" />
                  <span>Descargar / Copiar archivo index.html único</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2025 Eben-ezer. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Hecho con dedicación en San Fernando de Apure</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
