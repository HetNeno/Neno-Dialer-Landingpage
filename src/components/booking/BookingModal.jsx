import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import BookingForm from './BookingForm';
import BookingSuccess from './BookingSuccess';

export default function BookingModal({ isOpen, onClose }) {
  const [successData, setSuccessData] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [isStaggerVisible, setIsStaggerVisible] = useState(false);
  
  const modalRef = useRef(null);
  const closeTimerRef = useRef(null);
  const previousFocusRef = useRef(null);

  // Handle open / close lifecycle with smooth 250ms closing exit transition
  useEffect(() => {
    if (isOpen) {
      // Store currently focused element to return focus on close
      previousFocusRef.current = document.activeElement;
      
      setSuccessData(null);
      setIsMounted(true);

      // Lock scroll without page jump
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      // Trigger entrance transition next frame
      const animTimer = setTimeout(() => {
        setIsAnimatingIn(true);
      }, 20);

      // Trigger staggered content appearance
      const staggerTimer = setTimeout(() => {
        setIsStaggerVisible(true);
      }, 100);

      return () => {
        clearTimeout(animTimer);
        clearTimeout(staggerTimer);
      };
    } else if (isMounted) {
      handleCloseAnimation();
    }
  }, [isOpen]);

  const handleCloseAnimation = () => {
    setIsAnimatingIn(false);
    setIsStaggerVisible(false);

    // Wait for 250ms closing animation before unmounting from DOM
    closeTimerRef.current = setTimeout(() => {
      setIsMounted(false);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';

      // Return focus to trigger button
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
      }

      if (onClose) {
        onClose();
      }
    }, 280);
  };

  // Keyboard accessibility: ESC key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMounted && isAnimatingIn) {
        e.preventDefault();
        handleCloseAnimation();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMounted, isAnimatingIn]);

  if (!isMounted) return null;

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleCloseAnimation();
    }
  };

  const handleFormSuccess = (data) => {
    setSuccessData(data);
  };

  return (
    <div
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isAnimatingIn
          ? 'bg-[#0F172A]/50 backdrop-blur-md opacity-100'
          : 'bg-transparent backdrop-blur-none opacity-0 pointer-events-none'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      aria-describedby="booking-modal-description"
    >
      <div
        ref={modalRef}
        className={`relative w-full max-w-xl bg-[#FFFFFF] rounded-2xl sm:rounded-3xl modal-glow-shadow border border-[#E2E8F0] overflow-hidden my-auto transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isAnimatingIn
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-10 sm:translate-y-6 scale-[0.97] sm:scale-[0.96]'
        } ${isStaggerVisible ? 'modal-stagger-visible' : ''}`}
      >
        
        {/* Header Bar */}
        <div className="bg-[#0F172A] text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-[#E2E8F0]/10 modal-stagger-item modal-stagger-delay-1">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Neno Dialer Logo"
              className="w-8 h-8 object-contain bg-white/10 rounded-lg p-0.5"
            />
            <div>
              <h3 id="booking-modal-title" className="font-logo text-base font-extrabold text-white tracking-tight leading-snug">
                Book Your Neno Dialer Demo
              </h3>
            </div>
          </div>

          <button
            onClick={handleCloseAnimation}
            aria-label="Close"
            className="group p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 active:scale-95 transition-all duration-150 cursor-pointer"
          >
            <X className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6">
          {successData ? (
            <BookingSuccess
              bookingDetails={successData}
              onClose={handleCloseAnimation}
            />
          ) : (
            <div className="space-y-4 sm:space-y-5">
              
              {/* Supporting Copy */}
              <div className="bg-[#F5F8FC] p-3.5 sm:p-4 rounded-xl border border-[#E2E8F0] modal-stagger-item modal-stagger-delay-2">
                <p id="booking-modal-description" className="text-xs text-[#475569] leading-relaxed">
                  See how Neno Dialer can automate your business calls and help your team handle conversations more efficiently.
                </p>
              </div>

              {/* Form with Staggered Entrance */}
              <div className="modal-stagger-item modal-stagger-delay-3">
                <BookingForm onSuccess={handleFormSuccess} />
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
