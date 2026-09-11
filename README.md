# Clear Kayaking Adventures — Marketing Site

Full marketing site for **Clear Kayaking Adventures**, a 100% clear-kayak eco-tour operator in Jupiter, FL. Built with Next.js (App Router) + Tailwind CSS v4 + Sanity CMS, deployed on Vercel. Booking is handled by FareHarbor.

---

## Table of contents

1. [Quick start](#quick-start)
2. [Project structure](#project-structure)
3. [How content works](#how-content-works)
4. [CMS (Sanity)](#cms-sanity)
5. [Brand assets](#brand-assets)
6. [SEO & JSON-LD schema](#seo--json-ld-schema)
7. [Environment variables](#environment-variables)
8. [Deployment (Vercel)](#deployment-vercel)
9. [On-demand revalidation](#on-demand-revalidation)
10. [Adding images](#adding-images)
11. [Open items](#open-items)

---

## Quick start

```bash
npm install
cp .env.example .env.local   # all values optional for local dev
npm run dev                  # → http://localhost:3000
```

The site renders **fully on bundled sample content** (`lib/content/sample.ts`) with no env vars set. Connect the CMS and Google API later without changing any code.

---

## Project structure

```
app/
  layout.tsx                     # root html/body/fonts (shared by all routes)
  (site)/
    layout.tsx                   # marketing chrome — AnnouncementBar, Header, Footer
    page.tsx                     # homepage (composes all sections)
    tours/[slug]/page.tsx        # tour detail + metadata + JSON-LD
  studio/[[...tool]]/page.tsx    # embedded Sanity Studio at /studio
  api/revalidate/route.ts        # Sanity webhook → on-demand revalidation
  robots.ts / sitemap.ts         # SEO

components/
  layout/                        # AnnouncementBar, Header, Footer, MobileBookingBar
  sections/                      # one file per homepage section
  ui/                            # BookNowButton, Container, Media, icons

lib/
  content/
    types.ts                     # TypeScript types for all site content
    sample.ts                    # bundled fallback content (used when Sanity not set up)
    index.ts                     # getContent() — the single content access point
  sanity/
    env.ts                       # project ID, dataset, API version
    client.ts                    # Sanity client (null when unconfigured)
    queries.ts                   # GROQ query for all content
    image.ts                     # URL builder for Sanity image assets
  reviews/google.ts              # server-only Google Places API fetch
  schema/index.ts                # JSON-LD schema builders
  cn.ts                          # Tailwind class merger

sanity/
  schemaTypes/index.ts           # all Sanity document/object type definitions
  structure.ts                   # Sanity Studio desk structure

public/
  brand/
    logo.png                     # official logo — full color, transparent bg (light surfaces)
    logo-white.png               # official logo — white knockout (dark surfaces)
```

---

## How content works

`lib/content/index.ts` exports `getContent()` — the **single source of truth** for all page data.

```
sampleContent (always the base)
  ↓ merged with Sanity data when env vars are set
    ↓ reviews replaced with Google Places data when API key + Place ID are set
```

This means:
- **Zero env vars** → full site renders from bundled sample content.
- **Sanity only** → CMS data overwrites sample; falls back per-field for anything not yet entered.
- **Sanity + Google** → live reviews overlay on top.

The pattern is deliberately additive — the site never breaks from missing CMS data.

### Data flow

```
app/(site)/layout.tsx          → getContent() → AnnouncementBar, Header, Footer
app/(site)/page.tsx            → getContent() → all homepage sections
app/(site)/tours/[slug]/page.tsx → getTourBySlug(slug)
```

Both functions are **server-only** (`import "server-only"`). No CMS credentials ever reach the browser.

### Adding a new content field

1. Add the TypeScript type in `lib/content/types.ts`.
2. Add the field to `lib/content/sample.ts` with a sensible default.
3. Add the Sanity schema field in `sanity/schemaTypes/index.ts`.
4. Map it in `mapContent()` in `lib/content/index.ts`.
5. Use it in the relevant component.

---

## CMS (Sanity)

### Setup

1. Create a project at https://sanity.io/manage.
2. Copy project ID and dataset name into `.env.local`.
3. Visit **`/studio`** to open the embedded Studio and add content.

### Content model

**Singletons** (one document each — no create/delete):

| Document | Editable fields |
|---|---|
| `siteSettings` | Business name, phone, email, FareHarbor URL, Google Place ID, hours, social links, SEO defaults |
| `announcementBar` | Enabled toggle, announcement text, optional link |
| `homepage` | Copy for every section: hero, editorial intro statement, image-led pillars, tours intro, wildlife + disclaimer, how-it-works steps, reviews heading, gift card, FAQ heading, locations heading |

**Collections** (ordered, fully editable):

| Collection | Fields |
|---|---|
| `tour` | Name, slug, category (primary/upon-request/private), descriptions, duration, start time, price, what's included, image, FareHarbor URL override, `bookByPhone` flag, featured |
| `wildlifeItem` | Name, blurb, image, `highlight` flag |
| `launchLocation` | Name, address, geo, details, directions URL |
| `review` | Author, rating, text, source (google/fareharbor/direct), date, `approved` flag |
| `faqItem` | Question, answer |

### Sanity Studio desk structure

Singletons open their single document directly. Collections show ordered lists. The owner never sees technical document IDs or the create/delete flow for singletons.

---

## Brand assets

| File | Use |
|---|---|
| `public/brand/logo.png` | Full-color, transparent background — header, light surfaces |
| `public/brand/logo-white.png` | White knockout — footer, gift card, dark surfaces |

Both assets were sourced from the official WordPress draft (`ClearKayaKingAdventures-Logo.png`), tightly auto-cropped, and exported at 1313×430 px.

### Using the logo in components

```tsx
// Light background (header)
<Image
  src="/brand/logo.png"
  alt="Clear Kayaking Adventures"
  width={392} height={128}
  unoptimized              // serve the PNG directly — no re-encoding
  className="h-11 w-[134px] max-w-none shrink-0 object-contain object-left"
/>

// Dark background (footer, gift card)
<Image
  src="/brand/logo-white.png"
  alt="Clear Kayaking Adventures"
  width={392} height={128}
  unoptimized
  className="h-14 w-[171px] max-w-none object-contain object-left"
/>
```

**Why `unoptimized`?** The Next.js image optimizer can stall on this PNG in dev mode, and re-encoding a logo is undesirable anyway — the original is already well-compressed.

**Why `max-w-none`?** Tailwind's preflight sets `img { max-width: 100% }`. Inside a flex container whose intrinsic width is 0, this collapses the logo to 0px. `max-w-none` overrides it.

---

## SEO & JSON-LD schema

### Per-route metadata

Generated via `generateMetadata()` in each route, pulled from `getContent()`. Includes title, description, canonical URL, OG image, Twitter card.

Primary keyword: **"Clear Kayaking Jupiter"** / **"Clear Kayak Jupiter"**.

### Sitemap & robots

- `app/sitemap.ts` — dynamic sitemap including all tour slugs and static pages.
- `app/robots.ts` — allows everything, disallows `/studio`.

### JSON-LD builders (`lib/schema/index.ts`)

| Builder | Schema type | Used in |
|---|---|---|
| `organizationSchema()` | `TouristInformationCenter` + `LocalBusiness` | Root layout (every page) |
| `websiteSchema()` | `WebSite` | Homepage |
| `faqSchema()` | `FAQPage` | Homepage |
| `reviewsSchema()` | `Review[]` | Homepage |
| `tourSchema()` | `TouristTrip` + `Offer` | Tour detail pages |
| `breadcrumbSchema()` | `BreadcrumbList` | Tour detail pages |

`aggregateRating` is computed from the reviews array and added to `organizationSchema` and `tourSchema` automatically.

### Review markup is gated on real reviews

`reviewsSchema()` and `aggregateRating()` emit **nothing** while the site is
running on the bundled sample reviews. Those are illustrative placeholders, and
publishing them as `schema.org/Review` would present invented reviews to search
engines as genuine customer feedback — a breach of [Google's review snippet
policy](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)
that risks a manual action.

`SiteContent.reviewsSource` tracks where the reviews came from:

| Value | Source | Review markup |
|---|---|---|
| `placeholder` | `lib/content/sample.ts` | ❌ suppressed |
| `cms` | Reviews entered in Sanity | ✅ emitted |
| `google` | Google Places API | ✅ emitted |

It is derived in `getContent()` / `mapContent()`, not a CMS field. Nothing needs
to be switched on: add reviews in Sanity, or set the Google Place ID and
`GOOGLE_MAPS_API_KEY`, and the markup starts appearing on its own.

The placeholder reviews still **render** on the page so the section isn't empty
pre-launch. Replace them with real ones before going live.

---

## Environment variables

See `.env.example` for all variables with comments. Summary:

| Variable | Required for | Public? |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | CMS content | ✅ yes |
| `NEXT_PUBLIC_SANITY_DATASET` | CMS content | ✅ yes |
| `NEXT_PUBLIC_SANITY_API_VERSION` | CMS content | ✅ yes |
| `SANITY_API_READ_TOKEN` | Draft previews | 🔒 no |
| `SANITY_REVALIDATE_SECRET` | Webhook security | 🔒 no |
| `GOOGLE_MAPS_API_KEY` | Live reviews | 🔒 no — never `NEXT_PUBLIC_` |
| `NEXT_PUBLIC_SITE_URL` | Metadata / sitemap | ✅ yes |

---

## Deployment (Vercel)

1. Connect the GitHub repo to a new Vercel project.
2. Set all env vars in the Vercel project settings.
3. Deploy — Vercel handles ISR, image optimization, and edge TTFB automatically.
4. Set up the Sanity webhook (see next section).

---

## On-demand revalidation

Owner CMS edits go live instantly without a redeploy.

### How it works

1. In Sanity, create a webhook targeting:
   `POST https://<your-domain>/api/revalidate`
   with header `x-revalidate-secret: <value of SANITY_REVALIDATE_SECRET>`.
2. On each Sanity publish, the webhook calls the route.
3. The route validates the secret and calls `revalidateTag("content", { expire: 0 })`, which flushes the ISR cache immediately.

### Security

The route rejects any request where the `x-revalidate-secret` header doesn't match the env var. Set a long random secret (e.g. `openssl rand -hex 32`).

---

## Adding images

The site now includes generated replacements for the homepage hero and all tour
image slots. Wildlife cards still use the existing placeholders until the final
Batch 3 images are generated. You can continue swapping assets in via Sanity
(preferred) or by adding files to `public/`.

See **`IMAGE_GENERATION_BRIEF.md`** for the full 13-image brief and
**`IMAGE_GENERATION_QUEUE.md`** for the execution-ready generation queue used
for the current hero/tour set. AI-generated images can fill slots temporarily;
replace them with authentic tour photography as it becomes available.

**Recommended filenames and locations:**

```text
public/
  images/
    hero/
      hero-clear-kayak-jupiter.webp
    tours/
      tour-clear-kayak-eco.webp
      tour-sunset.webp
      tour-private-group.webp
      tour-pro-run.webp
      tour-indian-river.webp
      tour-salt-fish.webp
    wildlife/
      wildlife-manatee.webp
      wildlife-sea-turtle.webp
      wildlife-ray.webp
      wildlife-tropical-fish.webp
      wildlife-coastal-birds.webp
      wildlife-mangrove-tunnel.webp
```

---

## Open items

Things that need owner input before the site is fully production-ready:

| Item | Why it matters |
|---|---|
| **Wildlife photography** (6 slots) | Wildlife cards still need the final Batch 3 images from `IMAGE_GENERATION_BRIEF.md`. |
| **Google Business Place ID** | Required for live Google review pull. Set in Sanity → Site Settings. |
| **Tour prices** | Not shown until set on each tour document in Sanity. |
| **Gift card link** | Is the gift card sold via FareHarbor or an external service (e.g. Square)? Sets the gift-section CTA URL. |
| **Per-tour FareHarbor deep links** | Optional: set per-tour booking URLs in Sanity. Falls back to the site-wide booking URL. |
| **Sanity project** | Create at sanity.io/manage, copy project ID + dataset into Vercel env vars. |
| **Vercel domain** | Connect clearkayakingadventures.com in Vercel project settings. |
