import { getContent } from "@/lib/content";
import { organizationSchema } from "@/lib/schema";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { JsonLd } from "@/components/JsonLd";

export default async function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const content = await getContent();
  return (
    <>
      <JsonLd data={organizationSchema(content)} />
      <AnnouncementBar announcement={content.announcement} />
      <Header content={content} />
      <main className="flex-1">{children}</main>
      <Footer content={content} />
    </>
  );
}
