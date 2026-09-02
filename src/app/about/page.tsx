import { MapPin, Phone, Mail, Target, Eye, HeartHandshake } from "lucide-react";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import StatsStrip from "@/components/StatsStrip";
import TeamCard from "@/components/TeamCard";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { team } from "@/data/team";

export const metadata = {
  title: "About — CentralLaundry",
};

const ADDRESS_LINE_1 = "Jl. Pekapuran No.99, RT.001/RW.002";
const ADDRESS_LINE_2 = "Sukatani, Tapos, Kota Depok, Jawa Barat";
const MAP_QUERY = encodeURIComponent(`${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`);

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Give every laundry entrepreneur in Indonesia access to reliable commercial equipment and the support to run it well.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "Become the laundry industry's most trusted partner, from first machine to full-scale franchise.",
  },
  {
    icon: HeartHandshake,
    title: "Our Promise",
    description:
      "Free consultation before you buy, and a service team that stays reachable long after the sale.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-navy text-white">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Built by people who answer the phone.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-brand-yellow">
            CentralLaundry has spent over a decade helping laundry
            entrepreneurs across Indonesia buy the right machines, set up
            their shop, and keep it running.
          </p>
        </div>
      </section>

      <StatsStrip />

      <div className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-2xl font-bold text-brand-navy">Our Story</h2>
        <div className="mt-4 space-y-4 text-gray-700">
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

      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-brand-navy">
            What Drives Us
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-lg border border-gray-200 bg-white p-6"
              >
                <Icon className="h-8 w-8 text-brand-blue" />
                <h3 className="mt-4 font-semibold text-brand-navy">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-brand-navy">Meet the Team</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16">
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
