import React from 'react';
import { MessageSquareText, FileCheck2, PackageCheck, Zap, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/referral';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Pides tu cotización',
      description:
        'Cuéntanos qué necesitas a través del formulario o directamente por WhatsApp. Si tienes archivos (PDF, imagen o texto), también puedes enviárnoslos.',
      icon: MessageSquareText,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      step: '02',
      title: 'Apruebas el diseño o archivo',
      description:
        'Verificamos medidas, calidad de resolución y detalles del acabado. Te confirmamos el presupuesto exacto y el tiempo estimado de entrega.',
      icon: FileCheck2,
      color: 'from-teal-600 to-emerald-600',
    },
    {
      step: '03',
      title: 'Recibes tu impresión',
      description:
        '¡Tu trabajo listo con la máxima nitidez y presentación! Puedes retirarlo o coordinar tu entrega en San Fernando de Apure.',
      icon: PackageCheck,
      color: 'from-amber-500 to-orange-600',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-900 text-xs sm:text-sm font-semibold">
            <Zap className="w-4 h-4 text-teal-600" />
            <span>Fácil, Rápido y Transparente</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            ¿Cómo funciona pedir con Eben-ezer?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Sin complicaciones ni largas esperas. Gestionamos tu pedido en 3 simples pasos.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Step pill & icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-heading font-extrabold text-3xl text-slate-200 group-hover:text-amber-500/50 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Atención 100% personalizada</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Payment and Speed Note Box */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                Atención rápida por WhatsApp
              </span>
              <h3 className="font-heading font-bold text-2xl text-white">
                Formas de pago seguras y accesibles
              </h3>
              <p className="text-sm text-slate-300">
                Aceptamos <strong>efectivo (divisas y Bs)</strong>, <strong>Pago Móvil</strong> de
                cualquier banco nacional y <strong>transferencia bancaria</strong>.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap gap-2.5 justify-start lg:justify-end">
              <div className="px-4 py-2 bg-white/10 rounded-xl border border-white/20 text-xs font-semibold flex items-center gap-2">
                <i className="fa-solid fa-mobile-screen-button text-emerald-400" />
                <span>Pago Móvil</span>
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-xl border border-white/20 text-xs font-semibold flex items-center gap-2">
                <i className="fa-solid fa-money-bill-wave text-amber-400" />
                <span>Efectivo</span>
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-xl border border-white/20 text-xs font-semibold flex items-center gap-2">
                <i className="fa-solid fa-building-columns text-teal-400" />
                <span>Transferencia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
