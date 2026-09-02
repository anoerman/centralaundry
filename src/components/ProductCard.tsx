import Link from "next/link";
import type { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="block rounded-lg border border-gray-200 p-4 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-3 aspect-video rounded-md bg-gray-100" />
      <p className="text-xs font-medium uppercase text-brand-blue">{product.category}</p>
      <h3 className="mt-1 text-lg font-semibold text-brand-navy">{product.name}</h3>
      <p className="mt-1 text-sm text-gray-600">{product.brand}</p>
      <p className="mt-2 font-bold text-brand-navy">
        Rp {product.price.toLocaleString("id-ID")}
      </p>
    </Link>
  );
}
