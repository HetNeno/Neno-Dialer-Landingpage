import React, { useState, useEffect, useRef } from 'react';
import { X, Headphones, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import BookingForm from './BookingForm';
import BookingSuccess from './BookingSuccess';

export default function BookingModal({ isOpen, onClose }) {
  const [successData, setSuccessData] = useState(null);
  const modalRef = useRef(null);

  // Reset success state when opened
  useEffect(() => {
    if (isOpen) {
      setSuccessData(null);
    }
  }, [isOpen]);

  // Handle Escape key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const handleFormSuccess = (data) => {
    setSuccessData(data);
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2a2420]/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      aria-describedby="booking-modal-description"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl shadow-[#c2652a]/10 border border-[#d8d0c8]/90 overflow-hidden my-6 animate-in zoom-in-95 duration-200"
      >
        
        {/* Executive Header Bar */}
        <div className="bg-gradient-to-r from-[#3a302a] via-[#483d36] to-[#2a2420] text-white px-6 sm:px-8 py-5 flex items-center justify-between border-b border-[#c2652a]/20 relative">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#c2652a] text-white flex items-center justify-center font-headline font-bold text-sm shadow-md border border-white/20">
              ND
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#e8a87c] font-label">
                  Neno Technology
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#52c41a] animate-pulse"></span>
                <span className="text-[10px] text-white/80 hidden sm:inline">Engineers Active</span>
              </div>
              <h3 id="booking-modal-title" className="font-headline text-lg sm:text-xl font-bold text-white tracking-tight">
                Book a 15-Minute Demo
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {successData ? (
            <BookingSuccess
              bookingId={successData.bookingId}
              onClose={onClose}
            />
          ) : (
            <div className="space-y-6">
              
              {/* Supporting Copy & Benefit Badges */}
              <div className="bg-[#fdfbf7] p-4 sm:p-5 rounded-2xl border border-[#d8d0c8]/70 space-y-3">
                <p id="booking-modal-description" className="text-xs sm:text-sm text-[#605850] leading-relaxed">
                  Tell us a little about yourself and our team will arrange a 15-minute Neno Dialer demo.
                </p>

                <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-[#3a302a]">
                  <span className="px-3 py-1 rounded-full bg-[#ece6dc] border border-[#d8d0c8]/60 inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#c2652a]" /> 15-Min Live Session
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#ece6dc] border border-[#d8d0c8]/60 inline-flex items-center gap-1.5">
                    <Headphones className="w-3.5 h-3.5 text-[#c2652a]" /> Telephony Specialist
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#ece6dc] border border-[#d8d0c8]/60 inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#c2652a]" /> Calendar Invite Sent
                  </span>
                </div>
              </div>

              {/* Form */}
              <BookingForm onSuccess={handleFormSuccess} />

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
