import ProductsFilter from "@/components/ProductsFilter";
import { products } from "@/data/products";

export const metadata = {
  title: "Products — CentralLaundry",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-navy">Products</h1>
      <p className="mt-2 text-gray-600">
        Commercial washers, dryers, and finishing equipment.
      </p>
      <ProductsFilter products={products} />
    </div>
  );
}
