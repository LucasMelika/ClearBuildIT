import React from 'react';
import LegalLayout from '../components/LegalLayout';

const SECTIONS = [
  {
    id: 's1', num: '01',
    title: 'Wat zijn cookies',
    body: (
      <p>
        Cookies zijn kleine tekstbestanden die op je apparaat (computer, tablet,
        smartphone) worden opgeslagen wanneer je onze website bezoekt. Ze worden
        gebruikt conform de Nederlandse Cookiewet en AVG-vereisten. Cookies
        helpen ons je ervaring te verbeteren en inzicht te krijgen in hoe
        bezoekers onze website gebruiken.
      </p>
    ),
  },
  {
    id: 's2', num: '02',
    title: 'Soorten cookies',
    body: (
      <>
        <p className="lbl">2.1 Essentiële cookies</p>
        <p>Noodzakelijk voor de werking van onze website. Ze bevatten informatie over sessies en beveiligingsfuncties. Deze kunnen niet worden uitgeschakeld.</p>
        <p className="lbl">2.2 Prestatiecookies</p>
        <p>Verzamelen informatie over hoe bezoekers de website gebruiken, zoals welke pagina&apos;s het meest bezocht worden. Dit helpt ons de site te verbeteren.</p>
        <p className="lbl">2.3 Functionele cookies</p>
        <p>Onthouden je voorkeuren, zoals taal- en regio-instellingen, zodat we je een persoonlijkere ervaring kunnen bieden.</p>
        <p className="lbl">2.4 Marketing cookies</p>
        <p>Voor het volgen van bezoekers en het tonen van gerichte advertenties. We plaatsen deze uitsluitend met je expliciete toestemming.</p>
      </>
    ),
  },
  {
    id: 's3', num: '03',
    title: 'Derde partijen',
    body: (
      <p>
        Onze website bevat links naar en componenten van derde partijen (sociale
        media, analytics). Deze externe diensten plaatsen ook cookies op je
        apparaat. We hebben geen volledige controle over deze cookies; we raden
        je aan hun privacybeleid te raadplegen.
      </p>
    ),
  },
  {
    id: 's4', num: '04',
    title: 'Google Analytics',
    body: (
      <p>
        We gebruiken Google Analytics om websiteverkeer te analyseren. Hiervoor
        worden cookies geplaatst die anonieme informatie verzamelen. Je kunt je
        tegen deze tracking verzetten via je browser-instellingen of de Google
        Analytics opt-out browser add-on.
      </p>
    ),
  },
  {
    id: 's5', num: '05',
    title: 'Voorkeurencentrum',
    body: (
      <p>
        Je kunt je cookie-instellingen op elk moment wijzigen via het
        voorkeurencentrum dat in de footer van onze website is geplaatst. Daar
        kun je per type aangeven welke cookies je wilt toestaan.
      </p>
    ),
  },
  {
    id: 's6', num: '06',
    title: 'Cookies in je browser beheren',
    body: (
      <>
        <p>Je kunt cookies via je browser beheren:</p>
        <ul>
          <li><strong>Chrome:</strong> Instellingen › Privacy en beveiliging › Cookies en sitegegevens</li>
          <li><strong>Firefox:</strong> Instellingen › Privacy en beveiliging › Cookies en sitegegevens</li>
          <li><strong>Safari:</strong> Voorkeuren › Privacy › Cookies en websitegegevens</li>
          <li><strong>Edge:</strong> Instellingen › Privacy, zoeken en services › Cookies</li>
        </ul>
      </>
    ),
  },
  {
    id: 's7', num: '07',
    title: 'Gevolgen van weigeren',
    body: (
      <p>
        Essentiële cookies zijn noodzakelijk voor de werking van onze website.
        Het weigeren hiervan kan ervoor zorgen dat bepaalde functies niet goed
        werken. Het weigeren van overige cookies heeft geen negatief effect op
        de functionaliteit, maar kan je ervaring minder persoonlijk maken.
      </p>
    ),
  },
  {
    id: 's8', num: '08',
    title: 'Do Not Track',
    body: (
      <p>
        Als je browser Do Not Track-signalen verzendt, respecteren we dat en
        plaatsen we geen marketing-cookies.
      </p>
    ),
  },
  {
    id: 's9', num: '09',
    title: 'Wijzigingen',
    body: (
      <p>
        We kunnen dit cookiebeleid op elk moment bijwerken. Controleer
        regelmatig deze pagina voor eventuele wijzigingen.
      </p>
    ),
  },
  {
    id: 's10', num: '10',
    title: 'Contact',
    body: (
      <>
        <p>Vragen over ons cookiebeleid?</p>
        <p>
          <span className="cl">E-mail</span> <a href="mailto:clearbuildit@gmail.com">clearbuildit@gmail.com</a><br/>
          <span className="cl">Locatie</span> Zoetermeer, Nederland
        </p>
      </>
    ),
  },
];

export default function CookieBeleid() {
  return (
    <LegalLayout
      pageTitle="Cookiebeleid · ClearBuildIT"
      docLabel="Document · NL"
      docNumber="Versie 1.0"
      title="Cookie"
      accentWord="beleid."
      sections={SECTIONS}
    />
  );
}
