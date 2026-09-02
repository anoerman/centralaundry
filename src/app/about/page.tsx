import { MapPin, Phone, Mail } from "lucide-react";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata = {
  title: "About — CentralLaundry",
};

const ADDRESS_LINE_1 = "Jl. Pekapuran No.99, RT.001/RW.002";
const ADDRESS_LINE_2 = "Sukatani, Tapos, Kota Depok, Jawa Barat";
const MAP_QUERY = encodeURIComponent(`${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`);

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold text-brand-navy">
          About CentralLaundry
        </h1>

        <div className="mt-6 space-y-4 text-gray-700">
          <p>
            CentralLaundry started in Depok as a small distributor of
            secondhand washing machines, serving a handful of neighborhood
            laundromats. As demand grew for reliable, higher-capacity
            equipment, we began importing commercial-grade machines directly
            from trusted manufacturers in the US, Europe, and Asia.
          </p>
          <p>
            Today, we supply commercial washers, dryers, and finishing
            equipment to laundromats, hotels, and industrial laundry
            operations across Indonesia — and we&apos;ve expanded beyond
            machines alone. Our turnkey business packages bundle equipment
            selection, installation, staff training, and ongoing maintenance
            support, so entrepreneurs can open a laundry business without
            navigating every step alone.
          </p>
          <p>
            We&apos;re still a team that answers the phone. Every customer
            gets a free consultation before buying, and our service team
            stays reachable long after the sale — that&apos;s what &ldquo;purna
            jual terbaik&rdquo; means to us.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-brand-navy">Visit Us</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                <span>
                  {ADDRESS_LINE_1}
                  <br />
                  {ADDRESS_LINE_2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-blue" />
                (021) xxx-xxxx
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-blue" />
                hello@centrallaundry.com
              </li>
            </ul>

            <div className="mt-6">
              <Button
                href={getWhatsAppLink(
                  "Hi CentralLaundry, I'd like to visit your showroom. Could you share directions?"
                )}
              >
                Get Directions on WhatsApp
              </Button>
            </div>
          </div>

          <iframe
            title="CentralLaundry location map"
            src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
            className="h-72 w-full rounded-lg border border-gray-200 lg:h-full"
            loading="lazy"
          />
        </div>
      </div>

      <CtaBand />
    </>
  );
}
