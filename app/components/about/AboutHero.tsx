import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] bg-gradient-to-b from-[#0A1628] to-black overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/aboutbg.png"
          alt="About Background"
          fill
          className="object-cover opacity-40 scale-x-[-1]"
          priority
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-black to-transparent">

      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          About Fobi AI
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
          A new era of AI-native consulting—where legacy consulting firms sell tactics, 
          we deliver systems. Fobi AI designs strategy, architecture, and execution 
          starting with outcomes, not features or platforms.
        </p>
      </div>
    </section>
  );
}
