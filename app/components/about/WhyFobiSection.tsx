import { Zap, Users, Rocket, LineChart, Check } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Built AI-Native from Day One",
    description: "We don't retrofit AI into outdated workflows. Every solution is designed from the ground up to leverage AI's full potential, ensuring seamless integration and maximum impact."
  },
  {
    icon: Users,
    title: "Speed-to-Use Mindset",
    description: "We prioritize rapid deployment and immediate value. Our solutions are built for quick implementation, allowing you to see results in weeks, not months."
  },
  {
    icon: Rocket,
    title: "Fast-to-Extraordinary",
    description: "We don't just deliver good—we deliver exceptional. Our team pushes boundaries to create AI solutions that transform businesses and set new industry standards."
  },
  {
    icon: LineChart,
    title: "Proven Technology Stack",
    description: "Powered by industry-leading AI models and infrastructure, our solutions are built on proven, scalable technology that delivers consistent results across sectors."
  }
];

export default function WhyFobiSection() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-1/4 bg-[#0047FF]/50 rounded-full blur-[150px] z-0" />
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-2xl lg:text-5xl font-semibold text-white mb-4">
            Why Fobi AI
          </h2>
          <p className="text-3xl font-bold md:text-2xl text-white/60">
            Four pillars that set us apart
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group flex relative py-6 md:py-8 pr-6 pl-3 rounded-2xl bg-black border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="bg-blue-500 h-4 w-4 rounded-full flex items-center justify-center mx-4 px-1 mt-2">
                <Check className="text-white" />
              </div>
              <div>
                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
