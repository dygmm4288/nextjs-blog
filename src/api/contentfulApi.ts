import { createClient } from "contentful";
const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } = process.env;

export const client = createClient({
  space: CONTENTFUL_SPACE_ID!,
  accessToken: CONTENTFUL_ACCESS_TOKEN!,
});
