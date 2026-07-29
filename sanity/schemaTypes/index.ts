import { defineType, defineField, defineArrayMember } from "sanity";

const imageWithAlt = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Alt text (for accessibility & SEO)",
        type: "string",
      }),
    ],
  });

const orderField = defineField({
  name: "order",
  title: "Display order",
  type: "number",
});

/* ---------------- Singletons ---------------- */

const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", initialValue: "Clear Kayaking Adventures" }),
    defineField({ name: "legalName", type: "string" }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "fareHarborUrl", title: "FareHarbor Booking URL", type: "url" }),
    defineField({ name: "googlePlaceId", title: "Google Place ID (for reviews)", type: "string" }),
    defineField({ name: "priceRange", type: "string", initialValue: "$$" }),
    defineField({ name: "geo", title: "Map location", type: "geopoint" }),
    defineField({ name: "hours", title: "Hours (display text)", type: "string" }),
    defineField({
      name: "social",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "platform",
              type: "string",
              options: { list: ["facebook", "instagram", "tiktok", "youtube"] },
            }),
            defineField({ name: "url", type: "url" }),
          ],
        }),
      ],
    }),
    defineField({ name: "seoTitle", type: "string" }),
    defineField({ name: "seoDescription", type: "text", rows: 3 }),
    defineField({ name: "siteUrl", type: "url" }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});

const announcementBar = defineType({
  name: "announcementBar",
  title: "Announcement Bar",
  type: "document",
  fields: [
    defineField({ name: "enabled", type: "boolean", initialValue: true }),
    defineField({ name: "text", type: "string", initialValue: "GRAND OPENING — NEW LOCATION" }),
    defineField({ name: "link", type: "url" }),
  ],
  preview: { prepare: () => ({ title: "Announcement Bar" }) },
});

const sectionHeading = (name: string, title: string, extra: ReturnType<typeof defineField>[] = []) =>
  defineField({
    name,
    title,
    type: "object",
    options: { collapsible: true, collapsed: true },
    fields: [
      defineField({ name: "heading", type: "string" }),
      defineField({ name: "intro", type: "text", rows: 2 }),
      ...extra,
    ],
  });

const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      type: "object",
      options: { collapsible: true },
      fields: [
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "subheading", type: "text", rows: 3 }),
        defineField({ name: "ctaLabel", type: "string" }),
        defineField({
          name: "variant",
          type: "string",
          options: { list: ["water", "mangrove"] },
          initialValue: "water",
        }),
        imageWithAlt("image", "Hero background image"),
      ],
    }),
    defineField({
      name: "pillarsSection",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "heading", type: "string" }),
        defineField({
          name: "pillars",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "eyebrow", type: "string" }),
                defineField({ name: "title", type: "string" }),
                defineField({ name: "body", type: "text", rows: 3 }),
                defineField({
                  name: "icon",
                  type: "string",
                  options: { list: ["kayak", "guide", "family"] },
                }),
                imageWithAlt("image", "Editorial image"),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "introStatement",
      title: "Editorial Intro Statement",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", type: "text", rows: 4 }),
      ],
    }),
    sectionHeading("toursSection", "Tours Section"),
    sectionHeading("wildlifeSection", "Wildlife Section", [
      defineField({ name: "disclaimer", type: "text", rows: 2 }),
    ]),
    sectionHeading("howItWorksSection", "How It Works Section", [
      defineField({
        name: "steps",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            fields: [
              defineField({ name: "title", type: "string" }),
              defineField({ name: "description", type: "text", rows: 3 }),
            ],
          }),
        ],
      }),
    ]),
    defineField({
      name: "reviewsSection",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "subheading", type: "string" }),
      ],
    }),
    defineField({
      name: "giftCard",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", type: "text", rows: 4 }),
        defineField({ name: "ctaLabel", type: "string" }),
        defineField({ name: "ctaUrl", type: "url" }),
      ],
    }),
    sectionHeading("faqSection", "FAQ Section"),
    sectionHeading("locationsSection", "Locations Section"),
  ],
  preview: { prepare: () => ({ title: "Homepage" }) },
});

/* ---------------- Collections ---------------- */

const tour = defineType({
  name: "tour",
  title: "Tour",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({
      name: "category",
      type: "string",
      options: { list: ["primary", "upon-request", "private"] },
      initialValue: "upon-request",
    }),
    defineField({ name: "shortDescription", type: "text", rows: 2 }),
    defineField({
      name: "description",
      title: "Description (one paragraph per item)",
      type: "array",
      of: [defineArrayMember({ type: "text", rows: 4 })],
    }),
    defineField({ name: "durationMinutes", title: "Duration (minutes)", type: "number" }),
    defineField({ name: "startTime", title: "Start time (e.g. 6:00 PM)", type: "string" }),
    defineField({ name: "price", type: "number" }),
    defineField({
      name: "whatsIncluded",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    imageWithAlt("image", "Tour image"),
    defineField({ name: "fareHarborUrl", title: "FareHarbor URL (optional override)", type: "url" }),
    defineField({ name: "bookByPhone", title: "Book by phone (no online booking)", type: "boolean" }),
    defineField({ name: "featured", type: "boolean" }),
    orderField,
  ],
  preview: { select: { title: "name", subtitle: "category" } },
});

const wildlifeItem = defineType({
  name: "wildlifeItem",
  title: "Wildlife Item",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "blurb", type: "text", rows: 3 }),
    imageWithAlt("image", "Photo"),
    defineField({ name: "highlight", title: "Highlight (e.g. Manatee, Sea Turtle)", type: "boolean" }),
    orderField,
  ],
  preview: { select: { title: "name", media: "image" } },
});

const launchLocation = defineType({
  name: "launchLocation",
  title: "Launch Location",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "address", type: "string" }),
    defineField({ name: "geo", title: "Map location", type: "geopoint" }),
    defineField({ name: "details", type: "text", rows: 3 }),
    defineField({ name: "directionsUrl", type: "url" }),
    orderField,
  ],
  preview: { select: { title: "name", subtitle: "address" } },
});

const review = defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({ name: "author", type: "string", validation: (r) => r.required() }),
    defineField({ name: "rating", type: "number", validation: (r) => r.min(1).max(5) }),
    defineField({ name: "text", type: "text", rows: 4 }),
    defineField({
      name: "source",
      type: "string",
      options: { list: ["google", "fareharbor", "direct"] },
      initialValue: "google",
    }),
    defineField({ name: "date", type: "datetime" }),
    defineField({ name: "approved", type: "boolean", initialValue: true }),
    orderField,
  ],
  preview: { select: { title: "author", subtitle: "source" } },
});

const faqItem = defineType({
  name: "faqItem",
  title: "FAQ Item",
  type: "document",
  fields: [
    defineField({ name: "question", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", type: "text", rows: 4 }),
    orderField,
  ],
  preview: { select: { title: "question" } },
});

export const schemaTypes = [
  siteSettings,
  announcementBar,
  homepage,
  tour,
  wildlifeItem,
  launchLocation,
  review,
  faqItem,
];
