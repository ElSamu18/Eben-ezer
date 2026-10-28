import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  FileText,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Paperclip,
  Link as LinkIcon,
  HelpCircle,
  CreditCard,
  Banknote,
  Send
} from 'lucide-react';
import {
  QuoteFormState,
  buildWhatsAppQuoteUrl,
  BUSINESS_CONFIG,
} from '../utils/referral';
import { servicesData } from './Services';

interface QuoteFormProps {
  initialService?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<QuoteFormState>({
    name: '',
    service: initialService || 'Impresiones a color y en blanco y negro',
    quantity: '',
    fileSource: 'Lo enviaré directo por el chat de WhatsApp (PDF / Imagen)',
    fileUrl: '',
    description: '',
  });

  const [errors, setErrors] = useState<{ name?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  // Sync when initialService changes externally (e.g. from service card click)
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleQuickQuantity = (qty: string) => {
    setFormData((prev) => ({ ...prev, quantity: qty }));
  };

  const validate = (): boolean => {
    const newErrors: { name?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Por favor ingresa tu nombre para saber cómo dirigirnos a ti.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate WhatsApp URL
    const whatsappUrl = buildWhatsAppQuoteUrl(formData, BUSINESS_CONFIG.mainPhoneDigits);
    setSubmitted(true);

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="py-20 bg-slate-50 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact context & Trust triggers */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs sm:text-sm font-semibold">
              <MessageSquare className="w-4 h-4 text-blue-700" />
              <span>Sin Fricción • Cotización Inmediata</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Pide tu presupuesto por WhatsApp en segundos
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              No te pedimos registrarte ni llenar formularios largos. Tu número se detecta automáticamente al abrirse el chat y te responderemos con precio cerrado y tiempo de entrega.
            </p>

            {/* Direct Guarantee Box */}
            <div className="p-5 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border-2 border-amber-400/60 rounded-3xl space-y-2">
              <div className="flex items-center gap-2.5 text-amber-900 font-heading font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>Garantía de Satisfacción 100%</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>"Si tu impresión no queda como esperabas, la repetimos sin costo"</strong>. Revisamos resolución, sangrías y colores antes de mandar a imprimir.
              </p>
            </div>

            {/* Benefit / Channel boxes */}
            <div className="space-y-3 pt-1">
              <a
                href={BUSINESS_CONFIG.catalogChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 rounded-2xl border border-emerald-200 transition-colors shadow-2xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <i className="fa-brands fa-whatsapp text-xl" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading font-bold text-emerald-950 text-sm group-hover:text-emerald-700 transition-colors">
                      Catálogo oficial en WhatsApp
                    </h4>
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs text-emerald-600" />
                  </div>
                  <p className="text-xs text-emerald-800/90 mt-0.5">
                    ¿Quieres ver más fotos y opciones? Revisa nuestro Canal Oficial de WhatsApp.
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm">
                    Revisión gratuita de archivos
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Envíanos tus documentos en PDF, imagen o enlace para verificar que no salgan borrosos.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct contact alternatives */}
            <div className="p-6 bg-blue-950 text-white rounded-3xl space-y-4 shadow-lg">
              <h4 className="font-heading font-bold text-base text-white">
                Líneas de atención en San Fernando de Apure:
              </h4>

              <div className="space-y-2.5 text-sm">
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.mainPhoneDigits}?text=${encodeURIComponent('¡Hola Eben-ezer! Quisiera hacer una consulta directa sobre impresiones.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/15"
                >
                  <div className="flex items-center gap-2.5">
                    <i className="fa-brands fa-whatsapp text-emerald-400 text-lg" />
                    <span>WhatsApp Principal:</span>
                  </div>
                  <strong className="font-mono text-emerald-300">{BUSINESS_CONFIG.mainPhone}</strong>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.secondaryPhoneDigits}?text=${encodeURIComponent('¡Hola Eben-ezer! Quisiera hacer una consulta sobre sus servicios.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/15"
                >
                  <div className="flex items-center gap-2.5">
                    <i className="fa-brands fa-whatsapp text-teal-400 text-lg" />
                    <span>WhatsApp Secundario:</span>
                  </div>
                  <strong className="font-mono text-teal-300">{BUSINESS_CONFIG.secondaryPhone}</strong>
                </a>
              </div>

              <p className="text-[11px] text-slate-300">
                Horario: Lunes a Sábado. Respondemos con prontitud.
              </p>
            </div>
          </div>

          {/* Right Column: High-Conversion Clean Form (No Phone Requirement) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl relative">
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-2xl text-slate-900">
                    Formulario de Solicitud
                  </h3>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Directo a WhatsApp
                  </span>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Solo necesitamos saber tu nombre y lo que buscas. Tu teléfono se identificará al abrirse WhatsApp.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-emerald-900">
                    <p className="font-bold">¡Mensaje preparado con éxito!</p>
                    <p className="text-emerald-700 mt-0.5">
                      Se ha abierto WhatsApp en una nueva pestaña. Si no se abrió automáticamente,{' '}
                      <a
                        href={buildWhatsAppQuoteUrl(formData, BUSINESS_CONFIG.mainPhoneDigits)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-bold text-emerald-950"
                      >
                        haz clic aquí para abrirlo ahora
                      </a>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* 1. Nombre completo (Único campo obligatorio) */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Tu nombre o cómo llamarte <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ejemplo: Samuel Alexander López"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 ${
                      errors.name
                        ? 'border-rose-400 focus:ring-rose-500 bg-rose-50/30'
                        : 'border-slate-300 focus:ring-blue-600 bg-slate-50/50'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* 2. Servicio de interés */}
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Servicio de interés <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  >
                    {servicesData.map((svc) => (
                      <option key={svc.id} value={svc.formValue}>
                        {svc.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Cantidad aproximada con botones rápidos */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="quantity" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Cantidad aproximada <span className="text-slate-400 font-normal lowercase">(opcional)</span>
                    </label>
                    <span className="text-[11px] text-slate-400">Atendemos desde 1 unidad</span>
                  </div>
                  <input
                    id="quantity"
                    name="quantity"
                    type="text"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Ej: 50 copias, 100 stickers, 1 certificado..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  />
                  {/* Quick chips */}
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="text-[11px] text-slate-500 font-medium">Sugerencias:</span>
                    {['10 unidades', '50 copias', '100 stickers', 'A convenir'].map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => handleQuickQuantity(chip)}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Archivo / Diseño (Fricción cero) */}
                <div>
                  <label htmlFor="fileSource" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    ¿Tienes el archivo o diseño listo?
                  </label>
                  <select
                    id="fileSource"
                    name="fileSource"
                    value={formData.fileSource}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="Lo enviaré directo por el chat de WhatsApp (PDF / Imagen)">
                      📁 Lo enviaré directo por el chat de WhatsApp (PDF / Imagen)
                    </option>
                    <option value="Tengo enlace de Google Drive o Canva">
                      🔗 Tengo enlace de Google Drive o Canva
                    </option>
                    <option value="Necesito asesoría / apoyo con el diseño">
                      💡 Necesito asesoría / apoyo con el diseño
                    </option>
                  </select>

                  {/* Conditionally show link input if user chooses Google Drive / Canva */}
                  {formData.fileSource === 'Tengo enlace de Google Drive o Canva' && (
                    <div className="mt-2.5 animate-in fade-in duration-150">
                      <input
                        type="url"
                        name="fileUrl"
                        value={formData.fileUrl || ''}
                        onChange={handleChange}
                        placeholder="Pega aquí el enlace de Google Drive, Canva o nube (opcional)"
                        className="w-full px-4 py-2.5 rounded-xl border border-teal-300 bg-teal-50/30 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  )}
                </div>

                {/* 5. Comentarios o detalles */}
                <div>
                  <label htmlFor="description" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Detalles del trabajo <span className="text-slate-400 font-normal lowercase">(opcional)</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={2}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tipo de papel (bond, fotográfico, adhesivo), colores, fecha requerida o cualquier indicación..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 resize-none"
                  />
                </div>

                {/* 6. High-Contrast CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl font-heading font-extrabold text-base text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp text-2xl text-emerald-950" />
                    <span>Pedir Presupuesto por WhatsApp (Respuesta Rápida)</span>
                  </button>
                </div>

                {/* 7. Badges de pago seguro y confianza cerca del CTA */}
                <div className="pt-3 border-t border-slate-100 space-y-3">
                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      <i className="fa-solid fa-mobile-screen-button text-emerald-600" />
                      Pago Móvil Inmediato
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1.5 text-amber-700">
                      <i className="fa-solid fa-money-bill-wave text-amber-600" />
                      Efectivo Bs / Divisas
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1.5 text-teal-700">
                      <i className="fa-solid fa-building-columns text-teal-600" />
                      Transferencias
                    </span>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Garantía: Si tu impresión no queda como esperabas, la repetimos sin costo</span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
