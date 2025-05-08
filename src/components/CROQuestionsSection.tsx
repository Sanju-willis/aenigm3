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
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          &quot;We understand that you are worried&quot;
        </h2>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-6 text-left">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-3">
                <span className="font-bold text-blue-600">{faq.number}</span>
                <div>
                  <h3 className="font-semibold">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
              <hr className="my-4 border-gray-200" />
            </motion.div>
          ))}
        </div>

        {/* CTA Block */}
        <motion.div
          className="mt-12 flex justify-center items-center flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-xl font-semibold mb-6">
            Want to See Which CRO Strategy Works for You?
          </h3>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
        </motion.div>
      </div>
    </section>
  );
}
