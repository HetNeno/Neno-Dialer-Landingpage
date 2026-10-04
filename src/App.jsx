import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OfferSection from './components/OfferSection';
import DemoVideoSection from './components/DemoVideoSection';
import WhatIsNenoDialerSection from './components/WhatIsNenoDialerSection';
import ProblemSection from './components/ProblemSection';
import HelpSection from './components/HelpSection';
import WhereItFitsSection from './components/WhereItFitsSection';
import CallRoadmapSection from './components/CallRoadmapSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import DemoBookingModal from './components/DemoBookingModal';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  useScrollReveal();

  const openDemoModal = () => setDemoModalOpen(true);
  const closeDemoModal = () => setDemoModalOpen(false);

  return (
    <div className="min-h-screen bg-[#FAFCFF] text-[#0F172A] flex flex-col font-body antialiased">
      {/* Sticky Navbar */}
      <Navbar onOpenDemo={openDemoModal} />

      {/* Main Content Stack matching Stitch layout */}
      <main className="flex-grow pt-16">
        {/* Section 1: Hero */}
        <HeroSection onOpenDemo={openDemoModal} />

        {/* Section 2: Offer Highlight (Understand Neno Dialer) */}
        <OfferSection onOpenDemo={openDemoModal} />

        {/* Section 3: Product Demo Video (See Neno Dialer In Action) */}
        <DemoVideoSection onOpenDemo={openDemoModal} />

        {/* Section 4: What is Neno Dialer (5-Step Flow) */}
        <WhatIsNenoDialerSection />

        {/* Section 5: Why Teams Explore Neno Dialer (Operational Challenges) */}
        <ProblemSection />

        {/* Section 6: What Neno Dialer Can Help With (6 Capabilities) */}
        <HelpSection />

        {/* Section 7: Where Neno Dialer Can Fit (4 Use Cases) */}
        <WhereItFitsSection />

        {/* Section 8: Your 15-Minute Neno Dialer Call (3-Step Roadmap) */}
        <CallRoadmapSection />

        {/* Section 9: FAQ */}
        <FAQSection />

        {/* Section 10: Final CTA */}
        <FinalCTASection onOpenDemo={openDemoModal} />
      </main>

      {/* Footer */}
      <Footer onOpenDemo={openDemoModal} />

      {/* Demo Booking Drawer / Modal */}
      <DemoBookingModal isOpen={demoModalOpen} onClose={closeDemoModal} />
    </div>
  );
}
