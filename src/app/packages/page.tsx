import CtaBand from "@/components/CtaBand";
import PackageCard from "@/components/PackageCard";
import { packages } from "@/data/packages";

export const metadata = {
  title: "Business Packages — CentralLaundry",
};

export default function PackagesPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-bold text-brand-navy">
          Business Packages
        </h1>
        <p className="mt-2 text-gray-600">
          Turnkey laundry business setups, from starter to franchise scale.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
      <CtaBand />
    </>
  );
}
