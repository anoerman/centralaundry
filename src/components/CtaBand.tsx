import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import Button from "@/components/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function CtaBand() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Ready to Start Your Laundry Business?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-brand-yellow">
          Chat with us on WhatsApp for a free consultation, or browse our
          turnkey business packages to get started right away.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
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
    </section>
  );
}
