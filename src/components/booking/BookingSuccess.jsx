import React from 'react';
import { CheckCircle2, Calendar, Mail, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function BookingSuccess({ bookingId, onClose }) {
  return (
    <div className="text-center py-6 px-4 space-y-6 animate-in fade-in zoom-in-95 duration-300">
      
      {/* Animated Glowing Success Badge */}
      <div className="relative inline-block">
        <div className="absolute inset-0 rounded-full bg-[#c2652a]/20 blur-xl animate-pulse"></div>
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-b from-[#c2652a] to-[#a44e18] text-white flex items-center justify-center mx-auto shadow-lg border-2 border-white/40">
          <CheckCircle2 className="w-10 h-10" />
        </div>
      </div>

      {/* Main Success Headlines */}
      <div className="space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c2652a]/10 text-[#c2652a] text-[11px] font-bold uppercase tracking-widest font-label border border-[#c2652a]/20">
          <Sparkles className="w-3.5 h-3.5" /> Demo Request Received
        </span>
        <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#3a302a] tracking-tight">
          Your Demo Is Confirmed
        </h3>
        <p className="text-xs sm:text-sm text-[#605850] max-w-md mx-auto leading-relaxed">
          Your request has been successfully submitted. A confirmation email and calendar invitation will be sent to your email address.
        </p>
      </div>

      {/* Ticket-style Booking Confirmation Pass */}
      <div className="max-w-md mx-auto bg-gradient-to-br from-[#fdfbf7] to-[#f6f0e8] p-5 rounded-2xl border border-[#d8d0c8]/80 shadow-sm text-left relative overflow-hidden space-y-4">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#c2652a]/5 rounded-bl-full pointer-events-none"></div>

        <div className="flex items-center justify-between border-b border-[#d8d0c8]/60 pb-3">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#8c827a] tracking-wider block font-label">
              Booking Reference
            </span>
            <span className="font-mono font-bold text-[#c2652a] text-sm tracking-wide">
              {bookingId || 'ND-20261003-CONFIRMED'}
            </span>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[#c2652a]/10 text-[#c2652a] text-[10px] font-bold">
            15-Min Live Session
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#3a302a]">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#c2652a] shrink-0" />
            <span>Dedicated Telephony Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#c2652a] shrink-0" />
            <span>Outlook &amp; Teams Invite</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#c2652a] shrink-0" />
            <span>Neno Technology Dispatch</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#c2652a] shrink-0" />
            <span>Live System Walkthrough</span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-2">
        <button
          onClick={onClose}
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#c2652a] to-[#d97736] text-white font-semibold text-xs hover:brightness-110 transition-all shadow-md cursor-pointer inline-flex items-center justify-center gap-2.5"
        >
          <span>Back to Neno Dialer</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
