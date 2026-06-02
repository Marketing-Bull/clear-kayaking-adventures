import { getContent } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, reviewsSchema, websiteSchema } from "@/lib/schema";
import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { ToursSection } from "@/components/sections/ToursSection";
import { Wildlife } from "@/components/sections/Wildlife";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Reviews } from "@/components/sections/Reviews";
import { GiftCard } from "@/components/sections/GiftCard";
import { Faq } from "@/components/sections/Faq";
import { LaunchMap } from "@/components/sections/LaunchMap";
import { Contact } from "@/components/sections/Contact";

export default async function HomePage() {
  const content = await getContent();
  return (
    <>
      <JsonLd data={[websiteSchema(content), faqSchema(content), ...reviewsSchema(content)]} />
      <Hero content={content} />
      <Pillars content={content} />
      <ToursSection content={content} />
      <Wildlife content={content} />
      <HowItWorks content={content} />
      <Reviews content={content} />
      <GiftCard content={content} />
      <Faq content={content} />
      <LaunchMap content={content} />
      <Contact content={content} />
    </>
  );
}
