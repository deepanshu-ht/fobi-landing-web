import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import TradingViewWidget from "./TradingViewWidget";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg.png"
          alt="Background"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 pt-16 md:pt-20">
        <div className="mx-auto max-w-7xl">
          {/* Disclaimer Section */}
          <div className="mb-16">
            <h3 className="text-sm font-semibold text-white/90 mb-4 tracking-wide">
              FORWARD LOOKING STATEMENTS DISCLAIMER
            </h3>
            <div className="text-xs md:text-sm text-white/60 space-y-4 leading-relaxed">
              <p>
                This website may contain statements regarding the future business, financial condition, results of operations and strategy of Fobi AI Inc. (the "Company") that are forward-looking in nature. These statements are based on the Company's current expectations, beliefs, assumptions and information available to its management at the time they are made.
              </p>
              <p>
                Words such as "anticipates," "believes," "estimates," "expects," "intends," "may," "plans," "projects," "should," "will" and similar expressions are intended to identify forward-looking statements. Any such statements are provided for the purpose of assisting investors in understanding the Company's current expectations and plans relating to the future and may not be appropriate for other purposes.
              </p>
              <p>
                Forward-looking statements are inherently subject to risks, uncertainties and contingencies, many of which are beyond the Company's control, that may cause actual results, performance or achievements to differ materially from those expressed or implied by these statements. These risks and uncertainties include (without limitation) changes in market or economic conditions, technological developments, regulatory changes, competitive pressures and the Company's ability to execute its plans.
              </p>
              <p>
                The Company does not undertake any obligation to update or revise any forward-looking statements on this website to reflect new information, future events or otherwise, except as required by applicable law.
              </p>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Logo and Description */}
            <div className="text-center md:text-left">
              <div className="mb-6 flex justify-center md:justify-start">
                <Image
                  src="/fobi.png"
                  alt="Fobi Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-sm text-white/70 mb-6 leading-relaxed max-w-md mx-auto md:mx-0">
                Fobi is a technology and data intelligence company that uses AI-powered wallet pass solutions and analytics to help businesses boost customer engagement and streamline operations.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3 text-center md:text-left">
                <a href="mailto:support@fobi.com" className="block text-lg md:text-xl text-white hover:text-white/80 transition-colors">
                  support@fobi.com
                </a>
                <a href="tel:+19876542130" className="block text-lg md:text-xl text-white hover:text-white/80 transition-colors">
                  +1 987 6542 130
                </a>
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 gap-4 mx-auto">
              <div className="space-y-5">
                <a href="#" className="flex items-center gap-1 text-lg text-white hover:text-white transition-colors group relative w-fit">
                  <span className="relative">
                    Solutions
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#" className="flex items-center gap-1 text-lg text-white hover:text-white transition-colors group relative w-fit">
                  <span className="relative">
                    Pricing
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#" className="flex items-center gap-1 text-lg text-white hover:text-white transition-colors group relative w-fit">
                  <span className="relative">
                    Resources
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#" className="flex items-center gap-1 text-lg text-white hover:text-white transition-colors group relative w-fit">
                  <span className="relative">
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#" className="flex items-center gap-1 text-lg text-white hover:text-white transition-colors group relative w-fit">
                  <span className="relative">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#" className="flex items-center gap-1 text-lg text-white hover:text-white transition-colors group relative w-fit">
                  <span className="relative">
                    Investor Presentation
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              <div className="space-y-5">
                <a href="#" className="flex items-center gap-1 text-lg text-white hover:text-white transition-colors group relative w-fit">
                  <span className="relative">
                    Instagram
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#" className="flex items-center gap-1 text-lg text-white hover:text-white transition-colors group relative w-fit">
                  <span className="relative">
                    YouTube
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#" className="flex items-center gap-1 text-lg text-white hover:text-white transition-colors group relative w-fit">
                  <span className="relative">
                    Twitter
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#" className="flex items-center gap-1 text-lg text-white hover:text-white transition-colors group relative w-fit">
                  <span className="relative">
                    LinkedIn
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* TradingView Widget */}
            <div className="flex justify-center">
              <TradingViewWidget />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-2 md:py-4 border-t border-white/10 bg-white/10 -mx-96">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-white/50">
              <p>©2025 All Rights Reserved by Fobi</p>
              <span className="hidden md:inline">|</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white/80 transition-colors flex items-center gap-1 group relative w-fit">
                  <span className="relative">
                    Terms of Service
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/50 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a href="#" className="hover:text-white/80 transition-colors flex items-center gap-1 group relative w-fit">
                  <span className="relative">
                    Privacy Policy
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/50 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
