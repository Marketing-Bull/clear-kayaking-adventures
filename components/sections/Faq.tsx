"use client";

import { useState } from "react";
import type { SiteContent } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "./SectionHeading";
import { ChevronDownIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export function Faq({ content }: { content: SiteContent }) {
  const { faqs, faqSection } = content;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-foam py-14 sm:py-20 lg:py-24">
      <Container className="max-w-3xl">
        <SectionHeading center eyebrow="Good to Know" title={faqSection.heading} intro={faqSection.intro} />
        <div className="mt-8 space-y-3 sm:mt-10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="overflow-hidden rounded-2xl bg-white ring-1 ring-ocean/5">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                >
                  <span className="text-base font-semibold text-deep sm:text-lg">{f.question}</span>
                  <ChevronDownIcon
                    className={cn(
                      "h-5 w-5 shrink-0 text-ocean transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 text-inkmuted sm:px-6 sm:pb-5">{f.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
