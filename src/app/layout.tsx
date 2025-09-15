import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // --- TAMBAHKAN BARIS INI ---
  metadataBase: new URL("https://batu-pasir-nextjs.vercel.app"), // Ganti dengan URL Vercel Anda nanti
  // -------------------------
  title: "Batu Pasir Jaya - Supplier Material Bangunan",
  description:
    "Supplier material bangunan terpercaya untuk proyek rumah maupun konstruksi skala besar. Pengiriman cepat, harga kompetitif, dan layanan profesional.",
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
