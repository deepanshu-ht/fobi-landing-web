"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  title: string;
  description: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    title: "Amazing collaborators and implementers",
    description:
      "The queue at the scanning devices was much shorter than in previous years so the digital ticket scanning worked very smoothly. The Fobi team were great to work with on this project and were amazing collaborators and implementers",
    name: "Bev Kite",
    role: "CIO, The Academy of Motion Picture Arts and Sciences",
    image: "/testimonial/bev.png",
  },
  {
    title: "Partnering with Fobi has been a game changer for Tbird",
    description:
      "Their expertise in integrating digital tickets and mobile wallet passes has transformed our event operations. From streamlining ticketing and enhancing security to leveraging personalized promotional passes and real-time updates, Fobi has delivered exceptional value. Their strategic approach has not only improved our sales, marketing, and operations but also significantly enhanced the overall attendee experience. We couldn't be more pleased with the results.",
    name: "David Lee",
    role: "CEO of Thunderbird Show Park",
    image: "/testimonial/david.png",
  },
  {
    title: "We'll definitely be using Fobi for all our future events",
    description:
      "Our experience using Fobi for Ugly Potato Day was excellent. Their ticketing system worked flawlessly and brought a level of organization that was vastly compared to past years. The team was fantastic to work with, responsive, and genuinely cared about making our event successful. Thanks to Fobi, what could have been chaos turned into a smooth well-run experience for over 20,000 attendees. We'll definitely be using Fobi for all our future events",
    name: "Tyler Heppell",
    role: "Founder & Organizer of Ugly Potato Day",
    image: "/testimonial/tyler.png",
  },
  {
    title: "I'm really amazed at the engagement capabilities of Fobi's ticketing solution",
    description:
      "I'm looking forward to using it for our upcoming concerts and communicating with my fans. It's going to be a game changer",
    name: "Aaron Pritchett",
    role: "Canadian country singer and Co-Founder of Big Wheel Fund",
    image: "/testimonial/aaron.png",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-16 md:py-24 px-6 md:px-16 bg-black overflow-hidden">
      {/* Blue glow effect - left side blur ball */}
      <div className="absolute -left-36 top-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[400px] h-[300px] md:w-[600px] md:h-[500px] bg-blue-600/20 rounded-full blur-[100px] md:blur-[120px]" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">
            They Needed Proof, Not Promises
          </h2>
          <p className="text-lg md:text-2xl text-gray-400 font-bold">
            From Hollywood to horse parks, they chose execution over promises
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 h-full my-auto px-2">
                  <div className="group relative rounded-2xl border border-white/20 bg-black p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-300 flex flex-col">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white leading-tight mb-4">
                        {testimonial.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                        {testimonial.description}
                      </p>

                      {/* Author - stays at bottom */}
                      <div className="flex items-center gap-4 pt-6 mt-6">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{testimonial.name}</p>
                          <p className="text-xs text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-blue-500 w-8"
                    : "bg-white/20 w-2 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/20 bg-black p-8 md:p-10 backdrop-blur-sm hover:border-white/30 transition-all duration-300 flex flex-col"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-4">
                  {testimonial.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-[#D8D8D8] leading-relaxed flex-grow">
                  {testimonial.description}
                </p>

                {/* Author - stays at bottom */}
                <div className="flex items-center gap-4 pt-6 mt-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs md:text-sm text-white/50">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
