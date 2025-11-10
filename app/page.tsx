import Image from "next/image";
import { Mouse, ArrowUpRight } from "lucide-react";
import Navbar from "./components/Navbar";
import StatsShowcase from "./components/StatsShowcase";
import AISuiteBento from "./components/AISuiteBento";
import ROISection from "./components/ROISection";
import WalletPassesSection from "./components/WalletPassesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import EnterpriseSection from "./components/EnterpriseSection";

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
            className="object-cover"
            priority
          />
          <div className="" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-[calc(100vh-140px)] px-6 py-12 md:px-16 md:py-20 md:pb-48">
          <div className="mx-auto max-w-6xl h-full">
            <div className="flex flex-col h-full justify-between md:grid md:grid-cols-[minmax(0,720px)_1fr] md:items-end md:gap-8">
              {/* Main Content */}
              <div className="flex flex-col gap-6 max-w-2xl text-center md:text-left mx-auto md:mx-0 flex-1 justify-center md:justify-end">
                {/* Subtitle */}
                <div className="space-y-4 md:space-y-5">
                  <p className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[52px] text-white/90 font-light leading-[1.2] tracking-[-0.01em]">
                    While $350B Consulting Firms Were Learning AI...
                  </p>
                  <h1 className="text-[48px] sm:text-[60px] md:text-[84px] lg:text-[92px] font-extrabold leading-[1.08] tracking-[-0.02em] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)]">
                    We Were Building It
                  </h1>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-row gap-3 pt-2 justify-center md:justify-start">
                  <a className="inline-flex w-fit items-center justify-center gap-1.5 md:gap-2 rounded-lg bg-gradient-to-br from-[#4DA3FF] to-[#3E5BFF] px-5 md:px-7 py-2.5 md:py-3 text-sm md:text-base font-semibold text-white shadow-[0_14px_40px_-12px_rgba(62,91,255,0.65)] ring-1 ring-white/20 transition hover:brightness-110">
                    See Our AI Suite
                    <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  </a>
                  <a className="btn-outline inline-flex w-fit items-center justify-center gap-1.5 md:gap-2 rounded-lg px-5 md:px-7 py-2.5 md:py-3 text-sm md:text-base text-white font-semibold">
                    Investor Deck
                    <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  </a>
                </div>

                {/* Description */}
                <p className="max-w-lg text-sm md:text-base leading-relaxed pt-4 text-gray-400 text-center md:text-left">
                  AI-native consulting. Real products. Measurable outcomes.
                  <br />
                  <span className="font-medium text-white">
                    From strategy to deployment in weeks, not quarters
                  </span>
                </p>
              </div>

              {/* Desktop: Right column scroll indicator */}
              <div className="hidden md:flex items-center gap-3 text-xs text-gray-300 tracking-widest col-start-2 row-start-1 self-end justify-self-end">
                <Mouse size={16} />
                <span>SCROLL TO EXPLORE</span>
              </div>
            </div>

            {/* Mobile: Bottom section with scroll indicator */}
            <div className="md:hidden flex flex-col items-center gap-3 pb-8 mt-auto">
              <div className="flex flex-col items-center gap-3 text-xs text-gray-300 tracking-widest">
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
    </div>
  );
}
