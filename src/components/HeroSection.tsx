'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import BusinessQualifyForm from './forms/BusinessQualifyForm';

export default function HeroSection() {
  const [showAlt, setShowAlt] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showStrike, setShowStrike] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlt((prev) => !prev);
    }, 6000);

    const strikeInterval = setInterval(() => {
      setShowStrike((prev) => !prev);
    }, 6000);

    return () => {
      clearInterval(interval);
      clearInterval(strikeInterval);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden pt-16 sm:pt-20 md:pt-24 pb-12 md:pb-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading tracking-tight text-black leading-[1.1]">
              Conversion Rate Optimization
            </h1>
            <p className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-black">
              <span className="line-through decoration-red-500">
                Digital Marketing
              </span><span>  </span>
              <span className="font-heading">Agency</span>
            </p>
            <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-7 md:leading-8 text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Helping Direct to Consumer businesses to increase sales & revenue by optimizing
              conversion with Data Driven Insights & Testing.
            </p>
          </motion.div>

          {/* Right Box with toggle */}
          <motion.div
            className="flex flex-col items-center lg:items-end text-center cursor-pointer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setShowAlt((prev) => !prev)}
          >
            <motion.div
              key={showAlt ? 'alt' : 'main'}
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 180, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-sm bg-blue-50 rounded-xl p-6 sm:p-8 shadow-md"
            >
              {showAlt ? (
                <>
                  <p className="text-base sm:text-lg font-semibold text-brandblue mb-2">Get a Personal AI Media Buyer</p>
                  <p className="text-sm sm:text-base text-gray-700 mb-3">
                    “You’ve been managing ads. This one manages itself.”
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 mb-5">
                    It learns, steals, and scales—so you don’t have to.
                  </p>
                  <button className="w-full sm:w-auto inline-block rounded-full bg-brandblue px-6 py-3 text-base sm:text-lg font-semibold text-white shadow hover:bg-brandblue/90 transition cursor-not-allowed min-h-[48px]">
                    Coming Soon
                  </button>
                </>
              ) : (
                <>
                  <p className="text-base sm:text-lg text-gray-700 mb-2">Guaranteed</p>
                  <p className="text-3xl sm:text-4xl font-bold text-brandblue mb-2">2X ROI in 160 days</p>
                  <p className="text-base sm:text-lg text-gray-700 mb-2">or We Work for</p>
                  <p className="text-4xl sm:text-5xl font-bold text-brandblue mb-4 sm:mb-6">FREE!</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowForm(true);
                    }}
                    className="w-full sm:w-auto inline-block rounded-full bg-brandblue px-6 py-3 text-base sm:text-lg font-semibold text-white shadow hover:bg-brandblue/90 transition min-h-[48px]"
                  >
                    See If My Business Qualifies →
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Checkmark points */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-20 ">
            {[
              "No Budget Bump",
              "Data Driven Decisions",
              "Increased Conversions"
            ].map((text, index) => (
              <div key={index} className="inline-flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xl font-bold text-gray-700 ">{text}</span>
              </div>
            ))}
          </div>
      </div>

      <AnimatePresence>
        {showForm && (
          <BusinessQualifyForm onClose={() => setShowForm(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}
