import Link from "next/link";
import type { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  const onSale =
    product.originalPrice !== undefined &&
    product.originalPrice > product.price;
  const discountPercent = onSale
    ? Math.round(
        ((product.originalPrice! - product.price) / product.originalPrice!) *
          100
      )
    : 0;
  const savings = onSale ? product.originalPrice! - product.price : 0;

  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] bg-gray-100">
        {product.isBestSeller && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-yellow px-2.5 py-1 text-xs font-semibold text-brand-navy shadow-sm">
            Best Seller
          </span>
        )}
        {onSale && (
          <span className="absolute right-3 top-3 rounded-full bg-red-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
            -{discountPercent}%
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2">
          <span className="rounded bg-brand-blue/10 px-2 py-0.5 text-xs font-medium capitalize text-brand-blue">
            {product.category}
          </span>
          <span className="text-xs text-gray-500">{product.brand}</span>
        </div>

        <h3 className="mt-2 line-clamp-2 min-h-[2.75rem] font-semibold leading-snug text-brand-navy">
          {product.name}
        </h3>

        {product.specs.length > 0 && (
          <p className="mt-1 line-clamp-1 text-xs text-gray-500">
            {product.specs.slice(0, 2).join(" · ")}
          </p>
        )}

        <div className="mt-3 flex-1" />

        <div>
          <div className="flex items-baseline gap-2">
            <p className="text-lg font-bold text-brand-navy">
              Rp {product.price.toLocaleString("id-ID")}
            </p>
            {onSale && (
              <p className="text-xs text-gray-400 line-through">
                Rp {product.originalPrice!.toLocaleString("id-ID")}
              </p>
            )}
          </div>
          {onSale && (
            <p className="mt-0.5 text-xs font-medium text-green-700">
              Save Rp {savings.toLocaleString("id-ID")}
            </p>
          )}
        </div>

        <span className="mt-3 text-sm font-medium text-brand-blue opacity-0 transition-opacity group-hover:opacity-100">
          View details →
        </span>
      </div>
    </Link>
  );
}
