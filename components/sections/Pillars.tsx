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
    <section className="bg-foam py-16 sm:py-24">
      <Container>
        <SectionHeading
          center
          eyebrow="The Clear Difference"
          title={pillarsSection.heading}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillarsSection.pillars.map((p: Pillar) => {
            const Icon = ICONS[p.icon] ?? KayakIcon;
            return (
              <div
                key={p.title}
                className="rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-ocean/5 transition-transform hover:-translate-y-1"
              >
                <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-aqua to-ocean text-white">
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
