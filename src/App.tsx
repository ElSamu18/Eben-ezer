import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
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

      {/* 2. Hero Section */}
      <main className="flex-1">
        <Hero onScrollToServices={() => handleScrollToSection('servicios')} />

        {/* 3. Barra de Confianza */}
        <TrustBar />

        {/* 4. Servicios */}
        <Services onSelectService={handleSelectService} />

        {/* 5. Cómo Funciona */}
        <HowItWorks />

        {/* 6. Formulario de Cotización */}
        <QuoteForm initialService={selectedService} />

        {/* 7. Preguntas Frecuentes (Acordeón) */}
        <FaqSection />
      </main>

      {/* 8. Footer */}
      <Footer onOpenHtmlModal={() => setIsHtmlModalOpen(true)} />

      {/* 9. Botón Flotante de WhatsApp */}
      <FloatingWhatsApp />

      {/* 10. Modal de Exportación HTML Estático */}
      <HtmlExportModal
        isOpen={isHtmlModalOpen}
        onClose={() => setIsHtmlModalOpen(false)}
      />
    </div>
  );
}
