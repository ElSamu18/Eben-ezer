import React, { useState } from 'react';
import { Eye, ArrowUpRight, Sparkles, Filter } from 'lucide-react';

export interface PortfolioItem {
  id: string;
  seed: string;
  title: string;
  category: string;
  description: string;
  serviceMap: string;
}

interface PortfolioProps {
  onWantSomethingLikeThis: (item: PortfolioItem) => void;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p1',
    seed: 'eben1',
    title: 'Certificados Personalizados',
    category: 'Certificados',
    description: 'Diplomas con papel opalina de alto gramaje, sellos dorados y tipografía formal.',
    serviceMap: 'Diseño e impresión de certificados',
  },
  {
    id: 'p2',
    seed: 'eben2',
    title: 'Stickers para Emprendimientos',
    category: 'Stickers',
    description: 'Etiquetas circulares y troqueladas resistentes al agua para empaques comerciales.',
    serviceMap: 'Stickers',
  },
  {
    id: 'p3',
    seed: 'eben3',
    title: 'Fotos Tipo Carnet para Trámites',
    category: 'Fotografía',
    description: 'Fondo blanco o azul reglamentario, corte milimétrico para pasaporte, cédula y títulos.',
    serviceMap: 'Fotos tipo carnet',
  },
  {
    id: 'p4',
    seed: 'eben4',
    title: 'Impresiones a Color Alta Definición',
    category: 'Impresiones',
    description: 'Gráficos vivos, presentaciones académicas, manuales y folletos informativos.',
    serviceMap: 'Impresiones a color y en blanco y negro',
  },
  {
    id: 'p5',
    seed: 'eben5',
    title: 'Copias y Documentos Nítidos',
    category: 'Copias',
    description: 'Juegos de copias engrapadas, foliadas y listas para entregas legales o académicas.',
    serviceMap: 'Copias',
  },
  {
    id: 'p6',
    seed: 'eben6',
    title: 'Etiquetas y Papelería Comercial',
    category: 'Stickers',
    description: 'Branding para pequeños negocios, microperforados y recordatorios para eventos.',
    serviceMap: 'Stickers',
  },
];

export const Portfolio: React.FC<PortfolioProps> = ({ onWantSomethingLikeThis }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  const categories = ['Todos', 'Certificados', 'Stickers', 'Impresiones', 'Fotografía', 'Copias'];

  const filteredItems =
    activeFilter === 'Todos'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portafolio" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Galería de Trabajos Realizados</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Nuestros trabajos hablan por nosotros
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Descubre algunos de los proyectos impresos con amor, fe y dedicación para clientes de
            San Fernando de Apure.
          </p>

          {/* Filter badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (6 images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const imageUrl = `https://picsum.photos/seed/${item.seed}/400/300`;

            return (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                  <img
                    src={imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  />

                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/70 text-white backdrop-blur-md">
                    {item.category}
                  </span>

                  {/* Dark gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <h3 className="font-heading font-bold text-lg leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 mb-4">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onWantSomethingLikeThis(item)}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-heading font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
                      >
                        <span>Quiero algo así</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedImage(item)}
                        className="p-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white backdrop-blur-xs transition-colors"
                        title="Ver detalle"
                        aria-label={`Ver detalle de ${item.title}`}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Below image card content (visible on mobile / non-hover) */}
                <div className="p-5 flex flex-col justify-between sm:hidden group-hover:hidden">
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">{item.description}</p>
                  <button
                    type="button"
                    onClick={() => onWantSomethingLikeThis(item)}
                    className="w-full py-2 px-3 rounded-lg bg-blue-900 text-white text-xs font-bold"
                  >
                    Quiero algo así
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for previewing zoomed image */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
              <div className="relative aspect-[4/3] w-full bg-slate-100">
                <img
                  src={`https://picsum.photos/seed/${selectedImage.seed}/600/450`}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center backdrop-blur-xs text-sm"
                  aria-label="Cerrar vista previa"
                >
                  ✕
                </button>
              </div>
              <div className="p-6 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900">
                  {selectedImage.category}
                </span>
                <h3 id="modal-title" className="font-heading font-bold text-xl text-slate-900">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-slate-600">{selectedImage.description}</p>
                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const item = selectedImage;
                      setSelectedImage(null);
                      onWantSomethingLikeThis(item);
                    }}
                    className="flex-1 py-3 px-4 rounded-xl font-heading font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Cotizar este trabajo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedImage(null)}
                    className="py-3 px-5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
