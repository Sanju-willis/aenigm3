// src\components\landing-page\CROQuestionsSection.tsx
'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const faqs = [
  {
    number: "01.",
    question: "Why Work With a CRO Agency?",
    answer: "While 1000s of agencies give you expenses, we focus on ROI.",
  },
  {
    number: "02.",
    question: "Will it cost too much?",
    answer: "CRO focuses on improving what you already have, making it a cost-effective solution.",
  },
  {
    number: "03.",
    question: "What if I already have a marketing team?",
    answer: "We complement your team by making their efforts more effective.",
  },
  {
    number: "04.",
    question: "What if I don’t have much traffic yet?",
    answer: "CRO ensures that any traffic you generate is converted at a higher rate.",
  },
  {
    number: "05.",
    question: "How long before I see results?",
    answer: "Many businesses see improvements within 4-6 weeks of implementing CRO strategies.",
  },
];

export default function CROQuestionsSection() {
  return (    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          We understand that you are worried
        </h2>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <span className="text-lg font-medium text-gray-600 w-12">{faq.number}</span>
                <div className="flex-1">                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-brandblue text-lg">{faq.answer}</p>
                </div>
              </div>
              {index < faqs.length - 1 && (
                <hr className="mt-6 border-gray-200" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="mt-16 text-center">
          <p className="text-2xl font-semibold text-gray-500 mb-8">
            Want to See Which CRO Strategy Works for You?
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-purple-500 text-white px-12 py-12 rounded-xl flex items-center gap-4 hover:bg-purple-600 text-lg font-semibold"
            >
              <img
                src="expert.png"
                alt="Expert"
                className="w-12 h-12 rounded-full"
              />
              Ask a CRO Expert
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
