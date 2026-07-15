import Link from "next/link";
import type { SiteContent } from "@/lib/content/types";

export function AnnouncementBar({
  announcement,
}: {
  announcement: SiteContent["announcement"];
}) {
  if (!announcement.enabled) return null;
  const text = (
    <span className="inline-flex items-center gap-2 font-semibold tracking-[0.04em]">
      <span aria-hidden>🎉</span>
      {announcement.text}
    </span>
  );
  return (
    <div className="bg-deep px-4 py-2.5 text-center text-xs text-white sm:text-sm">
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
