import Link from "next/link";
import type { SiteContent } from "@/lib/content/types";
import { Media } from "@/components/ui/Media";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { StarIcon } from "@/components/ui/icons";

export function Hero({ content }: { content: SiteContent }) {
  const { hero, site, reviews } = content;
  const averageRating = reviews.length
    ? (reviews.reduce((sum, review) => sum + (review.rating || 0), 0) / reviews.length).toFixed(1)
    : "5.0";

  return (
    <section className="relative isolate flex min-h-[calc(100svh-7rem)] items-end overflow-hidden sm:min-h-[78vh] sm:items-center lg:min-h-[82vh]">
      {/* Viewfinder still with slow, calm drift */}
      <div className="absolute inset-0 -z-10 animate-slow-drift">
        <Media image={hero.image} priority sizes="100vw" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-deep/45 via-ocean/20 to-deep/75" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_15%,rgba(70,207,214,0.36),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(255,176,102,0.28),transparent_26%)]" />

      <div className="mx-auto w-full max-w-6xl px-4 py-10 pb-24 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl bg-white/15 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/30 backdrop-blur sm:mb-5 sm:rounded-full sm:px-4 sm:text-sm">
            <span className="flex shrink-0" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-sunsoft" />
              ))}
            </span>
            {averageRating}★ from Google & FareHarbor guest reviews
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-sunsoft sm:mb-3 sm:text-sm sm:tracking-[0.2em]">
            Grand opening · New Jupiter location
          </p>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl" style={{ color: "#fff" }}>
            {hero.heading}
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-medium text-foam/95 sm:mt-5 sm:text-xl lg:text-2xl">
            {hero.subheading}
          </p>

          <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:items-center sm:gap-3">
            <BookNowButton href={site.fareHarborUrl} className="w-full sm:w-auto sm:text-xl">
              {hero.ctaLabel}
            </BookNowButton>
            <Link
              href="/#tours"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-white/10 px-5 py-3 text-base font-semibold text-white ring-1 ring-white/40 backdrop-blur hover:bg-white/20 sm:w-auto sm:px-6 sm:text-lg"
            >
              View Tours & Pricing
            </Link>
          </div>

          <div className="mt-7 hidden gap-3 text-white sm:grid sm:grid-cols-3">
            {[
              "100% clear kayaks",
              "Small groups with local guides",
              "Beginner & family friendly",
            ].map((item) => (
              <div key={item} className="rounded-xl bg-white/12 px-3 py-2 text-sm font-bold ring-1 ring-white/20 backdrop-blur sm:rounded-2xl sm:px-4 sm:py-3 sm:text-base">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
