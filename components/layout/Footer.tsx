import Image from "next/image";
import Link from "next/link";
import type { SiteContent } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";
import { BookNowButton } from "@/components/ui/BookNowButton";
import {
  PhoneIcon,
  MailIcon,
  ClockIcon,
  MapPinIcon,
  FacebookIcon,
  InstagramIcon,
} from "@/components/ui/icons";

const NAV = [
  { label: "Tours", href: "/#tours" },
  { label: "What You'll See", href: "/#wildlife" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Gift Cards", href: "/#gift" },
  { label: "FAQ", href: "/#faq" },
  { label: "Where We Launch", href: "/#launch" },
  { label: "Contact Us", href: "/#contact" },
];

export function Footer({ content }: { content: SiteContent }) {
  const { site } = content;
  const tel = `tel:${site.phone.replace(/[^0-9]/g, "")}`;
  return (
    <footer className="bg-deep text-foam">
      <Container className="py-10 sm:py-14">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="inline-flex rounded-2xl bg-white px-4 py-2">
              <Image
                src="/clear-kayaking-adventures-logo.png"
                alt="Clear Kayaking Adventures"
                width={1500}
                height={580}
                className="h-16 w-auto"
              />
            </div>
            <p className="mt-4 max-w-sm text-foam/80">
              100% clear kayak eco tours through Jupiter, Florida&apos;s beautiful
              waterways. Small groups, local guides, unforgettable wildlife.
            </p>
            <div className="mt-5 flex gap-3">
              {site.social.map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  {s.platform === "facebook" ? <FacebookIcon /> : <InstagramIcon />}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 content-start gap-x-4 gap-y-2 sm:gap-x-6">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="text-foam/85 hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="min-w-0 space-y-3">
            <a href={tel} className="flex min-w-0 items-center gap-3 text-foam/90 hover:text-white">
              <PhoneIcon className="h-5 w-5 shrink-0 text-aqua" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex min-w-0 items-center gap-3 break-words text-foam/90 hover:text-white">
              <MailIcon className="h-5 w-5 shrink-0 text-aqua" />
              <span className="min-w-0 break-all">{site.email}</span>
            </a>
            <p className="flex items-center gap-3 text-foam/90">
              <ClockIcon className="h-5 w-5 shrink-0 text-aqua" /> {site.hours}
            </p>
            <p className="flex items-center gap-3 text-foam/90">
              <MapPinIcon className="h-5 w-5 shrink-0 text-aqua" /> Jupiter, Florida
            </p>
            <BookNowButton href={site.fareHarborUrl} className="mt-2 w-full sm:w-auto">
              Book Now
            </BookNowButton>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-2 border-t border-white/10 pt-5 text-sm text-foam/60 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <p>Clear Kayaking Jupiter · Indian River &amp; Loxahatchee eco tours</p>
        </div>
      </Container>
    </footer>
  );
}
