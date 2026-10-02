import React from 'react';
import { ShieldCheck, Zap, Globe, Layers, Check } from 'lucide-react';

export default function SubscriptionSection({ onOpenDemo }) {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#faf5ee]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Technical Credibility Strip */}
        <div className="bg-white rounded-2xl p-8 shadow-xs border border-[#d8d0c8] mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-headline font-bold text-[#c2652a] mb-1">99.8%</div>
              <div className="text-xs font-semibold text-[#3a302a]">Platform Uptime</div>
              <p className="text-[11px] text-[#605850] mt-0.5">High-availability carrier failover</p>
            </div>
            <div>
              <div className="text-3xl font-headline font-bold text-[#c2652a] mb-1">&lt;1.0s</div>
              <div className="text-xs font-semibold text-[#3a302a]">Telephony Latency</div>
              <p className="text-[11px] text-[#605850] mt-0.5 font-mono">Global edge WebRTC nodes</p>
            </div>
            <div>
              <div className="text-3xl font-headline font-bold text-[#c2652a] mb-1">100%</div>
              <div className="text-xs font-semibold text-[#3a302a]">Cloud Native</div>
              <p className="text-[11px] text-[#605850] mt-0.5">Zero on-premise hardware required</p>
            </div>
            <div>
              <div className="text-3xl font-headline font-bold text-[#c2652a] mb-1">Multi-Region</div>
              <div className="text-xs font-semibold text-[#3a302a]">Global Redundancy</div>
              <p className="text-[11px] text-[#605850] mt-0.5">Automated geo-routing failover</p>
            </div>
          </div>
        </div>

        {/* Subscription Options Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#c2652a] block mb-2 font-label">
            Flexible Engagement Model
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#3a302a]">
            Transparent Deployment Plans.
          </h2>
          <p className="text-sm text-[#605850] mt-2">
            Choose the operational commitment that matches your team scale.
          </p>
        </div>

        {/* 2 Deployment Plans */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Monthly Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#d8d0c8] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#3a302a] font-label">
                  Monthly Subscription
                </span>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#eae2da] text-[#605850]">
                  Agile Scaling
                </span>
              </div>

              <p className="text-sm text-[#605850] leading-relaxed mb-6">
                Perfect for agile teams, pilot programs, or seasonal calling campaigns requiring flexible seat counts with no long-term lock-in.
              </p>

              <div className="space-y-3 mb-8 text-xs text-[#3a302a]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a]" />
                  <span>Month-to-month seat elasticity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a]" />
                  <span>Full access to Inbound ACD &amp; Predictive Dialing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a]" />
                  <span>Real-time supervisor monitoring &amp; whisper</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a]" />
                  <span>Standard CRM integration webhooks</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="w-full py-3 rounded-lg bg-[#f6f0e8] hover:bg-[#ece6dc] text-[#3a302a] font-semibold text-xs text-center transition-colors shadow-xs cursor-pointer block border border-[#d8d0c8]/60"
            >
              Inquire About Monthly Plan
            </button>
          </div>

          {/* Annual Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-[#c2652a] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#c2652a]/10 rounded-bl-full pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c2652a] font-label">
                  Annual Enterprise Plan
                </span>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#c2652a] text-white">
                  Recommended
                </span>
              </div>

              <p className="text-sm text-[#605850] leading-relaxed mb-6">
                Engineered for mature contact centers and enterprises demanding dedicated support, SLA guarantees, and volume telephony discounts.
              </p>

              <div className="space-y-3 mb-8 text-xs text-[#3a302a]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a]" />
                  <span>Significant volume cost savings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a]" />
                  <span>Dedicated Neno Technology implementation manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a]" />
                  <span>Custom CRM database mapping &amp; custom webhooks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a]" />
                  <span>Priority 24/7 technical support &amp; 99.8% uptime SLA</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="w-full py-3 rounded-lg bg-[#c2652a] text-white font-semibold text-xs text-center hover:bg-[#e08850] transition-colors shadow-sm cursor-pointer block"
            >
              Schedule Enterprise Consultation
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
