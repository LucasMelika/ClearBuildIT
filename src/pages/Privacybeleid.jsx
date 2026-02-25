import React from 'react';

export default function Privacybeleid() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Privacybeleid</h1>
        <p className="text-neutral-600 mb-8">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>

        <div className="space-y-8 text-neutral-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Verantwoordelijke voor gegevensverwerking</h2>
            <p>
              ClearBuildIT, gevestigd te Zoetermeer, Nederland (hierna: "we", "ons" of "wij") is verantwoordelijk voor de verwerking van je persoonlijke gegevens conform de Algemene Verordening Gegevensbescherming (AVG) en de Wet Bescherming Persoonsgegevens.
            </p>
            <p className="mt-3">
              <strong>Contactgegevens:</strong><br/>
              Email: infomelikas@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Welke gegevens we verzamelen en waarom</h2>
            <p className="mb-3"><strong>2.1 Contactgegevens</strong></p>
            <p className="mb-4">We verzamelen je naam, e-mailadres, telefoonnummer en bedrijfsgegevens wanneer je contact met ons opneemt via ons contactformulier. Rechtsbasis: Gerechtvaardigde belang (afdeling relatie, offertes opstellen).</p>
            
            <p className="mb-3"><strong>2.2 Projectinformatie</strong></p>
            <p className="mb-4">We verzamelen informatie over je projecten, budget, en deadline voor het leveren van diensten. Rechtsbasis: Contractuele verplichting.</p>
            
            <p className="mb-3"><strong>2.3 Technische gegevens</strong></p>
            <p className="mb-4">Via Google Analytics en cookies verzamelen we IP-adres, browsertype, pagina's die je bezoekt, en verwijzingsgegevens voor websiteoptimalisatie. Rechtsbasis: Toestemming (via cookie consent).</p>
            
            <p className="mb-3"><strong>2.4 Communicatiegegevens</strong></p>
            <p>We kunnen e-mailcommunicatie archiveren voor administratieve doeleinden. Rechtsbasis: Contractuele verplichting en wettelijke verplichtingen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Hoe we je gegevens gebruiken</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Communicatie en beantwoording van verzoeken</li>
              <li>Levering van diensten en ondersteuning</li>
              <li>Verzending van facturatie en administratieve documenten</li>
              <li>Analyse en verbetering van onze website</li>
              <li>Naleving van wettelijke verplichtingen (belasting, handelsregistratie)</li>
              <li>Marketing (uitsluitend met je expliciete toestemming)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Bewaartermijnen</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contactgegevens:</strong> Zolang nodig voor het betreffende doel, maximaal 1 jaar na laatste contact</li>
              <li><strong>Contractgegevens:</strong> 7 jaar conform wettelijke vereisten (Burgerlijk Wetboek)</li>
              <li><strong>Technische gegevens (Google Analytics):</strong> 14 maanden (standaard instellingen)</li>
              <li><strong>Cookies:</strong> Afhankelijk van type; maximaal 2 jaar</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Gegevensbescherming en veiligheid</h2>
            <p>
              We implementeren technische en organisatorische maatregelen om je gegevens te beschermen tegen:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Versleuteling van gevoelige communicatie (SSL/TLS)</li>
              <li>Veilige servers met firewall-bescherming</li>
              <li>Regelmatige veiligheidsupdates en patches</li>
              <li>Beperkte toegang tot gegevens (need-to-know basis)</li>
              <li>Niet-disclosure agreements met medewerkers</li>
            </ul>
            <p className="mt-3">
              In geval van een dataleak zullen we je informeren conform AVG artikel 33-34.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Delen van gegevens met derden</h2>
            <p>
              We delen je gegevens uitsluitend met:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Dienstverleners:</strong> Hostingproviders, e-mailservices (alleen wat nodig is)</li>
              <li><strong>Wettelijke verplichting:</strong> Wanneer vereist door wet (belastingdienst, gerechtshof)</li>
              <li><strong>Met toestemming:</strong> Uitsluitend als je daar expliciet mee akkoord gaat</li>
            </ul>
            <p className="mt-3">
              We zenden je gegevens NIET naar landen buiten de EU/EEA zonder geldige waarborgen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Je rechten onder de AVG</h2>
            <p>Je hebt recht op:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Recht op inzage:</strong> Je kan opvragen welke gegevens we hebben</li>
              <li><strong>Recht op rectificatie:</strong> Onjuiste gegevens laten corrigeren</li>
              <li><strong>Recht op vergetelheid:</strong> Je gegevens laten verwijderen (onder bepaalde voorwaarden)</li>
              <li><strong>Recht op beperking:</strong> De verwerking beperken (bijv. geen marketing)</li>
              <li><strong>Recht op gegevensportabiliteit:</strong> Je gegevens in machineleesbaar format ontvangen</li>
              <li><strong>Recht bezwaar te maken:</strong> Tegen bepaalde verwerkingen</li>
              <li><strong>Recht niet onderworpen te zijn:</strong> Aan geautomatiseerde besluitvorming</li>
            </ul>
            <p className="mt-3">
              Deze aanvragen kun je indienen bij: infomelikas@gmail.com. We zullen reageren binnen 30 dagen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Cookies</h2>
            <p>
              We gebruiken cookies conform de Nederlandse Cookiewet. Zie ons <a href="/cookie-beleid" className="text-green-600 hover:text-green-700">Cookiebeleid</a> voor volledige informatie. 
              Je kan je cookie-voorkeuren op elk moment wijzigen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Marketing en communicatie</h2>
            <p>
              We zullen je alleen marketing-emails sturen als je daar expliciet toestemming voor hebt gegeven. 
              Je kan je altijd afmelden via de "unsubscribe" link in onze e-mails.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Links naar externe sites</h2>
            <p>
              Onze website bevat links naar externe websites. We zijn niet verantwoordelijk voor het privacybeleid 
              van deze externe sites. We raden je aan hun privacybeleid door te lezen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">11. Wijzigingen in dit beleid</h2>
            <p>
              We kunnen dit privacybeleid op elk moment wijzigen. Wijzigingen worden van kracht na publicatie. 
              Wezenlijke wijzigingen zullen je via e-mail worden meegedeeld.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">12. Contactgegevens en klachten</h2>
            <p className="mb-3">
              Voor vragen over dit privacybeleid:
            </p>
            <p className="mb-4">
              <strong>Email:</strong> infomelikas@gmail.com<br/>
              <strong>Locatie:</strong> Zoetermeer, Nederland
            </p>
            <p>
              Je hebt ook het recht een klacht in te dienen bij de <strong>Autoriteit Persoonsgegevens (AP)</strong> als je denkt 
              dat we je rechten schenden. Website: www.autoriteitpersoonsgegevens.nl
            </p>
          </section>
        </div>
    </div>
  );
}
