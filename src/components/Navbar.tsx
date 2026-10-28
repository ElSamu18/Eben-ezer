import React, { useState } from 'react';
import { Menu, X, MessageSquareQuote, Gift, PhoneCall, Code, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/referral';

interface NavbarProps {
  onOpenHtmlModal?: () => void;
  referralCode?: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenHtmlModal, referralCode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Portafolio', href: '#portafolio' },
    { label: 'Cómo Funciona', href: '#como-funciona' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Referidos (10% OFF)', href: '#referidos', badge: '10%' },
    { label: 'Preguntas', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Slogan */}
          <a
            href="#inicio"
            className="flex items-center gap-3.5 group focus:outline-hidden focus:ring-2 focus:ring-blue-600 rounded-lg p-1"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white shadow-sm border border-slate-200 flex-shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/assets/aistudio/1792579283927_420327b5.jpg"
                alt="Logo Eben-ezer - Donde la variedad encuentra la fe"
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-2xl tracking-tight text-blue-950 group-hover:text-blue-700 transition-colors">
                Eben-ezer
              </span>
              <span className="text-xs font-medium text-slate-500 tracking-wide hidden sm:inline-block">
                {BUSINESS_CONFIG.slogan}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-900 rounded-lg hover:bg-slate-100/80 transition-colors"
              >
                {link.label}
                {link.badge && (
                  <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Actions: Canal de Catálogo, Cotizar button & HTML export button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={BUSINESS_CONFIG.catalogChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/90 rounded-lg transition-colors shadow-2xs"
              title="Ver el catálogo completo de todos los servicios en nuestro Canal de WhatsApp"
            >
              <i className="fa-brands fa-whatsapp text-sm text-emerald-600" />
              <span>Ver Catálogo</span>
              <ExternalLink className="w-3 h-3 text-emerald-600" />
            </a>

            {onOpenHtmlModal && (
              <button
                type="button"
                onClick={onOpenHtmlModal}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
                title="Ver y copiar el código HTML estático para copiar y pegar"
              >
                <Code className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Código HTML</span>
              </button>
            )}

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquareQuote className="w-4 h-4 text-amber-400" />
              <span>Cotizar</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#contacto"
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 flex items-center gap-1"
            >
              <MessageSquareQuote className="w-3.5 h-3.5 text-amber-400" />
              Cotizar
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-blue-900 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-1" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-blue-900 hover:bg-blue-50 transition-colors"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={BUSINESS_CONFIG.catalogChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-sm"
              >
                <i className="fa-brands fa-whatsapp text-lg text-white" />
                <span>Ver Catálogo Completo en WhatsApp</span>
                <ExternalLink className="w-4 h-4 text-emerald-100" />
              </a>

              <a
                href={`https://wa.me/${BUSINESS_CONFIG.mainPhoneDigits}?text=${encodeURIComponent('¡Hola Eben-ezer! Quisiera más información sobre sus servicios de impresión en San Fernando de Apure.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>WhatsApp: {BUSINESS_CONFIG.mainPhone}</span>
              </a>

              {onOpenHtmlModal && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenHtmlModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200"
                >
                  <Code className="w-3.5 h-3.5" />
                  Ver y exportar código HTML (único archivo)
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
