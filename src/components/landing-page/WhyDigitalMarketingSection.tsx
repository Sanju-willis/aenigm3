// src\components\landing-page\WhyDigitalMarketingSection.tsx
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
  return (    <section className="py-16 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 max-w-6xl">{/* ⬅️ limits max width */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
          Why Digital Marketing Alone{' '}
          <span className="text-pink-600">Isn’t Enough</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {/* Agency focus */}
          <div className="bg-gray-50 rounded-lg p-6 shadow max-w-md mx-auto w-full"> {/* ⬅️ limits width + centers */}
            <h3 className="text-lg font-semibold mb-4">Most agencies only focus on:</h3>
            <ul className="space-y-3">
              {agencyFocus.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center text-gray-700"
                >
                  <XCircle className="text-red-500 mr-2 w-5 h-5" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Our focus */}
          <div className="bg-gray-50 rounded-lg p-6 shadow max-w-md mx-auto w-full"> {/* ⬅️ limits width + centers */}
            <h3 className="text-lg font-semibold mb-4 text-blue-600">We focus on:</h3>
            <ul className="space-y-3">
              {ourFocus.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center text-gray-700"
                >
                  <CheckCircle className="text-green-500 mr-2 w-5 h-5" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-xl font-semibold mb-4 text-gray-500">
            More conversions = More revenue from the same traffic.
          </p>
          <motion.a
            href="#start-optimizing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}            className="inline-block bg-brandblue hover:bg-brandblue/90 text-white font-medium text-lg py-3 px-6 rounded-full transition" id="cta-start-optimizing"
          >
            Start Optimizing Now ▶
            
          </motion.a>
        </div>
      </div>
    </section>
  );
}
