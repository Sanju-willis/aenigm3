// src\components\landing-page\4 - PowerOfCROSection.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PowerOfCROSection() {
  return (
    <section className="global-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-x-hidden">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
          The Power of <span className="text-pink-600">CRO</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto">
          Most businesses focus on getting more traffic, but what if converting existing visitors could drive the same (or better) results?
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 relative">
          {/* CRO Labels - hidden on mobile */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 translate-x-24 text-left">
            <p className="text-gray-500 text-2xl font-bold">Low</p>
            <p className="text-gray-500 text-2xl font-bold">Conversions</p>
          </div>

          {/* Left Side Stats */}
          <div className="space-y-4 w-full sm:w-auto text-center lg:text-left">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">10,000</p>
              <p className="text-sm sm:text-base text-gray-600">Visitors</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">1.5%</p>
              <p className="text-sm sm:text-base text-gray-600">Conversion Rate</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">$15,000</p>
              <p className="text-sm sm:text-base text-gray-600">Revenue ($100/sale)</p>
            </div>
          </div>

          {/* Center Funnel Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-4 sm:mx-8 my-6 lg:my-0"
          >
            <Image
              src="/images/power-cro-funnel.webp"
              alt="CRO Funnel"
              width={180}
              height={300}
              priority
              className="mx-auto w-32 sm:w-40 lg:w-auto h-auto"
            />
            <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-0 transform -translate-y-1/2 lg:translate-x-full -translate-x-1/2">
              <p className="text-3xl sm:text-4xl font-semibold text-gray-500">CRO</p>
            </div>
          </motion.div>

          {/* Optimized Conversions Label - hidden on mobile */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 -translate-x-24 text-right">
            <p className="text-blue-600 text-2xl font-bold">Optimized</p>
            <p className="text-blue-600 text-2xl font-bold">Conversions</p>
            <p className="text-blue-600 text-2xl font-bold">(With CRO)</p>
          </div>

          {/* Right Side Stats */}
          <div className="space-y-4 w-full sm:w-auto text-center lg:text-right">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-blue-600">10,000</p>
              <p className="text-sm sm:text-base text-gray-600">Visitors</p>
            </div>
            <div>
              <div className="flex flex-col lg:items-end">
                <p className="text-xl sm:text-2xl font-bold text-blue-600">3.8%</p>
                <p className="text-xs sm:text-sm text-red-500">(2.5x increase)</p>
              </div>
              <p className="text-sm sm:text-base text-gray-600">Conversion Rate</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-blue-600">$38,000</p>
              <p className="text-sm sm:text-base text-gray-600">Revenue ($100/sale)</p>
            </div>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-gray-500 mt-8 sm:mt-10 mb-1 font-bold">
          More traffic = more ad spend. More conversions = more profit.
        </p>
        <div className="text-center">
          <p className="text-sm sm:text-lg font-medium text-brandblue">
            Are you making the most of your existing visitors?
          </p>
        </div>
      </div>
    </section>
  );
}
