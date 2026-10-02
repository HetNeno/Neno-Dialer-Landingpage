import React, { useState } from 'react';
import { Award, CheckCircle2, AlertCircle, TrendingUp, Download, Send } from 'lucide-react';

export default function CallAuditSection() {
  const [criteria, setCriteria] = useState([
    { title: 'Greeting & Identity Verification', desc: 'Agent introduced company, stated call purpose, verified caller identity.', score: '2.0/2.0', passed: true },
    { title: 'Solution Presentation & Discovery', desc: 'Asked open-ended questions and accurately mapped product features.', score: '2.0/2.0', passed: true },
    { title: 'Mandatory Compliance Disclosure', desc: 'Disclosed call recording statement within first 15 seconds.', score: '2.0/2.0', passed: true },
    { title: 'Objection Handling & Negotiation', desc: 'Hesitated when prospect inquired about non-standard payment terms.', score: '1.0/2.0', passed: false },
    { title: 'Accurate CRM Tagging & Next Steps', desc: 'Calendar invite sent and outcome tag #Interested assigned.', score: '1.5/2.0', passed: true },
  ]);

  return (
    <section className="w-full py-20 lg:py-28 bg-[#faf5ee]" id="call-audit">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#c2652a] block mb-2 font-label">
            Quality &amp; Compliance
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3a302a] leading-tight">
            Turn Every Conversation Into a Reviewable Interaction.
          </h2>
          <p className="text-base sm:text-lg text-[#605850] mt-4 leading-relaxed">
            Ensure regulatory compliance and continuous agent coaching. With structured scorecard templates and automated transcription hooks, quality assurance teams can audit calls in minutes rather than hours.
          </p>
        </div>

        {/* Call Audit Scorecard UI Mockup */}
        <div className="bg-white rounded-2xl shadow-md border border-[#d8d0c8] overflow-hidden">
          
          {/* Scorecard Header */}
          <div className="bg-[#ece6dc] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#d8d0c8]">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-[#c2652a] text-white text-xs font-mono font-bold">AUDIT #ND-84920</span>
                <h3 className="text-base font-bold text-[#3a302a]">Call Audit Evaluation Scorecard</h3>
              </div>
              <p className="text-xs text-[#605850]">
                Agent: <strong class="text-[#3a302a]">Priya Patel</strong> • Campaign: Inbound SaaS Tech • Duration: 06:14 • Date: Today, 11:24 AM
              </p>
            </div>

            {/* Score Badge */}
            <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-xl shadow-xs border border-[#d8d0c8]">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#605850] block tracking-wider font-label">Overall QA Score</span>
                <span className="text-3xl font-headline font-bold text-[#c2652a] leading-none">
                  8.5<span className="text-sm text-[#605850] font-normal"> / 10</span>
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#c2652a]/10 flex items-center justify-center text-[#c2652a]">
                <Award className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Scorecard Body */}
          <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Criteria Checklist (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#3a302a] font-label mb-2">
                Evaluated Criteria &amp; Compliance Checklist
              </h4>

              {criteria.map((item, index) => (
                <div key={index} className="p-3.5 rounded-xl bg-[#f6f0e8] flex items-center justify-between border border-[#d8d0c8]/60">
                  <div className="flex items-center gap-3">
                    {item.passed ? (
                      <CheckCircle2 className="w-5 h-5 text-[#c2652a] shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-[#8c3c3c] shrink-0" />
                    )}
                    <div>
                      <span className="text-xs font-bold text-[#3a302a] block">{item.title}</span>
                      <span className="text-[11px] text-[#605850]">{item.desc}</span>
                    </div>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                    item.passed ? 'bg-[#c2652a]/10 text-[#c2652a]' : 'bg-[#eae2da] text-[#605850]'
                  }`}>
                    {item.score}
                  </span>
                </div>
              ))}
            </div>

            {/* Auditor Coaching Summary (5 cols) */}
            <div className="lg:col-span-5 bg-[#f6f0e8] p-6 rounded-xl flex flex-col justify-between border border-[#d8d0c8]/60">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#3a302a] font-label">Auditor Coaching Summary</h4>
                  <span className="text-[11px] text-[#605850] font-mono">Auditor: QA Lead #08</span>
                </div>

                <div className="p-3.5 bg-white rounded-lg text-xs text-[#3a302a] leading-relaxed shadow-xs border border-[#d8d0c8] mb-4">
                  "Priya showed excellent active listening throughout the first 5 minutes. Clear compliance disclosures. Recommend pairing her with senior lead on enterprise payment term objections to increase closing confidence."
                </div>

                {/* Trajectory Box */}
                <div className="p-3.5 bg-white rounded-lg shadow-xs border border-[#d8d0c8]">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-[#605850]">Priya's 30-Day QA Trajectory</span>
                    <span className="font-bold text-[#c2652a] font-mono flex items-center gap-0.5">
                      <TrendingUp className="w-3.5 h-3.5" /> +12.4%
                    </span>
                  </div>

                  <svg className="w-full h-8 overflow-visible" viewBox="0 0 200 40">
                    <path
                      d="M 0 32 L 35 28 L 70 20 L 105 24 L 140 14 L 175 12 L 200 6"
                      fill="none"
                      stroke="#c2652a"
                      strokeWidth="2.5"
                    />
                    <circle cx="200" cy="6" r="3.5" fill="#c2652a" />
                  </svg>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d8d0c8]/60 flex items-center justify-between">
                <button
                  onClick={() => alert("Audit feedback sent to agent Priya Patel.")}
                  className="px-4 py-2 rounded-lg bg-[#c2652a] text-white text-xs font-semibold hover:bg-[#e08850] transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" /> Approve &amp; Send Feedback
                </button>
                <button
                  onClick={() => alert("Scorecard exported as PDF.")}
                  className="px-3 py-2 rounded-lg text-xs font-semibold text-[#605850] hover:text-[#3a302a] flex items-center gap-1 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" /> Export PDF
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
