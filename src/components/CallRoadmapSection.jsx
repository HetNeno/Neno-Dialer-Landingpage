import React from 'react';
import { Target, Presentation, Compass } from 'lucide-react';

export default function CallRoadmapSection() {
  const steps = [
    {
      num: '01',
      phase: 'WHAT & WHO',
      time: '0-4 MIN',
      title: 'What & Who It Is For',
      desc: 'Our mentor explains what Neno Dialer is, who should use it, and how it eliminates traditional calling bottlenecks without hardware.',
      icon: Target
    },
    {
      num: '02',
      phase: 'LIVE DEMO',
      time: '4-10 MIN',
      title: 'What It Can Do',
      desc: 'Real-time software demonstration showcasing 3x calling velocity, ACD queue drops, supervisor whisper coaching, and live call recordings.',
      icon: Presentation
    },
    {
      num: '03',
      phase: 'BUSINESS GROWTH',
      time: '10-15 MIN',
      title: 'Why Neno Dialer & Benefits',
      desc: 'Understand how Neno Dialer grows and fast-tracks your business communications, ROI calculations, and CRM integration steps.',
      icon: Compass
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#FAFCFF] border-b border-[#E2E8F0]" id="roadmap">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2563EB] block mb-2 font-label">
            1-ON-1 MENTOR SESSION
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Your 15-Minute Neno Dialer Call
          </h2>
          <p className="reveal-on-scroll text-sm sm:text-base text-[#475569] mt-3 leading-relaxed stagger-1">
            A simple, focused consultation process where our mentor explains the product and demonstrates how to scale your business.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className={`reveal-on-scroll card-hover-lift bg-[#FFFFFF] p-8 rounded-2xl border border-[#E2E8F0] shadow-xs flex flex-col justify-between relative stagger-${idx + 1}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF5FF] text-[#2563EB] flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#EEF5FF] px-2.5 py-1 rounded-full border border-[#DBEAFE]">
                      {item.time}
                    </span>
                  </div>

                  <div className="text-xs font-mono font-bold text-[#64748B] uppercase tracking-wider mb-1">
                    {item.num} / {item.phase}
                  </div>

                  <h3 className="font-headline text-xl font-bold text-[#0F172A] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
