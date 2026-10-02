import React, { useState, useEffect, useRef } from 'react';
import { X, Headphones, Clock, ShieldCheck } from 'lucide-react';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      aria-describedby="booking-modal-description"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#d8d0c8] overflow-hidden my-8"
      >
        
        {/* Header Bar */}
        <div className="bg-[#ece6dc] px-6 py-4 flex items-center justify-between border-b border-[#d8d0c8]/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#c2652a] text-white flex items-center justify-center font-headline font-bold text-sm shadow-xs">
              ND
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#605850] block font-label -mb-0.5">
                Neno Technology
              </span>
              <h3 id="booking-modal-title" className="font-headline text-lg font-bold text-[#3a302a]">
                Book a 15-Minute Demo
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg text-[#605850] hover:text-[#3a302a] hover:bg-[#eae2da] transition-colors cursor-pointer"
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
              
              {/* Supporting Copy & Quick Benefits */}
              <div className="border-b border-[#d8d0c8]/60 pb-4">
                <p id="booking-modal-description" className="text-sm text-[#605850] leading-relaxed">
                  Tell us a little about yourself and our team will arrange a 15-minute Neno Dialer demo.
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-[11px] font-semibold text-[#605850]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#c2652a]" /> 15-Min Live Session
                  </span>
                  <span className="flex items-center gap-1">
                    <Headphones className="w-3.5 h-3.5 text-[#c2652a]" /> Telephony Specialist
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#c2652a]" /> Calendar Invite Dispatched
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
