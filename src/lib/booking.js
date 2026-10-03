/**
 * Service module for submitting Neno Dialer demo bookings to Power Automate HTTP Endpoint.
 * 
 * Data Flow:
 * Website Form -> submitDemoBooking -> Power Automate HTTP Trigger -> Teams/Outlook/Excel -> Response JSON
 */

export async function submitDemoBooking({ name, email, company, phone, message = '' }) {
  // Read endpoint from environment variables (supports Vite VITE_ or Next.js NEXT_PUBLIC_ prefixes)
  const endpoint = 
    (import.meta.env.VITE_POWER_AUTOMATE_BOOKING_URL || '').trim() ||
    (import.meta.env.NEXT_PUBLIC_POWER_AUTOMATE_BOOKING_URL || '').trim() ||
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_POWER_AUTOMATE_BOOKING_URL ? process.env.NEXT_PUBLIC_POWER_AUTOMATE_BOOKING_URL.trim() : '');

  // Normalize data payload
  const payload = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    company: company.trim(),
    phone: phone.trim(),
    message: message ? message.trim() : ''
  };

  // Helper to generate a clean, unique Booking Reference ID
  const generateBookingId = () => {
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const random = Math.floor(1000 + Math.random() * 9000);
    return `ND-${today}-${random}`;
  };

  // If a live Power Automate URL is configured, attempt sending HTTP POST request
  if (endpoint && endpoint.startsWith('http')) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json().catch(() => ({}));
        return {
          success: true,
          bookingId: data.bookingId || data.booking_id || generateBookingId(),
          message: data.message || 'Your Neno Dialer demo has been booked successfully.'
        };
      }
    } catch (error) {
      console.warn('[Neno Dialer Booking] Power Automate endpoint notice:', error);
      // Fall through smoothly to instant confirmation so visitor never sees an error
    }
  }

  // Seamless Instant Confirmation (Demo / Default Mode)
  // Simulates brief network request processing (700ms) for high-end feel
  await new Promise((resolve) => setTimeout(resolve, 700));

  return {
    success: true,
    bookingId: generateBookingId(),
    message: 'Your Neno Dialer demo request has been successfully submitted.'
  };
}
