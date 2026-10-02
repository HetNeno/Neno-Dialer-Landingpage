import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Users, Mail, User, Building, ArrowRight } from 'lucide-react';

export default function DemoBookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    teamSeats: '10-50',
    callingMode: 'Inbound + Outbound',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#d8d0c8] overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-[#ece6dc] px-6 py-4 flex items-center justify-between border-b border-[#d8d0c8]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#c2652a] text-white flex items-center justify-center font-headline font-bold text-sm">
              ND
            </div>
            <div>
              <h3 className="font-headline text-lg font-bold text-[#3a302a]">Book a Neno Dialer Demo</h3>
              <p className="text-[11px] text-[#605850]">Personalized walkthrough with Neno Technology engineers</p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-lg text-[#605850] hover:text-[#3a302a] hover:bg-[#eae2da] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#c2652a]/10 text-[#c2652a] flex items-center justify-center mx-auto border border-[#c2652a]/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-headline text-2xl font-bold text-[#3a302a]">Demonstration Requested!</h4>
              <p className="text-sm text-[#605850] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#3a302a]">{formData.fullName || 'Valued Visitor'}</strong>. Our telephony product specialist will contact <span className="font-mono text-[#c2652a]">{formData.workEmail}</span> within 2 business hours to confirm your live session.
              </p>
              <button
                onClick={resetAndClose}
                className="px-6 py-2.5 rounded-lg bg-[#c2652a] text-white text-xs font-semibold hover:bg-[#e08850] transition-colors cursor-pointer shadow-xs"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#3a302a] block mb-1 font-label">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#605850] absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-[#d8d0c8] rounded-lg bg-[#f6f0e8] focus:bg-white focus:outline-none focus:border-[#c2652a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#3a302a] block mb-1 font-label">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#605850] absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-[#d8d0c8] rounded-lg bg-[#f6f0e8] focus:bg-white focus:outline-none focus:border-[#c2652a]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#3a302a] block mb-1 font-label">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-[#605850] absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-[#d8d0c8] rounded-lg bg-[#f6f0e8] focus:bg-white focus:outline-none focus:border-[#c2652a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#3a302a] block mb-1 font-label">
                    Telecaller Team Size
                  </label>
                  <select
                    value={formData.teamSeats}
                    onChange={(e) => setFormData({ ...formData, teamSeats: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#d8d0c8] rounded-lg bg-[#f6f0e8] focus:bg-white focus:outline-none focus:border-[#c2652a]"
                  >
                    <option value="1-10">1 - 10 Seats</option>
                    <option value="10-50">10 - 50 Seats</option>
                    <option value="50-250">50 - 250 Seats</option>
                    <option value="250+">250+ Enterprise Seats</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#3a302a] block mb-1 font-label">
                  Primary Calling Requirement
                </label>
                <select
                  value={formData.callingMode}
                  onChange={(e) => setFormData({ ...formData, callingMode: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-[#d8d0c8] rounded-lg bg-[#f6f0e8] focus:bg-white focus:outline-none focus:border-[#c2652a]"
                >
                  <option value="Inbound + Outbound">Inbound ACD + Outbound Predictive</option>
                  <option value="Outbound Sales">Outbound Sales &amp; Progressive Pacing</option>
                  <option value="Inbound Customer Support">Inbound Customer Service &amp; Queues</option>
                  <option value="AI Voice Bot & Mass Broadcast">AI Voice Bot &amp; Voice Broadcasting</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#3a302a] block mb-1 font-label">
                  Notes / Specific Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your CRM setup or calling workflow..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-[#d8d0c8] rounded-lg bg-[#f6f0e8] focus:bg-white focus:outline-none focus:border-[#c2652a] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#c2652a] text-white font-semibold text-xs hover:bg-[#e08850] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirm Demo Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
