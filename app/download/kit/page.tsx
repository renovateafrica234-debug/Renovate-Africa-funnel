'use client';

import { KIT_DATA } from './data';

export default function EnhancedKitPage() {
  return (
    <div style={{ backgroundColor: '#002B24', minHeight: '100vh', padding: '24px 16px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Floating Control Bar */}
      <div style={{
        maxWidth: '860px',
        margin: '0 auto 24px auto',
        backgroundColor: '#004D40',
        border: '1px solid rgba(212,225,87,0.3)',
        borderRadius: '16px',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#D4E157' }} />
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#D4E157', textTransform: 'uppercase', fontWeight: 'bold' }}>
              RENOVATE AFRICA
            </div>
            <div style={{ color: '#F5F1E8', fontWeight: '700', fontSize: '15px' }}>
              {KIT_DATA.title}
            </div>
          </div>
        </div>

        <button
          onClick={() => window.print()}
          style={{
            backgroundColor: '#D4E157',
            color: '#004D40',
            fontWeight: '800',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            padding: '12px 22px',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Export Dossier PDF
        </button>
      </div>

      {/* ================= PAGE 1 ================= */}
      <div style={{
        maxWidth: '860px',
        margin: '0 auto 32px auto',
        backgroundColor: '#F5F1E8',
        padding: '48px',
        borderRadius: '12px',
        color: '#2B2B29'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #004D40', paddingBottom: '16px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#004D40', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4E157', fontWeight: '900', fontSize: '22px' }}>
              R
            </div>
            <div>
              <div style={{ fontSize: '26px', fontWeight: '900', color: '#004D40', lineHeight: '1' }}>renovate</div>
              <div style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#004D40', fontWeight: '700', textTransform: 'uppercase', marginTop: '3px' }}>AFRICA</div>
            </div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '10px', color: '#004D40', lineHeight: '1.5' }}>
            <div>Doc Ref: <strong>{KIT_DATA.docRef}</strong></div>
            <div>Auth: <strong>HMAC-SHA256 Stateless</strong></div>
            <div>DNA: <strong>Grounded Luxury &bull; Electric Innovation</strong></div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'inline-block', backgroundColor: '#004D40', color: '#D4E157', fontSize: '10px', fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '20px', marginBottom: '8px' }}>
            Executive Blueprint
          </div>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#004D40', lineHeight: '1.1', marginBottom: '8px' }}>
            {KIT_DATA.title}
          </h1>
          <p style={{ fontSize: '13px', color: '#2B2B29', opacity: '0.85', lineHeight: '1.5' }}>
            {KIT_DATA.subtitle}
          </p>
        </div>

        <div style={{ backgroundColor: '#004D40', color: '#F5F1E8', padding: '20px 24px', borderRadius: '10px', marginBottom: '24px', borderLeft: '6px solid #D4E157' }}>
          <div style={{ fontSize: '10px', color: '#D4E157', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: '800', marginBottom: '4px' }}>
            The Core Doctrine
          </div>
          <div style={{ fontSize: '14px', lineHeight: '1.5', fontWeight: '600' }}>
            &ldquo;{KIT_DATA.doctrine}&rdquo;
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '15px', fontWeight: '800', color: '#004D40', borderBottom: '1px solid rgba(0,77,64,0.15)', paddingBottom: '6px', marginBottom: '14px' }}>
            01 / The 48-Hour Execution Sprint Matrix
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {KIT_DATA.phases.map((p, idx) => (
              <div key={idx} style={{ backgroundColor: '#FFFFFF', padding: '14px', borderRadius: '8px', border: '1px solid rgba(0,77,64,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ backgroundColor: '#D4E157', color: '#004D40', fontSize: '9px', fontWeight: '800', padding: '2px 6px', borderRadius: '4px' }}>{p.window}</span>
                  <span style={{ fontSize: '10px', color: '#004D40', fontWeight: '700' }}>{p.metric}</span>
                </div>
                <div style={{ fontWeight: '800', color: '#004D40', fontSize: '12px' }}>{p.title}</div>
                <div style={{ fontSize: '11px', color: '#2B2B29', opacity: '0.8', marginTop: '3px', lineHeight: '1.4' }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '2px solid #004D40', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#004D40', fontWeight: '700' }}>
          <div>RENOVATE AFRICA &bull; STRUCTURAL EXCELLENCE</div>
          <div>SHEET 01 / 03</div>
        </div>
      </div>

      {/* ================= PAGE 2 ================= */}
      <div style={{
        maxWidth: '860px',
        margin: '0 auto 32px auto',
        backgroundColor: '#F5F1E8',
        padding: '48px',
        borderRadius: '12px',
        color: '#2B2B29'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #004D40', paddingBottom: '12px', marginBottom: '24px' }}>
          <div style={{ fontWeight: '800', fontSize: '16px', color: '#004D40' }}>
            renovate<span style={{ fontSize: '9px', letterSpacing: '0.25em', marginLeft: '6px' }}>AFRICA</span>
          </div>
          <div style={{ fontSize: '10px', color: '#004D40', fontWeight: '700' }}>
            02 / COMMERCIAL PRICING & STATELESS CRYPTOGRAPHY
          </div>
        </div>

        <div style={{ marginBottom: '28px' }}>
          <div style={{ fontSize: '15px', fontWeight: '800', color: '#004D40', borderBottom: '1px solid rgba(0,77,64,0.15)', paddingBottom: '6px', marginBottom: '14px' }}>
            High-Converting Offer & Pricing Architecture
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {KIT_DATA.tiers.map((t, idx) => (
              <div key={idx} style={{ backgroundColor: '#FFFFFF', padding: '14px 18px', borderRadius: '8px', borderLeft: `5px solid ${t.color}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '9px', textTransform: 'uppercase', color: '#004D40', fontWeight: '800' }}>{t.level}</div>
                  <div style={{ fontWeight: '800', fontSize: '13px', color: '#004D40' }}>{t.title}</div>
                  <div style={{ fontSize: '11px', color: '#2B2B29', opacity: '0.7', marginTop: '2px' }}>{t.desc}</div>
                </div>
                <div style={{ fontWeight: '800', fontSize: '14px', color: t.badgeText, backgroundColor: t.badgeBg, padding: '4px 12px', borderRadius: '6px' }}>
                  {t.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '15px', fontWeight: '800', color: '#004D40', borderBottom: '1px solid rgba(0,77,64,0.15)', paddingBottom: '6px', marginBottom: '14px' }}>
            03 / Stateless HMAC-SHA256 Delivery Flow
          </div>
          <div style={{ backgroundColor: '#004D40', padding: '20px', borderRadius: '10px', color: '#F5F1E8' }}>
            <div style={{ fontSize: '12px', opacity: '0.9', marginBottom: '16px', lineHeight: '1.5' }}>
              Eliminate database maintenance and user accounts. Delivery is verified via cryptographic signatures using your private secret key.
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', textAlign: 'center' }}>
              <div style={{ backgroundColor: '#00382E', border: '1px solid rgba(212, 225, 87, 0.2)', padding: '12px 8px', borderRadius: '8px' }}>
                <div style={{ fontSize: '9px', color: '#D4E157', fontWeight: '700' }}>01 / SETTLE</div>
                <div style={{ fontWeight: '800', fontSize: '12px', color: '#FFFFFF', marginTop: '3px' }}>Paystack Charge</div>
              </div>
              <div style={{ backgroundColor: '#00382E', border: '1px solid rgba(212, 225, 87, 0.2)', padding: '12px 8px', borderRadius: '8px' }}>
                <div style={{ fontSize: '9px', color: '#D4E157', fontWeight: '700' }}>02 / MINT</div>
                <div style={{ fontWeight: '800', fontSize: '12px', color: '#FFFFFF', marginTop: '3px' }}>HMAC Sign</div>
              </div>
              <div style={{ backgroundColor: '#00382E', border: '1px solid rgba(212, 225, 87, 0.2)', padding: '12px 8px', borderRadius: '8px' }}>
                <div style={{ fontSize: '9px', color: '#D4E157', fontWeight: '700' }}>03 / REDIRECT</div>
                <div style={{ fontWeight: '800', fontSize: '12px', color: '#FFFFFF', marginTop: '3px' }}>Token Handshake</div>
              </div>
              <div style={{ backgroundColor: '#00382E', border: '1px solid rgba(212, 225, 87, 0.2)', padding: '12px 8px', borderRadius: '8px' }}>
                <div style={{ fontSize: '9px', color: '#D4E157', fontWeight: '700' }}>04 / UNLOCK</div>
                <div style={{ fontWeight: '800', fontSize: '12px', color: '#FFFFFF', marginTop: '3px' }}>Constant Time Safe</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '2px solid #004D40', marginTop: '24px', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#004D40', fontWeight: '700' }}>
          <div>RENOVATE AFRICA &bull; STRUCTURAL EXCELLENCE</div>
          <div>SHEET 02 / 03</div>
        </div>
      </div>

      {/* ================= PAGE 3 ================= */}
      <div style={{
        maxWidth: '860px',
        margin: '0 auto',
        backgroundColor: '#F5F1E8',
        padding: '48px',
        borderRadius: '12px',
        color: '#2B2B29'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #004D40', paddingBottom: '12px', marginBottom: '24px' }}>
          <div style={{ fontWeight: '800', fontSize: '16px', color: '#004D40' }}>
            renovate<span style={{ fontSize: '9px', letterSpacing: '0.25em', marginLeft: '6px' }}>AFRICA</span>
          </div>
          <div style={{ fontSize: '10px', color: '#004D40', fontWeight: '700' }}>
            03 / DISTRIBUTION SCRIPTS & POST-PURCHASE PROTOCOL
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '15px', fontWeight: '800', color: '#004D40', borderBottom: '1px solid rgba(0,77,64,0.15)', paddingBottom: '6px', marginBottom: '14px' }}>
            Zero-Ad-Spend Traffic Scripts
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {KIT_DATA.scripts.map((s, idx) => (
              <div key={idx} style={{ backgroundColor: '#FFFFFF', padding: '14px', borderRadius: '8px', border: '1px solid rgba(0,77,64,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ backgroundColor: '#004D40', color: '#D4E157', fontSize: '9px', fontWeight: '800', padding: '2px 8px', borderRadius: '4px' }}>{s.channel}</span>
                  <span style={{ fontSize: '10px', color: '#004D40', fontWeight: '700' }}>{s.title}</span>
                </div>
                <div style={{ fontSize: '11px', fontStyle: 'italic', color: '#2B2B29', lineHeight: '1.5' }}>
                  &ldquo;{s.body}&rdquo;
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '15px', fontWeight: '800', color: '#004D40', borderBottom: '1px solid rgba(0,77,64,0.15)', paddingBottom: '6px', marginBottom: '12px' }}>
            Post-Purchase Communication & Retention
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '11px' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '12px', borderRadius: '8px', border: '1px solid rgba(0,77,64,0.1)' }}>
              <strong>Minute 0:</strong> Instant on-screen redirect to `/download?token=...` with decoded buyer email and mirror links.
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '12px', borderRadius: '8px', border: '1px solid rgba(0,77,64,0.1)' }}>
              <strong>Minute 5:</strong> Automated transactional receipt containing perpetual mirror link and PDF backup.
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '12px', borderRadius: '8px', border: '1px solid rgba(0,77,64,0.1)' }}>
              <strong>Hour 24:</strong> Direct WhatsApp/Email check-in: &ldquo;Did you experience any friction setting up Paystack or Vercel?&rdquo;
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '12px', borderRadius: '8px', border: '1px solid rgba(0,77,64,0.1)' }}>
              <strong>Day 3:</strong> High-ticket upsell: Offer the ₦250k Sprint, crediting the initial kit purchase toward the fee.
            </div>
          </div>
        </div>

        <div style={{ borderTop: '2px solid #004D40', marginTop: '24px', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#004D40', fontWeight: '700' }}>
          <div>WE DON&apos;T FOLLOW. WE RENOVATE.</div>
          <div>SHEET 03 / 03</div>
        </div>
      </div>

    </div>
  );
}
