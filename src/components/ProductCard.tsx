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

  return (
    <Link
      href={`/products/${product.id}`}
      className="block rounded-lg border border-gray-200 p-4 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative mb-3 aspect-video rounded-md bg-gray-100">
        <div className="absolute left-2 top-2 flex gap-1.5">
          {product.isBestSeller && (
            <span className="rounded-full bg-brand-yellow px-2 py-1 text-xs font-semibold text-brand-navy">
              Best Seller
            </span>
          )}
          {onSale && (
            <span className="rounded-full bg-red-600 px-2 py-1 text-xs font-semibold text-white">
              Sale -{discountPercent}%
            </span>
          )}
        </div>
      </div>
      <p className="text-xs font-medium uppercase text-brand-blue">{product.category}</p>
      <h3 className="mt-1 text-lg font-semibold text-brand-navy">{product.name}</h3>
      <p className="mt-1 text-sm text-gray-600">{product.brand}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <p className="font-bold text-brand-navy">
          Rp {product.price.toLocaleString("id-ID")}
        </p>
        {onSale && (
          <p className="text-sm text-gray-400 line-through">
            Rp {product.originalPrice!.toLocaleString("id-ID")}
          </p>
        )}
      </div>
    </Link>
  );
}
