import type { SiteContent } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";
import { BookNowButton } from "@/components/ui/BookNowButton";
import { PhoneIcon, MailIcon, ClockIcon, MapPinIcon } from "@/components/ui/icons";

export function Contact({ content }: { content: SiteContent }) {
  const { site } = content;
  const tel = `tel:${site.phone.replace(/[^0-9]/g, "")}`;
  const items = [
    { icon: PhoneIcon, label: "Call or Text", value: site.phone, href: tel },
    { icon: MailIcon, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: ClockIcon, label: "Hours", value: site.hours },
    { icon: MapPinIcon, label: "Where", value: "Jupiter, Florida" },
  ];
  return (
    <section id="contact" className="scroll-mt-24 bg-gradient-to-br from-ocean to-deep py-16 text-white sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-aqua">Contact Us</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl" style={{ color: "#fff" }}>
              Ready to paddle? Let&apos;s get you on the water.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-foam/90">
              Book online in seconds, or reach out with any questions about tours, private
              groups, or gift cards — we&apos;re happy to help.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <BookNowButton href={site.fareHarborUrl} className="text-lg">
                Book Your Tour
              </BookNowButton>
              <a
                href={tel}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white/10 px-6 py-3 text-lg font-semibold text-white ring-1 ring-white/40 hover:bg-white/20"
              >
                Call {site.phone}
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <Icon className="h-6 w-6 text-aqua" />
                  <div>
                    <p className="text-sm text-foam/70">{label}</p>
                    <p className="font-semibold text-white">{value}</p>
                  </div>
                </>
              );
              return href ? (
                <a key={label} href={href} className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/10">
                  {inner}
                </a>
              ) : (
                <div key={label} className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
