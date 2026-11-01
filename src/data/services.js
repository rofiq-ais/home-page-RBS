import imgRuqyah from "../assets/ruqyah-img.jpeg";
import imgPosterBundle from "../assets/paket-bundling-rbs.jpg";

export const services = [
  {
    _id: "srv-paket-terapi-rbs",
    name: "Paket Terapi RBS (4 in 1)",
    slug: { current: "paket-terapi-rbs" },
    price: "Rp 150.000",
    duration: "±75 menit",
    badge: "Special Offer Rp 150rb",
    shortDesc: "Paket komplit hemat: Check Up + Bekam Medis + Totok Syaraf + Totok Punggung",
    desc: "Paket terapi terfavorit di Klinik RBS yang menggabungkan 4 metode terapi utama: General Check Up tubuh, Bekam Hijamah detoks darah kotor berstandar PBI, Totok Syaraf, dan Totok Punggung untuk melancarkan seluruh sumbatan energi dan peredaran darah.",
    benefits: [
      "Check Up Kesehatan: Skrining kondisi organ dan metabolisme tubuh tanpa jarum",
      "Bekam / Hijamah Medis: Detoksifikasi darah kotor, jarum steril baru sekali pakai",
      "Totok Syaraf: Menstimulasi simpul saraf untuk memulihkan vitalitas & imunitas",
      "Totok Punggung: Mengurai kekakuan otot dan sumbatan saraf tulang belakang",
      "Super Hemat: 4 terapi lengkap hanya Rp 150.000 (Paling diminati)"
    ],
    image: imgPosterBundle,
    alt: "Poster Paket Terapi RBS Check Up Bekam Totok Syaraf Totok Punggung",
    order: 1
  },
  {
    _id: "srv-ruqyah",
    name: "Ruqyah Syari'ah",
    slug: { current: "ruqyah-syari-ah" },
    price: "Rp 200.000",
    duration: "±45 menit",
    shortDesc: "Terapi penyembuhan spiritual alami menggunakan lantunan ayat Al-Qur'an dan doa sahih sesuai sunnah.",
    desc: "Ruqyah syari'ah adalah metode terapi penyembuhan spiritual dalam Islam yang dilakukan dengan membacakan ayat-ayat suci Al-Qur'an dan doa-doa perlindungan yang sahih sesuai dengan tuntunan Nabi Muhammad SAW untuk memohon kesembuhan dari gangguan medis maupun non-medis.",
    benefits: [
      "Benteng dan perlindungan diri dari gangguan sihir, penyakit 'ain, dan jin",
      "Menyembuhkan gangguan gaib, sihir, dan ketakutan tanpa sebab",
      "Membersihkan penyakit hati, meredakan stres, depresi, dan kecemasan",
      "Membantu mengatasi gangguan tidur, mimpi buruk, dan kegelisahan batin",
      "Ikhtiar terapi pendamping medis yang penuh berkah dan menentramkan jiwa"
    ],
    image: imgRuqyah,
    alt: "Terapi Ruqyah Syari'ah di Klinik RBS Ruqyah Bekam Sehat",
    order: 2
  },
  {
    _id: "srv-bekam",
    name: "Bekam / Hijamah",
    slug: { current: "bekam-hijamah" },
    price: "Rp 150.000",
    duration: "±45 menit",
    shortDesc: "Metode pengobatan syar'i melalui terapi detoksifikasi darah kotor",
    desc: "Metode pengobatan syar'i melalui terapi detoksifikasi darah kotor. Efektif melancarkan sirkulasi, membuang racun, dan mengembalikan kebugaran tubuh sesuai tuntunan Rasulullah SAW.",
    benefits: [
      "Detoksifikasi Tubuh: Mengeluarkan darah statis yang mengandung racun dan radikal bebas",
      "Melancarkan Sirkulasi Darah: Mengurangi penyumbatan sehingga aliran darah optimal",
      "Meredakan Nyeri dan Pegal: Efektif untuk migrain, sakit pinggang, kaku leher & pundak",
      "Menurunkan Kolesterol & Darah Tinggi: Membantu membuang kelebihan lemak darah",
      "Meningkatkan Imunitas Tubuh: Merangsang pembentukan antibodi baru"
    ],
    image: "https://cdn.sanity.io/images/51gxevin/production/8f8e2fb0400a06f982db83ada0e6259206515c7e-393x280.webp",
    alt: "Bekam / Hijamah di Klinik RBS",
    order: 2
  },
  {
    _id: "srv-gurah",
    name: "Gurah Hidung",
    slug: { current: "gurah-hidung" },
    price: "Rp 200.000",
    duration: "±90 menit",
    shortDesc: "Terapi pembersihan saluran pernapasan dengan ramuan herbal alami.",
    desc: "Terapi pembersihan saluran pernapasan dengan ramuan herbal alami. Efektif mengeluarkan lendir kotor, melancarkan napas, dan menjernihkan suara.",
    benefits: [
      "Membersihkan saluran pernapasan dari lendir kotor, dahak, dan debu",
      "Melegakan hidung tersumbat, sinusitis, polip, dan asma",
      "Menjernihkan kualitas suara pita suara menjadi lebih merdu dan nyaring",
      "Meredakan sakit kepala, migrain, dan tekanan pada rongga sinus",
      "Menghilangkan aroma napas atau bau mulut yang tidak sedap"
    ],
    image: "https://cdn.sanity.io/images/51gxevin/production/8f8e2fb0400a06f982db83ada0e6259206515c7e-393x280.webp",
    alt: "Gurah Hidung Tradisional Herbal di Klinik RBS",
    order: 3
  },
  {
    _id: "srv-totok",
    name: "Totok Punggung",
    slug: { current: "totok-punggung" },
    price: "Rp 150.000",
    duration: "±45 menit",
    shortDesc: "Terapi tekan dan getar pada titik saraf punggung",
    desc: "Terapi tekan dan getar pada titik saraf punggung untuk melancarkan sirkulasi darah, meredakan nyeri otot, dan mengembalikan kesegaran tubuh secara alami.",
    benefits: [
      "Melancarkan peredaran darah dengan mengurai sumbatan di jalur saraf punggung",
      "Meredakan nyeri pinggang, punggung, dan pegal linu akibat duduk lama",
      "Memperbaiki fungsi organ vital seperti lambung, ginjal, dan hati",
      "Memberikan relaksasi mendalam dan menurunkan tingkat stres harian",
      "Meningkatkan daya tahan tubuh dan metabolisme agar tidak mudah lelah"
    ],
    image: "https://cdn.sanity.io/images/51gxevin/production/8f8e2fb0400a06f982db83ada0e6259206515c7e-393x280.webp",
    alt: "Totok Punggung di Klinik RBS",
    order: 4
  },
  {
    _id: "srv-checkup",
    name: "General Check Up QRMA",
    slug: { current: "general-check-up-qrma" },
    price: "Rp 50.000",
    duration: "±10 menit",
    shortDesc: "Metode pemindaian kesehatan tubuh menyeluruh tanpa jarum.",
    desc: "Cukup genggam sensor selama 60 detik untuk mendeteksi dini kondisi organ, vitamin, dan metabolisme tubuh secara praktis tanpa suntik atau jarum.",
    benefits: [
      "Skrining kesehatan puluhan fungsi organ tubuh dalam satu kali pemeriksaan",
      "Deteksi dini kecukupan nutrisi, vitamin, mineral, dan kalsium tubuh",
      "Non-invasif tanpa jarum suntik, sangat nyaman untuk semua usia",
      "Proses cepat 60 detik dengan laporan digital langsung selesai",
      "Panduan gaya hidup preventif untuk menjaga kebugaran optimal"
    ],
    image: "https://cdn.sanity.io/images/51gxevin/production/8f8e2fb0400a06f982db83ada0e6259206515c7e-393x280.webp",
    alt: "General Check Up QRMA Quantum Resonance Klinik RBS",
    order: 5
  },
  {
    _id: "srv-ear-candle",
    name: "Ear Candle",
    slug: { current: "ear-candle" },
    price: "Rp 50.000",
    duration: "±30 menit",
    shortDesc: "Terapi kehangatan telinga dengan lilin khusus",
    desc: "Terapi kehangatan telinga dengan lilin khusus untuk memberikan efek relaksasi mendalam, meredakan ketegangan kepala, dan memberikan kenyamanan pada area THT.",
    benefits: [
      "Memberikan relaksasi mendalam dan menenangkan sistem saraf",
      "Meredakan ketegangan otot di sekitar rahang, pelipis, dan leher",
      "Mengurangi pusing dan sakit kepala ringan akibat kelelahan",
      "Meningkatkan kualitas tidur bagi penderita insomnia",
      "Menciptakan sensasi plong, lega, dan segar di area telinga"
    ],
    image: "https://cdn.sanity.io/images/51gxevin/production/8f8e2fb0400a06f982db83ada0e6259206515c7e-393x280.webp",
    alt: "Ear Candle Terapi Telinga di Klinik RBS",
    order: 6
  }
];
