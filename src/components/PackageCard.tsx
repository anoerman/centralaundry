import Link from "next/link";
import type { BusinessPackage } from "@/types";

export default function PackageCard({ pkg }: { pkg: BusinessPackage }) {
  return (
    <Link
      href={`/packages/${pkg.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-lg"
    >
      <div className="aspect-[4/3] bg-gray-100" />

      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 min-h-[2.75rem] font-semibold leading-snug text-brand-navy">
          {pkg.name}
        </h3>

        <div className="mt-1 flex-1" />

        <div>
          <p className="text-lg font-bold text-brand-navy">
            Rp {pkg.price.toLocaleString("id-ID")}
          </p>
        </div>

        <ul className="mt-3 space-y-1 text-sm text-gray-600">
          {pkg.includes.slice(0, 3).map((item) => (
            <li key={item}>&bull; {item}</li>
          ))}
          {pkg.includes.length > 3 && (
            <li className="text-brand-blue">
              + {pkg.includes.length - 3} more
            </li>
          )}
        </ul>

        <span className="mt-3 text-sm font-medium text-brand-blue opacity-0 transition-opacity group-hover:opacity-100">
          View details →
        </span>
      </div>
    </Link>
  );
}
