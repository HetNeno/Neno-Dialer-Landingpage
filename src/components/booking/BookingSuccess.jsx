import React from 'react';
import { CheckCircle2, Calendar, Mail, ArrowRight } from 'lucide-react';

export default function BookingSuccess({ bookingId, onClose }) {
  return (
    <div className="text-center py-6 px-4 space-y-5 animate-in fade-in duration-200">
      
      {/* Icon Badge */}
      <div className="w-16 h-16 rounded-full bg-[#c2652a]/10 text-[#c2652a] flex items-center justify-center mx-auto border border-[#c2652a]/30 shadow-xs">
        <CheckCircle2 className="w-9 h-9" />
      </div>

      {/* Heading */}
      <div className="space-y-1.5">
        <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#3a302a]">
          Your Demo Is Confirmed
        </h3>
        <p className="text-xs sm:text-sm text-[#605850] max-w-md mx-auto leading-relaxed">
          Your request has been successfully submitted. A confirmation email and calendar invitation will be sent to your email address.
        </p>
      </div>

      {/* Booking ID Badge */}
      {bookingId && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#ece6dc] border border-[#d8d0c8]/80 text-xs text-[#3a302a]">
          <span className="font-bold uppercase tracking-wider text-[10px] text-[#605850] font-label">Booking Reference:</span>
          <span className="font-mono font-bold text-[#c2652a]">Booking ID: {bookingId}</span>
        </div>
      )}

      {/* Confirmation Highlights */}
      <div className="bg-[#f6f0e8] p-4 rounded-xl text-left border border-[#d8d0c8]/60 space-y-2 max-w-md mx-auto text-xs text-[#605850]">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#c2652a] shrink-0" />
          <span>15-Minute Live Interactive Demonstration</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-[#c2652a] shrink-0" />
          <span>Calendar invite dispatched from Neno Technology</span>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-2">
        <button
          onClick={onClose}
          className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#c2652a] text-white font-semibold text-xs hover:bg-[#e08850] transition-colors shadow-sm cursor-pointer inline-flex items-center justify-center gap-2"
        >
          <span>Back to Neno Dialer</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
