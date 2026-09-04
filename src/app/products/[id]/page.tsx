import { notFound } from "next/navigation";
import { Truck, ShieldCheck, Headset } from "lucide-react";
import Button from "@/components/Button";
import Breadcrumb from "@/components/Breadcrumb";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { getWhatsAppLink } from "@/lib/whatsapp";

const categoryLabels: Record<string, string> = {
  washer: "Washers",
  dryer: "Dryers",
  other: "Other Equipment",
};

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
          100,
      )
    : 0;
  const savings = onSale ? product.originalPrice! - product.price : 0;

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: categoryLabels[product.category], href: "/products" },
            { label: product.name },
          ]}
        />

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <ProductGallery images={product.images} productName={product.name} />

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded bg-brand-blue/10 px-2 py-0.5 text-xs font-medium capitalize text-brand-blue">
                {product.category}
              </span>
              {product.isBestSeller && (
                <span className="rounded-full bg-brand-yellow px-2.5 py-1 text-xs font-semibold text-brand-navy">
                  Best Seller
                </span>
              )}
              {onSale && (
                <span className="rounded-full bg-red-600 px-2.5 py-1 text-xs font-semibold text-white">
                  Sale -{discountPercent}%
                </span>
              )}
            </div>

            <h1 className="mt-3 text-3xl font-bold text-brand-navy">
              {product.name}
            </h1>
            <p className="mt-1 text-gray-600">{product.brand}</p>

            <div className="mt-4 flex items-baseline gap-3">
              <p className="text-3xl font-bold text-brand-navy">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
              {onSale && (
                <p className="text-lg text-gray-400 line-through">
                  Rp {product.originalPrice!.toLocaleString("id-ID")}
                </p>
              )}
            </div>
            {onSale && (
              <p className="mt-1 text-sm font-medium text-green-700">
                You save Rp {savings.toLocaleString("id-ID")}
              </p>
            )}

            <p className="mt-4 text-gray-700">{product.description}</p>

            <div className="mt-6">
              <Button
                href={getWhatsAppLink(
                  `Hi CentraLaundry, I'm interested in ${product.name}. Could you share more details?`,
                )}
              >
                Inquire About This Product
              </Button>
            </div>

            <ul className="mt-6 space-y-2.5 border-t border-gray-100 pt-6 text-sm text-gray-600">
              <li className="flex items-center gap-2.5">
                <Truck className="h-4 w-4 shrink-0 text-brand-blue" />
                Nationwide delivery &amp; installation
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 shrink-0 text-brand-blue" />
                Manufacturer warranty &amp; after-sales support
              </li>
              <li className="flex items-center gap-2.5">
                <Headset className="h-4 w-4 shrink-0 text-brand-blue" />
                Free consultation with our team
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 max-w-2xl">
          <h2 className="font-semibold text-brand-navy">Specifications</h2>
          <ul className="mt-2 list-inside list-disc text-gray-700">
            {product.specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-brand-navy">
              Related Products
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
