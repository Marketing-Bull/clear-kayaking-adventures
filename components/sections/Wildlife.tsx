import type { SiteContent } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/cn";

export function Wildlife({ content }: { content: SiteContent }) {
  const { wildlife, wildlifeSection } = content;
  return (
    <section id="wildlife" className="scroll-mt-24 bg-gradient-to-b from-white to-foam py-16 sm:py-24">
      <Container>
        <SectionHeading
          center
          eyebrow="Jupiter Wildlife"
          title={wildlifeSection.heading}
          intro={wildlifeSection.intro}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {wildlife.map((w) => (
            <article
              key={w.name}
              className={cn(
                "group relative overflow-hidden rounded-3xl shadow-sm ring-1 ring-ocean/5",
                w.highlight ? "sm:col-span-1 lg:row-span-1" : ""
              )}
            >
              <div className="relative aspect-[5/4]">
                <Media image={w.image} sizes="(max-width:768px) 100vw, 33vw" className="transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold" style={{ color: "#fff" }}>
                    {w.name}
                  </h3>
                  {w.highlight && (
                    <span className="rounded-full bg-sun px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide">
                      Guest Favorite
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-sm text-foam/90">{w.blurb}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl rounded-2xl bg-ocean/5 px-5 py-4 text-center text-inkmuted">
          <span className="font-semibold text-deep">What you may see: </span>
          {wildlifeSection.disclaimer}
        </p>
      </Container>
    </section>
  );
}
