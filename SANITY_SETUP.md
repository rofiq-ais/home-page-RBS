# Sanity CMS Setup

> **Status:** Selesai — Sanity Studio aktif di `studio/`

---

## Konfigurasi

- **Project ID:** `51gxevin`
- **Dataset:** `production`
- **Studio Path:** `./studio`
- **Studio URL:** `http://localhost:3333`

---

## Struktur

```
studio/
├── sanity.config.js        # Konfigurasi Sanity (project ID, dataset, plugins)
├── schemaTypes/
│   ├── index.js            # Register semua schema
│   └── article.js          # Schema untuk artikel
└── ...
```

---

## Schema: Article

| Field | Type | Keterangan |
|-------|------|------------|
| title | string | Judul artikel |
| slug | slug | URL-friendly (source: title) |
| category | string | Dropdown: Tips Kesehatan, Pengumuman Klinik, Edukasi |
| excerpt | text | Ringkasan singkat |
| content | text | Konten lengkap artikel |
| date | string | Tampilan tanggal (format: 10 Okt 2023) |
| publishedAt | datetime | Tanggal publikasi untuk sorting |

---

## Cara Jalankan

```bash
cd studio
npx sanity dev
```

Studio akan buka di `http://localhost:3333`.

---

## Input Data Artikel

Buka Sanity Studio → **+ Create** → **Artikel** → isi data:

| # | Title | Slug | Category | Date |
|---|-------|------|----------|------|
| 1 | Manfaat Bekam Rutin Setiap Bulan | manfaat-bekam-rutin | Tips Kesehatan | 10 Okt 2023 |
| 2 | Perubahan Jam Operasional Selama Ramadhan | jam-operasional-ramadhan | Pengumuman Klinik | 05 Okt 2023 |
| 3 | Ruqyah Syar'iyyah: Hukum dan Tata Cara | ruqyah-syariyyah-hukum-tata-cara | Edukasi | 28 Sep 2023 |
| 4 | Madu Yaman: Ciri Asli dan Manfaatnya | madu-yaman-ciri-asli-manfaat | Tips Kesehatan | 15 Sep 2023 |

**Excerpt & Content** bisa di-copy dari `src/data/articles.js`.

---

## Koneksi Frontend → Sanity

- `src/lib/sanity.js` — client config + query functions, baca dari `.env`
- `src/components/NewsSection.jsx` — fetch artikel untuk homepage
- `src/pages/Artikel.jsx` — halaman daftar artikel
- `src/pages/ArtikelDetail.jsx` — halaman detail artikel

---

## Troubleshooting

- **Artikel tidak muncul:** Cek browser console. Pastikan Project ID dan Dataset benar di `.env`.
- **Schema tidak muncul di Studio:** Pastikan `schemaTypes/index.js` sudah import schema.
- **CORS error:** Di Sanity Dashboard → project → Settings → CORS Origins → tambahkan `http://localhost:5173`.
