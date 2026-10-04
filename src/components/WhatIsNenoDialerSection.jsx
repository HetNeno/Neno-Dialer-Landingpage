import React from 'react';
import { Database, PhoneCall, MessageSquare, Cpu, RefreshCw } from 'lucide-react';

export default function WhatIsNenoDialerSection() {
  const steps = [
    {
      step: 'STEP 01',
      title: 'LEAD',
      desc: 'Import and organize lead contacts without manual errors.',
      icon: Database
    },
    {
      step: 'STEP 02',
      title: 'CALL',
      desc: 'Automated high-velocity or preview calling.',
      icon: PhoneCall
    },
    {
      step: 'STEP 03',
      title: 'CONVERSATION',
      desc: 'Uninterrupted connection with zero audio delay.',
      icon: MessageSquare
    },
    {
      step: 'STEP 04',
      title: 'INTELLIGENCE',
      desc: 'Automatic recording, live call notes & tag scoring.',
      icon: Cpu
    },
    {
      step: 'STEP 05',
      title: 'CRM',
      desc: 'Instant bi-directional sync to your preferred CRM.',
      icon: RefreshCw
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#FAFCFF] border-b border-[#E2E8F0]" id="what-is-neno">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#0F172A]">
            <span className="text-reveal-mask">
              <span className="text-reveal-item">What is Neno Dialer?</span>
            </span>
          </h2>
          <p className="reveal-on-scroll text-sm sm:text-base text-[#475569] mt-3 leading-relaxed stagger-1">
            Neno Dialer is a sales calling automation platform designed to boost team manager control, reduce call routing friction, and increase call capacity with zero lag, real-time intelligence, and CRM integration.
          </p>
        </div>

        {/* 5-Step Process Pipeline Container */}
        <div className="reveal-on-scroll bg-[#EEF5FF]/50 p-6 sm:p-8 rounded-3xl border border-[#DBEAFE] stagger-2">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {steps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx} 
                  className={`reveal-on-scroll card-hover-lift bg-[#FFFFFF] p-5 rounded-2xl border border-[#E2E8F0] shadow-xs flex flex-col justify-between group stagger-${idx + 1}`}
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#EEF5FF] text-[#2563EB] flex items-center justify-center mb-4 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>

                    <div className="text-[10px] font-mono font-bold text-[#2563EB] tracking-wider uppercase mb-1">
                      {item.step}
                    </div>

                    <h3 className="font-headline text-lg font-bold text-[#0F172A] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#475569] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
