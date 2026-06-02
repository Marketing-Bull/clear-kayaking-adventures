import type { StructureResolver } from "sanity/structure";

const SINGLETONS = [
  { id: "siteSettings", title: "Site Settings" },
  { id: "announcementBar", title: "Announcement Bar" },
  { id: "homepage", title: "Homepage" },
];

const COLLECTIONS = [
  "tour",
  "wildlifeItem",
  "launchLocation",
  "review",
  "faqItem",
];

/**
 * Owner-friendly desk: singletons open their single document directly,
 * collections list their ordered items.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      ...SINGLETONS.map(({ id, title }) =>
        S.listItem()
          .title(title)
          .id(id)
          .child(S.document().schemaType(id).documentId(id))
      ),
      S.divider(),
      ...COLLECTIONS.map((type) => S.documentTypeListItem(type)),
    ]);
