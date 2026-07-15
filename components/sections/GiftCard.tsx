import Image from "next/image";
import type { SiteContent } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { Media } from "@/components/ui/Media";
import { GiftIcon } from "@/components/ui/icons";

export function GiftCard({ content }: { content: SiteContent }) {
  const { giftCard } = content;
  return (
    <section id="gift" className="section-render scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 rounded-[1.6rem] bg-gradient-to-br from-foam to-white p-6 ring-1 ring-ocean/10 sm:p-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:p-12">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-lagoon">
              <GiftIcon className="h-5 w-5" /> The Perfect Gift
            </p>
            <h2 className="text-4xl font-extrabold sm:text-5xl">{giftCard.heading}</h2>
            <p className="mt-3 max-w-xl text-base text-inkmuted sm:mt-4 sm:text-lg">{giftCard.body}</p>
            <div className="mt-6 sm:mt-7">
              <BookNowButton href={giftCard.ctaUrl} className="w-full sm:w-auto sm:text-lg">
                {giftCard.ctaLabel}
              </BookNowButton>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xl">
            <div className="overflow-hidden rounded-[2rem] bg-deep shadow-2xl shadow-ocean/30 ring-1 ring-white/10">
              <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                <Media
                  image={
                    giftCard.image ?? {
                      src: "/images/tours/clear-kayak-guests.webp",
                      alt: "Clear kayak adventure paddling beside Jupiter mangroves",
                    }
                  }
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/35 to-transparent" />
                <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3 sm:inset-x-6 sm:top-6">
                  <div className="rounded-2xl bg-white/95 px-3 py-2 shadow-lg shadow-black/20">
                    <Image
                      src="/brand/logo.png"
                      alt="Clear Kayaking Adventures"
                      width={392}
                      height={128}
                      unoptimized
                      className="h-7 w-[85px] max-w-none object-contain object-left sm:h-10 sm:w-[122px]"
                    />
                  </div>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white ring-1 ring-white/25 backdrop-blur">
                    Gift Card
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <div className="max-w-md rounded-3xl bg-deep/70 p-4 text-white ring-1 ring-white/10 backdrop-blur sm:p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-foam/75">An Unforgettable Adventure</p>
                    <p className="mt-1 font-display text-xl font-extrabold sm:text-3xl">Clear kayak tours on Jupiter&apos;s waterways</p>
                    <p className="mt-2 text-sm leading-relaxed text-foam/85">
                      Transparent kayaks, local guides, and a front-row seat to Florida&apos;s mangroves and wildlife.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
