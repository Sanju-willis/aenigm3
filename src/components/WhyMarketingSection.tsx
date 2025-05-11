'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {bangers} from '../utils/fonts'

const painPoints = [
  {
    text: 'Low sales despite high traffic?',
    img: '/images/low-sales.png',
  },
  {
    text: 'Spending thousands on ads/SEO with little ROI?',
    img: '/images/low-roi.png',
  },
  {
    text: 'Visitors come but don’t buy?',
    img: '/images/no-buy.png',
  },
  {
    text: 'High number of 1-time buyers & less lifelong customers?',
    img: '/images/low-retention.png',
  },
];

export default function StopWastingSection() {
  return (    <section className="py-12 bg-white scroll-mt-24">
      <div className="container mx-auto px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Stop Wasting on{' '}
          <span className="text-pink-600">Marketing Agencies That Don't Convert</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 text-center shadow hover:shadow-lg transition max-w-[260px] w-full mx-auto"
            >
              <Image
                src={point.img}
                alt={point.text}
                width={120}
                height={120}
                className="mx-auto mb-3 h-24 w-auto"
              />
              <p className="text-sm sm:text-base font-medium text-gray-700">{point.text}</p>
            </motion.div>
          ))}
        </div>        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl mb-2">
            <span className="text-gray-600 font-bold">The real issue isn't traffic</span> — <span className={`text-pink-600 text-2xl ${bangers.className}`}>IT'S CONVERSION.</span>
          </p>
          <p className="text-gray-600 mb-8">
            We help businesses turn website visitors into paying customers without increasing ad spend.
          </p>{/* Benefits row with dots */}          <div className="flex items-center justify-center gap-x-3 mb-8">
            <span className="text-2xl font-medium text-brandblue">More sales</span>
            <span className="text-brandblue text-2xl">|</span>
            <span className="text-2xl font-medium text-brandblue">Lower costs</span>
            <span className="text-brandblue text-2xl">|</span>
            <span className="text-2xl font-medium text-brandblue">Higher profits</span>
          </div>

          {/* Checkmark points */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="inline-flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 whitespace-nowrap">Fix hidden issues hurting conversions</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 whitespace-nowrap">Double your revenue with the same traffic</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 whitespace-nowrap">Use data-driven changes for long-term growth</span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.a
            href="#learn-more"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-brandblue hover:bg-brandblue/90 text-white font-medium py-3 px-8 rounded-full transition"
          >
            Learn More About CRO
            <span className="text-xl">▶</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
