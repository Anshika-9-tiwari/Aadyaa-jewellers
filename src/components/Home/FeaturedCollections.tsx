import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const collections = [
  {
    id: 1,
    title: "Engagement Rings",
    desc: "Find your perfect proposal piece",
    image: "/images/ring.webp",
    link: "/collections/rings",
  },
  {
    id: 2,
    title: "Diamond Necklaces",
    desc: "Elegance for every occasion",
    image: "/images/polki.webp",
    link: "/collections/necklaces",
  }, 
  {
    id: 3,
    title: "Loose Diamonds",
    desc: "Investment-grade certified stones",
    image: "/images/diamond.webp",
    link: "/loose-diamonds",
  },
  {
    id: 4,
    title: "Custom Design",
    desc: "Crafted just for you",
    image: "/images/earrings.webp",
    link: "/custom-design",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          subtitle="Curated Excellence"
          title="Explore Our Collections"
          description="Each piece is crafted with precision, passion, and an unwavering commitment to quality"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-12 md:mt-16">
          {collections.map((col, i) => (
            <Link
              key={col.id}
              href={col.link}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 card-lift"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-[320px] md:h-[420px]">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={i < 2}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-1">
                  {col.title}
                </h3>
                <p className="text-slate-300 text-sm mb-3">{col.desc}</p>
                <div className="flex items-center gap-2 text-gold-300 font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>View Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-14">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-semibold px-10 py-3.5 rounded-full shadow-lg shadow-navy-900/20 transition-all hover:-translate-y-0.5"
          >
            View All Collections
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}