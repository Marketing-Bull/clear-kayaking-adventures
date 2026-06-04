import type { SiteContent } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/cn";

export function Wildlife({ content }: { content: SiteContent }) {
  const { wildlife, wildlifeSection } = content;
  return (
    <section id="wildlife" className="scroll-mt-24 bg-gradient-to-b from-white to-foam py-14 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          center
          eyebrow="Jupiter Wildlife"
          title={wildlifeSection.heading}
          intro={wildlifeSection.intro}
        />

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3">
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
              <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                <div className="flex flex-wrap items-center gap-2">
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

        <p className="mx-auto mt-6 max-w-3xl rounded-2xl bg-ocean/5 px-4 py-3.5 text-center text-sm text-inkmuted sm:mt-8 sm:px-5 sm:py-4 sm:text-base">
          <span className="font-semibold text-deep">What you may see: </span>
          {wildlifeSection.disclaimer}
        </p>
      </Container>
    </section>
  );
}
