import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "sn0ub6ur",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN,
});

export async function getSiteContent() {
  return sanityClient.fetch(
    `*[_type == "siteContent"][0]{heroHeadline,heroSubtext,footerTagline}`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getAboutClients() {
  return sanityClient.fetch(
    `*[_type == "aboutClients"][0]{whoHeading,whoBody,whoList,whatList,approachBody}`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getAboutCoaching() {
  return sanityClient.fetch(
    `*[_type == "aboutCoaching"][0]{whatBody,forMeList,expectBody}`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getAboutMe() {
  return sanityClient.fetch(
    `*[_type == "aboutMe"][0]{bioBody,testimonials,gettingStartedBody}`,
    {},
    { next: { revalidate: 60 } }
  );
}
