import { notFound } from "next/navigation";
import Button from "@/components/Button";
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

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-navy">{pkg.name}</h1>
      <p className="mt-2 text-2xl font-bold text-brand-blue">
        Rp {pkg.price.toLocaleString("id-ID")}
      </p>
      <p className="mt-4 text-gray-700">{pkg.description}</p>

      <h2 className="mt-8 font-semibold text-brand-navy">Package Includes</h2>
      <ul className="mt-2 list-inside list-disc text-gray-700">
        {pkg.includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="mt-8">
        <Button href="/contact">Inquire About This Package</Button>
      </div>
    </div>
  );
}
