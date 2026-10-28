import React, { useState, useEffect } from 'react';
import { MessageSquare, FileText, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
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
    phone: '',
    service: initialService || 'Impresiones a color y en blanco y negro',
    quantity: '',
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

  const validate = (): boolean => {
    const newErrors: { name?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Por favor ingresa tu nombre completo.';
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
    <section id="contacto" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact context and direct numbers */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs sm:text-sm font-semibold">
              <MessageSquare className="w-4 h-4 text-blue-700" />
              <span>Cotización Inmediata</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Pide tu cotización personalizada sin compromiso
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Completa el formulario y te responderemos al instante por WhatsApp con el presupuesto exacto,
              opciones de acabado y tiempo de entrega.
            </p>

            {/* Benefit boxes */}
            <div className="space-y-3 pt-2">
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
                      Catálogo completo en WhatsApp
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
                    Revisión de archivos por WhatsApp
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Puedes enviarnos tus PDFs, fotos o documentos directamente en el chat para verificar la resolución.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm">
                    Precios justos y transparentes
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Cotizamos al mayor y al detal para estudiantes, profesionales y negocios locales.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct contact alternatives */}
            <div className="p-6 bg-blue-950 text-white rounded-3xl space-y-4 shadow-lg">
              <h4 className="font-heading font-bold text-base text-white">
                Líneas directas de atención en Apure:
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
                Horario de atención: Lunes a Sábado. Respondemos con prontitud.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl relative">
              <div className="mb-6">
                <h3 className="font-heading font-bold text-2xl text-slate-900">
                  Formulario de Solicitud
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Los campos marcados con <span className="text-rose-500 font-bold">*</span> son requeridos.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-emerald-900">
                    <p className="font-bold">¡Mensaje preparado con éxito!</p>
                    <p className="text-emerald-700 mt-0.5">
                      Se ha abierto WhatsApp en una nueva pestaña. Si no se abrió automáticamente, puedes{' '}
                      <a
                        href={buildWhatsAppQuoteUrl(formData, BUSINESS_CONFIG.mainPhoneDigits)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-bold text-emerald-950"
                      >
                        hacer clic aquí para abrirlo
                      </a>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Nombre completo */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nombre completo <span className="text-rose-500">*</span>
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

                {/* Teléfono / WhatsApp (Opcional) */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Teléfono / WhatsApp <span className="text-slate-400 font-normal lowercase">(opcional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ejemplo: 0426-1234567 o +58 426... (opcional)"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-blue-600 bg-slate-50/50 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2"
                  />
                  <p className="mt-1 text-[11px] text-slate-500">
                    Tu número ya aparecerá de forma automática cuando se abra el chat en WhatsApp.
                  </p>
                </div>

                {/* Servicio de interés */}
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

                {/* Cantidad aproximada */}
                <div>
                  <label htmlFor="quantity" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Cantidad aproximada <span className="text-slate-400 font-normal lowercase">(opcional)</span>
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="text"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Ej: 50 copias, 100 stickers, 1 certificado..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                {/* Descripción del trabajo */}
                <div>
                  <label htmlFor="description" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Descripción del trabajo <span className="text-slate-400 font-normal lowercase">(opcional)</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Cuéntanos detalles: tipo de papel, colores, fecha límite, medidas o cualquier indicación especial..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl font-heading font-extrabold text-base text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-2xl text-emerald-950" />
                  <span>Enviar cotización por WhatsApp</span>
                </button>

                {/* Subtext info */}
                <div className="text-center space-y-2 pt-2">
                  <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                    <span>También puedes enviarnos tu archivo por WhatsApp después de cotizar.</span>
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600">
                    <span>Líneas alternativas:</span>
                    <a
                      href={`https://wa.me/${BUSINESS_CONFIG.mainPhoneDigits}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-blue-900 hover:underline flex items-center gap-1"
                    >
                      <i className="fa-brands fa-whatsapp text-emerald-600" />
                      {BUSINESS_CONFIG.mainPhone}
                    </a>
                    <span>•</span>
                    <a
                      href={`https://wa.me/${BUSINESS_CONFIG.secondaryPhoneDigits}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-teal-800 hover:underline flex items-center gap-1"
                    >
                      <i className="fa-brands fa-whatsapp text-teal-600" />
                      {BUSINESS_CONFIG.secondaryPhone}
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
