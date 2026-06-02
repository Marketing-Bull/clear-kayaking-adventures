import type { SiteContent, Tour } from "@/lib/content/types";

function aggregateRating(content: SiteContent) {
  const reviews = content.reviews;
  if (!reviews.length) return undefined;
  const avg =
    reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length;
  return {
    "@type": "AggregateRating",
    ratingValue: Number(avg.toFixed(1)),
    reviewCount: reviews.length,
  };
}

export function organizationSchema(content: SiteContent) {
  const { site } = content;
  return {
    "@context": "https://schema.org",
    "@type": ["TouristInformationCenter", "LocalBusiness"],
    "@id": `${site.siteUrl}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.siteUrl,
    telephone: site.phone,
    email: site.email,
    priceRange: site.priceRange,
    description: site.seoDescription,
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
    areaServed: "Jupiter, Florida",
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
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function reviewsSchema(content: SiteContent) {
  return content.reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LocalBusiness",
      name: content.site.name,
    },
    author: { "@type": "Person", name: r.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
    },
    reviewBody: r.text,
  }));
}

export function tourSchema(tour: Tour, content: SiteContent) {
  const { site } = content;
  const bookUrl = tour.fareHarborUrl || site.fareHarborUrl;
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: tour.shortDescription,
    url: `${site.siteUrl}/tours/${tour.slug}`,
    touristType: ["families", "eco-tourists", "wildlife enthusiasts"],
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phone,
    },
    offers: {
      "@type": "Offer",
      url: bookUrl,
      priceCurrency: "USD",
      ...(tour.price ? { price: String(tour.price) } : {}),
      availability: "https://schema.org/InStock",
      category: "Guided kayak tour",
    },
    aggregateRating: aggregateRating(content),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
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
    name: content.site.name,
    url: content.site.siteUrl,
  };
}
