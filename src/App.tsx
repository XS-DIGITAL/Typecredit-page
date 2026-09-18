/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { LoanProgression } from './components/LoanProgression';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { EligibilityModal } from './components/EligibilityModal';
import { FloatingMobileBar } from './components/FloatingMobileBar';

export default function App() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState<boolean>(false);
  const [isEligibilityModalOpen, setIsEligibilityModalOpen] = useState<boolean>(false);

  const scrollToCalculator = () => {
    const el = document.getElementById('loan-progression-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fcf9] text-[#1a2a1a] flex flex-col selection:bg-[#cbebc8] selection:text-[#0f2a0f]">
      {/* Top Navigation */}
      <Navbar
        onOpenDownload={() => setIsDownloadModalOpen(true)}
        onOpenEligibility={() => setIsEligibilityModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 md:pb-0">
        {/* Section 1: Hero with CTA visible without scrolling */}
        <Hero
          onOpenDownload={() => setIsDownloadModalOpen(true)}
          onOpenEligibility={() => setIsEligibilityModalOpen(true)}
          onScrollToCalculator={scrollToCalculator}
        />

        {/* Section 2: Why TypeCredit / Features */}
        <Features />

        {/* Section 3: How it Works (with Real Phone App Screenshot) */}
        <HowItWorks
          onOpenDownload={() => setIsDownloadModalOpen(true)}
        />

        {/* Section 4: Flexible Loan Amounts & Interactive Calculator (with Real 3D Visual) */}
        <LoanProgression
          onOpenDownload={() => setIsDownloadModalOpen(true)}
        />

        {/* Section 5: Customer Testimonials (with Real Nigerian Avatars) */}
        <Testimonials />

        {/* Section 6: FAQ Accordion */}
        <FaqSection />

        {/* Section 7: Final CTA & Footer */}
        <Footer
          onOpenDownload={() => setIsDownloadModalOpen(true)}
        />
      </main>

      {/* Sticky Download Bar on Mobile Screens */}
      <FloatingMobileBar
        onOpenDownload={() => setIsDownloadModalOpen(true)}
      />

      {/* Interactive Modals */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />

      <EligibilityModal
        isOpen={isEligibilityModalOpen}
        onClose={() => setIsEligibilityModalOpen(false)}
        onProceedToDownload={() => setIsDownloadModalOpen(true)}
      />
    </div>
  );
}
