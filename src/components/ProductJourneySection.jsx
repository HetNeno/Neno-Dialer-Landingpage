import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProductJourneySection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Trigger Initiated',
      desc: 'PSTN inbound ring or campaign auto-dial queue trigger registers in Neno telephony gateway.',
      detail: 'Supports WebRTC browser audio, SIP trunking, and PSTN carrier routing.'
    },
    {
      num: '02',
      title: 'Mode & Queue Pacing',
      desc: 'ACD evaluates hours and skills; or predictive dialer matches live answer with idle rep availability.',
      detail: 'Calculates latency (<140ms) and checks agent skill matrix.'
    },
    {
      num: '03',
      title: 'Agent Connection',
      desc: 'Crystal-clear WebRTC voice stream bridges instantaneously with zero softphone latency.',
      detail: 'Pop-up contact card provides complete customer context.'
    },
    {
      num: '04',
      title: 'Controls & Recording',
      desc: 'Automated dual-channel recording initiates alongside mute, hold, keypad, and whisper oversight.',
      detail: 'Stereo audio channels isolated for FLAC storage.'
    },
    {
      num: '05',
      title: 'In-Call Documentation',
      desc: 'Rep records real-time contextual notes and selects standardized outcome tags directly in workspace.',
      detail: 'Auto-saved to avoid lost conversation details.'
    },
    {
      num: '06',
      title: 'Wrap-Up Timer',
      desc: 'Call terminates and wrap-up countdown protects final disposition entry before next queue assignment.',
      detail: '30-second enforced grace period for data hygiene.'
    },
    {
      num: '07',
      title: 'Automated QA Scoring',
      desc: 'Call audio and transcripts are routed to scorecard queue for supervisor audit or AI compliance checks.',
      detail: 'Structured 10-point scorecard evaluation.'
    },
    {
      num: '08',
      title: 'Complete CRM Sync',
      desc: 'Audio recordings, durations, tags, and audit scores automatically update central CRM profile.',
      detail: 'Bi-directional Webhooks & REST API sync.'
    }
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-[#faf5ee]" id="workflow">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#c2652a] block mb-2 font-label">
            The End-To-End Journey
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3a302a] leading-tight">
            From Call Initiation to Complete Call Records.
          </h2>
          <p className="text-base sm:text-lg text-[#605850] mt-4 leading-relaxed">
            See how every voice interaction systematically flows through Neno Dialer to protect conversation context, ensure rep accountability, and sync enterprise records.
          </p>
        </div>

        {/* 8 Step Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;

            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`bg-white p-6 rounded-2xl shadow-xs transition-all cursor-pointer border-2 relative flex flex-col justify-between ${
                  isSelected ? 'border-[#c2652a] shadow-md bg-[#f6f0e8]/50' : 'border-[#d8d0c8]/60 hover:border-[#c2652a]/40'
                }`}
              >
                <div>
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm mb-4 ${
                    isSelected ? 'bg-[#c2652a] text-white' : 'bg-[#c2652a]/10 text-[#c2652a]'
                  }`}>
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold text-[#3a302a] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#605850] leading-relaxed mb-4">{step.desc}</p>
                </div>

                <div className="pt-3 border-t border-[#d8d0c8]/50 text-[11px] font-mono text-[#c2652a] font-semibold">
                  {step.detail}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
