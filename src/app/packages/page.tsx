import CtaBand from "@/components/CtaBand";
import PackagesList from "@/components/PackagesList";
import { packages } from "@/data/packages";

export const metadata = {
  title: "Business Packages — CentraLaundry",
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
        <PackagesList packages={packages} />
      </div>
      <CtaBand />
    </>
  );
}
