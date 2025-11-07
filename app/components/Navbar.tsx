'use client';

import { ChevronDown, Menu, X, Wallet, Database, Building2, Phone, Mail, Globe, FileText, DollarSign, File, Presentation, TrendingUp, BarChart3, Users, PieChart, LineChart } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
        <div className="outline-gradient rounded-[18px] bg-black/60 backdrop-blur-xl px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold text-white">fobi</span>
              </div>
              <div className="flex gap-2">
                <span className="rounded px-2 py-1 text-xs font-semibold bg-red-600/80 text-white border border-red-500/50">FOBI</span>
                <span className="rounded px-2 py-1 text-xs font-semibold bg-red-600/80 text-white border border-red-500/50">FOBI</span>
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
              <button className="outline-gradient rounded-[18px] px-6 py-2 text-sm font-medium text-white hover:bg-white/5 transition">
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="mt-4 flex flex-col gap-4 border-t border-white/10 pt-4 md:hidden">
              <button className="text-left text-sm font-medium text-white/80 hover:text-white transition">
                Our Solutions
              </button>
              <button className="text-left text-sm font-medium text-white/80 hover:text-white transition">
                Resources
              </button>
              <button className="text-left text-sm font-medium text-white/80 hover:text-white transition">
                Investors
              </button>
              <button className="text-left text-sm font-medium text-white/80 hover:text-white transition">
                About Us
              </button>
              <button className="rounded-lg border border-white/30 px-6 py-2 text-sm font-medium text-white hover:bg-white/10 transition">
                Contact Us
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
