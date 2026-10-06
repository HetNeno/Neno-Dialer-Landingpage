/**
 * POST /api/razorpay/webhook
 *
 * Razorpay production webhook handler.
 * Verifies the X-Razorpay-Signature header before processing any event.
 *
 * Supported events:
 *   - payment.captured  → update Power Automate row to PAYMENT_VERIFIED / BOOKING_PENDING
 *   - payment.failed    → update Power Automate row to PAYMENT_FAILED / NOT_BOOKED
 *
 * SECURITY RULES:
 *   - RAZORPAY_WEBHOOK_SECRET is read from the server environment only.
 *   - POWER_AUTOMATE_BOOKING_WEBHOOK_URL is read from the server environment only.
 *   - No secrets are ever returned in the response body.
 */

import crypto from 'crypto';

export default async function handler(req, res) {
  // Only accept POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error('[webhook] RAZORPAY_WEBHOOK_SECRET is not set');
    return res.status(500).json({ message: 'Server configuration error' });
  }

  // -----------------------------------------------------------------
  // 1. Verify Razorpay webhook signature
  //    Razorpay signs the raw request body with HMAC-SHA256.
  //    The raw body must be used — NOT JSON.parse(req.body).
  // -----------------------------------------------------------------
  const razorpaySignature = req.headers['x-razorpay-signature'];
  if (!razorpaySignature) {
    console.warn('[webhook] Missing x-razorpay-signature header');
    return res.status(400).json({ message: 'Missing signature' });
  }

  // On Vercel, the body is already parsed as a JS object by default.
  // We need the raw bytes to verify the signature.
  // Use the raw body string that Vercel provides via req.rawBody, or re-stringify.
  const rawBody = req.rawBody || JSON.stringify(req.body);

  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(rawBody)
    .digest('hex');

  if (expectedSignature !== razorpaySignature) {
    console.warn('[webhook] Signature mismatch — possible spoofed request');
    return res.status(400).json({ message: 'Invalid signature' });
  }

  // -----------------------------------------------------------------
  // 2. Parse the verified event
  // -----------------------------------------------------------------
  const event = req.body;
  const eventType = event?.event;
  const paymentEntity = event?.payload?.payment?.entity || {};

  const razorpayOrderId  = paymentEntity.order_id   || null;
  const razorpayPaymentId = paymentEntity.id         || null;
  const errorDescription  = paymentEntity.error_description || null;

  // Pull booking ID from Razorpay notes (set during order creation)
  const bookingId = paymentEntity.notes?.booking_id || `ND-WEBHOOK-${Date.now()}`;
  const name      = paymentEntity.notes?.name  || 'Unknown';
  const email     = paymentEntity.email        || 'Unknown';
  const phone     = paymentEntity.contact      || 'Unknown';

  const POWER_AUTOMATE_WEBHOOK_URL = process.env.POWER_AUTOMATE_BOOKING_WEBHOOK_URL;

  // -----------------------------------------------------------------
  // 3. Handle each supported event
  // -----------------------------------------------------------------
  if (eventType === 'payment.captured') {
    console.log(`[webhook] payment.captured — Order: ${razorpayOrderId}, Payment: ${razorpayPaymentId}`);

    if (POWER_AUTOMATE_WEBHOOK_URL) {
      const payload = {
        bookingId,
        name,
        email,
        phone,
        razorpayOrderId,
        razorpayPaymentId,
        paymentStatus:       'PAYMENT_VERIFIED',
        bookingStatus:       'BOOKING_PENDING',
        appointmentDate:     null,
        appointmentStartTime: null,
        appointmentEndTime:  null,
        duration:            15,
        bookingAppointmentId: null,
        teamsMeetingLink:    null,
        failureReason:       null,
        source:              'nenovoice.com',
        createdAt:           new Date().toISOString(),
        updatedAt:           new Date().toISOString()
      };

      try {
        await fetch(POWER_AUTOMATE_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        // Log but do not fail — Razorpay expects a 200 ack
        console.error('[webhook] PA sync error (captured):', err);
      }
    }

    return res.status(200).json({ received: true, event: eventType });
  }

  if (eventType === 'payment.failed') {
    console.log(`[webhook] payment.failed — Order: ${razorpayOrderId}, Reason: ${errorDescription}`);

    if (POWER_AUTOMATE_WEBHOOK_URL) {
      const payload = {
        bookingId,
        name,
        email,
        phone,
        razorpayOrderId,
        razorpayPaymentId,
        paymentStatus:        'PAYMENT_FAILED',
        bookingStatus:        'NOT_BOOKED',
        appointmentDate:      null,
        appointmentStartTime: null,
        appointmentEndTime:   null,
        duration:             15,
        bookingAppointmentId: null,
        teamsMeetingLink:     null,
        failureReason:        errorDescription || 'Razorpay payment.failed webhook',
        source:               'nenovoice.com',
        createdAt:            new Date().toISOString(),
        updatedAt:            new Date().toISOString()
      };

      try {
        await fetch(POWER_AUTOMATE_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.error('[webhook] PA sync error (failed):', err);
      }
    }

    return res.status(200).json({ received: true, event: eventType });
  }

  // Acknowledge any other events silently (Razorpay requires a 200)
  console.log(`[webhook] Unhandled event type: ${eventType}`);
  return res.status(200).json({ received: true, event: eventType, handled: false });
}
