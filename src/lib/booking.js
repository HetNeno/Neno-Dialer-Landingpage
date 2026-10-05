/**
 * Neno Dialer Demo Booking & Razorpay Integration Service
 */

// Helper to load Razorpay
export function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

// Generate unique booking reference ID
export function generateBookingId() {
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const random = Math.floor(1000 + Math.random() * 9000);
  return `ND-${today}-${random}`;
}

export async function processDemoBooking({
  full_name,
  company_name,
  email,
  phone
}) {
  const isScriptLoaded = await loadRazorpayScript();
  if (!isScriptLoaded) {
    return { success: false, message: 'Razorpay SDK failed to load. Please check your connection.' };
  }

  // 1. Create order securely on the Vercel backend
  let orderResponse;
  try {
    const res = await fetch('/api/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ full_name, email, phone })
    });
    orderResponse = await res.json();
    if (!res.ok) throw new Error(orderResponse.message || 'Failed order response');
  } catch (err) {
    console.error('Order creation failed:', err);
    return { success: false, message: 'Could not initialize payment order. Please try again.' };
  }

  // 2. Setup Razorpay Checkout options
  const razorpayKey = (import.meta.env.VITE_RAZORPAY_KEY_ID || '').trim();
  
  return new Promise((resolve) => {
    const options = {
      key: razorpayKey, // VITE_RAZORPAY_KEY_ID is public-facing
      amount: orderResponse.amount, // Derived securely from backend order
      currency: orderResponse.currency || "INR",
      name: 'Neno Technology',
      description: 'Neno Dialer Demo Booking Fee',
      image: '/favicon.ico',
      order_id: orderResponse.order_id, // Vital: Bind front-end checkout to the backend order
      prefill: {
        name: full_name,
        email: email,
        contact: phone
      },
      notes: {
        company_name: company_name
      },
      theme: {
        color: '#2563EB'
      },
      handler: async function (response) {
        // 3. Verify payment signature on backend BEFORE concluding success
        try {
          const verifyRes = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            })
          });
          
          const verifyData = await verifyRes.json();
          if (verifyRes.ok && verifyData.success) {
            // ONLY after backend signature validation succeeds, confirm the booking layout advancement
            resolve({
              success: true,
              payment_token: verifyData.payment_token,
              bookingId: generateBookingId(),
              message: "Payment successfully verified."
            });
          } else {
            resolve({
              success: false,
              message: verifyData.message || 'Payment signature verification failed. Please contact support.'
            });
          }
        } catch (err) {
          console.error("Verification endpoint error:", err);
          resolve({
            success: false,
            message: 'Error verifying payment details. Please contact support immediately.'
          });
        }
      },
      modal: {
        ondismiss: function () {
          resolve({
            success: false,
            message: 'Payment was cancelled.'
          });
        }
      }
    };

    try {
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        resolve({
          success: false,
          message: response.error?.description || 'Payment failed. Please try again.'
        });
      });
      rzp.open();
    } catch (err) {
      console.warn('Razorpay SDK init error:', err);
      resolve({
        success: false,
        message: 'Could not open Razorpay checkout.'
      });
    }
  });
}
