"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold text-brand-navy">
          What Our Customers Say
        </h2>

        <Carousel className="mt-6" opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="lg:basis-1/2">
                <div className="h-full rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gray-100" />
                  <p className="text-gray-700">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="mt-4 font-semibold text-brand-navy">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-brand-blue">
                    {testimonial.location}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
