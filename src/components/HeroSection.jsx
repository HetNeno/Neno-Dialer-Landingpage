import React, { useState, useCallback } from 'react';
import { 
  ArrowRight, ShieldCheck, Zap, CheckCircle2, Play, HelpCircle, Users, TrendingUp
} from 'lucide-react';

export default function HeroSection({ onOpenDemo }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    // Determine cursor offset from center of screen (-1 to 1) 
    // multiplied by 12px for subtle, premium movement depth.
    const x = (e.clientX / window.innerWidth - 0.5) * -12;
    const y = (e.clientY / window.innerHeight - 0.5) * -12;
    setMousePos({ x, y });
  }, []);

  const scrollToVideo = () => {
    const el = document.getElementById('demo-video');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[calc(100vh-4rem)] pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-[#FAFCFF] flex items-center" 
      id="overview"
    >
      {/* Interactive Parallax Background Minimal Dot Grid */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden" 
        style={{ 
          zIndex: 0,
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 80%, transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 80%, transparent)'
        }}
      >
        <div 
          className="absolute inset-[-10%] w-[120%] h-[120%] transition-transform duration-500 ease-out"
          style={{ 
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
            backgroundImage: `radial-gradient(#94A3B8 1.5px, transparent 1.5px)`,
            backgroundPosition: '0 0',
            backgroundSize: '40px 40px',
            WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 40%, transparent 25%, black 80%)',
            maskImage: 'radial-gradient(ellipse 50% 50% at 50% 40%, transparent 25%, black 80%)',
            opacity: 0.4
          }}
        />
      </div>

      {/* Soft ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[rgba(37,99,235,0.05)] rounded-full blur-3xl pointer-events-none z-[-6]"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        
        {/* Hero Header & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="reveal-on-scroll is-visible inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EEF5FF] text-[#2563EB] text-xs font-semibold tracking-wider uppercase mb-8 shadow-xs border border-[#DBEAFE]">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse"></span>
            <span>100% UNLIMITED CALLING PLAN • Zero Per-Minute Charges</span>
          </div>

          {/* Text Reveal Animated Headline */}
          <h1 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.08] mb-6">
            <span className="text-reveal-mask block">
              <span className="text-reveal-item is-visible">More Conversations.</span>
            </span>
            <span className="text-reveal-mask block pb-2 -mb-2 pr-4 -mr-4">
              <span className="text-reveal-item is-visible italic font-normal text-[#2563EB] pr-4">Less Time Dialing.</span>
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
              className="btn-press-effect active:scale-97 w-full sm:w-auto px-8 py-4 rounded-xl bg-[#2563EB] text-white font-semibold text-sm tracking-wide hover:bg-[#1D4ED8] active:bg-[#1E40AF] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Book a Consultation — ₹49</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={scrollToVideo}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] hover:bg-[#F5F8FC] text-[#0F172A] font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-xs hover:-translate-y-0.5 cursor-pointer"
            >
              <Play className="w-4 h-4 text-[#2563EB] fill-[#2563EB]" />
              <span>Watch Product Overview</span>
            </button>
          </div>



        </div>

      </div>

      {/* Animated Bottom Waves */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-[-1] overflow-hidden leading-[0]" style={{ height: '30vh', minHeight: '200px' }}>
        <svg
          className="absolute bottom-0 w-[200%] h-full"
          style={{ left: '-50%' }}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax-waves">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(37,99,235,0.03)" />
            <use href="#gentle-wave" x="48" y="3" fill="rgba(37,99,235,0.05)" />
            <use href="#gentle-wave" x="48" y="5" fill="rgba(37,99,235,0.07)" />
            <use href="#gentle-wave" x="48" y="7" fill="rgba(37,99,235,0.12)" />
          </g>
        </svg>
      </div>

    </section>
  );
}
