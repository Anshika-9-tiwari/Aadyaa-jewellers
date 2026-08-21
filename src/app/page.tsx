import HeroSection from "@/components/Home/HeroSection";
import TrustBadges from "@/components/Home/TrustBadges";
import StatsBar from "@/components/Home/StatsBar";
import FeaturedCollections from "@/components/Home/FeaturedCollections";
import BestSellers from "@/components/Home/BestSellers";
import DiamondEducation from "@/components/Home/DiamondEducation";
import Testimonials from "@/components/Home/Testimonials";
import Newsletter from "@/components/ui/Newsletter";
import TrendingCollections from "@/components/Home/TrendingCollections";
import AboutStory from "@/components/Home/AboutStory";

export default function Home() {
  return (
    <main className="min-h-screen">
      
      <HeroSection />
      <StatsBar />
      <FeaturedCollections />
      <AboutStory />
      <BestSellers />
      <TrendingCollections />
      <DiamondEducation />
      <TrustBadges />
      <Testimonials />
      <Newsletter />
    </main>
  );
}