"use client";

import { useMemo, useState } from "react";
import EventCard from "@/components/EventCard";
import type { CompanyEvent } from "@/types";

export default function EventsList({ events }: { events: CompanyEvent[] }) {
  const [category, setCategory] = useState<"all" | string>("all");

  const categories = useMemo(
    () => Array.from(new Set(events.map((e) => e.category))),
    [events]
  );

  const visibleEvents = useMemo(() => {
    if (category === "all") return events;
    return events.filter((e) => e.category === category);
  }, [events, category]);

  return (
    <div>
      <div className="mt-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory("all")}
          className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
            category === "all"
              ? "border-brand-blue bg-brand-blue text-white"
              : "border-gray-200 text-gray-600 hover:border-brand-blue/40"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(category === c ? "all" : c)}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
              category === c
                ? "border-brand-blue bg-brand-blue text-white"
                : "border-gray-200 text-gray-600 hover:border-brand-blue/40"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {visibleEvents.length === 0 ? (
        <p className="mt-12 text-center text-gray-500">
          No events in this category yet.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
