import React from 'react';
import { UserCheck, TrendingUp, Building2, Rocket } from 'lucide-react';

export default function WhereItFitsSection() {
  const targetTeams = [
    {
      title: 'Sales Teams',
      desc: 'Accelerate outreach and close deals faster with automated dialer modes.',
      icon: UserCheck
    },
    {
      title: 'Business Development',
      desc: 'For B2B outreach, setting qualified meetings, and structured follow-up tracking.',
      icon: TrendingUp
    },
    {
      title: 'Inside Sales',
      desc: 'Handle inbound inquiries and high-volume outbound campaigns simultaneously.',
      icon: Building2
    },
    {
      title: 'Growing Businesses',
      desc: 'Scale your calling operation without investing in expensive hardware infrastructure.',
      icon: Rocket
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#FAFCFF] border-b border-[#E2E8F0]" id="where-it-fits">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2563EB] block mb-2 font-label">
            TAILORED SOLUTIONS
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Where Neno Dialer Can Fit
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed">
            Built for teams of all sizes looking to optimize business communications.
          </p>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetTeams.map((item, idx) => {
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
