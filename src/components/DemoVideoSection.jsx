import React, { useState } from 'react';
import { Play, Headphones, RefreshCw, BarChart2, ShieldCheck, Layers } from 'lucide-react';

export default function DemoVideoSection({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "LIVE ACD DEMO", desc: "Automated call distribution & skill routing" },
    { name: "INBOUND ROUTING", desc: "Queue management & instant IVR fallback" },
    { name: "OUTBOUND CAMPAIGN", desc: "Predictive & progressive dialing pacing" },
    { name: "CRM SYNC", desc: "Real-time bi-directional contact update" }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#FAFCFF]" id="demo-video">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#0F172A]">
            See Neno Dialer In Action
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-2">
            A quick, real-time walkthrough experience of web-based calling workflows.
          </p>
        </div>

        {/* Video Player Mockup Container */}
        <div className="max-w-4xl mx-auto bg-[#0F172A] rounded-2xl shadow-2xl overflow-hidden border border-[#1E293B]">
          
          {/* Main Video Stage */}
          <div 
            onClick={onOpenDemo}
            className="relative aspect-video w-full bg-gradient-to-b from-[#1E293B] to-[#0F172A] flex flex-col items-center justify-center cursor-pointer group p-6"
          >
            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>

            {/* Play Button Icon */}
            <div className="relative z-10 w-20 h-20 rounded-full bg-[#2563EB] group-hover:bg-[#1D4ED8] text-white flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-lg border-4 border-white/20 mb-4">
              <Play className="w-8 h-8 fill-white ml-1" />
            </div>

            <span className="relative z-10 text-xs font-mono tracking-widest text-white/80 uppercase font-bold group-hover:text-white transition-colors bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
              ► Watch Product Demo
            </span>

            {/* Simulated UI background graphics */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] text-slate-400 font-mono pointer-events-none">
              <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">100% WebRTC Stream</span>
              <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">HD FLAC Audio</span>
            </div>
          </div>

          {/* Bottom Tabs Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#1E293B] bg-[#090D16]">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`p-4 text-center transition-colors border-r border-[#1E293B] last:border-r-0 cursor-pointer ${
                  activeTab === idx ? 'bg-[#1E293B] text-[#60A5FA]' : 'text-slate-400 hover:text-white hover:bg-[#1E293B]/50'
                }`}
              >
                <div className="text-[11px] font-mono font-bold tracking-wider uppercase block">
                  {tab.name}
                </div>
                <div className="text-[10px] text-slate-400 mt-1 truncate">
                  {tab.desc}
                </div>
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
