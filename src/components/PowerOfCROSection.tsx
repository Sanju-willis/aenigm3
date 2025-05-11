'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PowerOfCROSection() {
  return (
    <section className="py-16 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-heading mb-4">
          The Power of <span className="text-pink-600">CRO</span>
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
          Most businesses focus on getting more traffic, but what if converting existing visitors could drive the same (or better) results?
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 relative">
          {/* Low Conversions Label - Left */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 lg:translate-x-24">
            <p className="text-gray-500 text-2xl font-bold">Low</p>
            <p className="text-gray-500 text-2xl font-bold">Conversions</p>
          </div>

          {/* Left Side Stats */}
          <div className="space-y-4">
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900">10,000</p>
              <p className="text-gray-600 text-sm">Visitors</p>
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900">1.5%</p>
              <p className="text-gray-600 text-sm">Conversion Rate</p>
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900">$15,000</p>
              <p className="text-gray-600 text-sm">Revenue ($100/sale)</p>
            </div>
          </div>

          {/* Center Funnel */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-8"
          >
            <Image
              src="/images/power-cro-funnel.png"
              alt="CRO Funnel"
              width={180}
              height={300}
              className="mx-auto"
            />
            <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 ml-4">
              <p className="text-4xl font-semibold text-gray-500">CRO</p>
            </div>
          </motion.div>

          {/* Optimized Conversions Label - Right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 lg:-translate-x-24">
            <p className="text-blue-600 text-2xl font-bold">Optimized</p>
            <p className="text-blue-600 text-2xl font-bold">Conversions</p>
            <p className="text-blue-600 text-2xl font-bold">(With CRO)</p>
          </div>

          {/* Right Side Stats */}
          <div className="space-y-4">
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">10,000</p>
              <p className="text-gray-600 text-sm">Visitors</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">
                3.8% 
              </p> 
              <p className="text-red-500 text-sm ml-1">(2.5x increase)</p>
              
              <p className="text-gray-600 text-sm">Conversion Rate</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">$38,000</p>
              <p className="text-gray-600 text-sm">Revenue ($100/sale)</p>
            </div>
          </div>
        </div>

        <p className="text-xl text-gray-500 mt-10 mb-6">
          More traffic = more ad spend. More conversions = more profit.
        </p>

        <motion.a
          href="#custom-cro-plan"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-brandblue hover:bg-brandblue/90 text-white font-medium py-3 px-6 rounded-full transition"
        >
          Get My Custom CRO Plan
        </motion.a>
      </div>
    </section>
  );
}
