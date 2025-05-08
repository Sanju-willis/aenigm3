'use client';

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  { title: "A/B Testing", img: "/images/ab-testing.png" },
  { title: "Customer Journey Mapping", img: "/images/customer-journey.png" },
  { title: "User Flow Analysis", img: "/images/user-flow.png" },
  { title: "User Behavior Analysis", img: "/images/user-behavior.png" },
  { title: "Research & Data Analytics", img: "/images/data-analytics.png" },
  { title: "UX Auditing & Funnel Optimization", img: "/images/ux-audit.png" },
  { title: "Heatmaps & Session Recordings", img: "/images/heatmaps.png" },
  { title: "Polls & Surveys", img: "/images/polls.png" },
];

export default function CROServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          Our <span className="text-pink-600">CRO</span> Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex"
            >
              <Card className="w-full bg-white border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 mb-4 flex items-center justify-center">
                      <img 
                        src={service.img} 
                        alt={service.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-base font-medium text-center text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
