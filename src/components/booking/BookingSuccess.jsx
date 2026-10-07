import React from 'react';
import { CheckCircle2, Check, Mail, CalendarCheck2 } from 'lucide-react';

export default function BookingSuccess({ bookingDetails, onClose }) {
  const {
    full_name = 'Customer',
    email = '',
    appointmentDate,
    appointmentStartTime,
    appointmentEndTime,
    bookingId
  } = bookingDetails || {};

  const formatDate = (d) => {
    if (!d) return '—';
    try {
      return new Date(d).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    } catch { return d; }
  };

  const formatTime = (t) => {
    if (!t) return '—';
    try {
      const [h, m] = t.split(':');
      const date = new Date();
      date.setHours(parseInt(h), parseInt(m));
      return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
    } catch { return t; }
  };

  return (
    <div className="text-center py-4 px-2 space-y-5 animate-in fade-in zoom-in-95 duration-400">

      {/* Success Icon */}
      <div className="w-16 h-16 rounded-full bg-[#ECFDF5] flex items-center justify-center mx-auto border border-[#059669]/20">
        <CheckCircle2 className="w-9 h-9 text-[#059669]" />
      </div>

      <div className="space-y-1.5">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] text-[10px] font-bold uppercase tracking-wider border border-[#D1FAE5]">
          ✓ Booking Confirmed
        </span>
        <h3 className="font-headline text-xl font-bold text-[#0F172A]">
          Your 15-Minute Consultation is Booked!
        </h3>
        <p className="text-xs text-[#475569] max-w-sm mx-auto leading-relaxed">
          A Teams meeting invite and confirmation email are on their way to <span className="font-semibold text-[#0F172A]">{email}</span>.
        </p>
      </div>

      {/* Booking Summary */}
      <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] text-left overflow-hidden">
        <div className="bg-[#0F172A] px-4 py-2.5 flex items-center gap-2">
          <CalendarCheck2 className="w-4 h-4 text-white/70" />
          <span className="text-xs font-semibold text-white">Booking Details</span>
        </div>
        <div className="p-4 grid grid-cols-2 gap-3 text-xs">
          <div>
            <span className="text-[10px] text-[#64748B] uppercase tracking-wider block mb-0.5">Name</span>
            <span className="font-semibold text-[#0F172A]">{full_name}</span>
          </div>
          <div>
            <span className="text-[10px] text-[#64748B] uppercase tracking-wider block mb-0.5">Booking ID</span>
            <span className="font-mono font-semibold text-[#0F172A] text-[10px]">{bookingId || '—'}</span>
          </div>
          <div className="col-span-2">
            <span className="text-[10px] text-[#64748B] uppercase tracking-wider block mb-0.5">Date</span>
            <span className="font-semibold text-[#0F172A]">{formatDate(appointmentDate)}</span>
          </div>
          <div>
            <span className="text-[10px] text-[#64748B] uppercase tracking-wider block mb-0.5">Start Time</span>
            <span className="font-semibold text-[#0F172A]">{formatTime(appointmentStartTime)}</span>
          </div>
          <div>
            <span className="text-[10px] text-[#64748B] uppercase tracking-wider block mb-0.5">End Time</span>
            <span className="font-semibold text-[#0F172A]">{formatTime(appointmentEndTime)}</span>
          </div>
          <div className="col-span-2">
            <span className="text-[10px] text-[#64748B] uppercase tracking-wider block mb-0.5">Duration</span>
            <span className="font-semibold text-[#0F172A]">15 Minutes · Neno Dialer Consultation Call</span>
          </div>
        </div>
      </div>

      <div className="bg-[#EFF6FF] p-3 rounded-xl border border-[#BFDBFE] flex items-start gap-2.5 text-left">
        <Mail className="w-4 h-4 mt-0.5 text-[#2563EB] shrink-0" />
        <p className="text-xs text-[#1E40AF] leading-snug">
          A Microsoft Teams meeting link and calendar invite have been sent to your email address.
        </p>
      </div>

      <button
        onClick={onClose}
        className="mx-auto px-8 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs transition-colors shadow-xs cursor-pointer inline-flex items-center gap-2"
      >
        <span>Done</span>
        <Check className="w-4 h-4" />
      </button>

    </div>
  );
}

