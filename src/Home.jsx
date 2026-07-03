import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { seoMeta, breadcrumbSchema } from './utils/seoSchemas.js';
import ContactForm from './components/ContactForm';
import FAQSection from './components/FAQSection';
import lucasPhoto from './assets/lucas.png';
import raffiPhoto from './assets/raffi.png';
import { CloudIcon, ShieldCheckIcon, BoltIcon, UsersIcon, DevicePhoneMobileIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { useI18n } from './i18n.jsx';

// Animated number for hero stats bar
function AnimatedNumber({ value, prefix = '', suffix = '', started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = 2000 / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [started, value]);

  return <>{prefix}{started ? count : 0}{suffix}</>;
}

function LiveClock() {
  const { lang, T } = useI18n();
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const time = now.toLocaleTimeString(lang === 'en' ? 'en-GB' : 'nl-NL', {
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    timeZone: 'Europe/Amsterdam', hour12: false,
  });
  const day = now.getDay();
  const hour = now.getHours();
  const open = day >= 1 && day <= 5 && hour >= 9 && hour < 18;
  return (
    <>
      <div>52.0608° N · 4.4937° E</div>
      <div>{T.hero.emblem.location}</div>
      <b>{time} CET</b>
      <div className="cb-emblem-status" data-open={open ? '1' : '0'}>
        <span className="cb-emblem-dot" />
        {open ? T.hero.emblem.statusOpen : T.hero.emblem.statusClosed}
      </div>
    </>
  );
}

export default function Home() {
  const { T } = useI18n();
  const [countStarted, setCountStarted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countStarted) {
          setCountStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [countStarted]);

  return (
    <>
      <Helmet>
        <title>{seoMeta.home.title}</title>
        <meta name="description" content={seoMeta.home.description} />
        <meta name="keywords" content={seoMeta.home.keywords} />
        <meta name="author" content="ClearBuildIT" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href={seoMeta.home.canonical} />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoMeta.home.ogTitle} />
        <meta property="og:description" content={seoMeta.home.ogDescription} />
        <meta property="og:url" content={seoMeta.home.canonical} />
        <meta property="og:image" content={seoMeta.home.ogImage} />
        <meta property="og:image:alt" content="ClearBuildIT - Maatwerk SaaS & Apps" />
        <meta property="og:site_name" content="ClearBuildIT" />
        <meta property="og:locale" content="nl_NL" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoMeta.home.ogTitle} />
        <meta name="twitter:description" content={seoMeta.home.ogDescription} />
        <meta name="twitter:image" content={seoMeta.home.ogImage} />
        <meta name="twitter:site" content="@ClearBuildIT" />
        
        {/* Search Engine Visibility */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema([
            { name: "Home", url: "https://clearbuildit.nl" },
            { name: "Diensten", url: "https://clearbuildit.nl#diensten" },
            { name: "Over ons", url: "https://clearbuildit.nl#features" }
          ]))}
        </script>
      </Helmet>
    <main className="min-h-screen scroll-smooth" style={{ background: '#F6F2E8' }}>
      <style>{`
        .cb-hero {
          --paper: #F6F2E8;
          --ink: #1A1815;
          --accent: #0B7E40;
          --rule: rgba(26,24,21,0.14);
          --muted: rgba(26,24,21,0.58);
          background: var(--paper);
          color: var(--ink);
          font-family: 'Geist', system-ui, sans-serif;
          position: relative;
          overflow: hidden;
          min-height: calc(100vh - 80px);
          display: flex;
          flex-direction: column;
          padding: 96px 0 80px;
        }
        .cb-hero::before {
          content: "";
          position: absolute; inset: 0;
          pointer-events: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.09 0 0 0 0 0.08 0 0 0 0.22 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
          opacity: .30;
          mix-blend-mode: multiply;
        }
        .cb-hero::after {
          content: "";
          position: absolute;
          right: -180px; top: 20%;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(11,126,64,0.22), transparent 60%);
          pointer-events: none;
          filter: blur(40px);
        }
        .cb-wrap { max-width: 1240px; margin: 0 auto; padding: 0 32px; width: 100%; position: relative; z-index: 1; }

        .cb-eyebrow {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--muted);
          display: flex; align-items: center; gap: 14px;
          margin-bottom: 56px;
        }
        .cb-eyebrow .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 0 4px rgba(11,126,64,0.15);
          animation: cb-pulse 2.4s ease-in-out infinite;
        }
        .cb-eyebrow .rule {
          flex: 0 0 60px; height: 1px; background: var(--rule);
        }
        @keyframes cb-pulse {
          0%, 100% { box-shadow: 0 0 0 4px rgba(11,126,64,0.15); }
          50% { box-shadow: 0 0 0 8px rgba(11,126,64,0.05); }
        }

        .cb-h1 {
          font-family: 'Fraunces', 'Times New Roman', serif;
          font-size: clamp(52px, 9.4vw, 148px);
          line-height: 0.94;
          letter-spacing: -0.035em;
          margin: 0;
          font-weight: 400;
          font-variation-settings: "opsz" 144, "SOFT" 50;
          max-width: 14ch;
          color: var(--ink);
        }
        .cb-h1 em {
          font-style: italic;
          font-weight: 300;
          font-variation-settings: "opsz" 144, "SOFT" 100;
          color: var(--accent);
          display: inline-block;
          position: relative;
          letter-spacing: -0.025em;
        }
        .cb-h1 em::after {
          content: ""; position: absolute;
          left: 0; right: 0; bottom: 0.04em;
          height: 1px; background: var(--accent);
          opacity: .22;
        }

        .cb-sub-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          margin-top: 64px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .cb-sub-row { grid-template-columns: 1fr; gap: 40px; }
        }
        .cb-sub-label {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 11px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 14px;
          display: flex; align-items: center; gap: 10px;
        }
        .cb-sub-label::before {
          content: ""; width: 18px; height: 1px; background: var(--ink); opacity: .4;
        }
        .cb-sub-text {
          font-family: 'Geist', sans-serif;
          font-weight: 400;
          font-size: 18px; line-height: 1.55;
          color: rgba(26,24,21,0.78);
          max-width: 44ch;
          margin: 0;
          letter-spacing: -0.005em;
        }
        .cb-ctas { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
        .cb-cta {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 12px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none;
          padding: 18px 28px;
          display: inline-flex; align-items: center; gap: 14px;
          transition: all 200ms ease;
          border-radius: 999px;
        }
        .cb-cta-primary {
          background: var(--ink); color: var(--paper);
          border: 1px solid var(--ink);
        }
        .cb-cta-primary:hover { background: var(--accent); border-color: var(--accent); transform: translateY(-1px); }
        .cb-cta-primary .arr { transition: transform 200ms ease; }
        .cb-cta-primary:hover .arr { transform: translateX(4px); }
        .cb-cta-ghost {
          color: var(--ink); border: 1px solid var(--rule);
          background: transparent;
        }
        .cb-cta-ghost:hover { border-color: var(--ink); }

        .cb-stats {
          margin-top: 96px;
          padding-top: 36px;
          border-top: 1px solid var(--rule);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        @media (max-width: 900px) {
          .cb-stats { grid-template-columns: repeat(2, 1fr); row-gap: 36px; }
        }
        .cb-stat { padding: 0 28px; position: relative; }
        .cb-stat:first-child { padding-left: 0; }
        .cb-stat + .cb-stat::before {
          content: ""; position: absolute; left: 0; top: 8px; bottom: 8px;
          width: 1px; background: var(--rule);
        }
        .cb-stat-num {
          font-family: 'Fraunces', 'Times New Roman', serif;
          font-weight: 400;
          font-variation-settings: "opsz" 144, "SOFT" 50;
          font-size: 64px; line-height: 1;
          letter-spacing: -0.03em;
          color: var(--ink);
          font-feature-settings: "tnum" 1, "lnum" 1;
          display: flex; align-items: baseline;
        }
        .cb-stat-num .unit {
          font-size: 22px;
          font-weight: 400;
          color: var(--accent);
          margin-left: 4px;
          letter-spacing: -0.02em;
        }
        .cb-stat-lbl {
          margin-top: 14px;
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 11px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--muted);
        }

        .cb-emblem {
          position: absolute; right: 32px; top: 32px;
          display: flex; flex-direction: column; align-items: flex-end; gap: 8px;
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 10px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--muted);
          z-index: 2;
          padding: 16px 18px;
          border: 1px solid var(--rule);
          border-radius: 4px;
          background: rgba(246,242,232,0.4);
          backdrop-filter: blur(6px);
          min-width: 200px;
        }
        .cb-emblem b {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-weight: 500;
          font-size: 13px; letter-spacing: 0.04em; text-transform: none;
          color: var(--ink);
          font-variant-numeric: tabular-nums;
          margin-top: 4px;
        }
        .cb-emblem-status {
          margin-top: 8px; padding-top: 8px;
          border-top: 1px solid var(--rule);
          width: 100%;
          display: flex; align-items: center; justify-content: flex-end; gap: 8px;
          font-size: 9px;
        }
        .cb-emblem-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #c0392b;
          box-shadow: 0 0 0 3px rgba(192,57,43,0.18);
        }
        .cb-emblem-status[data-open="1"] .cb-emblem-dot {
          background: var(--accent);
          box-shadow: 0 0 0 3px rgba(11,126,64,0.18);
          animation: cb-pulse 2.4s ease-in-out infinite;
        }
        @media (max-width: 900px) { .cb-emblem { display: none; } }

        @keyframes cb-rise {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cb-rise { animation: cb-rise 900ms cubic-bezier(.2,.7,.2,1) both; }
        .cb-rise-2 { animation-delay: 140ms; }
        .cb-rise-3 { animation-delay: 260ms; }
        .cb-rise-4 { animation-delay: 380ms; }
        .cb-rise-5 { animation-delay: 520ms; }
      `}</style>

      {/* Hero Section, Atelier edition */}
      <section id="hero" className="cb-hero">
        <aside className="cb-emblem cb-rise" aria-label="Studio status">
          <LiveClock />
        </aside>
        <div className="cb-wrap" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 className="cb-h1 cb-rise cb-rise-2">
            {T.hero.titleLine1}<br/>
            <em>{T.hero.titleLine2}</em>
          </h1>

          <div className="cb-sub-row">
            <div className="cb-rise cb-rise-3">
              <div className="cb-sub-label">{T.hero.whoWeAre}</div>
              <p className="cb-sub-text">{T.hero.whoWeAreText}</p>
            </div>
            <div className="cb-rise cb-rise-4">
              <div className="cb-sub-label">{T.hero.start}</div>
              <div className="cb-ctas">
                <a href="#contact" className="cb-cta cb-cta-primary">
                  {T.hero.ctaPrimary}
                  <span className="arr">→</span>
                </a>
                <a href="#proces" className="cb-cta cb-cta-ghost">
                  {T.hero.ctaGhost}
                </a>
              </div>
            </div>
          </div>

          <div ref={statsRef} className="cb-stats cb-rise cb-rise-5">
            {T.hero.stats.map((s, i) => (
              <div className="cb-stat" key={i}>
                <div className="cb-stat-num">
                  {s.static ? s.val : <AnimatedNumber value={s.val} started={countStarted} />}
                  {s.suffix && <span className="unit">{s.suffix}</span>}
                </div>
                <div className="cb-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .cb-sec {
          --paper: #F6F2E8;
          --ink: #1A1815;
          --accent: #0B7E40;
          --rule: rgba(26,24,21,0.14);
          --muted: rgba(26,24,21,0.58);
          font-family: 'Geist', system-ui, sans-serif;
          color: var(--ink);
          position: relative;
        }
        .cb-sec-paper { background: var(--paper); }
        .cb-sec-paper::before {
          content: ""; position: absolute; inset: 0; pointer-events: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.09 0 0 0 0 0.08 0 0 0 0.22 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
          opacity: .28; mix-blend-mode: multiply;
        }
        .cb-sec-ink { background: var(--ink); color: var(--paper); }
        .cb-sec-ink::before {
          content: ""; position: absolute; inset: 0; pointer-events: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95 0 0 0 0 0.95 0 0 0 0 0.9 0 0 0 0.05 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
          opacity: .5; mix-blend-mode: screen;
        }
        .cb-sec-wrap { max-width: 1240px; margin: 0 auto; padding: 120px 32px; position: relative; z-index: 1; }

        /* Section header pattern */
        .cb-sec-head {
          display: grid; grid-template-columns: 280px 1fr; gap: 80px;
          align-items: end; margin-bottom: 80px;
        }
        @media (max-width: 900px) { .cb-sec-head { grid-template-columns: 1fr; gap: 32px; margin-bottom: 56px; } }
        .cb-sec-index {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 11px; font-weight: 500; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--muted);
          display: flex; align-items: center; gap: 14px;
        }
        .cb-sec-ink .cb-sec-index { color: rgba(246,242,232,0.55); }
        .cb-sec-index .rule { flex: 1; height: 1px; background: currentColor; opacity: .3; }
        .cb-sec-index b {
          color: var(--accent); font-weight: 500;
          font-variant-numeric: tabular-nums;
        }
        .cb-sec-title {
          font-family: 'Fraunces', 'Times New Roman', serif;
          font-weight: 400;
          font-variation-settings: "opsz" 144, "SOFT" 50;
          font-size: clamp(42px, 6.6vw, 92px);
          line-height: 0.96;
          letter-spacing: -0.035em;
          margin: 0;
          max-width: 16ch;
        }
        .cb-sec-title em {
          font-style: italic; font-weight: 300; color: var(--accent);
          font-variation-settings: "opsz" 144, "SOFT" 100;
          letter-spacing: -0.02em;
        }
        .cb-sec-lede {
          margin-top: 24px;
          font-size: 17px; line-height: 1.6;
          color: rgba(26,24,21,0.72);
          max-width: 46ch;
          letter-spacing: -0.005em;
        }
        .cb-sec-ink .cb-sec-lede { color: rgba(246,242,232,0.74); }

        /* Services, editorial menu rows */
        .cb-serv {
          border-top: 1px solid var(--rule);
        }
        .cb-serv-row {
          display: grid;
          grid-template-columns: 70px 1.2fr 2fr auto;
          gap: 32px; align-items: center;
          padding: 32px 0;
          border-bottom: 1px solid var(--rule);
          position: relative;
          text-decoration: none; color: inherit;
          transition: padding 280ms cubic-bezier(.2,.7,.2,1);
        }
        @media (max-width: 820px) {
          .cb-serv-row { grid-template-columns: 50px 1fr auto; gap: 18px; padding: 24px 0; }
          .cb-serv-row .desc { grid-column: 1 / -1; margin-top: 2px; }
        }
        .cb-serv-row::before {
          content: ""; position: absolute;
          left: -32px; right: -32px; top: 0; bottom: 0;
          background: var(--accent);
          opacity: 0; transition: opacity 280ms ease;
          z-index: -1;
        }
        .cb-serv-row:hover { padding-left: 24px; padding-right: 24px; color: var(--paper); }
        .cb-serv-row:hover::before { opacity: 1; }
        .cb-serv-row:hover .cb-serv-idx,
        .cb-serv-row:hover .desc,
        .cb-serv-row:hover .arr { color: inherit; opacity: 1; }
        .cb-serv-row:hover .cb-serv-idx { color: rgba(246,242,232,0.85); }
        .cb-serv-row:hover .desc { color: rgba(246,242,232,0.92); }

        .cb-serv-idx {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.14em; color: var(--muted);
          align-self: start; padding-top: 10px;
          transition: color 220ms ease;
        }
        .cb-serv-title {
          font-size: clamp(24px, 3.2vw, 40px);
          font-weight: 500;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }
        .cb-serv-row .desc {
          font-size: 15px; line-height: 1.55;
          color: rgba(26,24,21,0.68);
          letter-spacing: -0.005em;
          max-width: 52ch;
          transition: color 220ms ease;
        }
        .cb-serv-row .arr {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 14px; color: var(--muted);
          transition: all 240ms ease;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .cb-serv-row:hover .arr { transform: translateX(6px); }
        .cb-serv-row .arr .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent);
        }
        .cb-serv-row:hover .arr .dot { background: var(--paper); }

        /* Pricing tiers */
        .cb-pricing {
          margin-top: 80px;
          padding-top: 56px;
          border-top: 1px solid var(--rule);
        }
        .cb-pricing-head {
          display: grid; grid-template-columns: 220px 1fr;
          gap: 60px; margin-bottom: 40px; align-items: end;
        }
        @media (max-width: 760px) {
          .cb-pricing-head { grid-template-columns: 1fr; gap: 16px; }
        }
        .cb-pricing-label {
          font-family: 'Geist', sans-serif;
          font-size: 28px; font-weight: 500;
          letter-spacing: -0.025em;
          line-height: 1.1;
          color: var(--ink);
        }
        .cb-pricing-label::before {
          content: "Sectie 02a";
          display: block;
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 10px;
          letter-spacing: 0.2em;
        }
        .cb-pricing-note {
          font-size: 17px; line-height: 1.55;
          color: rgba(26,24,21,0.72);
          letter-spacing: -0.005em;
          margin: 0; max-width: 52ch;
        }
        .cb-pricing-tiers {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border-top: 1px solid var(--rule);
        }
        @media (max-width: 760px) {
          .cb-pricing-tiers { grid-template-columns: 1fr; }
        }
        .cb-pricing-tier {
          padding: 32px 32px 32px 0;
          border-bottom: 1px solid var(--rule);
          position: relative;
        }
        .cb-pricing-tier:not(:last-child) { border-right: 0; }
        .cb-pricing-tier::before {
          content: ""; position: absolute;
          top: -1px; left: 0; width: 56px; height: 2px;
          background: var(--accent);
        }
        .cb-pricing-tier-label {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--muted);
          margin-top: 20px; margin-bottom: 12px;
        }
        .cb-pricing-tier-price {
          font-size: 44px; font-weight: 500;
          letter-spacing: -0.04em; line-height: 1;
          color: var(--ink);
          margin-bottom: 14px;
          font-variant-numeric: tabular-nums;
        }
        .cb-pricing-tier-price span {
          color: var(--accent);
          font-weight: 400;
        }
        .cb-pricing-tier-desc {
          font-size: 14px; line-height: 1.5;
          color: rgba(26,24,21,0.68);
          letter-spacing: -0.005em;
          max-width: 28ch;
        }

        /* Process timeline */
        .cb-proc-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 1px solid rgba(246,242,232,0.2);
        }
        @media (max-width: 900px) { .cb-proc-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .cb-proc-grid { grid-template-columns: 1fr; } }
        .cb-proc-step {
          padding: 40px 48px 48px 0;
          position: relative;
        }
        @media (max-width: 900px) {
          .cb-proc-step:nth-child(-n+2) { border-bottom: 1px solid rgba(246,242,232,0.14); }
        }
        @media (max-width: 560px) {
          .cb-proc-step { border-bottom: 1px solid rgba(246,242,232,0.14); }
          .cb-proc-step:last-child { border-bottom: none; }
        }
        .cb-proc-step::before {
          content: ""; position: absolute;
          top: -4px; left: 0;
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--accent);
        }
        .cb-proc-num {
          font-family: 'Geist', sans-serif;
          font-weight: 400;
          font-size: 72px; line-height: 1;
          letter-spacing: -0.06em;
          color: rgba(246,242,232,0.14);
          -webkit-text-stroke: 1px rgba(246,242,232,0.35);
          margin-bottom: 56px;
          font-variant-numeric: tabular-nums;
        }
        .cb-proc-lbl {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(246,242,232,0.5);
          margin-bottom: 14px;
        }
        .cb-proc-title {
          font-size: 22px; font-weight: 500;
          letter-spacing: -0.02em;
          margin: 0 0 14px;
          color: var(--paper);
        }
        .cb-proc-desc {
          font-size: 14px; line-height: 1.55;
          color: rgba(246,242,232,0.65);
          letter-spacing: -0.005em;
          max-width: 28ch;
        }

        .cb-proc-foot {
          margin-top: 80px;
          padding-top: 32px;
          border-top: 1px solid rgba(246,242,232,0.14);
          display: flex; justify-content: space-between; align-items: center;
          gap: 24px; flex-wrap: wrap;
        }
        .cb-proc-foot-text {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(246,242,232,0.55);
          max-width: 42ch;
        }
        .cb-proc-cta {
          display: inline-flex; align-items: center; gap: 12px;
          padding: 16px 28px; border-radius: 999px;
          background: var(--paper); color: var(--ink);
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          text-decoration: none; border: 1px solid var(--paper);
          transition: all 200ms ease;
        }
        .cb-proc-cta:hover { background: var(--accent); border-color: var(--accent); color: var(--paper); transform: translateY(-1px); }
        .cb-proc-cta .arr { transition: transform 200ms ease; }
        .cb-proc-cta:hover .arr { transform: translateX(4px); }
      `}</style>

      {/* Diensten Section, editorial menu */}
      <section id="diensten" className="cb-sec cb-sec-paper scroll-mt-16 md:scroll-mt-20">
        <div className="cb-sec-wrap">
          <div className="cb-sec-head">
            <div>
              <div className="cb-sec-index">
                <span>{T.sectionWord}</span><b>02</b><span>{T.services.sectionLabel}</span><span className="rule" />
              </div>
            </div>
            <div>
              <h2 className="cb-sec-title">
                {T.services.titleLine1}<br/>
                <em>{T.services.titleLine2}</em>
              </h2>
              <p className="cb-sec-lede">{T.services.lede}</p>
            </div>
          </div>

          <div className="cb-serv">
            {T.services.items.map((s, i) => (
              <a href="#contact" className="cb-serv-row" key={i}>
                <span className="cb-serv-idx">{String(i + 1).padStart(2, '0')} / {String(T.services.items.length).padStart(2, '0')}</span>
                <span className="cb-serv-title">{s.title}</span>
                <span className="desc">{s.desc}</span>
                <span className="arr"><span className="dot" />{s.cta}</span>
              </a>
            ))}
          </div>

          <div className="cb-pricing">
            <div className="cb-pricing-head">
              <div className="cb-pricing-label">{T.services.pricingLabel}</div>
              <p className="cb-pricing-note">{T.services.pricingNote}</p>
            </div>
            <div className="cb-pricing-tiers">
              {T.services.tiers.map((tier, i) => (
                <div className="cb-pricing-tier" key={i}>
                  <div className="cb-pricing-tier-label">{tier.label}</div>
                  <div className="cb-pricing-tier-price">{tier.price}<span> +</span></div>
                  <div className="cb-pricing-tier-desc">{tier.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proces Section, dark timeline */}
      <section id="proces" className="cb-sec cb-sec-ink scroll-mt-16 md:scroll-mt-20">
        <div className="cb-sec-wrap">
          <div className="cb-sec-head">
            <div>
              <div className="cb-sec-index">
                <span>{T.sectionWord}</span><b>03</b><span>{T.process.sectionLabel}</span><span className="rule" />
              </div>
            </div>
            <div>
              <h2 className="cb-sec-title">
                {T.process.titleLine1}<br/>
                <em>{T.process.titleLine2}</em>
              </h2>
              <p className="cb-sec-lede">{T.process.lede}</p>
            </div>
          </div>

          <div className="cb-proc-grid">
            {T.process.steps.map((step, i) => (
              <div className="cb-proc-step" key={i}>
                <div className="cb-proc-num">{step.num}</div>
                <div className="cb-proc-lbl">{step.label}</div>
                <h3 className="cb-proc-title">{step.title}</h3>
                <p className="cb-proc-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="cb-proc-foot">
            <div className="cb-proc-foot-text">
              {T.process.footTextL1}<br/>
              {T.process.footTextL2}
            </div>
            <a href="#contact" className="cb-proc-cta">
              {T.process.footCta}
              <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        /* Tech stack */
        .cb-tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 1px solid var(--rule);
        }
        @media (max-width: 900px) { .cb-tech-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .cb-tech-grid { grid-template-columns: 1fr; } }
        .cb-tech-col {
          padding: 36px 28px 36px 0;
          position: relative;
        }
        .cb-tech-col::before {
          content: ""; position: absolute; top: -1px; left: 0;
          width: 48px; height: 2px; background: var(--accent);
        }
        .cb-tech-idx {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 10px;
        }
        .cb-tech-title {
          font-size: 22px; font-weight: 500;
          letter-spacing: -0.02em;
          margin: 0 0 24px;
        }
        .cb-tech-list {
          list-style: none; padding: 0; margin: 0;
          display: grid; gap: 10px;
        }
        .cb-tech-list li {
          display: flex; align-items: baseline; gap: 12px;
          font-size: 15px; color: rgba(26,24,21,0.78);
          letter-spacing: -0.005em;
        }
        .cb-tech-list li::before {
          content: ""; flex-shrink: 0;
          width: 6px; height: 1px; background: var(--accent);
          transform: translateY(-4px);
        }
        .cb-tech-list li b {
          font-weight: 500; color: var(--ink);
        }

        /* Waarom wij, manifesto grid */
        .cb-why-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 0;
          border-top: 1px solid var(--rule);
        }
        @media (max-width: 760px) { .cb-why-grid { grid-template-columns: 1fr; } }
        .cb-why-item {
          padding: 40px 48px 40px 0;
          border-bottom: 1px solid var(--rule);
          display: grid; grid-template-columns: 64px 1fr;
          gap: 24px; align-items: start;
        }
        .cb-why-item:nth-child(odd) { padding-right: 48px; }
        .cb-why-item:nth-child(even) {
          padding-left: 48px; border-left: 1px solid var(--rule);
        }
        @media (max-width: 760px) {
          .cb-why-item,
          .cb-why-item:nth-child(odd),
          .cb-why-item:nth-child(even) {
            padding: 32px 0; border-left: none;
          }
        }
        .cb-why-num {
          font-size: 48px; font-weight: 400;
          letter-spacing: -0.05em; line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px var(--ink);
          font-variant-numeric: tabular-nums;
        }
        .cb-why-title {
          font-size: 20px; font-weight: 500;
          letter-spacing: -0.015em;
          margin: 0 0 8px;
        }
        .cb-why-desc {
          font-size: 15px; line-height: 1.6;
          color: rgba(26,24,21,0.68);
          letter-spacing: -0.005em;
          margin: 0;
        }

        /* Contact */
        .cb-contact-grid {
          display: grid; grid-template-columns: 1.1fr 1fr; gap: 80px;
          align-items: start;
        }
        @media (max-width: 900px) { .cb-contact-grid { grid-template-columns: 1fr; gap: 48px; } }
        .cb-contact-left { position: sticky; top: 100px; }
        @media (max-width: 900px) { .cb-contact-left { position: static; } }
        .cb-contact-title {
          font-family: 'Fraunces', 'Times New Roman', serif;
          font-variation-settings: "opsz" 144, "SOFT" 50;
          font-size: clamp(46px, 7.2vw, 108px);
          font-weight: 400; letter-spacing: -0.035em;
          line-height: 0.96; margin: 24px 0 32px;
          max-width: 12ch;
        }
        .cb-contact-title em {
          font-style: italic; font-weight: 300; color: var(--accent);
          font-variation-settings: "opsz" 144, "SOFT" 100;
          letter-spacing: -0.02em;
        }
        .cb-contact-meta {
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid var(--rule);
          display: grid; gap: 20px;
        }
        .cb-contact-meta-row {
          display: grid; grid-template-columns: 80px 1fr; gap: 20px;
          align-items: baseline;
        }
        .cb-contact-meta .k {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--muted);
        }
        .cb-contact-meta .v {
          font-size: 17px; letter-spacing: -0.005em;
          color: var(--ink);
        }
        .cb-contact-meta .v a { color: var(--ink); text-decoration: none; border-bottom: 1px solid var(--accent); }
        .cb-contact-meta .v a:hover { color: var(--accent); }
        .cb-contact-form-wrap {
          background: rgba(26,24,21,0.04);
          border: 1px solid var(--rule);
          border-radius: 24px;
          padding: 32px;
        }
        .cb-contact-form-wrap .cb-form-label {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 24px;
          display: flex; align-items: center; gap: 10px;
        }
        .cb-contact-form-wrap .cb-form-label::after { content: ""; flex: 1; height: 1px; background: var(--rule); }
      `}</style>

      {/* Tech Stack */}
      <section id="tech" className="cb-sec cb-sec-paper scroll-mt-16 md:scroll-mt-20">
        <div className="cb-sec-wrap">
          <div className="cb-sec-head">
            <div>
              <div className="cb-sec-index">
                <span>{T.sectionWord}</span><b>04</b><span>{T.tech.sectionLabel}</span><span className="rule" />
              </div>
            </div>
            <div>
              <h2 className="cb-sec-title">
                {T.tech.titleLine1}<br/>
                <em>{T.tech.titleLine2}</em>
              </h2>
              <p className="cb-sec-lede">{T.tech.lede}</p>
            </div>
          </div>

          <div className="cb-tech-grid">
            <div className="cb-tech-col">
              <div className="cb-tech-idx">{T.tech.cols[0].idx}</div>
              <h3 className="cb-tech-title">{T.tech.cols[0].title}</h3>
              <ul className="cb-tech-list">
                <li><b>React</b> / Next.js</li>
                <li><b>TypeScript</b></li>
                <li>Tailwind CSS</li>
                <li>React Native · Expo</li>
              </ul>
            </div>
            <div className="cb-tech-col">
              <div className="cb-tech-idx">{T.tech.cols[1].idx}</div>
              <h3 className="cb-tech-title">{T.tech.cols[1].title}</h3>
              <ul className="cb-tech-list">
                <li><b>Node.js</b> / Python</li>
                <li>PostgreSQL · MongoDB</li>
                <li>REST & GraphQL</li>
                <li>Microservices</li>
              </ul>
            </div>
            <div className="cb-tech-col">
              <div className="cb-tech-idx">{T.tech.cols[2].idx}</div>
              <h3 className="cb-tech-title">{T.tech.cols[2].title}</h3>
              <ul className="cb-tech-list">
                <li><b>AWS</b> / GCP / Azure</li>
                <li>Docker · Kubernetes</li>
                <li>CI/CD pipelines</li>
                <li>Infrastructure as Code</li>
              </ul>
            </div>
            <div className="cb-tech-col">
              <div className="cb-tech-idx">{T.tech.cols[3].idx}</div>
              <h3 className="cb-tech-title">{T.tech.cols[3].title}</h3>
              <ul className="cb-tech-list">
                <li><b>AI</b> · Machine Learning</li>
                <li>Third-party API's</li>
                <li>Legacy modernisering</li>
                <li>Payment · auth · CRM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom wij, manifesto */}
      <section id="features" className="cb-sec cb-sec-paper scroll-mt-16 md:scroll-mt-20">
        <div className="cb-sec-wrap">
          <div className="cb-sec-head">
            <div>
              <div className="cb-sec-index">
                <span>{T.sectionWord}</span><b>05</b><span>{T.features.sectionLabel}</span><span className="rule" />
              </div>
            </div>
            <div>
              <h2 className="cb-sec-title">
                {T.features.titleLine1}<br/>
                <em>{T.features.titleLine2}</em>
              </h2>
              <p className="cb-sec-lede">{T.features.lede}</p>
            </div>
          </div>

          <div className="cb-why-grid">
            {T.features.items.map((f, i) => (
              <div className="cb-why-item" key={i}>
                <div className="cb-why-num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="cb-why-title">{f.title}</h3>
                  <p className="cb-why-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .cb-about-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 900px) { .cb-about-grid { grid-template-columns: 1fr; gap: 48px; } }

        .cb-about-copy p {
          font-size: 17px; line-height: 1.7;
          color: rgba(26,24,21,0.78);
          letter-spacing: -0.005em;
          margin: 0 0 18px;
          max-width: 52ch;
        }
        .cb-about-copy p strong { color: var(--ink); font-weight: 500; }

        .cb-about-principles {
          margin-top: 40px;
          display: grid; gap: 24px;
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 640px) { .cb-about-principles { grid-template-columns: 1fr; } }
        .cb-about-pcol { }
        .cb-about-pcol-label {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 12px;
          display: flex; align-items: center; gap: 10px;
        }
        .cb-about-pcol-label::before { content: ""; width: 14px; height: 1px; background: var(--ink); opacity: .4; }
        .cb-about-pcol ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; }
        .cb-about-pcol li {
          font-size: 15px; line-height: 1.5; letter-spacing: -0.005em;
          color: rgba(26,24,21,0.78);
          padding-left: 18px; position: relative;
        }
        .cb-about-pcol--do li::before {
          content: "+"; position: absolute; left: 0; top: 0;
          color: var(--accent); font-weight: 600;
        }
        .cb-about-pcol--dont li::before {
          content: "×"; position: absolute; left: 0; top: 0;
          color: rgba(26,24,21,0.4); font-weight: 600;
        }

        .cb-about-stack {
          display: grid; gap: 20px;
          position: sticky; top: 140px;
        }
        @media (max-width: 900px) { .cb-about-stack { position: static; } }
        .cb-about-card {
          background: rgba(26,24,21,0.04);
          border: 1px solid var(--rule);
          border-radius: 28px;
          padding: 36px 36px 32px;
          display: grid; grid-template-columns: 160px 1fr; gap: 32px;
          align-items: start;
        }
        @media (max-width: 520px) { .cb-about-card { grid-template-columns: 1fr; padding: 28px; gap: 24px; } }
        .cb-about-avatar {
          width: 160px; height: 160px;
          border-radius: 20px;
          background: linear-gradient(145deg, var(--ink) 0%, #3a3530 100%);
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          box-shadow: 0 10px 30px -10px rgba(26,24,21,0.35);
          flex-shrink: 0;
        }
        @media (max-width: 520px) { .cb-about-avatar { width: 100%; height: auto; aspect-ratio: 1; } }
        .cb-about-avatar::before {
          content: "";
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95 0 0 0 0 0.95 0 0 0 0 0.9 0 0 0 0.05 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
          opacity: .4; mix-blend-mode: screen;
        }
        .cb-about-avatar::after {
          content: ""; position: absolute;
          right: -60px; bottom: -60px;
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(11,126,64,0.35), transparent 60%);
          filter: blur(30px);
        }
        .cb-about-avatar img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          z-index: 1;
        }
        .cb-about-avatar::after { z-index: 2; mix-blend-mode: screen; opacity: 0.4; }
        .cb-about-info { min-width: 0; }
        .cb-about-name {
          font-size: 24px; font-weight: 500;
          letter-spacing: -0.02em;
          margin: 0 0 6px;
        }
        .cb-about-role {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 18px;
        }
        .cb-about-bio {
          font-size: 15px; line-height: 1.6;
          color: rgba(26,24,21,0.72);
          letter-spacing: -0.005em;
          margin: 0 0 18px;
        }
        .cb-about-tags {
          display: flex; flex-wrap: wrap; gap: 6px;
        }
        .cb-about-tags span {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 5px 11px;
          border: 1px solid var(--rule);
          border-radius: 999px;
          color: var(--ink);
        }
      `}</style>

      {/* Over mij */}
      <section id="over" className="cb-sec cb-sec-paper scroll-mt-16 md:scroll-mt-20">
        <div className="cb-sec-wrap">
          <div className="cb-sec-head">
            <div>
              <div className="cb-sec-index">
                <span>{T.sectionWord}</span><b>06</b><span>{T.about.sectionLabel}</span><span className="rule" />
              </div>
            </div>
            <div>
              <h2 className="cb-sec-title">
                {T.about.titleLine1}<br/>
                <em>{T.about.titleLine2}</em>
              </h2>
              <p className="cb-sec-lede">{T.about.lede}</p>
            </div>
          </div>

          <div className="cb-about-grid">
            <div className="cb-about-copy">
              <p>
                {T.about.p1Pre}<strong>{T.about.p1A}</strong>{T.about.p1Mid}<strong>{T.about.p1B}</strong>{T.about.p1Post}
              </p>
              <p>
                {T.about.p2Pre}<strong>{T.about.p2Strong}</strong>
              </p>
              <p>{T.about.p3}</p>

              <div className="cb-about-principles">
                <div className="cb-about-pcol cb-about-pcol--do">
                  <div className="cb-about-pcol-label">{T.about.doLabel}</div>
                  <ul>
                    {T.about.doItems.map((it, i) => <li key={i}>{it}</li>)}
                  </ul>
                </div>
                <div className="cb-about-pcol cb-about-pcol--dont">
                  <div className="cb-about-pcol-label">{T.about.dontLabel}</div>
                  <ul>
                    {T.about.dontItems.map((it, i) => <li key={i}>{it}</li>)}
                  </ul>
                </div>
              </div>
            </div>

            <aside className="cb-about-stack">
              <div className="cb-about-card">
                <div className="cb-about-avatar">
                  <img src={lucasPhoto} alt="Lucas Wurtz" />
                </div>
                <div className="cb-about-info">
                  <h3 className="cb-about-name">Lucas Wurtz</h3>
                  <div className="cb-about-role">{T.about.lucasRole}</div>
                  <p className="cb-about-bio">{T.about.lucasBio}</p>
                  <div className="cb-about-tags">
                    <span>React Native</span><span>React</span><span>TypeScript</span>
                  </div>
                </div>
              </div>

              <div className="cb-about-card">
                <div className="cb-about-avatar">
                  <img src={raffiPhoto} alt="Raphael Eldaery" />
                </div>
                <div className="cb-about-info">
                  <h3 className="cb-about-name">Raphael Eldaery</h3>
                  <div className="cb-about-role">{T.about.raffiRole}</div>
                  <p className="cb-about-bio">{T.about.raffiBio}</p>
                  <div className="cb-about-tags">
                    <span>Node</span><span>Python</span><span>Postgres</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-16 md:scroll-mt-20">
        <FAQSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="cb-sec cb-sec-paper scroll-mt-16 md:scroll-mt-20">
        <div className="cb-sec-wrap">
          <div className="cb-sec-head">
            <div>
              <div className="cb-sec-index">
                <span>{T.sectionWord}</span><b>08</b><span>{T.contact.sectionLabel}</span><span className="rule" />
              </div>
            </div>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10,
                fontFamily: "'Geist Mono', ui-monospace, monospace",
                fontSize: 11, fontWeight: 500, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'var(--muted)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%',
                  background: 'var(--accent)',
                  boxShadow: '0 0 0 4px rgba(11,126,64,0.15)' }} />
                {T.contact.availability}
              </div>
            </div>
          </div>

          <div className="cb-contact-grid">
            <div className="cb-contact-left">
              <h2 className="cb-contact-title">
                {T.contact.titleLine1}<br/>
                <em>{T.contact.titleLine2}</em>
              </h2>
              <p className="cb-sec-lede" style={{ margin: 0, maxWidth: '42ch' }}>{T.contact.lede}</p>

              <div className="cb-contact-meta">
                <div className="cb-contact-meta-row">
                  <span className="k">{T.contact.meta.email}</span>
                  <span className="v"><a href="mailto:clearbuildit@gmail.com">clearbuildit@gmail.com</a></span>
                </div>
                <div className="cb-contact-meta-row">
                  <span className="k">{T.contact.meta.location}</span>
                  <span className="v">{T.contact.meta.locationValue}</span>
                </div>
                <div className="cb-contact-meta-row">
                  <span className="k">{T.contact.meta.hours}</span>
                  <span className="v">{T.contact.meta.hoursValue}</span>
                </div>
                <div className="cb-contact-meta-row">
                  <span className="k">{T.contact.meta.response}</span>
                  <span className="v">{T.contact.meta.responseValue}</span>
                </div>
              </div>
            </div>

            <div className="cb-contact-form-wrap">
              <div className="cb-form-label">
                <span>{T.contact.formLabel}</span>
                <span style={{ flex: 0, opacity: 0.6, fontFamily: 'inherit' }}>/ 01</span>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
