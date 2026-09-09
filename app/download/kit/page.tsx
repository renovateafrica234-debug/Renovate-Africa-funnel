'use client';

export default function EnhancedKitPage() {
  return (
    <div style={{ backgroundColor: '#002B24', minHeight: '100vh', padding: '24px 16px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Top Floating Bar */}
      <div style={{
        maxWidth: '840px',
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
              48-Hour Digital Business Launch Kit
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
            padding: '12px 20px',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Export PDF
        </button>
      </div>

      {/* Main Dossier Sheet */}
      <div style={{
        maxWidth: '840px',
        margin: '0 auto 32px auto',
        backgroundColor: '#F5F1E8',
        padding: '48px',
        borderRadius: '16px',
        color: '#2B2B29'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #004D40', paddingBottom: '20px', marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#004D40', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4E157', fontWeight: '900', fontSize: '22px' }}>
              R
            </div>
            <div>
              <div style={{ fontSize: '26px', fontWeight: '900', color: '#004D40', lineHeight: '1', letterSpacing: '-0.02em' }}>
                renovate
              </div>
              <div style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#004D40', fontWeight: '700', textTransform: 'uppercase', marginTop: '3px' }}>
                AFRICA
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'right', fontSize: '11px', color: '#004D40', lineHeight: '1.5' }}>
            <div>Doc: <strong>RA-48HR-SYSTEM</strong></div>
            <div>Auth: <strong>HMAC-SHA256</strong></div>
          </div>
        </div>

        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'inline-block', backgroundColor: '#004D40', color: '#D4E157', fontSize: '10px', fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: '20px', marginBottom: '12px' }}>
            Executive Blueprint
          </div>
          <h1 style={{ fontSize: '38px', fontWeight: '900', color: '#004D40', lineHeight: '1.1', marginBottom: '12px' }}>
            48-Hour Digital Business Launch Kit
          </h1>
          <p style={{ fontSize: '15px', color: '#2B2B29', opacity: '0.85', lineHeight: '1.5' }}>
            Rapid offer validation, zero dev retainers, and automated Paystack fulfillment.
          </p>
        </div>

        {/* Doctrine Card */}
        <div style={{
          backgroundColor: '#004D40',
          color: '#F5F1E8',
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '28px',
          borderLeft: '6px solid #D4E157'
        }}>
          <div style={{ fontSize: '10px', color: '#D4E157', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: '800', marginBottom: '6px' }}>
            The Core Doctrine
          </div>
          <div style={{ fontSize: '16px', lineHeight: '1.5', fontWeight: '600' }}>
            "We don't follow long development cycles. We build an edge architecture in 48 hours, validate transaction throughput, and let paying customers finance the roadmap."
          </div>
        </div>

        {/* 4 Phases */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '16px', fontWeight: '800', color: '#004D40', borderBottom: '1px solid rgba(0,77,64,0.15)', paddingBottom: '8px', marginBottom: '16px' }}>
            01 / The 48-Hour Execution Matrix
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '10px', border: '1px solid rgba(0,77,64,0.1)' }}>
              <div style={{ display: 'inline-block', backgroundColor: '#D4E157', color: '#004D40', fontSize: '10px', fontWeight: '800', padding: '2px 8px', borderRadius: '4px', marginBottom: '6px' }}>H 00 – 12</div>
              <div style={{ fontWeight: '800', color: '#004D40', fontSize: '13px' }}>Foundation Setup</div>
              <div style={{ fontSize: '11px', color: '#2B2B29', opacity: '0.8', marginTop: '4px', lineHeight: '1.4' }}>
                Next.js App Router initialization, Paystack keys, and Vercel edge deployment with SSL.
              </div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '10px', border: '1px solid rgba(0,77,64,0.1)' }}>
              <div style={{ display: 'inline-block', backgroundColor: '#D4E157', color: '#004D40', fontSize: '10px', fontWeight: '800', padding: '2px 8px', borderRadius: '4px', marginBottom: '6px' }}>H 12 – 24</div>
              <div style={{ fontWeight: '800', color: '#004D40', fontSize: '13px' }}>Offer Positioning</div>
              <div style={{ fontSize: '11px', color: '#2B2B29', opacity: '0.8', marginTop: '4px', lineHeight: '1.4' }}>
                Value proposition hook, 3-tier offer matrix, sticky mobile CTA button, and mobile speed tuning.
              </div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '10px', border: '1px solid rgba(0,77,64,0.1)' }}>
              <div style={{ display: 'inline-block', backgroundColor: '#D4E157', color: '#004D40', fontSize: '10px', fontWeight: '800', padding: '2px 8px', borderRadius: '4px', marginBottom: '6px' }}>H 24 – 36</div>
              <div style={{ fontWeight: '800', color: '#004D40', fontSize: '13px' }}>Payment Engine</div>
              <div style={{ fontSize: '11px', color: '#2B2B29', opacity: '0.8', marginTop: '4px', lineHeight: '1.4' }}>
                Paystack webhook integration, HMAC-SHA256 stateless token delivery, and gated download route.
              </div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '10px', border: '1px solid rgba(0,77,64,0.1)' }}>
              <div style={{ display: 'inline-block', backgroundColor: '#D4E157', color: '#004D40', fontSize: '10px', fontWeight: '800', padding: '2px 8px', borderRadius: '4px', marginBottom: '6px' }}>H 36 – 48</div>
              <div style={{ fontWeight: '800', color: '#004D40', fontSize: '13px' }}>Traffic Activation</div>
              <div style={{ fontSize: '11px', color: '#2B2B29', opacity: '0.8', marginTop: '4px', lineHeight: '1.4' }}>
                Distribution threads on X, LinkedIn operator breakdown, and VIP WhatsApp broadcasts.
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Matrix */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '16px', fontWeight: '800', color: '#004D40', borderBottom: '1px solid rgba(0,77,64,0.15)', paddingBottom: '8px', marginBottom: '12px' }}>
            02 / High-Converting Offer Ladder
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '14px 18px', borderRadius: '8px', borderLeft: '5px solid #004D40', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#004D40', fontWeight: '800' }}>Tier 01 &bull; Impulse Validation</div>
                <div style={{ fontWeight: '800', fontSize: '14px', color: '#004D40' }}>Action Kit &amp; Launch Scripts</div>
              </div>
              <div style={{ fontWeight: '800', fontSize: '15px', color: '#004D40', backgroundColor: '#E9E2D1', padding: '4px 12px', borderRadius: '6px' }}>
                ₦10,000
              </div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '14px 18px', borderRadius: '8px', borderLeft: '5px solid #D4E157', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#004D40', fontWeight: '800' }}>Tier 02 &bull; Core Engine Asset</div>
                <div style={{ fontWeight: '800', fontSize: '14px', color: '#004D40' }}>Next.js Codebase + Paystack Webhook</div>
              </div>
              <div style={{ fontWeight: '800', fontSize: '15px', color: '#F5F1E8', backgroundColor: '#004D40', padding: '4px 12px', borderRadius: '6px' }}>
                ₦45,000
              </div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '14px 18px', borderRadius: '8px', borderLeft: '5px solid #2B2B29', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#004D40', fontWeight: '800' }}>Tier 03 &bull; Enterprise Implementation</div>
                <div style={{ fontWeight: '800', fontSize: '14px', color: '#004D40' }}>48-Hour Sprint Implementation Advisory</div>
              </div>
              <div style={{ fontWeight: '800', fontSize: '15px', color: '#004D40', backgroundColor: '#D4E157', padding: '4px 12px', borderRadius: '6px' }}>
                ₦250,000
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ borderTop: '2px solid #004D40', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#004D40', fontWeight: '700' }}>
          <div>RENOVATE AFRICA &bull; STRUCTURAL EXCELLENCE</div>
          <div>WE DON'T FOLLOW. WE RENOVATE.</div>
        </div>
      </div>
    </div>
  );
}
