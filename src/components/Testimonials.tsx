import React from 'react';
import { Star, MessageCircleHeart, Quote, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/referral';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatarSeed: string;
  text: string;
  rating: number;
  highlight: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    name: 'Yoselin Rivas',
    role: 'Emprendedora (Dulces & Postres)',
    location: 'San Fernando de Apure',
    avatarSeed: 'yoselin',
    rating: 5,
    highlight: '¡Los stickers quedaron hermosos!',
    text: 'Mandé a imprimir las etiquetas para mis envases de postres y el brillo y corte quedaron perfectos. Además, la atención por WhatsApp fue súper rápida.',
  },
  {
    id: 't2',
    name: 'Lic. Carlos Méndez',
    role: 'Coordinador Educativo',
    location: 'Biruaca / San Fernando',
    avatarSeed: 'carlos',
    rating: 5,
    highlight: 'Calidad impecable en certificados',
    text: 'Excelente servicio en la impresión de 85 diplomas para nuestra graduación. El papel opalina grueso y la nitidez del color dieron una presencia muy profesional.',
  },
  {
    id: 't3',
    name: 'Andrea Castillo',
    role: 'Estudiante Universitaria',
    location: 'San Fernando de Apure',
    avatarSeed: 'andrea',
    rating: 5,
    highlight: 'Fotos carnet al tiro y con el fondo correcto',
    text: 'Tenía que entregar mis recaudos para la universidad y me sacaron las fotos tipo carnet con las medidas exactas. El descuento por referido me cayó de maravilla.',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs sm:text-sm font-semibold">
            <MessageCircleHeart className="w-4 h-4 text-rose-500" />
            <span>Opiniones Reales</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Lo que dicen nuestros clientes en Apure
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            La confianza de nuestra comunidad es nuestra mayor bendición. Conoce la experiencia de quienes ya imprimen con Eben-ezer.
          </p>
        </div>

        {/* Testimonials Grid (3 realistic testimonials) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-slate-200 absolute top-6 right-6 pointer-events-none group-hover:text-amber-200/50 transition-colors" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <h3 className="font-heading font-bold text-slate-900 text-base mb-2">
                  "{item.highlight}"
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-800 text-white font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {item.role} • <span className="text-teal-700 font-medium">{item.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leave a review button */}
        <div className="mt-12 text-center">
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.mainPhoneDigits}?text=${encodeURIComponent(
              '¡Hola Eben-ezer! Quiero compartir una reseña y felicitarlos por el trabajo realizado.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-semibold text-sm transition-colors border border-slate-300"
          >
            <i className="fa-brands fa-google text-amber-500" />
            <span>Déjanos tu reseña</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
