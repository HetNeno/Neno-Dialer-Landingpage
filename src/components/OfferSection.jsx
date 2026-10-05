import React from 'react';
import { Check, ArrowRight, Info, Clock, Sparkles } from 'lucide-react';

export default function OfferSection({ onOpenDemo }) {
  const sessionTopics = [
    {
      title: "What is the Dialer?",
      desc: "Comprehensive introduction to Neno Dialer's WebRTC cloud architecture & automated call routing."
    },
    {
      title: "Who & How to Use It?",
      desc: "Tailored setup guidance for telecallers, sales reps, B2B founders, and BD managers."
    },
    {
      title: "What It Can Do?",
      desc: "Live walkthrough of 3x multi-line dialing, ACD inbound queues, supervisor whisper & call recording."
    },
    {
      title: "Why Neno Dialer?",
      desc: "Zero hardware requirement, 100% WebRTC browser calling, zero per-minute charges & instant setup."
    },
    {
      title: "Business Growth & Benefits",
      desc: "How to eliminate rep idle time, automate CRM sync, and rapidly scale your sales revenue."
    },
    {
      title: "Custom Q&A & Workflow Audit",
      desc: "Direct 1-on-1 interaction with our product mentor to address your specific business use cases."
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#F5F8FC] border-y border-[#E2E8F0]" id="pricing">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        
        {/* Expanded Full-Width Container Box */}
        <div className="reveal-on-scroll bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm border border-[#E2E8F0] relative overflow-hidden w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Title, Intro & Booking Box */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EEF5FF] text-[#2563EB] text-[11px] font-bold tracking-wider uppercase mb-4 border border-[#DBEAFE]">
                  COMPLETE 15-MINUTE DEMO CALL
                </span>
                
                {/* Text Reveal Headline */}
                <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight">
                  <span className="text-reveal-mask block">
                    <span className="text-reveal-item">Understand Neno Dialer.</span>
                  </span>
                  <span className="text-reveal-mask block">
                    <span className="text-reveal-item text-[#2563EB]">Complete 15-Min Call.</span>
                  </span>
                </h2>
                
                <p className="reveal-on-scroll text-sm sm:text-base text-[#475569] mt-3 leading-relaxed stagger-1">
                  Book a dedicated 1-on-1 session where our mentor explains the complete product, shows live calling workflows, and demonstrates how to grow and fast-track your business communications.
                </p>
              </div>

              {/* Price & CTA Box */}
              <div className="reveal-on-scroll card-hover-lift p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4 stagger-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-headline font-bold text-[#2563EB]">₹49</span>
                  <span className="text-xs text-[#64748B] font-medium ml-2">One-time walkthrough &amp; consultation</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#EEF5FF] text-[#2563EB] text-xs font-semibold border border-[#DBEAFE]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>15-Minute Dedicated Mentor Session</span>
                </div>

                <button
                  onClick={onOpenDemo}
                  className="btn-press-effect active:scale-97 w-full py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Demo for ₹49</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Right Column: 6 Expanded Mentor Topic Cards */}
            <div className="lg:col-span-7 bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3">
                <h3 className="text-xs uppercase font-bold tracking-widest text-[#0F172A] font-label flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#2563EB]" />
                  What our mentor covers in the 15-minute call:
                </h3>
                <span className="text-[11px] font-mono font-bold text-[#2563EB] bg-[#EEF5FF] px-2.5 py-0.5 rounded border border-[#DBEAFE]">
                  100% Live Demo
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sessionTopics.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`reveal-on-scroll card-hover-lift bg-[#FFFFFF] p-4 rounded-xl border border-[#E2E8F0] space-y-1 stagger-${(idx % 4) + 1}`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4.5 h-4.5 rounded-full bg-[#2563EB] text-white flex items-center justify-center shrink-0 text-[10px]">
                        <Check className="w-3 h-3" />
                      </div>
                      <h4 className="text-xs font-bold text-[#0F172A] leading-snug">{item.title}</h4>
                    </div>
                    <p className="text-[11px] text-[#475569] leading-relaxed pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Transparency Note */}
          <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-start sm:items-center gap-3 text-xs text-[#64748B]">
            <Info className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed">
              <strong className="text-[#0F172A]">Dedicated Product Mentor:</strong> We use this nominal booking fee of ₹49 to assign a dedicated product specialist who explains how Neno Dialer fits your exact business operations.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
