// src\components\landing-page\7 - IsCRORightSection.tsx
'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import StrategyCallForm from "../forms/StrategyCallForm";

const points = [
  "You spend money on ads but don’t see sales grow",
  "You have a great product, but visitors aren’t buying",
  "You want more revenue without increasing ad spend",
  "You run an eCommerce, SaaS, or service-based business",
];

export default function IsCRORightSection() {
  const [showStrategyCallForm, setShowStrategyCallForm] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showStrategyCallForm ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showStrategyCallForm]);

  return (
    <>
      <section className="global-section">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Is <span className="text-pink-600">CRO</span> Right for You?
          </h2>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/images/cro-illustration.webp" alt="CRO" className="mx-auto h-64" />
            </motion.div>

            {/* Right List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ul className="space-y-4">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA Line */}
          <motion.p
            className="mt-12 text-center text-xl font-semibold flex justify-center items-center gap-2 text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            If you said YES to any of these, CRO is what you need.
            <Rocket className="text-pink-500 w-6 h-6 hidden sm:inline" />
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              onClick={() => setShowStrategyCallForm(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-brandblue hover:bg-brandblue/90 text-white font-medium text-lg py-3 px-6 rounded-full cursor-pointer transition" id="see-how-we-can-help"
            >
              Schedule Strategy Call ▶
            </motion.a>
          </motion.div>
        </div>
      </section>
      {/* Modal for StrategyCallForm */}
      {showStrategyCallForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg">
            <StrategyCallForm onClose={() => setShowStrategyCallForm(false)} />
          </div>
        </div>
      )}
    </>
  );
}
