import React from "react";
import Link from "next/link";
import type { Product } from "../types";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white border ...">
      <Link href={`/product/${product.id}`} className="block">
        <div className="overflow-hidden aspect-[16/9] relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <span className="inline-block bg-primary-dark/10 text-primary-dark text-xs font-semibold px-2 py-1 rounded-full mb-2">
            {product.category}
          </span>
          <h3 className="text-lg font-bold text-secondary truncate">
            {product.name}
          </h3>
          <p className="text-slate-500 text-sm mt-2 h-10 overflow-hidden">
            {product.description}
          </p>
          {/* Hapus blok harga dan stok */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-lg font-bold text-primary">Kontak untuk Info</p>
            <span className="text-sm text-slate-500">Unit: {product.unit}</span>
          </div>
        </div>
      </Link>
      <div className="p-4 bg-slate-50 border-t border-slate-200">
        <Link
          href={`/product/${product.id}`}
          className="w-full text-center bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300 block"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};
export default ProductCard;
