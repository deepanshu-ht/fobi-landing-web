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
    <section className="relative py-16 md:py-24 bg-black">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by Global Leaders
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto">
            Powering innovation for leading brands across retail, entertainment, and hospitality
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 w-full opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-white/80 text-sm md:text-base font-semibold text-center">
                {company.logo}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="mt-16 text-center">
          <p className="text-sm md:text-base text-white/70 max-w-4xl mx-auto leading-relaxed">
            Our partners help prove our ability to deliver measurable ROI at scale, 
            across sectors where precision, compliance, and speed are critical
          </p>
        </div>
      </div>
    </section>
  );
}
