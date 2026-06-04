import type { SiteContent } from "@/lib/content/types";
import { BookNowButton } from "@/components/ui/BookNowButton";

export function MobileBookingBar({ content }: { content: SiteContent }) {
  const tel = `tel:${content.site.phone.replace(/[^0-9]/g, "")}`;

  return (
    <div className="mobile-booking-bar fixed inset-x-0 bottom-0 z-50 border-t border-ocean/10 bg-white/95 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-[0_-12px_30px_rgba(7,49,74,0.14)] backdrop-blur sm:px-4 lg:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-2.5">
        <BookNowButton href={content.site.fareHarborUrl} className="min-h-[50px] flex-1 px-4 text-base">
          Book Now
        </BookNowButton>
        <a
          href={tel}
          className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-ocean/20 px-4 text-base font-bold text-ocean hover:bg-foam"
        >
          Call
        </a>
      </div>
    </div>
  );
}
