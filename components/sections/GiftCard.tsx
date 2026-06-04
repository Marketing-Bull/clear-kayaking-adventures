import Image from "next/image";
import type { SiteContent } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { GiftIcon } from "@/components/ui/icons";

export function GiftCard({ content }: { content: SiteContent }) {
  const { giftCard } = content;
  return (
    <section id="gift" className="scroll-mt-24 py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-8 rounded-2xl bg-gradient-to-br from-lagoon/10 to-aqua/10 p-5 sm:gap-10 sm:rounded-[2rem] sm:p-10 lg:grid-cols-2 lg:p-12">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-lagoon">
              <GiftIcon className="h-5 w-5" /> The Perfect Gift
            </p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">{giftCard.heading}</h2>
            <p className="mt-3 max-w-xl text-base text-inkmuted sm:mt-4 sm:text-lg">{giftCard.body}</p>
            <div className="mt-6 sm:mt-7">
              <BookNowButton href={giftCard.ctaUrl} className="w-full sm:w-auto sm:text-lg">
                {giftCard.ctaLabel}
              </BookNowButton>
            </div>
          </div>

          {/* Gift card visual */}
          <div className="mx-auto w-full max-w-md">
            <div className="relative aspect-[1.6/1] overflow-hidden rounded-2xl bg-gradient-to-br from-deep via-ocean to-lagoon p-4 text-white shadow-2xl shadow-ocean/30 sm:rounded-3xl sm:p-7">
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(120% 100% at 10% 0%, rgba(255,255,255,.45), transparent 45%)",
                }}
                aria-hidden
              />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="rounded-lg bg-white/95 px-2 py-1.5">
                    <Image
                      src="/clear-kayaking-adventures-logo.png"
                      alt="Clear Kayaking Adventures"
                      width={1500}
                      height={580}
                      className="h-7 w-auto sm:h-10"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-foam/70">Gift Card</p>
                  <p className="font-display text-lg font-extrabold min-[380px]:text-xl sm:text-3xl">An Unforgettable Adventure</p>
                </div>
                <div className="flex items-end justify-between gap-2 text-[0.65rem] text-foam/80 sm:text-sm">
                  <span>Jupiter, Florida</span>
                  <span className="rounded bg-white/15 px-2 py-1 font-mono tracking-widest">
                    GIFT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
