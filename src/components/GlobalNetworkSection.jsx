import React from 'react';
import { Globe2, Radio, Shield, Zap } from 'lucide-react';

export default function GlobalNetworkSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#FAFCFF] text-[#0F172A] relative border-b border-[#E2E8F0]" id="global-network">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF5FF] border border-[#DBEAFE] text-xs font-bold font-label uppercase tracking-widest text-[#2563EB] mb-4">
            <Globe2 className="w-3.5 h-3.5 text-[#2563EB]" /> Global Infrastructure
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            Our Global Network
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed">
            High-availability telecom infrastructure and low-latency WebRTC servers strategically positioned across major international regions.
          </p>
        </div>

        {/* Map Card — sized to 892.4px × 502.09px aspect ratio */}
        <div className="max-w-[892.4px] mx-auto bg-[#FFFFFF] rounded-3xl border border-[#E2E8F0] shadow-sm mb-12 overflow-hidden">
          <div className="w-full aspect-[892.4/502.09] flex items-center justify-center bg-[#FFFFFF]">
            <img
              src="/global_network_map.png"
              alt="Neno Dialer Global Network Coverage Map"
              className="w-full h-full object-contain max-w-[892.4px] mx-auto block"
            />
          </div>
        </div>

        {/* Feature Highlights beneath map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FFFFFF] border border-[#E2E8F0] p-6 rounded-2xl flex items-start gap-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#EEF5FF] text-[#2563EB] flex items-center justify-center shrink-0 border border-[#DBEAFE]">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-headline font-bold text-base text-[#0F172A]">Ultra-Low Latency</h4>
              <p className="text-xs text-[#475569] mt-1 leading-relaxed">Local POP servers reduce audio latency under 40ms globally.</p>
            </div>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E2E8F0] p-6 rounded-2xl flex items-start gap-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#EEF5FF] text-[#2563EB] flex items-center justify-center shrink-0 border border-[#DBEAFE]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-headline font-bold text-base text-[#0F172A]">Direct Carrier Interconnect</h4>
              <p className="text-xs text-[#475569] mt-1 leading-relaxed">Tier-1 telephony routing for high answer rates and call stability.</p>
            </div>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E2E8F0] p-6 rounded-2xl flex items-start gap-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#EEF5FF] text-[#2563EB] flex items-center justify-center shrink-0 border border-[#DBEAFE]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-headline font-bold text-base text-[#0F172A]">99.99% Uptime Guarantee</h4>
              <p className="text-xs text-[#475569] mt-1 leading-relaxed">Redundant failover architecture across all continental regions.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
