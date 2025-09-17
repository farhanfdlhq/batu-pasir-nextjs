"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Impor Image
import type { Product } from "@/types";

const ProductDetailClient: React.FC<{ product: Product | undefined }> = ({
  product,
}) => {
  const [mainImage, setMainImage] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    // ... (kode jika produk tidak ditemukan)
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

  // PASTIKAN ANDA MEMILIKI BAGIAN RETURN YANG LENGKAP SEPERTI INI
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] mb-4 rounded-lg overflow-hidden border border-slate-200 relative">
              <Image
                src={mainImage}
                alt={product.name}
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[product.image, ...product.gallery]
                .slice(0, 4)
                .map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(img)}
                    className={`block border-2 rounded-md overflow-hidden ${
                      mainImage === img
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={img}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </button>
                ))}
            </div>
          </div>
          {/* Product Info & Quote Form */}
          <div>
            {/* ... (kategori & nama) ... */}

            {/* Hapus elemen <p> yang menampilkan harga */}
            {/* <p className="text-3xl font-bold text-primary mt-4"> ... </p> */}

            <p className="mt-6 text-lg text-secondary font-semibold">
              Untuk informasi harga dan ketersediaan, silakan isi form penawaran
              di bawah atau hubungi kami.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              {product.description}
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Spesifikasi
              </h3>
              <ul className="border-t border-slate-200">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <li
                    key={key}
                    className="flex justify-between py-2 border-b border-slate-200"
                  >
                    <span className="font-medium text-slate-600">{key}</span>
                    <span className="text-slate-800">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Quote Form */}
            <form
              onSubmit={handleQuoteSubmit}
              className="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-200"
            >
              <h3 className="text-xl font-bold text-secondary mb-4">
                Minta Penawaran
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Jumlah
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="number"
                      id="quantity"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      className="flex-1 min-w-0 block w-full px-3 py-2 bg-white rounded-none rounded-l-md focus:ring-primary focus:border-primary sm:text-sm border-slate-300"
                      min="1"
                    />
                    <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-slate-300 bg-slate-100 text-slate-500 text-sm">
                      {product.unit}
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-primary text-white font-bold py-3 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300"
              >
                Kirim Permintaan
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* ... */}
    </div>
  );
};
export default ProductDetailClient;
