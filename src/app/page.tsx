import ProductCard from "@/components/ProductCard";
import PackageCard from "@/components/PackageCard";
import TeamCard from "@/components/TeamCard";
import TestimonialSection from "@/components/TestimonialSection";
import { HeroSection } from "@/components/blocks/hero-section";
import { products } from "@/data/products";
import { packages } from "@/data/packages";
import { team } from "@/data/team";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-brand-navy">
          Featured Products
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-brand-navy">
            Business Packages
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-brand-navy">Our Team</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      <TestimonialSection />
    </>
  );
}
