import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaFacebookF,
  FaSquareInstagram,
  FaSquareTwitter,
  } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-rose-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">
                  A
                </span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white">
                  Aadyaa Jewellers
                </h3>
                <p className="text-[9px] text-slate-400 uppercase tracking-[0.2em]">
                  Since 2016
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5 text-slate-400">
              Celebrating love and elegance through exquisite diamond
              jewellery. Crafted with precision, passion, and an unwavering
              commitment to quality.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaSquareInstagram, FaSquareTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-white font-semibold mb-5">Collections</h4>
            <ul className="space-y-2.5">
              {[
                "Engagement Rings",
                "Wedding Bands",
                "Necklaces",
                "Earrings",
                "Bracelets",
                "Loose Diamonds",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm hover:text-gold-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-5">Support</h4>
            <ul className="space-y-2.5">
              {[
                "Returns & Exchanges",
                "Size Guide",
                "Care Instructions",
                "Blogs",
                "FAQs",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm hover:text-gold-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span>7B/3, Maharani Bagh, C V Raman Marg, Opp. Gurudwara , Below HDFC Bank, New Delhi - 110025</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>+91 88226-64433</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>aadyaajewelscvd@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700/90">
        <div className="container mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Aadyaa Jewellers. All rights
              reserved.
            </p>
            <div className="flex gap-5">
              <Link href="/privacy" className="hover:text-gold-400 transition">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-gold-400 transition">
                Terms
              </Link>
              <Link href="/sitemap" className="hover:text-gold-400 transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}