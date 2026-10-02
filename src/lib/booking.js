/**
 * Service module for submitting Neno Dialer demo bookings to Power Automate HTTP Endpoint.
 * 
 * Data Flow:
 * Website Form -> submitDemoBooking -> Power Automate HTTP Trigger -> Teams/Outlook/Excel -> Response JSON
 */

export async function submitDemoBooking({ name, email, company, phone, message = '' }) {
  // Read endpoint from environment variables (supports Vite VITE_ or Next.js NEXT_PUBLIC_ prefixes)
  const endpoint = 
    import.meta.env.VITE_POWER_AUTOMATE_BOOKING_URL || 
    import.meta.env.NEXT_PUBLIC_POWER_AUTOMATE_BOOKING_URL ||
    (typeof process !== 'undefined' ? process.env?.NEXT_PUBLIC_POWER_AUTOMATE_BOOKING_URL : undefined);

  // Development fallback check
  if (!endpoint || endpoint.trim() === '') {
    if (import.meta.env.DEV) {
      console.warn('[Neno Dialer Booking] Missing VITE_POWER_AUTOMATE_BOOKING_URL environment variable.');
      return {
        success: false,
        message: 'Power Automate booking endpoint is not configured.'
      };
    }
    return {
      success: false,
      message: "We couldn't submit your request. Please check configuration and try again."
    };
  }

  // Normalize data payload
  const payload = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    company: company.trim(),
    phone: phone.trim(),
    message: message ? message.trim() : ''
  };

  try {
    const response = await fetch(endpoint.trim(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.status === 400) {
      return {
        success: false,
        message: 'Please check your information and try again.'
      };
    }

    if (response.status === 409) {
      return {
        success: false,
        message: 'The booking could not be completed at this time. Please try again.'
      };
    }

    if (response.status >= 500) {
      return {
        success: false,
        message: 'Something went wrong while processing your request. Please try again.'
      };
    }

    if (!response.ok) {
      return {
        success: false,
        message: 'This booking could not be completed. Please try again.'
      };
    }

    // Parse Power Automate JSON response
    const data = await response.json();

    if (data.success === false) {
      return {
        success: false,
        message: data.message || 'This booking could not be completed. Please try again.'
      };
    }

    return {
      success: true,
      bookingId: data.bookingId || data.booking_id || null,
      message: data.message || 'Your Neno Dialer demo has been booked successfully.'
    };

  } catch (error) {
    console.error('[Neno Dialer Booking Error]:', error);
    return {
      success: false,
      message: "We couldn't submit your request. Please check your connection and try again."
    };
  }
}
