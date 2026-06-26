export interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  jsonLd: object | object[];
}

const BASE_URL = "https://homecinemagroup.com";
const OG_IMAGE = `${BASE_URL}/opengraph.jpg`;

const BUSINESS_CORE = {
  name: "Home Cinema Group",
  url: BASE_URL,
  telephone: "+17036251714",
  email: "info@homecinemagroup.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1800 Tysons Blvd, Suite 300",
    addressLocality: "McLean",
    addressRegion: "VA",
    postalCode: "22102",
    addressCountry: "US",
  },
};

export const ROUTE_METADATA: Record<string, RouteMeta> = {
  "/": {
    title: "Home Cinema Group | Theater Design & Build",
    description:
      "Home Cinema Group designs and builds bespoke luxury home theaters across Virginia, DC, and Maryland. Award-winning cinematic spaces since 2005. CEDIA-certified.",
    canonical: BASE_URL + "/",
    ogImage: OG_IMAGE,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      ...BUSINESS_CORE,
      alternateName: "Home Cinema Group — a Lifestyle Solution Company",
      description:
        "Luxury home theater design and construction serving Virginia, DC, Maryland, and beyond since 2005.",
      foundingDate: "2005",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 38.9339,
        longitude: -77.1773,
      },
      areaServed: [
        { "@type": "State", name: "Virginia" },
        { "@type": "State", name: "Maryland" },
        { "@type": "City", name: "Washington, DC" },
      ],
      priceRange: "$$$",
      openingHours: "Mo-Fr 08:00-18:00",
      sameAs: [
        "https://www.facebook.com/homecinemagroup",
        "https://www.instagram.com/homecinemagroup",
        "https://www.linkedin.com/company/homecinemagroup",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Home Theater Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Theater Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Construction" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Projection & Display" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cinema Audio" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cinema Lighting" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seating & Interiors" } },
        ],
      },
    },
  },

  "/services": {
    title: "Home Theater Design & Construction Services | Home Cinema Group",
    description:
      "From custom theater design and projection systems to cinema audio, lighting, and seating — explore our full suite of luxury home theater services.",
    canonical: BASE_URL + "/services",
    ogImage: OG_IMAGE,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": BASE_URL + "/services",
        name: "Home Theater Services",
        description:
          "Luxury home theater design and construction services by Home Cinema Group.",
        url: BASE_URL + "/services",
        isPartOf: { "@type": "WebSite", url: BASE_URL },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "Services", item: BASE_URL + "/services" },
          ],
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        name: "Home Theater Services by Home Cinema Group",
        provider: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dedicated Theaters",
              description:
                "Purpose-built, fully dedicated home theater rooms designed from the ground up for the ultimate cinematic experience.",
              provider: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Media Rooms & TV Walls",
              description:
                "Sophisticated media rooms and dramatic TV wall installations for spaces that serve double duty.",
              provider: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Theater Design & Consultation",
              description:
                "Complete architectural drawings, 3D renderings, and detailed specifications before a single nail is driven.",
              provider: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Lighting Design & Control",
              description:
                "Dedicated lighting systems including aisle lighting, bias lighting, LED specialty solutions, and scene control.",
              provider: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Acoustical Fabric Treatment",
              description:
                "Custom fabric-wrapped panels that control reflections, eliminate flutter echo, and add a refined aesthetic.",
              provider: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sound Isolation",
              description:
                "Wall systems using Green Glue, resilient channels, and ISO clips to create a room within a room.",
              provider: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Architectural Millwork & Elements",
              description:
                "Custom cabinetry, equipment bays, column surrounds, coffered ceilings, and architectural elements.",
              provider: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Star Panel Ceiling",
              description:
                "Fiber optic star ceiling panels with adjustable star density, shooting star effects, and integrated color options.",
              provider: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
            },
          },
        ],
      },
    ],
  },

  "/projects": {
    title: "Home Theater Portfolio & Projects | Home Cinema Group",
    description:
      "Browse our portfolio of luxury home theater builds across Virginia, DC, and Maryland — from dedicated cinemas to immersive media rooms.",
    canonical: BASE_URL + "/projects",
    ogImage: OG_IMAGE,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": BASE_URL + "/projects",
        name: "Home Theater Portfolio",
        description:
          "Portfolio of luxury home theater design and construction projects by Home Cinema Group.",
        url: BASE_URL + "/projects",
        isPartOf: { "@type": "WebSite", url: BASE_URL },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "Projects", item: BASE_URL + "/projects" },
          ],
        },
        creator: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Home Theater Portfolio — Home Cinema Group",
        description: "Award-winning luxury home theater projects across Virginia, DC, and Maryland.",
        numberOfItems: 10,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "The Next Galaxy Theater — Aldie, VA",
            description:
              "Willowsford modern theater with blue LED cove, star ceiling, and velvet screen wall.",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Nautilus Theater — Warrenton, VA",
            description:
              "CE Pro 2024 Gold Award winner themed after 20,000 Leagues Under the Sea.",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Family Oasis Theater — Great Falls, VA",
            description:
              "CE Pro 2025 Silver Award winner with Fortress luxury seating and 150-inch screen.",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Blade Runner Theater — Vienna, VA",
            description:
              "CE Pro 2025 Silver Award winner inspired by the iconic Frank Lloyd Wright Ennis tile.",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Golden Touch Home Theater — McLean, VA",
            description:
              "Luxury theater with star panel ceiling, marble bar, and candy cabinet detail.",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "The Lighthouse Film Theater — Reston, VA",
            description:
              "Modern luxury dedicated theater with dramatic column lighting and wet bar.",
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "Riverstone Cinema — Nokesville, VA",
            description: "Contemporary media room with custom millwork and integrated AV.",
          },
          {
            "@type": "ListItem",
            position: 8,
            name: "The Cavalier Theater — Aldie, VA",
            description:
              "CE Pro 2019 Bronze Award winner built for a UVA Cavaliers fan with 133-inch screen.",
          },
          {
            "@type": "ListItem",
            position: 9,
            name: "Modern Fusion Home Theater — Nokesville, VA",
            description:
              "EH 2018 Bronze Award winner with 160-inch screen beneath a three-car garage.",
          },
          {
            "@type": "ListItem",
            position: 10,
            name: "NEON Home Theater — Bristow, VA",
            description:
              "EH 2017 Silver Award winner with LIFX color LED panels and Dolby Atmos audio.",
          },
        ],
      },
    ],
  },

  "/awards": {
    title: "Awards & Press | Home Cinema Group",
    description:
      "Home Cinema Group's award-winning home theater projects — recognized by Electronic House, CE Pro, CEDIA, and Custom Home magazine.",
    canonical: BASE_URL + "/awards",
    ogImage: OG_IMAGE,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": BASE_URL + "/awards",
        name: "Awards & Press",
        description:
          "Award history and press coverage for Home Cinema Group luxury home theater projects.",
        url: BASE_URL + "/awards",
        isPartOf: { "@type": "WebSite", url: BASE_URL },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "Awards & Press", item: BASE_URL + "/awards" },
          ],
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Home Cinema Group — Industry Awards",
        description:
          "CE Pro and Electronic House Home of the Year awards earned by Home Cinema Group.",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "CreativeWork",
              name: "Blade Runner Theater — CE Pro Home of the Year 2025 Silver",
              description:
                "CE Pro 2025 Home of the Year Silver Winner. Featured in CE Pro November/December 2025.",
              creator: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
              award: "CE Pro Home of the Year — Silver Winner 2025",
              datePublished: "2025",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "CreativeWork",
              name: "Family Oasis Theater — CE Pro Home of the Year 2025 Silver",
              description:
                "CE Pro 2025 Home of the Year Silver Winner. Featured in CE Pro 2025.",
              creator: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
              award: "CE Pro Home of the Year — Silver Winner 2025",
              datePublished: "2025",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "CreativeWork",
              name: "Nautilus Theater — CE Pro Home of the Year 2024 Gold",
              description: "CE Pro 2024 Home of the Year Gold Winner.",
              creator: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
              award: "CE Pro Home of the Year — Gold Winner 2024",
              datePublished: "2024",
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@type": "CreativeWork",
              name: "Rustic Colors Theater — CE Pro Home of the Year 2022 Silver",
              description: "CE Pro 2022 Home of the Year Silver Winner.",
              creator: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
              award: "CE Pro Home of the Year — Silver Winner 2022",
              datePublished: "2022",
            },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@type": "CreativeWork",
              name: "Simply Slim Theater — CE Pro Home of the Year 2022 Bronze",
              description: "CE Pro 2022 Home of the Year Bronze Winner.",
              creator: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
              award: "CE Pro Home of the Year — Bronze Winner 2022",
              datePublished: "2022",
            },
          },
          {
            "@type": "ListItem",
            position: 6,
            item: {
              "@type": "CreativeWork",
              name: "Modern Flair Theater — CE Pro Home of the Year 2020 Bronze",
              description: "CE Pro 2020 Home of the Year Bronze Winner.",
              creator: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
              award: "CE Pro Home of the Year — Bronze Winner 2020",
              datePublished: "2020",
            },
          },
          {
            "@type": "ListItem",
            position: 7,
            item: {
              "@type": "CreativeWork",
              name: "The Cavalier Theater — CE Pro Best Project 2019 Bronze",
              description: "CE Pro 2019 Best Project Award Bronze Winner.",
              creator: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
              award: "CE Pro Best Project Award — Bronze 2019",
              datePublished: "2019",
            },
          },
          {
            "@type": "ListItem",
            position: 8,
            item: {
              "@type": "CreativeWork",
              name: "Modern Fusion Theater — EH Home of the Year 2018 Bronze",
              description: "Electronic House 2018 Home of the Year Bronze Winner.",
              creator: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
              award: "Electronic House Home of the Year — Bronze Winner 2018",
              datePublished: "2018",
            },
          },
          {
            "@type": "ListItem",
            position: 9,
            item: {
              "@type": "CreativeWork",
              name: "NEON Home Theater — EH Home of the Year 2017 Silver",
              description: "Electronic House 2017 Home of the Year Silver Winner.",
              creator: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
              award: "Electronic House Home of the Year — Silver Winner 2017",
              datePublished: "2017",
            },
          },
        ],
      },
    ],
  },

  "/about": {
    title: "About Home Cinema Group — Luxury Home Theater Specialists Since 2005",
    description:
      "Since 2005, Home Cinema Group has been designing and building extraordinary home theaters across Virginia, DC, and Maryland. CEDIA-certified, award-winning craftsmanship.",
    canonical: BASE_URL + "/about",
    ogImage: OG_IMAGE,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": BASE_URL + "/about",
        name: "About Home Cinema Group",
        description:
          "Luxury home theater design and construction specialists serving Virginia, DC, and Maryland since 2005.",
        url: BASE_URL + "/about",
        isPartOf: { "@type": "WebSite", url: BASE_URL },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "About", item: BASE_URL + "/about" },
          ],
        },
        about: { "@type": "HomeAndConstructionBusiness", ...BUSINESS_CORE },
      },
      {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        ...BUSINESS_CORE,
        description:
          "Founded in 2001 as Lifestyle Solutions, Home Cinema Group has spent over two decades as Northern Virginia's premier home theater design and construction specialist. CEDIA-certified, award-winning.",
        foundingDate: "2001",
        numberOfEmployees: { "@type": "QuantitativeValue", value: "10" },
        areaServed: [
          { "@type": "State", name: "Virginia" },
          { "@type": "State", name: "Maryland" },
          { "@type": "City", name: "Washington, DC" },
        ],
        knowsAbout: [
          "Home Theater Design",
          "Dedicated Cinema Construction",
          "Acoustic Treatment",
          "Sound Isolation",
          "Fiber Optic Star Ceilings",
          "Architectural Millwork",
          "Lighting Design",
        ],
        sameAs: [
          "https://www.facebook.com/homecinemagroup",
          "https://www.instagram.com/homecinemagroup",
          "https://www.linkedin.com/company/homecinemagroup",
        ],
      },
    ],
  },

  "/contact": {
    title: "Contact Home Cinema Group — Free Home Theater Consultation | McLean, VA",
    description:
      "Ready to build your dream home theater? Contact our McLean, VA design team for a free consultation. Serving Virginia, DC, Maryland, and beyond.",
    canonical: BASE_URL + "/contact",
    ogImage: OG_IMAGE,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": BASE_URL + "/contact",
        name: "Contact Home Cinema Group",
        description: "Get in touch with Home Cinema Group for a free home theater consultation.",
        url: BASE_URL + "/contact",
        isPartOf: { "@type": "WebSite", url: BASE_URL },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "Contact", item: BASE_URL + "/contact" },
          ],
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        ...BUSINESS_CORE,
        description: "Luxury home theater design and construction — free consultations available.",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+17036251714",
          contactType: "customer service",
          email: "info@homecinemagroup.com",
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
          areaServed: ["Virginia", "Maryland", "Washington DC"],
          availableLanguage: "English",
        },
      },
    ],
  },
};
