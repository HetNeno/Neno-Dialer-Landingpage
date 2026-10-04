import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is the ₹49 demo call?',
      a: 'The ₹49 call is a dedicated 15-minute 1-on-1 walkthrough session with our product specialist. We use this nominal fee to assign a dedicated consultant to analyze your specific sales workflow and explain the complete product.'
    },
    {
      q: 'What happens in the 15-minute call?',
      a: 'During the 15 minutes, our mentor explains what the dialer is, who should use it, what it can do (3x calling capacity, ACD routing, live recording), why Neno Dialer benefits your business, and answers all your questions.'
    },
    {
      q: 'How do I book the call?',
      a: 'Click any "Book Demo for ₹49" button on this page, fill out your contact details, complete the ₹49 payment via Razorpay, and then choose your preferred date and time slot.'
    },
    {
      q: 'Will I get instant access to a live demo?',
      a: 'Yes! Your product specialist will walk you through live working software, WebRTC calling modes, ACD routing, and supervisor dashboards right inside the video call.'
    },
    {
      q: 'Who is this call suitable for?',
      a: 'This session is suitable for business owners, sales managers, telecalling team leads, and B2B founders looking to scale calling capacity, monitor rep performance, and automate CRM logging.'
    },
    {
      q: 'Can it connect with our existing CRM & workflow?',
      a: 'Yes. Neno Dialer supports Webhooks and REST API integrations with popular CRMs including Salesforce, HubSpot, Zoho, and custom internal databases.'
    }
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-[#FAFCFF] border-b border-[#E2E8F0]" id="faq">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2563EB] block mb-2 font-label">
            ANSWERS &amp; CLARIFICATIONS
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#475569] mt-2">
            Clear answers to common questions about Neno Dialer.
          </p>
        </div>

        {/* Accordion Group */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={i} className="bg-[#FFFFFF] rounded-2xl shadow-xs border border-[#E2E8F0] overflow-hidden transition-all">
                <button
                  onClick={() => toggle(i)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-headline text-base sm:text-lg font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#2563EB] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0] mt-1 pt-4 font-body">
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
