// 'use client';

import Image from 'next/image';

type StatsItem = {
  value: string;
  label: string;
  description: string;
};

type Props = {
  title: string;
  subtitle: string;
  badgeSrc: string;
  items: StatsItem[];
  className?: string;
};

export default function StatsShowcase({ title, subtitle, badgeSrc, items, className = '' }: Props) {
  const leftItems = [items[0], items[2]].filter(Boolean);
  const rightItems = [items[1], items[3]].filter(Boolean);

  return (
    <section className={`relative pt-20 md:pt-28 overflow-hidden bg-black ${className}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_center_top,rgba(255,255,255,0.06),transparent)]" />
        {/* Blue glow effect - center blur ball */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[300px] h-[200px] md:w-[500px] md:h-[300px] bg-blue-600/25 rounded-full blur-[120px] md:blur-[150px]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-16">
        <div className="text-center space-y-3 md:space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <div className="inline-flex items-center rounded-full bg-[#316BFF] px-3 py-1 ring-1 ring-white/20">
              <div className="relative h-5 w-12 md:h-5 md:w-12">
                <Image src={badgeSrc} alt="badge" fill className="object-contain" />
              </div>
            </div>
            <h2 className="min-w-0 text-[24px] sm:text-[26px] md:text-[44px] leading-tight font-semibold tracking-[-0.01em] text-white">
              {title}
            </h2>
          </div>
          <p className="text-sm md:text-3xl text-white/70 font-semibold">{subtitle}</p>
        </div>

        <div className="relative min-h-[520px] md:min-h-[560px] -mx-10">
          <div className="relative z-10 flex justify-center gap-1 md:gap-4 pt-6 md:pt-8">
            <div className='flex flex-col gap-3 md:gap-4 ml-0 md:-ml-36 w-[10%] md:w-81'>
              <div className='mt-4 md:mt-8 h-[128px] md:h-42 w-full md:w-81 rounded-xl bg-[radial-gradient(120%_120%_at_110%_100%,rgba(227,236,242,0.16)_0%,rgba(227,236,242,0)_60%)]'/>
              <div className='h-[128px] md:h-42 w-full md:w-81 rounded-xl bg-[radial-gradient(120%_120%_at_110%_50%,rgba(227,236,242,0.14)_0%,rgba(227,236,242,0)_60%)]'/>
              <div className='h-[128px] md:h-42 w-full md:w-81 rounded-xl bg-[radial-gradient(120%_120%_at_110%_0%,rgba(227,236,242,0.16)_0%,rgba(227,236,242,0)_60%)]'/>
            </div>
            <div className='flex flex-col gap-3 md:gap-4 w-[38%] md:w-81'>
              <div className='-mt-4 md:-mt-8 h-[128px] md:h-42 w-full md:w-81 rounded-xl bg-[radial-gradient(120%_140%_at_50%_120%,rgba(227,236,242,0.14)_0%,rgba(227,236,242,0)_60%)]'/>
              {leftItems[0] && (
                <div className='font-[family-name:var(--font-plus-jakarta-sans)] w-full md:w-81 rounded-xl bg-zinc-900/70 backdrop-blur-xl border border-white/10 px-4 py-3 md:p-6'>
                  <div className='bg-gradient-to-t from-[#397BFF] to-[#0F51FF] text-transparent bg-clip-text text-xl sm:text-3xl md:text-4xl font-extrabold'>{leftItems[0].value}</div>
                  <div className='text-white font-bold'>{leftItems[0].label}</div>
                  <p className='text-white/70 text-[10px] md:text-sm'>{leftItems[0].description}</p>
                </div>
              )}
              {leftItems[1] && (
                <div className='font-[family-name:var(--font-plus-jakarta-sans)] w-full md:w-81 rounded-xl bg-zinc-900/70 backdrop-blur-xl border border-white/10 px-4 py-3 md:p-6'>
                  <div className='bg-gradient-to-t from-[#397BFF] to-[#0F51FF] text-transparent bg-clip-text text-xl sm:text-3xl md:text-4xl font-extrabold'>{leftItems[1].value}</div>
                  <div className='text-white font-bold'>{leftItems[1].label}</div>
                  <p className='text-white/70 text-[10px] md:text-sm'>{leftItems[1].description}</p>
                </div>
              )}
              <div className='h-[128px] md:h-42 w-full md:w-81 rounded-xl bg-[radial-gradient(120%_140%_at_50%_-20%,rgba(227,236,242,0.14)_0%,rgba(227,236,242,0)_60%)]'/>
            </div>
            <div className='flex flex-col gap-3 md:gap-4 w-[39%] md:w-81'>
              <div className='md:-mt-24 h-[128px] md:h-42 w-full md:w-81 rounded-xl bg-[radial-gradient(120%_140%_at_50%_120%,rgba(227,236,242,0.16)_0%,rgba(227,236,242,0)_60%)]'/>
              {rightItems[0] && (
                <div className='font-[family-name:var(--font-plus-jakarta-sans)] w-full md:w-81 rounded-xl bg-zinc-900/70 backdrop-blur-xl border border-white/10 px-4 py-3 md:p-6'>
                  <div className='bg-gradient-to-t from-[#397BFF] to-[#0F51FF] text-transparent bg-clip-text text-xl sm:text-3xl md:text-4xl font-extrabold'>{rightItems[0].value}</div>
                  <div className='text-white font-bold'>{rightItems[0].label}</div>
                  <p className='text-white/70 text-[10px] md:text-sm'>{rightItems[0].description}</p>
                </div>
              )}
              {rightItems[1] && (
                <div className='font-[family-name:var(--font-plus-jakarta-sans)] w-full md:w-81 rounded-xl bg-zinc-900/70 backdrop-blur-xl border border-white/10 px-4 py-3 md:p-6'>
                  <div className='bg-gradient-to-t from-[#397BFF] to-[#0F51FF] text-transparent bg-clip-text text-xl sm:text-3xl md:text-4xl font-extrabold'>{rightItems[1].value}</div>
                  <div className='text-white font-bold'>{rightItems[1].label}</div>
                  <p className='text-white/70 text-[10px] md:text-sm'>{rightItems[1].description}</p>
                </div>
              )}
              <div className='h-[128px] md:h-42 w-full md:w-81 rounded-xl bg-[radial-gradient(120%_140%_at_50%_-20%,rgba(227,236,242,0.16)_0%,rgba(227,236,242,0)_60%)]'/>
            </div>
            <div className='flex flex-col gap-3 md:gap-4 w-[10%] md:w-81'>
              <div className='mt-4 md:mt-8 h-[128px] md:h-42 w-full md:w-81 rounded-xl bg-[radial-gradient(120%_120%_at_-10%_100%,rgba(227,236,242,0.16)_0%,rgba(227,236,242,0)_60%)]'/>
              <div className='h-[128px] md:h-42 w-full md:w-81 rounded-xl bg-[radial-gradient(120%_120%_at_-10%_50%,rgba(227,236,242,0.14)_0%,rgba(227,236,242,0)_60%)]'/>
              <div className='h-[128px] md:h-42 w-full md:w-81 rounded-xl bg-[radial-gradient(120%_120%_at_-10%_0%,rgba(227,236,242,0.16)_0%,rgba(227,236,242,0)_60%)]'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
