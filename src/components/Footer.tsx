import React from "react";
import Link from "next/link";
import { TruckIcon, PhoneIcon, MailIcon, MapPinIcon } from "./IconComponents";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-slate-300 border-t border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <Link
              href="/"
              className="flex flex-col items-start space-y-2 text-white mb-4"
            >
              {/* Anda bisa menambahkan logo di sini */}
              <span className="text-xl font-bold">
                PT Borneo Jayaprima Energy
              </span>
              <span className="text-md font-semibold text-slate-400">
                Ardy Truck
              </span>
            </Link>
            <p className="text-sm text-slate-400">
              Supplier material bangunan dan penyewaan alat berat terpercaya
              untuk proyek Anda.
            </p>
          </div>

          {/* Navigasi (tidak berubah) */}

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Hubungi Kami
            </h3>
            <ul className="space-y-3 text-sm">
              {/* ... (alamat tidak berubah) ... */}
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 text-primary" />
                <a
                  href="tel:+6281253872108"
                  className="hover:text-primary transition-colors"
                >
                  +62 812-5387-2108
                </a>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-3 text-primary" />
                <a
                  href="mailto:Ardyharyanto354@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  Ardyharyanto354@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Jam Operasional
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Senin - Minggu: 06:00 - 20:00 WITA</li>
              <li>Beroperasi 7x24 Jam (sesuai perjanjian)</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} PT Borneo Jayaprima Energy. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
