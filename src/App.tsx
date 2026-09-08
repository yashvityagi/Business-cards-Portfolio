/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SamplesSection } from './components/SamplesSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CardDetailModal } from './components/CardDetailModal';
import { CardSample } from './types';

export default function App() {
  const [selectedCardForInspect, setSelectedCardForInspect] = useState<CardSample | null>(null);
  const [selectedOrderStyle, setSelectedOrderStyle] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleActionClick = (actionName: string) => {
    switch (actionName) {
      case 'Pitch us an idea':
        scrollToSection('contact');
        break;
      case 'Come work here':
        scrollToSection('about');
        break;
      case 'Send a brief hello': {
        const subject = encodeURIComponent('Hello from Portfolio');
        const msg = encodeURIComponent(
          'Hello! I saw your portfolio and would like to connect regarding business card designs.'
        );
        window.location.href = `mailto:ogmainframe01@gmail.com?subject=${subject}&body=${msg}`;
        break;
      }
      case 'See how we operate':
        scrollToSection('deliverables');
        break;
      default:
        scrollToSection('samples');
    }
  };

  const handleOrderStyle = (cardTitle: string) => {
    setSelectedOrderStyle(cardTitle);
    scrollToSection('contact');
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Background Video with Mouse-Scrubbing */}
      <BackgroundVideo />

      {/* Fixed Navbar (z-index: 10) */}
      <Navbar
        onNavigate={scrollToSection}
        onContactClick={() => scrollToSection('contact')}
      />

      {/* Main Content Sections (z-index: 1+) */}
      <main className="relative z-1">
        {/* Full-screen Hero Landing Section */}
        <Hero onActionClick={handleActionClick} />

        {/* Portfolio Content: About / What I Do */}
        <AboutSection />

        {/* Portfolio Content: 9 Samples (Minimal, Luxury, Creative) with 3D Flip */}
        <SamplesSection onInspectCard={(card) => setSelectedCardForInspect(card)} />

        {/* Portfolio Content: What You Get Deliverables */}
        <WhatYouGetSection />

        {/* Portfolio Content: Transparent Pricing (₹399 → ₹199) & Notice */}
        <PricingSection onOrderClick={() => scrollToSection('contact')} />

        {/* Portfolio Content: Contact (Email) & Order Dispatch */}
        <ContactSection initialStyle={selectedOrderStyle} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Card Detail & Print Spec Modal */}
      <CardDetailModal
        card={selectedCardForInspect}
        onClose={() => setSelectedCardForInspect(null)}
        onOrderStyle={handleOrderStyle}
      />
    </div>
  );
}
