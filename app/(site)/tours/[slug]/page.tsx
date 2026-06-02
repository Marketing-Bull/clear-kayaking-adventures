import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getContent, getTourBySlug } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, tourSchema } from "@/lib/schema";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { ClockIcon } from "@/components/ui/icons";

export async function generateStaticParams() {
  const { tours } = await getContent();
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);
  if (!tour) return {};
  return {
    title: `${tour.name} — Clear Kayaking Jupiter`,
    description: tour.shortDescription,
    alternates: { canonical: `/tours/${tour.slug}` },
    openGraph: { title: tour.name, description: tour.shortDescription },
  };
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = await getContent();
  const tour = await getTourBySlug(slug);
  if (!tour) notFound();

  const { site } = content;
  const tel = `tel:${site.phone.replace(/[^0-9]/g, "")}`;
  const hours = tour.durationMinutes ? Math.round((tour.durationMinutes / 60) * 10) / 10 : null;

  return (
    <>
      <JsonLd
        data={[
          tourSchema(tour, content),
          breadcrumbSchema([
            { name: "Home", url: site.siteUrl },
            { name: "Tours", url: `${site.siteUrl}/#tours` },
            { name: tour.name, url: `${site.siteUrl}/tours/${tour.slug}` },
          ]),
        ]}
      />

      <section className="relative isolate flex min-h-[52vh] items-end overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Media image={tour.image} priority sizes="100vw" className="h-full w-full" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep/85 via-deep/30 to-deep/20" />
        <Container className="py-12">
          <Link href="/#tours" className="text-sm font-semibold text-foam/80 hover:text-white">
            ← All Tours
          </Link>
          <h1 className="mt-3 text-4xl font-extrabold text-white" style={{ color: "#fff" }}>
            {tour.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-foam/90">
            {hours && (
              <span className="inline-flex items-center gap-1.5">
                <ClockIcon className="h-5 w-5 text-aqua" /> About {hours} hours on the water
              </span>
            )}
            {tour.startTime && <span>· Departs {tour.startTime}</span>}
          </div>
        </Container>
      </section>

      <Container className="grid gap-12 py-14 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <div className="prose-lg space-y-4 text-lg text-inkmuted">
            {tour.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-3xl bg-foam p-7 lg:sticky lg:top-24">
          <h2 className="text-xl font-bold">What&apos;s Included</h2>
          <ul className="mt-4 space-y-2.5">
            {tour.whatsIncluded.map((item) => (
              <li key={item} className="flex items-center gap-2 text-inkmuted">
                <span className="text-lagoon" aria-hidden>✓</span> {item}
              </li>
            ))}
          </ul>
          <div className="mt-7">
            {tour.bookByPhone ? (
              <a
                href={tel}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-ocean px-6 py-3 text-lg font-semibold text-white hover:bg-deep"
              >
                Call {site.phone} to Book
              </a>
            ) : (
              <BookNowButton href={tour.fareHarborUrl || site.fareHarborUrl} className="w-full text-lg">
                Book This Tour
              </BookNowButton>
            )}
          </div>
        </aside>
      </Container>
    </>
  );
}
