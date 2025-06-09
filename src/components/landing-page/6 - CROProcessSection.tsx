// src\components\landing-page\6 - CROProcessSection.tsx
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';
import StrategyCallForm from '../forms/StrategyCallForm';

const steps = [
  {
    title: 'Research & Deep Data Analysis',
    subtitle: "(Find What's Wrong)",
    points: [
      'Heatmaps & session recordings',
      'User behavior analysis',
      'Identify high-risk pages',
    ],
    img: '/images/research.webp',
  },
  {
    title: 'A/B Testing & UX Optimization',
    subtitle: '(See What Works Best)',
    points: [
      'Experiment with different versions',
      'Improve layout, copy & mobile experience',
      'Reduce bounce rate & exits',
    ],
    img: '/images/abtesting.webp',
  },
  {
    title: 'Deploy, Track, Optimize & Scale',
    subtitle: '(Accelerate Your Growth Engine)',
    points: [
      'Roll out high-converting pages',
      'Track performance using analytics',
      'Continuous improvement for growth',
    ],
    img: '/images/scale.webp',
  },
  {
    title: 'Implement Winning Strategies',
    subtitle: '(Turn Plans into Profit)',
    points: ['Continuously tweak & improve', 'Use live data insights'],
    img: '/images/strategy.webp',
  },
];

export default function CROProcessSection() {
  const [showStrategyCallForm, setShowStrategyCallForm] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showStrategyCallForm ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showStrategyCallForm]);

  return (
    <>
      <section className="global-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
              Our Simple <span className="text-pink-600">4-Step</span> CRO Process
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              We use science—not assumptions—to increase conversions.
            </p>
          </div>

          {/* Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                      <Image
                        src={step.img}
                        alt={step.title}
                        fill
                        sizes="(max-width: 768px) 80px, 96px"
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm text-gray-500">{step.subtitle}</p>
                    <ul className="space-y-2 text-left w-full mt-2">
                      {step.points.map((point, i) => (
                        <li key={i} className="relative pl-5 text-sm text-gray-600">
                          <span className="absolute left-0 top-0 text-brandblue">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Result Statement */}
          <div className="text-center mt-12">
            <p className="text-lg sm:text-xl font-semibold text-gray-500">
              Results? More revenue, lower costs, and higher profits.
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showStrategyCallForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg">
            <StrategyCallForm onClose={() => setShowStrategyCallForm(false)} />
          </div>
        </div>
      )}
    </>
  );
}
