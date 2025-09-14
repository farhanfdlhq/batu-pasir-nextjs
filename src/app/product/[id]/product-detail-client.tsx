"use client";
// Kita tidak perlu 'use(params)' lagi karena akan menerima produk sebagai prop
import React, { useState, useEffect } from "react";
import Link from "next/link";
// Kita tidak perlu import PRODUCTS lagi di sini
import type { Product } from "@/types";

// Komponen ini sekarang menerima 'product' sebagai prop
const ProductDetailClient: React.FC<{ product: Product | undefined }> = ({
  product,
}) => {
  // State untuk gambar dan kuantitas tetap di sini
  const [mainImage, setMainImage] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  // useEffect sekarang hanya untuk mengatur gambar utama
  useEffect(() => {
    if (product) {
      setMainImage(product.image);
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-2xl font-bold">Produk tidak ditemukan.</h1>
        <Link
          href="/catalog"
          className="text-primary hover:underline mt-4 inline-block"
        >
          Kembali ke Katalog
        </Link>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Permintaan penawaran untuk ${quantity} ${product.unit} ${product.name} telah diterima. Kami akan segera menghubungi Anda.`
    );
  };

  // Seluruh bagian JSX (return) tidak berubah, salin saja dari file lama Anda
  return (
    <div className="bg-white py-12">
      {/* ... Seluruh kode JSX Anda dari <body> sampai </body> ... */}
    </div>
  );
};

export default ProductDetailClient;
