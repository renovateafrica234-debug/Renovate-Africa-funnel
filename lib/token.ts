import crypto from 'crypto';

export interface TokenPayload {
  email: string;
  reference?: string;
  timestamp?: number;
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    const [payloadBase64, sig] = token.split('.');
    if (!payloadBase64 || !sig) return null;
    const secret = process.env.PAYSTACK_SECRET_KEY || 'fallback-secret';
    const expected = crypto.createHmac('sha256', secret).update(payloadBase64).digest('hex');
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) {
      return null;
    }
    const decoded = Buffer.from(payloadBase64, 'base64').toString('utf-8');
    return JSON.parse(decoded) as TokenPayload;
  } catch {
    return null;
  }
}
