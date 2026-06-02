import type { SiteContent } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "./SectionHeading";

export function HowItWorks({ content }: { content: SiteContent }) {
  const { howItWorksSection } = content;
  return (
    <section id="how-it-works" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <SectionHeading
          center
          eyebrow="Easy From Start to Finish"
          title={howItWorksSection.heading}
          intro={howItWorksSection.intro}
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {howItWorksSection.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-3xl bg-foam p-8"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-ocean to-deep text-2xl font-extrabold text-white">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold">{step.title.replace(/^\d+\.\s*/, "")}</h3>
              <p className="mt-3 text-inkmuted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
