import { createClient } from "contentful";
console.log("process env", process.env.NODE_ENV);

export const client = createClient(
	process.env.NODE_ENV === "development" || process.env.NODE_ENV === "production" ? {
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	} : null

);
