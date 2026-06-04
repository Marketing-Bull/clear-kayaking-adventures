<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Clear Kayaking Adventures — Agent Context

## What this project is

A Next.js 16 (App Router) + Tailwind CSS v4 + Sanity CMS marketing site for a clear-kayak eco-tour operator in Jupiter, FL. Deployed on Vercel. Read `README.md` before making changes.

## Critical conventions

### Tailwind CSS v4
This project uses **Tailwind v4**, which is **config-file-free**. All design tokens live in `app/globals.css` under `@theme`. Do NOT create or edit `tailwind.config.js` / `tailwind.config.ts`. The `@theme` block defines custom tokens like `--color-deep`, `--color-ocean`, `--color-lagoon`, `--color-aqua`, `--font-display`, etc. Use them as `text-deep`, `bg-ocean`, `font-display` in classNames.

### Route groups
The public marketing site lives in `app/(site)/`. The `(site)` group layout adds the announcement bar, header, and footer. The Studio (`/studio`) and Showcase (`/showcase`) routes sit outside this group intentionally — they have no marketing chrome.

### Content layer — `getContent()` is the only entry point
Never `fetch()` Sanity or Google directly in a component. Always call `getContent()` from `lib/content/index.ts`. It handles the three-layer fallback (sample → Sanity → Google reviews) and is `server-only`. `getTourBySlug(slug)` is the helper for tour detail pages.

### Server-only files
`lib/content/index.ts`, `lib/reviews/google.ts`, and anything that reads `process.env.GOOGLE_MAPS_API_KEY` or `SANITY_API_READ_TOKEN` must keep `import "server-only"` at the top. These must never be imported by client components.

### Logos

| Surface | File | Key CSS |
|---|---|---|
| Light (header, showcase) | `/brand/logo.png` | `unoptimized max-w-none` |
| Dark (footer, gift card) | `/brand/logo-white.png` | `unoptimized max-w-none` |

Always use `unoptimized` and `max-w-none` on logo `<Image>` tags. See README → Brand assets for the reason.

### Design variation HTML files
`public/design/variation-*.html` are **self-contained HTML files** — no build step, no imports. All CSS is inline `<style>`. They render inside iframes in the showcase. Logo `<img>` tags inside these files need `style="...;max-width:none"` explicitly.

### `params` in Next.js 16 is a Promise
Dynamic route params are typed as `Promise<{slug: string}>` and must be awaited:
```ts
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
```

### `revalidateTag` in Next.js 16 requires a second argument
```ts
revalidateTag("content", { expire: 0 });  // NOT revalidateTag("content")
```

## File to read before editing the content model
`lib/content/types.ts` defines `SiteContent` — the shape every component depends on. Changes here cascade to `sample.ts`, `schemaTypes/index.ts`, and `mapContent()` in `lib/content/index.ts`.

## Testing changes
```bash
npm run build   # must pass with zero TypeScript errors before committing
```
The dev server (`npm run dev`) uses Turbopack and is fast, but the production build catches type errors the dev server sometimes misses.
