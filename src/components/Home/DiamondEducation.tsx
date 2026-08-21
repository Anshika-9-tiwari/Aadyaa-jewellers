import { Gem, Sparkles, Layers, Ruler } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";

// ✅ Remote background — jeweller at work, hotlinked from Unsplash CDN
const BG_IMAGE =
  "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=1920&q=80";

const fourCs = [
  {
    icon: Gem,
    title: "Carat",
    desc: "The weight of the diamond. Larger carats are rarer and more valuable. Our stones range from 0.50ct to 10ct+.",
    color: "text-gold-600 bg-gold-50",
  },
  {
    icon: Sparkles,
    title: "Color",
    desc: "Graded D (colorless) to Z (light yellow). We specialize in D–F grade stones for maximum brilliance.",
    color: "text-rose-600 bg-rose-50",
  },
  {
    icon: Layers,
    title: "Clarity",
    desc: "From FL (flawless) to I3. Our certified diamonds are VS1 and above, ensuring eye-clean beauty.",
    color: "text-navy-600 bg-navy-50",
  },
  {
    icon: Ruler,
    title: "Cut",
    desc: "The most important 4C. A superior cut maximizes light return and fire. We carry Excellent and Very Good cuts only.",
    color: "text-emerald-600 bg-emerald-50",
  },
];

export default function DiamondEducation() {
  return (
    <section className="relative py-16 md:py-24 text-white overflow-hidden">
      {/* Background image (navy base = graceful fallback if the URL 404s) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-navy-900"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
        aria-hidden="true"
      />

      {/* Dark overlay for text + card legibility (tune /85 to taste) */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/80 to-navy-900/90"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-[0.15em] mb-3">
            Knowledge Is Brilliance
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold">
            Understanding the 4Cs
          </h2>
          <p className="text-slate-200 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Every diamond is unique. Learn what makes each stone special and
            how to choose the perfect one for your moment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {fourCs.map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-6 hover:bg-white/10 hover:border-gold-400/40 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-slate-200 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/learn/4cs"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-gold-500/20 transition-all hover:-translate-y-0.5"
          >
            Learn More About Diamonds
          </Link>
        </div>
      </div>
    </section>
  );
}