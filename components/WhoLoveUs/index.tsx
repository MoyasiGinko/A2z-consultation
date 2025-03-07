"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Keyboard, Mousewheel } from "swiper";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO",
    location: "London, UK",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque id pariatur fuga sint voluptatibus, officia omnis vero impedit.",
  },
  {
    name: "Jane Smith",
    role: "Marketing Director",
    location: "New York, USA",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque id pariatur fuga sint voluptatibus, officia omnis vero impedit.",
  },
  {
    name: "Robert Brown",
    role: "CTO",
    location: "Berlin, Germany",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque id pariatur fuga sint voluptatibus, officia omnis vero impedit.",
  },
];

export default function WhoLovesUs() {
  return (
    <section className="overflow-hidden bg-primary bg-[url(/images/who_loves_us.png)] bg-cover bg-bottom py-10 text-white lg:py-24">
      <div className="container">
        <h2 className="section-title relative mb-10 lg:mb-16">
          Who Loves Us
          <span className="indicator"></span>
        </h2>
      </div>
      <Swiper
        modules={[FreeMode, Keyboard, Mousewheel]}
        spaceBetween={20}
        slidesPerView="auto"
        freeMode={true}
        keyboard={{ enabled: true }}
        mousewheel={{ forceToAxis: true }}
        className="px-4"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="bg-background text-foreground min-w-[320px] shrink-0 rounded-xl p-4 md:min-w-[400px] lg:min-w-[480px] lg:p-6"
          >
            <p>{testimonial.feedback}</p>
            <div className="mt-6 flex items-center gap-4 lg:gap-6">
              <div className="bg-muted size-16 rounded-full lg:size-20"></div>
              <div>
                <h3 className="mb-1 text-lg font-bold">{testimonial.name}</h3>
                <p className="text-muted-foreground text-sm font-medium leading-none">
                  {testimonial.role}
                </p>
                <p className="text-muted-foreground text-sm font-medium">
                  {testimonial.location}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
