export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

/** True once the owner has created a Sanity project and set the env vars. */
export const sanityConfigured = Boolean(projectId && projectId.length > 0);
