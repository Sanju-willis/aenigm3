'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import MultiStepForm from './forms/MultiStepForm'; // ✅ adjust this path if needed

export default function HeroSection() {
  const [showAlt, setShowAlt] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlt((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="relative isolate overflow-hidden pt-40 pb-10 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl sm:text-5xl font-semibold tracking-tight text-black whitespace-nowrap">
              Conversion Rate Optimization
            </h1>
            <p className="mt-2 text-4xl text-gray-700">
              <span className="line-through text-red-500">Digital Marketing</span>{' '}
              <span className="font-normal text-black text-5xl">Agency</span>
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
              Helping Direct to Consumer businesses to increase sales & revenue by optimizing
              conversion with Data Driven Insights & Testing.
            </p>
            <div className="mt-10 flex gap-x-10">
              {['0$ Ads spent', 'Data Driven Decisions', 'Increased Conversions'].map((item) => (
                <div key={item} className="flex items-center">
                  <span className="text-green-500 text-xl mr-2">✅</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
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
              className="max-w-xs bg-blue-50 rounded-xl p-6 shadow-sm"
            >
              {showAlt ? (
                <>
                  <p className="text-lg font-semibold text-blue-600 mb-1">Get a Personal AI Media Buyer</p>
                  <p className="text-sm text-gray-700 mb-2">
                    Test creatives? Scale audiences? Set automation?
                  </p>
                  <p className="text-sm text-gray-700 mb-4">
                    The AI Marketer audits your account, identifies weaknesses and opportunities,
                    and tells you exactly what to do next!
                  </p>
                  <button className="inline-block rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow hover:bg-blue-500 transition cursor-not-allowed">
                    Coming Soon
                  </button>
                </>
              ) : (
                <>
                  <p className="text-lg text-gray-700 mb-1">Guaranteed</p>
                  <p className="text-3xl font-bold text-blue-600 mb-1">2X ROI in 160 days</p>
                  <p className="text-lg text-gray-700 mb-1">or We Work for</p>
                  <p className="text-4xl font-bold text-blue-600 mb-4">FREE!</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowForm(true);
                    }}
                    className="inline-block rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow hover:bg-blue-500 transition"
                  >
                    See If My Business Qualifies →
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ✅ AnimatePresence for form modal */}
      <AnimatePresence>
        {showForm && (
          <MultiStepForm open={showForm} onClose={() => setShowForm(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}
