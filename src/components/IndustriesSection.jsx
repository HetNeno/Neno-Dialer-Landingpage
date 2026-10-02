import React, { useState } from 'react';
import { Shield, Car, HeartPulse, Headset, Landmark, ShoppingBag, Radio, Building } from 'lucide-react';

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      id: 'insurance',
      icon: Shield,
      title: 'Insurance',
      desc: 'Policy renewals, verified consent recording, and mandatory compliance disclosure checklist tracking.',
      workflow: 'Inbound Consent → Dual FLAC Audio → Mandated Tagging → Policy CRM Update',
      kpi: '99.4% Compliance Adherence'
    },
    {
      id: 'automobile',
      icon: Car,
      title: 'Automobile',
      desc: 'Test drive booking reminders, service due voice broadcasts, and prospective buyer lead routing.',
      workflow: 'Test Drive Broadcast → DTMF Response → Instant Rep Patch → Dealership Booking',
      kpi: '3.8x Higher Booking Rates'
    },
    {
      id: 'healthcare',
      icon: HeartPulse,
      title: 'Healthcare',
      desc: 'Confidential patient appointment confirmations, clinic triage queues, and HIPAA-ready audio protection.',
      workflow: 'Patient Queue → Medical Triage ACD → Encrypted Call Record → EHR Profile Sync',
      kpi: 'Zero Patient Identity Leakage'
    },
    {
      id: 'bpo',
      icon: Headset,
      title: 'BPO & Call Centers',
      desc: 'Multi-tenant client accounts, flexible supervisor whisper channels, and high-velocity predictive dialing.',
      workflow: 'Multi-Tenant Partition → Predictive Dialing → Supervisor Whisper → Client SLA Reporting',
      kpi: '300% Talk Time Boost'
    },
    {
      id: 'banking',
      icon: Landmark,
      title: 'Banking & FinTech',
      desc: 'Loan application follow-ups, fraud alert outreach, and strict regulatory call auditing scorecards.',
      workflow: 'Application Alert → Preview Mode Context → QA Scorecard Audit → Financial Vault',
      kpi: '100% Audit Traceability'
    },
    {
      id: 'fmcg',
      icon: ShoppingBag,
      title: 'FMCG & Retail',
      desc: 'Distributor order confirmations, seasonal promotional voice broadcasts, and logistics inquiries.',
      workflow: 'Distributor Broadcast → Instant IVR Re-Order → Order Queue → ERP System Entry',
      kpi: '60% Faster Order Processing'
    },
    {
      id: 'telecom',
      icon: Radio,
      title: 'Telecom Providers',
      desc: 'Customer retention pipelines, tier-1 technical support ACD queues, and automated bill payment IVR.',
      workflow: 'Inbound Tier-1 Ring → Skill ACD Match → Real-Time Notes → Account Retention Tag',
      kpi: '42s Avg Queue Resolution'
    },
    {
      id: 'realestate',
      icon: Building,
      title: 'Real Estate',
      desc: 'High-touch preview dialing for property investors, instant site-visit tagging, and agent follow-up calendars.',
      workflow: 'Investor Record Preview → Click-to-Dial → Site Visit Tag → Calendar Invite Sync',
      kpi: '2.5x Prospect Conversion'
    }
  ];

  const current = industries[activeIndustry];
  const CurrentIcon = current.icon;

  return (
    <section className="w-full py-20 bg-[#f6f0e8] border-b border-[#d8d0c8]/60" id="industries">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#c2652a] block mb-2 font-label">
            Vertical Workflows
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3a302a] leading-tight">
            Built for High-Volume Communication Sectors.
          </h2>
          <p className="text-base sm:text-lg text-[#605850] mt-4 leading-relaxed">
            Neno Dialer adapts to the strict compliance, high pacing, and customer documentation requirements of mission-critical industries.
          </p>
        </div>

        {/* Industry Grid Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isSelected = activeIndustry === idx;

            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(idx)}
                className={`p-4 rounded-xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#c2652a] text-white border-[#c2652a] shadow-md -translate-y-0.5'
                    : 'bg-white text-[#3a302a] border-[#d8d0c8] hover:border-[#c2652a]/40 hover:bg-[#f6f0e8]'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-[#c2652a]/10 text-[#c2652a]'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold">{ind.title}</h3>
              </button>
            );
          })}
        </div>

        {/* Dynamic Industry Workflow View */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#d8d0c8] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#c2652a]/10 text-[#c2652a] flex items-center justify-center">
                <CurrentIcon className="w-4 h-4" />
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#c2652a] font-label">
                {current.title} Communication Architecture
              </span>
            </div>

            <h3 className="font-headline text-2xl font-bold text-[#3a302a]">
              Tailored Workflow for {current.title}
            </h3>

            <p className="text-sm text-[#605850] leading-relaxed">
              {current.desc}
            </p>

            <div className="pt-2 font-mono text-xs text-[#3a302a] bg-[#f6f0e8] p-3 rounded-lg border border-[#d8d0c8]/60">
              <span className="text-[#605850] block text-[10px] uppercase font-bold mb-1 font-label">Configured Sequence:</span>
              {current.workflow}
            </div>
          </div>

          <div className="bg-[#f6f0e8] p-6 rounded-xl border border-[#d8d0c8]/60 text-center shrink-0 w-full lg:w-72">
            <span className="text-[10px] uppercase font-bold text-[#605850] block tracking-wider font-label">
              Industry Standard KPI
            </span>
            <span className="text-2xl font-headline font-bold text-[#c2652a] block mt-1">
              {current.kpi}
            </span>
            <span className="text-xs text-[#605850] mt-2 block font-mono">Verified Source Workflow</span>
          </div>
        </div>

      </div>
    </section>
  );
}
