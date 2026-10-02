import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function BookingError({ message }) {
  if (!message) return null;

  return (
    <div className="p-3.5 rounded-xl bg-[#8c3c3c]/10 border border-[#8c3c3c]/30 text-[#8c3c3c] text-xs flex items-start gap-2.5 animate-in fade-in duration-150">
      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
      <div className="leading-relaxed">
        <strong className="font-semibold block text-[11px] uppercase tracking-wider mb-0.5 font-label">
          Booking Request Notice
        </strong>
        <span>{message}</span>
      </div>
    </div>
  );
}
