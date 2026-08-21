import {
  ShieldCheck,
  Truck,
  Award,
  RefreshCcw,
  Heart,
  CreditCard,
} from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "GIA / IGI Certified", desc: "Every diamond verified" },
  { icon: Truck, label: "Free Insured Shipping", desc: "On orders over $5,000" },
  { icon: Award, label: "Lifetime Warranty", desc: "Craftsmanship guarantee" },
  { icon: RefreshCcw, label: "30-Day Returns", desc: "Hassle-free policy" },
  { icon: Heart, label: "Ethically Sourced", desc: "Conflict-free diamonds" },
  { icon: CreditCard, label: "Secure Payment", desc: "256-bit encrypted" },
];

export default function TrustBadges() {
  return (
    <section className="bg-white py-10 md:py-14 border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-8">
          {badges.map(({ icon: Icon, label, desc }, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gold-50 group-hover:bg-gold-100 rounded-2xl flex items-center justify-center mb-3 transition-colors">
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-gold-600" />
              </div>
              <h3 className="text-xs md:text-sm font-semibold text-navy-900 mb-0.5">
                {label}
              </h3>
              <p className="text-[11px] md:text-xs text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}