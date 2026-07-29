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
  const tel = `tel:${site.phone.replace(/[^0-9]/g, "")}`;
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-aqua hover:shadow-[0_18px_40px_-28px_rgba(7,49,74,0.45)] sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-xl font-bold">
          <Link href={`/tours/${tour.slug}`} className="transition-colors hover:text-ocean">
            {tour.name}
          </Link>
        </h3>
        {tour.startTime ? (
          <span className="rounded-full bg-sun/15 px-2.5 py-1 text-xs font-bold text-sun">
            {tour.startTime}
          </span>
        ) : null}
      </div>
      {duration(tour.durationMinutes) ? (
        <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-inkmuted">
          <ClockIcon className="h-4 w-4 text-lagoon" /> {duration(tour.durationMinutes)}
        </p>
      ) : null}
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-inkmuted">{tour.shortDescription}</p>
      <a href={tel} className="mt-4 text-sm font-bold text-ocean hover:text-deep">
        Call to book →
      </a>
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
    <section id="tours" className="section-render scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          center
          eyebrow="Clear Kayak Tours in Jupiter"
          title={toursSection.heading}
          intro={toursSection.intro}
        />

        {primary && (
          <div className="mt-10 grid items-stretch overflow-hidden rounded-[1.6rem] bg-white shadow-[0_36px_80px_-44px_rgba(7,49,74,0.65)] ring-1 ring-slate-200 md:grid-cols-[1.08fr_0.92fr] lg:mt-14">
            <div className="relative min-h-[280px] sm:min-h-[340px]">
              <Media image={primary.image} sizes="(max-width:768px) 100vw, 50vw" className="h-full w-full" />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">
              <span className="mb-4 inline-flex w-fit items-center rounded-full bg-sun px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-white">
                Most Popular
              </span>
              <h3 className="text-3xl font-extrabold sm:text-4xl">
                {primary.name}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-inkmuted">{primary.shortDescription}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {primary.whatsIncluded.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-inkmuted">
                    <span className="font-bold text-lagoon" aria-hidden>✓</span> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3">
                <BookNowButton href={primary.fareHarborUrl || site.fareHarborUrl} className="w-full sm:w-auto sm:text-lg">
                  Book This Tour
                </BookNowButton>
                <Link
                  href={`/tours/${primary.slug}`}
                  className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-ocean/25 px-6 py-3 font-bold text-ocean transition hover:bg-foam sm:w-auto"
                >
                  Tour Details
                </Link>
              </div>
            </div>
          </div>
        )}

        {onRequest.length > 0 && (
          <div className="mt-12 sm:mt-14 lg:mt-16">
            <h3 className="text-center text-2xl font-bold">Tours Upon Request</h3>
            <p className="mx-auto mt-2 max-w-2xl text-center text-inkmuted">
              Want something different? These specialty tours run on request — give us a call to schedule.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {onRequest.map((t) => (
                <TourCard key={t.slug} tour={t} site={site} />
              ))}
            </div>
          </div>
        )}

        {privateTour && (
          <div className="mt-12 grid overflow-hidden rounded-[1.6rem] bg-sand md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="relative min-h-[240px] sm:min-h-[320px]">
              <Media image={privateTour.image} sizes="(max-width:768px) 100vw, 55vw" className="h-full w-full" />
            </div>
            <div className="flex flex-col items-center justify-center gap-5 p-5 text-center sm:gap-6 sm:p-10 lg:p-12">
              <h3 className="text-2xl font-extrabold sm:text-3xl">{privateTour.name}</h3>
              <p className="max-w-2xl text-lg text-inkmuted">{privateTour.shortDescription}</p>
              <a
                href={tel}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-ocean px-6 py-3 text-base font-semibold text-white hover:bg-deep sm:w-auto sm:px-7 sm:text-lg"
              >
                Call {site.phone}
              </a>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
