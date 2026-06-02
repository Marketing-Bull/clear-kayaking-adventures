import type { SiteContent } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "./SectionHeading";
import { MapPinIcon } from "@/components/ui/icons";

function directionsUrl(loc: SiteContent["locations"][number]) {
  if (loc.directionsUrl) return loc.directionsUrl;
  if (loc.geo) return `https://www.google.com/maps/dir/?api=1&destination=${loc.geo.lat},${loc.geo.lng}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.name + " Jupiter FL")}`;
}

export function LaunchMap({ content }: { content: SiteContent }) {
  const { locations, locationsSection } = content;
  return (
    <section id="launch" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <SectionHeading center eyebrow="Find Us" title={locationsSection.heading} intro={locationsSection.intro} />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-ocean/10">
            <iframe
              title="Map of the Jupiter Inlet launch area"
              src="https://www.google.com/maps?q=Jupiter+Inlet,+Jupiter,+FL&z=11&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[340px] w-full sm:h-[420px]"
            />
          </div>

          <div className="grid content-start gap-5">
            {locations.map((loc) => (
              <div key={loc.name} className="rounded-3xl bg-foam p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-aqua to-ocean text-white">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{loc.name}</h3>
                    <p className="mt-1 text-inkmuted">{loc.details}</p>
                    <a
                      href={directionsUrl(loc)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 font-semibold text-ocean hover:text-deep"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>
            ))}
            <p className="px-2 text-sm text-inkmuted">
              Please arrive about 20 minutes early to complete your waiver and safety briefing.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
