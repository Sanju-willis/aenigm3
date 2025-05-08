'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section className="py-12 bg-background"> {/* reduced from py-20 to py-12 */}
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-3"> {/* reduced mb-4 to mb-3 */}
          Our Simple <span className="text-pink-600">4-Step</span> CRO Process
        </h2>
        <p className="text-muted-foreground mb-6"> {/* reduced mb-8 to mb-6 */}
          We use science—not assumptions—to increase conversions.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 max-w-6xl mx-auto"> {/* reduced gap-4 to gap-3, mb-8 to mb-6 */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col max-w-[240px] w-full mx-auto" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <img
                    src={step.img}
                    alt={step.title}
                    className="h-16 mx-auto mb-2" 
                  />
                  <CardTitle className="text-base text-center"> {/* slightly smaller title */}
                    {step.title}
                    {step.subtitle && (
                      <div className="text-xs text-muted-foreground"> {/* smaller subtitle */}
                        {step.subtitle}
                      </div>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-xs space-y-1 text-left"> {/* smaller text */}
                    {step.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        
        <p className="text-base font-medium mb-3"> {/* reduced text size and mb */}
          Results? More revenue, lower costs, and higher profits.
        </p>

        {/* CTA */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition "
        >
          Schedule a Strategy Call →
        </motion.a>

        {/* Partner Logos */}
        <div className="flex justify-center items-center gap-4 flex-wrap mt-6"> {/* reduced gap */}
          {partners.map((logo, i) => (
            <img key={i} src={logo} alt="Partner Logo" className="h-6" /> 
          ))}
        </div>
      </div>
    </section>
  );
}
