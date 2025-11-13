import Image from "next/image";
import { Linkedin } from "lucide-react";

const leaders = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/team/placeholder.jpg",
    bio: "Former VP of AI at a Fortune 500 company. Led teams that deployed AI solutions generating $500M+ in value. Stanford CS, MIT AI.",
    linkedin: "#"
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/team/placeholder.jpg",
    bio: "Over 15 years of CTO experience building enterprise AI platforms. Previously led engineering at major tech companies.",
    linkedin: "#"
  },
  {
    name: "Michael Chen",
    role: "Head of AI Research",
    image: "/team/placeholder.jpg",
    bio: "Published AI researcher with 50+ papers. PhD from MIT. Previously at Google AI and OpenAI research teams.",
    linkedin: "#"
  },
  {
    name: "Sarah Johnson",
    role: "VP of Strategy",
    image: "/team/placeholder.jpg",
    bio: "Ex-McKinsey partner specializing in AI transformation. Advised Fortune 100 companies on digital strategy.",
    linkedin: "#"
  }
];

export default function LeadershipSection() {
  return (
    <section className="relative py-16 md:py-24 bg-black">
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
              className="group relative flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/10" />
                </div>
              </div>

              {/* Name & Role */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                {leader.name}
              </h3>
              <p className="text-sm md:text-base text-blue-400 mb-3">
                {leader.role}
              </p>

              {/* Bio */}
              <p className="text-sm text-white/60 leading-relaxed mb-4 max-w-xs">
                {leader.bio}
              </p>

              {/* LinkedIn */}
              <a
                href={leader.linkedin}
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>Connect</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
