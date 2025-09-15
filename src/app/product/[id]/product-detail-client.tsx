"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types";

const ProductDetailClient: React.FC<{ product: Product | undefined }> = ({
  product,
}) => {
  const [mainImage, setMainImage] = useState(product ? product.image : "");
  const [quantity, setQuantity] = useState(1);
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formError, setFormError] = useState("");

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

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");
    setFormError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      product: product?.name,
      quantity: quantity,
      unit: product?.unit,
      message: `Saya tertarik dengan produk ${product?.name} sebanyak ${quantity} ${product?.unit}. Mohon informasinya.`,
      subject: `Permintaan Penawaran: ${product?.name}`,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Gagal mengirim permintaan.");
      }

      setFormStatus("success");
      (e.target as HTMLFormElement).reset();
      setQuantity(1);
    } catch (err) {
      setFormStatus("error");
      setFormError(err instanceof Error ? err.message : "Terjadi kesalahan.");
    }
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] mb-4 rounded-lg overflow-hidden border border-slate-200 relative">
              {mainImage && (
                <Image
                  src={mainImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.gallery.slice(0, 4).map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`block border-2 rounded-md overflow-hidden relative aspect-square ${
                    mainImage === img ? "border-primary" : "border-transparent"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info & Quote Form */}
          <div>
            <span className="inline-block bg-primary-dark/10 text-primary-dark text-xs font-semibold px-2 py-1 rounded-full mb-2">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-secondary">
              {product.name}
            </h1>
            <p className="text-3xl font-bold text-primary mt-4">
              {formatPrice(product.price)}
              <span className="text-lg font-medium text-slate-500">
                {" "}
                / {product.unit}
              </span>
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
                    name="name"
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
                    name="phone"
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
                    name="email"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={formStatus === "loading"}
                className="mt-6 w-full bg-primary text-white font-bold py-3 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300 disabled:bg-slate-400"
              >
                {formStatus === "loading" ? "Mengirim..." : "Kirim Permintaan"}
              </button>
              {formStatus === "success" && (
                <p className="text-green-600 text-sm mt-4">
                  Permintaan berhasil dikirim! Kami akan segera menghubungi
                  Anda.
                </p>
              )}
              {formStatus === "error" && (
                <p className="text-red-600 text-sm mt-4">Oops! {formError}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailClient;
