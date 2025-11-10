// "use client";

import { ArrowRight, Database, Globe, Mail, Phone, ShieldCheck } from "lucide-react";

export default function AISuite() {
  return (
    <section className="relative py-20 md:py-28">

      <div className="relative mx-auto max-w-6xl px-6 md:px-16">
        <div className="text-center space-y-3 md:space-y-4">
          <h2 className="text-[36px] sm:text-[44px] md:text-[56px] leading-[1.1] font-extrabold tracking-[-0.02em] text-white">
            The Fobi AI Suite
          </h2>
          <p className="text-sm md:text-base text-white/70 font-semibold">Deploy in weeks. See ROI immediately</p>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-4 md:[grid-template-rows:320px_320px_224px]">
          <div className="md:col-span-3 md:row-start-1 md:row-span-1 h-full flex flex-col rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-6 outline-gradient" style={{ ['--og-width' as any]: '1px' }}>
            <div>
              <div className="text-[#4DA3FF] text-sm font-medium">Enterprise Software Automation Market</div>
              <div className="mt-3 bg-gradient-to-b from-[#4DA3FF] to-[#3E5BFF] bg-clip-text text-transparent text-4xl font-extrabold">$150B+</div>
            </div>
            <a className="mt-auto pt-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
              Learn More <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="md:col-span-6 md:row-start-1 md:row-span-1 h-full rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-6 md:p-8">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs text-white/60">Your Private ChatGPT. Zero Data Leakage.</div>
                <h3 className="mt-2 text-white text-2xl md:text-3xl font-bold">Corporate LLM</h3>
                <p className="mt-2 text-white/75 text-sm md:text-base">Commercially‑licensed. Hosted in‑region. Banking, Legal, Medical, Government compliant.</p>
              </div>
              <ShieldCheck className="h-10 w-10 text-blue-400" />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">Corporate Knowledge</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">Docs</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">AI</span>
            </div>
            <a className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
              Learn More <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="md:col-span-3 md:row-start-1 md:row-span-1 h-full rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-6 flex flex-col">
            <div className="flex items-start justify-between">
              <h3 className="text-white text-2xl font-bold">AI Web Presence</h3>
              <Globe className="h-10 w-10 text-blue-400" />
            </div>
            <p className="mt-2 text-white/75 text-sm">Website Redesign + Builder. Minutes, not months.</p>
            <p className="mt-2 text-white/75 text-sm">200M+ small businesses need professional web presence. Traditional agencies: $5K-50K, 3-6 months. Fobi: Minutes</p>
            <a className="mt-auto pt-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
              Learn More <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="md:col-span-3 md:row-span-1 h-full rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-6 flex flex-col">
            <div className="flex items-start justify-between">
              <h3 className="text-white text-2xl font-bold">AI Call Agent</h3>
              <Phone className="h-10 w-10 text-blue-400" />
            </div>
            <p className="mt-2 text-white/75 text-sm">24/7 Intelligent Reception + Outbound Sales</p>
            <p className="mt-2 text-white/75 text-sm">Natural conversations. Real appointments booked.</p>
            <p className="mt-2 text-white/75 text-sm">Real estate. Healthcare. Sales qualification. Every call center operation globally</p>
            <a className="mt-auto pt-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
              Learn More <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="md:col-span-6 md:row-start-2 md:row-span-1 h-full rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-white text-2xl font-bold">AI Email Support</h3>
              <Mail className="h-10 w-10 text-blue-400" />
            </div>
            <p className="mt-2 text-white/75 text-sm">Thousands of inquiries handled automatically. Ticketing and repetitive questions eliminated.</p>
            <a className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
              Learn More <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="md:col-span-3 md:row-span-1 rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-6 flex flex-col">
            <div className="flex items-start justify-between">
              <h3 className="text-white text-2xl font-bold">Fobi's Data Intelligence<br/>Plug-and-play</h3>
              <Database className="h-10 w-10 text-blue-400" />
            </div>
            <p className="mt-2 text-white/75 text-sm">Fobi's Insights Portal provides businesses with real-time analytics to understand customer behavior, attribution, and ROI measurement for informed decision-making</p>
            <a className="mt-auto pt-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
              Learn More <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="md:col-span-7 md:row-start-3 h-full rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl p-6 flex items-center justify-between gap-4">
            <div className="text-white text-base md:text-lg font-semibold">
              AI Paralysis is costing businesses billions. Companies know they need AI; most don't know where to start. We solve that.
            </div>
            <div className="hidden md:flex items-center ml-auto">
              <div className="w-24 h-px bg-white/20 mr-3" />
              <ArrowRight className="h-5 w-5 text-white/70" />
            </div>
          </div>

          <div className="md:col-span-2 md:row-start-3 h-full rounded-2xl bg-zinc-900/70 backdrop-blur-xl p-6 outline-gradient flex flex-col items-center justify-center text-center" style={{ ['--og-width' as any]: '2px' }}>
            <div className="bg-gradient-to-b from-[#4DA3FF] to-[#3E5BFF] bg-clip-text text-transparent text-4xl font-extrabold">4+</div>
            <div className="mt-1 text-white/90 text-sm font-semibold">Production‑ready AI solutions</div>
            <a className="mt-3 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
              Learn More <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          
        </div>
      </div>
    </section>
  );
}
