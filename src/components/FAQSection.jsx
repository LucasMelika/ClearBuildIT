import { useState } from 'react';
import { useI18n } from '../i18n.jsx';

export default function FAQSection() {
  const { T } = useI18n();
  const faqs = T.faq.items;
  const [open, setOpen] = useState(null);

  return (
    <>
      <style>{`
        .cb-faq {
          --paper: #F6F2E8;
          --ink: #1A1815;
          --accent: #0B7E40;
          --rule: rgba(246,242,232,0.14);
          --muted: rgba(246,242,232,0.55);
          color: var(--paper);
          background: var(--ink);
          font-family: 'Geist', system-ui, sans-serif;
          position: relative; overflow: hidden;
        }
        .cb-faq::before {
          content: ""; position: absolute; inset: 0; pointer-events: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95 0 0 0 0 0.95 0 0 0 0 0.9 0 0 0 0.05 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
          opacity: .5; mix-blend-mode: screen;
        }
        .cb-faq::after {
          content: "";
          position: absolute; right: -240px; top: -120px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(11,126,64,0.28), transparent 60%);
          filter: blur(80px); pointer-events: none;
        }
        .cb-faq-wrap { max-width: 1240px; margin: 0 auto; padding: 120px 32px; position: relative; z-index: 1; }

        .cb-faq-head {
          display: grid; grid-template-columns: 280px 1fr; gap: 80px;
          align-items: end; margin-bottom: 72px;
        }
        @media (max-width: 900px) { .cb-faq-head { grid-template-columns: 1fr; gap: 32px; margin-bottom: 48px; } }
        .cb-faq-idx {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 11px; font-weight: 500; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--muted);
          display: flex; align-items: center; gap: 14px;
        }
        .cb-faq-idx b { color: var(--accent); font-weight: 500; font-variant-numeric: tabular-nums; }
        .cb-faq-idx .rule { flex: 1; height: 1px; background: rgba(246,242,232,0.3); }
        .cb-faq-title {
          font-family: 'Fraunces', 'Times New Roman', serif;
          font-variation-settings: "opsz" 144, "SOFT" 50;
          font-weight: 400;
          font-size: clamp(42px, 6.2vw, 88px);
          line-height: 0.98;
          letter-spacing: -0.035em;
          margin: 0;
          max-width: 18ch;
          color: var(--paper);
        }
        .cb-faq-title em {
          font-style: italic; font-weight: 300; color: var(--accent);
          font-variation-settings: "opsz" 144, "SOFT" 100;
          letter-spacing: -0.02em;
        }
        .cb-faq-lede {
          margin-top: 24px;
          font-size: 17px; line-height: 1.6;
          color: rgba(246,242,232,0.72);
          max-width: 46ch; letter-spacing: -0.005em;
        }

        .cb-faq-list {
          border-top: 1px solid var(--rule);
          max-width: 900px;
          margin: 0 auto;
        }
        .cb-faq-item {
          border-bottom: 1px solid var(--rule);
          transition: padding 240ms ease;
        }
        .cb-faq-item.open { padding: 4px 0; }
        .cb-faq-q {
          width: 100%; background: none; border: 0; cursor: pointer;
          color: var(--paper);
          display: grid; grid-template-columns: 64px 1fr 32px;
          gap: 20px; align-items: center;
          padding: 26px 0; text-align: left;
          font-family: inherit;
          transition: padding 240ms ease;
        }
        .cb-faq-q:hover { padding-left: 12px; }
        .cb-faq-q .n {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 11px; font-weight: 500; letter-spacing: 0.14em;
          color: var(--muted);
          font-variant-numeric: tabular-nums;
        }
        .cb-faq-item.open .cb-faq-q .n { color: var(--accent); }
        .cb-faq-q .t {
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1.3;
        }
        .cb-faq-item.open .cb-faq-q .t { color: var(--accent); }
        .cb-faq-q .icon {
          width: 28px; height: 28px; border-radius: 50%;
          border: 1px solid rgba(246,242,232,0.3);
          display: inline-flex; align-items: center; justify-content: center;
          transition: all 240ms ease;
          position: relative;
        }
        .cb-faq-q .icon::before,
        .cb-faq-q .icon::after {
          content: ""; position: absolute;
          background: var(--paper);
          transition: all 240ms ease;
        }
        .cb-faq-q .icon::before { width: 10px; height: 1px; }
        .cb-faq-q .icon::after  { width: 1px; height: 10px; }
        .cb-faq-item.open .cb-faq-q .icon {
          border-color: var(--accent); background: var(--accent);
        }
        .cb-faq-item.open .cb-faq-q .icon::after { transform: scaleY(0); }

        .cb-faq-a {
          display: grid; grid-template-rows: 0fr;
          transition: grid-template-rows 320ms cubic-bezier(.2,.7,.2,1);
        }
        .cb-faq-item.open .cb-faq-a { grid-template-rows: 1fr; }
        .cb-faq-a-inner {
          overflow: hidden;
          display: grid; grid-template-columns: 64px 1fr 32px; gap: 20px;
        }
        .cb-faq-a-text {
          grid-column: 2 / 3;
          padding: 0 0 28px;
          font-size: 16px; line-height: 1.65;
          color: rgba(246,242,232,0.78);
          letter-spacing: -0.005em;
          max-width: 62ch;
        }

        .cb-faq-foot {
          margin-top: 64px; padding-top: 32px;
          border-top: 1px solid var(--rule);
          display: flex; justify-content: space-between; align-items: center;
          gap: 20px; flex-wrap: wrap;
        }
        .cb-faq-foot-text {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 11px; font-weight: 500; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--muted);
          max-width: 36ch;
        }
        .cb-faq-cta {
          display: inline-flex; align-items: center; gap: 12px;
          padding: 16px 28px; border-radius: 999px;
          background: var(--paper); color: var(--ink);
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 11px; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none; border: 1px solid var(--paper);
          transition: all 200ms ease;
        }
        .cb-faq-cta:hover { background: var(--accent); border-color: var(--accent); color: var(--paper); transform: translateY(-1px); }
      `}</style>

      <section className="cb-faq">
        <div className="cb-faq-wrap">
          <div className="cb-faq-head">
            <div className="cb-faq-idx">
              <span>{T.sectionWord}</span><b>07</b><span>{T.faq.sectionLabel}</span><span className="rule" />
            </div>
            <div>
              <h2 className="cb-faq-title">
                {T.faq.titleLine1}<br/>
                <em>{T.faq.titleLine2}</em>
              </h2>
              <p className="cb-faq-lede">{T.faq.lede}</p>
            </div>
          </div>

          <div className="cb-faq-list">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={`cb-faq-item ${isOpen ? 'open' : ''}`}>
                  <button className="cb-faq-q" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                    <span className="n">Q · {String(i + 1).padStart(2, '0')}</span>
                    <span className="t">{faq.question}</span>
                    <span className="icon" aria-hidden="true" />
                  </button>
                  <div className="cb-faq-a">
                    <div className="cb-faq-a-inner">
                      <p className="cb-faq-a-text">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cb-faq-foot">
            <div className="cb-faq-foot-text">
              {T.faq.footL1}<br/>
              {T.faq.footL2}
            </div>
            <a href="#contact" className="cb-faq-cta">
              {T.faq.footCta}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
