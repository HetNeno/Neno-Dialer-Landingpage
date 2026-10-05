import Razorpay from 'razorpay';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Ensure secret is present (server-side only)
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;

  if (!key_id || !key_secret) {
    console.error("Razorpay Keys missing in environment variables");
    return res.status(500).json({ message: 'Server configuration error' });
  }

  try {
    const rzp = new Razorpay({
      key_id: key_id,
      key_secret: key_secret,
    });

    // Generate dynamic receipt ID: NENO-{timestamp}-{uniqueId}
    const receiptId = `NENO-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

    // Define fixed checkout amount: 4900 paise = ₹49 INR
    const options = {
      amount: 4900,
      currency: "INR",
      receipt: receiptId,
    };

    const order = await rzp.orders.create(options);

    return res.status(200).json({
      success: true,
      order_id: order.id,
      amount: order.amount,
      currency: order.currency
    });

  } catch (err) {
    console.error("Razorpay order creation error:", err);
    return res.status(500).json({ message: 'Failed to create order', error: err.message });
  }
}
