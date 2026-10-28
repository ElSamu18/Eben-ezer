import React from 'react';
import { MessageCircle, ArrowDownCircle, Sparkles, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/referral';

interface HeroProps {
  onScrollToServices: () => void;
  referralCode?: string | null;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToServices, referralCode }) => {
  const whatsappHeroUrl = `https://wa.me/${BUSINESS_CONFIG.mainPhoneDigits}?text=${encodeURIComponent(
    referralCode
      ? `¡Hola Eben-ezer! Vengo con el código de referido *${referralCode}* para obtener 10% de descuento en impresiones.`
      : '¡Hola Eben-ezer! Me gustaría consultar por sus servicios de impresión en San Fernando de Apure.'
  )}`;

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-blue-900 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background visual accents */}
      <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        {/* Subtle grid pattern */}
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-amber-300">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{BUSINESS_CONFIG.slogan}</span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-teal-400" /> San Fernando de Apure
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight sm:leading-none text-white">
              Impresiones que hacen{' '}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                crecer tu negocio
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Copias, impresiones a color y blanco y negro, stickers, certificados y fotos tipo
              carnet. Calidad profesional en San Fernando de Apure.
            </p>

            {/* Referral perk alert */}
            <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-amber-400/30 rounded-2xl p-4 backdrop-blur-xs max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-bold text-slate-950 flex-shrink-0 text-sm shadow-md">
                  10%
                </div>
                <div className="text-left text-xs sm:text-sm">
                  <p className="font-bold text-amber-200">¡Programa de Referidos Activo!</p>
                  <p className="text-slate-300">
                    Recomienda a un amigo y ambos reciben <strong>10% de descuento</strong> en sus impresiones.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-heading font-bold text-base text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <i className="fa-brands fa-whatsapp text-2xl text-emerald-950" />
                <span>Cotiza por WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onScrollToServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-heading font-semibold text-base text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all backdrop-blur-xs"
              >
                <span>Ver servicios</span>
                <ArrowDownCircle className="w-5 h-5 text-amber-300" />
              </button>
            </div>

            {/* Highlights checklist */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Entrega rápida</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Resolución nítida</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Pago Móvil / Efectivo</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Brand Card with Official Eben-ezer Logo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-teal-500 to-amber-400 rounded-3xl blur-2xl opacity-40 transform -rotate-3" />

              {/* Main Card */}
              <div className="relative bg-slate-900/90 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl text-center space-y-6">
                <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 rounded-2xl bg-white p-3 shadow-inner flex items-center justify-center overflow-hidden border border-slate-100">
                  <img
                    src="/assets/aistudio/1792579283927_420327b5.jpg"
                    alt="Eben-ezer - Donde la variedad encuentra la fe"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-2 right-2 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs">
                    Original
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-2xl text-white">
                    Eben-ezer
                  </h2>
                  <p className="text-amber-400 font-medium text-xs tracking-wider uppercase mt-1">
                    {BUSINESS_CONFIG.slogan}
                  </p>
                  <p className="text-slate-400 text-xs mt-2">
                    Tu centro de copias, impresiones y personalización en San Fernando de Apure.
                  </p>
                </div>

                {/* Quick stats mini-row */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-left">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <span className="block text-amber-400 font-extrabold text-lg sm:text-xl font-heading">
                      100%
                    </span>
                    <span className="text-slate-400 text-xs">Garantía de calidad</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <span className="block text-emerald-400 font-extrabold text-lg sm:text-xl font-heading">
                      Mismo Día
                    </span>
                    <span className="text-slate-400 text-xs">Atención express</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>Atendemos pedidos personales, estudiantiles y corporativos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
