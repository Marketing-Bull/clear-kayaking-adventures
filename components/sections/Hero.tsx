import Link from "next/link";
import type { SiteContent } from "@/lib/content/types";
import { Media } from "@/components/ui/Media";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { StarIcon } from "@/components/ui/icons";

const EMPHASIS = /\binside\b/i;

function HeroHeading({ text }: { text: string }) {
  const match = EMPHASIS.exec(text);
  if (!match || match.index === undefined) return text;
  const start = match.index;
  const end = start + match[0].length;
  return (
    <>
      {text.slice(0, start)}
      <em className="font-normal text-aqua">{text.slice(start, end)}</em>
      {text.slice(end)}
    </>
  );
}

export function Hero({ content }: { content: SiteContent }) {
  const { hero, site, reviews } = content;
  const averageRating = reviews.length
    ? (reviews.reduce((sum, review) => sum + (review.rating || 0), 0) / reviews.length).toFixed(1)
    : "5.0";

  return (
    <section className="relative isolate flex min-h-[82svh] items-end overflow-hidden text-white sm:min-h-[88vh] lg:min-h-[92vh]">
      <div className="absolute inset-0 z-0">
        <Media image={hero.image} priority sizes="100vw" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-deep/95 via-deep/35 to-deep/5" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(110%_80%_at_78%_8%,rgba(70,207,214,0.34),transparent_58%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4 pb-20 pt-28 sm:px-6 sm:pb-24 lg:px-8 lg:pb-20">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-white sm:text-sm">
            <span className="flex shrink-0" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-gold" />
              ))}
            </span>
            {averageRating}/5 from Google &amp; FareHarbor guest reviews
          </div>

          <h1 className="max-w-[15ch] text-5xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl xl:text-[5.6rem]" style={{ color: "#fff" }}>
            <HeroHeading text={hero.heading} />
          </h1>
          <p className="mt-6 max-w-[42ch] text-lg font-medium leading-relaxed text-foam sm:text-xl lg:text-2xl">
            {hero.subheading}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <BookNowButton href={site.fareHarborUrl} className="w-full sm:w-auto sm:text-lg">
              {hero.ctaLabel}
            </BookNowButton>
            <Link
              href="/#tours"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/60 bg-transparent px-6 py-3 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto sm:px-7 sm:text-lg"
            >
              Explore Tours
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-foam sm:flex sm:flex-wrap sm:gap-x-7 sm:text-[0.95rem]">
            {[
              "100% Clear Kayaks",
              "Small Groups (max 10)",
              "Local Jupiter Guides",
              "Family friendly (ages 3+)",
            ].map((item) => (
              <span key={item} className="font-semibold">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
