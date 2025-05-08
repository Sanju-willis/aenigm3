'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import MultiStepForm from './forms/MultiStepForm';

export default function HeroSection() {
  const [showDigitalMarketing, setShowDigitalMarketing] = useState(true);
  const [showConversion, setShowConversion] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [rotateBox, setRotateBox] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Box rotation effect with pause functionality
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (isAutoRotating) {
      intervalId = setInterval(() => {
        setRotateBox(prev => !prev);
      }, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoRotating]);

  const handleBoxClick = () => {
    // Pause auto-rotation
    setIsAutoRotating(false);
    // Flip the box
    setRotateBox(prev => !prev);
    // Resume auto-rotation after 6 seconds
    setTimeout(() => {
      setIsAutoRotating(true);
    }, 6000);
  };

  // Text animation sequence
  useEffect(() => {
    const animationSequence = () => {
      setShowDigitalMarketing(true);
      setShowConversion(false);

      setTimeout(() => {
        setShowDigitalMarketing(false);
        setTimeout(() => {
          setShowConversion(true);
        }, 500);
      }, 3000);
    };

    animationSequence();
    const interval = setInterval(animationSequence, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate overflow-hidden pt-20 pb-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative min-h-[400px] ml-10">
            <div className="relative flex flex-col space-y-8">
              {/* Conversion Rate Optimization - Top */}
              <AnimatePresence>
                {showConversion && (
                  <motion.h1
                    className="text-6xl sm:text-7xl font-bold tracking-tight"
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{
                      opacity: 1,
                      y: [0, -15, 0],
                      filter: "blur(0px)",
                      color: ["#000000", "#2563eb", "#000000"],
                      textShadow: [
                        "0 0 0px rgba(37,99,235,0)",
                        "0 0 30px rgba(37,99,235,0.8)",
                        "0 0 0px rgba(37,99,235,0)"
                      ]
                    }}
                    transition={{
                      y: {
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                      },
                      color: {
                        duration: 2,
                        times: [0, 0.5, 1],
                        ease: "easeInOut",
                        repeat: Infinity
                      },
                      textShadow: {
                        duration: 2,
                        times: [0, 0.5, 1],
                        ease: "easeInOut",
                        repeat: Infinity
                      }
                    }}
                  >
                    Conversion Rate Optimization
                  </motion.h1>
                )}
              </AnimatePresence>

              {/* Digital Marketing and Agency */}
              <div className="mt-4 relative">
                <AnimatePresence>
                  {showDigitalMarketing && (
                    <motion.span
                      className="text-5xl text-black inline-block relative"
                      initial={{ opacity: 1 }}
                      exit={{
                        opacity: 0,
                        filter: "blur(10px)",
                        x: -100,
                        transition: {
                          duration: 0.5,
                          ease: "easeOut"
                        }
                      }}
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <span className="relative">
                        Digital Marketing
                        <motion.span 
                          className="absolute left-0 right-0 top-1/2 h-[3px] bg-red-500 origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        />
                      </span>
                    </motion.span>
                  )}
                </AnimatePresence>
                {/* Static Agency text */}
                <span className="text-5xl font-light text-black ml-2">
                  Agency
                </span>
              </div>

              {/* Description */}
              <motion.p
                className="text-xl leading-8 text-gray-600 max-w-2xl mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Helping Direct to Consumer businesses to increase sales & revenue by optimizing
                conversion with Data Driven Insights & Testing.
              </motion.p>
            </div>
          </div>

          {/* Right Box with flip animation */}
          <motion.div
            className="flex flex-col items-center lg:items-end text-center pl-1 perspective-1000"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div 
              className="relative w-full max-w-sm cursor-pointer" 
              style={{ transformStyle: "preserve-3d" }}
              onClick={handleBoxClick}
            >
              <motion.div
                className="w-full bg-blue-50 rounded-xl p-8 shadow-md"
                animate={{ 
                  rotateY: rotateBox ? 180 : 0
                }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeInOut"
                }}
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "translateZ(1px)",
                  transformStyle: "preserve-3d"
                }}
              >
                <div className="transform-preserve-3d">
                  <p className="text-lg text-gray-700 mb-2">Guaranteed</p>
                  <p className="text-4xl font-bold text-blue-600 mb-2">2X ROI in 160 days</p>
                  <p className="text-lg text-gray-700 mb-2">or We Work for</p>
                  <p className="text-5xl font-bold text-blue-600 mb-6">FREE!</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowForm(true);
                    }}
                    className="inline-block rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow hover:bg-blue-500 transition"
                  >
                    See If My Business Qualifies →
                  </button>
                </div>
              </motion.div>

              <motion.div
                className="w-full bg-blue-50 rounded-xl p-8 shadow-md absolute inset-0"
                animate={{ 
                  rotateY: rotateBox ? 0 : -180
                }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeInOut"
                }}
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "translateZ(1px) rotateY(180deg)",
                  transformStyle: "preserve-3d"
                }}
              >
                <div className="transform-preserve-3d">
                  <p className="text-lg font-semibold text-blue-600 mb-2">Get a Personal AI Media Buyer</p>
                  <p className="text-sm text-gray-700 mb-3">
                    Test creatives? Scale audiences? Set automation?
                  </p>
                  <p className="text-sm text-gray-700 mb-5">
                    The AI Marketer audits your account, identifies weaknesses and opportunities,
                    and tells you exactly what to do next!
                  </p>
                  <button className="inline-block rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow hover:bg-blue-500 transition cursor-not-allowed">
                    Coming Soon
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Centered Check Marks */}
        <div className="mt-12 flex justify-center gap-x-12">
          {['0$ Ads spent', 'Data Driven Decisions', 'Increased Conversions'].map((item) => (
            <div key={item} className="flex items-center">
              <span className="text-green-500 text-2xl mr-3">✅</span>
              <span className="text-xl text-gray-700 font-3xl">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* AnimatePresence for form modal */}
      <AnimatePresence>
        {showForm && (
          <MultiStepForm open={showForm} onClose={() => setShowForm(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}
