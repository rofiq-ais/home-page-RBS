import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { articles as localArticles } from "../data/articles";
import { products as defaultProducts } from "../data/products";
import { services as defaultServices } from "../data/services";
import imgRuqyah from "../assets/ruqyah-img.jpeg";

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
  if (typeof source === "string") {
    const strObj = {
      width: () => strObj,
      height: () => strObj,
      url: () => source,
    };
    return strObj;
  }
  if (source.src && typeof source.src === "string") {
    const strObj = {
      width: () => strObj,
      height: () => strObj,
      url: () => source.src,
    };
    return strObj;
  }
  try {
    return builder.image(source);
  } catch {
    const fallback = typeof source === "string" ? source : "/placeholder.jpg";
    const dummy = {
      width: () => dummy,
      height: () => dummy,
      url: () => fallback,
    };
    return dummy;
  }
}

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
    alt,
    badge
  }`;
  try {
    const res = await client.fetch(query);
    if (res && res.length > 0) {
      return res.map((srv) => {
        if (
          srv.slug?.current === "ruqyah-syari-ah" ||
          srv.name?.toLowerCase().includes("ruqyah")
        ) {
          const isOldRuqyahSanityImg = srv.image?.asset?._ref?.includes("dc86d07556539fbc108e74c9227b2561f169dd13");
          return {
            ...srv,
            image: (!srv.image?.asset || isOldRuqyahSanityImg) ? imgRuqyah : srv.image,
            alt: srv.alt || "Terapi Ruqyah Syari'ah di Klinik RBS",
          };
        }
        return srv;
      });
    }
    return defaultServices;
  } catch (err) {
    console.warn("Gagal memuat layanan dari Sanity (CORS/jaringan), menggunakan data lokal:", err);
    return defaultServices;
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
    alt,
    badge
  }`;
  try {
    const res = await client.fetch(query, { slug });
    if (res) {
      if (
        res.slug?.current === "ruqyah-syari-ah" ||
        res.name?.toLowerCase().includes("ruqyah")
      ) {
        const isOldRuqyahSanityImg = res.image?.asset?._ref?.includes("dc86d07556539fbc108e74c9227b2561f169dd13");
        return {
          ...res,
          image: (!res.image?.asset || isOldRuqyahSanityImg) ? imgRuqyah : res.image,
          alt: res.alt || "Terapi Ruqyah Syari'ah di Klinik RBS",
        };
      }
      return res;
    }
    return defaultServices.find((s) => (s.slug?.current || s.slug) === slug) || null;
  } catch (err) {
    console.warn("Gagal memuat detail layanan dari Sanity:", err);
    return defaultServices.find((s) => (s.slug?.current || s.slug) === slug) || null;
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
    if (res && res.length > 0) {
      // Prioritize Sanity input while providing local images and default products as fallback
      const merged = defaultProducts.map((def) => {
        const found = res.find(
          (p) =>
            p.slug?.current === def.slug?.current ||
            p.name?.toLowerCase().trim() === def.name.toLowerCase().trim()
        );
        if (found) {
          // Gunakan deskripsi dari Sanity jika valid dan cukup lengkap, jika tidak gunakan default lokal
          const hasRealDesc = found.desc && found.desc.trim().length > 15;
          const hasRealShortDesc = found.shortDesc && found.shortDesc.trim().length > 10;
          return {
            ...def,
            ...found,
            desc: hasRealDesc ? found.desc : def.desc,
            shortDesc: hasRealShortDesc ? found.shortDesc : def.shortDesc,
            image: found.image?.asset ? found.image : def.image,
          };
        }
        return def;
      });
      const extras = res.filter(
        (p) =>
          !defaultProducts.some(
            (def) =>
              def.slug?.current === p.slug?.current ||
              def.name?.toLowerCase().trim() === p.name?.toLowerCase().trim()
          )
      );
      return [...merged, ...extras];
    }
    return defaultProducts;
  } catch (err) {
    console.warn("Gagal memuat produk dari Sanity (CORS/jaringan), menggunakan data lokal:", err);
    return defaultProducts;
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
    if (res) {
      const matchDef = defaultProducts.find(
        (p) => (p.slug?.current || p.slug) === slug
      );
      if (matchDef) {
        return {
          ...matchDef,
          ...res,
          image: matchDef.image,
        };
      }
      return res;
    }
    return defaultProducts.find((p) => (p.slug?.current || p.slug) === slug) || null;
  } catch (err) {
    console.warn("Gagal memuat detail produk dari Sanity:", err);
    return defaultProducts.find((p) => (p.slug?.current || p.slug) === slug) || null;
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
