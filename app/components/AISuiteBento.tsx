// "use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Database, Globe, Mail, Phone, ShieldCheck } from "lucide-react";

export default function AISuiteBento() {
  return (
    <section className="relative py-16 md:py-28 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-blue-900/10 to-black" />
      
      {/* Blue glow effect - center blur ball */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] md:w-[900px] md:h-[600px] bg-blue-600/10 rounded-full blur-[120px] md:blur-[150px]" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-16">
        <div className="text-center space-y-2 md:space-y-4 mb-8 md:mb-10">
          <h2 className="text-[32px] sm:text-[44px] md:text-[56px] leading-[1.1] font-extrabold tracking-[-0.02em] text-white">
            The Fobi AI Suite
          </h2>
          <p className="text-sm md:text-base text-white/70 font-semibold">Deploy in weeks. See ROI immediately</p>
        </div>

        {/* Subtle grid background with elliptical gradient fade - behind cards only */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-20 md:mt-24">
          <div 
            className="w-full h-full max-w-6xl"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(ellipse 70% 50% at center, black 0%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at center, black 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* left side */}
          <div className="flex flex-col gap-4 w-full justify-between">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col gap-4 w-full">
                {/* $150B+ Card - Hidden on mobile */}
                <div className="hidden lg:flex w-full lg:size-[16rem] rounded-2xl bg-[#0A0A0A] border border-white/10 backdrop-blur-xl p-6 flex-col justify-between gradient-border-blue" style={{ ['--og-width' as any]: '2px' }}>
                  <div className="my-auto flex flex-col gap-4">
                    <div className="bg-gradient-to-t from-[#418DFF] to-[#0F51FF] bg-clip-text text-transparent text-5xl font-extrabold font-[family-name:var(--font-plus-jakarta-sans)]">$150B+</div>
                    <div className="text-[#3970FF] text-xl font-medium">Enterprise Software Automation Market</div>
                  </div>
                </div>

                {/* AI Call Agent Card */}
                <div className="w-full lg:w-[16rem] lg:h-[26rem] rounded-2xl bg-[#0A0A0A] border border-white/10 backdrop-blur-xl p-5 md:p-6 flex flex-col overflow-hidden">
                  <div className="flex justify-center mb-4 md:-mt-28 md:-mx-6">
                    <Image src="/aicallagent.png" alt="AI Call Agent" width={120} height={120} className="w-[35%] md:w-full max-w-[140px] md:max-w-none" />
                  </div>
                  <div className="flex items-start justify-between mb-2 md:mb-3 -mt-10">
                    <h3 className="text-white text-xl md:text-2xl font-bold">AI Voice Agent</h3>
                    {/* <Phone className="w-full text-blue-400" /> */}
                  </div>

                  <p className="text-white/75 text-sm md:text-xs leading-relaxed">24/7 Intelligent Reception + Outbound Sales</p>
                  <p className="mt-2 text-white/75 text-sm md:text-xs leading-relaxed">Natural conversations. Real appointments booked.</p>
                  <p className="mt-2 text-white/75 text-sm md:text-xs leading-relaxed">Real estate. Healthcare. Sales qualification. Every call center operation globally</p>
                  <a className="mt-auto inline-flex items-center gap-1 text-sm md:text-xs text-white group relative w-fit transition">
                    <span className="relative font-semibold">
                      → Learn More
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                {/* Corporate LLM Card */}
                <div className="w-full lg:h-[21rem] lg:w-[30rem] rounded-2xl bg-[#0A0A0A] border border-white/10 backdrop-blur-xl p-5 md:p-6 flex flex-col overflow-hidden min-h-[280px]">
                  <div className="flex items-start justify-between mb-2 md:mb-3">
                    <div>
                      <h3 className="mt-1 text-white text-xl md:text-3xl font-bold">Corporate LLM</h3>
                      <div className="text-sm md:text-xs text-white/60 mt-1">Your Private ChatGPT. Zero Data Leakage.</div>
                      <p className="mt-2 text-white/75 text-sm md:text-xs leading-relaxed">Fortune 500 pharma using it now. Banking, Legal, Medical, Government. Commercially‑licensed. Canadian-hosted. 100% compliant</p>
                    </div>
                    
                    {/* <ShieldCheck className="h-8 w-8 text-blue-400 flex-shrink-0" /> */}
                  </div>
                  <a className="mt-3 inline-flex items-center gap-1 text-sm md:text-xs text-white group relative w-fit transition">
                    <span className="relative font-semibold">
                      → Learn More
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                  <div className="flex mt-6 md:mt-8 items-center justify-center">
                    <div className="text-right text-sm md:text-base">Corporate Knowledge</div>
                    <Image src="/cllm.png" alt="Corporate LLM" width={120} height={120} className="w-60 md:w-72" />
                  </div>

                </div>

                {/* AI Email Support Card */}
                <div className="w-full lg:h-[21rem] lg:w-[30rem] rounded-2xl bg-[#0A0A0A] border border-white/10 backdrop-blur-xl p-5 md:p-6 flex flex-col min-h-[320px]">
                  <div className="flex items-start justify-between mb-2 md:mb-3">
                    <h3 className="text-white text-xl md:text-3xl font-bold">AI Email Support</h3>
                  </div>
                  <p className="text-white/75 text-sm md:text-xs leading-relaxed">Thousands of Inquiries Handled Automatically</p>
                  <p className="mt-2 text-white/75 text-sm md:text-xs leading-relaxed mb-4">Ugly Potato Day. 20K attendees. Zero human support needed. Ticketing. E-commerce. SaaS. Every repetitive customer inquiry eliminated</p>
                  <a className="inline-flex items-center gap-1 text-sm md:text-xs text-white group relative w-fit transition">
                    <span className="relative font-semibold">
                      → Learn More
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                  {/* Email Graphic */}
                  <div className="relative mt-auto mb-4">                    
                    <div className="flex items-end gap-4 justify-end">
                      {/* Profile Image */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex-shrink-0 overflow-hidden">
                        <div className="w-full h-full bg-zinc-800/50">
                        <Image src="/review.png" alt="Profile" width={120} height={120} className="w-full" />
                        </div>
                      </div>
                      
                      {/* Email Card */}
                      <div className=" bg-zinc-800 rounded-xl p-4 border border-white/5 mb-6 w-56 relative">
                        <div className="flex items-start gap-3">
                          {/* Email Icon */}
                          <div className="w-12 h-12 rounded flex items-center justify-center flex-shrink-0 -mt-2">
                            <svg width="48" height="48" viewBox="50 20 60 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                              <path d="M103.541 27.8354C103.541 26.7309 102.646 25.8354 101.541 25.8354H56.5413C55.4367 25.8354 54.5413 26.7309 54.5413 27.8354V63.8354C54.5413 64.94 55.4367 65.8354 56.5413 65.8354H101.541C102.646 65.8354 103.541 64.94 103.541 63.8354V27.8354ZM98.6413 34.7388C98.6413 35.4219 98.2926 36.0578 97.7167 36.4251L80.1167 47.6496C79.4608 48.0679 78.6218 48.0679 77.9658 47.6496L60.3658 36.4251C59.7899 36.0578 59.4413 35.4219 59.4413 34.7388V34.4831C59.4413 32.904 61.1853 31.9477 62.5167 32.7968L77.9658 42.6496C78.6218 43.0679 79.4608 43.0679 80.1167 42.6496L95.5658 32.7968C96.8972 31.9477 98.6413 32.904 98.6413 34.4831V34.7388Z" fill="#316BFF"/>
                              <path d="M56.5413 26.0854H101.541C102.508 26.0854 103.291 26.869 103.291 27.8354V63.8354C103.291 64.8019 102.508 65.5854 101.541 65.5854H56.5413C55.5748 65.5854 54.7913 64.8019 54.7913 63.8354V27.8354C54.7913 26.869 55.5748 26.0854 56.5413 26.0854ZM98.8909 34.4829C98.8907 32.7066 96.9296 31.6314 95.4319 32.5864L79.9827 42.439C79.4087 42.805 78.6738 42.805 78.0999 42.439L62.6506 32.5864C61.1529 31.6314 59.1918 32.7066 59.1917 34.4829V34.7388C59.1917 35.5073 59.5838 36.223 60.2317 36.6362L77.8313 47.8608C78.5692 48.3313 79.5134 48.3313 80.2512 47.8608L97.8508 36.6362C98.4988 36.223 98.8909 35.5073 98.8909 34.7388V34.4829Z" stroke="#0E51FF" strokeWidth="0.5"/>
                            </svg>
                          </div>
                          
                          {/* Email Lines */}
                          <div className="flex-1 space-y-3">
                            <div className="h-2 bg-white/10 rounded-full w-full"></div>
                            <div className="h-2 bg-white/10 rounded-full w-full"></div>
                            <div className="h-2 bg-white/10 rounded-full w-[145%] -ml-14 mt-4"></div>
                          </div>
                          {/* <div className="absolute w-4 h-4 bottom-0 left-0 bg-zinc-800 -ml-2 border-tr -rounded-xl "></div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 w-full">
              <div className="flex flex-col lg:flex-row gap-4 w-full">
                {/* AI Paralysis Banner - Hidden on mobile, shown as separate card */}
                <div className="hidden lg:flex w-full lg:h-[11rem] lg:w-[35rem] rounded-2xl bg-[#0A0A0A] border border-white/10 backdrop-blur-xl px-6 py-6 lg:py-0 items-center justify-between">
                  <div className="text-white text-xl font-semibold relative py-2">
                    <div className="absolute top-0 right-3 w-5 h-full rounded-r-3xl border border-l-0 border-[#1D4099]" />
                    <div className="absolute top-0 right-8 w-20 h-px rounded-3xl bg-gradient-to-r from-[#1D4099]/0 to-[#1D4099]" />
                    <div className="absolute bottom-0 right-8 w-20 h-px rounded-3xl bg-gradient-to-r from-[#1D4099]/0 to-[#1D4099]" />
                    AI Paralysis Is Costing Businesses Billions Every company knows they need AI. Most don't know where to start. We solve that
                  </div>
                  <div className="hidden lg:flex items-center ml-4 text-[#3777FF]">
                    <ArrowLeft className="h-8 w-8" />
                    <div className="w-16 h-[2.7px] bg-[#3777FF] -ml-6" />
                  </div>
                </div>

                {/* 4+ Production Card */}
                <div className="w-full lg:h-[11rem] lg:w-[11rem] rounded-2xl bg-[#0A0A0A] backdrop-blur-xl px-6 py-6 gradient-border-blue gap-3 flex flex-col min-h-[140px]" style={{ ['--og-width' as any]: '2px' }}>
                  <div className="bg-gradient-to-t from-[#418DFF] to-[#0F51FF] bg-clip-text text-transparent text-5xl md:text-6xl font-extrabold font-[family-name:var(--font-plus-jakarta-sans)] mt-2">4+</div>
                  <div className="text-[#3970FF] text-sm md:text-[15px] font-semibold leading-tight">Production‑ready AI solutions</div>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex flex-col gap-4 w-full">
            {/* AI Web Presence Card */}
            <div className="w-full lg:w-[16rem] lg:h-1/2 rounded-2xl bg-[#0A0A0A] border border-white/10 backdrop-blur-xl p-5 md:p-6 flex flex-col overflow-hidden">
              <div className="flex justify-center mb-4 md:-mx-6">
                <Image src="/webbuild.png" alt="Web Builder" width={150} height={100} className="w-[35%] md:w-full max-w-[140px] md:max-w-none" />
              </div>
              <div className="flex items-start justify-between mb-2 md:mb-3">
                <h3 className="text-white text-xl md:text-2xl font-bold">AI Web Presence</h3>
                {/* <Globe className="h-8 w-8 text-blue-400" /> */}
              </div>
              <p className="text-white/75 text-sm md:text-xs leading-relaxed">Website Redesigner + Builder. Minutes, Not Months.</p>
              <p className="mt-2 text-white/75 text-sm md:text-xs leading-relaxed mb-3">200M+ small businesses need professional web presence. Traditional agencies: $5K-50K, 3–6 months. Fobi: Minutes</p>
              
              <a className="mt-auto inline-flex items-center gap-1 text-sm md:text-xs text-white group relative w-fit transition">
                <span className="relative font-semibold">
                  → Learn More
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            </div>

            {/* Data Intelligence Card */}
            <div className="w-full lg:w-[16rem] lg:h-1/2 rounded-2xl bg-[#0A0A0A] border border-white/10 backdrop-blur-xl p-5 md:p-6 flex flex-col overflow-hidden">
              <div className="flex items-start justify-between mb-2 md:mb-3">
                <h3 className="text-xl md:text-3xl font-bold leading-tight bg-linear-to-br from-white to-white/30 bg-clip-text text-transparent">Fobi's Data Intelligence<br/>Plug-and-play</h3>
                {/* <Database className="h-8 w-8 text-blue-400" /> */}
              </div>
              <p className="text-white/75 text-sm md:text-xs leading-relaxed mb-3">Fobi's Insights Portal provides businesses with real-time analytics to understand customer behavior, attribution, and ROI measurement for informed decision-making</p>
              <a className="inline-flex items-center gap-1 text-sm md:text-xs text-white transition group relative w-fit mb-4">
                <span className="relative font-semibold">
                  → Learn More
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
              <div className="flex justify-center md:-mx-6">
                <Image src="/dataintelligence.png" alt="Data Intelligence" width={150} height={100} className="w-[35%] md:w-full max-w-[160px] md:max-w-none scale-110 -ml-8" />
              </div>
            </div>

            {/* AI Paralysis Card - Mobile Only */}
            <div className="lg:hidden w-full rounded-2xl bg-[#0A0A0A] border border-white/10 backdrop-blur-xl p-5 flex flex-col min-h-[140px]">
              <p className="text-white text-base font-semibold leading-relaxed">
                AI Paralysis Is Costing Businesses Billions Every company knows they need AI. Most don't know where to start. We solve that
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
