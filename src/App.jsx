import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ACDRoutingSection from './components/ACDRoutingSection';
import InboundQueueSection from './components/InboundQueueSection';
import OutboundModesSection from './components/OutboundModesSection';
import CallRecordingSection from './components/CallRecordingSection';
import CallAuditSection from './components/CallAuditSection';
import WorkforceSection from './components/WorkforceSection';
import ProductJourneySection from './components/ProductJourneySection';
import PlatformCapabilitiesSection from './components/PlatformCapabilitiesSection';
import IntegrationsSection from './components/IntegrationsSection';
import IndustriesSection from './components/IndustriesSection';
import SubscriptionSection from './components/SubscriptionSection';
import FAQSection from './components/FAQSection';
import DemoBookingModal from './components/DemoBookingModal';
import Footer from './components/Footer';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const openDemoModal = () => setDemoModalOpen(true);
  const closeDemoModal = () => setDemoModalOpen(false);

  return (
    <div className="min-h-screen bg-[#faf5ee] text-[#3a302a] flex flex-col font-body">
      {/* Sticky Header */}
      <Navbar onOpenDemo={openDemoModal} />

      {/* Main Content Sections */}
      <main className="flex-grow pt-16">
        <HeroSection onOpenDemo={openDemoModal} />
        <ProblemSection />
        <ACDRoutingSection />
        <InboundQueueSection />
        <OutboundModesSection />
        <CallRecordingSection />
        <CallAuditSection />
        <WorkforceSection />
        <ProductJourneySection />
        <PlatformCapabilitiesSection />
        <IntegrationsSection />
        <IndustriesSection />
        <SubscriptionSection onOpenDemo={openDemoModal} />
        <FAQSection />
      </main>

      {/* Enterprise Footer */}
      <Footer onOpenDemo={openDemoModal} />

      {/* Demo Booking Popup Modal */}
      <DemoBookingModal isOpen={demoModalOpen} onClose={closeDemoModal} />
    </div>
  );
}
