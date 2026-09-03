import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-4 py-28 lg:py-20">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
            <Link
              href="/packages"
              className="rounded-lg mx-auto flex w-fit items-center gap-2 border p-1 pr-3 lg:ml-0"
            >
              <span className="bg-red-600 rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs text-white">
                New
              </span>
              <span className="text-sm">
                Turnkey business packages available
              </span>
              <span className="bg-(--color-border) block h-4 w-px"></span>

              <ArrowRight className="size-4" />
            </Link>

            <h1 className="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl">
              Pusat Mesin Laundry Terbesar di Indonesia
            </h1>
            <p className="mt-8">
              Menyediakan pelayanan bisnis usaha laundry terbaik dengan
              produk-produk yang berkualitas.
            </p>

            <div className="my-4">
              <ul className="list-inside list-disc space-y-2">
                <li>Distributor produk mesin US, Eropa & Asia</li>
                <li>Paket usaha lengkap dan berkualitas</li>
                <li>Dukungan servis tenaga profesional</li>
                <li>Layanan purna jual terbaik</li>
              </ul>
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-12 aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-gray-100 lg:mt-0 lg:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://picsum.photos/id/159/800/800"
              alt="Laundry business"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
