import React, { useState } from 'react';
import { X, MessageSquare, PhoneCall } from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/referral';

interface FloatingWhatsAppProps {
  referralCode?: string | null;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ referralCode }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.mainPhoneDigits}?text=${encodeURIComponent(
    referralCode
      ? `¡Hola Eben-ezer! Tengo el código de referido *${referralCode}* (10% de descuento). Quisiera consultar por una impresión.`
      : '¡Hola Eben-ezer! Quisiera pedir una cotización para un trabajo de impresión en San Fernando de Apure.'
  )}`;

  return (
    <aside
      aria-label="Acceso rápido por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group select-none"
    >
      {/* Interactive Tooltip bubble */}
      {showTooltip && (
        <div className="bg-white text-slate-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-slate-200/80 max-w-xs flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping flex-shrink-0" />
          <p className="font-medium">
            ¿Tienes dudas o archivos? <strong>¡Escríbenos al WhatsApp!</strong>
          </p>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5 rounded-full ml-1"
            aria-label="Cerrar sugerencia de WhatsApp"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 transform hover:scale-110 active:scale-95 transition-all focus:outline-hidden focus:ring-4 focus:ring-emerald-300 relative"
        aria-label="Contactar por WhatsApp a Eben-ezer"
      >
        <i className="fa-brands fa-whatsapp text-3xl sm:text-4xl" />

        {/* 10% OFF floating badge if referral code is active */}
        {referralCode && (
          <span className="absolute -top-1.5 -left-1.5 bg-amber-400 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full shadow-md border border-white">
            -10%
          </span>
        )}
      </a>
    </aside>
  );
};
