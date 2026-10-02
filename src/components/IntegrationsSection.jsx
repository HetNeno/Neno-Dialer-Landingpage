import React from 'react';
import { RefreshCw, Database, Layers, ArrowLeftRight } from 'lucide-react';

export default function IntegrationsSection() {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#faf5ee]" id="integrations">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#c2652a] block mb-2 font-label">
            Integrated Ecosystem
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3a302a] leading-tight">
            Keep Calling Connected to Customer Data.
          </h2>
          <p className="text-base sm:text-lg text-[#605850] mt-4 leading-relaxed">
            Neno Dialer eliminates data silos. Audio recordings, call disposition tags, duration metrics, and QA scores automatically sync back to your primary customer software.
          </p>
        </div>

        {/* Integration Architecture Diagram */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-[#d8d0c8] mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Neno Hub */}
            <div className="lg:col-span-5 bg-[#f6f0e8] p-6 rounded-xl space-y-4 border border-[#d8d0c8]/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#c2652a] text-white flex items-center justify-center font-headline font-bold text-lg">
                  ND
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#3a302a]">Neno Dialer Telephony Engine</h3>
                  <p className="text-xs text-[#605850]">Live Telephony Event Stream</p>
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded bg-white shadow-xs flex items-center justify-between border border-[#d8d0c8]/50">
                  <span>• Dual FLAC Recording Link</span>
                  <span className="text-[#c2652a] font-bold">Auto-Gen</span>
                </div>
                <div className="p-2.5 rounded bg-white shadow-xs flex items-center justify-between border border-[#d8d0c8]/50">
                  <span>• Outcome Tags &amp; Dispositions</span>
                  <span className="text-[#c2652a] font-bold">Validated</span>
                </div>
                <div className="p-2.5 rounded bg-white shadow-xs flex items-center justify-between border border-[#d8d0c8]/50">
                  <span>• Timestamped Notes &amp; Timers</span>
                  <span className="text-[#c2652a] font-bold">Captured</span>
                </div>
                <div className="p-2.5 rounded bg-white shadow-xs flex items-center justify-between border border-[#d8d0c8]/50">
                  <span>• Structured QA Audit Score</span>
                  <span className="text-[#c2652a] font-bold">Passed (8.5)</span>
                </div>
              </div>
            </div>

            {/* Center: Bi-directional Sync Indicator */}
            <div className="lg:col-span-2 text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#c2652a]/10 flex items-center justify-center text-[#c2652a] mb-2 border border-[#c2652a]/30">
                <RefreshCw className="w-6 h-6 animate-spin-slow" />
              </div>
              <span className="text-xs font-mono font-bold text-[#c2652a]">Bi-Directional</span>
              <span className="text-[11px] text-[#605850] font-mono">Webhooks &amp; REST</span>
            </div>

            {/* Right: Connected Systems */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#f6f0e8] flex flex-col justify-between shadow-xs border border-[#d8d0c8]/50">
                <span className="text-xs font-bold text-[#3a302a]">Salesforce</span>
                <span className="text-[11px] text-[#605850] mt-1">Automatic contact activity pop &amp; task updates.</span>
                <span className="text-[10px] font-mono text-[#c2652a] font-bold mt-3">Native Connector</span>
              </div>

              <div className="p-4 rounded-xl bg-[#f6f0e8] flex flex-col justify-between shadow-xs border border-[#d8d0c8]/50">
                <span className="text-xs font-bold text-[#3a302a]">HubSpot</span>
                <span className="text-[11px] text-[#605850] mt-1">Deal stage triggers &amp; embedded call audio player.</span>
                <span className="text-[10px] font-mono text-[#c2652a] font-bold mt-3">Native Connector</span>
              </div>

              <div className="p-4 rounded-xl bg-[#f6f0e8] flex flex-col justify-between shadow-xs border border-[#d8d0c8]/50">
                <span className="text-xs font-bold text-[#3a302a]">Neno CRM</span>
                <span className="text-[11px] text-[#605850] mt-1">Unified communication record &amp; lead sync.</span>
                <span className="text-[10px] font-mono text-[#c2652a] font-bold mt-3">Instant Integration</span>
              </div>

              <div className="p-4 rounded-xl bg-[#f6f0e8] flex flex-col justify-between shadow-xs border border-[#d8d0c8]/50">
                <span className="text-xs font-bold text-[#3a302a]">Custom Software</span>
                <span className="text-[11px] text-[#605850] mt-1">REST API, WebSocket events, &amp; payload webhooks.</span>
                <span className="text-[10px] font-mono text-[#c2652a] font-bold mt-3">Developer APIs</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
