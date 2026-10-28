import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/referral';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqsData: FaqItem[] = [
  {
    id: 'formatos',
    question: '¿Qué formatos de archivo reciben para imprimir?',
    answer:
      'Recibimos archivos en PDF (el formato más recomendado), Microsoft Word, PowerPoint, imágenes en alta resolución (JPG, PNG) y diseños exportados desde Canva o Illustrator.',
  },
  {
    id: 'enviar-archivos',
    question: '¿Cómo les envío mis archivos sin que pierdan calidad?',
    answer:
      'Te recomendamos enviar tus archivos por WhatsApp seleccionando la opción "Documento" en lugar de "Galería/Foto", para que WhatsApp no comprima la resolución original. Si tienes muchos archivos o pesan más de 100MB, puedes compartirnos un enlace de Google Drive o Canva.',
  },
  {
    id: 'tiempos',
    question: '¿Cuánto tarda en estar listo mi pedido?',
    answer:
      'Los trabajos rápidos (copias, impresiones de documentos, fotos tipo carnet y pequeñas cantidades de stickers) suelen estar listos el mismo día. Para pedidos de mayor volumen o diseño personalizado, coordinamos contigo el tiempo exacto antes de mandar a producción.',
  },
  {
    id: 'envios',
    question: '¿Hacen envíos o entregas a domicilio en San Fernando de Apure?',
    answer:
      '¡Sí! Realizamos entregas directas a domicilio debidamente protegidas en sobre sellado con nuestro sello de garantía, o puedes retirar tu pedido en nuestro punto de atención en San Fernando de Apure.',
  },
  {
    id: 'garantia',
    question: '¿Qué garantía tengo si la impresión no queda como esperaba?',
    answer:
      'Nuestra política es clara y transparente: "Si tu impresión no queda como esperabas, la repetimos sin costo". Siempre enviamos una vista previa digital o confirmamos los detalles antes de imprimir.',
  },
  {
    id: 'pago',
    question: '¿Cuáles son las formas de pago aceptadas?',
    answer:
      'Aceptamos Pago Móvil de cualquier banco nacional (Banco Mercantil, Venezuela, Banesco, etc.), efectivo en bolívares y divisas, y transferencias bancarias directas.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold">
            <HelpCircle className="w-4 h-4 text-blue-700" />
            <span>Respuestas Claras y Rápidas</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Todo lo que necesitas saber antes de encargar tus impresiones en Eben-ezer.
          </p>
        </div>

        {/* Accordion (Accessible with ARIA attributes) */}
        <div className="space-y-4" role="region" aria-label="Preguntas Frecuentes">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const headingId = `faq-heading-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <h3>
                  <button
                    id={headingId}
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-slate-900 hover:text-blue-900 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-slate-200 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-blue-50 text-blue-700 border-blue-200' : 'text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-200/60 animate-in fade-in duration-150"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base">
              ¿Tienes otra duda o un pedido especial?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Escríbenos por WhatsApp y te orientamos sin compromiso.
            </p>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.mainPhoneDigits}?text=${encodeURIComponent('¡Hola Eben-ezer! Tengo una consulta sobre sus servicios de impresión.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xs transition-colors flex-shrink-0"
          >
            <i className="fa-brands fa-whatsapp text-emerald-400 text-base" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
