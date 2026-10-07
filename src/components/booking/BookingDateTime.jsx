import React from 'react';
import { ShieldCheck, AlertCircle, ExternalLink, Calendar } from 'lucide-react';

export default function BookingDateTime({ paymentData, onCancel }) {
  // Read the real Microsoft Bookings page URL from the environment.
  // This is the ONLY place availability comes from — never mocked.
  const bookingsBaseUrl = import.meta.env.VITE_MICROSOFT_BOOKINGS_URL || '';

  const isConfigured = bookingsBaseUrl.trim().length > 0;

  // Append bookingId as a URL param so it pre-fills the required custom question.
  // Microsoft Bookings supports ?name=&email= prefill params.
  // BookingID flows in as a custom question the customer must NOT change.
  const buildBookingUrl = () => {
    if (!isConfigured) return '';
    const url = new URL(bookingsBaseUrl.trim());
    // Prefill known customer details
    if (paymentData?.full_name)  url.searchParams.set('name',  paymentData.full_name);
    if (paymentData?.email)      url.searchParams.set('email', paymentData.email);
    // Pass bookingId so Power Automate can correlate this appointment
    // The Bookings custom question called "Booking ID" must be marked Required
    // so the customer cannot remove it.
    if (paymentData?.bookingId)  url.searchParams.set('bookingId', paymentData.bookingId);
    return url.toString();
  };

  const bookingUrl = buildBookingUrl();

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Payment Verified Banner */}
      <div className="bg-[#ECFDF5] p-3 rounded-xl border border-[#059669]/20 flex items-start gap-2.5">
        <ShieldCheck className="w-4 h-4 mt-0.5 text-[#059669] shrink-0" />
        <div>
          <h4 className="text-[11px] font-bold text-[#065F46] uppercase tracking-wider mb-0.5">
            Payment Verified — Select Your Slot
          </h4>
          <p className="text-xs text-[#064E3B]/80 leading-snug">
            Your ₹49 payment is confirmed. Choose a real 15-minute slot below.
            Booking ID: <span className="font-mono font-bold">{paymentData?.bookingId}</span>
          </p>
        </div>
      </div>

      {isConfigured ? (
        /* Real Microsoft Bookings iframe */
        <div className="rounded-xl border border-[#E2E8F0] overflow-hidden bg-white">
          <div className="bg-[#F8FAFC] px-3.5 py-2 border-b border-[#E2E8F0] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="text-[11px] font-semibold text-[#0F172A]">Neno Dialer Consultation Call — 15 Minutes</span>
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
            title="Neno Dialer Consultation Call Booking"
            width="100%"
            height="520"
            frameBorder="0"
            scrolling="yes"
            style={{ display: 'block', minHeight: '520px' }}
            allow="camera; microphone; fullscreen"
          />
        </div>
      ) : (
        /* Configuration missing — never fall back to mock data */
        <div className="bg-[#F8FAFC] flex flex-col items-center justify-center border border-dashed border-[#CBD5E1] rounded-2xl p-6 text-center space-y-3">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#E2E8F0] flex items-center justify-center">
            <Calendar className="w-6 h-6 text-[#2563EB]" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#0F172A] mb-1 font-headline">Microsoft Bookings Not Configured</h4>
            <p className="text-xs text-[#475569] leading-relaxed max-w-[270px] mx-auto">
              Real availability cannot be shown. No mock dates will be generated.
            </p>
          </div>
          <div className="bg-[#FEF2F2] p-3 rounded-lg border border-[#DC2626]/20 text-left max-w-xs w-full space-y-1.5">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-3.5 h-3.5 mt-0.5 text-[#DC2626] shrink-0" />
              <p className="text-[10px] text-[#991B1B] font-medium leading-relaxed">
                <span className="font-bold block">Missing environment variable:</span>
                <code className="bg-[#FCA5A5]/30 px-1 rounded">VITE_MICROSOFT_BOOKINGS_URL</code>
              </p>
            </div>
            <p className="text-[10px] text-[#991B1B] pl-5 leading-relaxed">
              Set this in your <code className="bg-[#FCA5A5]/30 px-1 rounded">.env</code> and Vercel dashboard to your Microsoft Bookings scheduling page URL for the <strong>Neno Dialer Consultation Call</strong> service.
            </p>
          </div>
          <p className="text-[10px] text-[#64748B]">
            Booking ID held: <span className="font-mono font-bold text-[#0F172A]">{paymentData?.bookingId}</span>
          </p>
        </div>
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

