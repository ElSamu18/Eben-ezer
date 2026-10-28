import React, { useState } from 'react';
import { MessageCircle, Star, ShieldCheck, CheckCircle2, ZoomIn, X, Heart, ExternalLink } from 'lucide-react';

interface RealTestimonial {
  id: string;
  name: string;
  service: string;
  avatarText: string;
  rating: number;
  highlight: string;
  quote: string;
  imageSrc: string;
  imageAlt: string;
  timeTag: string;
  badge: string;
}

export const Testimonials: React.FC = () => {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string; name: string } | null>(null);

  const realTestimonials: RealTestimonial[] = [
    {
      id: 'marimar-nino',
      name: 'Marimar Niño',
      service: 'Fotos tipo carnet con envío a domicilio',
      avatarText: 'MN',
      rating: 5,
      highlight: '¡Recibí a domicilio con empaque sellado!',
      quote:
        'Excelente atención y rapidez. Mis fotos tipo carnet llegaron perfectamente selladas en su sobre oficial de Eben-ezer directo a donde me encontraba.',
      imageSrc: '/testimonials/marimar-nino.jpg',
      imageAlt: 'Captura de cliente Marimar Niño recibiendo fotos tipo carnet con empaque y sticker Eben-ezer',
      timeTag: '3:58 p.m.',
      badge: 'Envío a domicilio verificado',
    },
    {
      id: 'jhoncar-perez',
      name: 'Jhoncar Pérez',
      service: 'Impresiones con facilidad de pago',
      avatarText: 'JP',
      rating: 5,
      highlight: 'De la mano con los estudiantes',
      quote:
        'Gracias a la empresa Ebenezer por siempre estar de la mano con los estudiantes. Éxitos y bendiciones. Facilidades de pago y atención de primera.',
      imageSrc: '/testimonials/jhoncar-perez.jpg',
      imageAlt: 'Captura de chat de WhatsApp con agradecimiento de Jhoncar Pérez por apoyo a estudiantes y facilidad de pago',
      timeTag: '1:43 a.m.',
      badge: 'Cliente recurrente verificado',
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Prueba Social Auténtica</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Lo que dicen quienes ya confían en <span className="whitespace-nowrap">Eben-ezer</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Conversaciones 100% reales de clientes en San Fernando de Apure. Sin testimonios inventados.
          </p>
        </div>

        {/* 2 Real Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {realTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-800 text-amber-300 font-heading font-bold flex items-center justify-center text-base shadow-sm">
                      {t.avatarText}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-slate-900 text-lg flex items-center gap-1.5">
                        <span>{t.name}</span>
                        <span title="Cliente verificado" className="inline-flex">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                        </span>
                      </h3>
                      <p className="text-xs text-blue-900 font-semibold">{t.service}</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {t.badge}
                  </span>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-3" aria-label="Calificación 5 de 5 estrellas">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1.5">5.0 / 5.0</span>
                </div>

                {/* Highlight text & Quote */}
                <p className="text-sm sm:text-base text-slate-800 font-medium italic mb-5 leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  "{t.quote}"
                </p>

                {/* Real WhatsApp Chat Screenshot Thumbnail */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Captura directa de WhatsApp
                    </span>
                    <span className="text-slate-400 text-[11px]">{t.timeTag}</span>
                  </div>

                  <div
                    onClick={() => setActiveImage({ src: t.imageSrc, alt: t.imageAlt, name: t.name })}
                    className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 cursor-pointer group/img max-h-64 flex items-center justify-center"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveImage({ src: t.imageSrc, alt: t.imageAlt, name: t.name });
                      }
                    }}
                    aria-label={`Ver comprobante real de ${t.name} en pantalla completa`}
                  >
                    <img
                      src={t.imageSrc}
                      alt={t.imageAlt}
                      loading="lazy"
                      className="w-full h-56 object-cover object-center group-hover/img:scale-105 transition-transform duration-300 opacity-95 group-hover/img:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end justify-between p-3.5">
                      <span className="text-xs text-white font-medium flex items-center gap-1 drop-shadow-sm">
                        <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                        Reacción real del cliente
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-950 bg-white/90 hover:bg-white px-2.5 py-1 rounded-full shadow-md backdrop-blur-xs">
                        <ZoomIn className="w-3 h-3" />
                        Ampliar captura
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 text-slate-600">
                  <i className="fa-solid fa-location-dot text-teal-600" />
                  San Fernando de Apure
                </span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <i className="fa-brands fa-whatsapp text-emerald-600" />
                  Atención confirmada
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for Fullscreen Screenshot View */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-w-lg w-full bg-slate-900 rounded-3xl p-4 border border-white/20 shadow-2xl text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <div className="flex items-center gap-2">
                  <i className="fa-brands fa-whatsapp text-emerald-400 text-lg" />
                  <span className="font-heading font-bold text-sm text-white">
                    Comprobante real de {activeImage.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveImage(null)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="Cerrar vista ampliada"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden bg-black flex items-center justify-center max-h-[70vh]">
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
                />
              </div>

              <div className="pt-3 flex items-center justify-between text-xs text-slate-400">
                <span>San Fernando de Apure, Venezuela</span>
                <button
                  type="button"
                  onClick={() => setActiveImage(null)}
                  className="text-amber-400 hover:underline font-semibold"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
