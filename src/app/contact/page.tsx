import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { Phone, Mail, MapPin } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata = {
  title: "Contact — CentralLaundry",
};

const ADDRESS_LINE_1 = "Jl. Pekapuran No.99, RT.001/RW.002";
const ADDRESS_LINE_2 = "Sukatani, Tapos, Kota Depok, Jawa Barat";
const MAP_QUERY = encodeURIComponent(`${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`);

const quickContacts = [
  {
    icon: SiWhatsapp,
    label: "WhatsApp",
    value: "Fastest way to reach us",
    href: getWhatsAppLink(
      "Hi CentralLaundry, I'd like to ask about your laundry machines and business packages."
    ),
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(021) xxx-xxxx",
    href: "tel:+62213456789",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@centrallaundry.com",
    href: "mailto:hello@centrallaundry.com",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-navy">Contact Us</h1>
      <p className="mt-2 max-w-xl text-gray-600">
        Questions about our machines, business packages, or an existing
        order? Reach us directly, or send a message below.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {quickContacts.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition-colors hover:border-brand-blue/40"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10">
              <Icon className="h-5 w-5 text-brand-blue" />
            </span>
            <span>
              <span className="block font-semibold text-brand-navy">
                {label}
              </span>
              <span className="block text-sm text-gray-600">{value}</span>
            </span>
          </a>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="font-semibold text-brand-navy">Send a Message</h2>
          <p className="mt-1 text-sm text-gray-600">
            We usually reply within one business day.
          </p>

          {/* Static form for now — no submission handler yet, wired up once backend/DB is added. */}
          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  className="block text-sm font-medium text-brand-navy"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-brand-blue focus:outline-none"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-brand-navy"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-brand-blue focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-brand-navy"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-brand-blue focus:outline-none"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-brand-navy"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-brand-blue focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-brand-yellow px-6 py-3 font-semibold text-brand-navy transition-colors hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="lg:col-span-2">
          <h2 className="font-semibold text-brand-navy">Our Location</h2>
          <ul className="mt-3 space-y-3 text-gray-700">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
              <span>
                {ADDRESS_LINE_1}
                <br />
                {ADDRESS_LINE_2}
              </span>
            </li>
          </ul>

          <iframe
            title="CentralLaundry location map"
            src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
            className="mt-4 h-64 w-full rounded-lg border border-gray-200"
            loading="lazy"
          />

          <div className="mt-6 rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-brand-navy">Business Hours</h3>
            <dl className="mt-2 space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <dt>Monday – Friday</dt>
                <dd>08:00 – 17:00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Saturday</dt>
                <dd>08:00 – 14:00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Sunday</dt>
                <dd>Closed</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
