import { Product, Category } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "tanah-urug",
    name: "Tanah Urug / Timbunan",
    category: Category.TANAH,
    description:
      "Tanah berkualitas untuk keperluan pengurukan, peninggian lahan, dan dasar konstruksi. Juga sering disebut tanah urugan.",
    price: 150000,
    unit: "m³",
    stock: 500,
    image: "/images/TanahUrug.png",
    gallery: ["/images/TanahUrug.png"],
    specifications: {
      Asal: "Galian Proyek",
      Warna: "Coklat Kemerahan",
      Kepadatan: "Tinggi",
    },
  },
  {
    id: "pasir-pasang",
    name: "Pasir Pasang / Gunung",
    category: Category.PASIR,
    description:
      "Pasir gunung asli dengan butiran halus, cocok untuk adukan plesteran, pemasangan bata, dan pondasi.",
    price: 250000,
    unit: "m³",
    stock: 350,
    image: "/images/Pasir-Pasang.png",
    gallery: ["/images/Pasir-Pasang.png"],
    specifications: {
      Asal: "Gunung Merapi",
      "Kadar Lumpur": "< 5%",
      "Ukuran Butir": "0.075 - 2 mm",
    },
  },
  {
    id: "batu-gunung",
    name: "Batu Gunung / Batu Kali",
    category: Category.BATU,
    description:
      "Batu kali atau batu gunung pecah untuk pondasi bangunan. Kuat, kokoh, dan tahan lama.",
    price: 220000,
    unit: "m³",
    stock: 200,
    image: "/images/Batu-Gunung.png",
    gallery: ["/images/Batu-Gunung.png"],
    specifications: {
      Ukuran: "10-30 cm",
      Warna: "Abu-abu kehitaman",
      Kekerasan: "Sangat Keras",
    },
  },
  {
    id: "batu-split",
    name: "Batu Split 2/3",
    category: Category.BATU,
    description:
      "Batu pecah ukuran 2-3 cm, ideal untuk campuran beton cor, jalan, dan proyek infrastruktur lainnya.",
    price: 280000,
    unit: "m³",
    stock: 400,
    image: "/images/Batu-Split.png",
    gallery: ["/images/Batu-Split.png"],
    specifications: {
      Ukuran: "20-30 mm",
      Bentuk: "Kubikal, Bersudut",
      Penggunaan: "Beton K-225, K-300",
    },
  },
  {
    id: "batu-koral",
    name: "Batu Koral Sikat",
    category: Category.BATU,
    description:
      "Batu koral hias untuk lantai carport, taman, dan area outdoor. Memberikan tampilan alami dan anti-slip.",
    price: 45000,
    unit: "karung (20kg)",
    stock: 1000,
    image: "/images/Batu-Koral-Sikat.png",
    gallery: ["/images/Batu-Koral-Sikat.png"],
    specifications: {
      Warna: "Pancawarna",
      Ukuran: "1-2 cm",
      Finishing: "Halus Tumpul",
    },
  },
  {
    id: "pasir-cor",
    name: "Pasir Cor / Beton / Palu",
    category: Category.PASIR,
    description:
      "Pasir dengan butiran kasar dan tajam, sangat baik untuk campuran beton struktural agar menghasilkan kekuatan maksimal.",
    price: 265000,
    unit: "m³",
    stock: 300,
    image: "/images/Pasir-Cor.png",
    gallery: ["/images/Pasir-Cor.png"],
    specifications: {
      Asal: "Sungai Progo",
      "Kadar Lumpur": "< 3%",
      "Ukuran Butir": "2 - 5 mm",
    },
  },
  {
    id: "bata-merah",
    name: "Batu Bata Merah Press",
    category: Category.BATA,
    description:
      "Bata merah press berkualitas tinggi, padat, dan presisi. Cocok untuk dinding bangunan yang kokoh dan rapi.",
    price: 850,
    unit: "pcs",
    stock: 50000,
    image: "/images/Batu-Bata-Merah.png",
    gallery: ["/images/Batu-Bata-Merah.png"],
    specifications: {
      Jenis: "Press Mesin",
      Ukuran: "20 x 10 x 5 cm",
      Kekuatan: "Tahan Cuaca",
    },
  },
];
