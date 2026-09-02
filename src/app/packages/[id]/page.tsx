import { notFound } from "next/navigation";
import { Truck, ShieldCheck, Headset } from "lucide-react";
import Button from "@/components/Button";
import Breadcrumb from "@/components/Breadcrumb";
import ProductGallery from "@/components/ProductGallery";
import PackageCard from "@/components/PackageCard";
import { packages } from "@/data/packages";

export function generateStaticParams() {
  return packages.map((pkg) => ({ id: pkg.id }));
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pkg = packages.find((p) => p.id === id);

  if (!pkg) notFound();

  const relatedPackages = packages.filter((p) => p.id !== pkg.id).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Business Packages", href: "/packages" },
          { label: pkg.name },
        ]}
      />

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <ProductGallery images={pkg.images} productName={pkg.name} />

        <div>
          <h1 className="text-3xl font-bold text-brand-navy">{pkg.name}</h1>

          <p className="mt-4 text-3xl font-bold text-brand-navy">
            Rp {pkg.price.toLocaleString("id-ID")}
          </p>

          <p className="mt-4 text-gray-700">{pkg.description}</p>

          <div className="mt-6">
            <Button href="/contact">Inquire About This Package</Button>
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
        <h2 className="font-semibold text-brand-navy">Package Includes</h2>
        <ul className="mt-2 list-inside list-disc text-gray-700">
          {pkg.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {relatedPackages.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-brand-navy">
            Other Business Packages
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPackages.map((related) => (
              <PackageCard key={related.id} pkg={related} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
