import type { SiteContent } from "@/lib/content/types";
import { BookNowButton } from "@/components/ui/BookNowButton";

export function MobileBookingBar({ content }: { content: SiteContent }) {
  const tel = `tel:${content.site.phone.replace(/[^0-9]/g, "")}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ocean/10 bg-white/95 px-4 py-3 shadow-[0_-12px_30px_rgba(7,49,74,0.14)] backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <BookNowButton href={content.site.fareHarborUrl} className="min-h-[52px] flex-1 px-4 text-base">
          Book Now
        </BookNowButton>
        <a
          href={tel}
          className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-ocean/20 px-4 text-base font-bold text-ocean hover:bg-foam"
        >
          Call
        </a>
      </div>
      <p className="mt-1 text-center text-xs font-semibold text-inkmuted">
        Clear Kayak Tours in Jupiter · Small groups · Beginner friendly
      </p>
    </div>
  );
}
