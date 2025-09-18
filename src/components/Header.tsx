"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TruckIcon, MenuIcon, XIcon } from "./IconComponents";
import Image from "next/image"; // Import Image

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinkClasses = (href: string) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      pathname === href
        ? "bg-primary text-white"
        : "text-slate-100 hover:bg-secondary-light hover:text-white"
    }`;

  const mobileNavLinkClasses = (href: string) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
      pathname === href
        ? "bg-primary text-white"
        : "text-slate-700 hover:bg-slate-200"
    }`;

  return (
    <header className="bg-secondary shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center space-x-2 text-white hover:text-primary transition-colors"
            >
              <Image
                src="/images/logo-pt.png"
                alt="Logo PT Borneo Jayaprima Energy"
                width={40}
                height={40}
                priority
              />
              <span className="text-lg font-bold">
                PT Borneo Jayaprima Energy
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className={navLinkClasses("/")}>
                Home
              </Link>
              <Link href="/catalog" className={navLinkClasses("/catalog")}>
                Katalog
              </Link>
              <Link href="/about" className={navLinkClasses("/about")}>
                Tentang Kami
              </Link>
              <Link href="/contact" className={navLinkClasses("/contact")}>
                Kontak
              </Link>
              <Link
                href="/estimator"
                className="bg-accent text-secondary-dark font-bold px-4 py-2 rounded-md text-sm hover:bg-yellow-500 transition-all transform hover:scale-105"
              >
                AI Estimator
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-100 hover:text-white hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={mobileNavLinkClasses("/")}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/catalog"
              className={mobileNavLinkClasses("/catalog")}
              onClick={() => setIsMenuOpen(false)}
            >
              Katalog
            </Link>
            <Link
              href="/about"
              className={mobileNavLinkClasses("/about")}
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              href="/contact"
              className={mobileNavLinkClasses("/contact")}
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak
            </Link>
            <Link
              href="/estimator"
              className="block w-full text-left bg-accent text-secondary-dark font-bold px-3 py-2 rounded-md text-base hover:bg-yellow-500 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Estimator
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
