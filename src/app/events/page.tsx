import EventsList from "@/components/EventsList";
import CtaBand from "@/components/CtaBand";
import { events } from "@/data/events";

export const metadata = {
  title: "Events — CentralLaundry",
};

export default function EventsPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-bold text-brand-navy">Events</h1>
        <p className="mt-2 text-gray-600">
          A look at exhibitions, training, installations, and community
          activities from CentralLaundry.
        </p>
        <EventsList events={events} />
      </div>

      <CtaBand />
    </>
  );
}
