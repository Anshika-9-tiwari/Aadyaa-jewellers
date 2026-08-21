"use client";

import { Cpu, Heart, Leaf, MapPin, Sparkles } from "lucide-react";
import { GiDiamonds} from "react-icons/gi";

export default function AboutStory() {
  return (
    <section className="bg-white py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
        
        {/* PART 1: The Legacy & Origin */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Editorial Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-gold-500" />
              <span className="text-gold-600 text-xs sm:text-sm font-bold uppercase tracking-[0.25em]">
                Our Story
              </span>
            </div>
            
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-charcoal leading-[1.15]">
              Delhi NCR’s Oldest Exclusive <br />
              <span className="font-bold text-gold-500 italic">Lab-Grown Atelier</span>
            </h2>
            
            <p className="text-slate-700 font-light leading-relaxed text-sm sm:text-base">
              Welcome to Aadyaa Jewels, where luxury meets conscious progression. As Delhi NCR’s pioneer manufacturer, designer, and retailer of exclusive lab-grown diamonds, we are rewriting the luxury paradigm from our flagship showroom located in the heart of **Ashram, New Delhi**.
            </p>
            
            <p className="text-slate-600 font-light leading-relaxed text-sm">
              At Aadyaa Jewels, we combine cutting-edge science with legacy master craftsmanship to create exquisite diamond jewelry that is physically, chemically, and optically identical to mined diamonds. We deliver the absolute brilliance of natural diamonds, with none of the ethical or environmental compromises.
            </p>

            <div className="flex items-center gap-2.5 text-stone-500 text-xs pt-2">
              <MapPin className="w-4.5 h-4.5 text-gold-500 shrink-0" />
              <span className="font-medium tracking-wide">Ashram Showroom, New Delhi, India</span>
            </div>
          </div>

          {/* Visual Showcase Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-square overflow-hidden rounded-3xl shadow-xl shadow-stone-200/50">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
                alt="Aadyaa master craftsman polishing a solitaire"
                className="w-full h-full object-cover transition-transform duration-10000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </div>
            
            {/* Float badge */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white border border-gold-500/20 rounded-2xl p-5 shadow-xl max-w-[200px] hidden sm:block">
              <p className="font-serif text-3xl font-bold text-navy-900 leading-none">100%</p>
              <p className="text-[10px] tracking-wider uppercase text-gold-600 font-bold mt-2">Conflict-Free & Certified</p>
            </div>
          </div>

        </div>

        {/* PART 2: Philosophy Breakout Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-navy-900 text-white shadow-2xl py-16 px-6 sm:px-12 lg:px-20 border border-gold-500/10">
          {/* Subtle cosmic background vector */}
          <div className="absolute -right-16 -bottom-16 text-white/10 pointer-events-none">
            <GiDiamonds className="w-96 h-96" />
          </div>
          <div className="absolute -left-16 -bottom-16 text-white/10 pointer-events-none">
            <GiDiamonds className="w-96 h-96" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold block">
              The Cosmic Symphony
            </span>
            
            <div className="grid sm:grid-cols-2 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10 pt-4">
              <div className="space-y-3 pb-6 sm:pb-0 sm:pr-8">
                <p className="font-serif text-3xl sm:text-4xl font-light text-rose-100 italic">
                  #lovefromuniverse
                </p>
                <p className="text-xs tracking-widest uppercase text-stone-400 font-semibold">
                  Mined Diamonds
                </p>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  The legacy of centuries past, formed deep beneath the earth&apos;s mantle—a rare testament to cosmic time.
                </p>
              </div>

              <div className="space-y-3 pt-6 sm:pt-0 sm:pl-8">
                <p className="font-serif text-3xl sm:text-4xl font-light text-gold-100 italic">
                  #energyfromexistence
                </p>
                <p className="text-xs tracking-widest uppercase text-gold-500 font-bold">
                  Aadyaa Green Diamonds
                </p>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  Pure solar energy harnessed on Earth, growing structurally flawless Type IIa diamonds without planetary footprint.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}