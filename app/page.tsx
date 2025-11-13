import Image from "next/image";
import { Mouse, ArrowUpRight } from "lucide-react";
import Navbar from "./components/Navbar";
import StatsShowcase from "./components/StatsShowcase";
import AISuiteBento from "./components/AISuiteBento";
import ROISection from "./components/ROISection";
import WalletPassesSection from "./components/WalletPassesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import EnterpriseSection from "./components/EnterpriseSection";
import SuccessStoriesSection from "./components/SuccessStoriesSection";
import DeployROISection from "./components/DeployROISection";
import FobiAI3Section from "./components/FobiAI3Section";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-140px)]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/bg.png"
            alt="Background"
            fill
            className="object-cover -scale-x-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-black/0" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-[calc(100vh-140px)] px-6 md:px-16 md:py-20 md:pb-48 flex items-center md:items-stretch">
          <div className="mx-auto md:mx-24 w-full md:h-full">
            <div className="flex flex-col md:h-full justify-center md:justify-between gap-6 md:gap-8">
              {/* Main Content */}
              <div className="flex flex-col gap-6 max-w-xl text-center md:text-left mx-auto md:mx-0 md:justify-end mt-16">
                {/* Title */}
                <div className="space-y-6">
                  <p className="text-2xl sm:text-3xl md:text-[48px] lg:text-[45px] text-[#D9D9D9] leading-tight md:leading-[1.2] tracking-tight md:tracking-[-0.01em]">
                    While $350B Consulting Firms Were Learning AI...
                  </p>
                  <h1 className="text-4xl sm:text-5xl md:text-[84px] lg:text-[56px] font-bold leading-tight md:leading-[1.08] tracking-tight md:tracking-[-0.02em] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)]">
                    We Were Building It
                  </h1>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-row gap-3 justify-center md:justify-start">
                  <a className="inline-flex md:w-fit items-center justify-center gap-1.5 md:gap-2 rounded-lg bg-gradient-to-t from-[#4DA3FF] to-[#3E5BFF] px-4 md:px-4 py-3 md:py-4 text-sm md:text-xl font-semibold text-white shadow-[0_14px_40px_-12px_rgba(62,91,255,0.65)] ring-1 ring-white/20 transition hover:brightness-110" href="#">
                    See Our AI Suite
                    <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  </a>
                  <a className="btn-outline inline-flex md:w-fit items-center justify-center gap-1.5 md:gap-2 rounded-lg px-4 md:px-7 py-3 md:py-4 text-sm md:text-xl text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:brightness-110 backdrop-blur-xl bg-white/5" href="#">
                    Investor Deck
                    <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  </a>
                </div>
              </div>

              {/* Desktop Description and Scroll */}
              <div className="hidden lg:flex justify-between items-center mt-28">
                <div className="max-w-lg text-xl md:text-lg leading-relaxed text-white">
                  AI-native consulting. Real products. Measurable outcomes.
                  <br />
                  <span className="font-medium text-white">
                    From strategy to deployment in weeks, not quarters
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xl text-white tracking-widest">
                  <Mouse size={20} />
                  <span>SCROLL TO EXPLORE</span>
                </div>
              </div>

              {/* Mobile Description */}
              <div className="lg:hidden text-sm leading-relaxed text-white text-center">
                <p>AI-native consulting. Real products. Measurable outcomes.</p>
                <p className="font-semibold text-white mt-1">
                  From strategy to deployment in weeks, not quarters
                </p>
              </div>

              {/* Mobile Scroll Indicator */}
              <div className="lg:hidden flex flex-col items-center gap-2 text-xs text-white tracking-widest mt-auto">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19M12 19L5 12M12 19L19 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>SCROLL TO EXPLORE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsShowcase
        title="is one of North America's first AI companies"
        subtitle="We didn't pivot to AI. We pioneered it"
        badgeSrc="/fobi.png"
        items={[
          {
            value: "150+",
            label: "Countries",
            description:
              "Global deployment infrastructure, battle-tested at scale",
          },
          {
            value: "1 Billion+",
            label: "Data Points",
            description:
              "Real-time intelligence layer powering enterprise decisions",
          },
          {
            value: "40%+",
            label: "Revenue",
            description: "Growing Year On Year",
          },
          {
            value: "100M+",
            label: "Wallet Passes",
            description:
              "Millions of live interactions proving execution capability",
          },
        ]}
      />
      <AISuiteBento />
      <WalletPassesSection />
      <ROISection />
      <TestimonialsSection />
      <EnterpriseSection />
      <SuccessStoriesSection />
      <DeployROISection />
      <FobiAI3Section />
      <Footer />
    </div>
  );
}
