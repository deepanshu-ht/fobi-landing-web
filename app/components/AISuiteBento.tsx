// "use client";

import Image from "next/image";
import { ArrowRight, Database, Globe, Mail, Phone, ShieldCheck } from "lucide-react";

export default function AISuiteBento() {
  return (
    <section className="relative py-16 md:py-28 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-blue-900/10 to-black" />
      
      {/* Blue glow effect - center blur ball */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] md:w-[900px] md:h-[600px] bg-blue-600/25 rounded-full blur-[120px] md:blur-[150px]" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-16">
        <div className="text-center space-y-2 md:space-y-4 mb-8 md:mb-10">
          <h2 className="text-[32px] sm:text-[44px] md:text-[56px] leading-[1.1] font-extrabold tracking-[-0.02em] text-white">
            The Fobi AI Suite
          </h2>
          <p className="text-sm md:text-base text-white/70 font-semibold">Deploy in weeks. See ROI immediately</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* left side */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col gap-4 w-full">
                {/* $150B+ Card - Hidden on mobile */}
                <div className="hidden lg:flex w-full lg:size-[16rem] rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-6 flex-col justify-between gradient-border-blue" style={{ ['--og-width' as any]: '2px' }}>
                  <div className="my-auto flex flex-col gap-4">
                    <div className="bg-gradient-to-t from-[#418DFF] to-[#0F51FF] bg-clip-text text-transparent text-5xl font-extrabold font-[family-name:var(--font-plus-jakarta-sans)]">$150B+</div>
                    <div className="text-[#3970FF] text-xl font-medium">Enterprise Software Automation Market</div>
                  </div>
                </div>

                {/* AI Call Agent Card */}
                <div className="w-full lg:w-[16rem] lg:h-[26rem] rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-5 md:p-6 flex flex-col overflow-hidden">
                  <div className="flex justify-center mb-4 md:-mt-28 md:-mx-6">
                    <Image src="/aicallagent.png" alt="AI Call Agent" width={120} height={120} className="w-[35%] md:w-full max-w-[140px] md:max-w-none" />
                  </div>
                  <div className="flex items-start justify-between mb-2 md:mb-3">
                    <h3 className="text-white text-xl md:text-2xl font-bold">AI Voice Agent</h3>
                    {/* <Phone className="w-full text-blue-400" /> */}
                  </div>

                  <p className="text-white/75 text-sm md:text-xs leading-relaxed">24/7 Intelligent Reception + Outbound Sales</p>
                  <p className="mt-2 text-white/75 text-sm md:text-xs leading-relaxed">Natural conversations. Real appointments booked.</p>
                  <p className="mt-2 text-white/75 text-sm md:text-xs leading-relaxed">Real estate. Healthcare. Sales qualification. Every call center operation globally</p>
                  <a className="mt-auto inline-flex items-center gap-1 text-sm md:text-xs text-white/80 hover:text-white transition">
                    → Learn More
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                {/* Corporate LLM Card */}
                <div className="w-full lg:h-[21rem] lg:w-[30rem] rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-5 md:p-6 flex flex-col overflow-hidden min-h-[280px]">
                  <div className="flex items-start justify-between mb-2 md:mb-3">
                    <div>
                      <h3 className="mt-1 text-white text-xl md:text-xl font-bold">Corporate LLM</h3>
                      <div className="text-sm md:text-xs text-white/60 mt-1">Your Private ChatGPT. Zero Data Leakage.</div>
                      <p className="mt-2 text-white/75 text-sm md:text-xs leading-relaxed">Fortune 500 pharma using it now. Banking, Legal, Medical, Government. Commercially‑licensed. Canadian-hosted. 100% compliant</p>
                    </div>
                    
                    {/* <ShieldCheck className="h-8 w-8 text-blue-400 flex-shrink-0" /> */}
                  </div>
                  <a className="mt-3 inline-flex items-center gap-1 text-sm md:text-xs text-white/80 hover:text-white transition">
                    → Learn More
                  </a>
                  <div className="flex mt-6 md:mt-10 items-center justify-center">
                    <div className="text-right text-sm md:text-base">Corporate Knowledge</div>
                    <Image src="/cllm.png" alt="Corporate LLM" width={120} height={120} className="w-60 md:w-72" />
                  </div>

                </div>

                {/* AI Email Support Card */}
                <div className="w-full lg:h-[21rem] lg:w-[30rem] rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-5 md:p-6 flex flex-col min-h-[320px]">
                  <div className="flex items-start justify-between mb-2 md:mb-3">
                    <h3 className="text-white text-xl md:text-xl font-bold">AI Email Support</h3>
                  </div>
                  <p className="text-white/75 text-sm md:text-xs leading-relaxed">Thousands of Inquiries Handled Automatically</p>
                  <p className="mt-2 text-white/75 text-sm md:text-xs leading-relaxed mb-4">Ugly Potato Day. 20K attendees. Zero human support needed. Ticketing. E-commerce. SaaS. Every repetitive customer inquiry eliminated</p>
                  
                  {/* Email Graphic */}
                  <div className="relative mt-auto mb-4">                    
                    <div className="flex items-end gap-4">
                      {/* Profile Image */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex-shrink-0 overflow-hidden">
                        <div className="w-full h-full bg-zinc-800/50">
                        <Image src="/review.png" alt="Profile" width={120} height={120} className="w-full" />
                        </div>
                      </div>
                      
                      {/* Email Card */}
                      <div className="flex-1 bg-zinc-800/50 rounded-xl p-4 border border-white/5 mb-6">
                        <div className="flex items-start gap-3">
                          {/* Email Icon */}
                          <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center flex-shrink-0">
                            <Mail className="w-6 h-6 text-black" />
                          </div>
                          
                          {/* Email Lines */}
                          <div className="flex-1 space-y-2">
                            <div className="h-3 bg-white/10 rounded-full w-3/4"></div>
                            <div className="h-3 bg-white/10 rounded-full w-1/2"></div>
                            <div className="h-3 bg-white/10 rounded-full w-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <a className="inline-flex items-center gap-1 text-sm md:text-xs text-white/80 hover:text-white transition">
                    → Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 w-full">
              <div className="flex flex-col lg:flex-row gap-4 w-full">
                {/* AI Paralysis Banner - Hidden on mobile, shown as separate card */}
                <div className="hidden lg:flex w-full lg:h-[11rem] lg:w-[35rem] rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl px-6 py-6 lg:py-0 items-center justify-between">
                  <div className="text-white text-sm font-semibold">
                    AI Paralysis Is Costing Businesses Billions Every company knows they need AI. Most don't know where to start. We solve that
                  </div>
                  <div className="hidden lg:flex items-center ml-4">
                    <div className="w-16 h-px bg-white/20 mr-2" />
                    <ArrowRight className="h-4 w-4 text-white/70" />
                  </div>
                </div>

                {/* 4+ Production Card */}
                <div className="w-full lg:h-[11rem] lg:w-[11rem] rounded-2xl bg-zinc-900/70 backdrop-blur-xl px-6 py-6 gradient-border-blue gap-3 flex flex-col min-h-[140px]" style={{ ['--og-width' as any]: '2px' }}>
                  <div className="bg-gradient-to-t from-[#418DFF] to-[#0F51FF] bg-clip-text text-transparent text-5xl md:text-6xl font-extrabold font-[family-name:var(--font-plus-jakarta-sans)] mt-2">4+</div>
                  <div className="text-[#3970FF] text-sm md:text-[15px] font-semibold leading-tight">Production‑ready AI solutions</div>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex flex-col gap-4 w-full">
            {/* AI Web Presence Card */}
            <div className="w-full lg:w-[16rem] lg:h-1/2 rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-5 md:p-6 flex flex-col overflow-hidden">
              <div className="flex justify-center mb-4 md:-mx-6">
                <Image src="/webbuild.png" alt="Web Builder" width={150} height={100} className="w-[35%] md:w-full max-w-[140px] md:max-w-none" />
              </div>
              <div className="flex items-start justify-between mb-2 md:mb-3">
                <h3 className="text-white text-xl md:text-lg font-bold">AI Web Presence</h3>
                {/* <Globe className="h-8 w-8 text-blue-400" /> */}
              </div>
              <p className="text-white/75 text-sm md:text-xs leading-relaxed">Website Redesigner + Builder. Minutes, Not Months.</p>
              <p className="mt-2 text-white/75 text-sm md:text-xs leading-relaxed mb-3">200M+ small businesses need professional web presence. Traditional agencies: $5K-50K, 3–6 months. Fobi: Minutes</p>
              
              <a className="mt-auto inline-flex items-center gap-1 text-sm md:text-xs text-white/80 hover:text-white transition">
                → Learn More
              </a>
            </div>

            {/* Data Intelligence Card */}
            <div className="w-full lg:w-[16rem] lg:h-1/2 rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-5 md:p-6 flex flex-col overflow-hidden">
              <div className="flex items-start justify-between mb-2 md:mb-3">
                <h3 className="text-white text-xl md:text-lg font-bold leading-tight">Fobi's Data Intelligence<br/>Plug-and-play</h3>
                {/* <Database className="h-8 w-8 text-blue-400" /> */}
              </div>
              <p className="text-white/75 text-sm md:text-xs leading-relaxed mb-3">Fobi's Insights Portal provides businesses with real-time analytics to understand customer behavior, attribution, and ROI measurement for informed decision-making</p>
              <a className="inline-flex items-center gap-1 text-sm md:text-xs text-white/80 hover:text-white transition mb-4">
                → Learn More
              </a>
              <div className="flex justify-center mt-auto md:-mx-6 md:-mb-6 mb-2">
                <Image src="/dataintelligence.png" alt="Data Intelligence" width={150} height={100} className="w-[35%] md:w-full max-w-[140px] md:max-w-none" />
              </div>
            </div>

            {/* AI Paralysis Card - Mobile Only */}
            <div className="lg:hidden w-full rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-5 flex flex-col min-h-[140px]">
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
