import React from 'react';
import { XCircle, CheckCircle2, TrendingDown, ArrowRight } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="w-full py-20 bg-[#f6f0e8] border-y border-[#d8d0c8]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#c2652a] block mb-2 font-label">
            The Operational Challenge
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3a302a] leading-tight">
            Calling Should Not Create More Operational Work.
          </h2>
          <p className="text-base sm:text-lg text-[#605850] mt-4 leading-relaxed font-normal">
            Traditional call handling leaves teams bogged down in manual dialing, fragmented call notes, unmonitored agent interactions, and disconnected spreadsheets that conceal performance bottlenecks.
          </p>
        </div>

        {/* Comparative Workflow Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left: Traditional Disconnected Flow */}
          <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#d8d0c8] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 bg-[#f6f0e8] px-4 py-3 rounded-xl border border-[#d8d0c8]/60">
                <span className="text-xs uppercase font-bold tracking-wider text-[#8c3c3c] font-label flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-[#8c3c3c]" /> Traditional Fragmented Calling
                </span>
                <span className="text-xs font-mono text-[#605850]">High Friction • Data Loss</span>
              </div>

              <p className="text-sm text-[#605850] mb-6 leading-relaxed">
                Agents toggle between disconnected softphones, external spreadsheets, and sticky notes while supervisors operate completely blind.
              </p>

              {/* Steps */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-[#f6f0e8] flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#eae2da] flex items-center justify-center text-[11px] font-bold text-[#2a2420]">01</span>
                  <span className="text-[#3a302a]">Customer Inbound / Manual Dial List</span>
                </div>
                <div className="p-3 rounded-lg bg-[#f6f0e8] flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#eae2da] flex items-center justify-center text-[11px] font-bold text-[#2a2420]">02</span>
                  <span className="text-[#3a302a]">Manual Rep Keypad Dialing (High Error Rate)</span>
                </div>
                <div className="p-3 rounded-lg bg-[#f6f0e8] flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#eae2da] flex items-center justify-center text-[11px] font-bold text-[#2a2420]">03</span>
                  <span className="text-[#3a302a]">Unmonitored Audio (Zero Supervisor Visibility)</span>
                </div>
                <div className="p-3 rounded-lg bg-[#f6f0e8] flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#eae2da] flex items-center justify-center text-[11px] font-bold text-[#2a2420]">04</span>
                  <span className="text-[#3a302a]">Manual Notepad &amp; Scribbled Context</span>
                </div>
                <div className="p-3 rounded-lg bg-[#f6f0e8] flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#eae2da] flex items-center justify-center text-[11px] font-bold text-[#2a2420]">05</span>
                  <span className="text-[#3a302a]">Delayed, Forgotten CRM Entry Hours Later</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 bg-[#8c3c3c]/10 p-4 rounded-xl flex items-center gap-3 text-[#8c3c3c] border border-[#8c3c3c]/20">
              <TrendingDown className="w-6 h-6 shrink-0" />
              <p className="text-xs leading-normal font-medium">
                Result: High agent burnout, 35% time wasted on non-calling admin tasks, and lost customer context.
              </p>
            </div>
          </div>

          {/* Right: Neno Structured Platform Flow */}
          <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-[#c2652a]/30 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c2652a]/5 rounded-bl-full pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-6 pb-4 bg-[#c2652a]/10 px-4 py-3 rounded-xl border border-[#c2652a]/20">
                <span className="text-xs uppercase font-bold tracking-wider text-[#c2652a] font-label flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c2652a]" /> Neno Structured Platform Flow
                </span>
                <span className="text-xs font-mono text-[#c2652a] font-bold">100% Traceability • Real-Time</span>
              </div>

              <p className="text-sm text-[#605850] mb-6 leading-relaxed">
                Every call enters an intelligent software pipeline that eliminates manual friction and automatically records, scores, and syncs data.
              </p>

              {/* Steps */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-[#eae2da]/40 flex items-center gap-3 border border-[#c2652a]/10">
                  <span className="w-6 h-6 rounded-full bg-[#c2652a] text-white flex items-center justify-center text-[11px] font-bold">01</span>
                  <span className="text-[#3a302a] font-semibold">Automated Call Distribution (ACD) or Predictive Pacing</span>
                </div>
                <div className="p-3 rounded-lg bg-[#eae2da]/40 flex items-center gap-3 border border-[#c2652a]/10">
                  <span className="w-6 h-6 rounded-full bg-[#c2652a] text-white flex items-center justify-center text-[11px] font-bold">02</span>
                  <span className="text-[#3a302a] font-semibold">Instant WebRTC Connect to Idle, Skill-Matched Rep</span>
                </div>
                <div className="p-3 rounded-lg bg-[#eae2da]/40 flex items-center gap-3 border border-[#c2652a]/10">
                  <span className="w-6 h-6 rounded-full bg-[#c2652a] text-white flex items-center justify-center text-[11px] font-bold">03</span>
                  <span className="text-[#3a302a] font-semibold">Automatic Dual-Channel Recording &amp; Whisper Supervision</span>
                </div>
                <div className="p-3 rounded-lg bg-[#eae2da]/40 flex items-center gap-3 border border-[#c2652a]/10">
                  <span className="w-6 h-6 rounded-full bg-[#c2652a] text-white flex items-center justify-center text-[11px] font-bold">04</span>
                  <span className="text-[#3a302a] font-semibold">Standardized In-Call Notes &amp; Disposition Tags</span>
                </div>
                <div className="p-3 rounded-lg bg-[#eae2da]/40 flex items-center gap-3 border border-[#c2652a]/10">
                  <span className="w-6 h-6 rounded-full bg-[#c2652a] text-white flex items-center justify-center text-[11px] font-bold">05</span>
                  <span className="text-[#3a302a] font-semibold">Quality Audit Checklist &amp; Instant Bi-Directional CRM Sync</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 bg-[#c2652a]/10 p-4 rounded-xl flex items-center gap-3 text-[#c2652a] border border-[#c2652a]/20">
              <span className="material-symbols-outlined text-2xl shrink-0">insights</span>
              <p class="text-xs leading-normal font-semibold">
                Result: 4.2x higher talk time per rep, zero dropped customer records, and instant compliance verification.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
