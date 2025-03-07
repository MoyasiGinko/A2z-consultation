"use client";

import Image from "next/image";

const StartYourJourney = () => {
  return (
    <section
      className="mt-10 bg-primary bg-cover bg-center py-10 text-white lg:mt-40 lg:py-20"
      style={{ backgroundImage: "url(/images/hero/bg-section.png)" }}
    >
      <div className="container grid gap-12 lg:grid-cols-12 lg:gap-20">
        {/* Image Section */}
        <figure className="relative flex h-[220px] items-center justify-center overflow-hidden md:h-[250px] lg:order-1 lg:col-span-7 lg:h-[360px] lg:justify-end">
          <Image
            src="/images/hero/uk-passport.png"
            alt="UK Passport"
            layout="intrinsic"
            width={600}
            height={360}
            className="flex h-full w-full max-w-2xl items-center justify-center rounded-2xl bg-white/10 object-cover"
          />
        </figure>

        {/* Text Section */}
        <div className="lg:col-span-5 lg:grid lg:place-items-center">
          <div>
            <h2 className="mb-1 text-2xl font-black md:mb-2 md:text-3xl lg:mb-4 lg:text-4xl xl:mb-6 xl:text-5xl">
              Start your journey with us
            </h2>
            <p className="mb-6 text-sm font-medium md:text-base lg:mb-10 xl:mb-16 xl:text-lg">
              Expand your team with international talent <br /> — worry-free
            </p>
            <button className="btn btn-on-primary mt-auto max-w-max px-8">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartYourJourney;
