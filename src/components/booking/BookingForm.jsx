import React, { useState } from 'react';
import { User, Mail, Building, Phone, MessageSquare, ArrowRight, Loader2 } from 'lucide-react';
import FormField from './FormField';
import BookingError from './BookingError';
import { submitDemoBooking } from '../../lib/booking';

export default function BookingForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email format regex
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (field, value) => {
    let err = '';
    const val = value ? value.trim() : '';

    switch (field) {
      case 'name':
        if (!val) {
          err = 'Full Name is required';
        } else if (val.length < 2) {
          err = 'Please enter your full name';
        }
        break;

      case 'email':
        if (!val) {
          err = 'Work Email is required';
        } else if (!EMAIL_REGEX.test(val)) {
          err = 'Please enter a valid work email address';
        }
        break;

      case 'company':
        if (!val) {
          err = 'Company name is required';
        }
        break;

      case 'phone':
        if (!val) {
          err = 'Phone Number is required';
        } else if (val.replace(/\D/g, '').length < 7) {
          err = 'Please enter a valid phone number with country code';
        } else if (val.length > 20) {
          err = 'Phone number is too long';
        }
        break;

      case 'message':
        if (val.length > 500) {
          err = 'Message must be less than 500 characters';
        }
        break;

      default:
        break;
    }

    return err;
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      company: validateField('company', formData.company),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message)
    };

    // Filter out empty errors
    const activeErrors = {};
    Object.keys(newErrors).forEach((key) => {
      if (newErrors[key]) {
        activeErrors[key] = newErrors[key];
      }
    });

    setErrors(activeErrors);
    return Object.keys(activeErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
    if (serverError) {
      setServerError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submissions

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setServerError('');

    const res = await submitDemoBooking({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      message: formData.message
    });

    setIsSubmitting(false);

    if (res.success) {
      onSuccess({
        bookingId: res.bookingId,
        message: res.message
      });
    } else {
      setServerError(res.message || 'This booking could not be completed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Server/Network Error Banner */}
      <BookingError message={serverError} />

      {/* Name & Email Row */}
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
          id="email"
          label="Work Email"
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
      </div>

      {/* Company & Phone Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          id="company"
          label="Company"
          required
          placeholder="Acme Corp"
          icon={Building}
          autoComplete="organization"
          value={formData.company}
          onChange={(e) => handleChange('company', e.target.value)}
          error={errors.company}
          disabled={isSubmitting}
        />

        <FormField
          id="phone"
          label="Phone Number"
          type="tel"
          required
          placeholder="+1 (555) 000-0000 or +91 9876543210"
          icon={Phone}
          autoComplete="tel"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          error={errors.phone}
          disabled={isSubmitting}
        />
      </div>

      {/* Optional Message Field */}
      <FormField
        id="message"
        label="Message"
        isTextArea
        rows={3}
        placeholder="Tell us about your team size, calling requirements, or questions..."
        value={formData.message}
        onChange={(e) => handleChange('message', e.target.value)}
        error={errors.message}
        disabled={isSubmitting}
      />

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-lg bg-[#c2652a] text-white font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-2 ${
            isSubmitting
              ? 'opacity-75 cursor-not-allowed'
              : 'hover:bg-[#e08850] hover:shadow-lg cursor-pointer'
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Booking...</span>
            </>
          ) : (
            <>
              <span>Book a Call</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
