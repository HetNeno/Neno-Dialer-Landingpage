import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ message: 'Missing payment signature payload' });
  }

  const key_secret = process.env.RAZORPAY_KEY_SECRET;

  if (!key_secret) {
    console.error("Razorpay Key Secret missing in environment variables");
    return res.status(500).json({ message: 'Server configuration error' });
  }

  try {
    // Generate signature using hmac sha256 to verify the payment
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', key_secret)
      .update(body.toString())
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Create a cryptographically signed proof-of-payment token
      // This prevents bypass of the payment step by providing frontend a token it must present to /api/confirm-booking
      const tokenPayload = Buffer.from(JSON.stringify({ 
        order_id: razorpay_order_id, 
        verified: true,
        exp: Date.now() + (1000 * 60 * 30) // Valid for 30 minutes to conclude scheduling
      })).toString('base64');
      
      const tokenSignature = crypto.createHmac('sha256', key_secret).update(tokenPayload).digest('base64');
      const payment_token = `${tokenPayload}.${tokenSignature}`;

      // Payment verified successfully
      return res.status(200).json({ 
        success: true, 
        message: "Payment verified successfully",
        payment_token
      });
    } else {
      // Payment verification failed
      console.error("Payment signature verification failed");
      return res.status(400).json({ success: false, message: "Payment verification failed" });
    }
  } catch (err) {
    console.error("Payment verification error:", err);
    return res.status(500).json({ message: 'Verification error', error: err.message });
  }
}
