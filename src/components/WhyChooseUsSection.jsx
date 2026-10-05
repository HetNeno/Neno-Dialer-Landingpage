import React from 'react';
import { Server, GraduationCap, LayoutGrid, Link, Key, Headphones, ShieldCheck, ArrowRight } from 'lucide-react';

export default function WhyChooseUsSection() {
  const points = [
    {
      title: 'Inhouse Server & Cloud Based Server',
      subtitle: 'Both Options Available with WebRTC',
      icon: Server,
    },
    {
      title: 'In-Depth Training to Your Team',
      subtitle: 'Comprehensive onboarding and operator guidance',
      icon: GraduationCap,
    },
    {
      title: 'CRM Mapping',
      subtitle: 'Custom field & contact workflow alignment',
      icon: LayoutGrid,
    },
    {
      title: 'CRM Integration with Existing CRM',
      subtitle: 'Seamless bi-directional synchronization',
      icon: Link,
    },
    {
      title: 'Rented as well as Owned',
      subtitle: 'Flexible licensing and deployment models',
      icon: Key,
    },
    {
      title: '24/7 Support',
      subtitle: 'Round-the-clock technical assistance & uptime support',
      icon: Headphones,
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#FAFCFF] border-b border-[#E2E8F0]" id="why-choose-us">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Neno Dialer Theme Hero Box */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#0F172A] rounded-3xl p-8 sm:p-10 text-white shadow-md relative overflow-hidden group">
              {/* Decorative Subtle Background Elements */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
              
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold font-label uppercase tracking-widest text-white mb-6 border border-white/20">
                <ShieldCheck className="w-4 h-4 text-blue-200" /> Enterprise Reliability
              </span>

              <h2 className="font-headline text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
                WHY<br />
                <span className="text-[#93C5FD]">CHOOSE US?</span>
              </h2>

              <p className="text-blue-50/90 text-sm sm:text-base leading-relaxed mb-8">
                Empowering enterprise sales &amp; support teams with versatile deployments, seamless integrations, and 24/7 reliability.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20 text-white">
                <div>
                  <span className="block text-3xl font-bold font-headline text-white">100%</span>
                  <span className="text-xs font-label text-blue-100 font-medium">WebRTC Ready</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold font-headline text-white">24/7</span>
                  <span className="text-xs font-label text-blue-100 font-medium">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Cards styled to match Neno Dialer Theme */}
          <div className="lg:col-span-7 space-y-4">
            {points.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-xs hover:border-[#2563EB]/40 hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EEF5FF] text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300 shadow-xs border border-[#DBEAFE]">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-headline text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono font-bold text-[#94A3B8]">0{idx + 1}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-normal">
                      {item.subtitle}
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
