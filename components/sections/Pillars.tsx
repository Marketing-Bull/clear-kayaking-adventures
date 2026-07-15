import type { SiteContent } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";

export function Pillars({ content }: { content: SiteContent }) {
  const { pillarsSection } = content;
  return (
    <section className="section-render bg-foam py-20 sm:py-24 lg:py-28">
      <Container>
        <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-lagoon sm:text-sm">
          The Clear Difference
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-center text-4xl font-extrabold sm:text-5xl">
          {pillarsSection.heading}
        </h2>
        <div className="mt-12 space-y-16 sm:mt-16 sm:space-y-20 lg:space-y-24">
          {pillarsSection.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="grid items-center gap-7 md:grid-cols-2 md:gap-12 lg:gap-16"
            >
              <div className={index % 2 ? "md:order-2" : undefined}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-[0_30px_60px_-34px_rgba(7,49,74,0.6)]">
                  <Media
                    image={pillar.image ?? { alt: pillar.title }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-lagoon sm:text-sm">
                  {pillar.eyebrow ?? pillar.title}
                </p>
                <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">{pillar.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-inkmuted">{pillar.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
