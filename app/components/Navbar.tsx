'use client';

import { ChevronDown, Menu, X, Wallet, Database, Building2, Phone, Mail, Globe, FileText, DollarSign, File, Presentation, TrendingUp, BarChart3, Users, PieChart, LineChart } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const solutionsMenu = [
    { icon: Wallet, label: 'Wallet Passes' },
    { icon: Database, label: 'Data Intelligence' },
    { icon: Building2, label: 'Corporate LLM' },
    { icon: Phone, label: 'AI Call Agent' },
    { icon: Mail, label: 'AI Email Support' },
    { icon: Globe, label: 'AI Web Presence' },
  ];

  const resourcesMenu = [
    { icon: FileText, label: 'News Releases' },
    { icon: DollarSign, label: 'Financial Statements' },
    { icon: File, label: 'AGM Materials' },
    { icon: File, label: 'Governance Documents' },
    { icon: Presentation, label: 'Investor Presentation' },
  ];

  const investorsMenu = [
    { icon: TrendingUp, label: 'Why Invest' },
    { icon: FileText, label: 'News Releases' },
    { icon: Building2, label: 'Corporate Governance' },
    { icon: Users, label: 'Management & Directors' },
    { icon: PieChart, label: 'Share Capital / Capital Structure' },
    { icon: LineChart, label: 'Investor Relations' },
  ];

  return (
    <nav className="relative z-50 px-6 py-6">
      <div className="mx-auto max-w-6xl">
        <div className="outline-gradient rounded-xl bg-black/60 backdrop-blur-xl px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 md:gap-4">
              <div className="relative w-24 h-8 md:w-32 md:h-10">
                <Image
                  src="/fobi.png"
                  alt="fobi"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex gap-2">
                <div className="flex items-center gap-1.5 rounded-full bg-white/5 border border-white/20 px-3 py-1 md:px-4 md:py-1.5">
                  <span className="text-base md:text-lg">🇺🇸</span>
                  <span className="text-xs md:text-sm font-medium text-white">FOBIF</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white/5 border border-white/20 px-3 py-1 md:px-4 md:py-1.5">
                  <span className="text-base md:text-lg">🇨🇦</span>
                  <span className="text-xs md:text-sm font-medium text-white">FOBI</span>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden items-center gap-8 md:flex">
              <div className="relative group"
                onMouseEnter={() => setOpenDropdown('solutions')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition py-2">
                  Our Solutions <ChevronDown size={14} />
                </button>
                {openDropdown === 'solutions' && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-64 rounded-xl bg-zinc-900/95 backdrop-blur-xl border border-white/10 p-3 shadow-2xl">
                      {/* <p className="text-xs text-white/40 mb-3 px-3">Menu: Our Solutions</p> */}
                      <div className="space-y-1">
                        {solutionsMenu.map((item, idx) => (
                          <button
                            key={idx}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70 hover:bg-white/5 hover:text-white transition group"
                          >
                            <item.icon className="w-4 h-4 text-blue-500" />
                            <span>{item.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative group"
                onMouseEnter={() => setOpenDropdown('resources')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition py-2">
                  Resources <ChevronDown size={14} />
                </button>
                {openDropdown === 'resources' && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-64 rounded-xl bg-zinc-900/95 backdrop-blur-xl border border-white/10 p-3 shadow-2xl">
                      {/* <p className="text-xs text-white/40 mb-3 px-3">Menu: Resources</p> */}
                      <div className="space-y-1">
                        {resourcesMenu.map((item, idx) => (
                          <button
                            key={idx}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70 hover:bg-white/5 hover:text-white transition group"
                          >
                            <item.icon className="w-4 h-4 text-blue-500" />
                            <span>{item.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative group"
                onMouseEnter={() => setOpenDropdown('investors')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition py-2">
                  Investors <ChevronDown size={14} />
                </button>
                {openDropdown === 'investors' && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-72 rounded-xl bg-zinc-900/95 backdrop-blur-xl border border-white/10 p-3 shadow-2xl">
                      {/* <p className="text-xs text-white/40 mb-3 px-3">Menu: Investors</p> */}
                      <div className="space-y-1">
                        {investorsMenu.map((item, idx) => (
                          <button
                            key={idx}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70 hover:bg-white/5 hover:text-white transition group"
                          >
                            <item.icon className="w-4 h-4 text-blue-500" />
                            <span>{item.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button className="text-sm font-medium text-white/80 hover:text-white transition">About Us</button>
              <button className="outline-gradient rounded-lg px-6 py-2 text-sm font-medium text-white hover:bg-white/5 transition">
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.875 20.25C17.4963 20.25 18 20.7537 18 21.375C18 21.9963 17.4963 22.5 16.875 22.5H6.75C6.12868 22.5 5.625 21.9963 5.625 21.375C5.625 20.7537 6.12868 20.25 6.75 20.25H16.875ZM22.5 12.375C23.1213 12.375 23.625 12.8787 23.625 13.5C23.625 14.1213 23.1213 14.625 22.5 14.625H4.5C3.87868 14.625 3.375 14.1213 3.375 13.5C3.375 12.8787 3.87868 12.375 4.5 12.375H22.5ZM20.25 4.5C20.8713 4.5 21.375 5.00368 21.375 5.625C21.375 6.24632 20.8713 6.75 20.25 6.75H10.125C9.50368 6.75 9 6.24632 9 5.625C9 5.00368 9.50368 4.5 10.125 4.5H20.25Z" fill="white"/>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4 md:hidden">
              {/* Our Solutions Accordion */}
              <div>
                <button
                  className="w-full flex items-center justify-between text-left text-sm font-medium text-white/80 hover:text-white transition py-2"
                  onClick={() => setMobileAccordion(mobileAccordion === 'solutions' ? null : 'solutions')}
                >
                  Our Solutions
                  <ChevronDown size={16} className={`transition-transform ${mobileAccordion === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'solutions' && (
                  <div className="mt-2 space-y-1 pl-4">
                    {solutionsMenu.map((item, idx) => (
                      <button
                        key={idx}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70 hover:bg-white/5 hover:text-white transition"
                      >
                        <item.icon className="w-4 h-4 text-blue-500" />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Accordion */}
              <div>
                <button
                  className="w-full flex items-center justify-between text-left text-sm font-medium text-white/80 hover:text-white transition py-2"
                  onClick={() => setMobileAccordion(mobileAccordion === 'resources' ? null : 'resources')}
                >
                  Resources
                  <ChevronDown size={16} className={`transition-transform ${mobileAccordion === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'resources' && (
                  <div className="mt-2 space-y-1 pl-4">
                    {resourcesMenu.map((item, idx) => (
                      <button
                        key={idx}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70 hover:bg-white/5 hover:text-white transition"
                      >
                        <item.icon className="w-4 h-4 text-blue-500" />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Investors Accordion */}
              <div>
                <button
                  className="w-full flex items-center justify-between text-left text-sm font-medium text-white/80 hover:text-white transition py-2"
                  onClick={() => setMobileAccordion(mobileAccordion === 'investors' ? null : 'investors')}
                >
                  Investors
                  <ChevronDown size={16} className={`transition-transform ${mobileAccordion === 'investors' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'investors' && (
                  <div className="mt-2 space-y-1 pl-4">
                    {investorsMenu.map((item, idx) => (
                      <button
                        key={idx}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70 hover:bg-white/5 hover:text-white transition"
                      >
                        <item.icon className="w-4 h-4 text-blue-500" />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* About Us */}
              <button className="text-left text-sm font-medium text-white/80 hover:text-white transition py-2">
                About Us
              </button>

              {/* Contact Us */}
              <button className="outline-gradient rounded-lg px-6 py-2 text-sm font-medium text-white hover:bg-white/5 transition mt-2">
                Contact Us
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
