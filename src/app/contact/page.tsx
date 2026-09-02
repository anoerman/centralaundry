export const metadata = {
  title: "Contact — CentralLaundry",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-navy">Contact Us</h1>
      <p className="mt-2 text-gray-600">
        Have a question about our products or packages? Send us a message.
      </p>

      {/* Static form for now — no submission handler yet, wired up once backend/DB is added. */}
      <form className="mt-8 space-y-4">
        <div>
          <label className="block text-sm font-medium text-brand-navy" htmlFor="name">
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
          <label className="block text-sm font-medium text-brand-navy" htmlFor="email">
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
          <label className="block text-sm font-medium text-brand-navy" htmlFor="message">
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
          className="rounded-md bg-brand-yellow px-6 py-3 font-semibold text-brand-navy hover:opacity-90"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
