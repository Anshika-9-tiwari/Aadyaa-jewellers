"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Search,
  Menu,
  X,
  Heart,
  User,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/collections/rings", label: "Rings" },
  { href: "/collections/necklaces", label: "Necklaces" },
  { href: "/collections/earrings", label: "Earrings" },
  { href: "/collections/bracelets", label: "Bracelets" },
  { href: "/loose-diamonds", label: "Loose Diamonds" },
  { href: "/custom-design", label: "Custom Design" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-navy-900 text-gold-100 py-2 text-xs hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p>
            <span className="text-gold-300">✦</span> Free Insured Shipping on
            Orders Over $5,000
          </p>
          <div className="flex gap-6">
            <Link href="/stores" className="hover:text-gold-300 transition">
              Store Locator
            </Link>
            <Link href="/contact" className="hover:text-gold-300 transition">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2 -ml-2 hover:bg-gold-50 rounded-lg"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gold-400 to-rose-400 rounded-xl flex items-center justify-center shadow-lg shadow-gold-500/20">
                <span className="text-white font-serif font-bold text-lg md:text-xl">
                  A
                </span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-serif text-xl md:text-2xl font-bold tracking-tight leading-none">
                  Aadyaa
                </h1>
                <p className="text-[9px] text-slate-500 uppercase tracking-[0.2em]">
                  Jewellers
                </p>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-navy-900 hover:text-gold-600 transition relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Action icons */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                className="p-2 hover:bg-gold-50 rounded-lg transition hidden sm:block"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 hover:bg-gold-50 rounded-lg transition hidden sm:block"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
              <button
                className="p-2 hover:bg-gold-50 rounded-lg transition hidden sm:block"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>
              <button
                className="p-2 hover:bg-gold-50 rounded-lg transition relative"
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-[280px] bg-white z-50 lg:hidden shadow-2xl flex flex-col"
            >
              <div className="p-5 flex items-center justify-between border-b border-slate-100">
                <span className="font-serif text-lg font-bold">Menu</span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 hover:bg-gold-50 rounded-lg"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-5 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block py-3 px-3 text-base font-medium hover:bg-gold-50 hover:text-gold-700 rounded-lg transition"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-slate-100 space-y-1">
                  <Link
                    href="/account"
                    className="flex items-center gap-3 py-3 px-3 text-sm hover:bg-gold-50 rounded-lg"
                  >
                    <User className="w-4 h-4" /> My Account
                  </Link>
                  <Link
                    href="/wishlist"
                    className="flex items-center gap-3 py-3 px-3 text-sm hover:bg-gold-50 rounded-lg"
                  >
                    <Heart className="w-4 h-4" /> Wishlist
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}