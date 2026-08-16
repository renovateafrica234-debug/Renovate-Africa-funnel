"use client";

import { useState, useEffect } from "react";
import Head from "next/head";

export default function AIBusinessLaunchPage() {
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 59, s: 59 });
  const [email, setEmail] = useState("");
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);

  useEffect(() => {
    const detect = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data.country !== "NG") setCurrency("USD");
      } catch {}
    };
    detect();
  }, []);

  useEffect(() => {
    let total = 24 * 60 * 60 - 1;
    const interval = setInterval(() => {
      const h = Math.floor(total / 3600);
      const m = Math.floor((total % 3600) / 60);
      const s = total % 60;
      setTimeLeft({ h, m, s });
      total = total > 0 ? total - 1 : 24 * 60 * 60 - 1;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const prices = {
    NGN: { old: "₦85,000", new: "₦35,000", tag: "Save 59%", btn: "Get Instant Access", plan: "₦12,000 × 3 months", next: "₦50,000" },
    USD: { old: "$249.99", new: "$99.99", tag: "Save 60%", btn: "Get Instant Access", plan: "$35 × 3 months", next: "$149.99" },
  };

  const p = prices[currency];

  const features = [
    { num: "01", title: "5 Premium Next.js Templates", desc: "Restaurant, Real Estate, Salon, Clinic, Logistics. Mobile-first, Abuja-tested." },
    { num: "02", title: "AI Chatbot Integration Kit", desc: "Google Gemini 2.0-powered widget. Answers FAQs, books appointments 24/7." },
    { num: "03", title: "WhatsApp Business Automation", desc: "Click-to-WhatsApp flows, auto-replies, broadcast templates." },
    { num: "04", title: "Paystack + Stripe Setup", desc: "Step-by-step payment integration. Naira and USD ready." },
    { num: "05", title: "30-Day Social Media Pack", desc: "Canva templates + caption swipe files for Nigerian audiences." },
    { num: "06", title: "Local SEO Domination Guide", desc: "Rank on Google Maps in Abuja, Wuse, Garki, Kubwa, Gwarinpa." },
    { num: "07", title: "Admin Dashboard Template", desc: "Manage bookings, leads, content. Next.js + Supabase + Prisma." },
    { num: "08", title: "6+ Hours Video Training", desc: "Screen recordings of customization, deployment, domain connection." },
  ];

  const faqs = [
    { q: "Do I need coding experience?", a: "Basic copy-paste familiarity helps, but 6+ hours of video walkthroughs cover every step. Includes a zero-code Vercel deploy path." },
    { q: "Can I use this for multiple businesses?", a: "Yes — commercial license included. Use for unlimited client projects or your own businesses." },
    { q: "What are the hosting costs?", a: "Vercel free tier + Supabase free tier = ₦0 to start. Scale only when you grow." },
    { q: "How do I get support?", a: "30 days Telegram support + private community of 200+ Nigerian builders. Response within 4 hours." },
    { q: "Is there a refund policy?", a: "7-day money-back guarantee. Go through the training, try to deploy — if it wasn't worth 10x, full refund." },
  ];

  return (
    <>
      <Head>
        <title>AI Business Launch System — Renovate Africa</title>
        <meta name="description" content="The exact AI-powered website system used to build 30+ Abuja business sites. Built by Renovate Africa." />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        :root {
          --ra-teal: #004D40;
          --ra-teal-light: #00695C;
          --ra-cream: #F5F1E8;
          --ra-beige: #E9E2D1;
          --ra-lemon: #D4E157;
          --ra-grey: #A6A6A0;
          --ra-charcoal: #2B2B29;
          --ra-gold: #C9A227;
        }

        .ra-page {
          font-family: 'Inter', sans-serif;
          background: var(--ra-cream);
          color: var(--ra-charcoal);
          min-height: 100vh;
          overflow-x: hidden;
        }

        .ra-serif {
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .ra-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--ra-lemon);
        }

        .ra-label-dark {
          color: var(--ra-teal);
        }

        /* === HERO — DARK TEAL === */
        .ra-hero {
          position: relative;
          background: var(--ra-teal);
          color: var(--ra-cream);
          padding: 40px 0 0;
          overflow: hidden;
        }

        .ra-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px 60px;
        }

        .ra-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--ra-cream);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ra-logo-mark {
          width: 32px; height: 32px;
          background: var(--ra-lemon);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: var(--ra-charcoal);
        }

        .ra-nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .ra-nav-links a {
          color: var(--ra-cream);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .ra-nav-links a:hover { opacity: 1; }

        .ra-nav-cta {
          opacity: 1 !important;
          background: var(--ra-lemon);
          color: var(--ra-charcoal) !important;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 700 !important;
        }

        .ra-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px 80px;
          gap: 60px;
          align-items: center;
        }

        .ra-hero-left {
          position: relative;
          z-index: 2;
        }

        .ra-hero-left .ra-label {
          margin-bottom: 24px;
          display: block;
        }

        .ra-hero-left h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 4vw, 3.8rem);
          font-weight: 600;
          line-height: 1.1;
          margin-bottom: 24px;
          color: var(--ra-cream);
        }

        .ra-hero-left h1 .accent {
          color: var(--ra-lemon);
          font-style: italic;
        }

        .ra-hero-left .sub {
          font-size: 1.05rem;
          line-height: 1.7;
          opacity: 0.75;
          max-width: 480px;
          margin-bottom: 32px;
          font-weight: 300;
        }

        .ra-currency-toggle {
          display: inline-flex;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 4px;
          margin-bottom: 20px;
        }

        .ra-currency-toggle button {
          background: transparent;
          border: none;
          color: rgba(245,241,232,0.5);
          padding: 8px 20px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
        }

        .ra-currency-toggle button.active {
          background: var(--ra-lemon);
          color: var(--ra-charcoal);
        }

        .ra-price-row {
          display: flex;
          align-items: baseline;
          gap: 16px;
          margin-bottom: 8px;
        }

        .ra-price-row .old {
          font-size: 1.1rem;
          text-decoration: line-through;
          opacity: 0.4;
        }

        .ra-price-row .new {
          font-family: 'Playfair Display', serif;
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--ra-lemon);
        }

        .ra-price-row .tag {
          background: var(--ra-lemon);
          color: var(--ra-charcoal);
          font-size: 10px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .ra-plan-note {
          font-size: 0.8rem;
          opacity: 0.5;
          margin-bottom: 28px;
        }

        .ra-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--ra-lemon);
          color: var(--ra-charcoal);
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          padding: 16px 36px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          letter-spacing: 0.3px;
        }

        .ra-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(212,225,87,0.3);
        }

        .ra-hero-right {
          position: relative;
        }

        .ra-hero-img {
          width: 100%;
          border-radius: 4px;
          position: relative;
          z-index: 2;
          box-shadow: 0 40px 80px rgba(0,0,0,0.4);
          overflow: hidden;
        }

        .ra-hero-img img {
          width: 100%;
          height: auto;
          border-radius: 4px;
          display: block;
          object-fit: cover;
        }

        .ra-hero-deco {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 100%;
          height: 100%;
          border: 1px solid var(--ra-lemon);
          border-radius: 4px;
          z-index: 1;
          opacity: 0.4;
        }

        .ra-hero-bottom-bar {
          background: rgba(0,0,0,0.15);
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 20px 24px;
          text-align: center;
          font-size: 0.8rem;
          opacity: 0.5;
          letter-spacing: 0.5px;
        }

        /* === CREAM SECTIONS === */
        .ra-section-cream {
          background: var(--ra-cream);
          color: var(--ra-charcoal);
          padding: 100px 24px;
        }

        .ra-section-cream .ra-label {
          color: var(--ra-teal);
        }

        .ra-section-cream h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 600;
          line-height: 1.15;
          margin-bottom: 16px;
          color: var(--ra-charcoal);
        }

        .ra-section-cream h2 .accent {
          color: var(--ra-teal);
          font-style: italic;
        }

        .ra-section-cream .sec-sub {
          color: var(--ra-grey);
          max-width: 560px;
          line-height: 1.7;
          font-size: 1.05rem;
        }

        /* === TEAL SECTIONS === */
        .ra-section-teal {
          background: var(--ra-teal);
          color: var(--ra-cream);
          padding: 100px 24px;
        }

        .ra-section-teal h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 600;
          line-height: 1.15;
          margin-bottom: 16px;
          color: var(--ra-cream);
        }

        .ra-section-teal h2 .accent {
          color: var(--ra-lemon);
          font-style: italic;
        }

        .ra-section-teal .sec-sub {
          color: rgba(245,241,232,0.6);
          max-width: 560px;
          line-height: 1.7;
          font-size: 1.05rem;
        }

        .ra-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .ra-sec-header {
          margin-bottom: 60px;
        }

        .ra-sec-header .ra-label {
          margin-bottom: 16px;
          display: block;
        }

        /* === TRUST BAR === */
        .ra-trust {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          max-width: 900px;
          margin: 0 auto;
        }

        .ra-trust-item {
          text-align: center;
          padding: 24px;
          border-right: 1px solid var(--ra-beige);
        }

        .ra-trust-item:last-child { border-right: none; }

        .ra-trust-item .num {
          font-family: 'Playfair Display', serif;
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--ra-teal);
          line-height: 1;
          margin-bottom: 8px;
        }

        .ra-trust-item .label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--ra-grey);
        }

        /* === PROBLEMS === */
        .ra-problems {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .ra-prob-card {
          background: var(--ra-beige);
          border: 1px solid rgba(0,77,64,0.08);
          border-radius: 2px;
          padding: 36px;
          transition: all 0.3s ease;
        }

        .ra-prob-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,77,64,0.08);
          border-color: rgba(0,77,64,0.15);
        }

        .ra-prob-card .num {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--ra-teal);
          opacity: 0.2;
          line-height: 1;
          margin-bottom: 16px;
        }

        .ra-prob-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--ra-charcoal);
        }

        .ra-prob-card p {
          font-size: 0.9rem;
          color: var(--ra-grey);
          line-height: 1.6;
        }

        /* === SOLUTION / FEATURES === */
        .ra-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.08);
          border-radius: 2px;
          overflow: hidden;
        }

        .ra-feat {
          background: rgba(0,77,64,0.6);
          padding: 40px;
          transition: background 0.3s;
        }

        .ra-feat:hover {
          background: rgba(0,77,64,0.8);
        }

        .ra-feat .num {
          font-family: 'Playfair Display', serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 2px;
          color: var(--ra-lemon);
          margin-bottom: 16px;
          display: block;
        }

        .ra-feat h4 {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: var(--ra-cream);
        }

        .ra-feat p {
          font-size: 0.85rem;
          color: rgba(245,241,232,0.55);
          line-height: 1.6;
        }

        .ra-stack-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 48px;
          justify-content: center;
        }

        .ra-stack-tag {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 8px 18px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(245,241,232,0.6);
        }

        /* === TEAM SECTION === */
        .ra-team-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }

        .ra-team-img {
          position: relative;
        }

        .ra-team-img img {
          width: 100%;
          height: auto;
          border-radius: 2px;
          display: block;
          object-fit: cover;
        }

        .ra-team-img::before {
          content: '';
          position: absolute;
          top: 20px;
          left: -20px;
          width: 100%;
          height: 100%;
          border: 1px solid var(--ra-teal);
          border-radius: 2px;
          z-index: -1;
          opacity: 0.3;
        }

        .ra-team-text h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 20px;
          color: var(--ra-charcoal);
        }

        .ra-team-text h2 .accent {
          color: var(--ra-teal);
          font-style: italic;
        }

        .ra-team-text p {
          color: var(--ra-grey);
          line-height: 1.8;
          margin-bottom: 20px;
          font-size: 1rem;
        }

        .ra-quote {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-style: italic;
          color: var(--ra-teal);
          line-height: 1.5;
          padding-left: 20px;
          border-left: 2px solid var(--ra-lemon);
        }

        /* === TESTIMONIAL === */
        .ra-testi {
          background: var(--ra-beige);
          border-radius: 2px;
          padding: 60px;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }

        .ra-testi::before {
          content: '"';
          font-family: 'Playfair Display', serif;
          font-size: 8rem;
          color: var(--ra-teal);
          opacity: 0.08;
          position: absolute;
          top: -10px;
          left: 30px;
          line-height: 1;
        }

        .ra-testi .quote {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-style: italic;
          line-height: 1.7;
          color: var(--ra-charcoal);
          margin-bottom: 28px;
          position: relative;
          z-index: 1;
        }

        .ra-testi .author {
          font-weight: 700;
          color: var(--ra-teal);
          font-size: 0.95rem;
          letter-spacing: 0.5px;
        }

        .ra-testi .role {
          font-size: 0.8rem;
          color: var(--ra-grey);
          margin-top: 4px;
        }

        /* === FAQ === */
        .ra-faq-item {
          background: var(--ra-beige);
          border: 1px solid rgba(0,77,64,0.06);
          border-radius: 2px;
          margin-bottom: 12px;
          overflow: hidden;
        }

        .ra-faq-q {
          padding: 24px 28px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          font-size: 0.95rem;
          transition: background 0.2s;
          color: var(--ra-charcoal);
          font-family: 'Inter', sans-serif;
        }

        .ra-faq-q:hover { background: rgba(0,77,64,0.03); }

        .ra-faq-a {
          padding: 0 28px;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          color: var(--ra-grey);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .ra-faq-item.open .ra-faq-a {
          padding: 0 28px 24px;
          max-height: 300px;
        }

        .ra-faq-item.open .ra-faq-q .chevron {
          transform: rotate(180deg);
        }

        .chevron {
          transition: transform 0.3s;
          font-size: 0.7rem;
          color: var(--ra-teal);
        }

        /* === LEAD MAGNET === */
        .ra-lead {
          background: linear-gradient(135deg, rgba(0,77,64,0.95), rgba(0,105,92,0.95));
          border: 1px solid rgba(212,225,87,0.15);
          border-radius: 2px;
          padding: 48px;
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
        }

        .ra-lead h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          margin-bottom: 12px;
          color: var(--ra-cream);
        }

        .ra-lead p {
          color: rgba(245,241,232,0.6);
          font-size: 0.9rem;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .ra-email-form {
          display: flex;
          gap: 8px;
          max-width: 420px;
          margin: 0 auto;
        }

        .ra-email-form input {
          flex: 1;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 6px;
          padding: 14px 18px;
          color: var(--ra-cream);
          font-size: 0.9rem;
          outline: none;
          font-family: 'Inter', sans-serif;
        }

        .ra-email-form input::placeholder { color: rgba(245,241,232,0.3); }

        .ra-email-form button {
          background: var(--ra-lemon);
          color: var(--ra-charcoal);
          border: none;
          border-radius: 6px;
          padding: 14px 24px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          white-space: nowrap;
        }

        .ra-email-form button:hover {
          background: #c5d24a;
          transform: translateY(-1px);
        }

        /* === FINAL CTA === */
        .ra-final {
          background: var(--ra-teal);
          color: var(--ra-cream);
          padding: 100px 24px;
          text-align: center;
        }

        .ra-final h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 600;
          margin-bottom: 16px;
        }

        .ra-final h2 .accent {
          color: var(--ra-lemon);
          font-style: italic;
        }

        .ra-final > p {
          color: rgba(245,241,232,0.55);
          margin-bottom: 40px;
          font-size: 1.05rem;
        }

        .ra-timer {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin: 32px 0;
        }

        .ra-timer-box {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(212,225,87,0.2);
          border-radius: 4px;
          padding: 16px 20px;
          text-align: center;
          min-width: 72px;
        }

        .ra-timer-box .val {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--ra-lemon);
          line-height: 1;
        }

        .ra-timer-box .unit {
          font-size: 0.65rem;
          color: rgba(245,241,232,0.4);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 6px;
        }

        .ra-guarantee {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 28px;
          font-size: 0.8rem;
          color: rgba(245,241,232,0.4);
          letter-spacing: 0.5px;
        }

        .ra-footer-bar {
          background: var(--ra-charcoal);
          color: var(--ra-grey);
          text-align: center;
          padding: 24px;
          font-size: 0.75rem;
          letter-spacing: 0.5px;
        }

        .ra-footer-bar a {
          color: var(--ra-cream);
          text-decoration: none;
        }

        /* === MOBILE === */
        @media (max-width: 768px) {
          .ra-hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .ra-hero-right { order: -1; }
          .ra-problems { grid-template-columns: 1fr; }
          .ra-features { grid-template-columns: 1fr; }
          .ra-team-grid { grid-template-columns: 1fr; gap: 40px; }
          .ra-trust { grid-template-columns: repeat(2, 1fr); }
          .ra-trust-item { border-right: none; border-bottom: 1px solid var(--ra-beige); padding: 16px; }
          .ra-trust-item:nth-child(3), .ra-trust-item:nth-child(4) { border-bottom: none; }
          .ra-testi { padding: 40px 24px; }
          .ra-email-form { flex-direction: column; }
          .ra-nav-links { display: none; }
        }
      `}</style>

      <div className="ra-page">
        {/* ===== HERO — DARK TEAL ===== */}
        <section className="ra-hero">
          <nav className="ra-nav">
            <a href="#" className="ra-logo">
              <span className="ra-logo-mark">R</span>
              Renovate Africa
            </a>
            <div className="ra-nav-links">
              <a href="#solution">The System</a>
              <a href="#team">Our Story</a>
              <a href="#faq">FAQ</a>
              <a href="#checkout" className="ra-nav-cta">Get Access</a>
            </div>
          </nav>

          <div className="ra-hero-grid">
            <div className="ra-hero-left">
              <span className="ra-label">01 — The Product</span>
              <h1>
                Launch Your Business Online in <span className="accent">48 Hours</span> — Without Hiring a Developer
              </h1>
              <p className="sub">
                The exact AI-powered website system, templates, and automation scripts we used to build 30+ business sites across Abuja — now packaged for you to customize and deploy in one weekend.
              </p>

              <div className="ra-currency-toggle">
                <button className={currency === "NGN" ? "active" : ""} onClick={() => setCurrency("NGN")}>🇳🇬 NGN</button>
                <button className={currency === "USD" ? "active" : ""} onClick={() => setCurrency("USD")}>🌍 USD</button>
              </div>

              <div className="ra-price-row">
                <span className="old">{p.old}</span>
                <span className="new">{p.new}</span>
                <span className="tag">{p.tag}</span>
              </div>
              <p className="ra-plan-note">Or {p.plan} — no credit check required</p>

              <a href="#checkout" className="ra-cta-btn">
                {p.btn} →
              </a>
            </div>

            <div className="ra-hero-right">
              <div className="ra-hero-deco" />
              <div className="ra-hero-img">
                <img src="/team-photo.jpg" alt="Renovate Africa team" />
              </div>
            </div>
          </div>

          <div className="ra-hero-bottom-bar">
            One-time payment • Lifetime updates • Instant download • Built in Abuja, for the world
          </div>
        </section>

        {/* ===== TRUST — CREAM ===== */}
        <section className="ra-section-cream" style={{ padding: '60px 24px' }}>
          <div className="ra-trust">
            <div className="ra-trust-item">
              <div className="num">30+</div>
              <div className="label">Sites Deployed</div>
            </div>
            <div className="ra-trust-item">
              <div className="num">5</div>
              <div className="label">Premium Templates</div>
            </div>
            <div className="ra-trust-item">
              <div className="num">AI</div>
              <div className="label">Gemini Chatbot</div>
            </div>
            <div className="ra-trust-item">
              <div className="num">48h</div>
              <div className="label">Launch Time</div>
            </div>
          </div>
        </section>

        {/* ===== LEAD MAGNET — DARK TEAL ===== */}
        <section className="ra-section-teal" style={{ padding: '80px 24px' }}>
          <div className="ra-inner">
            <div className="ra-lead">
              <span className="ra-label" style={{ marginBottom: 16, display: 'block' }}>Not Ready Yet?</span>
              <h3>Start With the Free Checklist</h3>
              <p>Get the "Abuja Business Website Checklist" — 27 things your site needs before you spend ₦1 on ads. Plus a preview of Template #1.</p>
              <div className="ra-email-form">
                <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={() => setShowLeadMagnet(true)}>Send My Checklist</button>
              </div>
              {showLeadMagnet && (
                <p style={{ color: 'var(--ra-lemon)', marginTop: 16, fontSize: '0.9rem', fontWeight: 600 }}>
                  ✅ Checklist sent! Check your inbox.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* ===== PROBLEMS — CREAM ===== */}
        <section className="ra-section-cream" id="problems">
          <div className="ra-inner">
            <div className="ra-sec-header">
              <span className="ra-label ra-label-dark">02 — The Problem</span>
              <h2>Most Nigerian Businesses <span className="accent">Fail Online</span> Because...</h2>
              <p className="sec-sub">You don't need another "website builder." You need a battle-tested system built for how Nigerian customers actually buy.</p>
            </div>
            <div className="ra-problems">
              <div className="ra-prob-card">
                <div className="num">01</div>
                <h3>Developers Charge ₦200k–₦500k</h3>
                <p>And still deliver slow, generic sites that don't convert. Then charge extra for every tiny change.</p>
              </div>
              <div className="ra-prob-card">
                <div className="num">02</div>
                <h3>DIY Builders Are Confusing</h3>
                <p>Wix and WordPress look easy until you try to add Paystack, WhatsApp booking, or mobile optimization.</p>
              </div>
              <div className="ra-prob-card">
                <div className="num">03</div>
                <h3>No One Finds Your Site</h3>
                <p>Without local SEO, Google Business setup, and mobile speed, your site is invisible to Abuja customers.</p>
              </div>
              <div className="ra-prob-card">
                <div className="num">04</div>
                <h3>Missing AI & Automation</h3>
                <p>Your competitors are sleeping. An AI chatbot that answers questions 24/7 and books appointments while you sleep is the new standard.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SOLUTION — DARK TEAL ===== */}
        <section className="ra-section-teal" id="solution">
          <div className="ra-inner">
            <div className="ra-sec-header">
              <span className="ra-label">03 — The Solution</span>
              <h2>Everything to <span className="accent">Go Live</span> This Weekend</h2>
              <p className="sec-sub">Not templates. A complete launch system — code, content, automations, and training.</p>
            </div>
            <div className="ra-features">
              {features.map((f, i) => (
                <div className="ra-feat" key={i}>
                  <span className="num">{f.num}</span>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="ra-stack-bar">
              {["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "Prisma", "Google Gemini", "Paystack", "Stripe", "Vercel", "BullMQ", "Redis"].map((t) => (
                <span className="ra-stack-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TEAM — CREAM ===== */}
        <section className="ra-section-cream" id="team" style={{ padding: '100px 24px' }}>
          <div className="ra-team-grid">
            <div className="ra-team-img">
              <img src="/team-photo.jpg" alt="Renovate Africa founders" />
            </div>
            <div className="ra-team-text">
              <span className="ra-label ra-label-dark" style={{ marginBottom: 16, display: 'block' }}>04 — Our Story</span>
              <h2>
                Built by the Team Behind <span className="accent">30+ Abuja Sites</span>
              </h2>
              <p>
                We didn't set out to sell templates. We were building business websites for salons in Wuse, real estate agents in Maitama, and clinics in Garki. After the 30th deployment, we realized: every business needs the same core pieces. So we packaged them.
              </p>
              <p>
                This isn't theory. It's the exact code, automations, and workflows we use at Renovate Africa — refined across 30+ live projects in the Abuja FCT.
              </p>
              <p className="ra-quote">
                "We don't follow. We renovate."
              </p>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIAL — DARK TEAL ===== */}
        <section className="ra-section-teal" style={{ padding: '100px 24px' }}>
          <div className="ra-inner">
            <div className="ra-sec-header" style={{ textAlign: 'center' }}>
              <span className="ra-label">05 — Proof</span>
              <h2 style={{ textAlign: 'center' }}>What Early Users <span className="accent">Say</span></h2>
            </div>
            <div className="ra-testi">
              <p className="quote">
                I was quoted ₦350,000 to build a site for my salon in Wuse. Bought this kit for ₦35,000, followed the videos, and had my booking site live with WhatsApp integration by Sunday night. Already got 4 appointments from Instagram.
              </p>
              <div className="author">Amara Okafor</div>
              <div className="role">Owner, Glow Salon — Wuse 2, Abuja</div>
            </div>
          </div>
        </section>

        {/* ===== FAQ — CREAM ===== */}
        <section className="ra-section-cream" id="faq">
          <div className="ra-inner">
            <div className="ra-sec-header">
              <span className="ra-label ra-label-dark">06 — Questions</span>
              <h2>Frequently Asked <span className="accent">Questions</span></h2>
              <p className="sec-sub">Everything you need to know before buying.</p>
            </div>
            {faqs.map((faq, i) => (
              <div className={`ra-faq-item ${openFaq === i ? "open" : ""}`} key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="ra-faq-q">
                  {faq.q}
                  <span className="chevron">▼</span>
                </div>
                <div className="ra-faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FINAL CTA — DARK TEAL ===== */}
        <section className="ra-final" id="checkout">
          <div className="ra-inner">
            <span className="ra-label" style={{ marginBottom: 20, display: 'block' }}>07 — Decision</span>
            <h2>
              Stop Waiting. <span className="accent">Start Earning.</span>
            </h2>
            <p>Your competitors are building their online presence today. Will they be the ones customers find first?</p>

            <div className="ra-timer">
              <div className="ra-timer-box">
                <div className="val">{String(timeLeft.h).padStart(2, "0")}</div>
                <div className="unit">Hours</div>
              </div>
              <div className="ra-timer-box">
                <div className="val">{String(timeLeft.m).padStart(2, "0")}</div>
                <div className="unit">Minutes</div>
              </div>
              <div className="ra-timer-box">
                <div className="val">{String(timeLeft.s).padStart(2, "0")}</div>
                <div className="unit">Seconds</div>
              </div>
            </div>

            <p style={{ color: 'rgba(245,241,232,0.5)', fontSize: '0.9rem', marginBottom: 32 }}>
              ⏰ Launch price expires when timer hits zero. Next intake: {p.next}.
            </p>

            <div className="ra-currency-toggle" style={{ marginBottom: 28 }}>
              <button className={currency === "NGN" ? "active" : ""} onClick={() => setCurrency("NGN")}>🇳🇬 Nigeria — ₦35,000</button>
              <button className={currency === "USD" ? "active" : ""} onClick={() => setCurrency("USD")}>🌍 International — $99.99</button>
            </div>

            <a href="#" className="ra-cta-btn" style={{ fontSize: '1.1rem', padding: '20px 48px' }}>
              {p.btn} — {p.new} →
            </a>

            <div className="ra-guarantee">
              <span>🛡️</span>
              <span>7-Day Money-Back Guarantee • Instant Download • Lifetime Updates</span>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <div className="ra-footer-bar">
          © 2026 Renovate Africa. Built with intention in Abuja FCT. <a href="#">Privacy</a> • <a href="#">Terms</a>
        </div>
      </div>
    </>
  );
}
