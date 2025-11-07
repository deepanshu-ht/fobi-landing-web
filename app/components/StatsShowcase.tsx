'use client';

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
    <section className={`relative py-20 md:py-28 overflow-hidden ${className}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_center_top,rgba(255,255,255,0.06),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-16">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center rounded-full bg-[#316BFF] px-3 py-1 ring-1 ring-white/20">
            <div className="relative h-4 w-10 md:h-5 md:w-12">
              <Image src={badgeSrc} alt="badge" fill className="object-contain" />
            </div>
          </div>
          <h2 className="text-[22px] leading-tight md:text-[34px] font-semibold tracking-[-0.01em] text-white">
            {title}
          </h2>
          <p className="text-sm md:text-base text-white/70 font-semibold">{subtitle}</p>
        </div>

        <div className="relative mt-10 md:mt-14 min-h-[520px] md:min-h-[560px]">
          <div className="relative z-10 flex gap-4 pt-8">
            <div className='flex flex-col gap-4 -ml-36'>
              <div className='mt-8 h-42 w-81 rounded-xl bg-[radial-gradient(120%_120%_at_110%_100%,rgba(227,236,242,0.16)_0%,rgba(227,236,242,0)_60%)]'/>
              <div className='h-42 w-81 rounded-xl bg-[radial-gradient(120%_120%_at_110%_50%,rgba(227,236,242,0.14)_0%,rgba(227,236,242,0)_60%)]'/>
              <div className='h-42 w-81 rounded-xl bg-[radial-gradient(120%_120%_at_110%_0%,rgba(227,236,242,0.16)_0%,rgba(227,236,242,0)_60%)]'/>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='-mt-8 h-42 w-81 rounded-xl bg-[radial-gradient(120%_140%_at_50%_120%,rgba(227,236,242,0.14)_0%,rgba(227,236,242,0)_60%)]'/>
              {leftItems[0] && (
                <div className='w-81 rounded-xl bg-zinc-900/70 backdrop-blur-xl border border-white/10 p-6'>
                  <div className='bg-gradient-to-t from-[#397BFF] to-[#0F51FF] text-transparent bg-clip-text text-3xl md:text-4xl font-extrabold'>{leftItems[0].value}</div>
                  <div className='text-white font-semibold mt-1'>{leftItems[0].label}</div>
                  <p className='text-white/70 text-sm mt-2'>{leftItems[0].description}</p>
                </div>
              )}
              {leftItems[1] && (
                <div className='w-81 rounded-xl bg-zinc-900/70 backdrop-blur-xl border border-white/10 p-6'>
                  <div className='bg-gradient-to-t from-[#397BFF] to-[#0F51FF] text-transparent bg-clip-text text-3xl md:text-4xl font-extrabold'>{leftItems[1].value}</div>
                  <div className='text-white font-semibold mt-1'>{leftItems[1].label}</div>
                  <p className='text-white/70 text-sm mt-2'>{leftItems[1].description}</p>
                </div>
              )}
              <div className='h-42 w-81 rounded-xl bg-[radial-gradient(120%_140%_at_50%_-20%,rgba(227,236,242,0.14)_0%,rgba(227,236,242,0)_60%)]'/>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='-mt-24 h-42 w-81 rounded-xl bg-[radial-gradient(120%_140%_at_50%_120%,rgba(227,236,242,0.16)_0%,rgba(227,236,242,0)_60%)]'/>
              {rightItems[0] && (
                <div className='w-81 rounded-xl bg-zinc-900/70 backdrop-blur-xl border border-white/10 p-6'>
                  <div className='bg-gradient-to-t from-[#397BFF] to-[#0F51FF] text-transparent bg-clip-text text-3xl md:text-4xl font-extrabold'>{rightItems[0].value}</div>
                  <div className='text-white font-semibold mt-1'>{rightItems[0].label}</div>
                  <p className='text-white/70 text-sm mt-2'>{rightItems[0].description}</p>
                </div>
              )}
              {rightItems[1] && (
                <div className='w-81 rounded-xl bg-zinc-900/70 backdrop-blur-xl border border-white/10 p-6'>
                  <div className='bg-gradient-to-t from-[#397BFF] to-[#0F51FF] text-transparent bg-clip-text text-3xl md:text-4xl font-extrabold'>{rightItems[1].value}</div>
                  <div className='text-white font-semibold mt-1'>{rightItems[1].label}</div>
                  <p className='text-white/70 text-sm mt-2'>{rightItems[1].description}</p>
                </div>
              )}
              <div className='h-42 w-81 rounded-xl bg-[radial-gradient(120%_140%_at_50%_-20%,rgba(227,236,242,0.16)_0%,rgba(227,236,242,0)_60%)]'/>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='mt-8 h-42 w-81 rounded-xl bg-[radial-gradient(120%_120%_at_-10%_100%,rgba(227,236,242,0.16)_0%,rgba(227,236,242,0)_60%)]'/>
              <div className='h-42 w-81 rounded-xl bg-[radial-gradient(120%_120%_at_-10%_50%,rgba(227,236,242,0.14)_0%,rgba(227,236,242,0)_60%)]'/>
              <div className='h-42 w-81 rounded-xl bg-[radial-gradient(120%_120%_at_-10%_0%,rgba(227,236,242,0.16)_0%,rgba(227,236,242,0)_60%)]'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
