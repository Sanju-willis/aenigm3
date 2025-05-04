'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-12"> {/* ⬅️ wider side padding */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Stop Wasting on{' '}
          <span className="text-pink-600">Marketing Agencies That Don’t Convert</span>
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
</div>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl font-semibold mb-2">
            The real issue isn’t traffic — <span className="text-pink-600">IT’S CONVERSION.</span>
          </p>
          <p className="text-gray-600 mb-3">
            We help businesses turn website visitors into paying customers without increasing ad spend.
          </p>
          <div className="flex flex-wrap justify-center gap-4"> {/* ⬅️ replaced space-x with gap-4 for better mobile wrap */}
            <a href="#more-sales" className="text-blue-600 font-medium underline">
              More sales
            </a>
            <a href="#lower-costs" className="text-blue-600 font-medium underline">
              Lower costs
            </a>
            <a href="#higher-profits" className="text-blue-600 font-medium underline">
              Higher profits
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
