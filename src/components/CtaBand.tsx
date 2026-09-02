import Link from "next/link";
import { Rocket, Package, WashingMachine, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import Button from "@/components/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";

const links = [
  {
    icon: WashingMachine,
    title: "Browse Machines",
    description:
      "Commercial washers, dryers, and finishing equipment for every scale.",
    href: "/products",
  },
  {
    icon: Package,
    title: "Business Packages",
    description: "Turnkey setups, from starter shop to full franchise.",
    href: "/packages",
  },
];

export default function CtaBand() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
            <Rocket className="h-3.5 w-3.5" />
            Launch Your Business
          </span>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Ready to Start Your Laundry Business?
          </h2>
          <p className="mt-4 max-w-md text-gray-300">
            Chat with us on WhatsApp for a free consultation, or browse our
            turnkey business packages to get started right away.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              href={getWhatsAppLink(
                "Hi CentralLaundry, I'd like to ask about your laundry machines and business packages."
              )}
            >
              <SiWhatsapp className="h-5 w-5" />
              Chat on WhatsApp
            </Button>
            <Button href="/packages" variant="outline">
              View Packages
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {links.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/25 hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-semibold">{title}</span>
                </span>
                <ArrowRight className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-1" />
              </div>
              <p className="mt-3 text-sm text-gray-400">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
