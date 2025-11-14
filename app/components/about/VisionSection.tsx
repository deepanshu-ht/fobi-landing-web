import { Target } from "lucide-react";
import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="relative py-16 md:py-24 bg-black">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-5 md:mx-auto max-w-7xl px-4 md:px-8 text-center bg-[#0A0A0A] py-10 md:py-16 rounded-xl border border-[#4A5D82]/20">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#131F3F] border border-[#131F3F]/20 mb-6 p-5">
          <Image
            src={"/fobiicon.png"}
            alt="Fobi Icon"
            width={50}
            height={50}
          />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Our Vision
        </h2>
        
        <span className="text-lg font-bold md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
          To become the world's leading AI-native consulting and <br className="hidden md:block"/>implementation platform, 
          transforming enterprise <br className="hidden md:block"/> potential into tangible performance
        </span>
      </div>
    </section>
  );
}
