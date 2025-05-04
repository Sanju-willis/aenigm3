'use client';

import { Button } from "@/components/ui/button";
import { CheckCircle, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  "You spend money on ads but don’t see sales grow",
  "You have a great product, but visitors aren’t buying",
  "You want more revenue without increasing ad spend",
  "You run an eCommerce, SaaS, or service-based business",
];

export default function IsCRORightSection() {
  return (
    <section className="py-20 bg-background">
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
            <img src="/images/cro-illustration.svg" alt="CRO" className="mx-auto h-64" />
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
          className="mt-12 text-center text-xl font-semibold flex justify-center items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          If you said YES to any of these, CRO is what you need.
          <Rocket className="text-pink-500 w-6 h-6" />
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Button size="lg" className="px-8">
            See How We Can Help →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
