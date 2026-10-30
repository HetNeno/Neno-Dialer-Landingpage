import React, { useEffect, useMemo, useState } from 'react';
import { ShieldCheck, AlertCircle, ExternalLink, Calendar } from 'lucide-react';

export default function BookingDateTime({ paymentData, onConfirm, onCancel }) {
  const [confirmationError, setConfirmationError] = useState('');
  const [isConfirming, setIsConfirming] = useState(false);

  // Read Calendly page URL (or legacy Microsoft Bookings URL as fallback) from environment.
  const rawCalendarUrl = 
    import.meta.env.VITE_CALENDLY_URL || 
    import.meta.env.VITE_MICROSOFT_BOOKINGS_URL || 
    '';

  const isConfigured = rawCalendarUrl.trim().length > 0;

  // Append prefill query parameters for Calendly (name, email, custom question a1 for bookingId)
  const buildBookingUrl = () => {
    if (!isConfigured) return '';
    try {
      const url = new URL(rawCalendarUrl.trim());
      // Prefill known customer details
      if (paymentData?.full_name) {
        url.searchParams.set('name', paymentData.full_name);
      }
      if (paymentData?.email) {
        url.searchParams.set('email', paymentData.email);
      }
      // Pass bookingId as custom answer (a1) and parameter so Calendly and webhooks correlate
      if (paymentData?.bookingId) {
        url.searchParams.set('a1', paymentData.bookingId);
        url.searchParams.set('bookingId', paymentData.bookingId);
      }
      // Suppress cookie banner if iframe
      url.searchParams.set('hide_gdpr_banner', '1');
      return url.toString();
    } catch (e) {
      console.error("Invalid scheduling URL provided:", rawCalendarUrl);
      return rawCalendarUrl.trim();
    }
  };

  const bookingUrl = useMemo(buildBookingUrl, [paymentData, rawCalendarUrl]);
  const isCalendly = rawCalendarUrl.toLowerCase().includes('calendly');

  useEffect(() => {
    if (!isCalendly || !onConfirm) return undefined;

    const handleCalendlyMessage = async (event) => {
      if (event.origin !== 'https://calendly.com' || event.data?.event !== 'calendly.event_scheduled') {
        return;
      }

      if (isConfirming) return;
      setIsConfirming(true);
      setConfirmationError('');

      try {
        const response = await fetch('/api/confirm-booking', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            payment_token: paymentData?.payment_token,
            booking_data: {
              bookingId: paymentData?.bookingId,
              full_name: paymentData?.full_name,
              company_name: paymentData?.company_name,
              email: paymentData?.email,
              phone: paymentData?.phone,
              appointmentDate: event.data?.payload?.event?.start_time || null,
              appointmentStartTime: event.data?.payload?.event?.start_time || null,
              appointmentEndTime: event.data?.payload?.event?.end_time || null,
              duration_mins: 15
            }
          })
        });
        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || 'Could not confirm the appointment.');
        }

        onConfirm({
          ...paymentData,
          appointmentDate: event.data?.payload?.event?.start_time,
          appointmentStartTime: event.data?.payload?.event?.start_time,
          appointmentEndTime: event.data?.payload?.event?.end_time
        });
      } catch (error) {
        console.error('Calendly appointment confirmation failed:', error);
        setConfirmationError('Your appointment was scheduled, but we could not finish confirmation. Please contact support with your booking ID.');
        setIsConfirming(false);
      }
    };

    window.addEventListener('message', handleCalendlyMessage);
    return () => window.removeEventListener('message', handleCalendlyMessage);
  }, [isCalendly, onConfirm, paymentData, isConfirming]);

  return (
    <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Payment Verified Banner */}
      <div className="bg-white/65 backdrop-blur-xl p-4 rounded-2xl border border-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#ECFDF5] border border-[#059669]/15 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-4 h-4 text-[#059669]" />
        </div>
        <div>
          <h4 className="text-[11px] font-bold text-[#065F46] uppercase tracking-wider mb-1">
            Payment Verified — Select Your Consultation Slot
          </h4>
          <p className="text-xs text-[#064E3B]/80 leading-snug">
            Your ₹49 payment is confirmed. Choose a 15-minute consultation slot below.
            Booking ID: <span className="font-mono font-bold">{paymentData?.bookingId}</span>
          </p>
        </div>
      </div>

      {isConfigured ? (
        /* Real Calendly / Calendar iframe */
        <div className="rounded-2xl border border-white/90 overflow-hidden bg-white/70 backdrop-blur-xl shadow-[0_12px_35px_rgba(15,23,42,0.08)]">
          <div className="bg-white/55 px-4 py-3 border-b border-white/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="text-[11px] font-semibold text-[#0F172A]">
                {isCalendly ? 'Calendly Consultation Call — 15 Minutes' : 'Neno Dialer Consultation Call — 15 Minutes'}
              </span>
            </div>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[10px] text-[#2563EB] hover:underline"
            >
              Open in new tab <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <iframe
            src={bookingUrl}
            title="Neno Dialer Calendly Consultation Call Booking"
            width="100%"
            height="560"
            frameBorder="0"
            scrolling="yes"
            style={{ display: 'block', minHeight: '560px', background: 'rgba(255,255,255,0.5)' }}
            allow="camera; microphone; fullscreen"
          />
        </div>
      ) : (
        /* Configuration missing — alert instructions */
        <div className="bg-[#F8FAFC] flex flex-col items-center justify-center border border-dashed border-[#CBD5E1] rounded-2xl p-6 text-center space-y-3">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#E2E8F0] flex items-center justify-center">
            <Calendar className="w-6 h-6 text-[#2563EB]" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#0F172A] mb-1 font-headline">Calendly Scheduling Not Configured</h4>
            <p className="text-xs text-[#475569] leading-relaxed max-w-[270px] mx-auto">
              Real availability cannot be shown until your Calendly event link is added.
            </p>
          </div>
          <div className="bg-[#FEF2F2] p-3 rounded-lg border border-[#DC2626]/20 text-left max-w-xs w-full space-y-1.5">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-3.5 h-3.5 mt-0.5 text-[#DC2626] shrink-0" />
              <p className="text-[10px] text-[#991B1B] font-medium leading-relaxed">
                <span className="font-bold block">Missing environment variable:</span>
                <code className="bg-[#FCA5A5]/30 px-1 rounded">VITE_CALENDLY_URL</code>
              </p>
            </div>
            <p className="text-[10px] text-[#991B1B] pl-5 leading-relaxed">
              Set <code className="bg-[#FCA5A5]/30 px-1 rounded">VITE_CALENDLY_URL</code> in your <code className="bg-[#FCA5A5]/30 px-1 rounded">.env</code> and Vercel dashboard to your client's exact Calendly event link (e.g. <code>https://calendly.com/client/15min</code>).
            </p>
          </div>
          <p className="text-[10px] text-[#64748B]">
            Booking ID held: <span className="font-mono font-bold text-[#0F172A]">{paymentData?.bookingId}</span>
          </p>
        </div>
      )}

      {isConfirming && (
        <p className="text-center text-xs text-[#2563EB]">
          Confirming your appointment...
        </p>
      )}

      {confirmationError && (
        <p className="rounded-lg border border-[#F59E0B]/30 bg-[#FFFBEB] p-3 text-xs leading-relaxed text-[#92400E]">
          {confirmationError}
        </p>
      )}

      <div className="pt-1">
        <button
          onClick={onCancel}
          className="w-full py-3 rounded-xl border border-[#E2E8F0] text-[#475569] hover:bg-[#F1F5F9] font-semibold text-xs tracking-wide transition-all duration-200 cursor-pointer font-label"
        >
          Cancel
        </button>
      </div>

    </div>
  );
}
