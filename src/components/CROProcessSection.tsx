'use client';

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Research & Deep Data Analysis",
    subtitle: "(Find What’s Wrong)",
    points: [
      "Heatmaps & session recordings",
      "User behavior analysis",
      "Identify high-risk pages",
    ],
    img: "/images/research.png",
  },
  {
    title: "A/B Testing & UX Optimization",
    points: [
      "Experiment with different versions",
      "Improve layout, copy & mobile experience",
      "Reduce bounce rate & exits",
    ],
    img: "/images/abtesting.png",
  },
  {
    title: "Implement & Scale",
    points: [
      "Roll out high-converting pages",
      "Track performance using analytics",
      "Continuous improvement for growth",
    ],
    img: "/images/scale.png",
  },
  {
    title: "Implement Winning Strategies",
    points: ["Continuously tweak & improve", "Use live data insights"],
    img: "/images/strategy.png",
  },
];

const partners = [
  "/logos/vwo.png",
  "/logos/google-analytics.png",
  "/logos/hotjar.png",
];

export default function CROProcessSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Simple <span className="text-pink-600">4-Step</span> CRO Process
          </h2>
          <p className="text-gray-600 text-lg">
            We use science—not assumptions—to increase conversions.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg overflow-hidden h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="w-28 h-28 mb-6">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">
                      {step.title}
                    </h3>
                    {step.subtitle && (
                      <p className="text-gray-500 text-sm mb-4 text-center">
                        {step.subtitle}
                      </p>
                    )}
                    <ul className="space-y-2 text-sm text-gray-600 w-full">
                      {step.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Results Text */}
        <div className="text-center mb-12">
          <p className="text-xl font-medium text-gray-800">
            Results? More revenue, lower costs, and higher profits.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {partners.map((logo, i) => (
            <img 
              key={i} 
              src={logo} 
              alt="Partner Logo" 
              className="h-8 opacity-80 hover:opacity-100 transition-opacity" 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
