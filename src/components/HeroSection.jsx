import React from 'react';
import { 
  ArrowRight, ShieldCheck, Zap, CheckCircle2, Play, HelpCircle, Users, TrendingUp
} from 'lucide-react';

export default function HeroSection({ onOpenDemo }) {
  const scrollToVideo = () => {
    const el = document.getElementById('demo-video');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-[#FAFCFF] flex items-center" id="overview">
      {/* Soft ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[rgba(37,99,235,0.05)] rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        
        {/* Hero Header & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="reveal-on-scroll is-visible inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EEF5FF] text-[#2563EB] text-xs font-semibold tracking-wider uppercase mb-8 shadow-xs border border-[#DBEAFE]">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse"></span>
            <span>100% UNLIMITED CALLING PLAN • Zero Per-Minute Charges</span>
          </div>

          {/* Text Reveal Animated Headline */}
          <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.08] mb-6">
            <span className="text-reveal-mask block">
              <span className="text-reveal-item is-visible">More Conversations.</span>
            </span>
            <span className="text-reveal-mask block">
              <span className="text-reveal-item is-visible italic font-normal text-[#2563EB]">Less Time Dialing.</span>
            </span>
          </h1>

          {/* Subhead with Fade Up */}
          <p className="reveal-on-scroll is-visible text-lg sm:text-xl text-[#475569] font-normal leading-relaxed max-w-3xl mx-auto mb-10 stagger-1">
            Neno Dialer helps sales and business development teams eliminate manual dialing errors, streamline conversations, and connect with 3x more prospects every hour.
          </p>

          {/* Action Buttons */}
          <div className="reveal-on-scroll is-visible flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 stagger-2">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#2563EB] text-white font-semibold text-sm tracking-wide hover:bg-[#1D4ED8] active:bg-[#1E40AF] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Book a Demo • ₹49</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={scrollToVideo}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] hover:bg-[#F5F8FC] text-[#0F172A] font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-xs hover:-translate-y-0.5 cursor-pointer"
            >
              <Play className="w-4 h-4 text-[#2563EB] fill-[#2563EB]" />
              <span>Watch Product Demo</span>
            </button>
          </div>

          {/* Credibility Ribbon */}
          <div className="reveal-on-scroll is-visible pt-8 border-t border-[#E2E8F0] flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-semibold text-[#475569] uppercase tracking-wider stagger-3">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2563EB]" /> Complete 15-Min Live Demo</span>
            <span className="text-[#CBD5E1] hidden sm:inline">•</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#2563EB]" /> Dedicated Mentor Walkthrough</span>
            <span className="text-[#CBD5E1] hidden sm:inline">•</span>
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#2563EB]" /> Grow &amp; Fast-Track Business</span>
          </div>

          {/* 15-Minute Demo Call Highlight Cards in Hero with Staggered Animations */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left max-w-5xl mx-auto">
            <div className="reveal-on-scroll is-visible card-hover-lift bg-[#FFFFFF] p-5 rounded-2xl border border-[#E2E8F0] shadow-xs stagger-1">
              <div className="w-8 h-8 rounded-lg bg-[#EEF5FF] text-[#2563EB] flex items-center justify-center mb-3">
                <HelpCircle className="w-4 h-4" />
              </div>
              <h3 className="font-headline font-bold text-sm text-[#0F172A] mb-1">What is the Dialer?</h3>
              <p className="text-xs text-[#475569] leading-relaxed">Understanding WebRTC cloud calling architecture &amp; automated dialing.</p>
            </div>

            <div className="reveal-on-scroll is-visible card-hover-lift bg-[#FFFFFF] p-5 rounded-2xl border border-[#E2E8F0] shadow-xs stagger-2">
              <div className="w-8 h-8 rounded-lg bg-[#EEF5FF] text-[#2563EB] flex items-center justify-center mb-3">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="font-headline font-bold text-sm text-[#0F172A] mb-1">Who &amp; How to Use?</h3>
              <p className="text-xs text-[#475569] leading-relaxed">For telecallers, sales reps, B2B founders, and inside sales teams.</p>
            </div>

            <div className="reveal-on-scroll is-visible card-hover-lift bg-[#FFFFFF] p-5 rounded-2xl border border-[#E2E8F0] shadow-xs stagger-3">
              <div className="w-8 h-8 rounded-lg bg-[#EEF5FF] text-[#2563EB] flex items-center justify-center mb-3">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="font-headline font-bold text-sm text-[#0F172A] mb-1">What It Can Do?</h3>
              <p className="text-xs text-[#475569] leading-relaxed">3x call velocity, ACD queue drops, supervisor whisper &amp; auto recording.</p>
            </div>

            <div className="reveal-on-scroll is-visible card-hover-lift bg-[#FFFFFF] p-5 rounded-2xl border border-[#E2E8F0] shadow-xs stagger-4">
              <div className="w-8 h-8 rounded-lg bg-[#EEF5FF] text-[#2563EB] flex items-center justify-center mb-3">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="font-headline font-bold text-sm text-[#0F172A] mb-1">Business Benefits</h3>
              <p className="text-xs text-[#475569] leading-relaxed">Grow fast, reduce rep idle time, and eliminate hardware cost.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
