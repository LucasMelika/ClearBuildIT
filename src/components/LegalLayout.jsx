import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ACCENT = '#0B7E40';
const PAPER = '#F6F2E8';
const INK = '#1A1815';

export default function LegalLayout({ title, accentWord, docLabel, docNumber, sections, pageTitle }) {
  const [active, setActive] = useState(sections[0]?.id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [sections]);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const today = new Date().toLocaleDateString('nl-NL', {
    day: '2-digit', month: 'long', year: 'numeric',
  });

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <style>{`
          .tc-root {
            --paper: ${PAPER};
            --ink: ${INK};
            --accent: ${ACCENT};
            --rule: rgba(26,24,21,0.14);
            --muted: rgba(26,24,21,0.55);
            background: var(--paper);
            color: var(--ink);
            min-height: 100vh;
            font-family: 'Geist', system-ui, sans-serif;
            position: relative;
            overflow-x: hidden;
          }
          .tc-root::before {
            content: "";
            position: absolute; inset: 0;
            pointer-events: none;
            background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.09 0 0 0 0 0.08 0 0 0 0.22 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
            opacity: .35;
            mix-blend-mode: multiply;
          }
          .tc-progress {
            position: fixed; top: 0; left: 0; right: 0;
            height: 2px; z-index: 50; background: transparent;
          }
          .tc-progress > span {
            display: block; height: 100%; background: var(--accent);
            transition: width 120ms linear;
          }
          .tc-header {
            position: relative; padding: 140px 0 60px;
            border-bottom: 1px solid var(--rule);
          }
          .tc-wrap { max-width: 1240px; margin: 0 auto; padding: 0 32px; position: relative; }
          .tc-eyebrow {
            font-family: 'Geist Mono', ui-monospace, monospace;
            font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase;
            color: var(--muted);
            display: flex; gap: 18px; align-items: center;
          }
          .tc-eyebrow span.dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
          .tc-title {
            font-family: 'Geist', sans-serif;
            font-size: clamp(56px, 10vw, 148px);
            line-height: 0.92;
            letter-spacing: -0.045em;
            margin: 28px 0 0;
            font-weight: 500;
          }
          .tc-title em { font-style: normal; font-weight: 400; color: var(--accent); }
          .tc-meta {
            display: flex; justify-content: space-between; flex-wrap: wrap;
            gap: 20px; margin-top: 48px;
            font-family: 'Geist Mono', ui-monospace, monospace; font-size: 11px;
            font-weight: 500;
            color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase;
          }
          .tc-meta b { color: var(--ink); font-weight: 500; }

          .tc-grid {
            display: grid;
            grid-template-columns: 220px 1fr;
            gap: 80px;
            padding: 80px 0 160px;
          }
          @media (max-width: 900px) {
            .tc-grid { grid-template-columns: 1fr; gap: 40px; }
            .tc-toc { position: static !important; }
          }

          .tc-toc {
            position: sticky; top: 100px; align-self: start;
            font-family: 'Geist Mono', ui-monospace, monospace;
            font-size: 11px; font-weight: 500; letter-spacing: 0.04em;
          }
          .tc-toc-label {
            color: var(--muted); text-transform: uppercase;
            letter-spacing: 0.2em; margin-bottom: 20px;
            display: flex; align-items: center; gap: 10px;
          }
          .tc-toc-label::after { content: ""; flex: 1; height: 1px; background: var(--rule); }
          .tc-toc ol { list-style: none; padding: 0; margin: 0; }
          .tc-toc a {
            display: grid; grid-template-columns: 28px 1fr;
            gap: 10px; padding: 6px 0;
            color: var(--muted); text-decoration: none;
            transition: color 180ms ease;
            border-left: 1px solid transparent;
            padding-left: 14px; margin-left: -15px;
          }
          .tc-toc a:hover { color: var(--ink); }
          .tc-toc a.active {
            color: var(--ink);
            border-left-color: var(--accent);
          }
          .tc-toc a.active .tc-toc-num { color: var(--accent); }
          .tc-toc-num { color: var(--muted); }
          .tc-toc-title {
            font-family: 'Geist', sans-serif;
            font-size: 13px; font-weight: 450; letter-spacing: -0.005em;
          }

          .tc-sections { max-width: 640px; }
          .tc-sec { position: relative; padding: 64px 0; border-top: 1px solid var(--rule); }
          .tc-sec:first-child { border-top: 0; padding-top: 0; }
          .tc-sec-head {
            display: flex; align-items: baseline; gap: 24px;
            margin-bottom: 28px;
          }
          .tc-sec-num {
            font-family: 'Geist', sans-serif;
            font-weight: 400;
            font-size: 72px; line-height: 1;
            letter-spacing: -0.05em;
            -webkit-text-stroke: 1px var(--ink);
            color: transparent;
            flex-shrink: 0;
            position: relative;
            font-feature-settings: "tnum" 1, "lnum" 1;
          }
          .tc-sec-title {
            font-family: 'Geist', sans-serif;
            font-weight: 500;
            font-size: 28px; line-height: 1.15;
            letter-spacing: -0.025em;
            margin: 0;
          }
          .tc-sec-body {
            font-family: 'Geist', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 1.65;
            color: rgba(26,24,21,0.82);
            letter-spacing: -0.005em;
          }
          .tc-sec-body p { margin: 0 0 18px; }
          .tc-sec-body p:last-child { margin-bottom: 0; }
          .tc-sec-body ul {
            list-style: none; padding: 0; margin: 12px 0 20px;
            border-top: 1px solid var(--rule);
          }
          .tc-sec-body ul li {
            padding: 10px 0 10px 28px;
            border-bottom: 1px solid var(--rule);
            position: relative;
          }
          .tc-sec-body ul li::before {
            content: "—"; position: absolute; left: 0; top: 10px;
            color: var(--accent); font-weight: 600;
          }
          .tc-sec-body .cl {
            font-family: 'Geist Mono', ui-monospace, monospace;
            font-size: 11px; font-weight: 500; letter-spacing: 0.08em;
            color: var(--accent);
            margin-right: 10px; vertical-align: 1px;
          }
          .tc-sec-body .lbl {
            font-family: 'Geist Mono', ui-monospace, monospace;
            font-size: 11px; font-weight: 500; letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--muted);
            margin-top: 28px !important; margin-bottom: 8px !important;
          }
          .tc-sec-body strong { font-weight: 500; color: var(--ink); }
          .tc-sec-body a { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; }

          .tc-foot {
            border-top: 1px solid var(--rule);
            padding: 48px 0 80px;
            display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap;
            font-family: 'Geist Mono', ui-monospace, monospace;
            font-size: 11px; font-weight: 500; letter-spacing: 0.12em;
            text-transform: uppercase; color: var(--muted);
          }

          @keyframes tc-rise {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .tc-rise { animation: tc-rise 800ms cubic-bezier(.2,.7,.2,1) both; }
          .tc-rise-2 { animation-delay: 120ms; }
          .tc-rise-3 { animation-delay: 220ms; }
        `}</style>
      </Helmet>

      <div className="tc-root">
        <div className="tc-progress"><span style={{ width: `${progress}%` }} /></div>

        <header className="tc-header">
          <div className="tc-wrap">
            <div className="tc-eyebrow tc-rise">
              <span className="dot" />
              <span>{docLabel}</span>
              {docNumber && <span>{docNumber}</span>}
            </div>
            <h1 className="tc-title tc-rise tc-rise-2">
              {title} {accentWord && <em>{accentWord}</em>}
            </h1>
            <div className="tc-meta tc-rise tc-rise-3">
              <div><b>Uitgever</b> ClearBuildIT, Zoetermeer</div>
              <div><b>Laatst bijgewerkt</b> {today}</div>
              <div><b>Recht</b> Nederland</div>
            </div>
          </div>
        </header>

        <div className="tc-wrap">
          <div className="tc-grid">
            <nav className="tc-toc" aria-label="Inhoudsopgave">
              <div className="tc-toc-label">Inhoud</div>
              <ol>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={active === s.id ? 'active' : ''}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                    >
                      <span className="tc-toc-num">{s.num}</span>
                      <span className="tc-toc-title">{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="tc-sections">
              {sections.map((s) => (
                <section key={s.id} id={s.id} className="tc-sec">
                  <div className="tc-sec-head">
                    <div className="tc-sec-num">{s.num}</div>
                    <h2 className="tc-sec-title">{s.title}</h2>
                  </div>
                  <div className="tc-sec-body">{s.body}</div>
                </section>
              ))}
            </div>
          </div>

          <footer className="tc-foot">
            <div>© {new Date().getFullYear()} ClearBuildIT</div>
            <div>Rotterdam · NL · Rechtbank</div>
          </footer>
        </div>
      </div>
    </>
  );
}
