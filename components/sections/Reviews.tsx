import type { SiteContent } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "./SectionHeading";
import { StarIcon } from "@/components/ui/icons";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={i < rating ? "h-5 w-5 text-sun" : "h-5 w-5 text-ink/15"} />
      ))}
    </div>
  );
}

export function Reviews({ content }: { content: SiteContent }) {
  const { reviews, reviewsSection } = content;
  if (!reviews.length) return null;
  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="reviews" className="section-render scroll-mt-24 bg-sand py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionHeading center eyebrow="5-Star Experiences" title={reviewsSection.heading} intro={reviewsSection.subheading} />
          <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-inkmuted">
            <Stars rating={5} />
            <span className="font-display text-3xl font-extrabold text-ink">{avg}</span>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <figure key={i} className="flex flex-col rounded-2xl bg-white p-6 shadow-[0_20px_50px_-34px_rgba(7,49,74,0.45)] ring-1 ring-slate-200/70 sm:p-7">
              <Stars rating={r.rating} />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink">&ldquo;{r.text}&rdquo;</blockquote>
              <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-2">
                <span className="font-bold text-deep">{r.author}</span>
                <span className="text-xs uppercase tracking-[0.1em] text-inkmuted">
                  {r.source}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
