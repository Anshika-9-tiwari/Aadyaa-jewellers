"use client";

import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { Star, Heart, Plus, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

// ✅ REQUIRED — without these, .slick-list isn't clipped and all slides overflow on mobile
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    name: "Solitaire Promise Ring",
    price: "$4,850",
    oldPrice: "$5,200",
    image: "/images/ring.webp",
    rating: 5,
    reviews: 128,
    badge: "Bestseller",
    link: "/product/solitaire-promise-ring",
  },
  {
    id: 2,
    name: "Halo Diamond Pendants",
    price: "$8,200",
    oldPrice: null,
    image: "/images/pendants.webp",
    rating: 5,
    reviews: 86,
    badge: "New",
    link: "/product/halo-diamond-necklace",
  },
  {
    id: 3,
    name: "Bangles",
    price: "$12,400",
    oldPrice: "$13,800",
    image: "/images/bangles.webp",
    rating: 4,
    reviews: 214,
    badge: "Sale",
    link: "/product/trinity-eternity-band",
  },
  {
    id: 4,
    name: "Pearl Drop Earrings",
    price: "$2,950",
    oldPrice: null,
    image: "/images/earrings.webp",
    rating: 5,
    reviews: 67,
    badge: null,
    link: "/product/pearl-drop-earrings",
  },
  {
    id: 5,
    name: "Cathedral Setting Mangalsutra",
    price: "$15,600",
    oldPrice: null,
    image: "/images/mangalsutra.webp",
    rating: 5,
    reviews: 93,
    badge: "Premium",
    link: "/product/cathedral-setting-ring",
  },
  {
    id: 6,
    name: "Tennis Diamond Bracelet",
    price: "$9,800",
    oldPrice: "$11,000",
    image: "/images/bracelets.jpg",
    rating: 4,
    reviews: 156,
    badge: "Sale",
    link: "/product/tennis-diamond-bracelet",
  },
];

const badgeColors: Record<string, string> = {
  Bestseller: "bg-gold-500 text-white",
  New: "bg-emerald-500 text-white",
  Sale: "bg-rose-500 text-white",
  Premium: "bg-navy-900 text-gold-300",
};

export default function BestSellers() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 3, // desktop default
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    // ✅ ordered largest → smallest (correct for react-slick)
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640,  settings: { slidesToShow: 1 } }, // phones
    ],
  };

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          subtitle="Handpicked For You"
          title="Best Sellers This Season"
          description="Our most-loved pieces, chosen by thousands of happy clients"
        />

        <div className="mt-12 md:mt-16">
          <Slider {...settings} className="!mb-0">
            {products.map((p) => (
              <div key={p.id} className="px-2 md:px-3">
                <Link
                  href={p.link}
                  className="group block bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-lift"
                >
                  {/* Image */}
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {p.badge && (
                      <span
                        className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold ${badgeColors[p.badge] || "bg-slate-800 text-white"}`}
                      >
                        {p.badge}
                      </span>
                    )}
                    <button
                      className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
                      aria-label="Add to wishlist"
                    >
                      <Heart className="w-4 h-4 text-slate-600 hover:text-rose-500" />
                    </button>
                    <button
                      className="absolute bottom-3 right-3 w-9 h-9 bg-navy-900/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
                      aria-label="Quick add to cart"
                    >
                      <Plus className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="p-4 md:p-5">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < p.rating
                              ? "fill-gold-400 text-gold-400"
                              : "text-slate-200"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-slate-400 ml-1">
                        ({p.reviews})
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm md:text-base text-navy-900 group-hover:text-gold-700 transition-colors line-clamp-1">
                      {p.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-bold text-navy-900">
                        {p.price}
                      </span>
                      {p.oldPrice && (
                        <span className="text-sm text-slate-400 line-through">
                          {p.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-700 transition"
          >
            Shop All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}