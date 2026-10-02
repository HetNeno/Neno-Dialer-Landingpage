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

  // Fallback Simulation Mode: If no live Power Automate URL is configured in .env yet
  if (!endpoint || endpoint === '' || endpoint === 'DEMO' || endpoint === 'MOCK') {
    console.warn(
      '[Neno Dialer Booking] No live Power Automate URL found in VITE_POWER_AUTOMATE_BOOKING_URL. Operating in Demo Simulation Mode.\n' +
      'To connect your live Microsoft Power Automate flow, add VITE_POWER_AUTOMATE_BOOKING_URL=https://<your-flow-url> in your .env file.'
    );

    // Simulate network latency (1.2 seconds)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Return successful mock response
    const mockId = `ND-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.floor(100 + Math.random() * 900)}`;
    return {
      success: true,
      bookingId: mockId,
      message: 'Your Neno Dialer demo has been booked successfully.'
    };
  }

  // Live Mode: Send HTTP POST request to Microsoft Power Automate HTTP trigger
  try {
    const response = await fetch(endpoint, {
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
      message: "We couldn't submit your request to Power Automate. Please check your network connection or verify your Power Automate URL in .env."
    };
  }
}
