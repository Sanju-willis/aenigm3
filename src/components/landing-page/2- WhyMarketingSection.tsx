// src\components\landing-page\2- WhyMarketingSection.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { bangers } from '../../utils/fonts';
import AuditForm from '../forms/AuditForm';

const painPoints = [
  {
    text: 'Low sales despite high traffic?',
    img: '/images/low-sales.webp',
  },
  {
    text: 'Spending thousands on ads/SEO with little ROI?',
    img: '/images/low-roi.webp',
  },
  {
    text: "Visitors come but don't buy?",
    img: '/images/no-buy.webp',
  },
  {
    text: 'High number of 1-time buyers & less lifelong customers?',
    img: '/images/low-retention.webp',
  },
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

  const handleCloseAuditForm = () => {
    setShowAuditForm(false);
  };

  return (
    <>
      <section className="global-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
            Stop Wasting on{' '}
            <span className="text-pink-600">Marketing Agencies That Don't Convert</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 max-w-6xl mx-auto">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-4 sm:p-6 text-center shadow hover:shadow-lg transition w-full mx-auto"
              >
                <Image
                  src={point.img}
                  alt={point.text}
                  width={120}
                  height={120}
                  className="mx-auto mb-3 h-16 sm:h-24 w-auto"
                />
                <p className="text-sm sm:text-base font-medium text-gray-700">{point.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto px-4">
            {/* Mobile view: two lines */}
            <div className="sm:hidden mb-1">
              <p className="text-lg font-bold text-gray-600">The real issue isn't traffic</p>
              <p className={`text-pink-600 text-xl ${bangers.className}`}>IT'S CONVERSION.</p>
            </div>

            {/* Desktop view: original layout */}
            <p className="hidden sm:block text-lg sm:text-xl mb-1">
              <span className="text-gray-600 font-bold">The real issue isn't traffic</span> —
              <span className={`text-pink-600 text-xl sm:text-2xl ${bangers.className}`}>IT'S CONVERSION.</span>
            </p>

            <p className="text-gray-600 text-base sm:text-lg mb-2 sm:mb-2">
              We help businesses turn website visitors into paying customers without increasing ad spend.
            </p>

            

            

            <motion.button
              onClick={handleLearnMoreClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-brandblue hover:bg-brandblue/90 text-white font-medium py-3 px-6 sm:px-8 rounded-full transition text-base sm:text-lg" id="cta-learn-more"
            >
              Learn More About CRO
              <span className="text-xl">▶</span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Modal popup with AuditForm */}
      {showAuditForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg">
            <AuditForm onClose={handleCloseAuditForm} />
          </div>
        </div>
      )}
    </>
  );
}
