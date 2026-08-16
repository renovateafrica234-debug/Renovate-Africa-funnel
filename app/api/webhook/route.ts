import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  
  // Verify Paystack signature (security)
  const signature = req.headers.get('x-paystack-signature');
  // ... verify logic ...
  
  if (body.event === 'charge.success') {
    const email = body.data.customer.email;
    const amount = body.data.amount; // in kobo
    
    // Send email with download link
    // Use Resend, SendGrid, or Brevo
  }
  
  return NextResponse.json({ received: true });
}

