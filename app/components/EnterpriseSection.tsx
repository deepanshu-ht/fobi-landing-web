// 'use client';

import Marquee from 'react-fast-marquee';
import Image from 'next/image';

export default function EnterpriseSection() {
  const enterprises = [
    { name: 'Stripe', logo: '/enterprise/stripe.png' },
    { name: 'NCAA', logo: '/enterprise/ncaa.png' },
    { name: 'Telus', logo: '/enterprise/telus.png' },
    { name: 'Oscars', logo: '/enterprise/oscars.png' },
  ];

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Trusted by Enterprises Worldwide
          </h2>
          <p className="text-gray-400 text-lg">
            Stay Ahead in Today's Mobile & AI Landscape
          </p>
        </div>

        {/* Marquee Container */}
        <div className='w-full overflow-hidden'>
          <div className="relative overflow-hidden -mx-20">
            <Marquee gradient gradientColor="#000000" speed={60} pauseOnHover autoFill>
              {enterprises.map((enterprise) => (
                <div
                  key={enterprise.name}
                  className="flex items-center justify-center mx-4 md:mx-4 opacity-50"
                >
                  <Image
                    src={enterprise.logo}
                    alt={enterprise.name}
                    width={150}
                    height={80}
                    className="h-12 md:h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <div className='ml-8 w-px h-12 bg-white/30'></div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
