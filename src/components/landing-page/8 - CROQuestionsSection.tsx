// src\components\landing-page\8 - CROQuestionsSection.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import AskCROForm from '../forms/AskCROForm';

const faqs = [
  {
    number: '01.',
    question: 'Why Work With a CRO Agency?',
    answer: 'While 1000s of agencies give you expenses, we focus on ROI.',
  },
  {
    number: '02.',
    question: 'Will it cost too much?',
    answer: 'CRO focuses on improving what you already have, making it a cost-effective solution.',
  },
  {
    number: '03.',
    question: 'What if I already have a marketing team?',
    answer: 'We complement your team by making their efforts more effective.',
  },
  {
    number: '04.',
    question: 'What if I don’t have much traffic yet?',
    answer: 'CRO ensures that any traffic you generate is converted at a higher rate.',
  },
  {
    number: '05.',
    question: 'How long before I see results?',
    answer: 'Many businesses see improvements within 4-6 weeks of implementing CRO strategies.',
  },
];

export default function CROQuestionsSection() {
  const [showAskCROForm, setShowAskCROForm] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showAskCROForm ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showAskCROForm]);

  return (
    <>
      <section className="global-section">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 leading-snug">
            We understand that you are worried
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex gap-4 items-start">
                  <span className="text-lg font-medium text-gray-600 w-12">{faq.number}</span>
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{faq.question}</h3>
                    <p className="text-brandblue text-base sm:text-lg">{faq.answer}</p>
                  </div>
                </div>
                {index < faqs.length - 1 && <hr className="mt-4 border-gray-200" />}
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg sm:text-xl font-semibold text-gray-500 mb-8">
              Want to See Which CRO Strategy Works for You?
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Button
                onClick={() => setShowAskCROForm(true)}
                size="lg"
                className="bg-purple-500 hover:bg-purple-600 text-white px-12 py-12 rounded-xl flex items-center gap-4 text-lg font-semibold"
                id="ask-cro-expert"
              >
                <Image
                  src="/expert.webp"
                  alt="Expert"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                Ask a CRO Expert
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {showAskCROForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg">
            <AskCROForm onClose={() => setShowAskCROForm(false)} />
          </div>
        </div>
      )}
    </>
  );
}
