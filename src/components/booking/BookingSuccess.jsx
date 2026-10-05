import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Calendar, Clock, Check } from 'lucide-react';

export default function BookingSuccess({ bookingDetails, onClose }) {
  const {
    full_name = 'Customer',
    email = '',
    company_name = ''
  } = bookingDetails || {};

  const [selectedDate, setSelectedDate] = useState(
    new Date(Date.now() + 86400000).toISOString().slice(0, 10)
  );
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [isScheduled, setIsScheduled] = useState(false);

  const timeSlots = [
    '09:30 AM',
    '10:30 AM',
    '11:30 AM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM'
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleConfirmSchedule = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/confirm-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          payment_token: bookingDetails.payment_token,
          booking_data: {
            full_name,
            company_name,
            email,
            phone: bookingDetails.phone,
            selected_date: selectedDate,
            selected_time: selectedTime,
            duration_mins: 15
          }
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsScheduled(true);
      } else {
        setErrorMessage(data.message || 'Failed to secure your booking. Please try again.');
      }
    } catch (err) {
      setErrorMessage('A network error occurred while confirming your booking.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-center py-4 px-2 space-y-5 animate-in fade-in duration-300">
      
      {/* Clean Success Badge */}
      <div className="w-14 h-14 rounded-full bg-[#EEF5FF] text-[#059669] flex items-center justify-center mx-auto border border-[#E2E8F0]">
        <CheckCircle2 className="w-9 h-9 text-[#059669]" />
      </div>

      {!isScheduled ? (
        /* STEP 2: Select Date & Time after ₹49 Payment */
        <form onSubmit={handleConfirmSchedule} className="space-y-4 text-left">
          <div className="text-center space-y-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF5FF] text-[#059669] text-[10px] font-bold uppercase tracking-wider border border-[#DBEAFE]">
              ✓ Payment ₹49 Successful
            </span>
            <h3 className="font-headline text-xl font-bold text-[#0F172A]">
              Select Your Preferred Date &amp; Time
            </h3>
            <p className="text-xs text-[#475569]">
              Choose a time slot for your dedicated 15-minute product mentor call.
            </p>
          </div>

          <div className="bg-[#F5F8FC] p-4 rounded-xl border border-[#E2E8F0] space-y-3">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#2563EB]" /> Preferred Call Date
              </label>
              <input
                type="date"
                required
                min={new Date().toISOString().slice(0, 10)}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-3 py-2 text-xs border rounded-lg bg-white text-[#0F172A] border-[#E2E8F0] focus:outline-none focus:border-[#2563EB]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#2563EB]" /> Preferred Time Slot (15 Mins)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={`py-2 px-1 text-xs rounded-lg border font-semibold transition-all cursor-pointer ${
                      selectedTime === slot
                        ? 'bg-[#2563EB] text-white border-[#2563EB]'
                        : 'bg-white text-[#0F172A] border-[#E2E8F0] hover:border-[#2563EB]/50'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {errorMessage && (
            <div className="p-3 text-[#DC2626] bg-[#FEF2F2] border border-[#DC2626]/20 rounded-xl text-xs font-medium text-center">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-xl text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-2 ${
              isSubmitting ? 'bg-[#94A3B8] cursor-not-allowed' : 'bg-[#2563EB] hover:bg-[#1D4ED8] cursor-pointer'
            }`}
          >
            <span>{isSubmitting ? 'Securing Calendar...' : 'Confirm Call Schedule'}</span>
            {!isSubmitting && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>
      ) : (
        /* STEP 3: Final Schedule Confirmation Pass */
        <div className="space-y-5">
          <div className="space-y-1">
            <h3 className="font-headline text-2xl font-bold text-[#0F172A]">
              Your 15-Minute Call is Scheduled!
            </h3>
            <p className="text-xs text-[#475569] max-w-sm mx-auto">
              A calendar invite and Google Meet link have been sent to your email.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-[#F5F8FC] p-4 rounded-xl border border-[#E2E8F0] text-left space-y-3 text-xs">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2">
              <span className="font-bold text-[#0F172A]">Call Details</span>
              <span className="text-[10px] font-bold text-[#059669] bg-[#EEF5FF] px-2 py-0.5 rounded-full border border-[#E2E8F0]">
                Confirmed
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-[#64748B] block text-[10px]">Name</span>
                <span className="font-semibold text-[#0F172A]">{full_name}</span>
              </div>
              <div>
                <span className="text-[#64748B] block text-[10px]">Email</span>
                <span className="font-semibold text-[#0F172A] truncate block">{email}</span>
              </div>
              <div>
                <span className="text-[#64748B] block text-[10px]">Date</span>
                <span className="font-semibold text-[#0F172A]">{selectedDate}</span>
              </div>
              <div>
                <span className="text-[#64748B] block text-[10px]">Time Slot</span>
                <span className="font-semibold text-[#0F172A]">{selectedTime}</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs transition-colors shadow-xs cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <span>Done</span>
            <Check className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}
