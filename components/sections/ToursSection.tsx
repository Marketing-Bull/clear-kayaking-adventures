import Link from "next/link";
import type { SiteContent, Tour } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { SectionHeading } from "./SectionHeading";
import { ClockIcon } from "@/components/ui/icons";

function duration(min?: number) {
  if (!min) return null;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${h ? `${h} hr ` : ""}${m ? `${m} min` : ""}`.trim();
}

function TourCard({ tour, site }: { tour: Tour; site: SiteContent["site"] }) {
  const href = tour.fareHarborUrl || site.fareHarborUrl;
  const tel = `tel:${site.phone.replace(/[^0-9]/g, "")}`;
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ocean/5">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Media image={tour.image} sizes="(max-width:768px) 100vw, 33vw" className="transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-bold">
            <Link href={`/tours/${tour.slug}`} className="hover:text-ocean">
              {tour.name}
            </Link>
          </h3>
          {tour.startTime && (
            <span className="rounded-full bg-sun/15 px-3 py-1 text-sm font-semibold text-sun">
              {tour.startTime}
            </span>
          )}
        </div>
        {duration(tour.durationMinutes) && (
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-inkmuted">
            <ClockIcon className="h-4 w-4 text-lagoon" /> {duration(tour.durationMinutes)}
          </p>
        )}
        <p className="mt-3 flex-1 text-inkmuted">{tour.shortDescription}</p>
        <div className="mt-5">
          {tour.bookByPhone ? (
            <a
              href={tel}
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-ocean px-5 py-2.5 font-semibold text-white hover:bg-deep"
            >
              Call to Book
            </a>
          ) : (
            <BookNowButton href={href}>Book Now</BookNowButton>
          )}
        </div>
      </div>
    </article>
  );
}

export function ToursSection({ content }: { content: SiteContent }) {
  const { tours, toursSection, site } = content;
  const primary = tours.find((t) => t.category === "primary");
  const onRequest = tours.filter((t) => t.category === "upon-request");
  const privateTour = tours.find((t) => t.category === "private");
  const tel = `tel:${site.phone.replace(/[^0-9]/g, "")}`;

  return (
    <section id="tours" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <SectionHeading
          center
          eyebrow="Clear Kayak Tours in Jupiter"
          title={toursSection.heading}
          intro={toursSection.intro}
        />

        {primary && (
          <div className="mt-12 grid items-stretch gap-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-ocean to-deep text-white md:grid-cols-2">
            <div className="relative min-h-[260px]">
              <Media image={primary.image} sizes="(max-width:768px) 100vw, 50vw" className="h-full w-full" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-sun px-3 py-1 text-sm font-bold uppercase tracking-wide text-white">
                Most Popular
              </span>
              <h3 className="text-2xl font-extrabold sm:text-3xl" style={{ color: "#fff" }}>
                {primary.name}
              </h3>
              <p className="mt-3 text-foam/90">{primary.shortDescription}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {primary.whatsIncluded.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-foam/90">
                    <span className="text-aqua" aria-hidden>✓</span> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <BookNowButton href={primary.fareHarborUrl || site.fareHarborUrl} className="text-lg">
                  Book This Tour
                </BookNowButton>
                <Link
                  href={`/tours/${primary.slug}`}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/40 hover:bg-white/20"
                >
                  Tour Details
                </Link>
              </div>
            </div>
          </div>
        )}

        {onRequest.length > 0 && (
          <div className="mt-16">
            <h3 className="text-center text-2xl font-bold">Tours Upon Request</h3>
            <p className="mx-auto mt-2 max-w-2xl text-center text-inkmuted">
              Want something different? These specialty tours run on request — give us a call to schedule.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {onRequest.map((t) => (
                <TourCard key={t.slug} tour={t} site={site} />
              ))}
            </div>
          </div>
        )}

        {privateTour && (
          <div className="mt-12 flex flex-col items-center gap-6 rounded-[2rem] bg-foam p-8 text-center sm:p-12">
            <h3 className="text-2xl font-extrabold sm:text-3xl">{privateTour.name}</h3>
            <p className="max-w-2xl text-lg text-inkmuted">{privateTour.shortDescription}</p>
            <a
              href={tel}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-ocean px-7 py-3 text-lg font-semibold text-white hover:bg-deep"
            >
              Call {site.phone}
            </a>
          </div>
        )}
      </Container>
    </section>
  );
}
