import Image from "next/image";

const leaders = [
  {
    name: "Rob Anson",
    role: "CEO & Chairman",
    image: "/team/rob.png",
    bio: "Founder and visionary behind Fobi AI, with over a decade of global product development experience for Walmart, Amazon, and Home Depot."
  },
  {
    name: "Gavin Lee",
    role: "COO",
    image: "/team/gavin.png",
    bio: "Over 15 years of experience in business development, operations, and retail analytics. A results-driven operator focused on scalable growth."
  },
  {
    name: "Uddeshya Agrawal",
    role: "CTO",
    image: "/team/ua.png",
    bio: "Visionary in AI, Web3, cybersecurity, and quantum computing, leading technology architecture and strategic partnerships."
  },
  {
    name: "Mehul Dabhi",
    role: "Creative Director",
    image: "/team/mehul.png",
    bio: "Expert in design-led brand strategy, combining creative storytelling with data-driven decision-making."
  }
];

export default function LeadershipSection() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Leadership Team
          </h2>
          <p className="text-base md:text-lg text-white/60">
            Experienced visionaries driving innovation
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center bg-[#070709] rounded-3xl border border-white/10 px-6 py-8 md:px-8 md:py-10 shadow-[0_18px_60px_rgba(0,0,0,0.6)]"
            >
              {/* Image */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 mb-5 rounded-full overflow-hidden border border-white/15 bg-gradient-to-br from-white/10 to-white/0 flex items-center justify-center">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover grayscale"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                {leader.name}
              </h3>
              <p className="text-xs md:text-sm text-blue-400 mb-4 font-semibold">
                {leader.role}
              </p>

              {/* Bio */}
              <p className="text-xs md:text-sm text-white/70 leading-relaxed max-w-xs">
                {leader.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Board of Directors */}
        <div className="mt-20 md:mt-24">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              Board of Directors
            </h2>
            <p className="text-base md:text-lg text-white/60">
              Meet our Board of Directors
            </p>
          </div>

          <div className="space-y-8 md:space-y-10 relative">
            {/* Top Board Card - Rob */}
            <div className="relative bg-[#050506] border border-white/10 rounded-3xl px-6 py-8 md:px-10 md:py-10 shadow-[0_24px_80px_rgba(0,0,0,0.7)] bg-black">
              <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-8">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-white/15 flex-shrink-0">
                  <Image
                    src="/team/rob.png"
                    alt="Rob Anson"
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Rob Anson
                  </h3>
                  <p className="text-sm md:text-base text-[#3B82F6] font-semibold mb-3">
                    CEO & Chairman
                  </p>
                  <ul className="list-disc list-outside text-sm md:text-base text-white/80 space-y-1 md:space-y-1.5 pl-5">
                    <li>Founder, Chairman, and CEO of Fobi Suite Technologies</li>
                    <li>Founder and CEO of One Team Media</li>
                    <li>10+ years global strategic product development</li>
                    <li>Experience with Walmart, Amazon, Home Depot and others</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute top-1/4 left-1/4 h-1/2 w-1/2 bg-[#0047FF]/50 rounded-full blur-[150px] -z-10">

            </div>

            {/* Bottom Row - Peter & Jeff */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Peter */}
              <div className="relative bg-[#050506] border border-white/10 rounded-3xl px-6 py-8 md:px-8 md:py-8 shadow-[0_20px_70px_rgba(0,0,0,0.7)]">
                <div className="flex items-start gap-6">
                  <div className="relative w-20 h-20 md:w-22 md:h-22 rounded-full overflow-hidden border border-white/15 flex-shrink-0">
                    <Image
                      src="/team/peter.png"
                      alt="Peter Green"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      Peter Green
                    </h3>
                    <p className="text-sm text-[#3B82F6] font-semibold mb-3">
                      Director
                    </p>
                    <ul className="list-disc list-outside text-sm text-white/80 space-y-1 pl-5">
                      <li>Founder, Chairman, and CEO of Fobi Suite Technologies</li>
                      <li>Founder and CEO of One Team Media</li>
                      <li>10+ years global strategic product development</li>
                      <li>Experience with Walmart, Amazon, Home Depot and others</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Jeff */}
              <div className="relative bg-[#050506] border border-white/10 rounded-3xl px-6 py-8 md:px-8 md:py-8 shadow-[0_20px_70px_rgba(0,0,0,0.7)]">
                <div className="flex items-start gap-6">
                  <div className="relative w-20 h-20 md:w-22 md:h-22 rounded-full overflow-hidden border border-white/15 flex-shrink-0">
                    <Image
                      src="/team/jeff.png"
                      alt="Jeff Hyman"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      Jeff Hyman
                    </h3>
                    <p className="text-sm text-[#3B82F6] font-semibold mb-3">
                      Director
                    </p>
                    <ul className="list-disc list-outside text-sm text-white/80 space-y-1 pl-5">
                      <li>20+ years of experience in Wall Street investment banking and financial advisory</li>
                      <li>Expertise across hospitality, entertainment, casino and gaming</li>
                      <li>Experience with destination and resort, and city infrastructure projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
