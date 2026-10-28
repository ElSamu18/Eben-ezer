import React from 'react';
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/referral';

export interface ServiceItem {
  id: string;
  formValue: string;
  title: string;
  description: string;
  faIcon: string;
  badge?: string;
  popular?: boolean;
}

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'copias',
    formValue: 'Copias',
    title: 'Copias',
    description: 'Copias de documentos en blanco y negro y a color, rápidas y nítidas.',
    faIcon: 'fa-solid fa-copy',
    badge: 'Express',
  },
  {
    id: 'impresiones',
    formValue: 'Impresiones a color y en blanco y negro',
    title: 'Impresiones a color y en blanco y negro',
    description: 'Impresión de documentos, tareas, planos y más con la mejor calidad.',
    faIcon: 'fa-solid fa-print',
    popular: true,
    badge: 'Más pedido',
  },
  {
    id: 'stickers',
    formValue: 'Stickers',
    title: 'Stickers',
    description: 'Stickers y etiquetas personalizadas para tu negocio, evento o marca.',
    faIcon: 'fa-solid fa-tags',
    popular: true,
    badge: 'Negocios',
  },
  {
    id: 'certificados',
    formValue: 'Diseño e impresión de certificados',
    title: 'Diseño e impresión de certificados',
    description: 'Certificados, diplomas y reconocimientos con diseño profesional.',
    faIcon: 'fa-solid fa-award',
    badge: 'Institucional',
  },
  {
    id: 'fotos-carnet',
    formValue: 'Fotos tipo carnet',
    title: 'Fotos tipo carnet',
    description: 'Fotos tamaño carnet listas para trámites, con fondo y medidas correctas.',
    faIcon: 'fa-solid fa-id-card',
    badge: 'Trámites',
  },
  {
    id: 'otra-cosa',
    formValue: 'Otro / Consulta personalizada',
    title: '¿Necesitas otra cosa?',
    description: 'Cuéntanos qué necesitas y te cotizamos sin compromiso.',
    faIcon: 'fa-solid fa-wand-magic-sparkles',
    badge: 'A la medida',
  },
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="servicios" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-900 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Nuestros Servicios en San Fernando de Apure</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Todo lo que necesitas para imprimir, presentar y destacar
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Combinamos tecnología de impresión de alta definición con materiales de primera para
            garantizar acabados impecables en cada trabajo.
          </p>
        </div>

        {/* WhatsApp Channel Catalog Banner */}
        <div className="mb-12 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-400/30">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/25 flex items-center justify-center text-3xl text-white flex-shrink-0 shadow-inner">
              <i className="fa-brands fa-whatsapp" />
            </div>
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-200 block">
                ¡Catálogo Oficial en Línea!
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                Ver catálogo completo de todos los servicios
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 max-w-xl">
                Accede a nuestro Canal Oficial de WhatsApp para ver muestras fotográficas, listas de precios, nuevos materiales y opciones disponibles.
              </p>
            </div>
          </div>
          <a
            href={BUSINESS_CONFIG.catalogChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-950 font-heading font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition-all transform hover:scale-105 flex-shrink-0"
          >
            <i className="fa-brands fa-whatsapp text-xl text-emerald-600" />
            <span>Abrir Catálogo Completo</span>
            <ExternalLink className="w-4 h-4 text-emerald-700" />
          </a>
        </div>

        {/* Services Grid (5 cards + 1 custom card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const isCustom = service.id === 'otra-cosa';

            return (
              <div
                key={service.id}
                className={`relative group rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                  isCustom
                    ? 'bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 text-white shadow-xl hover:shadow-2xl hover:-translate-y-1'
                    : 'bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {/* Popular or custom badge */}
                {service.badge && (
                  <span
                    className={`absolute top-6 right-6 text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full ${
                      isCustom
                        ? 'bg-amber-400 text-slate-950'
                        : service.popular
                        ? 'bg-orange-100 text-orange-700 border border-orange-200'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {service.badge}
                  </span>
                )}

                <div>
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-xs transition-transform group-hover:scale-110 ${
                      isCustom
                        ? 'bg-white/10 text-amber-400 border border-white/20'
                        : 'bg-blue-50 text-blue-800 border border-blue-100'
                    }`}
                  >
                    <i className={service.faIcon} />
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-heading font-bold text-xl mb-3 ${
                      isCustom ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isCustom ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Card Action */}
                <button
                  type="button"
                  onClick={() => onSelectService(service.formValue)}
                  className={`w-full py-3 px-4 rounded-xl font-heading font-bold text-sm inline-flex items-center justify-center gap-2 transition-all ${
                    isCustom
                      ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md'
                      : 'bg-slate-900 hover:bg-blue-900 text-white shadow-xs'
                  }`}
                >
                  <span>Cotizar {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom banner for paper & quality note */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0 text-xl font-bold">
              <i className="fa-solid fa-file-shield" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-slate-900">
                Variedad de papeles y acabados
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                Bond, fotográfico brillante, opalina, papel adhesivo brillante y mate para todas tus necesidades.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onSelectService('Otro / Consulta personalizada')}
            className="px-5 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-blue-900 bg-blue-50 hover:bg-blue-100 transition-colors flex-shrink-0"
          >
            Consultar material
          </button>
        </div>
      </div>
    </section>
  );
};
