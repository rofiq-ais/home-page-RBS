import imgBiodetox from "../assets/biodetox-img.jpeg";
import imgJintanGingseng from "../assets/jintan-gingseng-img.jpeg";
import imgMaduMint from "../assets/madu-mint-img.jpeg";
import imgPropolis from "../assets/propolis-img.jpeg";

export const products = [
  {
    _id: "prod-biodetox",
    name: "Bio Detox \"RBS\"",
    slug: { current: "biodetox-rbs" },
    price: "Rp 120.000",
    size: "50 Kapsul",
    shortDesc: "Herbal alami detoksifikasi pasca bekam untuk membuang racun dan memperkuat antibodi.",
    desc: "Bio Detox \"RBS\" adalah formula herbal alami kualitas premium bersertifikat RBS Family Health Care yang diformulasikan khusus untuk detoksifikasi optimal setelah terapi bekam. Berkhasiat membuang racun (toksin), membersihkan darah kotor, meremajakan sel tubuh, menstabilkan tekanan darah, serta menambah stamina dan vitalitas.",
    benefits: [
      "Memperkuat antibodi & sistem imunitas tubuh",
      "Membersihkan darah & membuang racun dalam tubuh",
      "Menstabilkan tekanan darah & meremajakan sel tubuh",
      "Membantu membunuh sel abnormal & memperbaiki pencernaan",
      "Meningkatkan kinerja otak, tenaga, dan kesuburan"
    ],
    image: imgBiodetox,
    alt: "Bio Detox RBS Kapsul Herbal Alami Pasca Bekam",
    order: 1
  },
  {
    _id: "prod-jintan-ginseng",
    name: "Jintan Ginseng Plus Tongkat Ali",
    slug: { current: "jintan-ginseng" },
    price: "Rp 110.000",
    size: "100 Kapsul",
    shortDesc: "Kombinasi herbal alami Habbatussauda, Ginseng, Pasak Bumi, dan Zuriat untuk stamina & sendi.",
    desc: "Jintan Ginseng Plus Tongkat Ali (Nature Herb) adalah suplemen 100% herbal alami dari perpaduan ekstrak Habbatussauda, Ginseng, Pasak Bumi, Buah Zuriat, dan Tongkat Ali. Berkhasiat menjaga stamina pria dewasa, mengatasi rematik, encok, dan asam urat, serta meredakan sakit pinggang dan leher kaku.",
    benefits: [
      "Menjaga stamina, kebugaran, dan daya konsentrasi",
      "Mengatasi rematik, encok, dan nyeri asam urat",
      "Meredakan sakit pinggang, pinggul, dan kaku leher",
      "Menjaga kesehatan reproduksi & stamina pria dewasa",
      "Membantu menormalkan kadar gula darah dan kolesterol"
    ],
    image: imgJintanGingseng,
    alt: "Jintan Ginseng Plus Tongkat Ali Nature Herb",
    order: 2
  },
  {
    _id: "prod-madu-mint",
    name: "Extract Mint Honey (Madu Mint)",
    slug: { current: "madu-mint" },
    price: "Rp 75.000",
    size: "250 ml",
    shortDesc: "Madu herbal alami dengan ekstrak daun mint untuk melegakan pernapasan dan menghangatkan tubuh.",
    desc: "Extract Mint Honey (RAH) adalah komposisi madu hutan murni alami dan ekstrak mint yang kaya akan nutrisi dan kebaikan alam. Sangat cocok dan dianjurkan dikonsumsi setelah terapi gurah hidung untuk melegakan pernapasan, meredakan batuk pilek, dan menghangatkan badan. Terdaftar DINKES P.IRT: 209317202220.",
    benefits: [
      "Sangat cocok dan dianjurkan dikonsumsi setelah terapi gurah",
      "Menghangatkan badan & melegakan saluran pernapasan",
      "Mengobati batuk kering/berdahak, flu, pilek, dan masuk angin",
      "Meredakan asma, bronkitis, sinusitis, dan demam",
      "Menjaga kesehatan ginjal, hati, jantung, dan lambung"
    ],
    image: imgMaduMint,
    alt: "Extract Mint Honey Madu Mint Alami RAH",
    order: 3
  },
  {
    _id: "prod-propolis",
    name: "Nigella Plus Propolis",
    slug: { current: "nigella-propolis" },
    price: "Rp 110.000",
    size: "100 Kapsul",
    shortDesc: "Kombinasi herbal terbaik: Habbatussauda, Propolis, Spirulina, Kelor, Bidara, dan Zaitun.",
    desc: "Nigella Plus Propolis memadukan 6 formula herbal sunnah dan alami terbaik: Habbatussauda, Propolis murni, Ekstrak Spirulina, Daun Kelor, Daun Bidara, dan Minyak Zaitun. Tanpa bahan kimia berbahaya, berkhasiat tinggi memperkuat daya tahan tubuh dan mempercepat pemulihan kesehatan untuk segala usia.",
    benefits: [
      "Memperkuat antibodi & daya tahan tubuh keluarga",
      "Membersihkan darah dan membuang racun metabolik",
      "Membantu meredakan batuk, pilek, demam, asma, dan flek paru",
      "Menstabilkan tekanan darah & memperbaiki sistem pencernaan",
      "Meremajakan sel tubuh dan kaya antioksidan alami"
    ],
    image: imgPropolis,
    alt: "Nigella Plus Propolis Herbal Alami",
    order: 4
  }
];
