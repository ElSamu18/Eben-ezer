import React from 'react';
import { ShieldCheck, RefreshCw, CheckCircle2, Lock, Sparkles, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/referral';

interface GuaranteeBannerProps {
  onScrollToForm?: () => void;
}

export const GuaranteeBanner: React.FC<GuaranteeBannerProps> = ({ onScrollToForm }) => {
  return (
    <section className="py-12 bg-white relative border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Big Guarantee Statement */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide uppercase">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Garantía de Satisfacción Eben-ezer</span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                "Si tu impresión no queda como esperabas,{' '}
                <span className="text-amber-400 underline decoration-amber-400/50 underline-offset-4">
                  la repetimos sin costo
                </span>"
              </h3>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Revisamos la resolución y medidas de tus archivos antes de imprimir. Si existe cualquier falla en los colores, cortes o calidad del papel, asumimos la responsabilidad y te la volvemos a imprimir inmediatamente.
              </p>

              {/* Confidence badges */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-slate-200 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Sin costo por repetición justificada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Revisión previa por WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Atención 1 a 1 sin intermediarios</span>
                </div>
              </div>
            </div>

            {/* Right Column: CTA & Quick WhatsApp Action */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-3">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.mainPhoneDigits}?text=${encodeURIComponent('¡Hola Eben-ezer! Quisiera cotizar una impresión respaldada por su garantía.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl font-heading font-extrabold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 text-center cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-2xl text-emerald-950" />
                <span>Cotizar con Garantía</span>
              </a>

              {onScrollToForm && (
                <button
                  type="button"
                  onClick={onScrollToForm}
                  className="text-xs text-slate-400 hover:text-white underline transition-colors"
                >
                  O llenar formulario abajo
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
