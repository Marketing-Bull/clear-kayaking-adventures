import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { client } from "./client";

const builder = client ? imageUrlBuilder(client) : null;

export function urlForImage(source: Image | undefined): string | undefined {
  if (!builder || !source || !(source as { asset?: unknown }).asset) return undefined;
  return builder.image(source).auto("format").fit("max").url();
}
