import Link from "next/link";
import type { SiteContent } from "@/lib/content/types";
import { Media } from "@/components/ui/Media";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { StarIcon } from "@/components/ui/icons";

export function Hero({ content }: { content: SiteContent }) {
  const { hero, site, reviews } = content;
  const averageRating = reviews.length
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : "5.0";

  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden">
      {/* Viewfinder still with slow, calm drift */}
      <div className="absolute inset-0 -z-10 animate-slow-drift">
        <Media image={hero.image} priority sizes="100vw" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-deep/45 via-ocean/20 to-deep/75" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_15%,rgba(70,207,214,0.36),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(255,176,102,0.28),transparent_26%)]" />

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur">
            <span className="flex" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-sunsoft" />
              ))}
            </span>
            {averageRating}★ from Google & FareHarbor guest reviews
          </div>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sunsoft">
            Grand opening · New Jupiter location
          </p>
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl" style={{ color: "#fff" }}>
            {hero.heading}
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-medium text-foam/95 sm:text-2xl">
            {hero.subheading}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BookNowButton href={site.fareHarborUrl} className="text-xl">
              {hero.ctaLabel}
            </BookNowButton>
            <Link
              href="/#tours"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white/10 px-6 py-3 text-lg font-semibold text-white ring-1 ring-white/40 backdrop-blur hover:bg-white/20"
            >
              View Tours & Pricing
            </Link>
          </div>

          <div className="mt-7 grid gap-3 text-white sm:grid-cols-3">
            {[
              "100% clear kayaks",
              "Small groups with local guides",
              "Beginner & family friendly",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white/12 px-4 py-3 text-base font-bold ring-1 ring-white/20 backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
