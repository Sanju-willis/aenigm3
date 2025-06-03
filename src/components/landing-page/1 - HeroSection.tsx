// src\components\landing-page\1 - HeroSection.tsx
'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import BusinessQualifyForm from '../forms/BusinessQualifyForm';
import NotifyMeForm from '../forms/NotifyMeForm';

export default function HeroSection() {
  const [showAlt, setShowAlt] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showNotifyForm, setShowNotifyForm] = useState(false);
  const [showStrike, setShowStrike] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowAlt((prev) => !prev), 6000);
    const strikeInterval = setInterval(() => setShowStrike((prev) => !prev), 6000);

    return () => {
      clearInterval(interval);
      clearInterval(strikeInterval);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden pt-16 sm:pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-heading font-bold text-black leading-tight">
              Conversion Rate Optimization
            </h1>
            <p className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-black">
              <span className="line-through decoration-[#dd1082]">Digital Marketing</span>{' '}
              <span className="text-black">Agency</span>
            </p>

            <div
              className="h-[10px] w-full my-6 rounded-full bg-[length:0%_100%] bg-gradient-to-r from-white via-brandblue to-white animate-pixel-bloom bg-no-repeat"
              style={{ backgroundImage: 'linear-gradient(to right, white, brandblue, white)' }}
            />

            <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Helping Direct-To-Consumer brands grow revenue with AI-driven conversion, data insights, and smart testing.
            </p>
          </motion.div>

          {/* Right Box */}
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
              className="w-full max-w-[360px] bg-blue-50 rounded-xl p-6 sm:p-6 shadow-md"
            >
              {showAlt ? (
                <>
                  <p className="text-base sm:text-lg font-medium text-brandblue mb-2">
                    Get a Personal AI Media Buyer
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-[#dd1082] mb-3">
                    Your Ad Brain Is Coming!
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-gray-700 mb-5">
                    Learn Fast. Scales Faster.
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowNotifyForm(true);
                    }}
                    className="w-full sm:w-auto rounded-full bg-brandblue px-6 py-3 text-base sm:text-lg font-semibold text-white shadow hover:bg-brandblue/90 transition min-h-[48px]"
                  >
                    Notify Me When It Launches
                  </button>
                </>
              ) : (
                <>
                  <p className="text-base sm:text-lg text-gray-700 font-medium mb-2">Guaranteed</p>
                  <p className="text-3xl sm:text-4xl font-bold text-brandblue mb-2">2X ROI in 160 days</p>
                  <p className="text-base sm:text-lg font-medium text-gray-700 mb-2">or We Work for</p>
                  <p className="text-4xl sm:text-5xl font-bold text-[#dd1082] mb-4 sm:mb-6">FREE!</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowForm(true);
                    }}
                    className="w-full sm:w-auto rounded-full bg-brandblue px-6 py-3 text-base sm:text-lg font-semibold text-white shadow hover:bg-brandblue/90 transition min-h-[48px]"
                  >
                    See If My Business Qualifies →
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Checkmarks */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-20">
          {["No Budget Bump", "Data Driven Decisions", "Increased Conversions"].map((text, index) => (
            <div key={index} className="inline-flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xl font-semibold text-gray-700">{text}</span>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showForm && <BusinessQualifyForm onClose={() => setShowForm(false)} />}
        {showNotifyForm && <NotifyMeForm onClose={() => setShowNotifyForm(false)} />}
      </AnimatePresence>
    </section>
  );
}
