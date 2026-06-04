import type { SiteContent, Tour } from "@/lib/content/types";

// ─── helpers ────────────────────────────────────────────────────────────────

function aggregateRating(content: SiteContent) {
  const { reviews } = content;
  if (!reviews.length) return undefined;
  const avg =
    reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length;
  return {
    "@type": "AggregateRating",
    ratingValue: Number(avg.toFixed(1)),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  };
}

/** Convert minutes to ISO 8601 duration string — e.g. 105 → "PT1H45M" */
function isoDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `PT${h > 0 ? `${h}H` : ""}${m > 0 ? `${m}M` : ""}`;
}

/** Resolve an image src to an absolute URL */
function absImg(src: string | undefined, siteUrl: string): string | undefined {
  if (!src) return undefined;
  if (src.startsWith("http")) return src;
  return `${siteUrl}${src.startsWith("/") ? "" : "/"}${src}`;
}

// ─── schemas ────────────────────────────────────────────────────────────────

export function organizationSchema(content: SiteContent) {
  const { site } = content;
  const logoUrl = `${site.siteUrl}/brand/logo.png`;
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TouristAttraction"],
    "@id": `${site.siteUrl}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.siteUrl,
    telephone: site.phone,
    email: site.email,
    priceRange: site.priceRange,
    currenciesAccepted: "USD",
    paymentAccepted: "Credit Card, Cash",
    description: site.seoDescription,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      width: 392,
      height: 128,
    },
    image: logoUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jupiter",
      addressRegion: "FL",
      postalCode: "33477",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: {
      "@type": "Place",
      name: "Jupiter, Florida",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
    knowsAbout: [
      "clear kayaking",
      "transparent kayak tours",
      "eco tours Jupiter Florida",
      "manatee kayak tours",
      "Indian River Lagoon kayaking",
      "Loxahatchee River kayaking",
      "Jupiter Inlet wildlife",
      "sea turtle kayak tours",
      "family kayak tours Jupiter",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Clear Kayak Tours in Jupiter, FL",
      itemListElement: content.tours.map((tour) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: tour.name,
          description: tour.shortDescription,
          url: `${site.siteUrl}/tours/${tour.slug}`,
        },
        url: tour.fareHarborUrl || site.fareHarborUrl,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      })),
    },
    sameAs: site.social.map((s) => s.url),
    aggregateRating: aggregateRating(content),
  };
}

export function faqSchema(content: SiteContent) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function reviewsSchema(content: SiteContent) {
  return content.reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LocalBusiness",
      "@id": `${content.site.siteUrl}/#business`,
      name: content.site.name,
    },
    author: { "@type": "Person", name: r.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: r.text,
    ...(r.date ? { datePublished: r.date } : {}),
    publisher: {
      "@type": "Organization",
      name:
        r.source === "google"
          ? "Google"
          : r.source === "fareharbor"
            ? "FareHarbor"
            : content.site.name,
    },
  }));
}

export function tourSchema(tour: Tour, content: SiteContent) {
  const { site } = content;
  const bookUrl = tour.fareHarborUrl || site.fareHarborUrl;
  const imageUrl = absImg(tour.image.src, site.siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${site.siteUrl}/tours/${tour.slug}#tour`,
    name: tour.name,
    description: tour.shortDescription,
    url: `${site.siteUrl}/tours/${tour.slug}`,
    ...(imageUrl ? { image: imageUrl } : {}),
    ...(tour.durationMinutes
      ? { duration: isoDuration(tour.durationMinutes) }
      : {}),
    touristType: ["families", "eco-tourists", "wildlife enthusiasts", "beginners"],
    maximumAttendeeCapacity: 10,
    typicalAgeRange: "3-",
    isAccessibleForFree: false,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${site.siteUrl}/#business`,
      name: site.name,
      telephone: site.phone,
    },
    location: {
      "@type": "Place",
      name: "Jupiter, Florida",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jupiter",
        addressRegion: "FL",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.geo.lat,
        longitude: site.geo.lng,
      },
    },
    offers: {
      "@type": "Offer",
      url: bookUrl,
      priceCurrency: "USD",
      ...(tour.price ? { price: String(tour.price) } : {}),
      availability: "https://schema.org/InStock",
      category: "Guided kayak eco tour",
    },
    aggregateRating: aggregateRating(content),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function websiteSchema(content: SiteContent) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${content.site.siteUrl}/#website`,
    name: content.site.name,
    url: content.site.siteUrl,
    description: content.site.seoDescription,
    inLanguage: "en-US",
    publisher: {
      "@id": `${content.site.siteUrl}/#business`,
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: content.site.fareHarborUrl,
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
      name: "Book a clear kayak tour",
    },
  };
}

export function tourItemListSchema(content: SiteContent) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${content.site.siteUrl}/#tour-list`,
    name: "Clear Kayak Tours in Jupiter, FL",
    description: content.toursSection.intro,
    numberOfItems: content.tours.length,
    itemListElement: content.tours.map((tour, index) => {
      const imageUrl = absImg(tour.image.src, content.site.siteUrl);
      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "TouristTrip",
          "@id": `${content.site.siteUrl}/tours/${tour.slug}#tour`,
          name: tour.name,
          description: tour.shortDescription,
          url: `${content.site.siteUrl}/tours/${tour.slug}`,
          ...(imageUrl ? { image: imageUrl } : {}),
          ...(tour.durationMinutes
            ? { duration: isoDuration(tour.durationMinutes) }
            : {}),
          provider: {
            "@id": `${content.site.siteUrl}/#business`,
          },
          offers: {
            "@type": "Offer",
            url: tour.fareHarborUrl || content.site.fareHarborUrl,
            priceCurrency: "USD",
            ...(tour.price ? { price: String(tour.price) } : {}),
            availability: "https://schema.org/InStock",
          },
        },
      };
    }),
  };
}
