import React from 'react';
import { Users, Clock, PhoneCall, Award, Activity } from 'lucide-react';

export default function WorkforceSection() {
  return (
    <section className="w-full py-20 bg-[#f6f0e8] border-b border-[#d8d0c8]/60" id="workforce">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#c2652a] block mb-2 font-label">
            Fleet Operations &amp; Visibility
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3a302a] leading-tight">
            Operational Visibility for Distributed Calling Teams.
          </h2>
          <p className="text-base sm:text-lg text-[#605850] mt-4 leading-relaxed">
            Monitor your telecallers whether they operate from a centralized contact center or remote home offices. Track live agent status, classify productive vs non-work time, and maintain complete attendance transparency.
          </p>
        </div>

        {/* Dashboard 4 KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          <div className="bg-white p-6 rounded-2xl shadow-xs border border-[#d8d0c8]">
            <div className="flex items-center justify-between text-[#605850] mb-2">
              <span className="text-xs font-bold uppercase tracking-wider font-label">Productive Time</span>
              <Clock className="w-5 h-5 text-[#c2652a]" />
            </div>
            <div className="text-3xl font-headline font-bold text-[#3a302a] mb-1">74.2%</div>
            <p className="text-xs text-[#605850]">Live talk + wrap-up time across all active shifts today</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xs border border-[#d8d0c8]">
            <div className="flex items-center justify-between text-[#605850] mb-2">
              <span className="text-xs font-bold uppercase tracking-wider font-label">Calls Handled</span>
              <PhoneCall className="w-5 h-5 text-[#c2652a]" />
            </div>
            <div className="text-3xl font-headline font-bold text-[#3a302a] mb-1">1,842</div>
            <p className="text-xs text-[#605850]">98.1% answered within SLA threshold of 20 seconds</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xs border border-[#d8d0c8]">
            <div className="flex items-center justify-between text-[#605850] mb-2">
              <span className="text-xs font-bold uppercase tracking-wider font-label">Avg Talk Duration</span>
              <Activity className="w-5 h-5 text-[#c2652a]" />
            </div>
            <div className="text-3xl font-headline font-bold text-[#3a302a] mb-1">04:18</div>
            <p className="text-xs text-[#605850]">Optimal range for tech support discovery workflows</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xs border border-[#d8d0c8]">
            <div className="flex items-center justify-between text-[#605850] mb-2">
              <span className="text-xs font-bold uppercase tracking-wider font-label">Team Quality Mean</span>
              <Award className="w-5 h-5 text-[#c2652a]" />
            </div>
            <div className="text-3xl font-headline font-bold text-[#c2652a] mb-1">8.7 / 10</div>
            <p className="text-xs text-[#605850]">Based on 320 audited calls over rolling 7-day period</p>
          </div>

        </div>

        {/* Aggregate Time Breakdown Progress Bar */}
        <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#d8d0c8]">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#3a302a] font-label mb-6">
            Aggregate Fleet Time Classification (Today's Shifts)
          </h3>

          <div className="h-6 w-full rounded-full bg-[#ece6dc] overflow-hidden flex mb-4 border border-[#d8d0c8]">
            <div className="bg-[#c2652a] h-full transition-all" style={{ width: '58%' }} title="Talk Time: 58%"></div>
            <div className="bg-[#e08850] h-full transition-all" style={{ width: '16%' }} title="Wrap-Up Time: 16%"></div>
            <div className="bg-[#cec6be] h-full transition-all" style={{ width: '14%' }} title="Idle Ready: 14%"></div>
            <div className="bg-[#eae2da] h-full transition-all" style={{ width: '12%' }} title="Break / Pause: 12%"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#c2652a]"></div>
              <span className="text-[#3a302a] font-medium">Talk Time (58%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#e08850]"></div>
              <span className="text-[#3a302a] font-medium">Wrap-Up Time (16%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#cec6be]"></div>
              <span className="text-[#3a302a] font-medium">Idle &amp; Ready (14%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#eae2da]"></div>
              <span className="text-[#3a302a] font-medium">Break / Away (12%)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
