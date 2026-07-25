# Product Requirements Document (PRD): Website Klinik Ruqyah Bekam Sehat (RBS)

## 1. Ikhtisar Proyek (Project Overview)
* **Nama Bisnis:** Klinik Syariah Tibbun Nabawi "Ruqyah Bekam Sehat" (RBS)
* **Moto:** "Hidup Sehat, Meraih Mardhotillah"
* **Lokasi Praktik:** Jl. Menteng Terusan No. 32 (Depan Bank BRI), Pasar Sinar Lagoa, Jakarta Utara 14270
* **Tujuan Produk:** Membangun *Hybrid Website* (Home Page terintegrasi dengan Landing Page komersial & Halaman Berita/Artikel) untuk meningkatkan kredibilitas, menyediakan pusat informasi satu pintu bagi member, serta mendongkrak konversi reservasi terapi melalui WhatsApp.
* **Tech Stack:** 
  * Frontend: React.js + Vite + Tailwind CSS
  * Backend CMS: Sanity.io (Headless CMS)
  * Deployment: Cloudflare

---

## 2. Target Pengguna (Target Audience)
1. **Pasien / Calon Pasien:** Masyarakat umum di wilayah Jakarta Utara dan sekitarnya yang mencari pengobatan alternatif sesuai sunnah (ruqyah, bekam, gurah, dll) yang higienis, legal, dan profesional.
2. **Member Setia:** Pasien tetap yang ingin memantau pengumuman penting, jadwal operasional, promo member card (seperti 10x bekam gratis 1x), serta artikel edukasi kesehatan.
3. **Admin Klinik:** Pengelola klinik yang membutuhkan sistem manajemen konten yang mudah untuk memperbarui informasi tanpa perlu keahlian *coding*.

---

## 3. Fitur Utama (Core Features)

### A. Home Page (Halaman Utama)
* **Announcement / Ticker Bar (Info Sekali Klik):** Bar khusus di bagian paling atas untuk pengumuman kilat (misal: perubahan jam buka, jadwal libur, atau promo spesial) yang dikontrol langsung dari Sanity.io.
* **Hero Section:** Menggabungkan visual klinik yang menenangkan, tagline utama ("Hidup Sehat, Meraih Mardhotillah"), nomor izin Dinkes (STPT), dan tombol *Call to Action* (CTA) utama menuju WhatsApp.
* **Mengapa Memilih Kami (Trust Signals):** Menampilkan legalitas Dinkes (STPT: 001/B.41/31.72.03.1003/-1.779.3/2018), sertifikat nasional terapis (standar PBI), pemisahan ruangan Ikhwan & Akhwat, serta standar alat steril sekali pakai.
* **Daftar Layanan & Harga (Service & Pricing List):** Kartu informasi lengkap untuk Ruqyah Syar'iyyah, Bekam (Kering/Basah/Seluncur), Gurah, Totok Punggung, Sebat Rotan, General Check Up (Quantum Resonance), Herbal, dan Terapi Kunjungan.

### B. Landing Page Conversion Section (Bagian Konversi)
* Bagian khusus dalam Home Page yang dirancang persuasif untuk mendorong *booking*.
* Menampilkan *Paket Terapi Hemat* (Check up + Bekam + Totok Punggung) dengan harga jelas.
* Tombol CTA interaktif yang membuka pesan WhatsApp otomatis dengan format pesanan.

### C. Halaman Berita & Artikel Edukasi (News & Blog)
* **Pusat Informasi Member:** Tempat admin memublikasikan artikel atau pengumuman resmi.
* Kategori terpisah: *Pengumuman Klinik* dan *Tips Kesehatan & Tibbun Nabawi*.
* Membantu member mendapatkan informasi secara mandiri tanpa harus bertanya berulang kali via WhatsApp.

### D. Fitur Pendukung (Accessibility & UX)
* **Sticky WhatsApp Floating Button:** Tombol melayang di pojok bawah layar yang aktif di perangkat mobile maupun desktop.
* **Responsive Design:** Optimal di semua ukuran layar (Mobile-First approach).
* **Fast Loading:** Dioptimalkan dengan Vite dan penyimpanan aset terpusat di Sanity Asset Pipeline.

---

## 4. Alur Pengguna (User Flow)
1. **Discovery:** Pengguna/Member membuka `klinikrbs.com` melalui tautan dari Instagram/Iklan atau pencarian Google.
2. **Scanning:** Pengguna melihat *Announcement Bar* di atas jika ada info penting, lalu membaca nilai utama di *Hero Section*.
3. **Evaluation:** Pengguna mengecek daftar layanan, legalitas (Sertifikat & STPT), serta testimoni/keunggulan klinik untuk membangun kepercayaan.
4. **Action (Conversion):** Pengguna mengklik tombol "Reservasi Sekarang" yang langsung mengarahkan ke aplikasi WhatsApp dengan templat pesan yang sudah terisi otomatis.

---

## 5. Rencana Pengembangan (Milestones)

* **Fase 1: Setup & Konfigurasi Dasar**
  * Inisialisasi React.js dengan Vite dan Tailwind CSS.
  * Konfigurasi koneksi ke Sanity.io Headless CMS.
* **Fase 2: Pembuatan Komponen Frontend**
  * Membuat komponen `Navbar`, `Hero`, `TrustSignals`, `ServicePricing`, `NewsSection`, dan `Footer`.
  * Mengintegrasikan *Floating WhatsApp Button*.
* **Fase 3: Integrasi Data dari Sanity**
  * Membuat Schema Sanity untuk *Announcement*, *Layanan*, dan *Artikel Berita*.
  * Melakukan *data fetching* dari React ke Sanity.
* **Fase 4: Testing & Deployment**
  * Uji coba responsivitas di mobile dan desktop.
  * *Deployment* produksi ke Vercel dan penyambungan domain kustom (`klinikrbs.com`).

---
*Dokumen ini dibuat untuk memandu proses pengembangan website Klinik Ruqyah Bekam Sehat (RBS).*
