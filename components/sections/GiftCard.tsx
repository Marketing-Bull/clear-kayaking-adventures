import type { SiteContent } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { GiftIcon } from "@/components/ui/icons";

export function GiftCard({ content }: { content: SiteContent }) {
  const { giftCard } = content;
  return (
    <section id="gift" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 rounded-[2rem] bg-gradient-to-br from-lagoon/10 to-aqua/10 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-lagoon">
              <GiftIcon className="h-5 w-5" /> The Perfect Gift
            </p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">{giftCard.heading}</h2>
            <p className="mt-4 max-w-xl text-lg text-inkmuted">{giftCard.body}</p>
            <div className="mt-7">
              <BookNowButton href={giftCard.ctaUrl} className="text-lg">
                {giftCard.ctaLabel}
              </BookNowButton>
            </div>
          </div>

          {/* Gift card visual */}
          <div className="mx-auto w-full max-w-md">
            <div className="relative aspect-[1.6/1] overflow-hidden rounded-3xl bg-gradient-to-br from-deep via-ocean to-lagoon p-7 text-white shadow-2xl shadow-ocean/30">
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
                  <div className="font-display text-lg font-extrabold leading-tight">
                    Clear Kayaking
                    <span className="block text-xs font-semibold tracking-widest text-aqua">
                      ADVENTURES
                    </span>
                  </div>
                  <span aria-hidden className="text-3xl">🛶</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-foam/70">Gift Card</p>
                  <p className="font-display text-3xl font-extrabold">An Unforgettable Adventure</p>
                </div>
                <div className="flex items-end justify-between text-sm text-foam/80">
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
