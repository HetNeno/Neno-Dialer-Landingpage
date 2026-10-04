import React from 'react';
import { Database, ArrowRightLeft, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

export default function IntegrationsSection() {
  const integrations = [
    { name: 'Salesforce CRM', cat: 'CRM & ERP', status: 'Pre-Built Connector' },
    { name: 'HubSpot', cat: 'Marketing & Sales', status: 'Native Sync' },
    { name: 'Zoho CRM', cat: 'Enterprise Lead Mgmt', status: 'Bi-Directional' },
    { name: 'Zendesk', cat: 'Support & Ticketing', status: 'Screen Pop Enabled' },
    { name: 'Freshdesk', cat: 'Omnichannel Support', status: 'Call Log Sync' },
    { name: 'Custom REST API', cat: 'In-House Systems', status: 'Webhook Triggers' }
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-[#FAFCFF] border-b border-[#E2E8F0]" id="integrations">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2563EB] block mb-2 font-label">
            Ecosystem Connectivity
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
            Connects With Your Existing Software Stack.
          </h2>
          <p className="text-base text-[#475569] mt-3">
            Neno Dialer provides ready-to-use CRM connectors and Webhook triggers so call logs, recordings, dispositions, and wrap-up notes flow automatically into your database.
          </p>
        </div>

        {/* Bi-Directional Sync Concept Card */}
        <div className="bg-[#FFFFFF] p-8 lg:p-10 rounded-2xl border border-[#E2E8F0] shadow-xs mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Neno Telephony Engine */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-[#F5F8FC] border border-[#E2E8F0] space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Neno Dialer Logo"
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">Neno Dialer Telephony Engine</h3>
                  <p className="text-xs text-[#475569]">Live Telephony Event Stream</p>
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded bg-[#FFFFFF] shadow-xs flex items-center justify-between border border-[#E2E8F0]">
                  <span className="text-[#0F172A]">• Dual FLAC Recording Link</span>
                  <span className="text-[#2563EB] font-bold">Auto-Gen</span>
                </div>
                <div className="p-2.5 rounded bg-[#FFFFFF] shadow-xs flex items-center justify-between border border-[#E2E8F0]">
                  <span className="text-[#0F172A]">• Outcome Tags &amp; Dispositions</span>
                  <span className="text-[#2563EB] font-bold">Validated</span>
                </div>
                <div className="p-2.5 rounded bg-[#FFFFFF] shadow-xs flex items-center justify-between border border-[#E2E8F0]">
                  <span className="text-[#0F172A]">• Timestamped Notes &amp; Timers</span>
                  <span className="text-[#2563EB] font-bold">Captured</span>
                </div>
                <div className="p-2.5 rounded bg-[#FFFFFF] shadow-xs flex items-center justify-between border border-[#E2E8F0]">
                  <span className="text-[#0F172A]">• Structured QA Audit Score</span>
                  <span className="text-[#2563EB] font-bold">Passed (8.5)</span>
                </div>
              </div>
            </div>

            {/* Center: Bi-directional Sync Indicator */}
            <div className="lg:col-span-2 text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#2563EB] mb-2 border border-[#DBEAFE]">
                <ArrowRightLeft className="w-6 h-6 animate-pulse" />
              </div>
              <span className="text-xs font-bold text-[#2563EB] font-label">Real-Time Sync</span>
              <span className="text-[11px] text-[#475569]">Zero Data Entry Leakage</span>
            </div>

            {/* Right: Destination CRM & Business Systems */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-[#F5F8FC] border border-[#E2E8F0] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-white flex items-center justify-center font-bold">
                  <Database className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">Enterprise CRM &amp; Database</h3>
                  <p className="text-xs text-[#475569]">Salesforce / HubSpot / Custom DB</p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded bg-[#FFFFFF] shadow-xs flex items-center justify-between border border-[#E2E8F0]">
                  <span className="text-[#0F172A]">Lead Status Auto-Updated</span>
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                </div>
                <div className="p-2.5 rounded bg-[#FFFFFF] shadow-xs flex items-center justify-between border border-[#E2E8F0]">
                  <span className="text-[#0F172A]">Activity Timeline Entry Created</span>
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                </div>
                <div className="p-2.5 rounded bg-[#FFFFFF] shadow-xs flex items-center justify-between border border-[#E2E8F0]">
                  <span className="text-[#0F172A]">Recording URL Attached to Contact</span>
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                </div>
                <div className="p-2.5 rounded bg-[#FFFFFF] shadow-xs flex items-center justify-between border border-[#E2E8F0]">
                  <span className="text-[#0F172A]">Supervisor Audit Log Pushed</span>
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Supported Integrations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-xs hover:border-[#2563EB]/40 transition-colors flex items-center justify-between">
              <div>
                <h4 className="font-headline font-bold text-[#0F172A] text-base">{item.name}</h4>
                <p className="text-xs text-[#475569] mt-0.5">{item.cat}</p>
              </div>
              <span className="px-2.5 py-1 rounded text-[10px] font-bold bg-[#F5F8FC] text-[#2563EB] border border-[#E2E8F0] font-label shrink-0">
                {item.status}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
