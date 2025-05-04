'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Website Audit & Analysis",
    description: "Identify conversion blockers and sales leaks",
    img: "/images/website-audit.png",
  },
  {
    title: "Actionable Strategies",
    description: "Steps to boost sales and reduce drop-offs",
    img: "/images/actionable-strategies.png",
  },
  {
    title: "Personalized Recommendations",
    description: "Expert insights tailored to your business needs",
    img: "/images/personalized-recommendations.png",
  },
];

export default function GrowRevenueSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Ready to <span className="text-pink-600">Grow Your Revenue</span>
        </h2>
        <p className="text-muted-foreground mb-12">What You’ll Get</p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6">
                <CardContent className="flex flex-col items-center">
                  <img src={feature.img} alt={feature.title} className="h-24 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                  <CheckCircle className="text-green-500 w-6 h-6" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Button size="lg" className="px-8 flex items-center gap-2">
            <Rocket className="w-5 h-5" />
            Let’s Take Off!
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
