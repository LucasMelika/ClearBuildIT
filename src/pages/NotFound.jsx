import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 · Pagina niet gevonden | ClearBuildIT</title>
        <meta name="robots" content="noindex" />
        <style>{`
          .nf-root {
            --paper: #F6F2E8;
            --ink: #1A1815;
            --accent: #0B7E40;
            --rule: rgba(26,24,21,0.14);
            --muted: rgba(26,24,21,0.58);
            background: var(--paper);
            color: var(--ink);
            font-family: 'Geist', system-ui, sans-serif;
            min-height: 100vh;
            position: relative;
            overflow: hidden;
            display: flex; align-items: center; justify-content: center;
            padding: 120px 32px;
          }
          .nf-root::before {
            content: ""; position: absolute; inset: 0; pointer-events: none;
            background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.09 0 0 0 0 0.08 0 0 0 0.22 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
            opacity: .32; mix-blend-mode: multiply;
          }
          .nf-root::after {
            content: ""; position: absolute;
            right: -200px; top: 30%;
            width: 600px; height: 600px;
            background: radial-gradient(circle, rgba(11,126,64,0.18), transparent 60%);
            filter: blur(60px); pointer-events: none;
          }

          .nf-wrap {
            max-width: 960px; width: 100%;
            position: relative; z-index: 1;
          }

          .nf-eyebrow {
            font-family: 'Geist Mono', ui-monospace, monospace;
            font-size: 11px; font-weight: 500;
            letter-spacing: 0.2em; text-transform: uppercase;
            color: var(--muted);
            display: flex; align-items: center; gap: 14px;
            margin-bottom: 40px;
          }
          .nf-eyebrow .dot {
            width: 6px; height: 6px; border-radius: 50%; background: var(--accent);
          }
          .nf-eyebrow b { color: var(--accent); font-weight: 500; font-variant-numeric: tabular-nums; }
          .nf-eyebrow .rule { flex: 0 0 60px; height: 1px; background: var(--rule); }

          .nf-code {
            font-family: 'Geist', sans-serif;
            font-weight: 400;
            font-size: clamp(180px, 32vw, 440px);
            line-height: 0.82;
            letter-spacing: -0.06em;
            color: transparent;
            -webkit-text-stroke: 2px var(--ink);
            margin: 0 0 32px;
            font-variant-numeric: tabular-nums;
            position: relative;
          }
          .nf-code .zero {
            color: var(--accent);
            -webkit-text-stroke: 0;
          }

          .nf-title {
            font-size: clamp(32px, 5vw, 56px);
            font-weight: 500;
            letter-spacing: -0.035em;
            line-height: 1.05;
            margin: 0 0 20px;
            max-width: 16ch;
          }
          .nf-title em { font-style: normal; color: var(--accent); font-weight: 400; }

          .nf-lede {
            font-size: 17px; line-height: 1.6;
            color: rgba(26,24,21,0.72);
            letter-spacing: -0.005em;
            margin: 0 0 48px;
            max-width: 48ch;
          }

          .nf-ctas {
            display: flex; flex-wrap: wrap; gap: 12px;
            margin-bottom: 72px;
          }
          .nf-cta {
            display: inline-flex; align-items: center; gap: 14px;
            padding: 18px 28px; border-radius: 999px;
            font-family: 'Geist Mono', ui-monospace, monospace;
            font-size: 12px; font-weight: 500;
            letter-spacing: 0.1em; text-transform: uppercase;
            text-decoration: none;
            transition: all 200ms ease;
          }
          .nf-cta--primary {
            background: var(--ink); color: var(--paper);
            border: 1px solid var(--ink);
          }
          .nf-cta--primary:hover { background: var(--accent); border-color: var(--accent); transform: translateY(-1px); }
          .nf-cta--primary .arr { transition: transform 200ms ease; }
          .nf-cta--primary:hover .arr { transform: translateX(4px); }
          .nf-cta--ghost {
            color: var(--ink); background: transparent;
            border: 1px solid var(--rule);
          }
          .nf-cta--ghost:hover { border-color: var(--ink); }

          .nf-links {
            padding-top: 32px;
            border-top: 1px solid var(--rule);
          }
          .nf-links-label {
            font-family: 'Geist Mono', ui-monospace, monospace;
            font-size: 10px; font-weight: 500;
            letter-spacing: 0.2em; text-transform: uppercase;
            color: var(--muted);
            margin-bottom: 16px;
            display: flex; align-items: center; gap: 10px;
          }
          .nf-links-label::after { content: ""; flex: 1; height: 1px; background: var(--rule); }
          .nf-links-list { display: flex; flex-wrap: wrap; gap: 24px; }
          .nf-links-list a {
            color: var(--ink); text-decoration: none;
            font-size: 14px; letter-spacing: -0.005em;
            padding-bottom: 2px;
            border-bottom: 1px solid var(--rule);
            transition: all 200ms ease;
          }
          .nf-links-list a:hover { color: var(--accent); border-bottom-color: var(--accent); }
        `}</style>
      </Helmet>

      <div className="nf-root">
        <div className="nf-wrap">
          <div className="nf-eyebrow">
            <span className="dot" />
            <span>Error</span>
            <b>404</b>
            <span>Pagina niet gevonden</span>
            <span className="rule" />
          </div>

          <h1 className="nf-code">4<span className="zero">0</span>4</h1>

          <h2 className="nf-title">
            Deze pagina bestaat niet,<br/>
            <em>of bestond nooit.</em>
          </h2>

          <p className="nf-lede">
            Misschien een typefout in de URL, misschien een oude link. Geen
            zorgen — we sturen je terug naar waar je wél moet zijn.
          </p>

          <div className="nf-ctas">
            <Link to="/" className="nf-cta nf-cta--primary">
              Terug naar home
              <span className="arr">→</span>
            </Link>
            <a href="/#contact" className="nf-cta nf-cta--ghost">
              Of neem contact op
            </a>
          </div>

          <div className="nf-links">
            <div className="nf-links-label">Snel naar</div>
            <div className="nf-links-list">
              <Link to="/">Home</Link>
              <a href="/#diensten">Diensten</a>
              <a href="/#proces">Proces</a>
              <a href="/#over">Over ons</a>
              <a href="/#faq">FAQ</a>
              <a href="/#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
