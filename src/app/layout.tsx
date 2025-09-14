// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Pastikan path import benar
import Footer from "@/components/Footer"; // Pastikan path import benar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Batu Pasir Jaya - Supplier Material Bangunan",
  description:
    "A modern web application for a stone and sand supply company, featuring a product catalog, company profile, and an AI-powered project material estimator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-slate-50 text-secondary font-sans flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
