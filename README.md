# Clear Kayaking Adventures

Marketing site for Clear Kayaking Adventures — guided clear-kayak eco tours in
Jupiter, FL. Next.js (App Router) + Tailwind + Sanity CMS, deployed on Vercel.
Booking is handled by FareHarbor.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in values (all optional for local dev)
npm run dev                  # http://localhost:3000
```

The site renders fully with **bundled sample content** (`lib/content/sample.ts`)
until Sanity is connected — no env vars required to see the full site locally.

## How content works

`lib/content/index.ts#getContent()` is the single source of truth:

1. Starts from `sampleContent`.
2. If Sanity env vars are set, fetches the CMS and merges over the sample
   (missing fields fall back to sample values).
3. If a Google Places key + Place ID are set, overlays live Google reviews.

So the site degrades gracefully at every layer.

## CMS (Sanity)

- Studio is embedded at **`/studio`**.
- Create a project at https://sanity.io/manage, set the env vars, then add
  content through the embedded Studio.
- Singletons (Site Settings, Announcement Bar, Homepage) + ordered collections
  (Tours, Wildlife, Launch Locations, Reviews, FAQs).
- Owner edits go live without a redeploy via a webhook → `/api/revalidate`
  (POST with header `x-revalidate-secret` = `SANITY_REVALIDATE_SECRET`).

## Environment variables

See `.env.example`. All optional for local dev; required for the live CMS,
reviews, and revalidation. `GOOGLE_MAPS_API_KEY` is **server-only** — never
prefix it with `NEXT_PUBLIC_`.

## SEO

Per-route metadata, `app/sitemap.ts`, `app/robots.ts` (disallows `/studio`),
and JSON-LD via `lib/schema/` (LocalBusiness, WebSite, FAQPage, Review,
TouristTrip + Offer, BreadcrumbList). Primary keyword: "Clear Kayaking Jupiter".

## Open items (need owner input)

- **Images** — real hero/tour/wildlife photos (currently on-brand gradient
  placeholders). Upload in Sanity or add to the repo.
- **Tour prices** — not shown until set on each `tour` in Sanity.
- **Google Place ID** — set on Site Settings to pull live Google reviews.
- **Gift card link** — confirm FareHarbor vs. external (Square) URL.
- **Per-tour FareHarbor deep links** — optional override per tour; falls back
  to the site-wide booking URL.
