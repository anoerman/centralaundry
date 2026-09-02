import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import PackageCard from "@/components/PackageCard";
import { products } from "@/data/products";
import { packages } from "@/data/packages";

export default function Home() {
  return (
    <>
      <section className="bg-brand-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Laundry Machines &amp; Business Packages
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-brand-yellow">
            Commercial washers, dryers, and turnkey laundry business setups.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/products">View Products</Button>
            <Button href="/packages" variant="outline">
              View Packages
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-brand-navy">Featured Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-brand-navy">Business Packages</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
