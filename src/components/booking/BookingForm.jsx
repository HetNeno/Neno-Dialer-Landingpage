import React, { useState } from 'react';
import { User, Mail, Building, Phone, ArrowRight, Loader2, ShieldCheck, AlertCircle } from 'lucide-react';
import FormField from './FormField';
import { processDemoBooking } from '../../lib/booking';

export default function BookingForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.company.trim()) newErrors.company = 'Business / Company Name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid work email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await processDemoBooking({
        full_name: formData.name,
        company_name: formData.company,
        email: formData.email,
        phone: formData.phone
      });

      setIsSubmitting(false);

      if (res.success) {
        onSuccess({
          bookingId: res.bookingId,
          payment_token: res.payment_token,
          full_name: formData.name,
          company_name: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: res.message
        });
      } else {
        setErrorMessage(res.message || 'Payment could not be completed. Please try again.');
      }
    } catch (err) {
      setIsSubmitting(false);
      setErrorMessage('Payment could not be completed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      
      {/* Error Notice */}
      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-[#FEF2F2] border border-[#DC2626]/20 text-[#DC2626] text-xs flex items-start gap-2.5 animate-in fade-in duration-150">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#DC2626]" />
          <div className="leading-relaxed">
            <strong className="font-semibold block text-[11px] uppercase tracking-wider mb-0.5 font-label">
              Booking Notice
            </strong>
            <span>{errorMessage}</span>
          </div>
        </div>
      )}

      {/* Name & Company Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          id="name"
          label="Full Name"
          required
          placeholder="Jane Doe"
          icon={User}
          autoComplete="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          error={errors.name}
          disabled={isSubmitting}
        />

        <FormField
          id="company"
          label="Business / Company Name"
          required
          placeholder="Acme Corp"
          icon={Building}
          autoComplete="organization"
          value={formData.company}
          onChange={(e) => handleChange('company', e.target.value)}
          error={errors.company}
          disabled={isSubmitting}
        />
      </div>

      {/* Email & Phone Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          id="email"
          label="Email Address"
          type="email"
          required
          placeholder="jane@company.com"
          icon={Mail}
          autoComplete="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          error={errors.email}
          disabled={isSubmitting}
        />

        <FormField
          id="phone"
          label="Phone Number"
          type="tel"
          required
          placeholder="+91 98765 43210"
          icon={Phone}
          autoComplete="tel"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          error={errors.phone}
          disabled={isSubmitting}
        />
      </div>

      {/* Payment Information Summary */}
      <div className="bg-[#F5F8FC] p-4 rounded-xl border border-[#E2E8F0] flex items-center justify-between">
        <div>
          <div className="text-xs font-bold text-[#0F172A]">Neno Dialer 15-Min Demo Call</div>
          <div className="text-[11px] text-[#64748B]">Complete Product Mentor Walkthrough</div>
        </div>
        <div className="text-xl font-bold text-[#2563EB] font-headline">
          ₹49
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2 space-y-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn-light-sweep btn-press-effect w-full py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] text-white font-semibold text-xs tracking-wide transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-[1px] active:scale-[0.98] flex items-center justify-center gap-2 font-label cursor-pointer ${
            isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>Opening Razorpay Payment...</span>
            </>
          ) : (
            <>
              <span>Pay ₹49 &amp; Book Demo Call</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-center text-xs text-[#64748B] flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#64748B]" />
          <span>Next step: Select call date &amp; time after payment</span>
        </p>
      </div>

    </form>
  );
}
