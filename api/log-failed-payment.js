export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const {
    bookingId,
    full_name,
    email,
    phone,
    razorpay_order_id,
    failure_reason,
    razorpay_payment_id
  } = req.body;

  const POWER_AUTOMATE_WEBHOOK_URL = process.env.POWER_AUTOMATE_BOOKING_WEBHOOK_URL || process.env.VITE_POWER_AUTOMATE_BOOKING_URL;

  // Exact 18-key normalized payload for Power Automate (FAILED STATE)
  const payload = {
    bookingId: bookingId || `FAILED-${Date.now()}`,
    name: full_name || "Unknown",
    email: email || "Unknown",
    phone: phone || "Unknown",
    razorpayOrderId: razorpay_order_id || null,
    razorpayPaymentId: razorpay_payment_id || null,
    paymentStatus: "PAYMENT_FAILED",
    bookingStatus: "NOT_BOOKED",
    appointmentDate: null,
    appointmentStartTime: null,
    appointmentEndTime: null,
    duration: 15,
    bookingAppointmentId: null,
    teamsMeetingLink: null,
    failureReason: failure_reason || "Customer dropped or payment failed",
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
      console.error("Failed to push failure log to Power Automate:", err);
    }
  } else {
    console.warn("No POWER_AUTOMATE_BOOKING_WEBHOOK_URL found. Log not forwarded.");
    console.log("Failed Payment Payload Details:", payload);
  }

  return res.status(200).json({ success: true, message: "Logged appropriately" });
}
