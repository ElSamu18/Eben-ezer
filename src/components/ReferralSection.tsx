import React, { useState } from 'react';
import { Gift, Copy, Check, Share2, Sparkles, Trash2, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  generateReferralCode,
  buildReferralLink,
  buildWhatsAppShareUrl,
  BUSINESS_CONFIG,
} from '../utils/referral';

interface ReferralSectionProps {
  currentStoredCode: string | null;
  onApplyCodeToForm: (code: string) => void;
  onClearStoredCode: () => void;
}

export const ReferralSection: React.FC<ReferralSectionProps> = ({
  currentStoredCode,
  onApplyCodeToForm,
  onClearStoredCode,
}) => {
  const [aliasInput, setAliasInput] = useState('');
  const [generatedCode, setGeneratedCode] = useState<string>('EBEN-AMIGO10');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const referralLink = buildReferralLink(generatedCode, BUSINESS_CONFIG.domainPlaceholder);
  const shareWhatsAppUrl = buildWhatsAppShareUrl(generatedCode, referralLink);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const code = generateReferralCode(aliasInput);
    setGeneratedCode(code);
    setCopiedCode(false);
    setCopiedLink(false);
  };

  const copyToClipboard = async (text: string, type: 'code' | 'link') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'code') {
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2500);
      } else {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      }
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      if (type === 'code') {
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2500);
      } else {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      }
    }
  };

  return (
    <section
      id="referidos"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-orange-950 text-white"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md">
            <Gift className="w-4 h-4 text-slate-950" />
            <span>Programa Oficial de Referidos</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Recomienda y gana{' '}
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200 bg-clip-text text-transparent">
              10% de descuento
            </span>
          </h2>

          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Comparte tu código con un amigo. Cuando haga su primera compra, esa persona recibe
            <strong> 10% de descuento</strong> y tú también recibes <strong>10%</strong> en tu
            próxima compra.
          </p>
        </div>

        {/* Stored referral alert (if active) */}
        {currentStoredCode && (
          <div className="mb-10 max-w-2xl mx-auto bg-amber-500/20 border border-amber-400/40 rounded-2xl p-4 backdrop-blur-md flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div className="text-sm">
                <span className="text-amber-200 font-semibold">Código activo en tu navegador: </span>
                <span className="font-mono font-bold text-white bg-slate-900/60 px-2 py-0.5 rounded-md border border-white/10">
                  {currentStoredCode}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onApplyCodeToForm(currentStoredCode)}
                className="text-xs bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-3 py-1.5 rounded-lg transition-colors"
              >
                Usar en mi cotización
              </button>
              <button
                type="button"
                onClick={onClearStoredCode}
                className="text-xs text-rose-300 hover:text-rose-100 flex items-center gap-1 p-1 hover:bg-rose-500/20 rounded-md"
                title="Eliminar código guardado"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Limpiar</span>
              </button>
            </div>
          </div>
        )}

        {/* Generator Main Card */}
        <div className="max-w-3xl mx-auto bg-slate-900/80 border border-white/20 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8">
          <div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2 flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Genera tu código de referido</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Escribe tu nombre, apodo o el nombre de tu emprendimiento para crear tu cupón exclusivo.
            </p>
          </div>

          {/* Form to generate */}
          <form onSubmit={handleGenerate} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label htmlFor="alias-input" className="sr-only">
                Nombre o alias para el código
              </label>
              <input
                id="alias-input"
                type="text"
                value={aliasInput}
                onChange={(e) => setAliasInput(e.target.value)}
                placeholder="Ejemplo: MARIA, SAMUEL, COPIAS24..."
                maxLength={20}
                className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/25 text-white placeholder-slate-400 font-medium focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm"
              />
            </div>
            <button
              type="submit"
              className="py-3.5 px-6 rounded-xl font-heading font-bold text-sm bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-orange-300 text-slate-950 shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Gift className="w-4 h-4 text-slate-950" />
              <span>Generar mi código</span>
            </button>
          </form>

          {/* Generated Result Display */}
          <div className="bg-slate-950/70 border border-white/15 rounded-2xl p-5 sm:p-6 space-y-5">
            {/* The Code */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                  Tu código único de 10% OFF
                </span>
                <span className="font-mono font-black text-2xl sm:text-3xl text-amber-300 tracking-wider">
                  {generatedCode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => copyToClipboard(generatedCode, 'code')}
                  className="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors focus:ring-2 focus:ring-amber-400"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-amber-400" />
                      <span>Copiar código</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => onApplyCodeToForm(generatedCode)}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold inline-flex items-center gap-1 transition-colors"
                  title="Usar este código en el formulario de cotización abajo"
                >
                  <span>Probar en formulario</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* The Link */}
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                Enlace directo para compartir
              </span>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={referralLink}
                  aria-label="Enlace de referido"
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-slate-300 select-all"
                />
                <button
                  type="button"
                  onClick={() => copyToClipboard(referralLink, 'link')}
                  className="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-colors flex-shrink-0"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">¡Link Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-teal-400" />
                      <span>Copiar link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* WhatsApp Share Button */}
            <div className="pt-2">
              <a
                href={shareWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-heading font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <i className="fa-brands fa-whatsapp text-xl text-white" />
                <span>Compartir código por WhatsApp a un amigo</span>
              </a>
            </div>
          </div>

          {/* Rules and notes */}
          <div className="pt-2 border-t border-white/10 text-xs text-slate-400 space-y-2">
            <p className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">•</span>
              <span>
                <strong>Nota:</strong> El descuento se aplica mencionando el código al cotizar por WhatsApp o seleccionándolo en el formulario.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">•</span>
              <span>
                Válido para clientes en San Fernando de Apure y municipios aledaños.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
