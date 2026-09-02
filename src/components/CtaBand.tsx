import Button from "@/components/Button";

export default function CtaBand() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Ready to Start Your Laundry Business?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-brand-yellow">
          Talk to our team for a free consultation, or browse our turnkey
          business packages to get started right away.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/contact">Contact Us</Button>
          <Button href="/packages" variant="outline">
            View Packages
          </Button>
        </div>
      </div>
    </section>
  );
}
