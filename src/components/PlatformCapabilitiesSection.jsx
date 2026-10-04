import React from 'react';
import { Bot, Radio, Building2, Laptop, Check } from 'lucide-react';

export default function PlatformCapabilitiesSection() {
  return (
    <section className="w-full py-20 bg-[#F5F8FC] border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2563EB] block mb-2 font-label">
            Telephony &amp; Platform Capabilities
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
            Engineered for Advanced Calling Demands.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] mt-4 leading-relaxed">
            From self-service conversational bots to multi-tenant client instances, Neno Dialer scales to match sophisticated enterprise architectures.
          </p>
        </div>

        {/* 4 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: AI Voice Bot */}
          <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-xs border border-[#E2E8F0] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] flex items-center justify-center text-[#2563EB] mb-6">
                <Bot className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2563EB] mb-1">
                Conversational Automation
              </div>
              <h3 className="font-headline text-2xl font-bold text-[#0F172A] mb-3">
                AI Voice Bot: Listen • Understand • Respond
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Empower your contact center with 24/7 conversational voice bots powered by Automatic Speech Recognition (ASR) and Natural Language Understanding (NLU). Resolve repetitive inquiries or qualify leads before human transfer.
              </p>

              <div className="space-y-3 p-4 bg-[#F5F8FC] rounded-xl text-xs mb-6 border border-[#E2E8F0]">
                <div className="flex items-center gap-2">
                  <span className="text-[#2563EB] font-bold">1. Listen:</span>
                  <span className="text-[#0F172A]">Multi-lingual speech capture in real-time</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#2563EB] font-bold">2. Understand:</span>
                  <span className="text-[#0F172A]">Intent recognition &amp; sentiment analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#2563EB] font-bold">3. Respond:</span>
                  <span className="text-[#0F172A]">Natural neural voice playback or warm agent handover</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-[#64748B]">Conversational AI Integration</div>
          </div>

          {/* Card 2: Voice Broadcasting */}
          <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#E2E8F0] flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] flex items-center justify-center text-[#2563EB] mb-6">
                <Radio className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1 font-label">
                Mass Notifications
              </div>
              <h3 className="font-headline text-2xl font-bold text-[#0F172A] mb-3">
                Scalable Voice Broadcasting
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Dispatch critical voice announcements, service outage updates, payment reminders, or emergency notifications to thousands of recipients simultaneously with live delivery verification and IVR response capture.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-[#0F172A]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563EB]" />
                  <span>Scheduled broadcast campaigns with retry logic</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563EB]" />
                  <span>Interactive DTMF touch-tone response handling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563EB]" />
                  <span>Comprehensive live broadcast delivery logs</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-[#64748B]">High Capacity Channels</div>
          </div>

          {/* Card 3: Multi-Company Single-Login */}
          <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#E2E8F0] flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] flex items-center justify-center text-[#2563EB] mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1 font-label">
                Multi-Tenant Architecture
              </div>
              <h3 className="font-headline text-2xl font-bold text-[#0F172A] mb-3">
                Multi-Company Single-Login
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Ideal for business groups, holding companies, and BPO service providers. Manage dozens of distinct operating entities, independent billing rules, unique queue parameters, and rep assignments from one single pane of glass.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-[#0F172A]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563EB]" />
                  <span>Isolated customer data partitions &amp; roles</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563EB]" />
                  <span>Switch between business workspaces in one click</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563EB]" />
                  <span>Centralized executive reporting across all sub-accounts</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-[#64748B]">Multi-Entity Support</div>
          </div>

          {/* Card 4: Remote-Ready WebRTC Setup */}
          <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#E2E8F0] flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] flex items-center justify-center text-[#2563EB] mb-6">
                <Laptop className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB] mb-1 font-label">
                Zero Hardware Overhead
              </div>
              <h3 className="font-headline text-2xl font-bold text-[#0F172A] mb-3">
                Remote-Ready WebRTC Setup
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Empower your distributed team to work from anywhere. All agents need is a standard web browser and an internet connection. No physical PBX units, no VPN complications, and zero desktop app installs required.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-[#0F172A]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563EB]" />
                  <span>Chrome, Edge, Firefox, and Safari supported</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563EB]" />
                  <span>Adaptive Opus audio codec for unstable bandwidth</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563EB]" />
                  <span>Sub-second rep provisioning via secure email invite</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-[#64748B]">TLS 1.3 &amp; SRTP Security</div>
          </div>

        </div>

      </div>
    </section>
  );
}
