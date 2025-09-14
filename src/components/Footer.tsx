import React from "react";
import Link from "next/link";
import { TruckIcon, PhoneIcon, MailIcon, MapPinIcon } from "./IconComponents";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-slate-300 border-t border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center space-x-2 text-white mb-4"
            >
              <TruckIcon className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Batu Pasir Jaya</span>
            </Link>
            <p className="text-sm text-slate-400">
              Supplier material bangunan terpercaya untuk proyek rumah maupun
              konstruksi skala besar. Pengiriman cepat, harga kompetitif, dan
              layanan profesional.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog"
                  className="hover:text-primary transition-colors"
                >
                  Katalog Produk
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Kontak
                </Link>
              </li>
              <li>
                <Link
                  href="/estimator"
                  className="hover:text-primary transition-colors"
                >
                  AI Estimator
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Hubungi Kami
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>
                  jl sulawesi gg flamboyan no 14 rt 21 Sangatta, Kab Kutai timur
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 text-primary" />
                <a
                  href="tel:+628123456789"
                  className="hover:text-primary transition-colors"
                >
                  +62-8123456789
                </a>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-3 text-primary" />
                <a
                  href="mailto:sales@batupasirjaya.com"
                  className="hover:text-primary transition-colors"
                >
                  sales@batupasirjaya.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Jam Operasional
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Senin - Jumat: 08:00 - 17:00 WIB</li>
              <li>Sabtu: 08:00 - 14:00 WIB</li>
              <li>Minggu & Hari Libur: Tutup</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Batu Pasir Jaya. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
