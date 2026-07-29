import type { SiteContent } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";

export function Wildlife({ content }: { content: SiteContent }) {
  const { wildlife, wildlifeSection } = content;
  return (
    <section id="wildlife" className="section-render relative scroll-mt-24 overflow-hidden bg-deep py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_65%_at_82%_0%,rgba(70,207,214,0.24),transparent_62%)]" />
      <Container className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-aqua sm:text-sm">
          Jupiter Wildlife
        </p>
        <h2 className="mt-3 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl" style={{ color: "#fff" }}>
          {wildlifeSection.heading}
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foam/85">
          {wildlifeSection.intro}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {wildlife.map((w) => (
            <article
              key={w.name}
              className={`rounded-2xl border p-5 backdrop-blur-sm sm:p-6 ${
                w.highlight
                  ? "border-sun/70 bg-white/[0.08]"
                  : "border-white/15 bg-white/[0.06]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl ring-1 ring-white/15">
                  <Media image={w.image} sizes="80px" />
                </div>
                {w.highlight ? (
                  <span className="rounded-full bg-sunsoft px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-deep">
                    Guest Favorite
                  </span>
                ) : null}
              </div>
              <h3 className="mt-5 text-2xl font-bold text-white" style={{ color: "#fff" }}>{w.name}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-foam/75">{w.blurb}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-4xl text-sm leading-relaxed text-foam/60 sm:text-base">
          <span className="font-semibold text-foam/80">What you may see: </span>
          {wildlifeSection.disclaimer}
        </p>
      </Container>
    </section>
  );
}
