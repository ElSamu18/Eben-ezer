import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/referral';

interface FaqItem {
  question: string;
  answer: string;
}

export const faqsData: FaqItem[] = [
  {
    question: '¿Hacen envíos o entregas a domicilio?',
    answer:
      'Atendemos en San Fernando de Apure. Consulta por WhatsApp según tu ubicación para coordinar entregas directas o retiro céntrico.',
  },
  {
    question: '¿Cuánto tarda mi pedido?',
    answer:
      'Depende del tipo y volumen del trabajo; los pedidos pequeños (copias, fotos tipo carnet, impresiones básicas) suelen estar listos el mismo día o al día siguiente.',
  },
  {
    question: '¿Cómo puedo pagar?',
    answer:
      'Aceptamos efectivo (bolívares y divisas), Pago Móvil de cualquier banco y transferencia bancaria nacional.',
  },
  {
    question: '¿Puedo pedir muestras o revisar el diseño antes de imprimir?',
    answer:
      '¡Por supuesto! Escríbenos por WhatsApp, te asesoramos con las dimensiones y enviamos una vista previa digital antes de mandar a producción.',
  },
  {
    question: '¿Qué formatos de archivo reciben para imprimir?',
    answer:
      'Recibimos archivos en PDF, Word, PowerPoint, imágenes en alta resolución (JPG, PNG), archivos de diseño o fotos enviadas directamente por WhatsApp o correo electrónico.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold">
            <HelpCircle className="w-4 h-4 text-blue-700" />
            <span>Respuestas Rápidas</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-600 text-base">
            Todo lo que necesitas saber antes de encargar tus impresiones en Eben-ezer.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-slate-900 hover:text-blue-900 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
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

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-200/60 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 bg-blue-50 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base">
              ¿Tienes otra duda que no esté aquí?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Estamos en línea para responder cualquier duda en minutos.
            </p>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.mainPhoneDigits}?text=${encodeURIComponent('¡Hola Eben-ezer! Tengo una consulta sobre sus servicios.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xs transition-colors"
          >
            <i className="fa-brands fa-whatsapp text-emerald-400 text-base" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
