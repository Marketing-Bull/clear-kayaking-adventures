import type { SiteContent } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "./SectionHeading";

export function HowItWorks({ content }: { content: SiteContent }) {
  const { howItWorksSection } = content;
  return (
    <section id="how-it-works" className="scroll-mt-24 py-14 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          center
          eyebrow="Easy From Start to Finish"
          title={howItWorksSection.heading}
          intro={howItWorksSection.intro}
        />
        <ol className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3 lg:mt-12">
          {howItWorksSection.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl bg-foam p-5 sm:rounded-3xl sm:p-7 lg:p-8"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-ocean to-deep text-xl font-extrabold text-white sm:mb-5 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl">
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
