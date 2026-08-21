import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aadyaa Jewellers | Luxury Diamond Jewellery & Certified Diamonds",
  description:
    "Exquisite diamond jewellery. GIA certified diamonds, custom designs, and timeless elegance for life's precious moments.",
  keywords: [
    "diamond jewellery",
    "engagement rings",
    "GIA certified",
    "luxury jewellery",
    "custom rings",
    "Aadyaa Jewellers",
  ],
  openGraph: {
    title: "Aadyaa Jewellers | Luxury Diamond Jewellery",
    description: "Exquisite diamond jewellery crafted for life's precious moments",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}