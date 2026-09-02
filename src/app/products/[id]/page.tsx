import { notFound } from "next/navigation";
import Button from "@/components/Button";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

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
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="flex items-center gap-2">
        <p className="text-xs font-medium uppercase text-brand-blue">{product.category}</p>
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
      <h1 className="mt-1 text-3xl font-bold text-brand-navy">{product.name}</h1>
      <p className="mt-1 text-gray-600">{product.brand}</p>

      <div className="mt-6 aspect-video rounded-lg bg-gray-100" />

      <div className="mt-6 flex items-baseline gap-3">
        <p className="text-2xl font-bold text-brand-navy">
          Rp {product.price.toLocaleString("id-ID")}
        </p>
        {onSale && (
          <p className="text-lg text-gray-400 line-through">
            Rp {product.originalPrice!.toLocaleString("id-ID")}
          </p>
        )}
      </div>
      <p className="mt-4 text-gray-700">{product.description}</p>

      <h2 className="mt-8 font-semibold text-brand-navy">Specifications</h2>
      <ul className="mt-2 list-inside list-disc text-gray-700">
        {product.specs.map((spec) => (
          <li key={spec}>{spec}</li>
        ))}
      </ul>

      <div className="mt-8">
        <Button href="/contact">Inquire About This Product</Button>
      </div>
    </div>
  );
}
