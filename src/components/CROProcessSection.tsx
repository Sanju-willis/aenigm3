'use client';

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Research & Deep Data Analysis",
    subtitle: "(Find What's Wrong)",
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
  "/logos/shopify.png",
];

export default function CROProcessSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading mb-3 sm:mb-4">
            Our Simple <span className="text-pink-600">4-Step</span> CRO Process
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            We use science—not assumptions—to increase conversions.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg overflow-hidden h-full">
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  {/* Top section with image and title - fixed height */}
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mb-4">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-1">
                      {step.title}
                    </h3>
                    {step.subtitle && (
                      <p className="text-sm text-gray-500 text-center">
                        {step.subtitle}
                      </p>
                    )}
                  </div>
                  
                  {/* Horizontal divider - centered */}
                  <div className="flex justify-center mb-4">
                    <div className="w-48 h-px bg-gray-200"></div>
                  </div>
                  
                  {/* Bullet points section */}
                  <div className="w-full">
                    <ul className="space-y-3">
                      {step.points.map((point, i) => (
                        <li key={i} className="flex items-baseline">
                          <span className="text-brandblue mr-2 flex-shrink-0">•</span>
                          <span className="text-sm sm:text-base text-gray-600">{point}</span>
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
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-lg sm:text-xl font-semibold text-gray-500">
            Results? More revenue, lower costs, and higher profits.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-brandblue hover:bg-brandblue/90 text-white font-medium py-3 px-6 sm:px-8 rounded-full transition text-base sm:text-lg"
          >
            Schedule a Strategy Call
            <span className="text-xl">▶</span>
          </motion.a>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
          {partners.map((logo, i) => (
            <img 
              key={i} 
              src={logo} 
              alt="Partner Logo" 
              className="h-6 sm:h-8 opacity-80 hover:opacity-100 transition-opacity" 
            />
          ))}
        </div>
      </div>
    </section>
  );
}