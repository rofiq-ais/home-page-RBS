import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: "2025-01-20",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function fetchArticles() {
  const query = `*[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    excerpt,
    date,
    publishedAt
  }`;
  return client.fetch(query);
}

export async function fetchArticleBySlug(slug) {
  const query = `*[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    excerpt,
    content,
    date,
    publishedAt
  }`;
  return client.fetch(query, { slug });
}

export async function fetchServices() {
  const query = `*[_type == "service"] | order(order asc) {
    _id,
    name,
    slug,
    price,
    duration,
    shortDesc,
    desc,
    benefits,
    image,
    alt
  }`;
  return client.fetch(query);
}

export async function fetchServiceBySlug(slug) {
  const query = `*[_type == "service" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    price,
    duration,
    shortDesc,
    desc,
    benefits,
    image,
    alt
  }`;
  return client.fetch(query, { slug });
}

export async function fetchProducts() {
  const query = `*[_type == "product"] | order(order asc) {
    _id,
    name,
    slug,
    price,
    size,
    shortDesc,
    desc,
    benefits,
    image,
    alt
  }`;
  return client.fetch(query);
}

export async function fetchProductBySlug(slug) {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    price,
    size,
    shortDesc,
    desc,
    benefits,
    image,
    alt
  }`;
  return client.fetch(query, { slug });
}

export async function fetchAnnouncements() {
  const query = `*[_type == "announcement" && active == true] | order(order asc) {
    _id,
    text
  }`;
  return client.fetch(query);
}
