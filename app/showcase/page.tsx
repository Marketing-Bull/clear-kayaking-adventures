import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { variations } from "@/lib/showcase";
import { PreviewFrame } from "@/components/showcase/PreviewFrame";

export const metadata: Metadata = {
  title: "Homepage Design Showcase",
  description:
    "Compare homepage design directions for Clear Kayaking Adventures — open any variation full-page.",
  robots: { index: false, follow: false },
};

export default function ShowcasePage() {
  // Number only the concept variations; the live design is labeled separately.
  const labels = new Map<string, string>();
  let conceptN = 0;
  for (const v of variations) {
    labels.set(v.slug, v.current ? "● Current · Live" : `Variation ${++conceptN}`);
  }

  return (
    <div className="min-h-screen bg-foam text-ink">
      {/* top bar */}
      <header className="border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo.png"
              alt="Clear Kayaking Adventures"
              width={392}
              height={128}
              priority
              unoptimized
              className="h-9 w-[110px] max-w-none shrink-0 object-contain object-left sm:h-10 sm:w-[122px]"
            />
            <span className="hidden text-xs font-semibold uppercase tracking-widest text-lagoon sm:inline">
              · Design Showcase
            </span>
          </div>
          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-ocean hover:bg-ocean/10"
          >
            ← Back to live site
          </Link>
        </div>
      </header>

      {/* intro */}
      <section className="mx-auto max-w-6xl px-5 pb-4 pt-12 sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-lagoon">
          Clear Kayaking Adventures · Jupiter, FL
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Homepage design variations
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-inkmuted">
          The current live homepage plus three concept directions — same brand
          palette and the same new SEO &amp; conversion copy, but each makes a
          different strategic bet. Click any preview to open it full-page.
        </p>
      </section>

      {/* gallery */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {variations.map((v) => (
            <article
              key={v.slug}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_24px_50px_-30px_rgba(7,49,74,0.5)] ring-1 ring-black/5 transition hover:shadow-[0_30px_60px_-28px_rgba(7,49,74,0.55)]"
            >
              {/* live preview (clickable) */}
              <Link
                href={`/showcase/${v.slug}`}
                className="relative block border-b border-black/5"
                aria-label={`Open the ${v.name} design full-page`}
              >
                <div
                  className="flex items-center justify-between px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-wider text-white"
                  style={{
                    background: `linear-gradient(135deg, ${v.accent[0]}, ${v.accent[1]})`,
                  }}
                >
                  <span>{labels.get(v.slug)}</span>
                  {v.recommended && (
                    <span className="rounded-full bg-white/25 px-2 py-0.5">
                      ★ Recommended
                    </span>
                  )}
                  {v.current && (
                    <span className="rounded-full bg-white/25 px-2 py-0.5">
                      Deployed
                    </span>
                  )}
                </div>
                <PreviewFrame src={v.file} title={`${v.name} preview`} />
                <span className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-deep/55 via-transparent to-transparent opacity-0 transition group-hover:opacity-100">
                  <span className="mb-4 rounded-full bg-white px-4 py-2 text-sm font-bold text-deep shadow">
                    Open full page →
                  </span>
                </span>
              </Link>

              {/* copy */}
              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-lagoon">
                  {v.tagline}
                </div>
                <h2 className="mt-1 font-display text-2xl font-extrabold">
                  {v.name}
                </h2>
                <p className="mt-2 flex-1 text-[0.97rem] leading-relaxed text-inkmuted">
                  {v.description}
                </p>
                <p className="mt-4 text-sm text-inkmuted">
                  <span className="font-semibold text-ink">Best for:</span>{" "}
                  {v.bestFor}
                </p>
                <Link
                  href={`/showcase/${v.slug}`}
                  className="mt-5 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-sun px-5 font-bold text-white transition hover:brightness-95"
                >
                  View full page →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl rounded-2xl bg-white p-6 text-[0.95rem] text-inkmuted ring-1 ring-black/5">
          <span className="font-display text-lg font-bold text-ink">
            Want the strategy behind these?
          </span>
          <br />
          The full positioning, site map, section-by-section copy, keyword map and
          schema plan live in{" "}
          <a
            href="/design/00-website-outline-and-content.md"
            className="font-semibold text-ocean underline"
          >
            the strategy doc
          </a>
          . Recommendation: ship a hybrid — “Book Direct” above the fold on “Local
          Guide” body, with “Crystal” hero photography once real images arrive.
        </p>
      </section>
    </div>
  );
}
