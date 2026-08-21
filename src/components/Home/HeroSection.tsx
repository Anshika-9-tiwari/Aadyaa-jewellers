/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Gem } from "lucide-react";
import Link from "next/link";

// ✅ Remote images — hotlinked from Unsplash CDN (no local files required)
const slides = [
  {
    id: 1,
    eyebrow: "Bridal Collection 2026",
    title: "Eternal Brilliance, Timeless Design",
    desc: "Discover engagement rings and wedding bands crafted with masterful precision and GIA-certified diamonds.",
    cta: "Shop Bridal",
    link: "/collections/bridal",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    eyebrow: "Certified Loose Diamonds",
    title: "Invest in Perfection",
    desc: "Ethically sourced, GIA & IGI certified diamonds. Transparent pricing, lifetime guarantee.",
    cta: "View Diamonds",
    link: "/loose-diamonds",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 3,
    eyebrow: "Custom Design Studio",
    title: "Your Vision, Our Craft",
    desc: "Work one-on-one with our master jewellers to create a piece that tells your story.",
    cta: "Start Designing",
    link: "/custom-design",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1920&q=80",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    cssEase: "ease-in-out",
    beforeChange: (_: number, next: number) => setActive(next),
  };

  const goTo = (i: number) => {
    const el = document.querySelector(".hero-slider") as any;
    el?.slick?.slickGoTo(i);
  };

  return (
    <section className="relative h-[85vh] md:h-[92vh] overflow-hidden">
      <Slider {...settings} className="hero-slider h-full">
        {slides.map((s) => (
          <div key={s.id} className="relative h-[85vh] md:h-[92vh]">
            {/* BG — remote image. Navy base color = graceful fallback if a URL ever 404s */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-navy-900"
              style={{ backgroundImage: `url(${s.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/50 to-navy-900/20" />
            </div>

            {/* Content */}
            <div className="relative h-full container mx-auto px-4 sm:px-6 flex items-center">
              <div className="max-w-2xl text-white">
                <div className="flex items-center gap-2 mb-5">
                  <Gem className="w-5 h-5 text-gold-400" />
                  <span className="text-gold-300 text-sm font-semibold uppercase tracking-[0.15em]">
                    {s.eyebrow}
                  </span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
                  {s.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 max-w-lg leading-relaxed">
                  {s.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    href={s.link}
                    className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-gold-500/30 transition-all hover:shadow-xl hover:shadow-gold-500/40 hover:-translate-y-0.5"
                  >
                    {s.cta}
                  </Link>
                  <Link
                    href="/collections"
                    className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full border border-white/30 backdrop-blur-sm transition-all hover:-translate-y-0.5"
                  >
                    Explore All
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Arrows */}
      <button
        onClick={() => goTo((active - 1 + slides.length) % slides.length)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full text-white transition hidden md:block"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => goTo((active + 1) % slides.length)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full text-white transition hidden md:block"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              active === i ? "w-12 bg-gold-500" : "w-6 bg-white/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}