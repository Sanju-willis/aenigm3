// src\components\landing-page\1 - HeroSection.tsx
'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import BusinessQualifyForm from '../forms/BusinessQualifyForm';
import NotifyMeForm from '../forms/NotifyMeForm';

const checkmarks = ["No Budget Bump", "Data Driven Decisions", "Increased Conversions"];

export default function HeroSection() {
  const [showAlt, setShowAlt] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showNotifyForm, setShowNotifyForm] = useState(false);

  useEffect(() => {
    const altInterval = setInterval(() => setShowAlt(prev => !prev), 6000);
    return () => clearInterval(altInterval);
  }, []);

  const cta = useMemo(() => {
    return showAlt
      ? {
          subtitle: "Get a Personal AI Media Buyer",
          title: "Your Ad Brain Is Coming!",
          desc: "Learn Fast. Scales Faster.",
          button: "Notify Me When It Launches",
          onClick: () => setShowNotifyForm(true),
        }
      : {
          subtitle: "Guaranteed",
          title: "2X ROI in 160 days",
          desc: "or We Work for FREE!",
          button: "See If My Business Qualifies →",
          onClick: () => setShowForm(true),
        };
  }, [showAlt]);

  return (
    <section className="relative isolate overflow-hidden pt-16 sm:pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-black leading-tight">
              Conversion Rate Optimization
            </h1>
            <p className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-black">
              <span className="line-through decoration-[#dd1082]">Digital Marketing</span>{' '}
              <span>Agency</span>
            </p>

            <div
              className="h-[10px] w-full my-6 rounded-full bg-[length:0%_100%] animate-pixel-bloom bg-no-repeat"
              style={{ backgroundImage: 'linear-gradient(to right, white, #007bff, white)' }}
            />

            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Helping Direct-To-Consumer brands grow revenue with AI-driven conversion, data insights, and smart testing.
            </p>
          </div>

          {/* Right CTA card */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              key={showAlt ? 'alt' : 'main'}
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 180, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[360px] bg-blue-50 rounded-xl p-6 shadow-md text-center cursor-pointer"
              onClick={() => setShowAlt((prev) => !prev)}
            >
              <p className="text-base sm:text-lg font-medium text-brandblue mb-2">{cta.subtitle}</p>
              <p className="text-2xl sm:text-3xl font-bold text-[#dd1082] mb-3">{cta.title}</p>
              <p className="text-base sm:text-lg font-semibold text-gray-700 mb-5">{cta.desc}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  cta.onClick();
                }}
                className="w-full sm:w-auto rounded-full bg-brandblue px-6 py-3 text-base sm:text-lg font-semibold text-white shadow hover:bg-brandblue/90 transition min-h-[48px]"
              >
                {cta.button}
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Checkmarks */}
        <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-20">
          {checkmarks.map((text, index) => (
            <li key={index} className="flex items-center gap-2 text-xl font-semibold text-gray-700">
              <svg className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {text}
            </li>
          ))}
        </ul>
      </div>

      {/* Forms */}
      <AnimatePresence>
        {showForm && <BusinessQualifyForm onClose={() => setShowForm(false)} />}
        {showNotifyForm && <NotifyMeForm onClose={() => setShowNotifyForm(false)} />}
      </AnimatePresence>
    </section>
  );
}
