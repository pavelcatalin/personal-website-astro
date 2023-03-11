import contentful from "contentful";

export const contentfulClient = contentful.createClient({
  accessToken:
    import.meta.env.CONTENTFUL_DELIVERY_TOKEN ??
    process.env.CONTENTFUL_DELIVERY_TOKEN,
  space: import.meta.env.CONTENTFUL_SPACE_ID ?? process.env.CONTENTFUL_SPACE_ID,
  host: "cdn.contentful.com",
});
