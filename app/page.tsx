'use client';

import Image from 'next/image';
import { Mouse, ArrowUpRight } from 'lucide-react';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-140px)] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/bg.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-[calc(100vh-140px)] px-6 py-20 md:px-16 md:pb-48">
          <div className="grid h-full items-end gap-8 md:grid-cols-[minmax(0,720px)_1fr]">
            {/* Main Content */}
            <div className="flex flex-col gap-6 max-w-2xl">
            {/* Subtitle */}
            <div className="space-y-5">
              <p className="text-[40px] md:text-[48px] lg:text-[52px] text-white/90 font-light leading-[1.2] tracking-[-0.01em]">
                While $350B Consulting Firms Were Learning AI...
              </p>
              <h1 className="text-[72px] md:text-[84px] lg:text-[92px] font-extrabold leading-[1.08] tracking-[-0.02em] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)]">
                We Were Building It
              </h1>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row pt-2">
              <a className="inline-flex w-fit items-center gap-2 rounded-[14px] bg-gradient-to-br from-[#4DA3FF] to-[#3E5BFF] px-7 py-3 font-semibold text-white shadow-[0_14px_40px_-12px_rgba(62,91,255,0.65)] ring-1 ring-white/20 transition hover:brightness-110">
                See Our AI Suite
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a className="btn-outline inline-flex w-fit items-center gap-2 rounded-[18px] px-7 py-3 text-white font-semibold">
                Investor Deck
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Description */}
            <p className="max-w-lg text-sm text-gray-400 md:text-base leading-relaxed pt-4">
              AI-native consulting. Real products. Measurable outcomes.
              <br />
              <span className="font-medium text-white">From strategy to deployment in weeks, not quarters</span>
            </p>
          </div>
          {/* Right column: Scroll indicator */}
          <div className="hidden md:flex items-center gap-3 text-xs text-gray-300 tracking-widest col-start-2 row-start-1 self-end justify-self-end">
            <Mouse size={16} />
            <span>SCROLL TO EXPLORE</span>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
