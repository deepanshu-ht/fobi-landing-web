"use client";

import { ArrowRight, Database, Globe, Mail, Phone, ShieldCheck } from "lucide-react";

export default function AISuiteBento() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl px-6 md:px-16">
        <div className="text-center space-y-3 md:space-y-4">
          <h2 className="text-[36px] sm:text-[44px] md:text-[56px] leading-[1.1] font-extrabold tracking-[-0.02em] text-white">
            The Fobi AI Suite
          </h2>
          <p className="text-sm md:text-base text-white/70 font-semibold">Deploy in weeks. See ROI immediately</p>
        </div>

        <div className="flex gap-4 mt-10 md:mt-14">
          {/* left side */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col gap-4">
                {/* $150B+ Card */}
                <div className="size-[16rem] rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-6 flex flex-col justify-between outline-gradient" style={{ ['--og-width' as any]: '1px' }}>
                  <div>
                    <div className="text-[#4DA3FF] text-xs font-medium">Enterprise Software Automation Market</div>
                    <div className="mt-2 bg-gradient-to-b from-[#4DA3FF] to-[#3E5BFF] bg-clip-text text-transparent text-3xl font-extrabold">$150B+</div>
                  </div>
                  <a className="inline-flex items-center gap-1 text-xs text-white/80 hover:text-white transition">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </a>
                </div>

                {/* AI Call Agent Card */}
                <div className="w-[16rem] h-[22rem] rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-6 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-white text-lg font-bold">AI Call Agent</h3>
                    <Phone className="h-8 w-8 text-blue-400" />
                  </div>
                  <p className="text-white/75 text-xs leading-relaxed">24/7 Intelligent Reception + Outbound Sales</p>
                  <p className="mt-2 text-white/75 text-xs leading-relaxed">Natural conversations. Real appointments booked.</p>
                  <p className="mt-2 text-white/75 text-xs leading-relaxed">Real estate. Healthcare. Sales qualification. Every call center operation globally</p>
                  <a className="mt-auto inline-flex items-center gap-1 text-xs text-white/80 hover:text-white transition">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {/* Corporate LLM Card */}
                <div className="h-[20rem] w-[30rem] rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-6 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-xs text-white/60">Your Private ChatGPT. Zero Data Leakage.</div>
                      <h3 className="mt-1 text-white text-xl font-bold">Corporate LLM</h3>
                      <p className="mt-2 text-white/75 text-xs leading-relaxed">Fortune 500 pharma using it now. Banking, Legal, Medical, Government. Commercially‑licensed. Canadian-hosted. 100% compliant</p>
                    </div>
                    <ShieldCheck className="h-8 w-8 text-blue-400 flex-shrink-0" />
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-2">
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/80">Corporate Knowledge</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/80">Docs</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/80">AI</span>
                  </div>
                  <a className="mt-3 inline-flex items-center gap-1 text-xs text-white/80 hover:text-white transition">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </a>
                </div>

                {/* AI Email Support Card */}
                <div className="h-[18rem] w-[30rem] rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-6 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-white text-xl font-bold">AI Email Support</h3>
                    <Mail className="h-8 w-8 text-blue-400" />
                  </div>
                  <p className="text-white/75 text-xs leading-relaxed">Thousands of Inquiries Handled Automatically</p>
                  <p className="mt-2 text-white/75 text-xs leading-relaxed">Ugly Potato Day. 20K attendees. Zero human support needed. Ticketing. E-commerce. SaaS. Every repetitive customer inquiry eliminated</p>
                  <a className="mt-auto inline-flex items-center gap-1 text-xs text-white/80 hover:text-white transition">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-4 w-full">
                {/* AI Paralysis Banner */}
                <div className="h-[11rem] w-[35rem] rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl px-6 flex items-center justify-between">
                  <div className="text-white text-sm font-semibold">
                    AI Paralysis Is Costing Businesses Billions Every company knows they need AI. Most don't know where to start. We solve that
                  </div>
                  <div className="flex items-center ml-4">
                    <div className="w-16 h-px bg-white/20 mr-2" />
                    <ArrowRight className="h-4 w-4 text-white/70" />
                  </div>
                </div>

                {/* 4+ Production Card */}
                <div className="h-[11rem] w-[11rem] rounded-2xl bg-zinc-900/70 backdrop-blur-xl px-4 outline-gradient flex items-center justify-center gap-3" style={{ ['--og-width' as any]: '2px' }}>
                  <div className="bg-gradient-to-b from-[#4DA3FF] to-[#3E5BFF] bg-clip-text text-transparent text-3xl font-extrabold">4+</div>
                  <div className="text-white/90 text-[10px] font-semibold leading-tight">Production‑ready<br/>AI solutions</div>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex flex-col gap-4">
            {/* AI Web Presence Card */}
            <div className="w-[16rem] h-1/2 rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-6 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white text-lg font-bold">AI Web Presence</h3>
                <Globe className="h-8 w-8 text-blue-400" />
              </div>
              <p className="text-white/75 text-xs leading-relaxed">Website Redesigner + Builder. Minutes, Not Months.</p>
              <p className="mt-2 text-white/75 text-xs leading-relaxed">200M+ small businesses need professional web presence. Traditional agencies: $5K-50K, 3–6 months. Fobi: Minutes</p>
              <a className="mt-auto inline-flex items-center gap-1 text-xs text-white/80 hover:text-white transition">
                Learn More <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            {/* Data Intelligence Card */}
            <div className="w-[16rem] h-1/2 rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-6 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white text-lg font-bold leading-tight">Fobi's Data Intelligence<br/>Plug-and-play</h3>
                <Database className="h-8 w-8 text-blue-400" />
              </div>
              <p className="text-white/75 text-xs leading-relaxed">Fobi's Insights Portal provides businesses with real-time analytics to understand customer behavior, attribution, and ROI measurement for informed decision-making</p>
              <a className="mt-auto inline-flex items-center gap-1 text-xs text-white/80 hover:text-white transition">
                Learn More <ArrowRight className="h-3 w-3" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
