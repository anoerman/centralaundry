import { notFound } from "next/navigation";
import { CalendarDays, MapPin } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ProductGallery from "@/components/ProductGallery";
import EventCard from "@/components/EventCard";
import Button from "@/components/Button";
import { events } from "@/data/events";
import { formatEventDate } from "@/lib/date";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return events.map((event) => ({ id: event.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);
  return { title: event ? `${event.title} — CentralLaundry` : "Event Not Found" };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);

  if (!event) notFound();

  const relatedEvents = events
    .filter((e) => e.category === event.category && e.id !== event.id)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: event.title },
        ]}
      />

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <ProductGallery images={event.images} productName={event.title} />

        <div>
          <span className="rounded-full bg-brand-navy px-2.5 py-1 text-xs font-semibold text-white">
            {event.category}
          </span>

          <h1 className="mt-3 text-3xl font-bold text-brand-navy">
            {event.title}
          </h1>

          <div className="mt-3 space-y-1.5 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 shrink-0 text-brand-blue" />
              {formatEventDate(event.date)}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-brand-blue" />
              {event.location}
            </div>
          </div>

          <p className="mt-4 text-gray-700">{event.description}</p>

          <div className="mt-6">
            <Button
              href={getWhatsAppLink(
                `Hi CentralLaundry, I saw "${event.title}" and would like to know more.`
              )}
            >
              Ask About This Event
            </Button>
          </div>

          <div className="mt-6 border-t border-gray-100 pt-6">
            <h2 className="font-semibold text-brand-navy">Highlights</h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-700">
              {event.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {relatedEvents.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-brand-navy">
            More {event.category} Events
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedEvents.map((related) => (
              <EventCard key={related.id} event={related} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
