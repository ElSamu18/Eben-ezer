import React, { useState, useEffect } from 'react';
import { ReferralBanner } from './components/ReferralBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { Portfolio, PortfolioItem } from './components/Portfolio';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { ReferralSection } from './components/ReferralSection';
import { QuoteForm } from './components/QuoteForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HtmlExportModal } from './components/HtmlExportModal';
import { extractReferralParam } from './utils/referral';

const STORAGE_KEY = 'ebenezer_referral_code';

export default function App() {
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>('Impresiones a color y en blanco y negro');
  const [isHtmlModalOpen, setIsHtmlModalOpen] = useState<boolean>(false);

  // Initialize and detect ?ref= from URL and LocalStorage
  useEffect(() => {
    // 1. Check URL query param
    const codeFromUrl = extractReferralParam(window.location.search);
    if (codeFromUrl) {
      localStorage.setItem(STORAGE_KEY, codeFromUrl);
      setReferralCode(codeFromUrl);
      return;
    }

    // 2. Fallback to LocalStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setReferralCode(stored);
    }
  }, []);

  const handleClearReferral = () => {
    localStorage.removeItem(STORAGE_KEY);
    setReferralCode(null);
  };

  const handleApplyReferral = (code: string) => {
    const clean = code.trim().toUpperCase();
    localStorage.setItem(STORAGE_KEY, clean);
    setReferralCode(clean);

    // Scroll to contact form smoothly
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePortfolioSelect = (item: PortfolioItem) => {
    setSelectedService(item.serviceMap);
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
      {/* 0. Top notification banner when referral is active */}
      <ReferralBanner
        referralCode={referralCode}
        onClear={handleClearReferral}
        onScrollToForm={() => handleScrollToSection('contacto')}
      />

      {/* 1. Header Fijo */}
      <Navbar
        onOpenHtmlModal={() => setIsHtmlModalOpen(true)}
        referralCode={referralCode}
      />

      {/* 2. Hero Section */}
      <main className="flex-1">
        <Hero
          onScrollToServices={() => handleScrollToSection('servicios')}
          referralCode={referralCode}
        />

        {/* 3. Barra de Confianza */}
        <TrustBar />

        {/* 4. Servicios */}
        <Services onSelectService={handleSelectService} />

        {/* 5. Portafolio */}
        <Portfolio onWantSomethingLikeThis={handlePortfolioSelect} />

        {/* 6. Cómo Funciona */}
        <HowItWorks />

        {/* 7. Testimonios */}
        <Testimonials />

        {/* 8. Programa de Referidos (10% OFF) */}
        <ReferralSection
          currentStoredCode={referralCode}
          onApplyCodeToForm={handleApplyReferral}
          onClearStoredCode={handleClearReferral}
        />

        {/* 9. Formulario de Cotización */}
        <QuoteForm
          initialService={selectedService}
          referralCode={referralCode}
          onReferralCodeChange={(val) => {
            if (val.trim()) {
              setReferralCode(val.trim().toUpperCase());
              localStorage.setItem(STORAGE_KEY, val.trim().toUpperCase());
            } else {
              handleClearReferral();
            }
          }}
        />

        {/* 10. Preguntas Frecuentes (Acordeón) */}
        <FaqSection />
      </main>

      {/* 11. Footer */}
      <Footer onOpenHtmlModal={() => setIsHtmlModalOpen(true)} />

      {/* 12. Botón Flotante de WhatsApp */}
      <FloatingWhatsApp referralCode={referralCode} />

      {/* 13. Modal de Exportación HTML Estático */}
      <HtmlExportModal
        isOpen={isHtmlModalOpen}
        onClose={() => setIsHtmlModalOpen(false)}
      />
    </div>
  );
}
