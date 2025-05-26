'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { bangers } from '../../utils/fonts';
import AuditForm from '../forms/AuditForm';

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
    text: "Visitors come but don't buy?",
    img: '/images/no-buy.png',
  },
  {
    text: 'High number of 1-time buyers & less lifelong customers?',
    img: '/images/low-retention.png',
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
      <section id="why-marketing" className="py-8 sm:py-12 lg:py-16 bg-white scroll-mt-24">
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

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-x-3 mb-2 sm:mb-2">
              <span className="text-xl sm:text-2xl font-medium text-brandblue">More sales</span>
              <span className="hidden sm:inline text-brandblue text-2xl">|</span>
              <span className="text-xl sm:text-2xl font-medium text-brandblue">Lower costs</span>
              <span className="hidden sm:inline text-brandblue text-2xl">|</span>
              <span className="text-xl sm:text-2xl font-medium text-brandblue">Higher profits</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
              {[
                "Fix hidden issues hurting conversions",
                "Double your revenue with the same traffic",
                "Use data-driven changes for long-term growth"
              ].map((text, index) => (
                <div key={index} className="inline-flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">{text}</span>
                </div>
              ))}
            </div>

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
