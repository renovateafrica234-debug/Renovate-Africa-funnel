export const KIT_DATA = {
  docRef: "RA-48HR-EXEC-2026",
  title: "48-Hour Digital Business Launch Kit",
  subtitle: "The operational blueprint for rapid offer validation, zero dev retainers, and automated Paystack token delivery.",
  doctrine: "Most African digital ventures fail due to developer overhead and 8-week delays. Build an edge architecture in 48 hours, validate willingness to pay immediately, and let real transactions fund further code.",
  
  phases: [
    {
      window: "H 00 – 12",
      title: "Foundation Setup",
      desc: "Initialize Next.js App Router repo, map domain on Vercel Edge, configure SSL, and integrate Paystack API keys.",
      metric: "HTTP 200 live < 150ms TTFB"
    },
    {
      window: "H 12 – 24",
      title: "Offer Positioning",
      desc: "Implement high-converting headline formula, 3-tier offer matrix, sticky mobile CTA button, and mobile speed tuning.",
      metric: "< 1.2s load on 4G networks"
    },
    {
      window: "H 24 – 36",
      title: "Payment Engine",
      desc: "Connect Paystack payment redirects, configure /api/webhook edge route, and mint HMAC-SHA256 signed access tokens.",
      metric: "100% automated delivery"
    },
    {
      window: "H 36 – 48",
      title: "Traffic Activation",
      desc: "Execute the authority thread on X, LinkedIn operator post, and VIP WhatsApp broadcasts for immediate validation.",
      metric: "First 3 validated orders"
    }
  ],

  tiers: [
    {
      level: "Tier 01 • Impulse Validation",
      price: "₦10,000",
      title: "Action Kit & Launch Scripts",
      desc: "Print-ready PDF dossier, multi-channel copy scripts, timeline, and sanity checklist.",
      color: "#004D40",
      badgeBg: "#E9E2D1",
      badgeText: "#004D40"
    },
    {
      level: "Tier 02 • Core Engine Asset",
      price: "₦45,000",
      title: "Next.js Codebase + Paystack Webhook",
      desc: "Full production repo, automated token generator, gated download route, and Vercel scripts.",
      color: "#D4E157",
      badgeBg: "#004D40",
      badgeText: "#F5F1E8"
    },
    {
      level: "Tier 03 • Enterprise Implementation",
      price: "₦250,000",
      title: "48-Hour Sprint Advisory",
      desc: "Turnkey custom architecture setup, live DNS mapping, Paystack setup, and 1-on-1 sprint review.",
      color: "#2B2B29",
      badgeBg: "#D4E157",
      badgeText: "#004D40"
    }
  ],

  scripts: [
    {
      channel: "CHANNEL 01: X (TWITTER)",
      title: "Authority Launch Thread",
      body: "Most Nigerian founders spend 6–8 weeks and over ₦500k negotiating with developers just to test a single offer. That speed kills early traction. We built a production-grade framework to go live in 48 hours—complete with Paystack payments and tokenized delivery. Here is how it works: [LINK]"
    },
    {
      channel: "CHANNEL 02: LINKEDIN",
      title: "Operator Positioning Post",
      body: "Speed of execution is the only moat that matters in the first 90 days of an offer. Building a high-converting digital funnel should take hours, not quarters. We have officially launched the Renovate Africa 48-Hour Digital Business Deployment System. Take a look at the live architecture: [LINK]"
    },
    {
      channel: "CHANNEL 03: WHATSAPP VIP",
      title: "Direct VIP Outreach",
      body: "Hey [Name] — we just opened access to our new 48-hour digital launch funnel. If you are looking to validate an offer without hiring developers or fighting buggy plugins, check it out here: [LINK]"
    }
  ]
};
