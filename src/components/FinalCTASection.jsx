import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FinalCTASection({ onOpenDemo }) {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#FAFCFF] border-b border-[#E2E8F0]" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Dark Container Box */}
        <div className="bg-[#0F172A] rounded-3xl p-8 lg:p-14 text-center text-white relative overflow-hidden shadow-2xl">
          
          {/* Subtle glow circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-white/90 text-[11px] font-bold tracking-wider uppercase mb-4 border border-white/10">
                TALK 1-ON-1 WITH OUR TEAM
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Ready to Understand Neno Dialer?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed max-w-2xl mx-auto">
                Book a 15-minute introductory call with our demo team and explore how Neno Dialer could transform your sales workflow.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="btn-press-effect active:scale-97 w-full sm:w-auto px-9 py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] text-white font-semibold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Book Demo • ₹49</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#60A5FA]" /> Instant Calendar Confirmation
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#60A5FA]" /> Dedicated Product Specialist
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#60A5FA]" /> No Sales Pressure
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
