import React from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "../constants";
import Image from "next/image";
import {
  CheckCircleIcon,
  ChevronRightIcon,
} from "../components/IconComponents";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Batu Pasir Jaya - Supplier Material Bangunan",
  description:
    "Batu Pasir Jaya adalah supplier material bangunan terpercaya di Sangatta, Kutai Timur. Kami menyediakan batu, pasir, dan material berkualitas untuk proyek konstruksi Anda.",
};
const HomePage: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  const advantages = [
    "Kualitas Material Terjamin",
    "Harga Kompetitif & Transparan",
    "Pengiriman Tepat Waktu",
    "Layanan Pelanggan Responsif",
    "Stok Selalu Tersedia",
    "Armada Milik Sendiri",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-secondary text-white h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Image
          src="/images/hero-sections.png"
          alt="Construction site"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-shadow-lg">
            Supplier Batu & Pasir Terpercaya
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-slate-200">
            Menyediakan material bangunan terbaik untuk proyek rumah pribadi
            hingga konstruksi skala besar.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/catalog"
              className="bg-primary text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Lihat Katalog
            </Link>
            <Link
              href="/contact"
              className="bg-white text-secondary font-bold py-3 px-8 rounded-md text-lg hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Produk Unggulan
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Material pilihan yang paling sering dicari oleh pelanggan kami.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/catalog"
              className="text-primary font-semibold hover:text-primary-dark transition-colors flex items-center justify-center group"
            >
              <span>Lihat Semua Produk</span>
              <ChevronRightIcon className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Keunggulan Kami
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Alasan mengapa Anda harus memilih Batu Pasir Jaya sebagai mitra
              konstruksi Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-slate-50 rounded-lg"
              >
                <CheckCircleIcon className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-secondary">
                    {advantage}
                  </h3>
                  <p className="mt-1 text-slate-500">
                    Kami berkomitmen memberikan yang terbaik untuk setiap aspek
                    layanan.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white">
            Butuh Estimasi Material Untuk Proyek Anda?
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            Gunakan AI Estimator kami untuk mendapatkan perkiraan kebutuhan
            material dengan cepat dan mudah.
          </p>
          <div className="mt-8">
            <Link
              href="/estimator"
              className="bg-accent text-secondary-dark font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Coba AI Estimator Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
