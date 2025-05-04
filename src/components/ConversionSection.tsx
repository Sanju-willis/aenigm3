'use client';

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const problems = [
  {
    img: "/images/low-sales.svg", // replace with your actual image path
    text: "Low sales despite high traffic?",
  },
  {
    img: "/images/low-roi.svg",
    text: "Spending thousands on ads/SEO with little ROI?",
  },
  {
    img: "/images/no-buyers.svg",
    text: "Visitors come but don’t buy?",
  },
  {
    img: "/images/one-time-buyers.svg",
    text: "High number of 1-time buyers & less lifelong customers?",
  },
];

export default function ConversionProblemSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Stop Wasting on <span className="text-pink-600">Marketing Agencies That Don’t Convert</span>
        </motion.h2>

        {/* Problem Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-4">
                <CardContent className="flex flex-col items-center">
                  <img src={item.img} alt={item.text} className="h-24 mb-4" />
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xl font-semibold">
            The real issue isn’t traffic — <span className="text-pink-600">IT’S CONVERSION.</span>
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We help businesses turn website visitors into paying customers without increasing ad spend.
          </p>
          <p className="mt-2 text-blue-600 font-semibold">
            <a href="#more-sales" className="hover:underline">More sales</a> |{' '}
            <a href="#lower-costs" className="hover:underline">Lower costs</a> |{' '}
            <a href="#higher-profits" className="hover:underline">Higher profits</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
