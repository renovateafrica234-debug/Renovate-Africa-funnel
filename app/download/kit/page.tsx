'use client';

export default function EnhancedKitPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#2B2B29] font-sans p-6 md:p-12 print:p-0 print:bg-white print:text-black">
      
      {/* Top Floating Control Bar - Screen Only */}
      <div className="max-w-5xl mx-auto mb-8 flex justify-between items-center bg-[#004D40] text-white p-5 rounded-2xl shadow-xl border border-[#004D40]/50 print:hidden">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#D4E157] animate-pulse" />
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4E157] font-semibold block">
              Renovate Africa Framework
            </span>
            <h1 className="text-base md:text-lg font-bold tracking-tight text-white">
              48-Hour Digital Business Launch Kit
            </h1>
          </div>
        </div>
        <button
          onClick={() => window.print()}
          className="bg-[#D4E157] hover:bg-[#c2cf46] text-[#004D40] font-bold text-xs md:text-sm px-6 py-2.5 rounded-xl shadow-md transition flex items-center gap-2 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Export as PDF
        </button>
      </div>

      {/* Main Dossier Container */}
      <div className="max-w-5xl mx-auto bg-[#F5F1E8] border border-[#E9E2D1] rounded-3xl p-8 md:p-16 shadow-xl print:shadow-none print:border-none print:p-0 print:bg-white print:text-black">
        
        {/* Header Section */}
        <header className="border-b-2 border-[#004D40]/15 pb-10 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#004D40] text-[#D4E157] text-[11px] uppercase px-3.5 py-1 rounded-full font-mono tracking-wider font-semibold mb-4 print:bg-gray-100 print:text-black">
              Production Architecture
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-[#004D40] print:text-black leading-[1.05]">
              48-HOUR DIGITAL <br />
              <span className="text-[#004D40] underline decoration-[#D4E157] decoration-4">BUSINESS LAUNCH</span> KIT
            </h1>
            <p className="text-[#2B2B29]/80 print:text-gray-700 mt-4 text-base max-w-xl leading-relaxed">
              The blueprint for rapid offer validation, zero-dev maintenance, and automated Paystack fulfillment.
            </p>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-[#2B2B29]/70 print:text-gray-600 space-y-1">
            <div className="font-bold text-[#004D40] print:text-black">Renovate Africa Studio</div>
            <div>Auth Engine: Stateless HMAC-SHA256</div>
            <div>Deployment: Vercel Edge / Next.js</div>
            <div>DNA: Grounded Luxury &bull; Electric Innovation</div>
          </div>
        </header>

        {/* Brand Essence Law Box */}
        <section className="mb-14 bg-[#004D40] text-white p-8 rounded-2xl shadow-lg relative overflow-hidden print:bg-gray-100 print:text-black print:border print:border-gray-300">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#D4E157]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4E157] print:text-black font-mono font-bold block mb-2">
            The 48-Hour Protocol
          </span>
          <p className="text-lg md:text-xl font-serif leading-relaxed text-[#F5F1E8] print:text-black">
            "Validate market willingness to pay before building bespoke infrastructure. Deploy an edge asset in 48 hours, automate tokenized access, and let real transactions dictate software expansion."
          </p>
        </section>

        {/* 48-Hour Execution Matrix */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#004D40]/10">
            <h2 className="text-2xl font-serif font-bold tracking-tight text-[#004D40] print:text-black">
              01 / The 48-Hour Execution Matrix
            </h2>
            <span className="text-xs font-mono text-[#004D40]/60 uppercase tracking-wider">Phase Timeline</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-[#E9E2D1]/60 border border-[#E9E2D1] p-6 rounded-2xl print:bg-white print:border-gray-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#004D40] bg-[#D4E157] px-2.5 py-0.5 rounded">H 00 – 12</span>
                <h3 className="font-bold text-[#004D40] print:text-black mt-3 mb-2 text-base">Foundation</h3>
                <p className="text-xs text-[#2B2B29]/80 print:text-gray-700 leading-relaxed">
                  Next.js App Router initialization, Vercel edge mapping, Paystack merchant keys, and SSL validation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#004D40]/10 text-[11px] font-mono text-[#004D40]">Metric: HTTP 200 Live</div>
            </div>

            <div className="bg-[#E9E2D1]/60 border border-[#E9E2D1] p-6 rounded-2xl print:bg-white print:border-gray-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#004D40] bg-[#D4E157] px-2.5 py-0.5 rounded">H 12 – 24</span>
                <h3 className="font-bold text-[#004D40] print:text-black mt-3 mb-2 text-base">Asset Assembly</h3>
                <p className="text-xs text-[#2B2B29]/80 print:text-gray-700 leading-relaxed">
                  Positioning hook formula, 3-tier offer matrix, sticky mobile CTA anchor, and trust architecture.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#004D40]/10 text-[11px] font-mono text-[#004D40]">Metric: &lt;1.2s Load Speed</div>
            </div>

            <div className="bg-[#E9E2D1]/60 border border-[#E9E2D1] p-6 rounded-2xl print:bg-white print:border-gray-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#004D40] bg-[#D4E157] px-2.5 py-0.5 rounded">H 24 – 36</span>
                <h3 className="font-bold text-[#004D40] print:text-black mt-3 mb-2 text-base">Payment Engine</h3>
                <p className="text-xs text-[#2B2B29]/80 print:text-gray-700 leading-relaxed">
                  Paystack checkout links, edge webhook listener, and HMAC-SHA256 signed stateless token fulfillment.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#004D40]/10 text-[11px] font-mono text-[#004D40]">Metric: 100% Gated Access</div>
            </div>

            <div className="bg-[#E9E2D1]/60 border border-[#E9E2D1] p-6 rounded-2xl print:bg-white print:border-gray-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#004D40] bg-[#D4E157] px-2.5 py-0.5 rounded">H 36 – 48</span>
                <h3 className="font-bold text-[#004D40] print:text-black mt-3 mb-2 text-base">Traffic Blast</h3>
                <p className="text-xs text-[#2B2B29]/80 print:text-gray-700 leading-relaxed">
                  Authority thread on X, LinkedIn operator breakdown, and direct WhatsApp VIP broadcasts.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#004D40]/10 text-[11px] font-mono text-[#004D40]">Metric: First 3 Transactions</div>
            </div>
          </div>
        </section>

        {/* Pricing Matrix Table */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#004D40]/10">
            <h2 className="text-2xl font-serif font-bold tracking-tight text-[#004D40] print:text-black">
              02 / Offer Laddering &amp; Pricing
            </h2>
            <span className="text-xs font-mono text-[#004D40]/60 uppercase tracking-wider">Unit Economics</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border border-[#004D40]/15 rounded-2xl overflow-hidden shadow-sm">
              <thead className="bg-[#004D40] text-white print:bg-gray-200 print:text-black font-mono text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Tier</th>
                  <th className="p-4">Target Price</th>
                  <th className="p-4">Core Deliverable</th>
                  <th className="p-4">Role in Funnel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#004D40]/10 bg-white/50 print:bg-white text-xs">
                <tr>
                  <td className="p-4 font-bold text-[#004D40] print:text-black text-sm">Tier 1: Impulse Validation</td>
                  <td className="p-4 font-mono font-bold text-[#004D40]">₦7,500 – ₦15,000</td>
                  <td className="p-4 text-[#2B2B29]/90">Print-Ready PDF Kit + Social Scripts</td>
                  <td className="p-4 text-[#2B2B29]/70 font-medium">Low-friction buyer acquisition</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#004D40] print:text-black text-sm">Tier 2: Production Engine</td>
                  <td className="p-4 font-mono font-bold text-[#004D40]">₦35,000 – ₦65,000</td>
                  <td className="p-4 text-[#2B2B29]/90">Complete Next.js Codebase + Paystack Webhook Engine</td>
                  <td className="p-4 text-[#2B2B29]/70 font-medium">Core revenue & operator adoption</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#004D40] print:text-black text-sm">Tier 3: 48-Hour Sprint</td>
                  <td className="p-4 font-mono font-bold text-[#004D40]">₦150,000 – ₦350,000</td>
                  <td className="p-4 text-[#2B2B29]/90">Done-With-You Implementation Sprint & Live Launch Advisory</td>
                  <td className="p-4 text-[#2B2B29]/70 font-medium">High-margin custom rollout</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cryptographic Flow Schematic */}
        <section className="mb-14 bg-[#004D40]/5 border border-[#004D40]/15 rounded-2xl p-8 print:bg-gray-50">
          <h2 className="text-xl font-serif font-bold text-[#004D40] print:text-black mb-4">
            03 / Stateless Fulfillment Flow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-center text-xs font-mono">
            <div className="p-4 bg-white print:bg-white border border-[#004D40]/15 rounded-xl shadow-sm">
              <span className="text-[#004D40] bg-[#D4E157] w-5 h-5 rounded-full inline-flex items-center justify-center font-bold mb-2">1</span>
              <div className="font-bold text-[#004D40]">Paystack Pay</div>
              <div className="text-[10px] text-gray-500 mt-1">Cards / USSD / Transfer</div>
            </div>
            <div className="p-4 bg-white print:bg-white border border-[#004D40]/15 rounded-xl shadow-sm">
              <span className="text-[#004D40] bg-[#D4E157] w-5 h-5 rounded-full inline-flex items-center justify-center font-bold mb-2">2</span>
              <div className="font-bold text-[#004D40]">Webhook Event</div>
              <div className="text-[10px] text-gray-500 mt-1">charge.success</div>
            </div>
            <div className="p-4 bg-white print:bg-white border border-[#004D40]/15 rounded-xl shadow-sm">
              <span className="text-[#004D40] bg-[#D4E157] w-5 h-5 rounded-full inline-flex items-center justify-center font-bold mb-2">3</span>
              <div className="font-bold text-[#004D40]">HMAC-SHA256</div>
              <div className="text-[10px] text-gray-500 mt-1">Token Signed at Edge</div>
            </div>
            <div className="p-4 bg-white print:bg-white border border-[#004D40]/15 rounded-xl shadow-sm">
              <span className="text-[#004D40] bg-[#D4E157] w-5 h-5 rounded-full inline-flex items-center justify-center font-bold mb-2">4</span>
              <div className="font-bold text-[#004D40]">Redirect Handoff</div>
              <div className="text-[10px] text-gray-500 mt-1">URL Payload Verify</div>
            </div>
            <div className="p-4 bg-white print:bg-white border border-[#004D40]/15 rounded-xl shadow-sm">
              <span className="text-[#004D40] bg-[#D4E157] w-5 h-5 rounded-full inline-flex items-center justify-center font-bold mb-2">5</span>
              <div className="font-bold text-[#004D40]">Gated Delivery</div>
              <div className="text-[10px] text-gray-500 mt-1">Immediate PDF & Code</div>
            </div>
          </div>
        </section>

        {/* Footer with Brand Tagline */}
        <footer className="pt-8 border-t-2 border-[#004D40]/15 text-xs text-[#2B2B29]/70 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-sm text-[#004D40]">renovate<span className="font-sans font-light tracking-widest text-[9px] uppercase ml-1">AFRICA</span></span>
            <span>&bull; We structurally modernize, elevate, and rewrite African enterprise.</span>
          </div>
          <div className="font-mono text-[#004D40] font-semibold">
            WE DON'T FOLLOW. WE RENOVATE.
          </div>
        </footer>

      </div>
    </div>
  );
}
