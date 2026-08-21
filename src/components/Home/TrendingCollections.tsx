"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Curated high-fidelity placeholder assets matching the exact editorial style of Aadyaa Jewellers
const TRENDING_DATA = [
  {
    id: "trend-1",
    title: "Designer",
    href: "/collections/designer",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    desc: "Bespoke Intricate Ornaments",
  },
  {
    id: "trend-2",
    title: "Gemstone",
    href: "/collections/gemstone",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    desc: "Vibrant Color Interplays",
  },
  {
    id: "trend-3",
    title: "Daily Wear",
    href: "/collections/daily-wear",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
    desc: "Understated Subtle Luxury",
  },
  {
    id: "trend-4",
    title: "Solitaire",
    href: "/collections/solitaire",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    desc: "Unmatched Pure Brilliance",
  },
  {
    id: "trend-5",
    title: "Bridal Sets",
    href: "/collections/bridal",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    desc: "Crafted For Eternal Vows",
  },
];

export default function TrendingCollections() {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280, // Lg Tablets & Desktop
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Portrait Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Mobile Viewports
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-cream py-20 lg:py-22 overflow-hidden border-b border-stone-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
           {/* Editorial Section Header */}
           <div className="relative flex items-center justify-between mb-8">
                {/* Decorative left offset spacing element for symmetry */}
              <div className="hidden md:block w-24 h-px bg-stone-300" />
                
              <div className="text-center mb-8 md:mb-10">
                <p className="text-gold-600 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] mb-3">
                    Curated For You
                </p>
                <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-[0.12em] text-navy-900">
                    Trending Collections
                </h2>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-5" />
              </div>

          {/* Minimalist Custom Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-10 h-10 rounded-full border border-stone-200 bg-white hover:border-gold-500 hover:text-gold-500 flex items-center justify-center text-charcoal transition-all duration-300 shadow-xs"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-10 h-10 rounded-full border border-stone-200 bg-white hover:border-gold-500 hover:text-gold-500 flex items-center justify-center text-charcoal transition-all duration-300 shadow-xs"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative -mx-3">
          <Slider ref={sliderRef} {...settings}>
            {TRENDING_DATA.map((item) => (
              <div key={item.id} className="px-3 focus:outline-none">
                <Link href={item.href} className="group block focus:outline-none">
                  
                  {/* Portrait aspect ratio image wrapper */}
                  <div className="relative overflow-hidden aspect-[4/5] bg-stone-100 shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Rich gradient overlay with clean action button fading in on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <p className="text-gold-500 text-[10px] tracking-[0.2em] uppercase font-bold mb-1 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                        {item.desc}
                      </p>
                      <span className="text-white text-xs font-semibold tracking-widest uppercase border-b border-white/30 pb-1 w-fit translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-75 hover:border-gold-500 hover:text-gold-500">
                        Shop Collection
                      </span>
                    </div>
                  </div>

                  {/* Clean serif link title below card matching reference exactly */}
                  <div className="mt-5 text-center">
                    <span className="inline-flex items-center gap-1.5 font-serif text-lg sm:text-xl text-charcoal/90 transition-colors duration-300 group-hover:text-gold-500 tracking-wide">
                      {item.title} <span className="font-sans text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </div>

                </Link>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
}