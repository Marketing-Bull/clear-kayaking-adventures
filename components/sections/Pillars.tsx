import type { SiteContent, Pillar } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "./SectionHeading";
import { KayakIcon, GuideIcon, FamilyIcon } from "@/components/ui/icons";

const ICONS = {
  kayak: KayakIcon,
  guide: GuideIcon,
  family: FamilyIcon,
} as const;

export function Pillars({ content }: { content: SiteContent }) {
  const { pillarsSection } = content;
  return (
    <section className="bg-foam py-14 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          center
          eyebrow="The Clear Difference"
          title={pillarsSection.heading}
        />
        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3 lg:mt-12">
          {pillarsSection.pillars.map((p: Pillar) => {
            const Icon = ICONS[p.icon] ?? KayakIcon;
            return (
              <div
                key={p.title}
                className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-ocean/5 transition-transform hover:-translate-y-1 sm:rounded-3xl sm:p-7 lg:p-8"
              >
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-aqua to-ocean text-white sm:mb-5 sm:h-16 sm:w-16">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-inkmuted">{p.body}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
