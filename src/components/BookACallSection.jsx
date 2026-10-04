import React, { useState } from 'react';
import { ShieldCheck, Calendar, Clock, User, Building, Mail, Phone, ArrowRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { processDemoBooking } from '../lib/booking';

export default function BookACallSection() {
  const [formData, setFormData] = useState({
    full_name: '',
    company_name: '',
    email: '',
    phone: '',
    selected_date: new Date(Date.now() + 86400000).toISOString().slice(0, 10), // Default to tomorrow
    selected_time: '10:00 AM'
  });

  const [errors, setErrors] = useState({});
  const [statusState, setStatusState] = useState('idle'); // 'idle' | 'processing' | 'verifying' | 'confirmed' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [bookingConfirmation, setBookingConfirmation] = useState(null);

  const timeSlots = [
    '09:30 AM',
    '10:30 AM',
    '11:30 AM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM'
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.full_name.trim()) newErrors.full_name = 'Full name is required';
    if (!formData.company_name.trim()) newErrors.company_name = 'Business / Company name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      newErrors.phone = 'Enter a valid phone number';
    }

    if (!formData.selected_date) newErrors.selected_date = 'Preferred date is required';
    if (!formData.selected_time) newErrors.selected_time = 'Preferred time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (statusState === 'processing' || statusState === 'verifying') return;

    if (!validate()) return;

    // Transition to processing state
    setStatusState('processing');
    setErrorMessage('');

    try {
      const res = await processDemoBooking({
        full_name: formData.full_name,
        company_name: formData.company_name,
        email: formData.email,
        phone: formData.phone,
        selected_date: formData.selected_date,
        selected_time: formData.selected_time
      });

      if (res.success) {
        setStatusState('confirmed');
        setBookingConfirmation({
          bookingId: res.bookingId,
          full_name: formData.full_name,
          email: formData.email,
          selected_date: formData.selected_date,
          selected_time: formData.selected_time
        });
      } else {
        setStatusState('error');
        setErrorMessage(res.message || 'Payment could not be completed. Please try again.');
      }
    } catch (err) {
      setStatusState('error');
      setErrorMessage('Payment could not be completed. Please try again.');
    }
  };

  const handleReset = () => {
    setStatusState('idle');
    setErrorMessage('');
    setBookingConfirmation(null);
  };

  return (
    <section className="w-full py-20 lg:py-28 bg-[#FAFCFF] border-b border-[#E2E8F0]" id="book-a-call">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        
        {/* Section Intro */}
        <div className="text-center mb-10">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Book Your Neno Dialer Demo
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed max-w-xl mx-auto">
            See how Neno Dialer can automate your business calls and help your team handle conversations more efficiently.
          </p>
        </div>

        {/* Booking Container */}
        <div className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xs border border-[#E2E8F0]">
          
          {statusState === 'confirmed' && bookingConfirmation ? (
            /* Confirmation View */
            <div className="text-center py-6 space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#EEF5FF] text-[#059669] flex items-center justify-center mx-auto border border-[#E2E8F0]">
                <CheckCircle2 className="w-10 h-10 text-[#059669]" />
              </div>

              <div className="space-y-2">
                <h3 className="font-headline text-2xl font-bold text-[#0F172A]">
                  Your Neno Dialer Demo is Confirmed
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                  Your demo has been successfully booked. A confirmation has been sent to your email.
                </p>
              </div>

              {/* Confirmation Details Card */}
              <div className="bg-[#F5F8FC] p-6 rounded-2xl border border-[#E2E8F0] text-left max-w-md mx-auto space-y-3">
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                  <span className="text-xs font-bold text-[#0F172A]">Demo Details</span>
                  <span className="text-[11px] font-semibold text-[#059669] bg-[#EEF5FF] px-2.5 py-0.5 rounded-full border border-[#E2E8F0]">
                    Confirmed
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[#64748B] block text-[11px]">Customer Name</span>
                    <span className="font-semibold text-[#0F172A]">{bookingConfirmation.full_name}</span>
                  </div>
                  <div>
                    <span className="text-[#64748B] block text-[11px]">Email</span>
                    <span className="font-semibold text-[#0F172A] truncate block">{bookingConfirmation.email}</span>
                  </div>
                  <div>
                    <span className="text-[#64748B] block text-[11px]">Date</span>
                    <span className="font-semibold text-[#0F172A]">{bookingConfirmation.selected_date}</span>
                  </div>
                  <div>
                    <span className="text-[#64748B] block text-[11px]">Time</span>
                    <span className="font-semibold text-[#0F172A]">{bookingConfirmation.selected_time}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs transition-colors shadow-xs cursor-pointer inline-flex items-center gap-2"
              >
                <span>Book Another Slot</span>
              </button>
            </div>
          ) : (
            /* Booking Form & Payment Flow */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">

              {/* Error Banner if present */}
              {statusState === 'error' && errorMessage && (
                <div className="p-4 rounded-xl bg-[#FEF2F2] border border-[#DC2626]/20 text-[#DC2626] text-xs flex items-start gap-3 animate-in fade-in duration-200">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-[#DC2626]" />
                  <div className="space-y-1">
                    <span className="font-bold block">Booking Notice</span>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              {/* Form Input Fields Grid */}
              <div className="space-y-4">
                
                {/* Full Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#0F172A]">
                      Full Name <span className="text-[#2563EB]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.full_name}
                      onChange={(e) => handleChange('full_name', e.target.value)}
                      disabled={statusState === 'processing'}
                      className={`w-full px-4 py-2.5 text-xs rounded-xl bg-[#FFFFFF] border text-[#0F172A] placeholder-[#94A3B8] transition-all focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 ${
                        errors.full_name ? 'border-[#DC2626]' : 'border-[#E2E8F0]'
                      }`}
                    />
                    {errors.full_name && <p className="text-[11px] text-[#DC2626]">{errors.full_name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#0F172A]">
                      Business / Company Name <span className="text-[#2563EB]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.company_name}
                      onChange={(e) => handleChange('company_name', e.target.value)}
                      disabled={statusState === 'processing'}
                      className={`w-full px-4 py-2.5 text-xs rounded-xl bg-[#FFFFFF] border text-[#0F172A] placeholder-[#94A3B8] transition-all focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 ${
                        errors.company_name ? 'border-[#DC2626]' : 'border-[#E2E8F0]'
                      }`}
                    />
                    {errors.company_name && <p className="text-[11px] text-[#DC2626]">{errors.company_name}</p>}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#0F172A]">
                      Email Address <span className="text-[#2563EB]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      disabled={statusState === 'processing'}
                      className={`w-full px-4 py-2.5 text-xs rounded-xl bg-[#FFFFFF] border text-[#0F172A] placeholder-[#94A3B8] transition-all focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 ${
                        errors.email ? 'border-[#DC2626]' : 'border-[#E2E8F0]'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-[#DC2626]">{errors.email}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#0F172A]">
                      Phone Number <span className="text-[#2563EB]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      disabled={statusState === 'processing'}
                      className={`w-full px-4 py-2.5 text-xs rounded-xl bg-[#FFFFFF] border text-[#0F172A] placeholder-[#94A3B8] transition-all focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 ${
                        errors.phone ? 'border-[#DC2626]' : 'border-[#E2E8F0]'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-[#DC2626]">{errors.phone}</p>}
                  </div>
                </div>

                {/* Date & Time Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#0F172A]">
                      Preferred Date <span className="text-[#2563EB]">*</span>
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().slice(0, 10)}
                      value={formData.selected_date}
                      onChange={(e) => handleChange('selected_date', e.target.value)}
                      disabled={statusState === 'processing'}
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] transition-all focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#0F172A]">
                      Preferred Time <span className="text-[#2563EB]">*</span>
                    </label>
                    <select
                      value={formData.selected_time}
                      onChange={(e) => handleChange('selected_time', e.target.value)}
                      disabled={statusState === 'processing'}
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] transition-all focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              {/* Payment Summary Box */}
              <div className="bg-[#F5F8FC] p-4 rounded-xl border border-[#E2E8F0] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">Neno Dialer Demo</div>
                  <div className="text-[11px] text-[#64748B]">Demo Booking Fee</div>
                </div>
                <div className="text-lg font-bold text-[#0F172A] font-headline">
                  ₹49
                </div>
              </div>

              {/* Primary CTA & Trust Message */}
              <div className="space-y-2 pt-2">
                <button
                  type="submit"
                  disabled={statusState === 'processing'}
                  className={`w-full py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs tracking-wide transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer ${
                    statusState === 'processing' ? 'opacity-80 cursor-not-allowed' : ''
                  }`}
                >
                  {statusState === 'processing' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Opening Razorpay Payment...</span>
                    </>
                  ) : (
                    <>
                      <span>Pay ₹49 &amp; Book Demo</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-[#64748B] flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#64748B]" />
                  <span>Secure payment powered by Razorpay</span>
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
