import { redirect } from 'next/navigation';
import { verifyToken } from '../api/webhook/route';

// ─── Server-side token check (secret never hits the browser) ──────────

export default function DownloadPage({
  searchParams,
}: {
  searchParams: { token?: string };
}) {
  const token = searchParams.token;
  const data = token ? verifyToken(token) : null;

  // ─── Invalid / Expired Token ──────────────────────────────────────
  if (!data) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-10 text-center">
          <div className="text-5xl mb-4">🔒</div>
          <h1 className="text-2xl font-bold text-white mb-3">Link Invalid or Expired</h1>
          <p className="text-gray-400 mb-8">
            This download link has expired or was tampered with. Links are valid for 7 days after purchase.
          </p>
          <a
            href="/"
            className="inline-block bg-[#c9a96e] text-[#0a0a0a] px-8 py-3 rounded-xl font-bold hover:bg-[#b8985e] transition"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    );
  }

  // ─── Valid Token — Show Downloads ───────────────────────────────────
  const files = [
    {
      name: '5 Premium Next.js Templates',
      desc: 'Restaurant, Real Estate, Salon, Clinic, Logistics',
      size: '45 MB',
      url: '#', // ← REPLACE: Google Drive / Dropbox / CDN link
    },
    {
      name: 'AI Chatbot Integration Kit',
      desc: 'Gemini 2.0 widget, system prompts, deployment guide',
      size: '12 MB',
      url: '#',
    },
    {
      name: 'WhatsApp Business Automation',
      desc: 'Click-to-WhatsApp flows, auto-reply templates',
      size: '3 MB',
      url: '#',
    },
    {
      name: 'Paystack + Stripe Setup Guide',
      desc: 'Step-by-step payment integration for Naira & USD',
      size: '8 MB',
      url: '#',
    },
    {
      name: '30-Day Social Media Canva Pack',
      desc: 'Templates + caption swipe files for Nigerian audiences',
      size: '120 MB',
      url: '#',
    },
    {
      name: 'Local SEO Domination Guide',
      desc: 'Rank on Google Maps in Abuja, Wuse, Garki, Kubwa',
      size: '5 MB',
      url: '#',
    },
    {
      name: 'Admin Dashboard Template',
      desc: 'Next.js 14 + Supabase + Prisma starter',
      size: '28 MB',
      url: '#',
    },
    {
      name: 'Video Training (6+ hours)',
      desc: 'Screen recordings of every customization step',
      size: '1.2 GB',
      url: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#c9a96e]/10 text-[#c9a96e] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
            Purchase Confirmed
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Your Downloads Are Ready
          </h1>
          <p className="text-gray-400">
            Welcome back, <span className="text-white font-medium">{data.email}</span>
          </p>
          <p className="text-[#c9a96e] text-sm mt-2">
            ⏰ Link expires in 7 days • Save everything locally
          </p>
        </div>

        {/* File List */}
        <div className="space-y-4">
          {files.map((file, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 hover:border-[#c9a96e]/30 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#c9a96e]/10 flex items-center justify-center text-xl shrink-0">
                📦
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-base">{file.name}</h3>
                <p className="text-gray-500 text-sm mt-0.5">{file.desc}</p>
                <p className="text-gray-600 text-xs mt-1">{file.size}</p>
              </div>
              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (file.url === '#') {
                    e.preventDefault();
                    alert(
                      'File hosting not configured yet.\n\nUpload your files to Google Drive / Dropbox / Cloudflare R2 and paste the links in app/download/page.tsx'
                    );
                  }
                }}
                className={`shrink-0 px-6 py-2.5 rounded-xl font-bold text-sm transition ${
                  file.url === '#'
                    ? 'bg-[#2a2a2a] text-gray-500 cursor-not-allowed'
                    : 'bg-[#c9a96e] text-[#0a0a0a] hover:bg-[#b8985e]'
                }`}
              >
                {file.url === '#' ? 'Coming Soon' : 'Download'}
              </a>
            </div>
          ))}
        </div>

        {/* Support Box */}
        <div className="mt-10 bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8">
          <h3 className="text-white font-bold text-lg mb-2">Need Help?</h3>
          <p className="text-gray-400 text-sm mb-6">
            Join our Telegram community or WhatsApp us directly. Average response time: under 4 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://t.me/yourgroup" // ← REPLACE with your Telegram
              className="flex-1 bg-[#0088cc] text-white text-center py-3.5 rounded-xl font-bold hover:opacity-90 transition"
            >
              Telegram Support
            </a>
            <a
              href="https://wa.me/234XXXXXXXXXX" // ← REPLACE with your WhatsApp
              className="flex-1 bg-[#25d366] text-white text-center py-3.5 rounded-xl font-bold hover:opacity-90 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-xs mt-10">
          Renovate Africa · Abuja, Nigeria ·{' '}
          <a href="/" className="text-[#c9a96e] hover:underline">
            Back to site
          </a>
        </p>
      </div>
    </div>
  );
}

