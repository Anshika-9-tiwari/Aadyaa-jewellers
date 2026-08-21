"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call /api/newsletter
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-16 md:py-24 bg-navy-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-10 h-10 text-gold-400 mx-auto mb-5" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
            Join the Aadyaa Family
          </h2>
          <p className="text-slate-300 text-base md:text-lg mb-8">
            Subscribe for exclusive offers, new collection launches, and
            jewellery care tips.
          </p>

          {submitted ? (
            <div className="bg-gold-500/20 border border-gold-500/30 rounded-2xl p-5 flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-gold-400" />
              <p className="text-gold-300 font-semibold">
                Thank you! Check your inbox for a welcome offer.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500 transition"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-gold-500/20 transition-all hover:-translate-y-0.5"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="text-xs text-slate-400 mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe
            anytime.
          </p>
        </div>
      </div>
    </section>
  );
}