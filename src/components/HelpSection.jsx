import React from 'react';
import { Zap, PhoneIncoming, ShieldCheck, Headphones, Mic, RefreshCw } from 'lucide-react';

export default function HelpSection() {
  const capabilities = [
    {
      title: 'Multi-Line Smart Dialing',
      desc: 'Eliminate manual dialing and keep reps focused on live conversations with high-velocity predictive pacing.',
      icon: Zap
    },
    {
      title: 'Automated Inbound Drops',
      desc: 'Intelligent IVR and ACD routing distribute calls instantly to free reps based on skills and idle time.',
      icon: PhoneIncoming
    },
    {
      title: 'Zero Drop Voice Quality',
      desc: 'Crystal-clear WebRTC remote-ready calling without hardware latency or dropped SIP packets.',
      icon: ShieldCheck
    },
    {
      title: 'Live Supervisor Guidance',
      desc: 'Listen in, whisper assistance directly to agents, or barge into active calls seamlessly.',
      icon: Headphones
    },
    {
      title: 'Call Recording & Intelligence',
      desc: 'Automatic dual-channel recording with built-in live interaction notes and disposition tagging.',
      icon: Mic
    },
    {
      title: 'Seamless CRM Integrations',
      desc: 'Bi-directional sync with lead databases, CRM tools, webhooks, and REST APIs.',
      icon: RefreshCw
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#FAFCFF] border-b border-[#E2E8F0]" id="help-with">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#0F172A]">
            What Neno Dialer Can Help With
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed">
            Engineered to deliver high-touch, high-capacity, and reliable call handling.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E2E8F0] shadow-xs hover:border-[#2563EB]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EEF5FF] text-[#2563EB] flex items-center justify-center mb-5">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="font-headline text-lg font-bold text-[#0F172A] mb-2">
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
