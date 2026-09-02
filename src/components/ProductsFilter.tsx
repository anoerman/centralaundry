"use client";

import { useMemo, useState } from "react";
import {
  WashingMachine,
  Wind,
  Shirt,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types";

type SortOption = "name-asc" | "price-asc" | "price-desc";
type PageSize = 10 | 20 | 30 | "all";

const categoryLabels: Record<Product["category"], string> = {
  washer: "Washer",
  dryer: "Dryer",
  other: "Other",
};

const categoryIcons: Record<Product["category"], LucideIcon> = {
  washer: WashingMachine,
  dryer: Wind,
  other: Shirt,
};

const sortLabels: Record<SortOption, string> = {
  "name-asc": "Name (A–Z)",
  "price-asc": "Price (Low to High)",
  "price-desc": "Price (High to Low)",
};

const selectClass =
  "rounded-md border border-gray-300 bg-white py-1.5 pl-2 pr-7 text-sm focus:border-brand-blue focus:outline-none";

export default function ProductsFilter({ products }: { products: Product[] }) {
  const [category, setCategory] = useState<"all" | Product["category"]>("all");
  const [brand, setBrand] = useState<"all" | string>("all");
  const [sort, setSort] = useState<SortOption>("name-asc");
  const [pageSize, setPageSize] = useState<PageSize>(10);
  const [filtersOpen, setFiltersOpen] = useState(false);

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
      <div className="mt-8 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setFiltersOpen((open) => !open)}
          aria-expanded={filtersOpen}
          className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
            filtersOpen
              ? "border-brand-blue bg-brand-blue text-white"
              : "border-gray-200 text-gray-600 hover:border-brand-blue/40"
          }`}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </button>

        <label className="flex items-center gap-1.5 text-sm text-gray-600">
          Show
          <select
            className={selectClass}
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
        </label>
      </div>

      {filtersOpen && (
      <div className="mt-4 rounded-lg border border-gray-200 p-4">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("all")}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
              category === "all"
                ? "border-brand-blue bg-brand-blue text-white"
                : "border-gray-200 text-gray-600 hover:border-brand-blue/40"
            }`}
          >
            All
          </button>
          {categories.map((c) => {
            const Icon = categoryIcons[c];
            const isActive = category === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(isActive ? "all" : c)}
                className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-brand-blue bg-brand-blue text-white"
                    : "border-gray-200 text-gray-600 hover:border-brand-blue/40"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {categoryLabels[c]}s
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-gray-100 pt-4">
          <label className="flex items-center gap-1.5 text-sm text-gray-600">
            Brand
            <select
              className={selectClass}
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="all">All</option>
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </label>

          <label className="flex items-center gap-1.5 text-sm text-gray-600">
            Sort
            <select
              className={selectClass}
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
            >
              {(Object.keys(sortLabels) as SortOption[]).map((key) => (
                <option key={key} value={key}>
                  {sortLabels[key]}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      )}

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
