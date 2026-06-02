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
    <section id="reviews" className="scroll-mt-24 bg-deep py-16 text-white sm:py-24">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionHeading center light eyebrow="5-Star Experiences" title={reviewsSection.heading} intro={reviewsSection.subheading} />
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2 ring-1 ring-white/20">
            <Stars rating={5} />
            <span className="text-lg font-bold text-white">{avg}</span>
            <span className="text-foam/80">· {reviews.length} reviews</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <figure key={i} className="flex flex-col rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
              <Stars rating={r.rating} />
              <blockquote className="mt-4 flex-1 text-foam/90">&ldquo;{r.text}&rdquo;</blockquote>
              <figcaption className="mt-5 flex items-center justify-between">
                <span className="font-semibold text-white">{r.author}</span>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs uppercase tracking-wide text-foam/70">
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
