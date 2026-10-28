import React from 'react';
import { Star, MapPin, Users, Award, CreditCard, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/referral';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-white border-y border-slate-200/90 py-6 sm:py-8 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {/* Rating & Satisfied Customers */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3.5 pb-4 md:pb-0">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0 shadow-xs">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-amber-500 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-slate-800 font-bold text-sm ml-1">5.0</span>
              </div>
              <p className="font-heading font-bold text-slate-900 text-base">
                Cientos de clientes satisfechos
              </p>
              <p className="text-xs text-slate-500">
                Familias, estudiantes y empresas locales
              </p>
            </div>
          </div>

          {/* Location & Local Support */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3.5 py-4 md:py-0 md:pl-8">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 flex-shrink-0 shadow-xs">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="font-heading font-bold text-slate-900 text-base">
                {BUSINESS_CONFIG.location}
              </p>
              <p className="text-xs text-slate-500">
                Punto céntrico y entregas coordinadas
              </p>
            </div>
          </div>

          {/* Payment Methods & Speed */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3.5 pt-4 md:pt-0 md:pl-8">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 shadow-xs">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <p className="font-heading font-bold text-slate-900 text-base">
                Pago Móvil, Efectivo y Transferencia
              </p>
              <p className="text-xs text-slate-500">
                Facilidades de pago en Bs y divisas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
