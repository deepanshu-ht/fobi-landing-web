import Image from 'next/image';

export default function WalletPassesSection() {
  return (
    <section className="relative bg-black py-20 md:py-16 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-white mb-3 md:mb-4 leading-tight">
            Fobi Digital Wallet Platform
          </h2>
          <p className="text-base md:text-3xl text-white/80 px-4 font-semibold">
            Capturing the 2B+ smartphone engagement layer
          </p>
        </div>

        {/* Wallet Passes Image */}
        <div className="relative">
          {/* Blue glow effect */}
          <div className="absolute flex items-center justify-center top-32 left-0 justify-center w-full  ">
            <div className="w-[500px] h-[100px] md:w-[800px] md:h-[400px] bg-blue-600/30 rounded-full blur-[100px] md:blur-[120px]" />
          </div>
          
          <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] -mt-28 md:-mt-40">
            <Image
              src="/wpasses.png"
              alt="Digital Wallet Passes"
              fill
              className="object-contain object-bottom"
              priority
            />
            {/* Gradient fade-out overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% via-transparent via-60% to-black pointer-events-none -mb-2" />
          </div>
        </div>

        {/* Feature Text */}
        <div className="text-center space-y-2 md:space-y-3">
          <h3 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-[#D9D9D9]">
            Wallet passes.
          </h3>
          <h3 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-[#D9D9D9]">
            Ticketing.
          </h3>
          <h3 className="text-4xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-b from-white to-transparent via-white/70 bg-clip-text text-transparent">
            Web3 infrastructure.
          </h3>
        </div>
      </div>
    </section>
  );
}
