import AboutHero from "../components/about/AboutHero";
import LogoCarousel from "../components/about/LogoCarousel";
import VisionSection from "../components/about/VisionSection";
import WhyFobiSection from "../components/about/WhyFobiSection";
import TrustedBySection from "../components/about/TrustedBySection";
import LeadershipSection from "../components/about/LeadershipSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <LogoCarousel />
      <VisionSection />
      <WhyFobiSection />
      <TrustedBySection />
      <LeadershipSection />
    </main>
  );
}
