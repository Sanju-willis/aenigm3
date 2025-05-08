'use client';

import { Button } from "@/components/ui/button";
import { XCircle, AlertTriangle, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const mistakes = [
  "Slow website speed - 53% of users leave if a page loads in more than 3 seconds",
  "Weak CTAs & poor UX - If users don’t know what to do, they leave",
  "Confusing checkout & forms - More steps = more drop-offs",
  "Not mobile-optimized - Over 70% of users browse on mobile",
  "Lack of Follow-up (Retargeting & Email Nurture) - Most visitors don’t convert on the first visit. A follow-up strategy is essential.",
  "Inconsistent Messaging Across Pages - If ads, landing pages, and checkout flows don’t align, trust drops.",
];

export default function BigMistakesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        {/* Top Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold flex justify-center items-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertTriangle className="text-yellow-500 w-8 h-8" />
          The Big Mistakes Hurting Your Sales
        </motion.h2>

        {/* Mistake List */}
        <div className="max-w-3xl mx-auto text-left">
          <ul className="space-y-4">
            {mistakes.map((mistake, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <XCircle className="text-red-500 w-5 h-5 mt-1" />
                <span>{mistake}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA Line */}
        <motion.p
          className="mt-12 text-xl font-semibold flex justify-center items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Fix these, and your revenue will skyrocket.
          <Rocket className="text-pink-500 w-6 h-6" />
        </motion.p>
        
        {/*  Button */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition mt-4"
        >
          Find Out What's Hurting Your Conversions →
        </motion.a>
      </div>
    </section>
  );
}
