import { groq } from "next-sanity";

export const CONTENT_QUERY = groq`{
  "site": *[_type == "siteSettings"][0],
  "announcement": *[_type == "announcementBar"][0],
  "homepage": *[_type == "homepage"][0],
  "tours": *[_type == "tour"] | order(order asc, _createdAt asc),
  "wildlife": *[_type == "wildlifeItem"] | order(order asc, _createdAt asc),
  "reviews": *[_type == "review" && approved == true] | order(order asc, _createdAt desc),
  "faqs": *[_type == "faqItem"] | order(order asc, _createdAt asc),
  "locations": *[_type == "launchLocation"] | order(order asc, _createdAt asc)
}`;
