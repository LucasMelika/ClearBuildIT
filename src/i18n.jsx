import { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  nl: {
    nav: {
      items: [
        { label: 'Diensten', href: '#diensten' },
        { label: 'Proces', href: '#proces' },
        { label: 'Technologie', href: '#tech' },
        { label: 'Waarom wij', href: '#features' },
        { label: 'Over', href: '#over' },
        { label: 'FAQ', href: '#faq' },
      ],
      cta: 'Start een project',
      menuOpen: 'Menu openen',
      menuClose: 'Menu sluiten',
      drawer: {
        navigation: 'Navigatie',
        contact: 'Contact',
        email: 'E-mail',
        location: 'Locatie',
        hours: 'Uren',
        hoursValue: 'Ma–Vr · 09:00–18:00',
        cta: 'Start een project →',
      },
      brandTagL1: 'Maatwerk software',
      brandTagL2: 'Sinds 2025',
      langLabel: 'Taal',
    },
    hero: {
      titleLine1: 'Software die meegroeit,',
      titleLine2: 'gebouwd om te blijven.',
      whoWeAre: 'Wie wij zijn',
      whoWeAreText:
        'Wij bouwen maatwerk SaaS, webapps en mobiele apps voor MKB-ondernemers en start-ups die hun eigen software willen bouwen, geen standaardoplossing kopen. Helder proces, vaste prijs per fase, en code die je zelf kan onderhouden.',
      start: 'Beginnen',
      ctaPrimary: 'Start een project',
      ctaGhost: 'Bekijk ons proces',
      stats: [
        { val: 2, suffix: '', label: 'Oprichters, één team' },
        { val: 8, suffix: ' jr', label: 'Gecombineerde ervaring' },
        { val: '2025', suffix: '', label: 'Opgericht in Zoetermeer', static: true },
        { val: 100, suffix: '%', label: 'Maatwerk, geen templates' },
      ],
      emblem: {
        location: 'Zoetermeer · NL',
        statusOpen: 'Kantoor open',
        statusClosed: 'Kantoor gesloten',
      },
    },
    services: {
      sectionLabel: 'Diensten',
      titleLine1: 'Minder bureau.',
      titleLine2: 'Meer bouwen.',
      lede:
        'Vijf diensten waar wij goed in zijn. Geen reseller-constructies, geen account managers, geen template-werk dat we als maatwerk verkopen. Jij spreekt direct met de bouwers.',
      items: [
        { title: 'SaaS Platformen', desc: 'Van MVP tot enterprise schaal. Multi-tenant architectuur, subscription billing, role-based access en een codebase die meegroeit.', cta: 'Bespreek project' },
        { title: 'Web Applicaties', desc: 'Interactieve dashboards, klantportalen en workflow-tools, gebouwd op React en moderne frameworks voor snelheid en onderhoudbaarheid.', cta: 'Bespreek project' },
        { title: 'Mobiele Apps', desc: 'Native-gevoel React Native of Flutter apps, met realtime sync en offline support. iOS en Android uit één codebase.', cta: 'Bespreek project' },
        { title: 'Onderhoud & Support', desc: 'Na oplevering blijven wij staan, hosting, security-updates, monitoring en doorontwikkeling, onder een transparant SLA.', cta: 'Meer info' },
        { title: 'Code Audit', desc: 'Onafhankelijke analyse van jouw bestaande codebase op performance, beveiliging en schaalbaarheid, inclusief een concreet rapport.', cta: 'Vraag audit aan' },
      ],
      pricingLabel: 'Prijsindicatie',
      pricingNote: 'Vaste prijs per fase, geen uurtje-factuurtje. Concrete offerte na een vrijblijvend intakegesprek.',
      tiers: [
        { label: 'MVP / Compact', price: '€ 5.000', desc: 'Voor start-ups die snel willen valideren. 3–5 weken.' },
        { label: 'Professional', price: '€ 7.500', desc: 'Volledige SaaS of webapp met authenticatie en integraties. 6–8 weken.' },
        { label: 'Enterprise', price: '€ 15.000', desc: 'Complexe platformen met meerdere rollen, schalen en audits. 3+ maanden.' },
      ],
    },
    process: {
      sectionLabel: 'Proces',
      titleLine1: 'Vier fasen,',
      titleLine2: 'nul verrassingen.',
      lede: 'Van eerste gesprek tot live product werken we in vier heldere fasen, met vaste review-momenten, transparante planning en duidelijke verantwoordelijkheden, zodat jij weet waar we staan.',
      steps: [
        { num: '01', label: 'Fase één', title: 'Strategie & kennismaking', desc: 'Gratis intakegesprek om jouw idee te doorgronden. Samen stellen we doelen, scope en technische uitgangspunten vast.' },
        { num: '02', label: 'Fase twee', title: 'Plan & offerte', desc: 'Een helder projectplan met tijdlijn, deliverables en eerlijke prijs, opgedeeld in fases, zonder verrassingen achteraf.' },
        { num: '03', label: 'Fase drie', title: 'Development', desc: 'Iteratief ontwikkelen met wekelijkse updates, demo-momenten en gestructureerde feedback. Jij kijkt mee, wij leveren.' },
        { num: '04', label: 'Fase vier', title: 'Launch & onderhoud', desc: 'Live gang, volledige overdracht van code en documentatie, plus doorlopend onderhoud en doorontwikkeling.' },
      ],
      footTextL1: 'Gemiddelde oplevertijd · 6–8 weken',
      footTextL2: 'Vast aanspreekpunt · Wekelijkse demo',
      footCta: 'Plan een kennismaking',
    },
    tech: {
      sectionLabel: 'Stack',
      titleLine1: 'Beproefde technologie,',
      titleLine2: 'bewust gekozen.',
      lede: 'Geen hype-stack. Wij werken met een kern van beproefde, schaalbare technologieën, per project aangevuld met wat specifiek nodig is voor jouw use-case.',
      cols: [
        { idx: 'Cat. 01 / Frontend', title: 'Interface' },
        { idx: 'Cat. 02 / Backend', title: 'Server & data' },
        { idx: 'Cat. 03 / Cloud', title: 'Infra & DevOps' },
        { idx: 'Cat. 04 / AI & koppelingen', title: 'Integraties' },
      ],
    },
    features: {
      sectionLabel: 'Waarom wij',
      titleLine1: 'Zes redenen',
      titleLine2: 'om te blijven.',
      lede: 'Wij bouwen niet alleen software, we bouwen langdurige partnerships met ondernemers die ver willen komen. Transparant proces, kwaliteit die je doorvoelt.',
      items: [
        { title: '100% maatwerk', desc: 'Geen templates of één-maat-past-allen. Elke regel code is afgestemd op jouw processen en groeiambities.' },
        { title: 'Moderne technologie', desc: 'Beproefde stack, cloud-native architectuur en TypeScript, zodat je codebase morgen ook nog onderhoudbaar is.' },
        { title: 'Snelle oplevering', desc: 'Gemiddeld 6–8 weken van kick-off tot live product, dankzij een strak sprint-ritme en korte feedback-loops.' },
        { title: 'Persoonlijk contact', desc: 'Geen ticket-systeem, geen account manager, je spreekt direct met de mensen die je product bouwen.' },
        { title: 'Veiligheid & privacy', desc: 'AVG-compliant, encryption by default, veilige hosting en code reviews voor elke release. Standaard, geen extra.' },
        { title: 'Eerlijke prijzen', desc: 'Transparante offertes, opgedeeld in fases. Je weet precies wat je betaalt, geen verborgen kosten, geen verrassingen.' },
      ],
    },
    about: {
      sectionLabel: 'Over',
      titleLine1: 'De mensen',
      titleLine2: 'achter de code.',
      lede: 'Geen groot bureau, geen accountmanagers, geen anoniem team. Je spreekt direct met de mensen die jouw software bouwen — van eerste gesprek tot live productie.',
      p1Pre: 'Wij zijn ',
      p1A: 'Lucas Wurtz',
      p1Mid: ' en ',
      p1B: 'Raphael Eldaery',
      p1Post: ', oprichters van ClearBuildIT. In 2025 zijn we voor onszelf begonnen met één doel: maatwerk software bouwen zonder de ruis van een groot consultancy-kantoor.',
      p2Pre: 'Wat ons irriteert in de markt: bureaus die template-werk verkopen als maatwerk, facturen per kwartier, en accountmanagers die nooit een regel code hebben geschreven. Bij ClearBuildIT praat je direct met de bouwers. ',
      p2Strong: 'Dat scheelt tijd, misverstanden én geld.',
      p3: 'Gevestigd in Zoetermeer, werken we remote-first met klanten door heel Nederland. Zie je een project waar we in geloven? Dan bouwen we het, eerlijk en zonder bullshit.',
      doLabel: 'Wel doen',
      dontLabel: 'Niet doen',
      doItems: [
        'Maatwerk software van begin tot eind',
        'Helder projectplan, vaste prijs per fase',
        'Code die je zelf kan onderhouden',
        'Eerlijk advies — ook als het niet uitkomt',
      ],
      dontItems: [
        'Templates als maatwerk verkopen',
        'Uurtje-factuurtje zonder scope',
        'Werk waar ik niet in geloof',
        'Projecten met onrealistische deadlines',
      ],
      lucasRole: 'Oprichter · Developer',
      lucasBio: 'Full-stack developer met focus op mobile apps en web-applicaties. Schrijft de code, leidt de projecten.',
      raffiRole: 'Oprichter · Developer',
      raffiBio: 'Full-stack developer met focus op SaaS-platformen en backend-architectuur. Bouwt mee, denkt mee, levert mee.',
    },
    faq: {
      sectionLabel: 'FAQ',
      titleLine1: 'Veelgestelde',
      titleLine2: 'vragen.',
      lede: 'De antwoorden die onze opdrachtgevers het vaakst willen weten, voor ze met ons starten. Staat jouw vraag er niet tussen? Stuur gerust een bericht.',
      footL1: 'Geen antwoord gevonden?',
      footL2: 'We reageren doorgaans binnen 24 uur.',
      footCta: 'Stel je vraag →',
      items: [
        { question: 'Wat is de doorlooptijd van een project?', answer: 'De doorlooptijd hangt af van de omvang. Een compacte webapp neemt doorgaans 3–4 weken; een professional SaaS-build 6–8 weken; enterprise-trajecten 3–6 maanden. We werken in sprints, communiceren wekelijks en leveren tussenversies op zodat je altijd meekijkt.' },
        { question: 'Wat gebeurt er na oplevering?', answer: 'Na oplevering bieden we onderhoud, security-updates, monitoring en doorontwikkeling onder een transparant SLA. Je bent nooit gebonden, je houdt de code, documentatie en volledige eigendomsrechten.' },
        { question: 'Regelen jullie hosting en infrastructuur?', answer: 'Ja. We zetten moderne cloud-hosting op (Vercel/Netlify voor frontends, AWS/GCP/DigitalOcean voor backends) en tunen die op jouw use-case: schaalbaar, veilig en kosten-efficiënt. Setup, CI/CD en monitoring zijn standaard onderdeel.' },
        { question: 'Kan ik later aanpassingen laten doen?', answer: 'Altijd. We bieden vaste onderhoud- en uitbreidingspakketten; kleine wijzigingen gaan snel, grotere features lopen via een nieuw sprint-blok. Alle code en documentatie blijft van jou.' },
        { question: 'Hoe ziet het communicatieproces eruit?', answer: 'We starten met een intakegesprek om jouw doelen te begrijpen. Daarna wekelijkse updates via Slack/e-mail, regelmatige demo-momenten en gestructureerde feedback-loops. Kort en helder, geen ruis.' },
        { question: 'Welke technologieën gebruiken jullie?', answer: 'We werken met moderne JavaScript/TypeScript stacks: React, Next.js, Node.js en Python op de backend, PostgreSQL/MongoDB voor data, en cloud-native infra. De keuze is altijd maatwerk op basis van jouw eisen.' },
        { question: 'Is mijn data veilig?', answer: 'Security is een eerste prioriteit: encryption, secure auth, regelmatige audits en AVG-compliance. Voor gevoelige data adviseren we gehardde managed services (Auth0, Supabase) en voeren we code reviews uit op alle releases.' },
        { question: 'Wat als ik niet tevreden ben?', answer: 'In het contract staat een duidelijke acceptatieperiode, we werken door tot je tevreden bent. Voor enterprise-klanten gelden aanvullende SLA-garanties. Onze reputatie leeft van blije opdrachtgevers.' },
        { question: 'Kunnen jullie bestaande code verbeteren?', answer: 'Ja, we voeren code-audits uit, moderniseren legacy codebases en optimaliseren performance. Ideaal als je team groeit of de onderhoudbaarheid achteruit gaat. Je krijgt een helder rapport met concrete stappen.' },
        { question: 'Wat kost een project?', answer: 'Dat hangt volledig af van scope en complexiteit. Na een vrijblijvend gesprek maken we een transparante offerte op maat, opgedeeld in fases, zonder verborgen kosten of verrassingen achteraf.' },
      ],
    },
    contact: {
      sectionLabel: 'Contact',
      availability: 'Beschikbaar voor nieuwe projecten',
      titleLine1: 'Laten we',
      titleLine2: 'iets bouwen.',
      lede: 'Stuur ons je idee, vraag, of gewoon een hallo. We reageren doorgaans binnen 24 uur, meestal sneller. Geen verplichtingen, geen verkooppraatje.',
      meta: {
        email: 'E-mail',
        phone: 'Telefoon',
        location: 'Adres',
        locationValue: 'Industrieweg 14, 2712 LB Zoetermeer',
        hours: 'Uren',
        hoursValue: 'Ma–Vr · 09:00–18:00',
        response: 'Respons',
        responseValue: 'Binnen 24 uur',
      },
      formLabel: 'Projectaanvraag',
    },
    sectionWord: 'Sectie',
    form: {
      name: 'Naam',
      namePlaceholder: 'Je volledige naam',
      email: 'E-mail',
      emailPlaceholder: 'je@bedrijf.nl',
      phone: 'Telefoon',
      phonePlaceholder: '+31 6 12345678',
      projectType: 'Project type',
      projectTypes: ['SaaS Platform', 'Web Applicatie', 'Mobile App', 'Anders'],
      message: 'Bericht',
      messagePlaceholder: 'Vertel kort waar je aan wil werken — scope, timing, budget als je dat al weet.',
      submit: 'Verstuur bericht',
      submitting: 'Verzenden',
      errorRequired: 'Vul alstublieft alle verplichte velden in.',
      errorEmail: 'Voer een geldig email adres in.',
      errorRate: 'Te veel pogingen. Probeer het over een uur opnieuw.',
      errorGenericPre: 'Er ging iets mis: ',
      errorGenericFallback: 'Onbekende fout',
      errorGenericPost: '. Probeer het opnieuw of neem direct contact op via clearbuildit@gmail.com',
      errorTitle: 'Er ging iets mis.',
      successBadge: 'Transmissie ontvangen',
      successTitlePre: 'Bedankt — ',
      successTitleEm: 'we lezen mee.',
      successText: 'Je bericht staat in onze inbox. Bevestiging onderweg per e-mail; je hoort binnen 24 uur persoonlijk van ons.',
      successRef: 'Ref',
      successResp: 'Antwoord binnen',
      successRespVal: '24u',
      successLoc: 'Locatie',
      successLocVal: 'Zoetermeer · NL',
    },
    footer: {
      tagline: 'Wij ontwerpen en bouwen maatwerk SaaS-platformen, webapps en mobiele apps voor ondernemers die verder willen dan een kant-en-klare oplossing.',
      colServices: 'Diensten',
      services: ['SaaS Platformen', 'Web Applicaties', 'Mobiele Apps', 'API Development'],
      colInfo: 'Info',
      info: [
        { label: 'Privacybeleid', href: '/privacybeleid' },
        { label: 'Algemene voorwaarden', href: '/algemene-voorwaarden' },
        { label: 'Cookiebeleid', href: '/cookie-beleid' },
      ],
      colOffice: 'Kantoor',
      officeLoc: 'Adres',
      officeLocVal: 'Industrieweg 14, 2712 LB Zoetermeer',
      officeMail: 'Mail',
      officeHours: 'Uren',
      officeHoursVal: 'Ma–Vr · 09–18',
      copyright: '· KvK geregistreerd',
      made: 'Gemaakt in Zoetermeer · NL',
    },
    cookies: {
      title: '👋 We respecteren uw privacy',
      desc: 'We gebruiken cookies voor analytics en verbetering van je ervaring. Je kunt je voorkeur aanpassen.',
      rejectAll: 'Alle weigeren',
      adjust: 'Aanpassen',
      acceptAll: 'Alles accepteren',
      detailedTitle: 'Cookie Voorkeuren',
      essential: 'Essentiële Cookies',
      essentialDesc: 'Nodig voor basisfunctionaliteit van de website.',
      alwaysOn: 'Altijd ingeschakeld',
      analytics: 'Analytics & Prestaties',
      analyticsDesc: 'Helpt ons te begrijpen hoe je onze site gebruikt.',
      marketing: 'Marketing & Tracking',
      marketingDesc: 'Voor gerichte advertenties en retargeting.',
      preferences: 'Voorkeur Cookies',
      preferencesDesc: 'Voor persoonlijke website-instellingen.',
      privacyLink: 'Privacybeleid',
      cookieLink: 'Cookie Beleid',
      rejectAll2: 'Alles weigeren',
      save: 'Voorkeur opslaan',
    },
  },
  en: {
    nav: {
      items: [
        { label: 'Services', href: '#diensten' },
        { label: 'Process', href: '#proces' },
        { label: 'Technology', href: '#tech' },
        { label: 'Why us', href: '#features' },
        { label: 'About', href: '#over' },
        { label: 'FAQ', href: '#faq' },
      ],
      cta: 'Start a project',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      drawer: {
        navigation: 'Navigation',
        contact: 'Contact',
        email: 'Email',
        location: 'Location',
        hours: 'Hours',
        hoursValue: 'Mon–Fri · 09:00–18:00',
        cta: 'Start a project →',
      },
      brandTagL1: 'Custom software',
      brandTagL2: 'Since 2025',
      langLabel: 'Language',
    },
    hero: {
      titleLine1: 'Software that grows with you,',
      titleLine2: 'built to last.',
      whoWeAre: 'Who we are',
      whoWeAreText:
        'We build custom SaaS, web apps and mobile apps for SMEs and start-ups that want to own their software, not buy off-the-shelf. A clear process, fixed price per phase, and code you can maintain yourself.',
      start: 'Begin',
      ctaPrimary: 'Start a project',
      ctaGhost: 'View our process',
      stats: [
        { val: 2, suffix: '', label: 'Founders, one team' },
        { val: 8, suffix: ' yrs', label: 'Combined experience' },
        { val: '2025', suffix: '', label: 'Founded in Zoetermeer', static: true },
        { val: 100, suffix: '%', label: 'Custom, no templates' },
      ],
      emblem: {
        location: 'Zoetermeer · NL',
        statusOpen: 'Office open',
        statusClosed: 'Office closed',
      },
    },
    services: {
      sectionLabel: 'Services',
      titleLine1: 'Less agency.',
      titleLine2: 'More building.',
      lede: 'Five services we are good at. No reseller schemes, no account managers, no template work sold as bespoke. You speak directly to the builders.',
      items: [
        { title: 'SaaS Platforms', desc: 'From MVP to enterprise scale. Multi-tenant architecture, subscription billing, role-based access and a codebase that grows with you.', cta: 'Discuss project' },
        { title: 'Web Applications', desc: 'Interactive dashboards, customer portals and workflow tools, built on React and modern frameworks for speed and maintainability.', cta: 'Discuss project' },
        { title: 'Mobile Apps', desc: 'Native-feel React Native or Flutter apps, with realtime sync and offline support. iOS and Android from one codebase.', cta: 'Discuss project' },
        { title: 'Maintenance & Support', desc: 'After delivery we stay on board: hosting, security updates, monitoring and ongoing development under a transparent SLA.', cta: 'More info' },
        { title: 'Code Audit', desc: 'Independent analysis of your existing codebase on performance, security and scalability, including a concrete report.', cta: 'Request audit' },
      ],
      pricingLabel: 'Indicative pricing',
      pricingNote: 'Fixed price per phase, no hourly billing. Concrete quote after a no-obligation intake.',
      tiers: [
        { label: 'MVP / Compact', price: '€ 5,000', desc: 'For start-ups looking to validate quickly. 3–5 weeks.' },
        { label: 'Professional', price: '€ 7,500', desc: 'Full SaaS or web app with authentication and integrations. 6–8 weeks.' },
        { label: 'Enterprise', price: '€ 15,000', desc: 'Complex platforms with multiple roles, scale and audits. 3+ months.' },
      ],
    },
    process: {
      sectionLabel: 'Process',
      titleLine1: 'Four phases,',
      titleLine2: 'zero surprises.',
      lede: 'From first call to live product we work in four clear phases, with fixed review moments, transparent planning and clear ownership, so you always know where we stand.',
      steps: [
        { num: '01', label: 'Phase one', title: 'Strategy & intake', desc: 'Free intake call to understand your idea. Together we define goals, scope and technical principles.' },
        { num: '02', label: 'Phase two', title: 'Plan & quote', desc: 'A clear project plan with timeline, deliverables and a fair price, broken down by phase, with no surprises later.' },
        { num: '03', label: 'Phase three', title: 'Development', desc: 'Iterative development with weekly updates, demo moments and structured feedback. You watch along, we deliver.' },
        { num: '04', label: 'Phase four', title: 'Launch & maintenance', desc: 'Go-live, full handover of code and documentation, plus ongoing maintenance and further development.' },
      ],
      footTextL1: 'Average delivery · 6–8 weeks',
      footTextL2: 'Single point of contact · Weekly demo',
      footCta: 'Schedule an intake',
    },
    tech: {
      sectionLabel: 'Stack',
      titleLine1: 'Proven technology,',
      titleLine2: 'deliberately chosen.',
      lede: 'No hype stack. We work with a core of proven, scalable technologies, supplemented per project with whatever is specifically needed for your use case.',
      cols: [
        { idx: 'Cat. 01 / Frontend', title: 'Interface' },
        { idx: 'Cat. 02 / Backend', title: 'Server & data' },
        { idx: 'Cat. 03 / Cloud', title: 'Infra & DevOps' },
        { idx: 'Cat. 04 / AI & integrations', title: 'Integrations' },
      ],
    },
    features: {
      sectionLabel: 'Why us',
      titleLine1: 'Six reasons',
      titleLine2: 'to stay.',
      lede: 'We do not just build software, we build long-term partnerships with founders who want to go far. Transparent process, quality you can feel.',
      items: [
        { title: '100% bespoke', desc: 'No templates or one-size-fits-all. Every line of code is shaped around your processes and growth ambitions.' },
        { title: 'Modern technology', desc: 'A proven stack, cloud-native architecture and TypeScript, so your codebase is still maintainable tomorrow.' },
        { title: 'Fast delivery', desc: 'On average 6–8 weeks from kick-off to live product, thanks to a tight sprint cadence and short feedback loops.' },
        { title: 'Personal contact', desc: 'No ticketing system, no account manager — you speak directly to the people building your product.' },
        { title: 'Security & privacy', desc: 'GDPR-compliant, encryption by default, secure hosting and code reviews on every release. Standard, not extra.' },
        { title: 'Honest pricing', desc: 'Transparent quotes, broken down by phase. You know exactly what you pay, no hidden costs, no surprises.' },
      ],
    },
    about: {
      sectionLabel: 'About',
      titleLine1: 'The people',
      titleLine2: 'behind the code.',
      lede: 'No big agency, no account managers, no anonymous team. You speak directly to the people building your software — from first call to live production.',
      p1Pre: 'We are ',
      p1A: 'Lucas Wurtz',
      p1Mid: ' and ',
      p1B: 'Raphael Eldaery',
      p1Post: ', founders of ClearBuildIT. In 2025 we set out on our own with a single goal: build custom software without the noise of a large consultancy.',
      p2Pre: 'What frustrates us in this market: agencies selling template work as bespoke, billing in fifteen-minute increments, and account managers who have never written a line of code. At ClearBuildIT you talk straight to the builders. ',
      p2Strong: 'That saves time, miscommunication and money.',
      p3: 'Based in Zoetermeer, we work remote-first with clients across the Netherlands. Spot a project we can believe in? We will build it — honestly and without bullshit.',
      doLabel: 'We do',
      dontLabel: 'We don’t',
      doItems: [
        'Custom software end-to-end',
        'A clear plan, fixed price per phase',
        'Code you can maintain yourself',
        'Honest advice — even when inconvenient',
      ],
      dontItems: [
        'Sell templates as bespoke',
        'Hourly billing without a scope',
        'Work we don’t believe in',
        'Projects with unrealistic deadlines',
      ],
      lucasRole: 'Founder · Developer',
      lucasBio: 'Full-stack developer focused on mobile apps and web applications. Writes the code, leads the projects.',
      raffiRole: 'Founder · Developer',
      raffiBio: 'Full-stack developer focused on SaaS platforms and backend architecture. Builds along, thinks along, ships along.',
    },
    faq: {
      sectionLabel: 'FAQ',
      titleLine1: 'Frequently asked',
      titleLine2: 'questions.',
      lede: 'The answers our clients most often want before getting started. Question not listed? Send us a message.',
      footL1: 'No answer found?',
      footL2: 'We typically reply within 24 hours.',
      footCta: 'Ask your question →',
      items: [
        { question: 'What is the typical project timeline?', answer: 'Timeline depends on scope. A compact web app usually takes 3–4 weeks; a professional SaaS build 6–8 weeks; enterprise tracks 3–6 months. We work in sprints, communicate weekly and ship intermediate versions so you can always look along.' },
        { question: 'What happens after delivery?', answer: 'After delivery we offer maintenance, security updates, monitoring and further development under a transparent SLA. You are never locked in: you keep the code, documentation and full ownership.' },
        { question: 'Do you handle hosting and infrastructure?', answer: 'Yes. We set up modern cloud hosting (Vercel/Netlify for frontends, AWS/GCP/DigitalOcean for backends) and tune it to your use case: scalable, secure and cost-efficient. Setup, CI/CD and monitoring are standard.' },
        { question: 'Can I request changes later?', answer: 'Always. We offer fixed maintenance and extension packages; small changes are quick, larger features run via a new sprint block. All code and documentation stays yours.' },
        { question: 'How does communication work?', answer: 'We start with an intake to understand your goals. Then weekly updates via Slack/email, regular demo moments and structured feedback loops. Short and clear, no noise.' },
        { question: 'Which technologies do you use?', answer: 'We use modern JavaScript/TypeScript stacks: React, Next.js, Node.js and Python on the backend, PostgreSQL/MongoDB for data, and cloud-native infra. The choice is always tailored to your requirements.' },
        { question: 'Is my data safe?', answer: 'Security is a first-class concern: encryption, secure auth, regular audits and GDPR compliance. For sensitive data we recommend hardened managed services (Auth0, Supabase) and run code reviews on every release.' },
        { question: 'What if I am not satisfied?', answer: 'The contract includes a clear acceptance period — we keep working until you are satisfied. Enterprise clients get additional SLA guarantees. Our reputation lives on happy clients.' },
        { question: 'Can you improve existing code?', answer: 'Yes. We perform code audits, modernise legacy codebases and optimise performance. Ideal when your team is growing or maintainability is slipping. You get a clear report with concrete steps.' },
        { question: 'What does a project cost?', answer: 'It depends entirely on scope and complexity. After a no-obligation call we put together a transparent, tailored quote, broken down by phase, with no hidden costs or surprises.' },
      ],
    },
    contact: {
      sectionLabel: 'Contact',
      availability: 'Available for new projects',
      titleLine1: 'Let us',
      titleLine2: 'build something.',
      lede: 'Send us your idea, question, or just a hello. We typically reply within 24 hours, often sooner. No obligations, no sales pitch.',
      meta: {
        email: 'Email',
        phone: 'Phone',
        location: 'Address',
        locationValue: 'Industrieweg 14, 2712 LB Zoetermeer',
        hours: 'Hours',
        hoursValue: 'Mon–Fri · 09:00–18:00',
        response: 'Response',
        responseValue: 'Within 24 hours',
      },
      formLabel: 'Project request',
    },
    sectionWord: 'Section',
    form: {
      name: 'Name',
      namePlaceholder: 'Your full name',
      email: 'Email',
      emailPlaceholder: 'you@company.com',
      phone: 'Phone',
      phonePlaceholder: '+31 6 12345678',
      projectType: 'Project type',
      projectTypes: ['SaaS Platform', 'Web Application', 'Mobile App', 'Other'],
      message: 'Message',
      messagePlaceholder: 'Briefly describe what you want to work on — scope, timing, budget if you already know.',
      submit: 'Send message',
      submitting: 'Sending',
      errorRequired: 'Please fill in all required fields.',
      errorEmail: 'Please enter a valid email address.',
      errorRate: 'Too many attempts. Please try again in an hour.',
      errorGenericPre: 'Something went wrong: ',
      errorGenericFallback: 'Unknown error',
      errorGenericPost: '. Please try again or contact us directly at clearbuildit@gmail.com',
      errorTitle: 'Something went wrong.',
      successBadge: 'Transmission received',
      successTitlePre: 'Thank you — ',
      successTitleEm: 'we are reading along.',
      successText: 'Your message is in our inbox. A confirmation email is on its way; you will hear from us personally within 24 hours.',
      successRef: 'Ref',
      successResp: 'Reply within',
      successRespVal: '24h',
      successLoc: 'Location',
      successLocVal: 'Zoetermeer · NL',
    },
    footer: {
      tagline: 'We design and build custom SaaS platforms, web apps and mobile apps for entrepreneurs who want more than an off-the-shelf solution.',
      colServices: 'Services',
      services: ['SaaS Platforms', 'Web Applications', 'Mobile Apps', 'API Development'],
      colInfo: 'Info',
      info: [
        { label: 'Privacy policy', href: '/privacybeleid' },
        { label: 'Terms & conditions', href: '/algemene-voorwaarden' },
        { label: 'Cookie policy', href: '/cookie-beleid' },
      ],
      colOffice: 'Office',
      officeLoc: 'Address',
      officeLocVal: 'Industrieweg 14, 2712 LB Zoetermeer',
      officeMail: 'Mail',
      officeHours: 'Hours',
      officeHoursVal: 'Mon–Fri · 09–18',
      copyright: '· KvK registered',
      made: 'Made in Zoetermeer · NL',
    },
    cookies: {
      title: '👋 We respect your privacy',
      desc: 'We use cookies for analytics and to improve your experience. You can adjust your preferences.',
      rejectAll: 'Reject all',
      adjust: 'Adjust',
      acceptAll: 'Accept all',
      detailedTitle: 'Cookie preferences',
      essential: 'Essential cookies',
      essentialDesc: 'Required for basic site functionality.',
      alwaysOn: 'Always on',
      analytics: 'Analytics & performance',
      analyticsDesc: 'Helps us understand how you use our site.',
      marketing: 'Marketing & tracking',
      marketingDesc: 'For targeted ads and retargeting.',
      preferences: 'Preference cookies',
      preferencesDesc: 'For personalised site settings.',
      privacyLink: 'Privacy policy',
      cookieLink: 'Cookie policy',
      rejectAll2: 'Reject all',
      save: 'Save preferences',
    },
  },
};

const I18nContext = createContext({ lang: 'nl', setLang: () => {}, T: translations.nl });

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'nl';
    return localStorage.getItem('cb-lang') || 'nl';
  });
  useEffect(() => {
    localStorage.setItem('cb-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <I18nContext.Provider value={{ lang, setLang, T: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);

const FlagNL = () => (
  <svg viewBox="0 0 9 6" width="18" height="12" aria-hidden="true">
    <rect width="9" height="2" y="0" fill="#AE1C28" />
    <rect width="9" height="2" y="2" fill="#FFFFFF" />
    <rect width="9" height="2" y="4" fill="#21468B" />
  </svg>
);

const FlagUK = () => (
  <svg viewBox="0 0 60 30" width="18" height="12" aria-hidden="true">
    <clipPath id="t"><path d="M0,0 v30 h60 v-30 z" /></clipPath>
    <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
  </svg>
);

export function LangToggle({ variant = 'nav' }) {
  const { lang, setLang } = useI18n();
  return (
    <div className={`cb-lang cb-lang--${variant}`} role="group" aria-label="Language">
      <button
        type="button"
        className={`cb-lang-btn ${lang === 'nl' ? 'is-active' : ''}`}
        onClick={() => setLang('nl')}
        aria-pressed={lang === 'nl'}
        aria-label="Nederlands"
      >
        <FlagNL />
        <span>NL</span>
      </button>
      <span className="cb-lang-sep" aria-hidden="true" />
      <button
        type="button"
        className={`cb-lang-btn ${lang === 'en' ? 'is-active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        aria-label="English"
      >
        <FlagUK />
        <span>EN</span>
      </button>
      <style>{`
        .cb-lang {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 8px;
          border: 1px solid rgba(26,24,21,0.14);
          border-radius: 999px;
          background: rgba(246,242,232,0.6);
          backdrop-filter: blur(6px);
          font-family: 'Geist Mono', ui-monospace, monospace;
        }
        .cb-lang--drawer { background: transparent; border-color: rgba(26,24,21,0.14); }
        .cb-lang-sep {
          width: 1px; height: 14px;
          background: rgba(26,24,21,0.18);
        }
        .cb-lang-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 8px;
          background: transparent; border: 0; cursor: pointer;
          border-radius: 999px;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.06em;
          color: rgba(26,24,21,0.55);
          transition: all 180ms ease;
        }
        .cb-lang-btn svg {
          opacity: 0.55;
          transition: opacity 180ms ease;
          border-radius: 1px;
        }
        .cb-lang-btn.is-active { color: #1A1815; }
        .cb-lang-btn.is-active svg { opacity: 1; }
        .cb-lang-btn:hover:not(.is-active) { color: #1A1815; }
        .cb-lang-btn:hover svg { opacity: 1; }
      `}</style>
    </div>
  );
}
