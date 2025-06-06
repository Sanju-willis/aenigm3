// src\components\landing-page\5 - BigMistakesSection.tsx
'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { XCircle, AlertTriangle, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import FindOutForm from '../forms/FindOutForm';

const mistakes = [
  "Slow website speed - 53% of users leave if a page loads in more than 3 seconds",
  "Weak CTAs & poor UX - If users don’t know what to do, they leave",
  "Confusing checkout & forms - More steps = more drop-offs",
  "Not mobile-optimized - Over 70% of users browse on mobile",
  "Lack of Follow-up (Retargeting & Email Nurture) - Most visitors don’t convert on the first visit. A follow-up strategy is essential.",
  "Inconsistent Messaging Across Pages - If ads, landing pages, and checkout flows don’t align, trust drops.",
];

export default function BigMistakesSection() {
  const [showFindOutForm, setShowFindOutForm] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showFindOutForm ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showFindOutForm]);

  return (
    <>
      <section className="global-section">
        <div className="container mx-auto px-6 text-center">
          {/* Top Heading */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Mobile Layout */}
            <h2 className="text-2xl sm:hidden font-bold flex flex-col items-center gap-1">
              <span className="flex items-center gap-2">
                <AlertTriangle className="text-yellow-500 w-6 h-6" />
                The Big Mistakes Hurting
              </span>
              <span>Your <span className="text-pink-600">Sales</span></span>
            </h2>

            {/* Desktop Layout */}
            <h2 className="hidden sm:flex text-2xl sm:text-3xl lg:text-4xl font-bold justify-center items-center gap-2">
              <AlertTriangle className="text-yellow-500 w-8 h-8" />
              The Big Mistakes Hurting Your <span className="text-pink-600">Sales</span>
            </h2>
          </motion.div>

          {/* Mistake List */}
          <div className="max-w-3xl mx-auto text-left">
            <ul className="space-y-4">
              {mistakes.map((mistake, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <XCircle className="text-red-500 w-6 h-6 flex-shrink-0" />
                  <span>{mistake}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA Line */}
          <motion.p
            className="mt-12 text-xl font-semibold flex justify-center items-center gap-2 text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Fix these, and your revenue will skyrocket.
            <Rocket className="text-pink-500 w-6 h-6 hidden sm:inline" />
          </motion.p>

          {/* CTA Button */}
          <div className="text-center">
            <motion.button
              onClick={() => setShowFindOutForm(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-brandblue hover:bg-brandblue/90 text-white font-medium text-lg py-3 px-8 mt-10 rounded-full transition"
              id="find-out-more"
            >
              Find Out What's Hurting Your Conversions
              <span className="text-xl">▶</span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Modal for FindOutForm */}
      {showFindOutForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg">
            <FindOutForm onClose={() => setShowFindOutForm(false)} />
          </div>
        </div>
      )}
    </>
  );
}
