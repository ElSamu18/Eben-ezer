import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { GuaranteeBanner } from './components/GuaranteeBanner';
import { Testimonials } from './components/Testimonials';
import { HowItWorks } from './components/HowItWorks';
import { QuoteForm } from './components/QuoteForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HtmlExportModal } from './components/HtmlExportModal';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Impresiones a color y en blanco y negro');
  const [isHtmlModalOpen, setIsHtmlModalOpen] = useState<boolean>(false);

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-amber-400 selection:text-slate-900">
      {/* 1. Header Fijo */}
      <Navbar onOpenHtmlModal={() => setIsHtmlModalOpen(true)} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onScrollToServices={() => handleScrollToSection('servicios')} />

        {/* 3. Barra de Confianza Rápida */}
        <TrustBar />

        {/* 4. Catálogo de Servicios */}
        <Services onSelectService={handleSelectService} />

        {/* 5. Bloque Visible de Garantía (CRO: Confianza y Descuento de Riesgo) */}
        <GuaranteeBanner onScrollToForm={() => handleScrollToSection('contacto')} />

        {/* 6. Testimonios Reales con Comprobantes WhatsApp */}
        <Testimonials />

        {/* 7. Cómo Funciona en 3 Pasos */}
        <HowItWorks />

        {/* 8. Formulario de Cotización Ultra-Rápido (Sin Teléfono, Fricción Cero) */}
        <QuoteForm initialService={selectedService} />

        {/* 9. Preguntas Frecuentes (Acordeón Accesible) */}
        <FaqSection />
      </main>

      {/* 10. Footer Oficial */}
      <Footer onOpenHtmlModal={() => setIsHtmlModalOpen(true)} />

      {/* 11. Botón Flotante de WhatsApp */}
      <FloatingWhatsApp />

      {/* 12. Modal de Exportación HTML Estático */}
      <HtmlExportModal
        isOpen={isHtmlModalOpen}
        onClose={() => setIsHtmlModalOpen(false)}
      />
    </div>
  );
}
