import React from 'react';
import { Clock, PhoneIncoming, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function InboundQueueSection() {
  return (
    <section className="w-full py-20 bg-[#f6f0e8] border-b border-[#d8d0c8]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Queue Intelligence Info */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#c2652a] font-label">
              Queue Management &amp; Inbound Routing
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3a302a] leading-tight">
              Route Incoming Calls With Less Friction.
            </h2>
            <p className="text-base text-[#605850] leading-relaxed">
              Organize calls before they reach your team. Configure custom failover rules for peak volumes, holidays, and after-hours calling. Neno Dialer ensures callers in queue receive real-time wait estimations, periodic announcements, or automated callback options.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white shadow-xs flex items-center justify-center text-[#c2652a] shrink-0 border border-[#d8d0c8]/60">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#3a302a]">Time-Conditioned Routing</h3>
                  <p className="text-xs text-[#605850] mt-0.5 leading-relaxed">
                    Distribute during peak office hours, switch to automated IVR off-hours, or cascade to on-call distributed reps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white shadow-xs flex items-center justify-center text-[#c2652a] shrink-0 border border-[#d8d0c8]/60">
                  <PhoneIncoming className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#3a302a]">Virtual Queue &amp; Callback Trigger</h3>
                  <p className="text-xs text-[#605850] mt-0.5 leading-relaxed">
                    Callers can retain their spot in line and hang up; Neno Dialer dials them back as soon as an agent is free.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white shadow-xs flex items-center justify-center text-[#c2652a] shrink-0 border border-[#d8d0c8]/60">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#3a302a]">SLA Overflow &amp; Fallback Rules</h3>
                  <p className="text-xs text-[#605850] mt-0.5 leading-relaxed">
                    If queue wait time exceeds 60 seconds, auto-escalate to secondary support pools or executive voicemails.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Queue Operations Console Mockup */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#d8d0c8]">
              
              <div className="flex items-center justify-between pb-4 mb-6 bg-[#f6f0e8] px-4 py-3 rounded-xl border border-[#d8d0c8]/60">
                <div>
                  <h3 className="text-sm font-bold text-[#3a302a] font-headline">Enterprise Support Live Queue</h3>
                  <p className="text-[11px] text-[#605850]">Real-Time Telemetry &amp; Routing Pathway</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#c2652a]/10 text-[#c2652a] text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#c2652a] animate-ping"></span> Live Queue
                </span>
              </div>

              {/* KPI Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="p-3 bg-[#f6f0e8] rounded-xl text-center border border-[#d8d0c8]/50">
                  <span className="text-[10px] text-[#605850] block font-semibold">Active Queue</span>
                  <span className="text-xl font-bold text-[#3a302a] font-mono">4</span>
                </div>
                <div className="p-3 bg-[#f6f0e8] rounded-xl text-center border border-[#d8d0c8]/50">
                  <span className="text-[10px] text-[#605850] block font-semibold">Max Wait</span>
                  <span className="text-xl font-bold text-[#c2652a] font-mono">00:42s</span>
                </div>
                <div className="p-3 bg-[#f6f0e8] rounded-xl text-center border border-[#d8d0c8]/50">
                  <span className="text-[10px] text-[#605850] block font-semibold">SLA Met</span>
                  <span className="text-xl font-bold text-[#3a302a] font-mono">96.4%</span>
                </div>
                <div className="p-3 bg-[#f6f0e8] rounded-xl text-center border border-[#d8d0c8]/50">
                  <span className="text-[10px] text-[#605850] block font-semibold">Abandonment</span>
                  <span className="text-xl font-bold text-[#8c3c3c] font-mono">0.8%</span>
                </div>
              </div>

              {/* Inbound Flow Diagram Visual */}
              <div className="p-4 bg-[#f6f0e8] rounded-xl mb-4 font-mono text-xs border border-[#d8d0c8]/60 space-y-3">
                <div className="text-[11px] font-bold text-[#3a302a] uppercase font-label">
                  Inbound Decision Sequence
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[#605850]">
                    <span>1. Inbound Call • +1 (800) 412-9900</span>
                    <span className="text-[#c2652a] font-bold">Passed</span>
                  </div>
                  <div className="flex items-center justify-between text-[#605850] pl-3 border-l-2 border-[#c2652a]">
                    <span>→ Business Hours Check: YES</span>
                    <span className="text-[#c2652a] font-bold">Live Answer</span>
                  </div>
                  <div className="flex items-center justify-between text-[#605850] pl-6 border-l-2 border-[#c2652a]">
                    <span>→ Skill Match: Senior Support</span>
                    <span className="text-[#3a302a] font-bold">4 Eligible</span>
                  </div>
                  <div className="flex items-center justify-between text-[#605850] pl-9 border-l-2 border-[#c2652a]">
                    <span>→ Connect: Priya Patel</span>
                    <span className="text-[#c2652a] font-bold">Ringing (3s)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[#605850] pt-2">
                <span>Voicemail Auto-Drop: <strong className="text-[#3a302a]">Enabled (90s limit)</strong></span>
                <span className="text-[#c2652a] font-semibold">IVR Engine v4.2</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
