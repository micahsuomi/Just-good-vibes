import { createClient } from "contentful";

export const client = createClient(
	process.env.NODE_ENV === "development" && {
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	}
);
