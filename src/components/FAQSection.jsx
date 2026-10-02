import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is Neno Dialer?',
      a: 'Neno Dialer by Neno Technology is an enterprise business communication and call management platform unifying inbound ACD, predictive outbound dialing, WebRTC telephony, supervisor monitoring, dual-channel call recording, structured QA call auditing, and CRM data integrations into one software interface.'
    },
    {
      q: 'How does Automated Call Distribution (ACD) route calls when all reps are busy?',
      a: 'When all agents are occupied, Neno Dialer places incoming calls into a skill-prioritized virtual queue. Callers can hear live wait time estimations, periodic queue position announcements, or trigger an automated virtual callback request so they can hang up without losing their position in line.'
    },
    {
      q: 'What is the difference between Predictive, Progressive, and Preview calling modes?',
      a: 'Predictive Calling uses statistical algorithms to dial multiple numbers concurrently per agent based on expected answer rates, ensuring zero rep idle time. Progressive Calling dials exactly one number per available rep as soon as their previous wrap-up timer expires. Preview Calling presents full CRM context to the agent before initiating the call.'
    },
    {
      q: 'Can supervisors monitor live calls without the customer hearing them?',
      a: 'Yes. Neno Dialer offers three distinct supervisor oversight modes: Silent Monitor (listen invisibly), Whisper Coaching (speak directly into the agent\'s ear without the caller hearing), and Barge-in (join the call as a full three-way participant).'
    },
    {
      q: 'Is physical hardware or a PBX server needed on our premises?',
      a: 'No physical hardware is required. Neno Dialer runs entirely on secure WebRTC cloud infrastructure. Your agents only require a modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari) and a standard headset.'
    },
    {
      q: 'How does the Call Audit and Quality Scoring module operate?',
      a: 'The Call Audit module presents QA evaluators with customizable scorecard checklists (greeting verification, disclosure statements, objection handling, CRM tagging). Auditors grade criteria, provide feedback, and track 30-day agent trajectory metrics.'
    }
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full py-20 bg-[#f6f0e8] border-b border-[#d8d0c8]/60" id="faq">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#c2652a] block mb-2 font-label">
            Platform Clarifications
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#3a302a]">
            Frequently Asked Questions.
          </h2>
          <p className="text-sm text-[#605850] mt-2">
            Everything you need to know about Neno Dialer deployment and capabilities.
          </p>
        </div>

        {/* Accordion Group */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={i} className="bg-white rounded-xl shadow-xs border border-[#d8d0c8] overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-headline text-lg font-bold text-[#3a302a] hover:text-[#c2652a] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#c2652a] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-[#605850] leading-relaxed border-t border-[#d8d0c8]/40 mt-1 pt-3 font-body">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
