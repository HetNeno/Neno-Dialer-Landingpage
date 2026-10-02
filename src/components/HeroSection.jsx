import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, PlayCircle, Headphones, Activity, Phone, PhoneIncoming, PhoneOutgoing, 
  Mic, MicOff, Pause, Grid, FileText, Tag, UserPlus, PhoneForwarded, PhoneOff, 
  CheckCircle2, ShieldCheck, Zap, Globe, Sparkles, Plus, Clock, Users, BarChart3
} from 'lucide-react';

export default function HeroSection({ onOpenDemo }) {
  // Interactive Command Center State
  const [isMuted, setIsMuted] = useState(false);
  const [isOnHold, setIsOnHold] = useState(false);
  const [callDuration, setCallDuration] = useState(505); // 08:25 in seconds
  const [notesText, setNotesText] = useState(
    "Discussed 250-seat expansion for Q3 rollout. Customer asked about local DID availability in UK/Germany and real-time WebRTC audio recording failover. Scheduled live engineering demo with sales lead for Thursday at 2:00 PM EST."
  );
  const [tags, setTags] = useState(['#Interested', '#Follow-Up-Q3', '#Product-Inbound']);
  const [newTagInput, setNewTagInput] = useState('');
  const [showTagInput, setShowTagInput] = useState(false);
  const [whisperActive, setWhisperActive] = useState(false);
  const [activeTab, setActiveTab] = useState('notes');

  // Timer effect for call duration
  useEffect(() => {
    const timer = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (newTagInput.trim()) {
      const formatted = newTagInput.startsWith('#') ? newTagInput : `#${newTagInput}`;
      if (!tags.includes(formatted)) {
        setTags([...tags, formatted]);
      }
      setNewTagInput('');
      setShowTagInput(false);
    }
  };

  return (
    <section className="relative w-full pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-[#faf5ee]" id="overview">
      {/* Background warm sienna glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#c2652a]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Hero Header & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eae2da] text-[#605850] text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#c2652a] animate-pulse"></span>
            <span>Neno Dialer • Business Communication Platform</span>
          </div>

          <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#3a302a] leading-[1.08] mb-6">
            Smarter Calling.<br />
            <span className="italic font-normal text-[#c2652a]">Better Communication.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#605850] font-normal leading-relaxed max-w-2xl mx-auto mb-9">
            Neno Dialer brings calling, call distribution, monitoring, recording, agent workflows, and business communication controls into one structured platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#c2652a] text-white font-semibold text-sm hover:bg-[#e08850] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <a
              href="#workflow"
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#f2ece4] hover:bg-[#ece6dc] text-[#3a302a] font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <PlayCircle className="w-4 h-4 text-[#c2652a]" />
              <span>Explore How It Works</span>
            </a>
          </div>

          {/* Credibility Ribbon */}
          <div className="mt-12 pt-8 border-t border-[#d8d0c8]/60 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-semibold text-[#605850] uppercase tracking-wider">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#c2652a]" /> WebRTC Remote-Ready</span>
            <span className="text-[#d8d0c8] hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-[#c2652a]" /> Automated Call Distribution</span>
            <span className="text-[#d8d0c8] hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-[#c2652a]" /> Inbound &amp; Outbound Calling</span>
            <span className="text-[#d8d0c8] hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-[#c2652a]" /> Multi-Company Architecture</span>
            <span className="text-[#d8d0c8] hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#c2652a]" /> Quality Auditing</span>
          </div>
        </div>

        {/* HERO PRODUCT COMMAND CENTER (3-Column Interface Mockup) */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-[#d8d0c8]/80">
          
          {/* Title Bar */}
          <div className="bg-[#ece6dc] px-5 py-3 flex items-center justify-between border-b border-[#d8d0c8]/80">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#d47070]/80"></div>
              <div className="w-3 h-3 rounded-full bg-[#eae2da]"></div>
              <div className="w-3 h-3 rounded-full bg-[#f0a878]"></div>
              <span className="ml-3 text-xs font-medium text-[#605850] flex items-center gap-1.5">
                <Headphones className="w-3.5 h-3.5 text-[#c2652a]" />
                Neno Dialer Active Workspace • Session #4928-EU
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-[11px] font-semibold text-[#c2652a] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c2652a] animate-ping"></span> Live WebRTC Gateway
              </span>
              <span className="text-xs text-[#605850] font-mono hidden sm:inline">SIP: Connected (14ms)</span>
            </div>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px]">
            
            {/* Column 1: Call Activity & Live Queue (Left Panel) */}
            <div className="lg:col-span-3 bg-[#f6f0e8] p-4 flex flex-col justify-between border-r border-[#d8d0c8]/60">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 bg-[#f2ece4] px-3 py-2 rounded-lg">
                  <div>
                    <h3 className="text-xs uppercase font-bold tracking-wider text-[#3a302a]">Queue Stream</h3>
                    <p className="text-[11px] text-[#605850]">Live ACD Routing</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#c2652a] text-white text-[10px] font-bold">4 Waiting</span>
                </div>

                {/* Queue Summary KPIs */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-white p-2 rounded-lg shadow-xs">
                    <div className="text-[10px] text-[#605850] font-semibold">Avg Wait Time</div>
                    <div className="text-sm font-bold text-[#3a302a] font-mono">00:18s</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg shadow-xs">
                    <div className="text-[10px] text-[#605850] font-semibold">Queue SLA</div>
                    <div className="text-sm font-bold text-[#c2652a] font-mono">98.4%</div>
                  </div>
                </div>

                {/* Queue Items */}
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-white shadow-xs border border-[#c2652a]/30 flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#3a302a] truncate">+1 (415) 890-4412</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#c2652a]/10 text-[#c2652a] uppercase">Connected</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#605850]">
                      <span className="flex items-center gap-1"><PhoneIncoming className="w-3 h-3 text-[#c2652a]" /> Inbound Tech Queue</span>
                      <span className="font-mono text-[#3a302a] font-semibold">{formatTime(callDuration)}</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/80 shadow-xs flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#3a302a] truncate">+44 20 7946 0918</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#eae2da] text-[#605850] uppercase">Queued (1st)</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#605850]">
                      <span className="flex items-center gap-1"><Headphones className="w-3 h-3 text-[#78706a]" /> Priority Tier 1</span>
                      <span className="font-mono text-[#c2652a] font-bold">00:24</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/80 shadow-xs flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#3a302a] truncate">+1 (212) 555-0198</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#eae2da] text-[#2a2420] uppercase">Predictive</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#605850]">
                      <span className="flex items-center gap-1"><PhoneOutgoing className="w-3 h-3 text-[#78706a]" /> Outbound Campaign</span>
                      <span className="font-mono text-[#3a302a]">01:42</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/80 shadow-xs flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#3a302a] truncate">+91 98201 54321</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#f2ece4] text-[#605850] uppercase">Wrap-Up</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#605850]">
                      <span className="flex items-center gap-1"><FileText className="w-3 h-3 text-[#78706a]" /> Post-Call Tagging</span>
                      <span className="font-mono text-[#605850]">00:14</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#d8d0c8]/60 flex items-center justify-between text-[11px] text-[#605850]">
                <span>VoIP Gateway: <strong className="text-[#3a302a]">AWS-US-East</strong></span>
                <span className="text-[#c2652a] font-semibold">0 drops today</span>
              </div>
            </div>

            {/* Column 2: Active Call Workspace (Center Panel) */}
            <div className="lg:col-span-6 bg-white p-6 flex flex-col justify-between">
              <div>
                {/* Caller Info Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#c2652a]/10 flex items-center justify-center text-[#c2652a] font-bold text-lg font-headline border border-[#c2652a]/20">
                      AC
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-headline text-xl font-bold text-[#3a302a]">Apex Cloud Solutions</h4>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#c2652a] text-white uppercase">Enterprise Tier</span>
                      </div>
                      <p className="text-xs text-[#605850] flex items-center gap-1.5 mt-0.5 font-mono">
                        contact@apexcloud.io • +1 (415) 890-4412
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#8c3c3c]/10 text-[#8c3c3c] text-xs font-bold font-mono">
                      <span className="w-2 h-2 rounded-full bg-[#8c3c3c] animate-pulse"></span> REC {formatTime(callDuration)}
                    </div>
                    <p className="text-[10px] text-[#605850] mt-1 font-mono">Dual-Channel FLAC HD</p>
                  </div>
                </div>

                {/* Audio Waveform Visualization Simulation */}
                <div className="bg-[#f6f0e8] rounded-xl p-3.5 mb-5 border border-[#d8d0c8]/60">
                  <div className="flex items-center justify-between text-xs text-[#605850] mb-2">
                    <span className="flex items-center gap-1.5 font-semibold text-[#3a302a]">
                      <Activity className="w-3.5 h-3.5 text-[#c2652a]" /> Speech Energy Balance
                    </span>
                    <span className="font-mono text-[11px] text-[#3a302a]">Customer 54% | Rep 46%</span>
                  </div>

                  <div className="h-10 flex items-center gap-1 px-1">
                    <div className="flex-1 h-3 bg-[#cec6be] rounded-full animate-pulse"></div>
                    <div className="flex-1 h-6 bg-[#c2652a] rounded-full"></div>
                    <div className="flex-1 h-8 bg-[#c2652a] rounded-full"></div>
                    <div className="flex-1 h-4 bg-[#eae2da] rounded-full"></div>
                    <div className="flex-1 h-10 bg-[#c2652a] rounded-full"></div>
                    <div className="flex-1 h-7 bg-[#c2652a] rounded-full"></div>
                    <div className="flex-1 h-5 bg-[#cec6be] rounded-full"></div>
                    <div className="flex-1 h-9 bg-[#c2652a] rounded-full"></div>
                    <div className="flex-1 h-3 bg-[#eae2da] rounded-full"></div>
                    <div className="flex-1 h-7 bg-[#c2652a] rounded-full"></div>
                    <div className="flex-1 h-9 bg-[#c2652a] rounded-full"></div>
                    <div className="flex-1 h-4 bg-[#eae2da] rounded-full"></div>
                    <div className="flex-1 h-8 bg-[#c2652a] rounded-full"></div>
                    <div className="flex-1 h-2 bg-[#cec6be] rounded-full"></div>
                    <div className="flex-1 h-5 bg-[#c2652a] rounded-full"></div>
                    <div className="flex-1 h-7 bg-[#c2652a] rounded-full"></div>
                    <div className="flex-1 h-10 bg-[#c2652a] rounded-full"></div>
                    <div className="flex-1 h-4 bg-[#eae2da] rounded-full"></div>
                    <div className="flex-1 h-2 bg-[#cec6be] rounded-full"></div>
                  </div>
                </div>

                {/* Call Control Toolbar */}
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-5">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors cursor-pointer ${
                      isMuted ? 'bg-[#8c3c3c] text-white' : 'bg-[#f2ece4] hover:bg-[#ece6dc] text-[#3a302a]'
                    }`}
                  >
                    {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    <span className="text-[10px] font-semibold mt-1">{isMuted ? 'Muted' : 'Mute'}</span>
                  </button>

                  <button
                    onClick={() => setIsOnHold(!isOnHold)}
                    className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors cursor-pointer ${
                      isOnHold ? 'bg-[#c2652a] text-white' : 'bg-[#f2ece4] hover:bg-[#ece6dc] text-[#3a302a]'
                    }`}
                  >
                    <Pause className="w-4 h-4" />
                    <span className="text-[10px] font-semibold mt-1">{isOnHold ? 'On Hold' : 'Hold'}</span>
                  </button>

                  <button className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#f2ece4] hover:bg-[#ece6dc] text-[#3a302a] transition-colors cursor-pointer">
                    <Grid className="w-4 h-4" />
                    <span className="text-[10px] font-semibold mt-1">Keypad</span>
                  </button>

                  <button 
                    onClick={() => setActiveTab('notes')}
                    className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors cursor-pointer ${
                      activeTab === 'notes' ? 'bg-[#eae2da] text-[#3a302a] font-bold border border-[#c2652a]/40' : 'bg-[#f2ece4] text-[#3a302a]'
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                    <span className="text-[10px] font-semibold mt-1">Notes</span>
                  </button>

                  <button 
                    onClick={() => setShowTagInput(!showTagInput)}
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#f2ece4] hover:bg-[#ece6dc] text-[#3a302a] transition-colors cursor-pointer"
                  >
                    <Tag className="w-4 h-4" />
                    <span className="text-[10px] font-semibold mt-1">Tags</span>
                  </button>

                  <button className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#f2ece4] hover:bg-[#ece6dc] text-[#3a302a] transition-colors cursor-pointer">
                    <UserPlus className="w-4 h-4" />
                    <span className="text-[10px] font-semibold mt-1">Add Rep</span>
                  </button>

                  <button className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#f2ece4] hover:bg-[#ece6dc] text-[#3a302a] transition-colors cursor-pointer">
                    <PhoneForwarded className="w-4 h-4" />
                    <span className="text-[10px] font-semibold mt-1">Transfer</span>
                  </button>

                  <button 
                    onClick={() => alert("Simulated call end: Call wrapped up and queued for QA audit.")}
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#8c3c3c] text-white hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    <PhoneOff className="w-4 h-4" />
                    <span className="text-[10px] font-semibold mt-1">End Call</span>
                  </button>
                </div>

                {/* Notes & Tagging Area */}
                <div className="bg-[#f6f0e8] rounded-xl p-4 space-y-3 border border-[#d8d0c8]/60">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#3a302a] uppercase tracking-wider flex items-center gap-1.5 font-label">
                      <FileText className="w-3.5 h-3.5 text-[#c2652a]" /> Live Interaction Notes
                    </span>
                    <span className="text-[10px] text-[#605850] font-mono">Auto-saved 2s ago</span>
                  </div>

                  <textarea
                    value={notesText}
                    onChange={(e) => setNotesText(e.target.value)}
                    rows={3}
                    className="w-full bg-white rounded-lg p-3 text-xs text-[#3a302a] leading-relaxed border border-[#d8d0c8] focus:outline-none focus:border-[#c2652a] font-body resize-none"
                  />

                  {/* Tag Chips */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-[11px] font-semibold text-[#605850]">Applied Tags:</span>
                    {tags.map((tg, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-semibold bg-[#c2652a]/10 text-[#c2652a]">
                        {tg}
                      </span>
                    ))}

                    {showTagInput ? (
                      <form onSubmit={handleAddTag} className="inline-flex items-center gap-1">
                        <input
                          type="text"
                          placeholder="Tag..."
                          value={newTagInput}
                          onChange={(e) => setNewTagInput(e.target.value)}
                          className="px-2 py-0.5 text-xs border border-[#c2652a] rounded bg-white focus:outline-none"
                          autoFocus
                        />
                        <button type="submit" className="text-xs px-2 py-0.5 bg-[#c2652a] text-white rounded font-bold">Add</button>
                      </form>
                    ) : (
                      <button
                        onClick={() => setShowTagInput(true)}
                        className="text-xs text-[#c2652a] font-semibold hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <Plus className="w-3 h-3" /> Add Tag
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Status Footer */}
              <div className="mt-4 pt-3 border-t border-[#d8d0c8]/60 flex items-center justify-between text-xs text-[#605850]">
                <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-[#c2652a]" /> Salesforce &amp; Neno CRM Synced</span>
                <span className="font-mono text-[11px]">Rep: Marcus Vance (ID #409)</span>
              </div>
            </div>

            {/* Column 3: Supervisor Fleet & Agent Oversight (Right Panel) */}
            <div className="lg:col-span-3 bg-[#f6f0e8] p-4 flex flex-col justify-between border-l border-[#d8d0c8]/60">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 bg-[#f2ece4] px-3 py-2 rounded-lg">
                  <div>
                    <h3 className="text-xs uppercase font-bold tracking-wider text-[#3a302a]">Fleet Oversight</h3>
                    <p className="text-[11px] text-[#605850]">33 Active Telecallers</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c2652a] animate-pulse"></span>
                </div>

                {/* Roster Stat Chips */}
                <div className="grid grid-cols-3 gap-1.5 text-center mb-4">
                  <div className="bg-white p-1.5 rounded-lg shadow-xs">
                    <span className="text-[10px] text-[#605850] block font-medium">Ready</span>
                    <span className="text-xs font-bold text-[#c2652a]">18</span>
                  </div>
                  <div className="bg-white p-1.5 rounded-lg shadow-xs">
                    <span className="text-[10px] text-[#605850] block font-medium">On Call</span>
                    <span className="text-xs font-bold text-[#3a302a]">12</span>
                  </div>
                  <div className="bg-white p-1.5 rounded-lg shadow-xs">
                    <span className="text-[10px] text-[#605850] block font-medium">Wrap-up</span>
                    <span className="text-xs font-bold text-[#78706a]">3</span>
                  </div>
                </div>

                {/* Supervisor Live Agent Cards */}
                <div className="space-y-2">
                  {/* Agent 1 */}
                  <div className="p-2.5 rounded-xl bg-white shadow-xs space-y-2 border border-[#d8d0c8]/60">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#c2652a]/20 text-[#c2652a] text-[10px] font-bold flex items-center justify-center">PV</div>
                        <span className="text-xs font-semibold text-[#3a302a]">Priya Patel</span>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#c2652a] text-white uppercase">On Call (06:14)</span>
                    </div>

                    <div className="grid grid-cols-3 gap-1 pt-1">
                      <button 
                        onClick={() => alert("Silent monitoring channel connected for Priya Patel.")}
                        className="px-2 py-1 rounded bg-[#f2ece4] hover:bg-[#ece6dc] text-[10px] font-semibold text-[#3a302a] cursor-pointer"
                      >
                        Monitor
                      </button>
                      <button 
                        onClick={() => {
                          setWhisperActive(!whisperActive);
                          alert(whisperActive ? "Whisper channel closed." : "Whisper channel open to Priya Patel.");
                        }}
                        className={`px-2 py-1 rounded text-[10px] font-semibold cursor-pointer ${
                          whisperActive ? 'bg-[#c2652a] text-white' : 'bg-[#f2ece4] text-[#3a302a]'
                        }`}
                      >
                        Whisper
                      </button>
                      <button 
                        onClick={() => alert("Call score audit scorecard opened.")}
                        className="px-2 py-1 rounded bg-[#eae2da] text-[10px] font-semibold text-[#605850] cursor-pointer"
                      >
                        Audit
                      </button>
                    </div>
                  </div>

                  {/* Agent 2 */}
                  <div className="p-2.5 rounded-xl bg-white shadow-xs space-y-2 border border-[#d8d0c8]/60">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#eae2da] text-[#605850] text-[10px] font-bold flex items-center justify-center">DK</div>
                        <span className="text-xs font-semibold text-[#3a302a]">Devon King</span>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#eae2da] text-[#2a2420] uppercase">Available</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-[#605850]">
                      <span>Idle: 00:32s</span>
                      <span>Handled: 42 Calls</span>
                    </div>
                  </div>

                  {/* Agent 3 */}
                  <div className="p-2.5 rounded-xl bg-white shadow-xs space-y-2 border border-[#d8d0c8]/60">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#ece6dc] text-[#605850] text-[10px] font-bold flex items-center justify-center">SN</div>
                        <span className="text-xs font-semibold text-[#3a302a]">Sofia N.</span>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#f2ece4] text-[#605850] uppercase">Wrap-Up</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-[#605850]">
                      <span>Logging CRM tags</span>
                      <span className="font-mono text-[#8c3c3c]">00:18s left</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Footer */}
              <div className="mt-4 pt-3 border-t border-[#d8d0c8]/60 flex items-center justify-between text-[11px] text-[#605850]">
                <span>Whisper Channel: <strong className="text-[#3a302a]">{whisperActive ? 'Active' : 'Ready'}</strong></span>
                <button 
                  onClick={() => alert("Full fleet roster grid modal.")}
                  className="text-[#c2652a] font-semibold hover:underline cursor-pointer"
                >
                  Full Grid
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
