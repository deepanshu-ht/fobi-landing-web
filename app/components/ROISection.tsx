// "use client";

import Image from "next/image";

export default function ROISection() {
  return (
    <section className="relative py-16 md:py-28 bg-black overflow-hidden">
      {/* Blue glow effect - right side blur ball */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[400px] h-[300px] md:w-[600px] md:h-[500px] bg-blue-600/20 rounded-full blur-[100px] md:blur-[120px]" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-8xl px-6 md:px-16">
        {/* Header */}
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-16">
          <h2 className="text-2xl md:text-[48px] leading-tight md:leading-[1.1] font-semibold tracking-[-0.02em] text-white">
            We Turn Marketing Dollars Into Measurable ROI
          </h2>
          <p className="text-sm md:text-3xl text-white/60 font-medium md:font-semibold max-w-3xl mx-auto">
            Fobi turns cost centers into profit centers with real-time attribution and measurable outcomes
          </p>
        </div>

        {/* Comparison Card */}
<div className="relative max-w-full md:max-w-6xl mx-auto p-[1px] rounded-2xl md:rounded-3xl bg-gradient-to-b from-white/40 to-white/10 overflow-hidden">
  {/* Inner Card Layer */}
  <div className="rounded-[calc(1rem-1px)] md:rounded-[calc(1.5rem-1px)] bg-gradient-to-b from-[#000000] to-[#000000] backdrop-blur-xl">
    
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 relative">
      <div className="md:hidden px-4 pt-4">
        <div className="relative inline-block">
          <div className="absolute inset-0">
            <Image
              src="/bg.png"
              alt="Improvement"
              width={90}
              height={90}
              className="w-full h-full rounded-tr-xl rounded-bl-xl object-cover"
            />
          </div>
          <div className="absolute w-px h-full bg-gradient-to-b from-white/30 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-white/30 to-transparent"></div>
          <div className="relative px-3 py-1.5 rounded-tr-xl rounded-bl-xl">
            <span className="text-white text-sm font-semibold whitespace-nowrap">
              10X Improvement
            </span>
          </div>
        </div>
      </div>
      
      <h3 className="text-sm md:text-4xl text-white font-semibold md:font-bold px-4 md:ml-12 md:mt-16 md:mb-12 leading-snug">
        Revenue Generated Per $ Marketing Spend
      </h3>
      
      <div className="relative hidden md:block">
        <div className="absolute inset-0">
          <Image
            src="/bg.png"
            alt="Improvement"
            width={120}
            height={120}
            className="w-full h-full rounded-tr-3xl rounded-bl-3xl object-cover"
          />
        </div>
        <div className="absolute w-px h-full bg-gradient-to-b from-white/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-white/30 to-transparent"></div>
        <div className="relative px-6 py-3 rounded-tr-xl rounded-bl-xl">
          <span className="text-white text-2xl font-semibold whitespace-nowrap">
            10X Improvement
          </span>
        </div>
      </div>
    </div>

    {/* Comparison Bars */}
    <div className="space-y-3 md:space-y-6 px-4 pb-4 md:p-12 md:pt-0">
      {/* With Fobi Bar */}
      <div className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-6">
        <div className="h-12 md:h-18 bg-[#316BFF]/30 rounded-lg flex items-center justify-start px-3 md:px-3 border border-[#316BFF] w-full md:w-4/5">
          <span className="text-white text-xs md:text-3xl font-semibold">
            With Fobi
          </span>
        </div>
        <div className="text-white text-xs md:text-2xl font-semibold md:font-extrabold leading-tight">
          10X Return ( Fobi's Average )
        </div>
      </div>

      {/* Without Fobi Bar */}
      <div className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-6">
        <div className="h-12 md:h-18 bg-[#FF3131]/30 rounded-lg flex items-center justify-start px-3 md:px-3 border border-[#FF3131] w-1/2 md:w-1/5">
          <span className="text-white text-xs md:text-3xl font-semibold">
            Without Fobi
          </span>
        </div>
        <div className="text-white text-xs md:text-2xl font-semibold md:font-extrabold leading-tight">
          1X Return ( Industry Average )
        </div>
      </div>
    </div>
  </div>
</div>



      </div>
    </section>
  );
}
