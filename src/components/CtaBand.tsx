import { Rocket } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import Button from "@/components/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function CtaBand() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
          <Rocket className="h-3.5 w-3.5" />
          Launch Your Business
        </span>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Ready to Start Your Laundry Business?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-gray-300">
          Chat with us on WhatsApp for a free consultation and get started right
          away.
        </p>

        <div className="mt-8 flex justify-center">
          <Button
            href={getWhatsAppLink(
              "Hi CentraLaundry, I'd like to ask about your laundry machines and business packages.",
            )}
          >
            <SiWhatsapp className="h-5 w-5" />
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
