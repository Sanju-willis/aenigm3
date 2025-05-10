'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import MultiStepForm from './forms/MultiStepForm';

export default function HeroSection() {
  const [showAlt, setShowAlt] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showStrike, setShowStrike] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlt((prev) => !prev);
    }, 4000);

    const strikeInterval = setInterval(() => {
      setShowStrike((prev) => !prev);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(strikeInterval);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="pr-4"
          >
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-black leading-tight">
              Conversion Rate Optimization
            </h1>
            <p className="mt-4 text-5xl text-black">
              <motion.span
                animate={{
                  textDecoration: showStrike ? 'line-through' : 'none',
                  color: 'black',
                  textDecorationColor: showStrike ? '#ef4444' : 'transparent',
                }}
                transition={{ duration: 0.3 }}
              >
                Digital Marketing
              </motion.span>{' '}
              <span className="font-light">Agency</span>
            </p>
            <p className="mt-8 text-xl leading-8 text-gray-600 max-w-2xl">
              Helping Direct to Consumer businesses to increase sales & revenue by optimizing
              conversion with Data Driven Insights & Testing.
            </p>
          </motion.div>

          {/* Right Box with toggle */}
          <motion.div
            className="flex flex-col items-center lg:items-end text-center cursor-pointer pl-4"
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
              transition={{ duration: 0.6 }}              className="max-w-sm bg-blue-50 rounded-xl p-8 shadow-md"
            >
              {showAlt ? (
                <>
                  <p className="text-lg font-semibold text-brandblue mb-2">Get a Personal AI Media Buyer</p>
                  <p className="text-sm text-gray-700 mb-3">
                    Test creatives? Scale audiences? Set automation?
                  </p>
                  <p className="text-sm text-gray-700 mb-5">
                    The AI Marketer audits your account, identifies weaknesses and opportunities,
                    and tells you exactly what to do next!
                  </p>
                  <button className="inline-block rounded-full bg-brandblue px-6 py-3 text-lg font-semibold text-white shadow hover:bg-brandblue/90 transition cursor-not-allowed">
                    Coming Soon
                  </button>
                </>
              ) : (
                <>
                  <p className="text-lg text-gray-700 mb-2">Guaranteed</p>
                  <p className="text-4xl font-bold text-brandblue mb-2">2X ROI in 160 days</p>
                  <p className="text-lg text-gray-700 mb-2">or We Work for</p>
                  <p className="text-5xl font-bold text-brandblue mb-6">FREE!</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowForm(true);
                    }}
                    className="inline-block rounded-full bg-brandblue px-6 py-3 text-lg font-semibold text-white shadow hover:bg-brandblue/90 transition"
                  >
                    See If My Business Qualifies →
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Centered Check Marks */}
        <div className="mt-12 flex justify-center gap-x-12">
          {['0$ Ads spent', 'Data Driven Decisions', 'Increased Conversions'].map((item) => (
            <div key={item} className="flex items-center">
              <span className="text-green-500 text-2xl mr-3">✅</span>
              <span className="text-base text-gray-700 font-3xl">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* AnimatePresence for form modal */}
      <AnimatePresence>
        {showForm && (
          <MultiStepForm open={showForm} onClose={() => setShowForm(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}
