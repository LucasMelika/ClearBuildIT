import React from 'react';
import LegalLayout from '../components/LegalLayout';

const SECTIONS = [
  {
    id: 's1', num: '01',
    title: 'Verantwoordelijke voor gegevensverwerking',
    body: (
      <>
        <p>
          ClearBuildIT, gevestigd te Zoetermeer, Nederland (hierna &ldquo;we&rdquo;,
          &ldquo;ons&rdquo; of &ldquo;wij&rdquo;) is verantwoordelijk voor de
          verwerking van je persoonlijke gegevens conform de Algemene Verordening
          Gegevensbescherming (AVG) en de Wet Bescherming Persoonsgegevens.
        </p>
        <p>
          <span className="cl">Contact</span> clearbuildit@gmail.com
        </p>
      </>
    ),
  },
  {
    id: 's2', num: '02',
    title: 'Welke gegevens we verzamelen',
    body: (
      <>
        <p className="lbl">2.1 Contactgegevens</p>
        <p>Naam, e-mailadres, telefoonnummer en bedrijfsgegevens wanneer je contact opneemt via ons formulier. Rechtsbasis: gerechtvaardigd belang (relatiebeheer, offertes).</p>
        <p className="lbl">2.2 Projectinformatie</p>
        <p>Informatie over je project, budget en deadline ten behoeve van dienstverlening. Rechtsbasis: contractuele verplichting.</p>
        <p className="lbl">2.3 Technische gegevens</p>
        <p>Via Google Analytics en cookies verzamelen we IP-adres, browsertype, bezochte pagina&apos;s en verwijzingsgegevens voor website-optimalisatie. Rechtsbasis: toestemming (via cookie consent).</p>
        <p className="lbl">2.4 Communicatie</p>
        <p>E-mailcommunicatie kan worden gearchiveerd voor administratie. Rechtsbasis: contractuele en wettelijke verplichtingen.</p>
      </>
    ),
  },
  {
    id: 's3', num: '03',
    title: 'Hoe we je gegevens gebruiken',
    body: (
      <ul>
        <li>Communicatie en beantwoording van verzoeken</li>
        <li>Levering van diensten en ondersteuning</li>
        <li>Facturatie en administratieve documenten</li>
        <li>Analyse en verbetering van de website</li>
        <li>Naleving van wettelijke verplichtingen (belasting, handelsregister)</li>
        <li>Marketing, uitsluitend met expliciete toestemming</li>
      </ul>
    ),
  },
  {
    id: 's4', num: '04',
    title: 'Bewaartermijnen',
    body: (
      <ul>
        <li><strong>Contactgegevens:</strong> zolang nodig, maximaal 1 jaar na laatste contact</li>
        <li><strong>Contractgegevens:</strong> 7 jaar, conform wettelijke vereisten (BW)</li>
        <li><strong>Technische gegevens (Analytics):</strong> 14 maanden (standaard)</li>
        <li><strong>Cookies:</strong> afhankelijk van type, maximaal 2 jaar</li>
      </ul>
    ),
  },
  {
    id: 's5', num: '05',
    title: 'Gegevensbescherming & veiligheid',
    body: (
      <>
        <p>We implementeren technische en organisatorische maatregelen om je gegevens te beschermen:</p>
        <ul>
          <li>Versleuteling van communicatie (SSL/TLS)</li>
          <li>Veilige servers met firewall-bescherming</li>
          <li>Regelmatige security-updates en patches</li>
          <li>Beperkte toegang op need-to-know basis</li>
          <li>Non-disclosure agreements met medewerkers</li>
        </ul>
        <p>In geval van een datalek informeren wij je conform AVG artikel 33-34.</p>
      </>
    ),
  },
  {
    id: 's6', num: '06',
    title: 'Delen met derden',
    body: (
      <>
        <p>We delen je gegevens uitsluitend met:</p>
        <ul>
          <li><strong>Dienstverleners:</strong> hostingproviders, e-mailservices (alleen wat nodig is)</li>
          <li><strong>Wettelijke verplichting:</strong> wanneer vereist door wet (belastingdienst, rechtbank)</li>
          <li><strong>Met toestemming:</strong> uitsluitend als je daar expliciet mee akkoord gaat</li>
        </ul>
        <p>We zenden je gegevens niet naar landen buiten de EU/EEA zonder geldige waarborgen.</p>
      </>
    ),
  },
  {
    id: 's7', num: '07',
    title: 'Je rechten onder de AVG',
    body: (
      <>
        <p>Je hebt recht op:</p>
        <ul>
          <li><strong>Inzage:</strong> opvragen welke gegevens we hebben</li>
          <li><strong>Rectificatie:</strong> onjuiste gegevens laten corrigeren</li>
          <li><strong>Vergetelheid:</strong> je gegevens laten verwijderen (onder voorwaarden)</li>
          <li><strong>Beperking:</strong> de verwerking beperken</li>
          <li><strong>Gegevensportabiliteit:</strong> je data in machineleesbaar formaat</li>
          <li><strong>Bezwaar:</strong> tegen bepaalde verwerkingen</li>
          <li><strong>Geautomatiseerde besluitvorming:</strong> daar niet aan onderworpen te zijn</li>
        </ul>
        <p>Aanvragen kun je indienen bij <a href="mailto:clearbuildit@gmail.com">clearbuildit@gmail.com</a>. We reageren binnen 30 dagen.</p>
      </>
    ),
  },
  {
    id: 's8', num: '08',
    title: 'Cookies',
    body: (
      <p>We gebruiken cookies conform de Nederlandse Cookiewet. Zie ons <a href="/cookie-beleid">Cookiebeleid</a> voor volledige informatie. Je kunt je voorkeuren op elk moment wijzigen.</p>
    ),
  },
  {
    id: 's9', num: '09',
    title: 'Marketing & communicatie',
    body: (
      <p>We sturen alleen marketing-e-mails met jouw expliciete toestemming. Je kunt je altijd afmelden via de unsubscribe-link in onze e-mails.</p>
    ),
  },
  {
    id: 's10', num: '10',
    title: 'Links naar externe sites',
    body: (
      <p>Onze website bevat links naar externe websites. We zijn niet verantwoordelijk voor het privacybeleid van deze sites. We raden je aan hun beleid door te lezen.</p>
    ),
  },
  {
    id: 's11', num: '11',
    title: 'Wijzigingen',
    body: (
      <p>We kunnen dit privacybeleid op elk moment wijzigen. Wijzigingen worden van kracht na publicatie. Wezenlijke wijzigingen communiceren we via e-mail.</p>
    ),
  },
];

export default function Privacybeleid() {
  return (
    <LegalLayout
      pageTitle="Privacybeleid · ClearBuildIT"
      docLabel="Document · NL"
      docNumber="Versie 1.0"
      title="Privacy"
      accentWord="beleid."
      sections={SECTIONS}
    />
  );
}
