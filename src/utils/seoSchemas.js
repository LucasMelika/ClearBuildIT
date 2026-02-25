// SEO & Schema.org utilities for better Google visibility

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://clearbuildit.nl",
  "name": "ClearBuildIT",
  "alternateName": "Clear Build IT",
  "description": "Maatwerk SaaS-platformen, websites, webapps en mobile apps voor groeiende bedrijven",
  "url": "https://clearbuildit.nl",
  "telephone": "+31 (0)20 123 4567",
  "email": "info@clearbuildit.nl",
  "areaServed": {
    "@type": "Country",
    "name": "Netherlands"
  },
  "image": "https://clearbuildit.nl/logo.png",
  "sameAs": [
    "https://linkedin.com/company/clearbuildit",
    "https://twitter.com/clearbuildIT",
    "https://github.com/clearbuildIT"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "NL",
    "addressLocality": "Amsterdam",
    "postalCode": "1012 NX",
    "streetAddress": "Straat 1"
  },
  "serviceType": [
    "SaaS Development",
    "Web Application Development",
    "Mobile App Development",
    "Custom Software Development"
  ],
  "priceRange": "$$-$$$"
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": {
    "@type": "LocalBusiness",
    "name": "ClearBuildIT",
    "url": "https://clearbuildit.nl"
  },
  "hasOfferingDetails": [
    {
      "@type": "Service",
      "name": "SaaS Platform Development",
      "description": "Maatwerk schaalbare SaaS-platformen gebouwd met moderne technologie",
      "url": "https://clearbuildit.nl#diensten",
      "image": "https://clearbuildit.nl/saas-icon.png",
      "areaServed": "NL"
    },
    {
      "@type": "Service",
      "name": "Web Application Development",
      "description": "Snelle, veilige en gebruiksvriendelijke webapplicaties",
      "url": "https://clearbuildit.nl#diensten",
      "image": "https://clearbuildit.nl/webapp-icon.png",
      "areaServed": "NL"
    },
    {
      "@type": "Service",
      "name": "Mobile App Development",
      "description": "Native en cross-platform mobile applicaties iOS en Android",
      "url": "https://clearbuildit.nl#diensten",
      "image": "https://clearbuildit.nl/mobile-icon.png",
      "areaServed": "NL"
    }
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://clearbuildit.nl",
  "name": "ClearBuildIT",
  "description": "Maatwerk SaaS-platformen, websites, webapps en mobile apps",
  "publisher": {
    "@type": "Organization",
    "name": "ClearBuildIT",
    "url": "https://clearbuildit.nl"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://clearbuildit.nl?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat kost een SaaS-platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De kosten variëren afhankelijk van complexiteit en scope. Wij bieden MVP's voor startups tot enterprise oplossingen."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe lang duurt het desenvolvement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dit hangt af van uw requirements. Gemiddeld duren projecten van 3-6 maanden."
      }
    }
  ]
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const seoMeta = {
  home: {
    title: "ClearBuildIT · Maatwerk SaaS & Apps voor Groeiende Bedrijven",
    description: "ClearBuildIT bouwt schaalbare SaaS-platformen, webapps en mobile apps. Van MVP tot enterprise oplossingen. Snel, veilig, en met persoonlijke aandacht.",
    keywords: "SaaS ontwikkeling, webapp, mobile app, maatwerk software, Nederland, Amsterdam",
    ogTitle: "ClearBuildIT · Maatwerk SaaS & Apps",
    ogDescription: "Schaalbare digitale oplossingen voor groeiende bedrijven",
    ogImage: "https://clearbuildit.nl/og-image.png",
    canonical: "https://clearbuildit.nl"
  },
  notFound: {
    robots: "noindex, nofollow"
  }
};
