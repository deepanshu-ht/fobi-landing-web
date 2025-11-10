import Image from 'next/image';

export default function WalletPassesSection() {
  return (
    <section className="relative bg-black py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-blue-900/10 to-black" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight">
            Fobi Digital Wallet Platform
          </h2>
          <p className="text-base md:text-xl text-gray-400 px-4">
            Capturing the 2B+ smartphone engagement layer
          </p>
        </div>

        {/* Wallet Passes Image */}
        <div className="relative">
          {/* Blue glow effect */}
          <div className="absolute flex items-center justify-center top-0 left-0">
            <div className="w-[500px] h-[100px] md:w-[800px] md:h-[400px] bg-blue-600/30 rounded-full blur-[100px] md:blur-[120px]" />
          </div>
          
          <div className="relative w-full max-w-5xl mx-auto h-84 md:h-[600px]">
            <Image
              src="/wpasses.png"
              alt="Digital Wallet Passes"
              fill
              className="object-contain object-center scale-110 md:scale-100"
              priority
            />
            {/* Bottom fade gradient */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none -mx-20" />
          </div>
        </div>

        {/* Feature Text */}
        <div className="text-center space-y-2 md:space-y-3">
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            Wallet passes.
          </h3>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            Ticketing.
          </h3>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-b from-white to-transparent via-white/70 bg-clip-text text-transparent">
            Web3 infrastructure.
          </h3>
        </div>
      </div>
    </section>
  );
}
