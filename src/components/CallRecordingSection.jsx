import React, { useState } from 'react';
import { Mic, Check, Clock, Tag as TagIcon, FileText, ShieldAlert } from 'lucide-react';

export default function CallRecordingSection() {
  const [selectedTags, setSelectedTags] = useState(['Callback Requested']);

  const taxonomyTags = [
    'Callback Requested', 'Pricing Query', 'Contract Review', 
    'Escalation', 'Completed', 'Not Interested', 'Decision Maker On Vacation'
  ];

  const toggleTag = (t) => {
    if (selectedTags.includes(t)) {
      setSelectedTags(selectedTags.filter(item => item !== t));
    } else {
      setSelectedTags([...selectedTags, t]);
    }
  };

  return (
    <section className="w-full py-20 bg-[#f6f0e8] border-y border-[#d8d0c8]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual: Active Call Capture Engine Box */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#d8d0c8]">
              
              <div className="flex items-center justify-between pb-4 mb-5 bg-[#f6f0e8] px-4 py-3 rounded-xl border border-[#d8d0c8]/60">
                <span className="text-xs font-bold uppercase tracking-wider text-[#3a302a] font-label flex items-center gap-2">
                  <Mic className="w-4 h-4 text-[#c2652a]" /> Active Call Capture Engine
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#8c3c3c]/10 text-[#8c3c3c] text-xs font-bold font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8c3c3c] animate-pulse"></span> REC 04:32
                </span>
              </div>

              {/* Dual-Channel Recording Visual */}
              <div className="p-4 bg-[#f6f0e8] rounded-xl mb-5 space-y-3 border border-[#d8d0c8]/50">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#3a302a]">Dual-Channel Audio Separation</span>
                  <span className="text-[11px] font-mono text-[#c2652a] font-bold">Isolated FLAC Stereo Channels</span>
                </div>

                <div className="space-y-2 font-mono text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#605850] w-20">CH 1 (Agent):</span>
                    <div className="flex-1 h-3 bg-[#eae2da] rounded-sm overflow-hidden flex items-center">
                      <div className="w-3/4 h-full bg-[#c2652a]"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#605850] w-20">CH 2 (Caller):</span>
                    <div className="flex-1 h-3 bg-[#eae2da] rounded-sm overflow-hidden flex items-center">
                      <div className="w-1/2 h-full bg-[#78706a]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Standardized Outcome Tags */}
              <div className="mb-5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#3a302a] block mb-2 font-label">
                  Standardized Outcome Tags (Mandatory Taxonomy)
                </label>
                <div className="flex flex-wrap gap-2">
                  {taxonomyTags.map((tg, idx) => {
                    const active = selectedTags.includes(tg);
                    return (
                      <button
                        key={idx}
                        onClick={() => toggleTag(tg)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1 ${
                          active
                            ? 'bg-[#c2652a] text-white shadow-xs'
                            : 'bg-[#f6f0e8] hover:bg-[#ece6dc] text-[#3a302a]'
                        }`}
                      >
                        {active && <Check className="w-3 h-3" />}
                        {tg}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Wrap-Up Countdown Bar */}
              <div className="p-3 bg-[#eae2da]/60 rounded-xl flex items-center justify-between text-xs border border-[#d8d0c8]/60">
                <span className="flex items-center gap-1.5 text-[#605850] font-semibold">
                  <Clock className="w-4 h-4 text-[#c2652a]" /> Post-Call Wrap-Up Enforced
                </span>
                <span className="font-mono font-bold text-[#c2652a]">00:30s Auto-Dispatch</span>
              </div>

            </div>
          </div>

          {/* Right Content: Descriptive Details */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#c2652a] font-label">
              Call Data Hygiene
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3a302a] leading-tight">
              Capture the Conversation While It Happens.
            </h2>
            <p className="text-base text-[#605850] leading-relaxed">
              Eliminate after-the-fact guesswork. Neno Dialer equips representatives with rapid in-call controls so all notes, compliance recordings, and standardized outcome tags are completed before the next call connects.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-white shadow-xs border border-[#d8d0c8]">
                <h3 className="text-sm font-bold text-[#3a302a] mb-1">Dual-Channel High-Fidelity Recording</h3>
                <p className="text-xs text-[#605850] leading-relaxed">
                  Records agent and customer audio on independent audio channels for flawless speech-to-text accuracy and quality audits.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white shadow-xs border border-[#d8d0c8]">
                <h3 className="text-sm font-bold text-[#3a302a] mb-1">Standardized Tag Taxonomies</h3>
                <p className="text-xs text-[#605850] leading-relaxed">
                  Mandate specific tags before an agent can conclude a call, eliminating missing CRM fields and messy pipeline statuses.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white shadow-xs border border-[#d8d0c8]">
                <h3 className="text-sm font-bold text-[#3a302a] mb-1">Automatic Wrap-Up Timers</h3>
                <p className="text-xs text-[#605850] leading-relaxed">
                  Configurable wrap-up grace periods (e.g. 30 seconds) balance thorough agent documentation with high operational velocity.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
