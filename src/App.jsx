import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OfferSection from './components/OfferSection';
import DemoVideoSection from './components/DemoVideoSection';
import WhatIsNenoDialerSection from './components/WhatIsNenoDialerSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import GlobalNetworkSection from './components/GlobalNetworkSection';
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

        {/* Section 3: Why Choose Us */}
        <WhyChooseUsSection />

        {/* Section 4: Product Demo Video (See Neno Dialer In Action) */}
        <DemoVideoSection onOpenDemo={openDemoModal} />

        {/* Section 5: What is Neno Dialer (5-Step Flow) */}
        <WhatIsNenoDialerSection />

        {/* Section 6: Why Teams Explore Neno Dialer (Operational Challenges) */}
        <ProblemSection />

        {/* Section 7: What Neno Dialer Can Help With (6 Capabilities) */}
        <HelpSection />

        {/* Section 8: Our Global Network Map */}
        <GlobalNetworkSection />

        {/* Section 9: Where Neno Dialer Can Fit (4 Use Cases) */}
        <WhereItFitsSection />

        {/* Section 10: Your 15-Minute Neno Dialer Call (3-Step Roadmap) */}
        <CallRoadmapSection />

        {/* Section 11: FAQ */}
        <FAQSection />

        {/* Section 12: Final CTA */}
        <FinalCTASection onOpenDemo={openDemoModal} />
      </main>

      {/* Footer */}
      <Footer onOpenDemo={openDemoModal} />

      {/* Demo Booking Drawer / Modal */}
      <DemoBookingModal isOpen={demoModalOpen} onClose={closeDemoModal} />
    </div>
  );
}
