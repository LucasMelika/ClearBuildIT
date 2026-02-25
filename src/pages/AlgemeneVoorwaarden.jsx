import React from 'react';

export default function AlgemeneVoorwaarden() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Algemene voorwaarden</h1>
        <p className="text-neutral-600 mb-8">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>

        <div className="space-y-8 text-neutral-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Definiëring en toepassingsgebied</h2>
            <p className="mb-3">
              Deze algemene voorwaarden zijn van toepassing op:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Alle diensten aangeboden door ClearBuildIT (hierna: "Diensten")</li>
              <li>Alle contracten tussen ClearBuildIT en klanten (hierna: "klant" of "je")</li>
              <li>Het gebruik van onze website</li>
            </ul>
            <p className="mt-3">
              Door onze diensten te gebruiken of een contract af te sluiten, aanvaard je volledige binding aan deze voorwaarden. 
              Afwijkende voorwaarden zijn alleen geldig met schriftelijke toestemming van ClearBuildIT.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Diensten</h2>
            <p>
              ClearBuildIT biedt software development diensten aan, waaronder maar niet beperkt tot:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>SaaS Platform Development</li>
              <li>Web Application Development</li>
              <li>Mobile App Development</li>
              <li>API Development & Integration</li>
              <li>Technical Support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Contractvorming</h2>
            <p className="mb-3">
              <strong>3.1</strong> Alle aanbiedingen van ClearBuildIT zijn informatief tenzij andersluidend vermeld. 
              Offerten zijn niet bindend en kunnen gedurende 14 dagen worden ingetrokken.
            </p>
            <p className="mb-3">
              <strong>3.2</strong> Een contract ontstaat door ondertekening van beide partijen. ClearBuildIT kan aanbiedingen 
              weigeren zonder opgave van redenen.
            </p>
            <p>
              <strong>3.3</strong> Alle afspraken moeten schriftelijk (email, PDF, of formeel contract) worden bevestigd. 
              Mondelinge afspraken zijn niet bindend.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Betaling</h2>
            <p className="mb-3">
              <strong>4.1 Betalingstermijnen</strong><br/>
              Facturen moeten binnen 30 dagen na factuurdatum worden betaald, tenzij anders schriftelijk overeengekomen.
            </p>
            <p className="mb-3">
              <strong>4.2 Rente en incasso</strong><br/>
              Bij niet-betaling hebben we recht op:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Wettelijke rente conform artikel 6:233j Burgerlijk Wetboek (momenteel 8%)</li>
              <li>Vergoeding incassokosten conform artikel 6:94 Burgerlijk Wetboek</li>
              <li>Beëindiging van diensten en opschorting van toekomstige werkzaamheden</li>
            </ul>
            <p className="mt-3">
              <strong>4.3 Betalingsmogelijkheden</strong><br/>
              Betaling moet gedaan worden naar de in de factuur opgegeven rekening, tenzij anders afgesproken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Intellectueel eigendom</h2>
            <p className="mb-3">
              <strong>5.1</strong> Alle software, code, designs, documentatie, en intellectueel eigendom dat door 
              ClearBuildIT wordt gemaakt blijven eigendom van ClearBuildIT, tenzij anders schriftelijk afgesproken.
            </p>
            <p className="mb-3">
              <strong>5.2</strong> De klant ontvangt een niet-exclusieve, niet-overdraagbare licentie om de gemaakte 
              code en materialen te gebruiken voor het overeengekomen doel.
            </p>
            <p className="mb-3">
              <strong>5.3</strong> Indien gewerkt is met bestaande third-party libraries of frameworks, gelden de licenties 
              hiervan (meestal open source). De klant aanvaardt deze licentievoorwaarden.
            </p>
            <p>
              <strong>5.4</strong> ClearBuildIT mag afgemaakte projecten in haar portfolio tonen en refereren naar klanten 
              (tenzij anders afgesproken).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Aansprakelijkheid en garanties</h2>
            <p className="mb-3">
              <strong>6.1 Beperkte aansprakelijkheid</strong><br/>
              De aansprakelijkheid van ClearBuildIT is beperkt tot het bedrag dat je hebt betaald voor de diensten 
              in kwestie, maximaal €50.000 per incident.
            </p>
            <p className="mb-3">
              <strong>6.2 Uitgesloten aansprakelijkheid</strong><br/>
              ClearBuildIT is NIET aansprakelijk voor:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Indirecte schade (winstderving, reputatieschade, gegevensverlies)</li>
              <li>Schadeclaims meer dan 3 maanden na oplevering</li>
              <li>Schade door onvoldoende security measures van de klant</li>
              <li>Server downtime van derden (hosting providers, etc.)</li>
              <li>Ongewenste bijeffecten van software-updates</li>
            </ul>
            <p className="mt-3">
              <strong>6.3 Garanties</strong><br/>
              ClearBuildIT garandeert:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Professionele uitvoering conform industriestandaarden en best practices</li>
              <li>Bug fixes gedurende 30 dagen na oplevering</li>
              <li>Code zal functioneren conform de overeengekomen specificaties</li>
            </ul>
            <p className="mt-3">
              <strong>6.4 Geen garantie voor:</strong> Serverbescherming tegen hackers, derde-party services, 
              browser compatibility met zeer oude versies, of perfecte performance in alle omstandigheden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Vertrouwelijkheid en NDA</h2>
            <p>
              Beide partijen verplichten zich tot vertrouwelijkheid van alle gevoelige informatie. Deze verplichting 
              blijft gelden voor 3 jaar na beëindiging van het contract. Uitzonderingen: informatie die publiek beschikbaar 
              is of wettelijk moet worden openbaargemaaktvolgens gerechtelijke uitspraken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Opschorting, wijziging en beëindiging</h2>
            <p className="mb-3">
              <strong>8.1 Beëindiging door ClearBuildIT</strong><br/>
              ClearBuildIT mag het contract opschorten of beëindigen met 14 dagen schriftelijke opzegging als:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>De klant meer dan 30 dagen achterstallig is met betaling</li>
              <li>De klant deze voorwaarden schendt</li>
              <li>De klant onwettelijke activiteiten ondersteunt</li>
            </ul>
            <p className="mt-3">
              <strong>8.2 Wijzigingen van scope</strong><br/>
              Wijzigingen in project scope moeten schriftelijk worden afgesproken en kunnen leiden tot aanpassing 
              van timing en kosten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Onderhoud en support</h2>
            <p>
              Onderhoud, hosting en support na 30 dagen van oplevering zijn apart diensten en worden apart berekend. 
              ClearBuildIT is niet verplicht onderhoud te leveren zonder apart contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Gegevens en security</h2>
            <p className="mb-3">
              <strong>10.1</strong> ClearBuildIT implementeert standaard veiligheidspraktijken, maar kan niet garanderen 
              dat software 100% secure is tegen alle mogelijke aanvallen.
            </p>
            <p>
              <strong>10.2</strong> De klant is zelf verantwoordelijk voor back-ups van haar gegevens. ClearBuildIT 
              is niet aansprakelijk voor gegevensverlies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">11. Duur en beëindiging</h2>
            <p className="mb-3">
              Het contract gaat in op ondertekening en duurt tot voltooiing van de diensten, tenzij anders bepaald.
            </p>
            <p>
              Na beëindiging: ClearBuildIT zal broncode en materialen overhandigen (als afgesproken) en 
              alle vertrouwelijke informatie verwijderen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">12. Toepasselijk recht en geschillen</h2>
            <p className="mb-3">
              <strong>12.1</strong> Deze voorwaarden worden beheerst door Nederlands recht en de wetten van Nederland.
            </p>
            <p className="mb-3">
              <strong>12.2</strong> Geschillen zullen eerst in der minne worden opgelost door directe communicatie.
            </p>
            <p>
              <strong>12.3</strong> Indien geen minnelijke schikking mogelijk is, worden geschillen voorgelegd aan 
              de bevoegde rechtbank te Rotterdam, Nederland.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">13. Wijzigingen in deze voorwaarden</h2>
            <p>
              ClearBuildIT behoudt zich het recht voor om deze voorwaarden op elk moment te wijzigen. 
              Wijzigingen worden van kracht na publicatie. Voortgezette samenwerking betekent acceptatie van de nieuwe voorwaarden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">14. Contact en klachten</h2>
            <p>
              Voor vragen of klachten:
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
