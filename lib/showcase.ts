/**
 * Homepage design "Showcase" registry.
 *
 * Each entry is one design variation surfaced at /showcase (gallery) and
 * /showcase/<slug> (full-page preview). The actual designs are self-contained
 * HTML files served from /public/design/, so they render in isolation (their
 * own CSS/fonts never collide with the app).
 *
 * ── To add a new variation ──────────────────────────────────────────────
 * 1. Drop the design's HTML file in `public/design/` (e.g. variation-4-foo.html).
 * 2. Add one entry to the `variations` array below.
 * 3. That's it — the gallery card and the /showcase/<slug> route are generated
 *    automatically. (See README → "Adding a homepage design variation".)
 */

export type ShowcaseVariation = {
  /** URL slug → /showcase/<slug>. Keep it short and kebab-case. */
  slug: string;
  /** Display name, e.g. "Crystal". */
  name: string;
  /** One-line positioning, e.g. "Immersive & editorial". */
  tagline: string;
  /** A few sentences describing the design direction. */
  description: string;
  /** Who/what this design is best suited for. */
  bestFor: string;
  /**
   * What to render in the preview/full-page iframe. Either a path to a
   * self-contained HTML file under /public (e.g. "/design/variation-4.html")
   * or a live app route (e.g. "/" for the current homepage).
   */
  file: string;
  /** Two CSS colors used for the card's accent gradient [from, to]. */
  accent: [string, string];
  /** Optional: set true to feature/recommend this variation in the gallery. */
  recommended?: boolean;
  /**
   * Optional: marks this as the current/live design (the deployed homepage).
   * Labeled "Current design" instead of "Variation N" in the gallery.
   */
  current?: boolean;
};

export const variations: ShowcaseVariation[] = [
  {
    slug: "current",
    name: "Current Design",
    tagline: "Live on Vercel",
    description:
      "The homepage as it's deployed today — the full Next.js build with every section, the live booking links and CMS-driven content. Use it as the baseline to compare the concept directions against.",
    bestFor: "The current production baseline",
    file: "/",
    accent: ["#07314a", "#0e6ba8"],
    current: true,
  },
  {
    slug: "crystal",
    name: "Crystal",
    tagline: "Immersive & editorial",
    description:
      "A cinematic, full-bleed hero with large serif type and story-led sections about the wonder of seeing through the water. Emotional and premium — built to make people feel the experience before they book.",
    bestFor: "Brand, social & top-of-funnel traffic",
    file: "/design/variation-1-crystal.html",
    accent: ["#0e6ba8", "#46cfd6"],
  },
  {
    slug: "book-direct",
    name: "Book Direct",
    tagline: "Conversion-first",
    description:
      "Rating, price and a booking panel above the fold, a “why book direct vs. OTA / chain” comparison, a clear pricing grid and a sticky call-to-action. Built to turn high-intent visitors into bookings.",
    bestFor: "Paid traffic & high-intent visitors",
    file: "/design/variation-2-book-direct.html",
    accent: ["#07314a", "#ff8b3d"],
    recommended: true,
  },
  {
    slug: "local-guide",
    name: "Local Guide",
    tagline: "SEO / authority + eco",
    description:
      "Naturalist-led positioning with wildlife education, a launch-map section, answer-style FAQ blocks and named local entities (Jupiter Inlet, Loxahatchee, Indian River Lagoon) tuned for organic search and AI Overviews.",
    bestFor: "Organic search & AI Overviews",
    file: "/design/variation-3-local-guide.html",
    accent: ["#0b4a3a", "#109fb8"],
  },
];

export function getVariation(slug: string): ShowcaseVariation | undefined {
  return variations.find((v) => v.slug === slug);
}
