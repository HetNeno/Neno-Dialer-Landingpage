import React, { useState } from 'react';
import { Zap, MoveRight, Eye, Check } from 'lucide-react';

export default function OutboundModesSection() {
  const [selectedMode, setSelectedMode] = useState('predictive');

  const modes = [
    {
      id: 'predictive',
      icon: Zap,
      subtitle: 'High Velocity Outreach',
      title: 'Predictive Calling',
      description: 'Statistical algorithms calculate agent availability, answer rates, and average call duration to pace multiple outbound dials concurrently. Live connections are routed instantaneously to free reps.',
      highlights: [
        'Filters busy signals, voicemails, & drops automatically',
        'Up to 300% increase in live talk time per representative',
        'Configurable pacing ratio (1:1 up to 1:4)'
      ],
      bestFor: 'Large Telesales & Collections'
    },
    {
      id: 'progressive',
      icon: MoveRight,
      subtitle: 'Systematic Continuity',
      title: 'Progressive Calling',
      description: 'Dials one customer at a time per rep. The dialer initiates the next call immediately upon the representative completing the post-call wrap-up, eliminating idle wait time without risk of dropped calls.',
      highlights: [
        'Zero call abandonment or silent audio lag',
        'Strict wrap-up timer countdown enforced',
        'Steady, predictable outreach pacing'
      ],
      bestFor: 'Lead Qualification & Renewals'
    },
    {
      id: 'preview',
      icon: Eye,
      subtitle: 'High Touch & Context-Rich',
      title: 'Preview Calling',
      description: 'Presents the complete customer CRM profile, previous call transcripts, purchase history, and notes to the agent before the call is triggered. The rep clicks to dial only after fully reviewing context.',
      highlights: [
        'Deep preparation for high-value enterprise accounts',
        'Custom lead-view duration timers',
        'One-click WebRTC dial initiation'
      ],
      bestFor: 'Enterprise Sales & Key Accounts'
    }
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-[#FAFCFF]" id="calling-modes">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2563EB] block mb-2 font-label">
            Outbound Architectures
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
            Choose the Calling Mode That Fits Your Workflow.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] mt-4 leading-relaxed">
            From high-velocity outreach campaigns to high-touch consultative sales, Neno Dialer provides three distinct dialing engines engineered to maximize talk time and context.
          </p>
        </div>

        {/* 3 Outbound Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modes.map((mode) => {
            const Icon = mode.icon;
            const isSelected = selectedMode === mode.id;

            return (
              <div
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={`bg-[#FFFFFF] p-8 rounded-2xl shadow-xs transition-all cursor-pointer flex flex-col justify-between border-2 ${
                  isSelected ? 'border-[#2563EB] shadow-xs -translate-y-1' : 'border-[#E2E8F0] hover:border-[#2563EB]/40'
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    isSelected ? 'bg-[#2563EB] text-white' : 'bg-[#EEF5FF] text-[#2563EB]'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2563EB] mb-1">
                    {mode.subtitle}
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-[#0F172A] mb-3">
                    {mode.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {mode.description}
                  </p>

                  <div className="space-y-2.5 pt-2 mb-6 border-t border-[#E2E8F0]">
                    {mode.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#0F172A]">
                        <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 bg-[#F5F8FC] px-4 py-2.5 rounded-lg flex items-center justify-between text-xs font-mono border border-[#E2E8F0]">
                  <span className="text-[#64748B]">Best For:</span>
                  <span className="font-bold text-[#0F172A]">{mode.bestFor}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
