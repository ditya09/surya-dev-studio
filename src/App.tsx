import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CatalogModal } from './components/CatalogModal';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [catalogTab, setCatalogTab] = useState<'all' | 'apps' | 'uiux' | 'maintenance'>('all');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleSelectService = (serviceType: 'katalog' | 'portfolio' | 'konsultasi') => {
    if (serviceType === 'katalog') {
      setCatalogTab('apps');
      setIsCatalogOpen(true);
    } else if (serviceType === 'portfolio') {
      setCatalogTab('uiux');
      setIsCatalogOpen(true);
    } else if (serviceType === 'konsultasi') {
      setIsConsultationOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] font-['Plus_Jakarta_Sans'] flex flex-col selection:bg-[#ffbf00] selection:text-[#6d5000]">
      {/* Top Navbar */}
      <Navbar onOpenEstimator={() => setIsConsultationOpen(true)} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero onOpenEstimator={() => setIsConsultationOpen(true)} />
        <AboutSection />
        <ServicesSection onSelectService={handleSelectService} />
        <TestimonialsSection />
        <ContactSection onOpenEstimator={() => setIsConsultationOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onSelectService={handleSelectService} />

      {/* Interactive Modals */}
      <CatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        defaultTab={catalogTab}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
