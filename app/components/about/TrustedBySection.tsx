import Image from "next/image";

const companies = [
  { name: "OSCARS", logo: "OSCARS" },
  { name: "Nasdaq", logo: "Nasdaq" },
  { name: "TELUS", logo: "TELUS" },
  { name: "NCAA", logo: "NCAA" },
  { name: "PGA", logo: "PGA" },
  { name: "MGM Resorts", logo: "MGM RESORTS" },
  { name: "Charles Schwab", logo: "Charles Schwab" },
  { name: "AWS", logo: "AWS" },
  { name: "Bayer", logo: "Bayer" },
  { name: "Ernst Technologies", logo: "Ernst Technologies" },
  { name: "NTT DATA", logo: "NTT DATA" },
  { name: "Nasdaq", logo: "Nasdaq" },
  { name: "BevWorks", logo: "BevWorks" },
  { name: "Compugen", logo: "Compugen" },
  { name: "Square", logo: "Square" },
  { name: "Lightspeed", logo: "Lightspeed" },
  { name: "Shopify", logo: "Shopify" },
];

export default function TrustedBySection() {
  return (
    <section className="relative py-16 md:py-24 mt-16">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none w-full h-full">
        <div className="flex w-full -z-10 justify-center">
          <Image
            src={"/Earth.png"}
            alt="Earth"
            width={1000}
            height={1000}
            className="-rotate-55 w-4/5 h-full opacity-70"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4 font-semibold">
            Trusted by Global Leaders
          </h2>
          <p className="text-base md:text-xl text-white/60 max-w-xl mx-auto font-bold">
            Powering innovation for leading brands across retail, entertainment, and hospitality
          </p>
        </div>

        {/* Logo Grid */}
        <div className="flex justify-center">
          <Image
            src={"/trusted.jpeg"}
            alt="Trusted By"
            width={1000}
            height={1000}
            className="w-3/4 h-full rounded-xl"
          />
        </div>

        {/* Bottom text */}
        <div className="mt-16 text-center">
          <p className="text-sm md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-bold">
            Our partners help prove our ability to deliver measurable ROI at scale, 
            across sectors where precision, compliance, and speed are critical
          </p>
        </div>
      </div>
    </section>
  );
}
