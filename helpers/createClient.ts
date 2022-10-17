import { createClient } from "contentful";

export const client = createClient(
  process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "production"
    ? {
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    : null
);
