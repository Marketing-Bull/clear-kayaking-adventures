export type Img = { src?: string; alt: string };

export type SocialLink = { platform: "facebook" | "instagram" | "tiktok" | "youtube"; url: string };

export type TourCategory = "primary" | "upon-request" | "private";

export type Tour = {
  slug: string;
  name: string;
  category: TourCategory;
  shortDescription: string;
  description: string[];
  durationMinutes?: number;
  startTime?: string;
  price?: number;
  whatsIncluded: string[];
  image: Img;
  fareHarborUrl?: string;
  bookByPhone?: boolean;
  featured?: boolean;
};

export type WildlifeItem = {
  name: string;
  blurb: string;
  image: Img;
  highlight?: boolean;
};

export type HowItWorksStep = {
  title: string;
  description: string;
};

export type Pillar = {
  eyebrow?: string;
  title: string;
  body: string;
  icon: "kayak" | "guide" | "family";
  image?: Img;
};

export type Review = {
  author: string;
  rating: number;
  text: string;
  source: "google" | "fareharbor" | "direct";
  date?: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Location = {
  name: string;
  address: string;
  geo?: { lat: number; lng: number };
  details: string;
  directionsUrl?: string;
};

export type SiteContent = {
  site: {
    name: string;
    legalName: string;
    phone: string;
    email: string;
    fareHarborUrl: string;
    googlePlaceId?: string;
    priceRange: string;
    geo: { lat: number; lng: number };
    hours: string;
    social: SocialLink[];
    seoTitle: string;
    seoDescription: string;
    siteUrl: string;
  };
  announcement: { enabled: boolean; text: string; link?: string };
  hero: {
    heading: string;
    subheading: string;
    ctaLabel: string;
    image: Img;
    variant: "water" | "mangrove";
  };
  introStatement: { eyebrow: string; heading: string; body: string };
  pillarsSection: { heading: string; pillars: Pillar[] };
  toursSection: { heading: string; intro: string };
  tours: Tour[];
  wildlifeSection: { heading: string; intro: string; disclaimer: string };
  wildlife: WildlifeItem[];
  howItWorksSection: { heading: string; intro: string; steps: HowItWorksStep[] };
  reviewsSection: { heading: string; subheading: string };
  reviews: Review[];
  giftCard: { heading: string; body: string; ctaLabel: string; ctaUrl: string; image?: Img };
  faqSection: { heading: string; intro: string };
  faqs: Faq[];
  locationsSection: { heading: string; intro: string };
  locations: Location[];
};
