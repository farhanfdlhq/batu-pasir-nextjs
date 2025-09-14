import React from "react";
import { CheckCircleIcon } from "@/components/IconComponents";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - Batu Pasir Jaya",
  description:
    "Sejarah, visi, dan misi Batu Pasir Jaya, supplier material bangunan terpercaya di Sangatta, Kutai Timur sejak 2005.",
};

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary">
            Tentang Batu Pasir Jaya
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Mitra terpercaya Anda dalam penyediaan material bangunan berkualitas
            sejak tahun 2005.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://picsum.photos/seed/about-us/800/600"
              alt="Company Team"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Sejarah Singkat
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Batu Pasir Jaya didirikan dengan sebuah visi sederhana: menjadi
              penyedia material bangunan yang paling dapat diandalkan di wilayah
              ini. Berawal dari satu armada truk dan semangat kerja keras, kami
              telah berkembang menjadi supplier besar yang melayani ratusan
              proyek konstruksi, mulai dari perumahan pribadi hingga
              infrastruktur skala besar.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Kami percaya bahwa fondasi yang kuat adalah kunci dari segala
              jenis bangunan, dan kami berkomitmen untuk menyediakan fondasi
              tersebut melalui produk-produk berkualitas tinggi dan layanan yang
              profesional.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-secondary mb-3">
                Misi Kami
              </h3>
              <p className="text-slate-600">
                Menyediakan material bangunan dengan kualitas terbaik, harga
                yang kompetitif, dan pengiriman yang tepat waktu untuk mendukung
                keberhasilan setiap proyek pelanggan kami.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-secondary mb-3">
                Visi Kami
              </h3>
              <p className="text-slate-600">
                Menjadi pilihan utama dan mitra strategis bagi para kontraktor
                dan pengembang dalam pemenuhan kebutuhan material bangunan di
                seluruh Indonesia.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-8">
            Nilai-Nilai Kami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <CheckCircleIcon className="w-12 h-12 text-primary mb-3" />
              <h4 className="text-xl font-semibold">Integritas</h4>
              <p className="text-slate-500 mt-1">
                Jujur dan transparan dalam setiap transaksi.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircleIcon className="w-12 h-12 text-primary mb-3" />
              <h4 className="text-xl font-semibold">Kualitas</h4>
              <p className="text-slate-500 mt-1">
                Hanya menyediakan produk yang memenuhi standar.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircleIcon className="w-12 h-12 text-primary mb-3" />
              <h4 className="text-xl font-semibold">Pelayanan</h4>
              <p className="text-slate-500 mt-1">
                Mengutamakan kepuasan dan kebutuhan pelanggan.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircleIcon className="w-12 h-12 text-primary mb-3" />
              <h4 className="text-xl font-semibold">Profesionalisme</h4>
              <p className="text-slate-500 mt-1">
                Bekerja efisien, efektif, dan bertanggung jawab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
