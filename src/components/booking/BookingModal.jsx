import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/40 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      aria-describedby="booking-modal-description"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-xl bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#E2E8F0] overflow-hidden my-6 animate-in zoom-in-95 duration-200"
      >
        
        {/* Header Bar */}
        <div className="bg-[#0F172A] text-white px-6 py-4 flex items-center justify-between border-b border-[#E2E8F0]/10">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Neno Dialer Logo"
              className="w-8 h-8 object-contain bg-white/10 rounded-lg p-0.5"
            />
            <div>
              <h3 id="booking-modal-title" className="font-logo text-base font-extrabold text-white tracking-tight">
                Book Your Neno Dialer Demo
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {successData ? (
            <BookingSuccess
              bookingDetails={successData}
              onClose={onClose}
            />
          ) : (
            <div className="space-y-5">
              
              {/* Supporting Copy */}
              <div className="bg-[#F5F8FC] p-4 rounded-xl border border-[#E2E8F0]">
                <p id="booking-modal-description" className="text-xs text-[#475569] leading-relaxed">
                  See how Neno Dialer can automate your business calls and help your team handle conversations more efficiently.
                </p>
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
