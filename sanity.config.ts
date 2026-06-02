"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";
import { projectId, dataset, apiVersion } from "./lib/sanity/env";

const SINGLETON_TYPES = new Set(["siteSettings", "announcementBar", "homepage"]);

export default defineConfig({
  name: "clear-kayaking-adventures",
  title: "Clear Kayaking Adventures",
  basePath: "/studio",
  projectId: projectId || "missing-project-id",
  dataset,
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
  schema: {
    types: schemaTypes,
    // Singletons should not be creatable/deletable from the global menu.
    templates: (templates) =>
      templates.filter(({ schemaType }) => !SINGLETON_TYPES.has(schemaType)),
  },
  document: {
    actions: (input, { schemaType }) =>
      SINGLETON_TYPES.has(schemaType)
        ? input.filter(({ action }) =>
            ["publish", "discardChanges", "restore"].includes(action ?? "")
          )
        : input,
  },
});
