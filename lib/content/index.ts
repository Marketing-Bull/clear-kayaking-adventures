import "server-only";
import type { Image } from "sanity";
import { client } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import { CONTENT_QUERY } from "@/lib/sanity/queries";
import { sanityConfigured } from "@/lib/sanity/env";
import { getGoogleReviews } from "@/lib/reviews/google";
import { sampleContent } from "./sample";
import type { Img, SiteContent, Tour } from "./types";

type SanityImage = (Image & { alt?: string }) | undefined;

function img(source: SanityImage, fallback: Img): Img {
  const src = urlForImage(source);
  if (!src) return fallback;
  return { src, alt: source?.alt || fallback.alt };
}

/**
 * Returns site content. Reads from Sanity when a project is configured
 * (env vars set); otherwise falls back to bundled sample content so the
 * site renders fully in development and before the CMS is connected.
 */
export async function getContent(): Promise<SiteContent> {
  let content: SiteContent = sampleContent;

  if (sanityConfigured && client) {
    try {
      const data = await client.fetch(
        CONTENT_QUERY,
        {},
        { next: { tags: ["content"], revalidate: 60 } }
      );
      if (data && data.homepage) content = mapContent(data);
    } catch {
      content = sampleContent;
    }
  }

  // Pull live reviews + rating from Google Places when configured.
  const google = await getGoogleReviews(content.site.googlePlaceId);
  if (google.reviews.length) {
    content = { ...content, reviews: google.reviews };
  }

  return content;
}

export async function getTourBySlug(slug: string): Promise<Tour | undefined> {
  const content = await getContent();
  return content.tours.find((t) => t.slug === slug);
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function mapContent(d: any): SiteContent {
  const s = sampleContent;
  const hp = d.homepage || {};
  return {
    site: { ...s.site, ...clean(d.site) },
    announcement: { ...s.announcement, ...clean(d.announcement) },
    hero: {
      ...s.hero,
      ...clean(hp.hero),
      image: img(hp.hero?.image, s.hero.image),
    },
    introStatement: { ...s.introStatement, ...clean(hp.introStatement) },
    pillarsSection: {
      heading: hp.pillarsSection?.heading ?? s.pillarsSection.heading,
      pillars: hp.pillarsSection?.pillars?.length
        ? hp.pillarsSection.pillars.map((pillar: any, index: number) => ({
            ...s.pillarsSection.pillars[index],
            ...clean(pillar),
            image: img(pillar.image, s.pillarsSection.pillars[index]?.image ?? { alt: pillar.title }),
          }))
        : s.pillarsSection.pillars,
    },
    toursSection: { ...s.toursSection, ...clean(hp.toursSection) },
    tours: d.tours?.length
      ? d.tours.map((t: any): Tour => ({
          slug: t.slug?.current ?? t.slug,
          name: t.name,
          category: t.category ?? "upon-request",
          shortDescription: t.shortDescription ?? "",
          description: t.description ?? [],
          durationMinutes: t.durationMinutes,
          startTime: t.startTime,
          price: t.price,
          whatsIncluded: t.whatsIncluded ?? [],
          image: img(t.image, { src: "", alt: t.name }),
          fareHarborUrl: t.fareHarborUrl,
          bookByPhone: t.bookByPhone,
          featured: t.featured,
        }))
      : s.tours,
    wildlifeSection: { ...s.wildlifeSection, ...clean(hp.wildlifeSection) },
    wildlife: d.wildlife?.length
      ? d.wildlife.map((w: any) => ({
          name: w.name,
          blurb: w.blurb ?? "",
          image: img(w.image, { src: "", alt: w.name }),
          highlight: w.highlight,
        }))
      : s.wildlife,
    howItWorksSection: {
      heading: hp.howItWorksSection?.heading ?? s.howItWorksSection.heading,
      intro: hp.howItWorksSection?.intro ?? s.howItWorksSection.intro,
      steps: hp.howItWorksSection?.steps?.length
        ? hp.howItWorksSection.steps
        : s.howItWorksSection.steps,
    },
    reviewsSection: { ...s.reviewsSection, ...clean(hp.reviewsSection) },
    reviews: d.reviews?.length ? d.reviews : s.reviews,
    giftCard: { ...s.giftCard, ...clean(hp.giftCard) },
    faqSection: { ...s.faqSection, ...clean(hp.faqSection) },
    faqs: d.faqs?.length ? d.faqs : s.faqs,
    locationsSection: { ...s.locationsSection, ...clean(hp.locationsSection) },
    locations: d.locations?.length ? d.locations : s.locations,
  };
}

function clean<T extends object>(obj: T | undefined | null): Partial<T> {
  if (!obj) return {};
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== null && v !== undefined && v !== "")
  ) as Partial<T>;
}
