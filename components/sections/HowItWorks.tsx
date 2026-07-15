import type { SiteContent } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "./SectionHeading";

export function HowItWorks({ content }: { content: SiteContent }) {
  const { howItWorksSection } = content;
  return (
    <section id="how-it-works" className="section-render scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          center
          eyebrow="Easy From Start to Finish"
          title={howItWorksSection.heading}
          intro={howItWorksSection.intro}
        />
        <div className="relative mt-10 lg:mt-14">
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-7 hidden h-px bg-gradient-to-r from-lagoon/35 via-aqua/60 to-lagoon/35 md:block" aria-hidden />
          <ol className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {howItWorksSection.steps.map((step, i) => (
              <li
                key={step.title}
                className="relative rounded-[1.4rem] bg-foam p-6 text-center sm:p-8"
              >
                <div className="relative z-10 mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-ocean to-lagoon font-display text-xl font-extrabold text-white">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold">{step.title.replace(/^\d+\.\s*/, "")}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-inkmuted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
