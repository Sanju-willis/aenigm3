'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PowerOfCROSection() {
  return (    <section className="py-16 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          The Power of <span className="text-pink-600">CRO</span>
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
          Most businesses focus on getting more traffic, but what if converting existing visitors could drive the same (or better) results?
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          {/* Low Conversions */}
          <div className="space-y-4 text-left">
            <div>
              <p className="text-2xl font-semibold">10,000</p>
              <p className="text-gray-500 text-sm">Visitors</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">1.5%</p>
              <p className="text-gray-500 text-sm">Conversion Rate</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">$15,000</p>
              <p className="text-gray-500 text-sm">Revenue ($100/sale)</p>
            </div>
            <p className="text-gray-700 font-medium mt-2">Low Conversions</p>
          </div>

          {/* Funnel Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/cro-funnel.png"
              alt="CRO Funnel"
              width={180}
              height={300}
              className="mx-auto"
            />
          </motion.div>

          {/* Optimized Conversions */}
          <div className="space-y-4 text-right">
            <div>
              <p className="text-2xl font-semibold text-blue-600">10,000</p>
              <p className="text-gray-500 text-sm">Visitors</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-blue-600">
                3.8% <span className="text-red-500 text-base">(2.5x increase)</span>
              </p>
              <p className="text-gray-500 text-sm">Conversion Rate</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-blue-600">$38,000</p>
              <p className="text-gray-500 text-sm">Revenue ($100/sale)</p>
            </div>
            <p className="text-blue-600 font-medium mt-2">Optimized Conversions (With CRO)</p>
          </div>
        </div>

        <p className="text-lg font-semibold mt-10 mb-6">
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
