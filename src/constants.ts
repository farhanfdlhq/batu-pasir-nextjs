import { Product, Category } from "@/types";

// Catatan: Gambar-gambar saat ini adalah placeholder.
// Anda bisa mengganti file gambar di folder public/images dengan foto asli Anda.
export const PRODUCTS: Product[] = [
  // KATEGORI TANAH
  {
    id: "tanah-urug",
    name: "Tanah Urug / Tanah Timbunan",
    category: Category.TANAH,
    description:
      "Tanah berkualitas untuk keperluan pengurukan, peninggian lahan, dan dasar konstruksi.",
    unit: "m³ / rit",
    image: "/images/tanah-uruk.png",
    gallery: ["/images/tanah-uruk.png"],
    specifications: {
      Asal: "Galian Proyek",
      Warna: "Kuning",
      Kepadatan: "Tinggi",
    },
  },
  {
    id: "tanah-top-soil",
    name: "Tanah Top Soil",
    category: Category.TANAH,
    description:
      "Lapisan tanah atas yang subur, kaya akan bahan organik, sangat baik untuk keperluan taman dan lansekap.",
    unit: "m³ / rit",
    image: "/images/tanah-topsoil.png",
    gallery: ["/images/tanah-topsoil.png"],
    specifications: {
      Warna: "Coklat Kehitaman",
      Struktur: "Gembur",
      "Bahan Organik": "Tinggi",
    },
  },

  // KATEGORI PASIR
  {
    id: "pasir-gunung-kuning",
    name: "Pasir Gunung Kuning",
    category: Category.PASIR,
    description:
      "Pasir gunung dengan warna kekuningan, cocok untuk adukan plesteran dan pemasangan bata.",
    unit: "m³ / rit",
    image: "/images/pasirgunungkuning.png",
    gallery: ["/images/pasirgunungkuning.png"],
    specifications: {
      Asal: "Gunung Pasir",
      "Kadar Lumpur": "< 5%",
      Warna: "Kuning",
    },
  },
  {
    id: "pasir-gunung-merah",
    name: "Pasir Gunung Merah",
    category: Category.PASIR,
    description:
      "Pasir gunung dengan warna kemerahan, memiliki karakteristik yang baik untuk berbagai keperluan konstruksi.",
    unit: "m³ / rit",
    image: "/images/pasirgunungmerah.png",
    gallery: ["/images/pasirgunungmerah.png"],
    specifications: {
      Asal: "Gunung Pasir",
      "Kadar Lumpur": "< 5%",
      Warna: "Merah",
    },
  },
  {
    id: "pasir-cor",
    name: "Pasir Cor / Pasir Beton",
    category: Category.PASIR,
    description:
      "Pasir dengan butiran kasar dan tajam, sangat baik untuk campuran beton struktural.",
    unit: "m³ / rit",
    image: "/images/pasirbeton.png",
    gallery: ["/images/pasirbeton.png"],
    specifications: {
      Asal: "Palu",
      "Kadar Lumpur": "< 3%",
      "Ukuran Butir": "2 - 5 mm",
    },
  },

  // KATEGORI BATU
  {
    id: "batu-gunung",
    name: "Batu Gunung / Batu Pondasi",
    category: Category.BATU,
    description:
      "Batu belah untuk keperluan utama pondasi bangunan. Sangat kuat, kokoh, dan tahan lama.",
    unit: "m³ / rit",
    image: "/images/batupondasi.png",
    gallery: ["/images/batupondasi.png"],
    specifications: {
      Ukuran: "10-30 cm (Bervariasi)",
      Warna: "Abu-abu kehitaman",
      Kekerasan: "Sangat Keras",
    },
  },
  {
    id: "batu-kali",
    name: "Batu Kali",
    category: Category.BATU,
    description:
      "Batu alam dari sungai dengan permukaan yang lebih halus, biasa digunakan untuk pondasi, dinding, dan elemen dekoratif.",
    unit: "m³ / rit",
    image: "/images/batukali.png",
    gallery: ["/images/batukali.png"],
    specifications: {
      Bentuk: "Bulat / Lonjong (Alami)",
      Warna: "Abu-abu natural",
      Kekerasan: "Keras",
    },
  },
  {
    id: "batu-split",
    name: "Batu Split (Semua Ukuran)",
    category: Category.BATU,
    description:
      "Batu pecah berbagai ukuran (1/2, 2/3, 3/5) untuk campuran beton cor, jalan, dan proyek infrastruktur lainnya.",
    unit: "m³ / rit",
    image: "/images/Batu-Split.png",
    gallery: ["/images/Batu-Split.png"],
    specifications: {
      Ukuran: "1/2, 2/3, 3/5",
      Bentuk: "Kubikal, Bersudut",
      Penggunaan: "Beton, Pengecoran, Agregat",
    },
  },
  {
    id: "batu-merah-jalanan",
    name: "Batu Merah (Agregat Jalan)",
    category: Category.BATU,
    description:
      "Agregat batu berwarna kemerahan yang dipadatkan, khusus digunakan sebagai lapisan dasar untuk pembuatan jalan.",
    unit: "m³ / rit",
    image: "/images/batumerah.png",
    gallery: ["/images/batumerah.png"],
    specifications: {
      Fungsi: "Dasar perkerasan jalan",
      Warna: "Merah Kecoklatan",
      Kepadatan: "Sangat tinggi setelah dipadatkan",
    },
  },
  {
    id: "batu-koral-sikat",
    name: "Batu Koral Sikat",
    category: Category.BATU,
    description:
      "Batu koral hias untuk lantai carport, taman, dan area outdoor. Memberikan tampilan alami dan anti-slip.",
    unit: "karung",
    image: "/images/Batu-Koral-Sikat.png",
    gallery: ["/images/Batu-Koral-Sikat.png"],
    specifications: {
      Warna: "Pancawarna",
      Ukuran: "1-2 cm (Bervariasi)",
      Finishing: "Halus Tumpul",
    },
  },

  // KATEGORI BATA
  {
    id: "bata-merah-press",
    name: "Batu Bata Merah Press",
    category: Category.BATA,
    description:
      "Bata merah press berkualitas tinggi, padat, dan presisi. Cocok untuk dinding bangunan yang kokoh dan rapi.",
    unit: "pcs",
    image: "/images/Batu-Bata-Merah.png",
    gallery: ["/images/Batu-Bata-Merah.png"],
    specifications: {
      Jenis: "Press Mesin",
      Ukuran: "20 x 10 x 5 cm",
      Kekuatan: "Tahan Cuaca",
    },
  },
  {
    id: "bata-ringan-putih",
    name: "Bata Ringan Putih (Hebel)",
    category: Category.BATA,
    description:
      "Bata ringan aerasi (AAC) yang presisi, ringan, dan memiliki kemampuan insulasi termal dan suara yang baik.",
    unit: "m³",
    image: "/images/bataputih.png",
    gallery: ["/images/bataputih.png"],
    specifications: {
      Jenis: "Autoclaved Aerated Concrete (AAC)",
      Warna: "Putih",
      Keunggulan: "Ringan, Presisi, Insulator",
    },
  },

  // KATEGORI ALAT BERAT
  {
    id: "sewa-excavator",
    name: "Penyewaan Excavator",
    category: Category.ALAT_BERAT,
    description:
      "Menyediakan jasa penyewaan berbagai jenis excavator untuk keperluan proyek konstruksi, galian, dan pengerukan.",
    unit: "jam / hari",
    image: "/images/sewaexcavator.png",
    gallery: ["/images/sewaexcavator.png"],
    specifications: {
      Tipe: "Standard, Long Arm, Breaker",
      Kapasitas: "Berbagai kelas (PC75, PC200, dll)",
      Layanan: "Termasuk Operator",
    },
  },
  {
    id: "sewa-towing",
    name: "Penyewaan Towing / Self Loader",
    category: Category.ALAT_BERAT,
    description:
      "Jasa angkutan alat berat dan kendaraan menggunakan truk towing (derek) atau self loader.",
    unit: "per ritase",
    image: "/images/sewatowing.png",
    gallery: ["/images/sewatowing.png"],
    specifications: {
      Jenis: "Towing Gendong, Self Loader",
      Kapasitas: "Disesuaikan dengan beban",
      Area: "Lokal & regional",
    },
  },
];
