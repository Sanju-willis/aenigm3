// src\components\landing-page\2- WhyMarketingSection.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { bangers } from '../../utils/fonts';
import AuditForm from '../forms/AuditForm';

const painPoints = [
  { text: 'Low sales despite high traffic?', img: '/images/low-sales.webp' },
  { text: 'Spending thousands on ads/SEO with little ROI?', img: '/images/low-roi.webp' },
  { text: "Visitors come but don't buy?", img: '/images/no-buy.webp' },
  { text: 'High number of 1-time buyers & less lifelong customers?', img: '/images/low-retention.webp' },
];

export default function StopWastingSection() {
  const [showAuditForm, setShowAuditForm] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showAuditForm ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [showAuditForm]);

  const handleLearnMoreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowAuditForm(true);
  };

  return (
    <>
      <section className="global-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
            Stop Wasting on{' '}
            <span className="text-pink-600">Marketing Agencies That Don't Convert</span>
          </h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={point.text}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center shadow hover:shadow-lg transition"
              >
                <Image
                  src={point.img}
                  alt={point.text}
                  width={120}
                  height={120}
                  className="mx-auto mb-4 h-20 w-auto"
                />
                <p className="text-base font-medium text-gray-700">{point.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center max-w-3xl mx-auto px-4">
            <p className="text-lg sm:text-xl font-bold text-gray-600 mb-1">
              The real issue isn't traffic
              <span className={`block sm:inline ml-2 text-pink-600 ${bangers.className}`}>
                IT'S CONVERSION.
              </span>
            </p>

            <p className="text-gray-600 text-base sm:text-lg mb-6">
              We help businesses turn website visitors into paying customers without increasing ad spend.
            </p>

            <motion.button
              onClick={handleLearnMoreClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-brandblue hover:bg-brandblue/90 text-white font-medium py-3 px-6 sm:px-8 rounded-full transition text-base sm:text-lg"
              id="cta-learn-more"
            >
              Learn More About CRO <span className="text-xl">▶</span>
            </motion.button>
          </div>
        </div>
      </section>

      {showAuditForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg">
            <AuditForm onClose={() => setShowAuditForm(false)} />
          </div>
        </div>
      )}
    </>
  );
}
