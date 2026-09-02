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

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <p className="text-xs font-medium uppercase text-brand-blue">{product.category}</p>
      <h1 className="mt-1 text-3xl font-bold text-brand-navy">{product.name}</h1>
      <p className="mt-1 text-gray-600">{product.brand}</p>

      <div className="mt-6 aspect-video rounded-lg bg-gray-100" />

      <p className="mt-6 text-2xl font-bold text-brand-navy">
        Rp {product.price.toLocaleString("id-ID")}
      </p>
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
