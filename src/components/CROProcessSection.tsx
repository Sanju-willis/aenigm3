'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    img: "/images/research.svg", // replace with real path
  },
  {
    title: "A/B Testing & UX Optimization",
    points: [
      "Experiment with different versions",
      "Improve layout, copy & mobile experience",
      "Reduce bounce rate & exits",
    ],
    img: "/images/abtesting.svg",
  },
  {
    title: "Implement & Scale",
    points: [
      "Roll out high-converting pages",
      "Track performance using analytics",
      "Continuous improvement for growth",
    ],
    img: "/images/scale.svg",
  },
  {
    title: "Implement Winning Strategies",
    points: [
      "Continuously tweak & improve",
      "Use live data insights",
    ],
    img: "/images/strategy.svg",
  },
];

const partners = [
  "/logos/vwo.svg",
  "/logos/google-analytics.svg",
  "/logos/hotjar.svg",
  "/logos/shopify.svg",
];

export default function CROProcessSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Our Simple <span className="text-pink-600">4-Step</span> CRO Process
        </h2>
        <p className="text-muted-foreground mb-10">
          We use science—not assumptions—to increase conversions.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <img src={step.img} alt={step.title} className="h-20 mx-auto mb-4" />
                  <CardTitle className="text-lg">
                    {step.title}
                    {step.subtitle && (
                      <div className="text-sm text-muted-foreground">{step.subtitle}</div>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    {step.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <p className="text-lg font-medium mb-4">
          Results? More revenue, lower costs, and higher profits.
        </p>
        <Button size="lg" className="mb-10">
          Schedule a Strategy Call →
        </Button>

        {/* Partner Logos */}
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {partners.map((logo, i) => (
            <img key={i} src={logo} alt="Partner Logo" className="h-8" />
          ))}
        </div>
      </div>
    </section>
  );
}
