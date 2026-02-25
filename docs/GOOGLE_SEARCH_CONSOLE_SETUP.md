# 🔍 Google Search Console Setup Guide

**Doel**: Map jouw website aan Google zodat je zichtbaarheid kunt monitoren en verbeteren.

---

## ✅ Stap 1: Open Google Search Console

1. Ga naar [Google Search Console](https://search.google.com/search-console)
2. Log in met je Google-account
3. Klik op **"URL-prefix"** en voer in: `https://clearbuildit.nl`

---

## ✅ Stap 2: Verifieer je eigenaarschap (Domain-proof)

Google moet zeker weten dat jij eigenaar van de website bent. Kies één van deze methoden:

### **Methode A: DNS-record (AANBEVOLEN)**
1. Google geeft je een DNS TXT-record
2. Log in bij je domeinregistrar (GoDaddy, Namecheap, etc.)
3. Voeg het TXT-record toe onder DNS/CNAME records
4. Wacht 5-10 minuten en klik "Verifiëren" in Google Search Console

### **Methode B: HTML-bestand**
1. Download het HTML-bestand van Google
2. Upload het naar `/public/` folder in jouw project
3. Google verifieert automatisch via `https://clearbuildit.nl/google-verification-file.html`

### **Methode C: Google Analytics**
1. Verbind je existing Google Analytics account
2. Google verificeert je automatisch

---

## ✅ Stap 3: Sitemap Submitten

Dit laat Google precies weten welke pagina's indexeren moet:

1. Ga naar **Sitemaps** in Search Console
2. Voer in: `https://clearbuildit.nl/sitemap.xml`
3. Klik **Submitten**

Google zal nu alle pagina's scannen:
- Homepage
- Demo pagina's
- Legal pagina's (#diensten, #proces, etc. via anchor links)

---

## ✅ Stap 4: Controleer Coverage (Indexing)

Dit laat zien welke pagina's Google heeft geïndexeerd:

1. Ga naar **Coverage** in Search Console
2. Je zult zien:
   - ✅ **Valid** pagina's (goed!)
   - ⚠️ **Excluded** pagina's (anchor links zijn normaal)
   - ❌ **Error** pagina's (moet je fixen)

---

## ✅ Stap 5: Monitor Search Performance

Dit is de goudmijn - hier zie je wat Google jou ziet:

1. Ga naar **Performance**
2. Je ziet:
   - **Total Clicks**: Hoe vaak mensen op jou klikken in zoekresultaten
   - **Total Impressions**: Hoe vaak je verschijnt in zoekresultaten
   - **Average CTR**: Hoe aantrekkelijk je titel/description is
   - **Average Position**: Op welke plaats je gemiddeld staat

### Tips om te verbeteren:
- **Lage CTR?** → Zet betere titles en descriptions
- **Hoge position maar lage clicks?** → Verbeter je snippet
- **Geen impressions?** → Wacht 2-4 weken voor data

---

## ✅ Stap 6: Fix Problemen

Als je errors ziet in Coverage:

1. **Mobile Usability errors** → Check of site goed werkt op mobiel
2. **Crawl errors** → Check of alle links werken
3. **Structured data errors** → Valideer je JSON-LD schema's

**Validator tool**: [Google Rich Results Test](https://search.google.com/test/rich-results)
Controleer hier of je structured data correct is.

---

## 📊 Metrices om te volgen

| Metriek | Doel | Actie |
|---------|------|-------|
| **Indexing** | 100% van pagina's | Monitor Coverage |
| **Impressions** | Groeiend | Optimaliseer keywords |
| **CTR** | >3% | Verbeter titles/descriptions |
| **Average Position** | <5 voor main keywords | Voeg content toe |
| **Crawl Budget** | 80%+ valid | Fix broken links |

---

## 🎯 Volgende Stappen (Marketing)

Nu dat Google jou heeft gecrawld, zijn dit de volgende stappen:

1. **Content Marketing**
   - Schrijf blog posts over SaaS, webapps, mobiele apps
   - Target long-tail keywords ("SaaS platform development Netherlands")
   - Doel: 20+ artikelen = meer ranking chances

2. **Backlinks Bouwen**
   - Contact tech blogs en vraag om mention
   - Plaats guest posts op dev/startup communities
   - Voeg je site in tech directories

3. **Local SEO**
   - Maak Google My Business profiel
   - Verzamel reviews van klanten
   - Vermeld lokatie in meta tags (al gedaan!)

4. **Technical SEO - Ongoing**
   - Monitor Core Web Vitals
   - Check voor 404 errors
   - Zorg voor snelle load times (je hebt 1.5s - goed!)

---

## 📈 Timeline Verwachtingen

| Periode | Wat Gebeurt | Actie |
|---------|------------|-------|
| **Week 1-2** | Google crawlt je site | Monitor Coverage status |
| **Week 2-4** | Lage traffic, veel impressions | Monitor clicks in Performance |
| **Month 1-3** | Traffic groeit voor branded terms | Schrijf blog posts |
| **Month 3-6** | Rankings voor long-tail keywords | Voeg meer content toe |
| **Month 6+** | Constante groei & refining | SEO optimization |

---

## 🔧 Tech Check (Reeds gedaan ✓)

Hier's wat al opgezet is:

- ✅ **Sitemap.xml** → `/public/sitemap.xml`
- ✅ **Robots.txt** → `/public/robots.txt`
- ✅ **Structured Data (JSON-LD)**
  - Organization schema
  - Services schema  
  - Website schema
  - Breadcrumb schema
- ✅ **Meta Tags**
  - Title, Description
  - Open Graph
  - Twitter Cards
- ✅ **Mobile Responsive** → Works on all devices
- ✅ **Fast Loading** → 1.5s build time

---

## ❓ FAQ

**P: Hoe lang duurt het tot ik rankings zie?**
A: 1-3 maanden voor eerste visibility. 3-6 maanden voor significant traffic.

**P: Waarom zijn mijn anchor links niet in de sitemap?**
A: Anchor links (#diensten) zijn normaal - ze zijn onderdeel van homepage. Google begrijpt ze.

**P: Hoe weet Google mijn schema's zijn correct?**
A: Test ze hier: https://search.google.com/test/rich-results

**P: Moet ik betalen voor betere rankings?**
A: Nee. Google ranking is organisch. Paid search (Google Ads) is optioneel.

**P: Waarom zie ik geen zoek traffic na 2 weken?**
A: Normaal. Wacht tot week 3-4. Voeg ondertussen meer content toe.

---

## 🚀 Extra Boost Tips

1. **Speed Matters**
   - Check performance: https://pagespeed.web.dev
   - Jij zit goed (1.5s)

2. **Mobile First**
   - Google ranks mobile version als primary
   - Jij hebt responsive design ✓

3. **E-A-T Signals**
   - About page
   - Team/credentials  
   - Customer testimonials
   - Contact page (al hebben!)

4. **Fresh Content**
   - Blog posts help Google
   - Wij hebben BlogSection toegevoegd ✓
   - Voeg maandelijks artikelen toe

---

## 📞 Questions?

Veel succes met je SEO! 🎉

Als je vragen hebt of issues ziet in Search Console, neem contact op.

**Email**: info@clearbuildit.nl
