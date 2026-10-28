import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import sanityFallback from "../data/sanityFallback.json";
import { articles as localArticles } from "../data/articles";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || "51gxevin";
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-20",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  if (!source) {
    const dummy = {
      width: () => dummy,
      height: () => dummy,
      url: () => "/placeholder.jpg",
    };
    return dummy;
  }
  try {
    return builder.image(source);
  } catch (err) {
    const dummy = {
      width: () => dummy,
      height: () => dummy,
      url: () => "/placeholder.jpg",
    };
    return dummy;
  }
}

const fallbackServices = sanityFallback.filter((item) => item._type === "service");
const fallbackProducts = sanityFallback.filter((item) => item._type === "product");
const fallbackArticles = localArticles.map((a, i) => ({
  ...a,
  _id: `fallback-art-${i}`,
  slug: typeof a.slug === "string" ? { current: a.slug } : a.slug,
}));

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
  try {
    const res = await client.fetch(query);
    if (res && res.length > 0) return res;
    return fallbackArticles;
  } catch (err) {
    console.warn("Gagal memuat artikel dari Sanity (CORS/jaringan), menggunakan fallback:", err);
    return fallbackArticles;
  }
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
  try {
    const res = await client.fetch(query, { slug });
    if (res) return res;
    const match = fallbackArticles.find(
      (a) => (a.slug?.current || a.slug) === slug
    );
    return match || null;
  } catch (err) {
    console.warn("Gagal memuat detail artikel dari Sanity:", err);
    const match = fallbackArticles.find(
      (a) => (a.slug?.current || a.slug) === slug
    );
    return match || null;
  }
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
  try {
    const res = await client.fetch(query);
    if (res && res.length > 0) return res;
    return fallbackServices;
  } catch (err) {
    console.warn("Gagal memuat layanan dari Sanity (CORS/jaringan), menggunakan fallback:", err);
    return fallbackServices;
  }
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
  try {
    const res = await client.fetch(query, { slug });
    if (res) return res;
    return fallbackServices.find((s) => (s.slug?.current || s.slug) === slug) || null;
  } catch (err) {
    console.warn("Gagal memuat detail layanan dari Sanity:", err);
    return fallbackServices.find((s) => (s.slug?.current || s.slug) === slug) || null;
  }
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
  try {
    const res = await client.fetch(query);
    if (res && res.length > 0) return res;
    return fallbackProducts;
  } catch (err) {
    console.warn("Gagal memuat produk dari Sanity (CORS/jaringan), menggunakan fallback:", err);
    return fallbackProducts;
  }
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
  try {
    const res = await client.fetch(query, { slug });
    if (res) return res;
    return fallbackProducts.find((p) => (p.slug?.current || p.slug) === slug) || null;
  } catch (err) {
    console.warn("Gagal memuat detail produk dari Sanity:", err);
    return fallbackProducts.find((p) => (p.slug?.current || p.slug) === slug) || null;
  }
}

export async function fetchAnnouncements() {
  const query = `*[_type == "announcement" && active == true] | order(order asc) {
    _id,
    text
  }`;
  try {
    const res = await client.fetch(query);
    return res || [];
  } catch (err) {
    console.warn("Gagal memuat pengumuman dari Sanity:", err);
    return [];
  }
}
