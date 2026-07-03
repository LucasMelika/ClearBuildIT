import React from 'react';
import logo from '../assets/logoTrans.png';
import { useI18n } from '../i18n.jsx';

export default function Footer() {
  const { T } = useI18n();
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .cb-foot {
          --paper: #F6F2E8;
          --ink: #1A1815;
          --accent: #0B7E40;
          --rule: rgba(26,24,21,0.14);
          --muted: rgba(26,24,21,0.58);
          background: var(--ink);
          color: var(--paper);
          font-family: 'Geist', system-ui, sans-serif;
          position: relative;
          overflow: hidden;
        }
        .cb-foot::before {
          content: "";
          position: absolute; inset: 0; pointer-events: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95 0 0 0 0 0.95 0 0 0 0 0.9 0 0 0 0.05 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
          opacity: .6;
          mix-blend-mode: screen;
        }
        .cb-foot::after {
          content: "";
          position: absolute;
          left: -200px; bottom: -200px;
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(11,126,64,0.30), transparent 60%);
          filter: blur(80px);
          pointer-events: none;
        }
        .cb-foot-wrap { max-width: 1240px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 1; }

        .cb-foot-top {
          padding: 80px 0 48px;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 48px;
          border-bottom: 1px solid rgba(246,242,232,0.12);
        }
        @media (max-width: 980px) {
          .cb-foot-top { grid-template-columns: 1fr 1fr; row-gap: 48px; }
        }
        @media (max-width: 560px) {
          .cb-foot-top { grid-template-columns: 1fr; }
        }

        .cb-foot-brand img { height: 88px; filter: brightness(0) invert(1); margin-bottom: 24px; }
        .cb-foot-brand p {
          font-size: 15px; line-height: 1.6;
          color: rgba(246,242,232,0.7);
          letter-spacing: -0.005em;
          margin: 0 0 24px;
          max-width: 36ch;
        }
        .cb-foot-socials { display: flex; gap: 8px; }
        .cb-foot-soc {
          width: 40px; height: 40px; border-radius: 999px;
          border: 1px solid rgba(246,242,232,0.18);
          display: inline-flex; align-items: center; justify-content: center;
          color: rgba(246,242,232,0.75);
          transition: all 200ms ease;
          text-decoration: none;
        }
        .cb-foot-soc:hover {
          background: var(--accent); border-color: var(--accent); color: var(--paper);
          transform: translateY(-2px);
        }
        .cb-foot-soc svg { width: 16px; height: 16px; }

        .cb-foot-col h3 {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(246,242,232,0.5);
          margin: 0 0 20px;
          display: flex; align-items: center; gap: 10px;
        }
        .cb-foot-col h3::before {
          content: ""; width: 14px; height: 1px;
          background: rgba(246,242,232,0.35);
        }
        .cb-foot-col ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 12px; }
        .cb-foot-col a {
          color: rgba(246,242,232,0.82);
          text-decoration: none;
          font-size: 15px; letter-spacing: -0.005em;
          transition: color 180ms ease;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .cb-foot-col a::before {
          content: "→";
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 11px;
          color: rgba(246,242,232,0.35);
          transform: translateX(-6px); opacity: 0;
          transition: all 240ms ease;
        }
        .cb-foot-col a:hover { color: var(--paper); }
        .cb-foot-col a:hover::before { transform: translateX(0); opacity: 1; color: #7DE39B; }

        .cb-foot-meta-row {
          display: grid; gap: 14px;
          font-size: 14px;
        }
        .cb-foot-meta-row > div {
          display: grid; grid-template-columns: 60px 1fr; gap: 10px;
          align-items: baseline;
        }
        .cb-foot-meta-row .k {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(246,242,232,0.45);
        }
        .cb-foot-meta-row a { color: var(--paper); }
        .cb-foot-meta-row a:hover { color: #7DE39B; }

        .cb-foot-logomark {
          padding: 48px 0 24px;
          display: flex; justify-content: center; align-items: center;
          position: relative;
        }
        .cb-foot-logomark img {
          height: clamp(160px, 22vw, 320px);
          width: auto; max-width: 100%;
          filter: brightness(0) invert(1);
          display: block;
        }

        .cb-foot-bottom {
          border-top: 1px solid rgba(246,242,232,0.12);
          padding: 28px 0 40px;
          display: flex; justify-content: space-between; align-items: center;
          gap: 20px; flex-wrap: wrap;
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(246,242,232,0.45);
        }
        .cb-foot-bottom .made {
          display: inline-flex; align-items: center; gap: 8px;
        }
        .cb-foot-bottom .made .pin {
          width: 6px; height: 6px; border-radius: 50%;
          background: #7DE39B;
          box-shadow: 0 0 0 3px rgba(125,227,155,0.2);
        }
      `}</style>

      <footer className="cb-foot">
        <div className="cb-foot-wrap">
          <div className="cb-foot-top">
            <div className="cb-foot-brand">
              <img src={logo} alt="ClearBuildIT" />
              <p>{T.footer.tagline}</p>
              <div className="cb-foot-socials">
                <a href="https://www.linkedin.com/company/clearbuildit/" target="_blank" rel="noopener noreferrer" className="cb-foot-soc" aria-label="LinkedIn">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
<a href="mailto:clearbuildit@gmail.com" className="cb-foot-soc" aria-label="E-mail">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="cb-foot-col">
              <h3>{T.footer.colServices}</h3>
              <ul>
                {T.footer.services.map((s) => (
                  <li key={s}><a href="#diensten">{s}</a></li>
                ))}
              </ul>
            </div>

            <div className="cb-foot-col">
              <h3>{T.footer.colInfo}</h3>
              <ul>
                {T.footer.info.map((it) => (
                  <li key={it.href}><a href={it.href}>{it.label}</a></li>
                ))}
              </ul>
            </div>

            <div className="cb-foot-col">
              <h3>{T.footer.colOffice}</h3>
              <div className="cb-foot-meta-row">
                <div>
                  <span className="k">{T.footer.officeLoc}</span>
                  <span>{T.footer.officeLocVal}</span>
                </div>
                <div>
                  <span className="k">{T.footer.officeMail}</span>
                  <a href="mailto:clearbuildit@gmail.com">clearbuildit@gmail.com</a>
                </div>
                <div>
                  <span className="k">{T.footer.officeHours}</span>
                  <span>{T.footer.officeHoursVal}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cb-foot-bottom">
            <div>© {year} ClearBuildIT {T.footer.copyright}</div>
            <div className="made">
              <span className="pin" />
              {T.footer.made}
            </div>
            <div>v1.0 · MMXXIV</div>
          </div>
        </div>
      </footer>
    </>
  );
}
