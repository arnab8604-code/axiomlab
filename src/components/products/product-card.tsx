import Link from "next/link";
import Image from "next/image";

import type { Product } from "@/types/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({
  product,
}: ProductCardProps) => {
  return (
    <Link
      href={`/our_products/${product.id}`}
      className="group overflow-hidden rounded-[30px] border border-slate-300 bg-[#EAF2F8] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}

      <div className="relative flex h-64 items-center justify-center bg-slate-100">

        {/* Replace later */}

        <div className="text-slate-400">
          Product Image
        </div>

        {/* Later */}

        {/*
        <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
        />
        */}

      </div>

      {/* Content */}

      <div className="p-6">

        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
          {product.category}
        </p>

        <h2 className="mt-2 text-2xl font-bold text-slate-900">
          {product.name}
        </h2>

        <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
          {product.description}
        </p>

        <button
          className="mt-8 rounded-full bg-green-700 px-5 py-2 font-semibold text-white transition hover:bg-black"
        >
          View Details
        </button>

      </div>

    </Link>
  );
};

export default ProductCard;