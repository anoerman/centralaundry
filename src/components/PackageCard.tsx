import Link from "next/link";
import type { BusinessPackage } from "@/types";

export default function PackageCard({ pkg }: { pkg: BusinessPackage }) {
  return (
    <Link
      href={`/packages/${pkg.id}`}
      className="block rounded-lg border border-gray-200 p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <h3 className="text-xl font-semibold text-brand-navy">{pkg.name}</h3>
      <p className="mt-2 font-bold text-brand-blue">
        Rp {pkg.price.toLocaleString("id-ID")}
      </p>
      <ul className="mt-4 space-y-1 text-sm text-gray-600">
        {pkg.includes.slice(0, 3).map((item) => (
          <li key={item}>&bull; {item}</li>
        ))}
        {pkg.includes.length > 3 && (
          <li className="text-brand-blue">+ {pkg.includes.length - 3} more</li>
        )}
      </ul>
    </Link>
  );
}
