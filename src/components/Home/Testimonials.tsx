"use client";

import Slider from "react-slick";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael",
    location: "New York, NY",
    rating: 5,
    text: "The engagement ring exceeded all our expectations. The craftsmanship is impeccable, and the diamond sparkles beyond belief. Aadyaa made our special moment truly unforgettable.",
    image: "/images/diamond.webp",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    text: "I worked with their custom design team to create my dream necklace. Every detail was perfect, and the team guided me through the entire process with patience and expertise.",
    image: "/images/diamond.webp",
  },
  {
    id: 3,
    name: "James Richardson",
    location: "London, UK",
    rating: 5,
    text: "Purchased a certified diamond for investment. The GIA certification, transparent pricing, and professional service made this a seamless experience. Highly recommend!",
    image: "/images/diamond.webp",
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gold-50 to-rose-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold-600 text-sm font-semibold uppercase tracking-[0.15em] mb-3">
            Client Stories
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-900">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((t) => (
              <div key={t.id} className="px-2">
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
                  <Quote className="w-10 h-10 text-gold-300 mb-5" />
                  <div className="flex gap-1 mb-5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-gold-400 text-gold-400"
                      />
                    ))}
                  </div>
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6 italic">
                    &quot;{t.text}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 text-sm">
                        {t.name}
                      </h4>
                      <p className="text-xs text-slate-500">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}