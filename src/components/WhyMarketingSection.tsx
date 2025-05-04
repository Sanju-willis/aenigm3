'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const painPoints = [
  "Running ads & driving traffic",
  "Social media marketing",
  "High ad spend with little return",
  "Expensive beautiful website / Applications",
];

const benefits = [
  "Website / Application optimization for higher conversions",
  "Reducing friction in your sales funnel",
  "Fixing drop-offs & improving UX",
  "Improving customer retention",
];

export default function WhyMarketingSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Why Digital Marketing Alone Isn’t Enough
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Left Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="bg-muted">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Most agencies only focus on:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {painPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <XCircle className="text-red-500 w-5 h-5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Card className="bg-muted">
              <CardHeader>
                <CardTitle className="text-lg text-blue-600">We focus on:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 w-5 h-5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg font-semibold mb-4">
            More conversions = More revenue from the same traffic.
          </p>
          <Button size="lg">Start Optimizing Now →</Button>
        </div>
      </div>
    </section>
  );
}
