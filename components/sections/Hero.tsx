import Link from "next/link";
import type { SiteContent } from "@/lib/content/types";
import { Media } from "@/components/ui/Media";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { StarIcon } from "@/components/ui/icons";

export function Hero({ content }: { content: SiteContent }) {
  const { hero, site, reviews } = content;
  return (
    <section className="relative isolate flex min-h-[86vh] items-center overflow-hidden">
      {/* Viewfinder still with slow, calm drift */}
      <div className="absolute inset-0 -z-10 animate-slow-drift">
        <Media image={hero.image} priority sizes="100vw" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-deep/55 via-deep/25 to-deep/70" />

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur">
            <span className="flex" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-sunsoft" />
              ))}
            </span>
            Loved by {reviews.length}+ happy paddlers
          </div>

          <h1 className="text-4xl font-extrabold text-white sm:text-5xl" style={{ color: "#fff" }}>
            {hero.heading}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-foam/95 sm:text-xl">
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
              Explore Tours
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
