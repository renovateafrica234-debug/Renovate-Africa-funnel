import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY!;
const TOKEN_SECRET = process.env.WEBHOOK_TOKEN_SECRET!;
const RESEND_API_KEY = process.env.RESEND_API_KEY!;

// ─── Token Helpers (HMAC, no DB needed) ─────────────────────────────

function createToken(email: string): string {
  const payload = JSON.stringify({
    email,
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
  });
  const sig = crypto.createHmac('sha256', TOKEN_SECRET).update(payload).digest('hex');
  return `${Buffer.from(payload).toString('base64url')}.${sig}`;
}

function verifyToken(token: string) {
  try {
    const [b64, sig] = token.split('.');
    const payload = Buffer.from(b64, 'base64url').toString();
    const expected = crypto.createHmac('sha256', TOKEN_SECRET).update(payload).digest('hex');
    if (sig !== expected) return null;
    const data = JSON.parse(payload);
    if (Date.now() > data.exp) return null;
    return data as { email: string; exp: number };
  } catch {
    return null;
  }
}

// ─── Paystack Signature Check ───────────────────────────────────────────

function verifyPaystackSig(rawBody: string, signature: string | null) {
  if (!signature || !PAYSTACK_SECRET) return false;
  const hash = crypto.createHmac('sha512', PAYSTACK_SECRET).update(rawBody).digest('hex');
  return hash === signature;
}

// ─── Email Template ───────────────────────────────────────────────────

function emailTemplate(downloadUrl: string) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your AI Business Launch System</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0a0a0a; margin: 0; padding: 20px; }
    .wrap { max-width: 600px; margin: 0 auto; background: #1a1a1a; border-radius: 16px; overflow: hidden; border: 1px solid #2a2a2a; }
    .head { background: #0f0f1a; padding: 48px 32px; text-align: center; }
    .head h1 { color: #c9a96e; margin: 0; font-size: 26px; letter-spacing: -0.5px; }
    .head p { color: #888; margin: 8px 0 0; font-size: 14px; }
    .body { padding: 40px 32px; }
    .body h2 { color: #fff; margin-top: 0; font-size: 20px; }
    .body p { color: #aaa; line-height: 1.7; font-size: 15px; }
    .cta { display: inline-block; background: #c9a96e; color: #0a0a0a; text-decoration: none; padding: 16px 32px; border-radius: 10px; font-weight: 700; font-size: 15px; margin: 16px 0; }
    .box { background: #0f0f0f; border: 1px solid #2a2a2a; border-radius: 10px; padding: 24px; margin: 24px 0; }
    .box h3 { margin-top: 0; color: #c9a96e; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
    .box ul { margin: 0; padding-left: 20px; color: #aaa; font-size: 14px; }
    .box li { margin: 10px 0; }
    .foot { padding: 24px 32px; text-align: center; color: #555; font-size: 12px; border-top: 1px solid #222; }
    .foot a { color: #c9a96e; text-decoration: none; }
    .tag { display: inline-block; background: #c9a96e15; color: #c9a96e; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-bottom: 16px; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="head">
      <h1>Renovate Africa</h1>
      <p>AI Business Launch System</p>
    </div>
    <div class="body">
      <span class="tag">Payment Confirmed</span>
      <h2>Your downloads are ready 🚀</h2>
      <p>Thanks for your purchase. Your payment of <strong style="color:#fff;">₦35,000</strong> has been received and your course access is now unlocked.</p>
      
      <div style="text-align:center;">
        <a href="${downloadUrl}" class="cta">Access Your Course →</a>
      </div>
      
      <p style="text-align:center; font-size:13px; color:#666;">This secure link expires in 7 days.</p>
      
      <div class="box">
        <h3>What's Inside</h3>
        <ul>
          <li>5 Premium Next.js Templates (Restaurant, Real Estate, Salon, Clinic, Logistics)</li>
          <li>AI Chatbot Integration Kit — Gemini 2.0 ready</li>
          <li>WhatsApp Business Automation Scripts</li>
          <li>Paystack + Stripe Setup Guide</li>
          <li>30-Day Social Media Canva Pack</li>
          <li>Local SEO Domination Guide</li>
          <li>Admin Dashboard Template (Next.js + Supabase + Prisma)</li>
          <li>6+ Hours of Screen-Recorded Video Training</li>
        </ul>
      </div>
      
      <p>Stuck on something? Reply to this email or WhatsApp us — we typically respond within 4 hours.</p>
      <p style="color:#666; font-size:13px;">— The Renovate Africa Team</p>
    </div>
    <div class="foot">
      <p>Renovate Africa · Abuja, Nigeria</p>
      <p><a href="https://renovate-africa-funnel-bker.vercel.app">renovate-africa-funnel-bker.vercel.app</a></p>
    </div>
  </div>
</body>
</html>`;
}

// ─── Webhook Handler ──────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-paystack-signature');

    if (!verifyPaystackSig(rawBody, signature)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const event = JSON.parse(rawBody);

    // Only process successful charges
    if (event.event !== 'charge.success') {
      return NextResponse.json({ received: true });
    }

    const { email } = event.data.customer;
    const amount = event.data.amount; // kobo
    const reference = event.data.reference;

    // Log for your records (check Vercel logs)
    console.log(`[WEBHOOK] Sale: ${email} | ₦${amount / 100} | Ref: ${reference}`);

    // Generate secure download link
    const token = createToken(email);
    const downloadUrl = `https://renovate-africa-funnel-bker.vercel.app/download?token=${token}`;

    // Send email via Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Renovate Africa <hello@renovateafrica.com>',
        to: email,
        subject: 'Your AI Business Launch System is Ready 🚀',
        html: emailTemplate(downloadUrl),
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('[RESEND ERROR]', err);
      // Return 200 anyway so Paystack doesn't retry and spam the customer
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error('[WEBHOOK ERROR]', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

// ─── Export verifyToken for the download page ─────────────────────────
export { verifyToken };
