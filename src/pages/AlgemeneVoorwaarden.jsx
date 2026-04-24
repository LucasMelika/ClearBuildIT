import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ACCENT = '#0B7E40';
const PAPER = '#F6F2E8';
const INK = '#1A1815';

const SECTIONS = [
  {
    id: 's1',
    num: '01',
    title: 'Definiëring & toepassingsgebied',
    body: (
      <>
        <p>
          Deze algemene voorwaarden zijn van toepassing op alle diensten van
          <span className="acc"> ClearBuildIT</span>, op alle contracten tussen ons en onze klanten
          (&ldquo;klant&rdquo; of &ldquo;je&rdquo;), en op het gebruik van onze website.
        </p>
        <p>
          Door onze diensten af te nemen of een contract te ondertekenen,
          aanvaard je volledige binding aan deze voorwaarden. Afwijkende
          voorwaarden gelden uitsluitend met onze schriftelijke instemming.
        </p>
      </>
    ),
  },
  {
    id: 's2',
    num: '02',
    title: 'Diensten',
    body: (
      <>
        <p>
          ClearBuildIT levert software-development diensten. De scope omvat,
          maar is niet beperkt tot:
        </p>
        <ul>
          <li>SaaS-platformontwikkeling</li>
          <li>Web-applicatieontwikkeling</li>
          <li>Mobile app development</li>
          <li>API-ontwikkeling & integratie</li>
          <li>Technische ondersteuning</li>
        </ul>
      </>
    ),
  },
  {
    id: 's3',
    num: '03',
    title: 'Contractvorming',
    body: (
      <>
        <p><span className="cl">§ 3.1</span> Alle aanbiedingen zijn informatief tenzij anders vermeld. Offertes zijn niet bindend en kunnen binnen 14 dagen worden ingetrokken.</p>
        <p><span className="cl">§ 3.2</span> Een contract ontstaat door ondertekening van beide partijen. ClearBuildIT kan aanbiedingen weigeren zonder opgaaf van redenen.</p>
        <p><span className="cl">§ 3.3</span> Afspraken worden schriftelijk bevestigd (e-mail, PDF, of formeel contract). Mondelinge afspraken zijn niet bindend.</p>
      </>
    ),
  },
  {
    id: 's4',
    num: '04',
    title: 'Betaling',
    body: (
      <>
        <p className="lbl">4.1 — Betalingstermijnen</p>
        <p>Facturen worden binnen 30 dagen na factuurdatum voldaan, tenzij schriftelijk anders overeengekomen.</p>
        <p className="lbl">4.2 — Rente & incasso</p>
        <p>Bij niet-betaling hebben wij recht op:</p>
        <ul>
          <li>Wettelijke rente conform art. 6:233j Burgerlijk Wetboek (momenteel 8%)</li>
          <li>Vergoeding van incassokosten conform art. 6:94 BW</li>
          <li>Beëindiging van diensten en opschorting van toekomstige werkzaamheden</li>
        </ul>
        <p className="lbl">4.3 — Betalingsmogelijkheden</p>
        <p>Betaling geschiedt naar de rekening vermeld op de factuur, tenzij anders afgesproken.</p>
      </>
    ),
  },
  {
    id: 's5',
    num: '05',
    title: 'Intellectueel eigendom',
    body: (
      <>
        <p><span className="cl">§ 5.1</span> Alle software, code, designs, documentatie en intellectueel eigendom dat door ClearBuildIT wordt gecreëerd blijft ons eigendom, tenzij schriftelijk anders afgesproken.</p>
        <p><span className="cl">§ 5.2</span> De klant ontvangt een niet-exclusieve, niet-overdraagbare licentie om de gemaakte code en materialen te gebruiken voor het overeengekomen doel.</p>
        <p><span className="cl">§ 5.3</span> Waar gewerkt wordt met third-party libraries of frameworks, gelden de licenties hiervan (doorgaans open-source). De klant aanvaardt die voorwaarden.</p>
        <p><span className="cl">§ 5.4</span> ClearBuildIT mag voltooide projecten in portfolio tonen en naar klanten refereren, tenzij schriftelijk anders overeengekomen.</p>
      </>
    ),
  },
  {
    id: 's6',
    num: '06',
    title: 'Aansprakelijkheid & garanties',
    body: (
      <>
        <p className="lbl">6.1 — Beperkte aansprakelijkheid</p>
        <p>Onze aansprakelijkheid is beperkt tot het bedrag dat de klant heeft betaald voor de betreffende diensten, tot een maximum van € 50.000 per incident.</p>
        <p className="lbl">6.2 — Uitgesloten aansprakelijkheid</p>
        <p>ClearBuildIT is <em>niet</em> aansprakelijk voor:</p>
        <ul>
          <li>Indirecte schade (winstderving, reputatieschade, gegevensverlies)</li>
          <li>Schadeclaims ingediend meer dan 3 maanden na oplevering</li>
          <li>Schade door onvoldoende security-maatregelen aan klantzijde</li>
          <li>Downtime van derden (hosting providers, etc.)</li>
          <li>Ongewenste neveneffecten van software-updates</li>
        </ul>
        <p className="lbl">6.3 — Garanties</p>
        <p>Wij garanderen professionele uitvoering conform industriestandaarden, bug-fixes gedurende 30 dagen na oplevering, en een werking conform de overeengekomen specificaties.</p>
        <p className="lbl">6.4 — Geen garantie voor</p>
        <p>Serverbescherming tegen aanvallen, third-party services, browser-compatibiliteit met zeer oude versies, of perfecte performance in alle omstandigheden.</p>
      </>
    ),
  },
  {
    id: 's7',
    num: '07',
    title: 'Vertrouwelijkheid',
    body: (
      <p>
        Beide partijen verplichten zich tot vertrouwelijkheid ten aanzien van
        alle gevoelige informatie. Deze verplichting blijft van kracht tot
        drie jaar na beëindiging van het contract. Uitgezonderd is informatie
        die publiekelijk beschikbaar is, of die wettelijk openbaar gemaakt
        moet worden op grond van een gerechtelijke uitspraak.
      </p>
    ),
  },
  {
    id: 's8',
    num: '08',
    title: 'Opschorting & beëindiging',
    body: (
      <>
        <p className="lbl">8.1 — Beëindiging door ClearBuildIT</p>
        <p>Wij mogen het contract opschorten of beëindigen met 14 dagen schriftelijke opzegtermijn indien:</p>
        <ul>
          <li>De klant meer dan 30 dagen achterstallig is met betaling</li>
          <li>De klant deze voorwaarden schendt</li>
          <li>De klant onrechtmatige activiteiten ondersteunt</li>
        </ul>
        <p className="lbl">8.2 — Scope-wijzigingen</p>
        <p>Wijzigingen in project-scope worden schriftelijk afgestemd en kunnen leiden tot aanpassing van planning en kosten.</p>
      </>
    ),
  },
  {
    id: 's9',
    num: '09',
    title: 'Onderhoud & support',
    body: (
      <p>
        Onderhoud, hosting en support na de periode van 30 dagen na oplevering
        zijn afzonderlijke diensten en worden apart gefactureerd.
        ClearBuildIT is niet verplicht onderhoud te verlenen zonder een
        separaat contract.
      </p>
    ),
  },
  {
    id: 's10',
    num: '10',
    title: 'Gegevens & security',
    body: (
      <>
        <p><span className="cl">§ 10.1</span> ClearBuildIT implementeert gangbare veiligheidspraktijken, maar kan niet garanderen dat software 100% secure is tegen elke denkbare aanval.</p>
        <p><span className="cl">§ 10.2</span> De klant is zelf verantwoordelijk voor back-ups van haar gegevens. Wij zijn niet aansprakelijk voor gegevensverlies.</p>
      </>
    ),
  },
  {
    id: 's11',
    num: '11',
    title: 'Duur & beëindiging',
    body: (
      <>
        <p>Het contract treedt in werking bij ondertekening en duurt voort tot voltooiing van de diensten, tenzij anders bepaald.</p>
        <p>Bij beëindiging leveren wij broncode en materialen op (indien afgesproken) en verwijderen wij alle vertrouwelijke informatie.</p>
      </>
    ),
  },
  {
    id: 's12',
    num: '12',
    title: 'Toepasselijk recht',
    body: (
      <>
        <p><span className="cl">§ 12.1</span> Op deze voorwaarden is Nederlands recht van toepassing.</p>
        <p><span className="cl">§ 12.2</span> Geschillen worden eerst in der minne opgelost via directe communicatie.</p>
        <p><span className="cl">§ 12.3</span> Indien geen minnelijke schikking mogelijk is, worden geschillen voorgelegd aan de bevoegde rechtbank te Rotterdam, Nederland.</p>
      </>
    ),
  },
  {
    id: 's13',
    num: '13',
    title: 'Wijzigingen',
    body: (
      <p>
        ClearBuildIT behoudt zich het recht voor deze voorwaarden op elk
        moment te wijzigen. Wijzigingen worden van kracht na publicatie.
        Voortgezette samenwerking betekent acceptatie van de nieuwe
        voorwaarden.
      </p>
    ),
  },
  {
    id: 's14',
    num: '14',
    title: 'Contact',
    body: (
      <div className="colophon">
        <div>
          <span className="cl">E —</span>
          <a href="mailto:infomelikas@gmail.com">infomelikas@gmail.com</a>
        </div>
        <div>
          <span className="cl">L —</span> Zoetermeer, Nederland
        </div>
      </div>
    ),
  },
];

export default function AlgemeneVoorwaarden() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [progress, setProgress] = useState(0);
  const refs = useRef({});

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

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
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <Helmet>
        <title>Algemene Voorwaarden · ClearBuildIT</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
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
            font-family: 'Fraunces', Georgia, serif;
            font-feature-settings: "onum" 1, "ss01" 1;
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
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
            color: var(--muted);
            display: flex; gap: 18px; align-items: center;
          }
          .tc-eyebrow span.dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
          .tc-title {
            font-family: 'Fraunces', serif;
            font-variation-settings: "opsz" 144, "wght" 400, "SOFT" 50;
            font-size: clamp(64px, 12vw, 180px);
            line-height: 0.86;
            letter-spacing: -0.035em;
            margin: 28px 0 0;
            font-weight: 400;
          }
          .tc-title em {
            font-style: italic;
            font-variation-settings: "opsz" 144, "wght" 300, "SOFT" 100;
            color: var(--accent);
          }
          .tc-meta {
            display: flex; justify-content: space-between; flex-wrap: wrap;
            gap: 20px; margin-top: 48px;
            font-family: 'JetBrains Mono', monospace; font-size: 12px;
            color: var(--muted); letter-spacing: 0.06em;
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
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px; letter-spacing: 0.04em;
          }
          .tc-toc-label {
            color: var(--muted); text-transform: uppercase;
            letter-spacing: 0.2em; margin-bottom: 20px;
            display: flex; align-items: center; gap: 10px;
          }
          .tc-toc-label::after {
            content: ""; flex: 1; height: 1px; background: var(--rule);
          }
          .tc-toc ol { list-style: none; padding: 0; margin: 0; }
          .tc-toc li { margin: 0; }
          .tc-toc a {
            display: grid; grid-template-columns: 28px 1fr;
            gap: 10px; padding: 6px 0;
            color: var(--muted); text-decoration: none;
            transition: color 180ms ease, transform 180ms ease;
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
            font-family: 'Fraunces', serif;
            font-size: 13px; letter-spacing: 0;
            font-variation-settings: "opsz" 14, "wght" 420;
          }

          .tc-sections { max-width: 640px; }
          .tc-sec { position: relative; padding: 64px 0; border-top: 1px solid var(--rule); }
          .tc-sec:first-child { border-top: 0; padding-top: 0; }
          .tc-sec-head {
            display: flex; align-items: baseline; gap: 24px;
            margin-bottom: 28px;
          }
          .tc-sec-num {
            font-family: 'Fraunces', serif;
            font-style: italic;
            font-variation-settings: "opsz" 144, "wght" 300;
            font-size: 84px; line-height: 1;
            letter-spacing: -0.04em;
            -webkit-text-stroke: 1px var(--ink);
            color: transparent;
            flex-shrink: 0;
            position: relative;
          }
          .tc-sec-num::after {
            content: ""; position: absolute; left: 0; right: 10px; bottom: 8px;
            height: 6px; background: var(--accent); opacity: .18;
            z-index: -1;
          }
          .tc-sec-title {
            font-family: 'Fraunces', serif;
            font-variation-settings: "opsz" 48, "wght" 440;
            font-size: 30px; line-height: 1.1;
            letter-spacing: -0.015em;
            margin: 0;
          }
          .tc-sec-body {
            font-variation-settings: "opsz" 14, "wght" 400;
            font-size: 17px;
            line-height: 1.65;
            color: rgba(26,24,21,0.85);
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
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px; letter-spacing: 0.1em;
            color: var(--accent);
            margin-right: 10px;
            vertical-align: 2px;
          }
          .tc-sec-body .lbl {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px; letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--muted);
            margin-top: 28px !important; margin-bottom: 8px !important;
          }
          .tc-sec-body .acc { color: var(--accent); font-style: italic; }
          .tc-sec-body em { font-style: italic; color: var(--ink); }
          .tc-sec-body a { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; }
          .tc-sec-body .colophon { display: grid; gap: 10px; font-size: 17px; }

          .tc-foot {
            border-top: 1px solid var(--rule);
            padding: 48px 0 80px;
            display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px; letter-spacing: 0.12em;
            text-transform: uppercase; color: var(--muted);
          }
          .tc-foot .mark {
            font-family: 'Fraunces', serif; font-style: italic;
            font-variation-settings: "opsz" 144, "wght" 300;
            font-size: 22px; text-transform: none; letter-spacing: 0;
            color: var(--ink);
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
              <span>Document · NL</span>
              <span>Versie 1.0</span>
            </div>
            <h1 className="tc-title tc-rise tc-rise-2">
              Algemene<br/>
              <em>voorwaarden</em>
            </h1>
            <div className="tc-meta tc-rise tc-rise-3">
              <div><b>Uitgever</b> — ClearBuildIT, Zoetermeer</div>
              <div><b>Laatst bijgewerkt</b> — {today}</div>
              <div><b>Recht</b> — Nederland</div>
            </div>
          </div>
        </header>

        <div className="tc-wrap">
          <div className="tc-grid">
            <nav className="tc-toc" aria-label="Inhoudsopgave">
              <div className="tc-toc-label">Inhoud</div>
              <ol>
                {SECTIONS.map((s) => (
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
              {SECTIONS.map((s) => (
                <section key={s.id} id={s.id} className="tc-sec" ref={(el) => (refs.current[s.id] = el)}>
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
            <div>© {new Date().getFullYear()} · ClearBuildIT</div>
            <div className="mark">— einde document</div>
            <div>Rotterdam · NL · Rechtbank</div>
          </footer>
        </div>
      </div>
    </>
  );
}
