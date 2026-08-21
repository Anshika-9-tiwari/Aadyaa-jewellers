const stats = [
  { value: "10+", label: "Years of Craftsmanship" },
  { value: "50K+", label: "Happy Clients" },
  { value: "12K+", label: "Diamonds Certified" },
  { value: "4.9", label: "Average Rating" },
];

export default function StatsBar() {
  return (
    <section className="bg-white py-12 md:py-16 border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-3xl md:text-5xl font-bold text-gradient-gold mb-2">
                {s.value}
              </div>
              <p className="text-xs md:text-sm text-slate-500 font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}