'use client';

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  { title: "A/B Testing", img: "/images/ab-testing.svg" },
  { title: "Customer Journey Mapping", img: "/images/journey-mapping.svg" },
  { title: "User Flow Analysis", img: "/images/user-flow.svg" },
  { title: "User Behavior Analysis", img: "/images/user-behavior.svg" },
  { title: "Research & Data Analytics", img: "/images/data-analytics.svg" },
  { title: "UX Auditing & Funnel Optimization", img: "/images/ux-audit.svg" },
  { title: "Heatmaps & Session Recordings", img: "/images/heatmaps.svg" },
  { title: "Polls & Surveys", img: "/images/polls-surveys.svg" },
];

export default function CROServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Our <span className="text-pink-600">CRO</span> Services
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4">
                <CardContent className="flex flex-col items-center">
                  <img src={service.img} alt={service.title} className="h-20 mb-4" />
                  <h3 className="text-sm font-medium">{service.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
