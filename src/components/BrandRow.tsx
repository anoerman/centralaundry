import { brands } from "@/data/brands";

export default function BrandRow() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-xs font-medium uppercase tracking-wide text-gray-500">
          Distributor of Trusted Global Brands
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-8 lg:gap-12">
          {brands.map((brand) => (
            <span
              key={brand.name}
              className="text-lg font-semibold text-gray-400"
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
