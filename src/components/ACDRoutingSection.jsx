import React, { useState } from 'react';
import { GitFork, Clock, UserCheck, ShieldCheck, Zap, ArrowRight, UserX, UserCheck2, UserMinus } from 'lucide-react';

export default function ACDRoutingSection() {
  const [activeAgentFilter, setActiveAgentFilter] = useState('all');

  const agents = [
    { name: 'Priya Patel', role: 'Technical Support • L2', status: 'Available', color: 'bg-[#2563EB] text-white', idle: '01:45s' },
    { name: 'Marcus Vance', role: 'Enterprise Inbound', status: 'Busy', color: 'bg-[#E2E8F0] text-[#0F172A]', idle: 'On Call 08:25' },
    { name: 'Sofia N.', role: 'Billing & Contracts', status: 'Wrap-Up', color: 'bg-[#F1F5F9] text-[#475569]', idle: 'Wrap-Up 00:14' },
    { name: 'Devon King', role: 'General Inquiries', status: 'Available', color: 'bg-[#2563EB] text-white', idle: '00:32s' },
  ];

  const filteredAgents = activeAgentFilter === 'all' 
    ? agents 
    : agents.filter(a => a.status.toLowerCase() === activeAgentFilter);

  return (
    <section className="w-full py-20 lg:py-28 bg-[#FAFCFF]" id="call-management">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2563EB] block mb-2 font-label">
            Intelligent Call Management
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
            Keep Calls Moving to Available Agents.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] mt-4 leading-relaxed">
            Neno Dialer’s Automated Call Distribution (ACD) dynamically evaluates incoming calls against your business hours, queue priority, agent skill sets, and idle states to guarantee swift connection without manual transfers.
          </p>
        </div>

        {/* ACD Architecture Visual Flow */}
        <div className="bg-[#FFFFFF] rounded-2xl p-8 lg:p-12 shadow-xs border border-[#E2E8F0] mb-12">
          
          <div className="flex items-center justify-between pb-6 mb-8 bg-[#F5F8FC] px-4 py-3 rounded-xl border border-[#E2E8F0]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] font-label flex items-center gap-2">
              <GitFork className="w-4 h-4 text-[#2563EB]" /> Automated Call Distribution (ACD) Logic Chain
            </span>
            <span className="text-xs font-mono text-[#64748B]">Routing Latency: &lt;140ms</span>
          </div>

          {/* 5 Flow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            <div className="bg-[#F5F8FC] p-5 rounded-xl flex flex-col justify-between shadow-xs border border-[#E2E8F0]">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#EEF5FF] text-[#2563EB] flex items-center justify-center font-bold text-sm mb-3">01</div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-1">Customer Inbound</h3>
                <p className="text-xs text-[#475569] leading-relaxed">PSTN, SIP trunk, or WebRTC call triggers instant carrier handshake.</p>
              </div>
              <div className="mt-4 pt-2 border-t border-[#E2E8F0] text-[10px] font-mono text-[#2563EB] font-bold">Caller ID Identified</div>
            </div>

            <div className="bg-[#F5F8FC] p-5 rounded-xl flex flex-col justify-between shadow-xs border border-[#E2E8F0]">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#E2E8F0] text-[#475569] flex items-center justify-center font-bold text-sm mb-3">02</div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-1">Hours &amp; IVR Check</h3>
                <p className="text-xs text-[#475569] leading-relaxed">System verifies operating schedule. Routes after-hours to voicemail or bot.</p>
              </div>
              <div className="mt-4 pt-2 border-t border-[#E2E8F0] text-[10px] font-mono text-[#64748B]">Schedule: 09:00 - 18:00</div>
            </div>

            <div className="bg-[#F5F8FC] p-5 rounded-xl flex flex-col justify-between shadow-xs border border-[#E2E8F0]">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#E2E8F0] text-[#475569] flex items-center justify-center font-bold text-sm mb-3">03</div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-1">Skill Classification</h3>
                <p className="text-xs text-[#475569] leading-relaxed">Language preference and department tags dictate queue assignment.</p>
              </div>
              <div className="mt-4 pt-2 border-t border-[#E2E8F0] text-[10px] font-mono text-[#64748B]">Tier-1 Technical Skill</div>
            </div>

            <div className="bg-[#F5F8FC] p-5 rounded-xl flex flex-col justify-between shadow-xs border border-[#E2E8F0]">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#E2E8F0] text-[#475569] flex items-center justify-center font-bold text-sm mb-3">04</div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-1">Idle Agent Hunt</h3>
                <p className="text-xs text-[#475569] leading-relaxed">Algorithm locates the longest-idle representative ready for a call.</p>
              </div>
              <div className="mt-4 pt-2 border-t border-[#E2E8F0] text-[10px] font-mono text-[#64748B]">Longest-Idle Pacing</div>
            </div>

            <div className="bg-[#EEF5FF] p-5 rounded-xl flex flex-col justify-between shadow-xs border border-[#DBEAFE]">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm mb-3">05</div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-1">WebRTC Audio Connect</h3>
                <p className="text-xs text-[#0F172A] leading-relaxed">Instant voice patch with simultaneous CRM contact card pop.</p>
              </div>
              <div className="mt-4 pt-2 border-t border-[#DBEAFE] text-[10px] font-mono text-[#2563EB] font-bold">Audio Active • Zero Delay</div>
            </div>

          </div>

          {/* Real-Time Agent Matrix */}
          <div className="mt-10 pt-8 border-t border-[#E2E8F0]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
              <h3 className="text-xs uppercase font-bold tracking-wider text-[#0F172A] font-label">
                Real-Time Routing Availability Matrix
              </h3>
              
              {/* Filter Tabs */}
              <div className="flex items-center gap-2">
                {['all', 'available', 'busy', 'wrap-up'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setActiveAgentFilter(st)}
                    className={`px-2.5 py-1 rounded text-xs font-semibold uppercase cursor-pointer ${
                      activeAgentFilter === st
                        ? 'bg-[#2563EB] text-white'
                        : 'bg-[#F5F8FC] text-[#475569] hover:bg-[#EEF5FF] border border-[#E2E8F0]'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredAgents.map((ag, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#F5F8FC] flex items-center justify-between border border-[#E2E8F0]">
                  <div>
                    <span className="text-xs font-bold text-[#0F172A] block">{ag.name}</span>
                    <span className="text-[11px] text-[#64748B]">{ag.role}</span>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${ag.color}`}>
                      {ag.status}
                    </span>
                    <span className="text-[10px] block font-mono text-[#64748B] mt-1">{ag.idle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
