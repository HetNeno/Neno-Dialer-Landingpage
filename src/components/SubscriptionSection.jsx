import React from 'react';
import { ShieldCheck, Zap, Globe, Layers, Check, Sparkles } from 'lucide-react';

export default function SubscriptionSection({ onOpenDemo }) {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#faf5ee]" id="pricing">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Technical Credibility Strip */}
        <div className="bg-white rounded-2xl p-8 shadow-xs border border-[#d8d0c8]/70 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-headline font-bold text-[#c2652a] mb-1">99.8%</div>
              <div className="text-xs font-semibold text-[#3a302a]">Platform Uptime</div>
              <p className="text-[11px] text-[#605850] mt-0.5">High-availability carrier failover</p>
            </div>
            <div>
              <div className="text-3xl font-headline font-bold text-[#c2652a] mb-1">&lt;1.0s</div>
              <div className="text-xs font-semibold text-[#3a302a]">Telephony Latency</div>
              <p className="text-[11px] text-[#605850] mt-0.5">Global edge WebRTC nodes</p>
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
            Transparent Subscription &amp; Pricing
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3a302a]">
            Simple, All-Inclusive Deployment Plans.
          </h2>
          <p className="text-base text-[#605850] mt-3">
            All plans include full access to every Neno Dialer component—ACD routing, predictive dialing, call recording, QA auditing, and CRM sync.
          </p>
        </div>

        {/* 3 Deployment Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Plan 1: Monthly Plan */}
          <div className="bg-white p-8 rounded-2xl border border-[#d8d0c8] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#3a302a] font-label">
                  Monthly Subscription
                </span>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#eae2da] text-[#605850]">
                  Flexibility
                </span>
              </div>

              {/* Price Box */}
              <div className="mb-6 pb-6 border-b border-[#d8d0c8]/60">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-headline font-bold text-[#3a302a]">₹1,000</span>
                  <span className="text-xs font-semibold text-[#605850]">+ GST / seat / mo</span>
                </div>
                <div className="text-xs text-[#8c3c3c] font-semibold mt-1">
                  Regular Price: <line-through className="line-through text-[#605850]">₹1,500 + GST</line-through>
                </div>
              </div>

              <p className="text-xs text-[#605850] leading-relaxed mb-6">
                Ideal for growing teams needing agile seat management without long-term commitments.
              </p>

              <div className="space-y-3 mb-8 text-xs text-[#3a302a]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a] shrink-0" />
                  <span>All platform components included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a] shrink-0" />
                  <span>Inbound ACD &amp; Outbound Predictive Dialing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a] shrink-0" />
                  <span>Dual-channel recording &amp; Quality Auditing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a] shrink-0" />
                  <span>Supervisor live whisper &amp; silent monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a] shrink-0" />
                  <span>CRM Webhook &amp; API Integration</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="w-full py-3 rounded-lg bg-[#f6f0e8] hover:bg-[#ece6dc] text-[#3a302a] font-semibold text-xs text-center transition-colors border border-[#d8d0c8]/80 cursor-pointer"
            >
              Get Started Monthly
            </button>
          </div>

          {/* Plan 2: Annual Plan (Featured) */}
          <div className="bg-white p-8 rounded-2xl border-2 border-[#c2652a] shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#c2652a] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg font-label">
              Best Value • Save 17%
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c2652a] font-label">
                  Annual Enterprise Plan
                </span>
              </div>

              {/* Price Box */}
              <div className="mb-6 pb-6 border-b border-[#d8d0c8]/60">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-headline font-bold text-[#c2652a]">₹10,000</span>
                  <span className="text-xs font-semibold text-[#605850]">+ GST / seat / yr</span>
                </div>
                <div className="text-xs text-[#8c3c3c] font-semibold mt-1">
                  Regular Price: <line-through className="line-through text-[#605850]">₹12,000 + GST</line-through>
                </div>
              </div>

              <p className="text-xs text-[#605850] leading-relaxed mb-6">
                Designed for established contact centers looking for maximum annual savings and priority deployment.
              </p>

              <div className="space-y-3 mb-8 text-xs text-[#3a302a]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a] shrink-0" />
                  <span className="font-bold text-[#3a302a]">Everything in Monthly Plan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a] shrink-0" />
                  <span>Maximum cost savings per seat</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a] shrink-0" />
                  <span>Dedicated implementation manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a] shrink-0" />
                  <span>Priority 24/7 technical support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a] shrink-0" />
                  <span>Custom CRM field &amp; database mapping</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="w-full py-3 rounded-lg bg-[#c2652a] text-white font-semibold text-xs text-center hover:bg-[#e08850] transition-colors shadow-sm cursor-pointer"
            >
              Choose Annual Plan
            </button>
          </div>

          {/* Plan 3: Custom Pricing Plan */}
          <div className="bg-white p-8 rounded-2xl border border-[#d8d0c8] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#3a302a] font-label">
                  Custom Enterprise Plan
                </span>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#ece6dc] text-[#3a302a]">
                  High Volume
                </span>
              </div>

              {/* Price Box */}
              <div className="mb-6 pb-6 border-b border-[#d8d0c8]/60">
                <div className="text-3xl font-headline font-bold text-[#3a302a]">Custom Quote</div>
                <div className="text-xs text-[#605850] mt-1">Tailored for large fleets &amp; multi-tenant BPOs</div>
              </div>

              <p className="text-xs text-[#605850] leading-relaxed mb-6">
                Tailored solution for large telecaller deployments, custom carrier integrations, and bespoke SLA requirements.
              </p>

              <div className="space-y-3 mb-8 text-xs text-[#3a302a]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a] shrink-0" />
                  <span>Custom seat volume pricing discounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a] shrink-0" />
                  <span>Private SIP trunking &amp; carrier integrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a] shrink-0" />
                  <span>AI Voice Bot &amp; Mass Voice Broadcasting add-ons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a] shrink-0" />
                  <span>Guaranteed 99.8% uptime SLA agreement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a] shrink-0" />
                  <span>Multi-company single-login tenancy</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="w-full py-3 rounded-lg bg-[#3a302a] hover:bg-[#2a2420] text-white font-semibold text-xs text-center transition-colors cursor-pointer"
            >
              Request Custom Quote
            </button>
          </div>

        </div>

        {/* Feature Inclusivity Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#ece6dc] border border-[#d8d0c8]/80 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c2652a] text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#3a302a]">All Features &amp; Components Included</h4>
              <p className="text-xs text-[#605850]">No hidden add-on fees for core calling, queue management, call recording, or quality scoring.</p>
            </div>
          </div>

          <button
            onClick={onOpenDemo}
            className="px-6 py-2.5 rounded-lg bg-[#c2652a] text-white text-xs font-semibold hover:bg-[#e08850] transition-colors shrink-0 cursor-pointer"
          >
            Talk to Sales
          </button>
        </div>

      </div>
    </section>
  );
}
