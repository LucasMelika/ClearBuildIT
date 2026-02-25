import React from 'react';

export default function CookieBeleid() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Cookiebeleid</h1>
        <p className="text-neutral-600 mb-8">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>

        <div className="space-y-8 text-neutral-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Wat zijn cookies en waarom gebruiken we deze?</h2>
            <p>
              Cookies zijn kleine tekstbestanden die op je apparaat (computer, tablet, smartphone) worden opgeslagen 
              wanneer je onze website bezoekt. Ze worden gebruikt conform de Nederlandse Cookiewet en AVGG-vereisten. 
              Cookies helpen ons je website-ervaring te verbeteren en inzicht te geven in hoe bezoekers onze website gebruiken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Soorten cookies die we gebruiken</h2>
            
            <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-4">2.1 Essentiële cookies</h3>
            <p>
              Deze cookies zijn noodzakelijk voor de werking van onze website. Ze bevatten informatie over 
              sessies en beveiligingsfuncties. Deze kunnen niet worden uitgeschakeld.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-4">2.2 Prestatiecookies</h3>
            <p>
              Deze cookies verzamelen informatie over hoe bezoekers onze website gebruiken, zoals welke pagina's 
              het meest bezocht worden. Dit helpt ons onze site te verbeteren.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-4">2.3 Functionele cookies</h3>
            <p>
              Deze cookies onthouden je voorkeuren, zoals taal- en regioïnstellingen, zodat we je een 
              persoonlijkere ervaring kunnen bieden.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-4">2.4 Marketing cookies</h3>
            <p>
              Deze cookies worden gebruikt voor het volgen van bezoekers op meerdere websites en voor 
              het tonen van gerichte advertenties. We gebruiken deze alleen met je toestemming.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Derde partijen cookies</h2>
            <p>
              Onze website bevat links naar en componenten van derde partijen (bijv. sociale media, analytics). 
              Deze externe diensten plaatsen ook cookies op je apparaat. We hebben geen volledige controle 
              over deze cookies en raden je aan hun privacybeleid te raadplegen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Google Analytics</h2>
            <p>
              We gebruiken Google Analytics om ons website-verkeer te analyseren. Hiervoor plaatsen we cookies 
              die anonieme informatie verzamelen over je bezoek. Je kunt je tegen deze tracking verzetten via 
              je browser-instellingen of de Google Analytics opt-out browser add-on.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Je voorkeurencenter</h2>
            <p>
              Je kunt je cookie-instellingen op elk moment wijzigen via het voorkeurencenter dat in de footer 
              van onze website is geplaatst. Je kunt hier aangeven welke soorten cookies je wilt toestaan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Cookies in je browser beheren</h2>
            <p className="mb-3">Je kunt cookies via je browser beheren:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Chrome:</strong> Instellingen → Privacy en beveiliging → Cookies en sitegegevens</li>
              <li><strong>Firefox:</strong> Instellingen → Privacy en beveiliging → Cookies en sitegegevens</li>
              <li><strong>Safari:</strong> Voorkeuren → Privacy → Cookies en website-gegevens</li>
              <li><strong>Edge:</strong> Instellingen → Privacy, zoeken en services → Cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Gevolgen van het weigeren van cookies</h2>
            <p>
              Essentiële cookies zijn noodzakelijk voor de werking van onze website. Het weigeren hiervan 
              kan ervoor zorgen dat bepaalde functies niet goed werken. Het weigeren van andere cookies 
              heeft geen negatief effect op de functionaliteit, maar kan je ervaring minder persoonlijk maken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Do Not Track</h2>
            <p>
              Als je browser Do Not Track-signalen verzendt, zullen we dit respecteren en geen marketing 
              cookies plaatsen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Wijzigingen in dit beleid</h2>
            <p>
              We kunnen dit cookie beleid op elk moment bijwerken. Controleer regelmatig deze pagina 
              voor eventuele wijzigingen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Vragen?</h2>
            <p>
              Heb je vragen over ons cookie beleid? Neem contact met ons op:
            </p>
            <p className="mt-3">
              <strong>Email:</strong> infomelikas@gmail.com<br/>
              <strong>Locatie:</strong> Zoetermeer, Nederland
            </p>
          </section>
        </div>
    </div>
  );
}
