import { stats } from "@/data/stats";

export default function StatsStrip() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 text-center lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold text-brand-yellow sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-gray-200">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
