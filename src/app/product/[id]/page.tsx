// src/app/product/[id]/page.tsx
import React from "react";
import type { Metadata } from "next";
import { PRODUCTS } from "@/constants";
import ProductDetailClient from "./product-detail-client";

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const params = await paramsPromise;
  const product = PRODUCTS.find((p) => p.id === params.id);

  if (!product) {
    return { title: "Produk Tidak Ditemukan" };
  }
  return {
    title: `Jual ${product.name} - Batu Pasir Jaya`,
    description: product.description.substring(0, 160),
    openGraph: {
      images: [product.image],
    },
  };
}

const ProductDetailPage = async ({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) => {
  const params = await paramsPromise;
  const product = PRODUCTS.find((p) => p.id === params.id);

  return <ProductDetailClient product={product} />;
};

export default ProductDetailPage;
