import React, { useState, useEffect } from 'react';
import logo from '../assets/logoTrans.png';
import { Link } from 'react-router-dom';
import { useI18n, LangToggle } from '../i18n.jsx';

export default function Navbar() {
  const { T } = useI18n();
  const primary = T.nav.items;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = primary.map((item) => item.href.replace('#', '')).filter(Boolean);
      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .cb-nav {
          --paper: #F6F2E8;
          --ink: #1A1815;
          --accent: #0B7E40;
          --rule: rgba(26,24,21,0.14);
          --muted: rgba(26,24,21,0.78);
          position: sticky; top: 0; z-index: 50;
          background: var(--paper);
          border-bottom: 1px solid transparent;
          transition: border-color 220ms ease, background 220ms ease, backdrop-filter 220ms ease;
          font-family: 'Geist', system-ui, sans-serif;
        }
        .cb-nav--scrolled {
          background: rgba(246, 242, 232, 0.88);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom-color: var(--rule);
        }
        .cb-nav-inner {
          max-width: 1240px; margin: 0 auto;
          display: grid; grid-template-columns: auto 1fr auto;
          align-items: center; gap: 40px;
          padding: 0 32px; height: 120px;
        }
        .cb-nav-brand {
          display: flex; align-items: center; gap: 12px;
          text-decoration: none;
          transition: opacity 180ms ease;
        }
        .cb-nav-brand:hover { opacity: 0.75; }
        .cb-nav-brand img { height: 96px; width: auto; display: block; }
        .cb-nav-brand-tag {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--muted);
          padding-left: 14px;
          border-left: 1px solid var(--rule);
          line-height: 1.3;
        }
        .cb-nav-brand-tag span { color: var(--accent); }
        @media (max-width: 760px) { .cb-nav-brand-tag { display: none; } }

        .cb-nav-links {
          display: flex; justify-content: center;
          gap: 4px;
          font-family: 'Geist Mono', ui-monospace, monospace;
        }
        @media (max-width: 900px) { .cb-nav-links { display: none; } }
        .cb-nav-link {
          position: relative;
          padding: 10px 14px;
          font-size: 13px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--muted);
          text-decoration: none;
          transition: color 180ms ease;
        }
        .cb-nav-link::after {
          content: ""; position: absolute;
          left: 14px; right: 14px; bottom: 2px;
          height: 1px; background: var(--accent);
          transform: scaleX(0); transform-origin: left;
          transition: transform 240ms cubic-bezier(.2,.7,.2,1);
        }
        .cb-nav-link:hover { color: var(--ink); }
        .cb-nav-link:hover::after { transform: scaleX(1); }
        .cb-nav-link.active { color: var(--ink); }
        .cb-nav-link.active::after { transform: scaleX(1); }

        .cb-nav-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 12px 20px;
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          background: var(--ink); color: var(--paper);
          border: 1px solid var(--ink);
          border-radius: 999px;
          text-decoration: none;
          transition: all 200ms ease;
        }
        .cb-nav-cta:hover { background: var(--accent); border-color: var(--accent); transform: translateY(-1px); }
        .cb-nav-cta .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #7DE39B;
          box-shadow: 0 0 0 3px rgba(125,227,155,0.25);
          animation: cb-nav-pulse 2s ease-in-out infinite;
        }
        @keyframes cb-nav-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @media (max-width: 900px) { .cb-nav-cta { display: none; } }

        .cb-nav-burger {
          display: none;
          width: 44px; height: 44px;
          align-items: center; justify-content: center;
          background: transparent;
          border: 1px solid var(--rule);
          border-radius: 999px;
          cursor: pointer;
          transition: border-color 180ms ease;
        }
        .cb-nav-burger:hover { border-color: var(--ink); }
        .cb-nav-burger span {
          display: block; width: 14px; height: 1px;
          background: var(--ink);
          position: relative;
        }
        .cb-nav-burger span::before,
        .cb-nav-burger span::after {
          content: ""; position: absolute; left: 0;
          width: 14px; height: 1px; background: var(--ink);
        }
        .cb-nav-burger span::before { top: -5px; }
        .cb-nav-burger span::after  { top: 5px; }
        @media (max-width: 900px) { .cb-nav-burger { display: inline-flex; } }

        .cb-drawer-overlay {
          position: fixed; inset: 0; z-index: 60;
          background: rgba(26,24,21,0.5);
          backdrop-filter: blur(6px);
          animation: cb-fade 220ms ease both;
        }
        @keyframes cb-fade { from { opacity: 0 } to { opacity: 1 } }
        .cb-drawer {
          position: fixed; top: 0; right: 0; bottom: 0;
          width: min(420px, 92vw);
          background: var(--paper);
          display: flex; flex-direction: column;
          padding: 28px 28px 40px;
          z-index: 61;
          font-family: 'Geist', sans-serif;
          animation: cb-slide 280ms cubic-bezier(.2,.7,.2,1) both;
        }
        @keyframes cb-slide { from { transform: translateX(100%) } to { transform: translateX(0) } }
        .cb-drawer::before {
          content: "";
          position: absolute; inset: 0; pointer-events: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.09 0 0 0 0 0.08 0 0 0 0.22 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
          opacity: .25; mix-blend-mode: multiply;
        }
        .cb-drawer > * { position: relative; z-index: 1; }
        .cb-drawer-head {
          display: flex; justify-content: space-between; align-items: center;
          padding-bottom: 20px; border-bottom: 1px solid var(--rule);
          margin-bottom: 24px;
        }
        .cb-drawer-head img { height: 36px; }
        .cb-drawer-close {
          width: 40px; height: 40px; border-radius: 999px;
          border: 1px solid var(--rule); background: transparent;
          cursor: pointer; font-size: 20px; color: var(--ink);
          display: inline-flex; align-items: center; justify-content: center;
          transition: all 180ms ease;
        }
        .cb-drawer-close:hover { border-color: var(--ink); }

        .cb-drawer-label {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--muted); margin-bottom: 10px;
          display: flex; align-items: center; gap: 10px;
        }
        .cb-drawer-label::after { content: ""; flex: 1; height: 1px; background: var(--rule); }

        .cb-drawer-links { list-style: none; padding: 0; margin: 0 0 32px; }
        .cb-drawer-links li { border-bottom: 1px solid var(--rule); }
        .cb-drawer-links li:first-child { border-top: 1px solid var(--rule); }
        .cb-drawer-links a {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 2px;
          font-size: 22px; font-weight: 500;
          letter-spacing: -0.02em;
          color: var(--ink); text-decoration: none;
          transition: color 180ms ease, padding 240ms ease;
        }
        .cb-drawer-links a:hover { color: var(--accent); padding-left: 12px; }
        .cb-drawer-links .idx {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.08em; color: var(--muted);
        }

        .cb-drawer-meta {
          margin-top: auto;
          padding-top: 24px; border-top: 1px solid var(--rule);
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 13px; letter-spacing: 0.02em;
          color: var(--muted);
          display: grid; gap: 10px;
        }
        .cb-drawer-meta div { display: flex; justify-content: space-between; gap: 12px; }
        .cb-drawer-meta b { color: var(--ink); font-weight: 500; }
        .cb-drawer-cta {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          margin-top: 16px;
          padding: 16px 20px;
          background: var(--ink); color: var(--paper);
          border-radius: 999px; text-decoration: none;
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          transition: background 200ms ease;
        }
        .cb-drawer-cta:hover { background: var(--accent); }
      `}</style>

      <header className={`cb-nav ${scrolled ? 'cb-nav--scrolled' : ''}`}>
        <div className="cb-nav-inner">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="cb-nav-brand" aria-label="Home">
            <img src={logo} alt="ClearBuildIT" />
            <span className="cb-nav-brand-tag">
              {T.nav.brandTagL1}<br/>
              <span>{T.nav.brandTagL2}</span>
            </span>
          </Link>

          <nav className="cb-nav-links" aria-label="Primary">
            {primary.map((item) => {
              const key = item.href.replace('#', '');
              const isActive = activeSection === key;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`cb-nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <LangToggle variant="nav" />
            <button
              className="cb-nav-burger"
              aria-label={T.nav.menuOpen}
              onClick={() => setOpen(true)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <>
          <div className="cb-drawer-overlay" onClick={() => setOpen(false)} />
          <aside className="cb-drawer" role="dialog" aria-label="Menu">
            <div className="cb-drawer-head">
              <Link to="/" aria-label="Home" onClick={() => setOpen(false)}>
                <img src={logo} alt="ClearBuildIT" />
              </Link>
              <button className="cb-drawer-close" onClick={() => setOpen(false)} aria-label={T.nav.menuClose}>×</button>
            </div>

            <div style={{ marginBottom: 16 }}>
              <LangToggle variant="drawer" />
            </div>

            <div className="cb-drawer-label">{T.nav.drawer.navigation}</div>
            <ul className="cb-drawer-links">
              {primary.map((item, i) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      setOpen(false);
                      if (item.href.startsWith('#')) {
                        e.preventDefault();
                        const target = document.querySelector(item.href);
                        if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 280);
                      }
                    }}
                  >
                    <span>{item.label}</span>
                    <span className="idx">0{i + 1} →</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="cb-drawer-label">{T.nav.drawer.contact}</div>
            <div className="cb-drawer-meta">
              <div><span>{T.nav.drawer.email}</span><b>clearbuildit@gmail.com</b></div>
              <div><span>{T.nav.drawer.location}</span><b>Zoetermeer · NL</b></div>
              <div><span>{T.nav.drawer.hours}</span><b>{T.nav.drawer.hoursValue}</b></div>
              <a href="#contact" onClick={() => setOpen(false)} className="cb-drawer-cta">
                {T.nav.drawer.cta}
              </a>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
