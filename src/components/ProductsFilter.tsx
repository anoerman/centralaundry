"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types";

type SortOption = "name-asc" | "price-asc" | "price-desc";
type PageSize = 10 | 20 | 30 | "all";

const categoryLabels: Record<Product["category"], string> = {
  washer: "Washer",
  dryer: "Dryer",
  other: "Other",
};

const sortLabels: Record<SortOption, string> = {
  "name-asc": "Name (A–Z)",
  "price-asc": "Price (Low to High)",
  "price-desc": "Price (High to Low)",
};

const selectClass =
  "rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-brand-blue focus:outline-none";

export default function ProductsFilter({ products }: { products: Product[] }) {
  const [category, setCategory] = useState<"all" | Product["category"]>("all");
  const [brand, setBrand] = useState<"all" | string>("all");
  const [sort, setSort] = useState<SortOption>("name-asc");
  const [pageSize, setPageSize] = useState<PageSize>(10);

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    [products]
  );
  const brands = useMemo(
    () => Array.from(new Set(products.map((p) => p.brand))).sort(),
    [products]
  );

  const visibleProducts = useMemo(() => {
    let result = products;

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }
    if (brand !== "all") {
      result = result.filter((p) => p.brand === brand);
    }

    result = [...result].sort((a, b) => {
      if (sort === "name-asc") return a.name.localeCompare(b.name);
      if (sort === "price-asc") return a.price - b.price;
      return b.price - a.price;
    });

    return result;
  }, [products, category, brand, sort]);

  const shownProducts =
    pageSize === "all" ? visibleProducts : visibleProducts.slice(0, pageSize);

  return (
    <div>
      <div className="mt-8 flex flex-wrap items-end gap-4">
        <div>
          <label className="block text-xs font-medium text-brand-navy">
            Category
          </label>
          <select
            className={`mt-1 ${selectClass}`}
            value={category}
            onChange={(e) =>
              setCategory(e.target.value as "all" | Product["category"])
            }
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {categoryLabels[c]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-brand-navy">
            Type / Brand
          </label>
          <select
            className={`mt-1 ${selectClass}`}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="all">All Types</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className="ml-auto flex gap-4">
          <div>
            <label className="block text-xs font-medium text-brand-navy">
              Sort by
            </label>
            <select
              className={`mt-1 ${selectClass}`}
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
            >
              {(Object.keys(sortLabels) as SortOption[]).map((key) => (
                <option key={key} value={key}>
                  {sortLabels[key]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-brand-navy">
              Show
            </label>
            <select
              className={`mt-1 ${selectClass}`}
              value={pageSize}
              onChange={(e) =>
                setPageSize(
                  e.target.value === "all"
                    ? "all"
                    : (Number(e.target.value) as PageSize)
                )
              }
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value="all">All</option>
            </select>
          </div>
        </div>
      </div>

      {visibleProducts.length === 0 ? (
        <p className="mt-12 text-center text-gray-500">
          No products match the selected filters.
        </p>
      ) : (
        <>
          <p className="mt-6 text-sm text-gray-500">
            Showing {shownProducts.length} of {visibleProducts.length} products
          </p>
          <div className="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shownProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
