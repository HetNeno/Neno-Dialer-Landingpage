import React from 'react';
import { Bot, Radio, Building2, Laptop, Check } from 'lucide-react';

export default function PlatformCapabilitiesSection() {
  return (
    <section className="w-full py-20 bg-[#f6f0e8] border-y border-[#d8d0c8]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#c2652a] block mb-2 font-label">
            Telephony &amp; Platform Capabilities
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3a302a] leading-tight">
            Engineered for Advanced Calling Demands.
          </h2>
          <p className="text-base sm:text-lg text-[#605850] mt-4 leading-relaxed">
            From self-service conversational bots to multi-tenant client instances, Neno Dialer scales to match sophisticated enterprise architectures.
          </p>
        </div>

        {/* 4 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: AI Voice Bot */}
          <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#d8d0c8] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#c2652a]/10 flex items-center justify-center text-[#c2652a] mb-6">
                <Bot className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#c2652a] mb-1">
                Conversational Automation
              </div>
              <h3 className="font-headline text-2xl font-bold text-[#3a302a] mb-3">
                AI Voice Bot: Listen • Understand • Respond
              </h3>
              <p className="text-sm text-[#605850] leading-relaxed mb-6">
                Empower your contact center with 24/7 conversational voice bots powered by Automatic Speech Recognition (ASR) and Natural Language Understanding (NLU). Resolve repetitive inquiries or qualify leads before human transfer.
              </p>

              <div className="space-y-3 p-4 bg-[#f6f0e8] rounded-xl font-mono text-xs mb-6 border border-[#d8d0c8]/60">
                <div className="flex items-center gap-2">
                  <span className="text-[#c2652a] font-bold">1. Listen:</span>
                  <span className="text-[#3a302a]">Multi-lingual speech capture in real-time</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#c2652a] font-bold">2. Understand:</span>
                  <span className="text-[#3a302a]">Intent recognition &amp; sentiment analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#c2652a] font-bold">3. Respond:</span>
                  <span className="text-[#3a302a]">Natural neural voice playback or warm agent handover</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-[#605850] font-mono">Zero Code Bot Flow Builder Included</div>
          </div>

          {/* Card 2: Voice Broadcasting */}
          <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#d8d0c8] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#eae2da] flex items-center justify-center text-[#2a2420] mb-6">
                <Radio className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#78706a] mb-1">
                Mass Notifications
              </div>
              <h3 className="font-headline text-2xl font-bold text-[#3a302a] mb-3">
                Scalable Voice Broadcasting
              </h3>
              <p className="text-sm text-[#605850] leading-relaxed mb-6">
                Dispatch critical voice announcements, service outage updates, payment reminders, or emergency notifications to thousands of recipients simultaneously with live delivery verification and IVR response capture.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-[#3a302a]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a]" />
                  <span>Scheduled broadcast campaigns with retry logic</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a]" />
                  <span>Interactive DTMF touch-tone response handling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a]" />
                  <span>Comprehensive live broadcast delivery logs</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-[#605850] font-mono">10,000+ Concurrent Channels Available</div>
          </div>

          {/* Card 3: Multi-Company Single-Login */}
          <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#d8d0c8] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#ece6dc] flex items-center justify-center text-[#c2652a] mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#605850] mb-1">
                Multi-Tenant Architecture
              </div>
              <h3 className="font-headline text-2xl font-bold text-[#3a302a] mb-3">
                Multi-Company Single-Login
              </h3>
              <p className="text-sm text-[#605850] leading-relaxed mb-6">
                Ideal for business groups, holding companies, and BPO service providers. Manage dozens of distinct operating entities, independent billing rules, unique queue parameters, and rep assignments from one single pane of glass.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-[#3a302a]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a]" />
                  <span>Isolated customer data partitions &amp; roles</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a]" />
                  <span>Switch between business workspaces in one click</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a]" />
                  <span>Centralized executive reporting across all sub-accounts</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-[#605850] font-mono">Unlimited Subsidiary Workspaces</div>
          </div>

          {/* Card 4: Remote-Ready WebRTC Setup */}
          <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#d8d0c8] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#c2652a]/10 flex items-center justify-center text-[#c2652a] mb-6">
                <Laptop className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#c2652a] mb-1">
                Zero Hardware Overhead
              </div>
              <h3 className="font-headline text-2xl font-bold text-[#3a302a] mb-3">
                Remote-Ready WebRTC Setup
              </h3>
              <p className="text-sm text-[#605850] leading-relaxed mb-6">
                Empower your distributed team to work from anywhere. All agents need is a standard web browser and an internet connection. No physical PBX units, no VPN complications, and zero desktop app installs required.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-[#3a302a]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a]" />
                  <span>Chrome, Edge, Firefox, and Safari supported</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a]" />
                  <span>Adaptive Opus audio codec for unstable bandwidth</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c2652a]" />
                  <span>Sub-second rep provisioning via secure email invite</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-[#605850] font-mono">Enterprise TLS 1.3 &amp; SRTP Encryption</div>
          </div>

        </div>

      </div>
    </section>
  );
}
