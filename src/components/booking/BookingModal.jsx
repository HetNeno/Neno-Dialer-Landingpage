import React, { useState, useEffect, useRef } from 'react';
import { X, AlertTriangle, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import BookingForm from './BookingForm';
import BookingDateTime from './BookingDateTime';
import BookingSuccess from './BookingSuccess';
import { BOOKING_STORAGE_KEY } from '../../lib/booking';

const BOOKING_SESSION_MAX_AGE = 30 * 60 * 1000;

/**
 * UI State machine:
 *   FORM            → user fills name/email/phone and pays
 *   PAYMENT_FAILED  → Razorpay payment failed/cancelled
 *   DATETIME        → payment verified, calendar open (BOOKING_PENDING in backend)
 *   BOOKING_PENDING → user left calendar without completing appointment
 *   SUCCESS         → Calendly appointment confirmed
 */
export default function BookingModal({ isOpen, onClose }) {
  const [uiState, setUiState] = useState('FORM');
  const [paymentData, setPaymentData] = useState(null);   // preserved across DATETIME ↔ BOOKING_PENDING
  const [paymentFailMsg, setPaymentFailMsg] = useState('');
  const [successData, setSuccessData] = useState(null);

  const [isMounted, setIsMounted] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [isStaggerVisible, setIsStaggerVisible] = useState(false);

  const modalRef = useRef(null);
  const closeTimerRef = useRef(null);
  const previousFocusRef = useRef(null);
  // Track whether a verified payment exists so we never lose it on close
  const verifiedPaymentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;

      // Keep payment recovery across a closed tab, but never restore an old payment.
      let savedSession = null;
      try {
        const stored = localStorage.getItem(BOOKING_STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed?.savedAt && Date.now() - parsed.savedAt <= BOOKING_SESSION_MAX_AGE) {
            savedSession = parsed;
          } else {
            localStorage.removeItem(BOOKING_STORAGE_KEY);
          }
        }
      } catch (err) {
        console.warn('Could not read verified booking session:', err);
      }

      const activePayment = verifiedPaymentRef.current || savedSession;

      if (activePayment) {
        verifiedPaymentRef.current = activePayment;
        setPaymentData(activePayment.paymentData || activePayment);
        setSuccessData(activePayment.successData || null);
        setUiState(activePayment.status === 'COMPLETED' ? 'SUCCESS' : 'BOOKING_PENDING');
      } else {
        setUiState('FORM');
        setPaymentData(null);
        setSuccessData(null);
      }

      setIsMounted(true);

      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

      const animTimer = setTimeout(() => setIsAnimatingIn(true), 20);
      const staggerTimer = setTimeout(() => setIsStaggerVisible(true), 100);
      return () => { clearTimeout(animTimer); clearTimeout(staggerTimer); };
    } else if (isMounted) {
      handleCloseAnimation();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key !== BOOKING_STORAGE_KEY || !event.newValue) return;
      try {
        const session = JSON.parse(event.newValue);
        if (session.status === 'COMPLETED') {
          setSuccessData(session.successData);
          setUiState('SUCCESS');
        } else if (session.status === 'PENDING') {
          setPaymentData(session.paymentData);
          setUiState('BOOKING_PENDING');
        }
      } catch (err) {
        console.warn('Could not sync booking session:', err);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleCloseAnimation = () => {
    setIsAnimatingIn(false);
    setIsStaggerVisible(false);
    closeTimerRef.current = setTimeout(() => {
      setIsMounted(false);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
      }
      if (onClose) onClose();
    }, 280);
  };

  /**
   * Smart close: if the user is in DATETIME (calendar open) and tries to
   * close, we do NOT close the modal — we transition to BOOKING_PENDING so
   * we can show "Your payment was successful, but your call has not been booked yet."
   * with the "Continue Booking" button.
   */
  const handleSmartClose = () => {
    if (uiState === 'DATETIME') {
      setUiState('BOOKING_PENDING');
    } else if (uiState === 'BOOKING_PENDING') {
      handleCloseAnimation();
    } else {
      handleCloseAnimation();
    }
  };

  // ESC key — respects smart close logic
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMounted && isAnimatingIn) {
        e.preventDefault();
        handleSmartClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMounted, isAnimatingIn, uiState]);

  if (!isMounted) return null;

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleSmartClose();
    }
  };

  // Payment succeeded — store verified data so it survives modal close and tab reopening.
  const handleFormSuccess = (data) => {
    verifiedPaymentRef.current = data;
    try {
      localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify({
        status: 'PENDING',
        savedAt: Date.now(),
        paymentData: data
      }));
    } catch (err) {
      console.warn('Failed to write booking session to localStorage:', err);
    }
    setPaymentData(data);
    setUiState('DATETIME');
  };

  const handlePaymentFailure = (message) => {
    setPaymentFailMsg(message);
    setUiState('PAYMENT_FAILED');
  };

  const handleDateConfirm = (data) => {
    // Keep the completed result briefly so a closed/reopened tab shows the confirmation
    // instead of allowing the same payment session to start another booking.
    verifiedPaymentRef.current = null;
    try {
      localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify({
        status: 'COMPLETED',
        savedAt: Date.now(),
        successData: data
      }));
    } catch (err) {
      console.warn('Could not persist completed booking session:', err);
    }
    setSuccessData(data);
    setUiState('SUCCESS');
  };

  // User left calendar → BOOKING_PENDING screen "Cancel" button transitions to BOOKING_PENDING UI state
  const handleCalendarCancel = () => {
    setUiState('BOOKING_PENDING');
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
    >
      <div
        ref={modalRef}
        className={`relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white/75 backdrop-blur-2xl rounded-3xl modal-glow-shadow border border-white/80 my-auto transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isAnimatingIn
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-10 sm:translate-y-6 scale-[0.97] sm:scale-[0.96]'
        } ${isStaggerVisible ? 'modal-stagger-visible' : ''}`}
      >
        
        {/* Header Bar */}
        <div className="sticky top-0 z-10 bg-white/70 backdrop-blur-xl text-[#0F172A] px-5 sm:px-7 py-4 flex items-center justify-between border-b border-white/80 modal-stagger-item modal-stagger-delay-1">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/90 border border-white shadow-[0_8px_24px_rgba(37,99,235,0.16)] flex items-center justify-center p-1.5">
              <img
                src="/logo.png"
                alt="Neno Dialer Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2563EB] mb-0.5">
                Neno Dialer
              </p>
              <h3 className="font-logo text-lg font-extrabold text-[#0F172A] tracking-tight leading-snug">
                Book Your Neno Dialer Consultation
              </h3>
            </div>
          </div>
          <button
            onClick={handleSmartClose}
            className="group p-2 rounded-xl text-[#64748B] hover:text-[#0F172A] hover:bg-white/80 active:scale-95 transition-all duration-150 cursor-pointer"
          >
            <X className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90" />
          </button>
        </div>

        {/* Dynamic Modal Content */}
        <div className="p-4 sm:p-6">
          {uiState === 'SUCCESS' && (
            <BookingSuccess
              bookingDetails={successData}
              onClose={() => {
                try {
                  localStorage.removeItem(BOOKING_STORAGE_KEY);
                } catch (err) {
                  console.warn('Could not clear completed booking session:', err);
                }
                verifiedPaymentRef.current = null;
                handleCloseAnimation();
              }}
            />
          )}

          {uiState === 'DATETIME' && (
            <BookingDateTime 
              paymentData={paymentData}
              onConfirm={handleDateConfirm}
              onCancel={handleCalendarCancel}
            />
          )}

          {uiState === 'BOOKING_PENDING' && (
            <div className="space-y-5 animate-in fade-in zoom-in-95 duration-300">
              <div className="bg-[#FFFBEB] p-4 rounded-xl border border-[#F59E0B]/30 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#92400E] mb-1 font-headline">
                    Your payment was successful, but your call has not been booked yet.
                  </h4>
                  <p className="text-xs text-[#92400E]/80 leading-relaxed">
                    Please select a date and time to complete your booking.
                  </p>
                </div>
              </div>

              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0] text-center space-y-1.5">
                <Calendar className="w-8 h-8 text-[#2563EB] mx-auto" />
                <p className="text-sm font-bold text-[#0F172A] font-headline">
                  Complete Your Consultation Call Scheduling
                </p>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  No additional payment required. Your ₹49 payment is verified.
                </p>
              </div>

              <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#F1F5F9] rounded-lg border border-[#E2E8F0] text-xs">
                <span className="text-[#475569]">Booking ID</span>
                <span className="font-mono font-bold text-[#0F172A]">{paymentData?.bookingId}</span>
              </div>

              <button
                onClick={() => setUiState('DATETIME')}
                className="btn-press-effect w-full py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs tracking-wide transition-all duration-200 cursor-pointer font-label flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Continue Booking</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  handleCloseAnimation();
                }}
                className="w-full py-2.5 rounded-xl border border-[#E2E8F0] text-[#94A3B8] hover:text-[#475569] hover:bg-[#F8FAFC] font-semibold text-xs tracking-wide transition-all duration-200 cursor-pointer font-label"
              >
                Close for now
              </button>
            </div>
          )}

          {uiState === 'PAYMENT_FAILED' && (
            <div className="space-y-5 animate-in fade-in zoom-in-95 duration-300">
              <div className="bg-[#FEF2F2] p-5 rounded-xl border border-[#DC2626]/20 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-[#DC2626]" />
                </div>
                <h4 className="text-sm font-bold text-[#991B1B] mb-2 font-headline">Payment Unsuccessful</h4>
                <p className="text-xs text-[#991B1B]/80 leading-relaxed max-w-sm mb-1">
                  We couldn't complete your ₹49 payment. No appointment has been booked.
                </p>
                {paymentFailMsg && (
                  <p className="text-[10px] text-[#DC2626] border border-[#DC2626]/10 px-2 py-1 rounded-md bg-white">
                    {paymentFailMsg}
                  </p>
                )}
              </div>
              <button
                onClick={() => setUiState('FORM')}
                className="btn-press-effect w-full py-3.5 rounded-xl bg-[#2563EB] text-white font-semibold text-xs transition-all duration-200 cursor-pointer font-label"
              >
                Try Payment Again
              </button>
            </div>
          )}

          {uiState === 'FORM' && (
            <div className="space-y-4 sm:space-y-5">
              <div className="bg-[#F5F8FC] p-3.5 sm:p-4 rounded-xl border border-[#E2E8F0] modal-stagger-item modal-stagger-delay-2">
                <p className="text-xs text-[#475569] leading-relaxed">
                  See how Neno Dialer can automate your business calls and help your team handle conversations more efficiently.
                </p>
              </div>
              <div className="modal-stagger-item modal-stagger-delay-3">
                <BookingForm 
                  onSuccess={handleFormSuccess} 
                  onPaymentFailure={handlePaymentFailure} 
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
