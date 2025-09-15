// src/app/catalog/page.tsx
import React from "react";
import type { Metadata } from "next";
import CatalogClient from "./catalog-client"; // <-- Impor komponen klien baru

// 1. Metadata tetap di sini
export const metadata: Metadata = {
  title: "Katalog Produk - Batu Pasir Jaya",
  description:
    "Lihat semua daftar produk material bangunan kami, termasuk pasir, batu, bata, dan tanah urug berkualitas di Sangatta.",
};

// 2. Komponen Halaman (Server Component) sekarang sangat sederhana
const CatalogPage = () => {
  return <CatalogClient />;
};

export default CatalogPage;
