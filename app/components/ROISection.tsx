// "use client";

import Image from "next/image";

export default function ROISection() {
  return (
    <section className="relative py-16 md:py-28 bg-black overflow-hidden">
      {/* Blue glow effect - right side blur ball */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[400px] h-[300px] md:w-[600px] md:h-[500px] bg-blue-600/20 rounded-full blur-[100px] md:blur-[120px]" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-16">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-[32px] sm:text-[44px] md:text-[56px] leading-[1.1] font-extrabold tracking-[-0.02em] text-white">
            We Turn Marketing Dollars Into Measurable ROI
          </h2>
          <p className="text-base md:text-lg text-white/60 font-medium max-w-3xl mx-auto">
            Fobi turns cost centers into profit centers with real-time
            attribution and measurable outcomes
          </p>
        </div>

        {/* Comparison Card */}
<div className="relative max-w-5xl mx-auto p-[1px] rounded-3xl bg-gradient-to-b from-white/40 to-white/10 overflow-hidden">
  {/* Inner Card Layer */}
  <div className="rounded-[calc(1.5rem-1px)] bg-gradient-to-b from-[#000000] to-[#000000] backdrop-blur-xl">
    
    {/* Header */}
    <div className="flex flex-row items-start justify-between md:mb-12 gap-6 relative">
      <div></div>
      <h3 className="text-lg md:text-3xl text-white font-semibold md:ml-16 md:mt-10 hidden md:block">
        Revenue Generated Per $ Marketing Spend
      </h3>
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/bg.png"
            alt="Improvement"
            width={120}
            height={120}
            className="w-full h-full rounded-tr-3xl rounded-bl-3xl"
          />
        </div>
        <div className="relative px-6 py-3 rounded-tr-xl rounded-bl-xl">
          <span className="text-white text-lg md:text-2xl font-semibold whitespace-nowrap">
            10X Improvement
          </span>
        </div>
      </div>
    </div>

    <div className="text-white text-xl md:hidden font-semibold ml-8 -mt-8 mb-8">
      Marketing ROI
    </div>

    {/* Comparison Bars */}
    <div className="space-y-6 p-6 pt-0">
      {/* With Fobi Bar */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
        <div className="h-12 bg-[#316BFF]/40 rounded-lg flex items-center justify-start px-2 md:px-3 border border-[#316BFF] w-full md:w-4/5">
          <span className="text-white text-lg md:text-xl font-semibold whitespace-nowrap">
            With Fobi
          </span>
        </div>
        <div className="text-white text-lg md:text-2xl font-extrabold whitespace-nowrap">
          10X Return{" "}
          <span className="text-white/60 font-medium text-base md:text-lg">
            ( Fobi's Average )
          </span>
        </div>
      </div>

      {/* Without Fobi Bar */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
        <div className="h-12 bg-[#8B2C2C]/40 rounded-lg flex items-center justify-start px-2 md:px-3 border border-[#8B2C2C] w-1/3 md:w-1/8">
          <span className="text-white text-sm md:text-md font-semibold whitespace-nowrap">
            Without Fobi
          </span>
        </div>
        <div className="text-white/80 text-lg md:text-2xl font-extrabold whitespace-nowrap">
          1X Return{" "}
          <span className="text-white/50 font-medium text-base md:text-lg">
            ( Industry Average )
          </span>
        </div>
      </div>
    </div>
  </div>
</div>



      </div>
    </section>
  );
}
