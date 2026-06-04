import type { SiteContent } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { StarIcon } from "@/components/ui/icons";

export function TrustStrip({ content }: { content: SiteContent }) {
  const reviewCount = content.reviews.length;
  const averageRating = reviewCount
    ? (content.reviews.reduce((sum, review) => sum + (review.rating || 0), 0) / reviewCount).toFixed(1)
    : "5.0";

  const proof = [
    {
      label: `${averageRating}/5 guest rating`,
      body: "Visible review proof from Google, FareHarbor, and approved guest testimonials.",
    },
    {
      label: "Education-focused local guides",
      body: "Small groups led by guides who explain Jupiter's mangroves, seagrass, and marine life.",
    },
    {
      label: "Easy mobile booking",
      body: "Book online in seconds, then arrive 20 minutes early for waiver, gear, and safety briefing.",
    },
  ];

  return (
    <section className="relative z-10 bg-white py-5 shadow-sm ring-1 ring-ocean/10 sm:py-7">
      <Container>
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="grid gap-2.5 md:grid-cols-3 md:gap-3">
            {proof.map((item) => (
              <div key={item.label} className="rounded-2xl bg-foam px-4 py-3.5 sm:px-5 sm:py-4">
                <div className="mb-1 flex items-center gap-1 text-sun">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} className="h-4 w-4" />
                  ))}
                </div>
                <h2 className="text-base font-extrabold text-deep sm:text-lg">{item.label}</h2>
                <p className="mt-1 text-sm leading-5 text-inkmuted sm:leading-6">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="hidden lg:block">
            <BookNowButton href={content.site.fareHarborUrl}>
              Book Your Clear Kayak Tour
            </BookNowButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
