"use client";

import { useState } from "react";

import ProductCard from "@/components/products/product-card";
import { products } from "@/temp-data/products/products";
import { categories } from "@/temp-data/products/categories";

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <main className="bg-[#D8E6EE] pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Search */}

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 bg-white px-6 py-4 outline-none focus:border-cyan-500"
          />
        </div>

        {/* Categories */}

        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 transition ${
                selectedCategory === category
                  ? "bg-cyan-600 text-white"
                  : "bg-white text-slate-700 hover:bg-cyan-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full rounded-3xl bg-white p-12 text-center shadow">
              <h2 className="text-2xl font-bold text-slate-700">
                No products found
              </h2>

              <p className="mt-2 text-slate-500">
                Try another search or category.
              </p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          )}
        </div>

      </div>
    </main>
  );
};

export default ProductsPage;