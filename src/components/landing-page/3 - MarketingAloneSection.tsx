// src\components\landing-page\3 - MarketingAloneSection.tsx
'use client';

import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';

const agencyFocus = [
  'Running ads & driving traffic',
  'Social media marketing',
  'High ad spend with little return',
  'Expensive beautiful website / Applications',
];

const ourFocus = [
  'Website / Application optimization for higher conversions',
  'Reducing friction in your sales funnel',
  'Fixing drop-offs & improving UX',
  'Improving customer Retension',
];

export default function WhyDigitalMarketingSection() {
  return (
    <section className="global-section">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
          Why Digital Marketing Alone{' '}
          <span className="text-pink-600">Isn’t Enough</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[agencyFocus, ourFocus].map((list, colIdx) => (
            <div key={colIdx} className="bg-gray-50 rounded-lg p-6 shadow">
              <h3 className={`text-lg font-semibold mb-4 ${colIdx === 1 ? 'text-blue-600' : ''}`}>
                {colIdx === 0 ? 'Most agencies only focus on:' : 'We focus on:'}
              </h3>
              <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {list.map((item, index) => (
                  <motion.li
                    key={item}
                    variants={{
                      hidden: { opacity: 0, x: colIdx === 0 ? -20 : 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center text-gray-700 mb-3 last:mb-0"
                  >
                    {colIdx === 0 ? (
                      <XCircle className="text-red-500 mr-2 w-5 h-5" />
                    ) : (
                      <CheckCircle className="text-green-500 mr-2 w-5 h-5" />
                    )}
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-xl font-semibold text-gray-500">
            More conversions = More revenue from the same traffic.
          </p>
          <p className="text-sm sm:text-lg font-medium text-brandblue mt-1">
            What’s standing between your traffic and your sales?
          </p>
        </div>
      </div>
    </section>
  );
}
