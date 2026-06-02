import "server-only";
import type { Review } from "@/lib/content/types";

type GoogleReviewsResult = {
  rating?: number;
  total?: number;
  reviews: Review[];
};

/**
 * Fetches up to ~5 reviews + aggregate rating from the Google Places API.
 * Returns an empty result when no API key / place ID is configured, so
 * callers can fall back to bundled/curated reviews. Server-only; the key
 * must never be exposed to the client. Cache for 24h at the call site.
 */
export async function getGoogleReviews(placeId?: string): Promise<GoogleReviewsResult> {
  const key = process.env.GOOGLE_MAPS_API_KEY;
  if (!key || !placeId) return { reviews: [] };

  try {
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "rating,user_ratings_total,reviews");
    url.searchParams.set("reviews_sort", "newest");
    url.searchParams.set("key", key);

    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return { reviews: [] };
    const data = await res.json();
    const r = data?.result;
    if (!r) return { reviews: [] };

    const reviews: Review[] = (r.reviews ?? []).map(
      (rv: { author_name: string; rating: number; text: string; time?: number }) => ({
        author: rv.author_name,
        rating: rv.rating,
        text: rv.text,
        source: "google" as const,
        date: rv.time ? new Date(rv.time * 1000).toISOString() : undefined,
      })
    );

    return { rating: r.rating, total: r.user_ratings_total, reviews };
  } catch {
    return { reviews: [] };
  }
}
