import React from 'react';
import { Tag, X, Sparkles } from 'lucide-react';

interface ReferralBannerProps {
  referralCode: string | null;
  onClear: () => void;
  onScrollToForm: () => void;
}

export const ReferralBanner: React.FC<ReferralBannerProps> = ({
  referralCode,
  onClear,
  onScrollToForm,
}) => {
  if (!referralCode) return null;

  return (
    <div
      role="region"
      aria-label="Notificación de referido"
      className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white py-2.5 px-4 shadow-md sticky top-0 z-50 border-b border-amber-300/30"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-sm">
        <div className="flex items-center gap-2 flex-wrap font-medium">
          <span className="inline-flex items-center justify-center p-1 bg-white/20 rounded-full text-white">
            <Sparkles className="w-4 h-4 text-amber-100 animate-pulse" />
          </span>
          <span>
            🎉 <strong>¡Beneficio activado!</strong> Te recomendó{' '}
            <span className="bg-white text-orange-950 font-bold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 shadow-sm font-mono tracking-wide">
              <Tag className="w-3.5 h-3.5 text-orange-600" />
              {referralCode}
            </span>
            . Obtén un <strong>10% de descuento</strong> en tu primera compra en San Fernando de Apure.
          </span>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button
            type="button"
            onClick={onScrollToForm}
            className="bg-slate-900/90 hover:bg-slate-900 text-white font-semibold px-3 py-1 rounded-full text-xs transition-colors shadow-sm focus:ring-2 focus:ring-white"
          >
            Usar descuento ahora
          </button>
          <button
            type="button"
            onClick={onClear}
            className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors"
            title="Quitar código de referido"
            aria-label="Cerrar aviso de código de referido"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
