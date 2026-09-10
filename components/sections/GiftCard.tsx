import Image from "next/image";
import type { Img, SiteContent } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { Media } from "@/components/ui/Media";
import { GiftIcon, KayakIcon, MapPinIcon } from "@/components/ui/icons";

const FALLBACK_IMAGE: Img = {
  src: "/images/tours/tour-private-group.webp",
  alt: "Private clear kayak group tour beside Jupiter mangroves",
};

/** Gold EMV-style contact chip — the strongest "this is a real card" cue. */
function CardChip() {
  return (
    <div
      aria-hidden
      className="relative h-[9cqw] w-[13cqw] shrink-0 rounded-[1.6cqw] bg-[linear-gradient(135deg,#fff3cd_0%,#ffce5a_36%,#d9a13a_64%,#fff1c4_100%)] ring-1 ring-[#a97f27]/70"
    >
      <span className="absolute inset-x-[14%] top-1/2 h-px -translate-y-1/2 bg-[#a97f27]/70" />
      <span className="absolute inset-y-[16%] left-[33%] w-px bg-[#a97f27]/70" />
      <span className="absolute inset-y-[16%] left-[67%] w-px bg-[#a97f27]/70" />
      <span className="absolute inset-[24%] rounded-[0.6cqw] ring-1 ring-[#a97f27]/50" />
    </div>
  );
}

/** Engine-turned guilloche lines, the way security printing looks on a real card. */
function Guilloche() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
      viewBox="0 0 640 404"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="ck-guilloche" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9ff0f4" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#46cfd6" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      {Array.from({ length: 11 }).map((_, i) => {
        const y = -30 + i * 42;
        return (
          <path
            key={i}
            d={`M-40 ${y + 70} C 110 ${y + 14}, 235 ${y + 132}, 390 ${y + 66} S 590 ${y + 6}, 700 ${y + 92}`}
            fill="none"
            stroke="url(#ck-guilloche)"
            strokeWidth="1.1"
          />
        );
      })}
    </svg>
  );
}

/**
 * The gift card artwork itself: real ID-1 card proportions (85.6 × 54mm),
 * printed photo under a brand scrim, guilloche, chip, and a specular sheen.
 * Sized in container units (cqw) so every element scales with the card, not
 * the viewport.
 */
function GiftCardArt({ image }: { image: Img }) {
  return (
    <div className="@container relative aspect-[1.586/1] w-full overflow-hidden rounded-[4cqw] bg-deep text-white shadow-[0_36px_64px_-24px_rgba(7,49,74,0.65),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.3)] ring-1 ring-white/15">
      <div className="absolute inset-0 opacity-60">
        <Media image={image} sizes="(max-width: 1024px) 92vw, 46vw" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,49,74,0.94)_0%,rgba(14,107,168,0.82)_46%,rgba(16,159,184,0.6)_100%)]" />
      <Guilloche />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(112deg,transparent_16%,rgba(255,255,255,0.3)_33%,rgba(255,255,255,0.06)_45%,transparent_57%)]"
      />

      <div className="relative flex h-full flex-col justify-between p-[6cqw]">
        <div className="flex items-start justify-between gap-[4cqw]">
          <Image
            src="/brand/logo-white.png"
            alt="Clear Kayaking Adventures"
            width={392}
            height={128}
            unoptimized
            className="h-[9cqw] w-[27.5cqw] max-w-none object-contain object-left"
          />
          <span className="rounded-full bg-white/12 px-[3cqw] py-[1.2cqw] text-[2.6cqw] font-bold uppercase leading-none tracking-[0.24em] text-white ring-1 ring-white/30 backdrop-blur-sm">
            Gift Card
          </span>
        </div>

        <div className="flex items-end justify-between gap-[4cqw]">
          <CardChip />
          <div className="text-right">
            <p className="text-[2.4cqw] font-semibold uppercase leading-none tracking-[0.22em] text-foam/70">
              Value
            </p>
            <p className="mt-[1.4cqw] font-display text-[7.5cqw] font-extrabold leading-none text-white">
              Any Amount
            </p>
          </div>
        </div>

        <div>
          <p
            aria-hidden
            className="font-mono text-[4.4cqw] leading-none tracking-[0.16em] text-white/85 [text-shadow:0_1px_0_rgba(0,0,0,0.35)]"
          >
            •••• •••• •••• ••••
          </p>
          <div className="mt-[3cqw] flex items-end justify-between gap-[4cqw] border-t border-white/15 pt-[3cqw]">
            <p className="text-[2.5cqw] font-semibold uppercase leading-tight tracking-[0.2em] text-foam/80">
              Clear Kayaking Adventures
            </p>
            <p className="text-[2.5cqw] font-semibold uppercase leading-tight tracking-[0.2em] text-foam/60">
              Jupiter, FL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** A second card sitting under the front one, for a stacked-product feel. */
function GiftCardBack() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 translate-x-[3.5%] translate-y-[6%] rotate-[4deg] rounded-[4cqw] bg-[linear-gradient(135deg,#0b4a6d_0%,#06283c_100%)] shadow-[0_24px_44px_-20px_rgba(7,49,74,0.6)] ring-1 ring-white/10"
    />
  );
}

export function GiftCard({ content }: { content: SiteContent }) {
  const { giftCard } = content;
  const image = giftCard.image ?? FALLBACK_IMAGE;

  const perks = [
    { icon: KayakIcon, label: "Good toward any guided clear kayak tour" },
    { icon: MapPinIcon, label: "Paddled on Jupiter's waterways" },
    { icon: GiftIcon, label: "Choose the amount at checkout" },
  ];

  return (
    <section id="gift" className="section-render scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 rounded-[1.6rem] bg-gradient-to-br from-foam to-white p-6 ring-1 ring-ocean/10 sm:p-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-x-14 lg:gap-y-8 lg:p-12">
          <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-lagoon">
              <GiftIcon className="h-5 w-5" /> The Perfect Gift
            </p>
            <h2 className="text-4xl font-extrabold sm:text-5xl">{giftCard.heading}</h2>
            <p className="mt-3 max-w-xl text-base text-inkmuted sm:mt-4 sm:text-lg">{giftCard.body}</p>
          </div>

          <div className="mx-auto w-full max-w-[34rem] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
            <div className="relative [perspective:1400px]">
              <div className="relative transition-transform duration-500 ease-out will-change-transform hover:[transform:rotateY(0deg)_rotateX(0deg)_scale(1.02)] lg:[transform:rotateY(-11deg)_rotateX(5deg)]">
                <GiftCardBack />
                <div className="relative">
                  <GiftCardArt image={image} />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
            <ul className="space-y-3">
              {perks.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3 text-[0.98rem] text-ink">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-ocean to-lagoon text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-7 sm:mt-8">
              <BookNowButton href={giftCard.ctaUrl} className="w-full sm:w-auto sm:text-lg">
                {giftCard.ctaLabel}
              </BookNowButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
