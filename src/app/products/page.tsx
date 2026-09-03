import ProductsFilter from "@/components/ProductsFilter";
import CtaBand from "@/components/CtaBand";
import { products } from "@/data/products";

export const metadata = {
  title: "Products — CentraLaundry",
};

export default function ProductsPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <ProductsFilter
          products={products}
          title="Products"
          subtitle="Commercial washers, dryers, and finishing equipment."
        />
      </div>

      <CtaBand />
    </>
  );
}
