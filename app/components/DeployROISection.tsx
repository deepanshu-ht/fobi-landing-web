import { Calendar, Download, Users } from "lucide-react";

export default function DeployROISection() {
  return (
    <section className="relative py-20 md:py-28 px-6 md:px-16 bg-black overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Ready to deploy AI that delivers ROI?
          </h2>
          <p className="mt-3 text-base md:text-lg text-white/70">
            Stop Talking About AI. Start Deploying It
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
            <div className="w-full md:w-1/2 relative flex flex-col items-end overflow-hidden">
              <div className="hidden md:block absolute top-0 left-0 w-full h-56 bg-gradient-to-b from-black to-black/0 z-10 pointer-events-none"></div>
              <div className="hidden md:flex relative">
                {/* Blurred glow layer */}
                <div className="absolute inset-0 flex">
                  <div className="h-56 w-48 rounded-br-[72px] border-r-16 border-[#FFD07E] -mr-32 blur-sm">
                  </div>
                  <div className="h-56 w-48 rounded-br-[60px] border-r-16 border-[#FFD07E] mr-8 blur-sm">
                  </div>
                </div>
                {/* Sharp border layer */}
                <div className="h-56 w-48 rounded-br-[72px] border-r-8 border-[#FFD07E] -mr-32">
                </div>
                <div className="h-56 w-48 rounded-br-[60px] border-r-8 border-[#FFD07E] mr-8">
                </div>
              </div>
              <div className="rounded-2xl border border-[#FFD07E] bg-gradient-to-b from-white/5 to-white/[0.03] p-6 md:p-8 w-full h-full flex flex-col">
                <h3 className="text-xl md:text-2xl font-semibold text-[#FFD07E] mb-4">
                  For Enterprises
                </h3>
                <p className="text-white/80 mb-6">Ready to deploy AI that delivers ROI?</p>
                <div className="text-white/90 text-sm md:text-base mb-6">
                  <p className="font-semibold mb-3 text-lg">Offerings:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#FFD07E]" />
                      <span>AI Email & Call Support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#FFD07E]" />
                      <span>Corporate LLM Setup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#FFD07E]" />
                      <span>Custom AI Solutions</span>
                    </li>
                  </ul>
                </div>
                <a href="#" className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#9E8150] hover:bg-[#9E8150]/80 text-white px-5 py-3 border border-[#FFD07E]/50 transition-colors w-full font-bold text-xl">
                  <Calendar className="h-4 w-4" />
                  Schedule Strategic Demo
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/2 relative flex flex-col items-start overflow-hidden">
              <div className="hidden md:block absolute top-0 right-0 w-full h-56 bg-gradient-to-b from-black to-black/0 z-10 pointer-events-none"></div>
              <div className="hidden md:flex relative">
                {/* Blurred glow layer */}
                <div className="absolute inset-0 flex">
                  <div className="h-56 w-48 rounded-bl-[72px] border-l-16 border-blue-700 ml-8 blur-md">
                  </div>
                  <div className="h-56 w-48 rounded-bl-[60px] border-l-16 border-blue-700 -ml-32 blur-md">
                  </div>
                </div>
                {/* Sharp border layer */}
                <div className="h-56 w-48 rounded-bl-[72px] border-l-8 border-blue-700 ml-8">
                </div>
                <div className="h-56 w-48 rounded-bl-[60px] border-l-8 border-blue-700 -ml-32">
                </div>
              </div>
              <div className="rounded-2xl border-2 border-blue-700 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 md:p-8 w-full h-full flex flex-col">
                <h3 className="text-xl md:text-2xl font-semibold text-[#316BFF] mb-4">
                  For Investors
                </h3>
                <p className="text-white/80 mb-6">Ready to invest in execution?</p>
                <div className="text-white/90 text-sm md:text-base mb-6">
                  <p className="font-semibold mb-3 text-lg">Investment Thesis:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#3E5BFF]" />
                      <span>First-mover in AI-native consulting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#3E5BFF]" />
                      <span>Proven products, growing revenue</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#3E5BFF]" />
                      <span>Path to profitability</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col w-full gap-3 mt-auto">
                  <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg text-[#3E5BFF] font-semibold px-5 py-3 transition-colors text-xl">
                    <Download className="h-4 w-4" />
                    Download Investor Deck
                  </a>
                  <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-t from-[#3D85FF] to-[#1154FF] hover:brightness-110 text-white font-bold text-xl px-5 py-3 border border-[#3E5BFF]/60 transition-colors">
                    <Users className="h-4 w-4" />
                    Join Investor Community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
