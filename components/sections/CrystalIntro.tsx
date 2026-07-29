import type { SiteContent } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";

export function CrystalIntro({ content }: { content: SiteContent }) {
  const { introStatement } = content;

  return (
    <section className="section-render bg-white py-20 sm:py-28 lg:py-32">
      <Container className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-lagoon sm:text-sm">
          {introStatement.eyebrow}
        </p>
        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold sm:text-5xl lg:text-6xl">
          {introStatement.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-inkmuted sm:text-xl">
          {introStatement.body}
        </p>
      </Container>
    </section>
  );
}
