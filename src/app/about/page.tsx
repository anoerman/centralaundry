import { MapPin, Phone, Mail, Target, Eye, HeartHandshake } from "lucide-react";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import StatsStrip from "@/components/StatsStrip";
import TeamCard from "@/components/TeamCard";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { team } from "@/data/team";

export const metadata = {
  title: "About CentraLaundry",
};

const ADDRESS_LINE_1 = "Jakarta";
const ADDRESS_LINE_2 = "Indonesia";
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
            CentraLaundry has spent over a decade helping laundry entrepreneurs
            across Indonesia buy the right machines, set up their shop, and keep
            it running.
          </p>
        </div>
      </section>

      <StatsStrip />

      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-brand-navy">Our Story</h2>
        <div className="mt-4 space-y-4 text-gray-700">
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="bg-gray-100 rounded-3xl"></div>
            {/* <div className="relative z-10 mx-auto mt-12 aspect-square w-full max-w-md rounded-3xl bg-gray-100 lg:mt-0 lg:w-1/2" /> */}

            <div className="col-span-2">
              <p>
                CentraLaundry started in Your City as a small distributor of
                secondhand washing machines, serving a handful of neighborhood
                laundromats. As demand grew for reliable, higher-capacity
                equipment, we began importing commercial-grade machines directly
                from trusted manufacturers in the US, Europe, and Asia.
              </p>
              <p>
                Today, we supply commercial washers, dryers, and finishing
                equipment to laundromats, hotels, and industrial laundry
                operations across Indonesia and we&apos;ve expanded beyond
                machines alone. Our turnkey business packages bundle equipment
                selection, installation, staff training, and ongoing maintenance
                support, so entrepreneurs can open a laundry business without
                navigating every step alone.
              </p>
              <p>
                We&apos;re still a team that answers the phone. Every customer
                gets a free consultation before buying, and our service team
                stays reachable long after the sales.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-brand-navy">What Drives Us</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-lg border border-gray-200 bg-white p-6"
              >
                <Icon className="h-8 w-8 text-brand-blue" />
                <h3 className="mt-4 font-semibold text-brand-navy">{title}</h3>
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
        <div className="mt-6">
          <iframe
            title="CentraLaundry location map"
            src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
            className="h-96 w-full rounded-lg border border-gray-200"
            loading="lazy"
          />
        </div>
      </div>

      <CtaBand />
    </>
  );
}
