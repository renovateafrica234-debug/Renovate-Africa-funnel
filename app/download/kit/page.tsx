'use client';

export default function EnhancedKitPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;0,900;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        @page {
          size: A4 portrait;
          margin: 0;
        }

        @media print {
          html, body {
            background-color: #004D40 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .page-break {
            page-break-before: always;
            break-before: page;
          }
          .no-print {
            display: none !important;
          }
        }

        .font-serif-brand {
          font-family: 'Playfair Display', serif;
        }
        .font-sans-brand {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .font-mono-brand {
          font-family: 'Space Mono', monospace;
        }
      `}</style>

      <div className="min-h-screen bg-[#00382E] p-4 md:p-10 font-sans-brand antialiased text-[#2B2B29]">
        
        {/* Screen Action Bar */}
        <div className="no-print max-w-[820px] mx-auto mb-6 flex justify-between items-center bg-[#004D40] border border-[#D4E157]/20 px-6 py-4 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#D4E157] animate-ping" />
            <span className="text-white font-mono-brand text-xs uppercase tracking-widest">
              Brand Dossier / Production Asset
            </span>
          </div>
          <button
            onClick={() => window.print()}
            className="bg-[#D4E157] hover:bg-[#c2cf46] text-[#004D40] font-mono-brand font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg transition duration-200 cursor-pointer flex items-center gap-2"
          >
            Export Dossier PDF
          </button>
        </div>

        {/* ========================================================
            PAGE 1: COVER & THE 48-HOUR SPRINT ARCHITECTURE
           ======================================================== */}
        <div className="w-[820px] min-h-[1160px] mx-auto bg-[#F5F1E8] shadow-2xl p-14 flex flex-col justify-between mb-10 print:mb-0 print:shadow-none print:w-full print:min-h-screen">
          
          {/* Top Brand Bar */}
          <div>
            <div className="flex justify-between items-start border-b border-[#004D40]/20 pb-6 mb-10">
              <div className="flex items-center gap-3">
                {/* Brand Logo Geometry */}
                <div className="w-10 h-10 bg-[#004D40] rounded-xl flex items-center justify-center text-[#D4E157] font-serif-brand font-black text-xl shadow-md">
                  R
                </div>
                <div>
                  <div className="font-serif-brand font-black text-2xl tracking-tight text-[#004D40] leading-none">
                    renovate
                  </div>
                  <div className="font-mono-brand text-[9px] tracking-[0.35em] text-[#004D40]/70 uppercase font-bold mt-1">
                    AFRICA
                  </div>
                </div>
              </div>

              <div className="text-right font-mono-brand text-[10px] text-[#004D40]/70 uppercase tracking-wider space-y-0.5">
                <div>Document: RA-EXEC-2026</div>
                <div>Framework: 48-Hour Protocol</div>
                <div className="text-[#004D40] font-bold">DNA: Grounded Luxury &bull; Electric Innovation</div>
              </div>
            </div>

            {/* Document Hero */}
            <div className="mb-10">
              <div className="inline-block bg-[#004D40] text-[#D4E157] font-mono-brand text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1 rounded-full mb-4">
                Confidential Executive Blueprint
              </div>
              <h1 className="font-serif-brand text-[52px] leading-[1.05] font-black text-[#004D40] tracking-tight mb-4">
                48-Hour Digital <br />
                <span className="italic font-normal text-[#004D40]">Business Launch</span> Kit.
              </h1>
              <p className="text-base text-[#2B2B29]/80 max-w-xl leading-relaxed">
                The production playbook for rapid offer validation, zero-dev maintenance, and stateless Paystack fulfillment.
              </p>
            </div>

            {/* Brand Philosophy Box */}
            <div className="bg-[#004D40] rounded-2xl p-8 text-white relative overflow-hidden mb-10 shadow-lg">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#D4E157]/10 rounded-full blur-2xl" />
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#D4E157]" />
                <span className="font-mono-brand text-[10px] uppercase tracking-[0.25em] text-[#D4E157] font-bold">
                  The Core Doctrine
                </span>
              </div>
              <p className="font-serif-brand text-2xl leading-snug text-[#F5F1E8]">
                "Grounded luxury meets electric innovation. We do not spend two months building unvalidated software. We deploy an edge engine in 48 hours, prove customer transactions, and let the market direct capital."
              </p>
            </div>

            {/* Phase Timeline Grid */}
            <div>
              <div className="flex justify-between items-end mb-4 border-b border-[#004D40]/15 pb-2">
                <h2 className="font-serif-brand font-bold text-xl text-[#004D40]">
                  01 / The 48-Hour Sprint Architecture
                </h2>
                <span className="font-mono-brand text-[10px] text-[#004D40]/60 uppercase">Timeline &amp; Metrics</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-[#004D40]/10 rounded-xl p-5 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-[#D4E157] text-[#004D40] font-mono-brand text-[10px] font-bold px-2 py-0.5 rounded">
                      H 00 &ndash; 12
                    </span>
                    <span className="font-mono-brand text-[10px] text-[#004D40]/60">Foundation</span>
                  </div>
                  <h3 className="font-bold text-[#004D40] text-sm mb-1">Infrastructure Setup</h3>
                  <p className="text-xs text-[#2B2B29]/80 leading-relaxed">
                    Next.js App Router bootstrap, Paystack API handshake, and Vercel edge deployment with live SSL.
                  </p>
                </div>

                <div className="bg-white border border-[#004D40]/10 rounded-xl p-5 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-[#D4E157] text-[#004D40] font-mono-brand text-[10px] font-bold px-2 py-0.5 rounded">
                      H 12 &ndash; 24
                    </span>
                    <span className="font-mono-brand text-[10px] text-[#004D40]/60">Assembly</span>
                  </div>
                  <h3 className="font-bold text-[#004D40] text-sm mb-1">Offer Positioning</h3>
                  <p className="text-xs text-[#2B2B29]/80 leading-relaxed">
                    Value proposition hook, 3-tier offer matrix, sticky mobile CTA button, and sub-1.2s mobile optimization.
                  </p>
                </div>

                <div className="bg-white border border-[#004D40]/10 rounded-xl p-5 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-[#D4E157] text-[#004D40] font-mono-brand text-[10px] font-bold px-2 py-0.5 rounded">
                      H 24 &ndash; 36
                    </span>
                    <span className="font-mono-brand text-[10px] text-[#004D40]/60">Fulfillment</span>
                  </div>
                  <h3 className="font-bold text-[#004D40] text-sm mb-1">Payment Engine</h3>
                  <p className="text-xs text-[#2B2B29]/80 leading-relaxed">
                    Paystack webhook integration, HMAC-SHA256 stateless token delivery, and gated download route.
                  </p>
                </div>

                <div className="bg-white border border-[#004D40]/10 rounded-xl p-5 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-[#D4E157] text-[#004D40] font-mono-brand text-[10px] font-bold px-2 py-0.5 rounded">
                      H 36 &ndash; 48
                    </span>
                    <span className="font-mono-brand text-[10px] text-[#004D40]/60">Traction</span>
                  </div>
                  <h3 className="font-bold text-[#004D40] text-sm mb-1">Traffic Activation</h3>
                  <p className="text-xs text-[#2B2B29]/80 leading-relaxed">
                    Distribution threads on X, founder post on LinkedIn, and VIP WhatsApp broadcasts for immediate validation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sheet Footer */}
          <div className="border-t border-[#004D40]/20 pt-4 flex justify-between items-center font-mono-brand text-[10px] text-[#004D40]/70">
            <div>RENOVATE AFRICA &bull; STRUCTURAL EXCELLENCE</div>
            <div>SHEET 01 / 02</div>
          </div>
        </div>

        {/* ========================================================
            PAGE 2: OFFER MATRIX & STATELESS CRYPTOGRAPHY
           ======================================================== */}
        <div className="page-break w-[820px] min-h-[1160px] mx-auto bg-[#F5F1E8] shadow-2xl p-14 flex flex-col justify-between print:shadow-none print:w-full print:min-h-screen">
          
          <div>
            {/* Header Mini Bar */}
            <div className="flex justify-between items-center border-b border-[#004D40]/20 pb-4 mb-8">
              <div className="font-serif-brand font-bold text-xl text-[#004D40]">
                renovate<span className="font-mono-brand font-normal text-xs uppercase tracking-widest text-[#004D40]/70 ml-2">AFRICA</span>
              </div>
              <div className="font-mono-brand text-[10px] text-[#004D40]/60">
                02 / COMMERCIAL PRICING &amp; SYSTEM FLOW
              </div>
            </div>

            {/* Offer Ladder Section */}
            <div className="mb-10">
              <div className="flex justify-between items-end mb-4 border-b border-[#004D40]/15 pb-2">
                <h2 className="font-serif-brand font-bold text-xl text-[#004D40]">
                  High-Converting Offer &amp; Pricing Ladder
                </h2>
                <span className="font-mono-brand text-[10px] text-[#004D40]/60 uppercase">Tier Architecture</span>
              </div>

              <div className="space-y-3">
                <div className="bg-white border-l-4 border-[#004D40] p-4 rounded-r-xl shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono-brand uppercase tracking-wider text-[#004D40] font-bold block">
                      Tier 01 &bull; Impulse Entry
                    </span>
                    <h4 className="font-bold text-[#004D40] text-sm">Action Kit &amp; Launch Scripts</h4>
                    <p className="text-xs text-[#2B2B29]/70">PDF Dossier, Distribution copy templates, and execution checklist.</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono-brand font-bold text-base text-[#004D40] bg-[#E9E2D1] px-3 py-1 rounded-lg">
                      ₦10,000
                    </span>
                    <span className="block text-[10px] font-mono-brand text-[#2B2B29]/60 mt-1">Direct impulse</span>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-[#D4E157] p-4 rounded-r-xl shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono-brand uppercase tracking-wider text-[#004D40] font-bold block">
                      Tier 02 &bull; Core Asset
                    </span>
                    <h4 className="font-bold text-[#004D40] text-sm">Full Next.js Codebase + Paystack Webhook</h4>
                    <p className="text-xs text-[#2B2B29]/70">Production repository, automated token utility, Vercel edge deployment.</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono-brand font-bold text-base text-white bg-[#004D40] px-3 py-1 rounded-lg">
                      ₦45,000
                    </span>
                    <span className="block text-[10px] font-mono-brand text-[#2B2B29]/60 mt-1">Primary revenue</span>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-[#2B2B29] p-4 rounded-r-xl shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono-brand uppercase tracking-wider text-[#004D40] font-bold block">
                      Tier 03 &bull; Enterprise Implementation
                    </span>
                    <h4 className="font-bold text-[#004D40] text-sm">48-Hour Sprint Implementation Advisory</h4>
                    <p className="text-xs text-[#2B2B29]/70">Turnkey custom deployment, DNS routing, and 1-on-1 sprint review.</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono-brand font-bold text-base text-[#004D40] bg-[#D4E157] px-3 py-1 rounded-lg">
                      ₦250,000
                    </span>
                    <span className="block text-[10px] font-mono-brand text-[#2B2B29]/60 mt-1">High-margin sprint</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cryptographic Architecture Schematic */}
            <div className="mb-10">
              <div className="flex justify-between items-end mb-4 border-b border-[#004D40]/15 pb-2">
                <h2 className="font-serif-brand font-bold text-xl text-[#004D40]">
                  03 / Stateless HMAC-SHA256 Delivery Engine
                </h2>
                <span className="font-mono-brand text-[10px] text-[#004D40]/60 uppercase">Zero-Database Auth</span>
              </div>

              <div className="bg-[#004D40] text-white p-6 rounded-2xl shadow-lg">
                <p className="text-xs text-[#F5F1E8]/90 mb-6 leading-relaxed">
                  Eliminate user databases and login credentials. Access is minted directly upon verified Paystack settlement using signed cryptographic payloads.
                </p>

                <div className="grid grid-cols-4 gap-3 text-center">
                  <div className="bg-[#00382E] border border-[#D4E157]/20 p-3 rounded-xl">
                    <span className="font-mono-brand text-[#D4E157] text-[10px] font-bold block mb-1">STEP 01</span>
                    <h5 className="font-bold text-xs text-white">Payment Success</h5>
                    <p className="text-[10px] text-gray-300 mt-1">Paystack charge event</p>
                  </div>
                  <div className="bg-[#00382E] border border-[#D4E157]/20 p-3 rounded-xl">
                    <span className="font-mono-brand text-[#D4E157] text-[10px] font-bold block mb-1">STEP 02</span>
                    <h5 className="font-bold text-xs text-white">HMAC Minting</h5>
                    <p className="text-[10px] text-gray-300 mt-1">Signed via Secret Key</p>
                  </div>
                  <div className="bg-[#00382E] border border-[#D4E157]/20 p-3 rounded-xl">
                    <span className="font-mono-brand text-[#D4E157] text-[10px] font-bold block mb-1">STEP 03</span>
                    <h5 className="font-bold text-xs text-white">Edge Validation</h5>
                    <p className="text-[10px] text-gray-300 mt-1">Constant-time match</p>
                  </div>
                  <div className="bg-[#00382E] border border-[#D4E157]/20 p-3 rounded-xl">
                    <span className="font-mono-brand text-[#D4E157] text-[10px] font-bold block mb-1">STEP 04</span>
                    <h5 className="font-bold text-xs text-white">Instant Unlock</h5>
                    <p className="text-[10px] text-gray-300 mt-1">7-Day Access Granted</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Launch Checklist */}
            <div>
              <div className="flex justify-between items-end mb-4 border-b border-[#004D40]/15 pb-2">
                <h2 className="font-serif-brand font-bold text-xl text-[#004D40]">
                  04 / Go-Live Verification Checklist
                </h2>
                <span className="font-mono-brand text-[10px] text-[#004D40]/60 uppercase">Sanity Tests</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-[#004D40]/10">
                  <span className="w-4 h-4 rounded bg-[#D4E157] text-[#004D40] font-bold flex items-center justify-center text-[10px]">✓</span>
                  <span>Paystack live secret &amp; public keys added</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-[#004D40]/10">
                  <span className="w-4 h-4 rounded bg-[#D4E157] text-[#004D40] font-bold flex items-center justify-center text-[10px]">✓</span>
                  <span>Vercel production domain connected to DNS</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-[#004D40]/10">
                  <span className="w-4 h-4 rounded bg-[#D4E157] text-[#004D40] font-bold flex items-center justify-center text-[10px]">✓</span>
                  <span>Webhook endpoint tested with Paystack test charge</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-[#004D40]/10">
                  <span className="w-4 h-4 rounded bg-[#D4E157] text-[#004D40] font-bold flex items-center justify-center text-[10px]">✓</span>
                  <span>All 3 launch copy assets posted to channels</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sheet Footer */}
          <div className="border-t border-[#004D40]/20 pt-4 flex justify-between items-center font-mono-brand text-[10px] text-[#004D40]/70">
            <div>WE DON'T FOLLOW. WE RENOVATE.</div>
            <div>SHEET 02 / 02</div>
          </div>
        </div>

      </div>
    </>
  );
}
