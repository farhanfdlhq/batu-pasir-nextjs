import React from "react";
import type { Metadata } from "next";
import { PRODUCTS } from "@/constants";
import ProductDetailClient from "./product-detail-client"; // <-- Impor komponen klien baru

// 1. generateMetadata tetap di sini (ini adalah Server Component)
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.id === params.id);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan",
    };
  }

  return {
    title: `Jual ${product.name} - Batu Pasir Jaya`,
    description: product.description.substring(0, 160),
  };
}

// 2. Komponen Halaman (Server Component)
const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  // Ambil data di server
  const product = PRODUCTS.find((p) => p.id === params.id);

  // Kirim data ke komponen klien melalui props
  return <ProductDetailClient product={product} />;
};

export default ProductDetailPage;
