import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";

const reviews = [
  {
    name: "Alice Johnson",
    image: "/Seera/client1.avif",
    review:
      "Working with your team was a delight! The design quality and attention to detail exceeded my expectations. Highly recommended.",
  },
  {
    name: "Bob Smith",
    image: "/Seera/client2.avif",
    review:
      "The project was delivered on time and budget. Communication was clear throughout. I couldn’t be happier with the results.",
  },
  {
    name: "Charlie Lee",
    image: "/Seera/client3.avif",
    review:
      "You captured our vision beautifully. The UX improvements significantly boosted our user engagement and conversion rates.",
  },
  {
    name: "Diana Patel",
    image: "/Seera/client4.avif",
    review:
      "Absolutely professional from start to finish. The team is responsive, creative, and truly cares about client success.",
  },
  {
    name: "Ethan Martinez",
    image: "/Seera/client5.avif",
    review:
      "Their dedication and expertise helped us launch faster than anticipated. I appreciate the attention to user experience.",
  },
  {
    name: "Fiona Cheng",
    image: "/Seera/client6.avif",
    review:
      "Top-notch service and skillful execution. Our brand now feels more modern, accessible, and user-friendly.",
  },
];

function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section className="p-4">
      <h1 className="text-4xl text-center py-4 lg:text-[48px] xl:text-[58px] xl:text-start xl:leading-tight" data-aos="fade-down">
        What Clients Say About My <span className="text-[#8C49E9]">Work</span>
      </h1>

      <div className="embla overflow-hidden" data-aos="fade-down">
        {/* Buttons */}
        <div className="flex justify-end items-center gap-2 my-4">
          <button
            onClick={scrollPrev}
            className="flex items-center justify-center bg-[#9653EA] rounded-full p-1 w-[40px] h-[40px] text-2xl shadow"
            aria-label="Previous"
          >
           <HiArrowLongLeft />

          </button>
          <button
            onClick={scrollNext}
            className="flex items-center justify-center bg-[#9653EA] rounded-full p-1 w-[40px] h-[40px] text-2xl shadow"
            aria-label="Next"
          >
            <HiArrowLongRight />
          </button>
        </div>
        <div
          className="embla__viewport overflow-hidden bg-[#2D2E30] rounded-lg"
          ref={emblaRef}
        >
          <div className="embla__container flex">
            {reviews.map((t, idx) => (
              <div
                key={idx}
                className="embla__slide flex-none w-full min-w-0 p-4 lg:p-6 lg:px-10 xl:px-8"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <h3 className=" text-2xl">{t.name}</h3>
                </div>
                <p className="text-gray-300 font-semibold">{t.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
