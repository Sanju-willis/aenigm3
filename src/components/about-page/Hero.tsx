// src\components\about-page\Hero.tsx
import { useState } from 'react';
import Image from 'next/image';
import { Hexagon } from 'lucide-react'; 

export default function AboutHero() {
  return (
    <section className="relative px-4 sm:px-8 md:px-12 lg:px-20 py-20 bg-gradient-to-b from-white to-slate-50 text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
        {/* Left Text Column */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            About <span className="text-black">Aenigm3</span>
          </h1>

          <ul className="space-y-6 text-lg sm:text-xl md:text-2xl ml-10 leading-relaxed">
            {[
              ['Frustration', 'Focus'],
              ['Digital', 'Data'],
              ['Growth', 'Greatness'],
            ].map(([from, to], index) => (
              <li key={index} className="flex items-start space-x-4">
                <Hexagon className="text-green-400 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mt-1" />
                <span>
                  <span className="font-semibold text-gray-900">From </span>
                  <span className="font-bold text-brandblue">{from}</span>
                  <span className=""> to </span>
                  <span className="font-bold text-brandblue">{to}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Blob */}
        <div className="relative w-full flex justify-center lg:justify-end">
          <div className="absolute -top-5 -right-5 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] bg-brandblue rounded-full opacity-20 blur-3xl"></div>
          <div className="relative w-[280px] sm:w-[350px] md:w-[420px] lg:w-[480px] xl:w-[550px]">
            <Image
              src="/about/hero.png"
              alt="Design Illustration"
              className="relative w-full object-contain drop-shadow-xl"
              width={600}
              height={600}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
