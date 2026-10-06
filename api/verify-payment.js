import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    bookingId,
    full_name,
    email,
    phone
  } = req.body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ message: 'Missing payment signature payload' });
  }

  const key_secret = process.env.RAZORPAY_KEY_SECRET;
  if (!key_secret) {
    console.error("Razorpay Key Secret missing in environment variables");
    return res.status(500).json({ message: 'Server configuration error' });
  }

  try {
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', key_secret)
      .update(body.toString())
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // 1. Immediately ping PA Webhook with verified status
      const POWER_AUTOMATE_WEBHOOK_URL = process.env.POWER_AUTOMATE_BOOKING_WEBHOOK_URL || process.env.VITE_POWER_AUTOMATE_BOOKING_URL;
      
      const payload = {
        bookingId: bookingId || `ND-${Date.now()}`,
        name: full_name || "Unknown",
        email: email || "Unknown",
        phone: phone || "Unknown",
        razorpayOrderId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
        paymentStatus: "PAYMENT_VERIFIED",
        bookingStatus: "BOOKING_PENDING",
        appointmentDate: null,
        appointmentStartTime: null,
        appointmentEndTime: null,
        duration: 15,
        bookingAppointmentId: null,
        teamsMeetingLink: null,
        failureReason: null,
        source: "nenovoice.com",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      if (POWER_AUTOMATE_WEBHOOK_URL) {
        try {
          await fetch(POWER_AUTOMATE_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
        } catch (err) {
          console.error("PA Sync Error in verify-payment:", err);
        }
      }

      // 2. Issue the JWT proof of payment for the browser
      const tokenPayload = Buffer.from(JSON.stringify({ 
        order_id: razorpay_order_id, 
        verified: true,
        exp: Date.now() + (1000 * 60 * 30) // Valid for 30 minutes to conclude scheduling
      })).toString('base64');
      
      const tokenSignature = crypto.createHmac('sha256', key_secret).update(tokenPayload).digest('base64');
      const payment_token = `${tokenPayload}.${tokenSignature}`;

      return res.status(200).json({ 
        success: true, 
        message: "Payment verified successfully",
        payment_token
      });
    } else {
      console.error("Payment signature verification failed");
      return res.status(400).json({ success: false, message: "Payment verification failed" });
    }
  } catch (err) {
    console.error("Payment verification error:", err);
    return res.status(500).json({ message: 'Verification error', error: err.message });
  }
}
