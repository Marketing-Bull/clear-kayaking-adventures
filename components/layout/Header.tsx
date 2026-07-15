"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { SiteContent } from "@/lib/content/types";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { cn } from "@/lib/cn";

const NAV = [
  { label: "Tours", href: "/#tours" },
  { label: "What You'll See", href: "/#wildlife" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Where We Launch", href: "/#launch" },
  { label: "Contact Us", href: "/#contact" },
];

export function Header({ content }: { content: SiteContent }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.body.classList.toggle("menu-open", open);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-slate-200/70 transition-colors",
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-xl"
          : "bg-white/85 backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex h-[70px] max-w-[1180px] items-center justify-between gap-2 px-4 sm:h-[74px] sm:gap-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Clear Kayaking Adventures — home" className="flex shrink-0 items-center">
          <Image
            src="/brand/logo.png"
            alt="Clear Kayaking Adventures"
            width={392}
            height={128}
            priority
            unoptimized
            className="h-11 w-[134px] max-w-none object-contain object-left sm:h-12 sm:w-[146px]"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.95rem] font-semibold text-ink/80 transition-colors hover:text-ocean"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BookNowButton href={content.site.fareHarborUrl}>Book Now</BookNowButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-deep lg:hidden"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <path d="m6 6 12 12" />
                <path d="m18 6-12 12" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100svh-6.25rem)] overflow-y-auto lg:hidden">
          <nav className="flex flex-col gap-1 border-t border-foam bg-white px-4 pb-5 pt-2 sm:px-6">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-lg font-medium text-ink hover:bg-foam"
              >
                {item.label}
              </Link>
            ))}
            <BookNowButton href={content.site.fareHarborUrl} className="mt-3 w-full">
              Book Now
            </BookNowButton>
            <a
              href={`tel:${content.site.phone.replace(/[^0-9]/g, "")}`}
              className="mt-2 text-center text-base font-semibold text-ocean"
            >
              Call {content.site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
