import Link from "next/link";
import type { SiteContent } from "@/lib/content/types";

export function AnnouncementBar({
  announcement,
}: {
  announcement: SiteContent["announcement"];
}) {
  if (!announcement.enabled) return null;
  const text = (
    <span className="inline-flex items-center gap-2 font-semibold tracking-wide">
      <span aria-hidden>🎉</span>
      {announcement.text}
    </span>
  );
  return (
    <div className="bg-deep text-white text-center text-sm sm:text-base py-2 px-4">
      {announcement.link ? (
        <Link href={announcement.link} className="hover:underline">
          {text}
        </Link>
      ) : (
        text
      )}
    </div>
  );
}
