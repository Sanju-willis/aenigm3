'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-20 pb-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Conversion Rate Optimization
            </h1>
            <p className="mt-2 text-2xl text-gray-700">
              <span className="line-through text-red-500">Digital Marketing</span>{' '}
              <span className="font-light">Agency</span>
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
              Helping Direct to Consumer businesses to increase sales & revenue by optimizing
              conversion with Data Driven Insights & Testing.
            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center">
                ✅ <span className="ml-2 text-sm text-gray-700">0$ Ads spent</span>
              </div>
              <div className="flex items-center">
                ✅ <span className="ml-2 text-sm text-gray-700">Double Your Revenue With the Same Traffic</span>
              </div>
              <div className="flex items-center">
                ✅ <span className="ml-2 text-sm text-gray-700">Increased Conversions</span>
              </div>
            </div>
          </motion.div>

          {/* Right Box */}
          <motion.div
            className="lg:text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700">Guaranteed</p>
            <p className="text-2xl font-bold text-blue-600">2X ROI in 160 days</p>
            <p className="mt-2 text-lg text-gray-700">or We Work for</p>
            <p className="text-3xl font-bold text-blue-600">FREE!</p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-blue-500 transition"
              >
                See If My Business Qualifies →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
