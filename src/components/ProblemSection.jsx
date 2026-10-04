import React from 'react';
import { Users, Clock, EyeOff, Database } from 'lucide-react';

export default function ProblemSection() {
  const challenges = [
    {
      num: '01',
      title: 'Same Lead Handled Twice',
      desc: 'Multiple reps contacting the same lead due to poor status synchronization and fragmented call logs.',
      icon: Users
    },
    {
      num: '02',
      title: 'Rep Burnout & Wasted Time',
      desc: 'Manual dialing delays, unanswered lines, and idle wait times take up 35%+ of representative work hours.',
      icon: Clock
    },
    {
      num: '03',
      title: 'Unknown What Happens During Calls',
      desc: 'Supervisors operate in the dark with zero live call listening, whisper guidance, or recording access.',
      icon: EyeOff
    },
    {
      num: '04',
      title: 'Manual Entry Slows Down CRM',
      desc: 'Rep scribbles on paper notes or delays CRM entries for hours instead of auto-logging statuses instantly.',
      icon: Database
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#FAFCFF] border-b border-[#E2E8F0]" id="why-explore">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2563EB] block mb-2 font-label">
            ADDITIONAL BENEFITS
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Why Teams Explore Neno Dialer
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed">
            The main challenges sales teams face when operating from manual, inefficient, or unmonitored calling workflows.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#E2E8F0] shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF5FF] text-[#2563EB] flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#CBD5E1]">
                      {item.num}
                    </span>
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
