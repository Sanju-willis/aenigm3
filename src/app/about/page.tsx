// src\app\about\page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import OurPresence from '@/components/about-page/OurPresence';
import LeadershipTeam from '@/components/about-page/team';
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AboutUsPage() {
  const items = [
    {
      title: "Influencer Gaps",
      description:
        "Influencer partnerships that generate likes—but not sales. We help align brand and audience to drive real business results.",
    },
    {
      title: "Website Performance Issues",
      description:
        "Your website may get traffic, but not traction. We identify drop-offs, optimize funnels, and convert visits into value.",
    },
    {
      title: "Social Media Challenges",
      description:
        "High follower counts mean nothing without engagement. We build systems that turn scrolling into conversions.",
    },
  ];



  return (
    <main className="bg-white text-gray-800">
      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-b">
        <h2 className="text-4xl font-bold mb-12 text-center">Who <span className="text-pink-500">We Are</span></h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-6">
          {/* Left - Text */}
          <div className="w-full md:w-1/2 flex justify-center">
            <p className="text-lg leading-relaxed max-w-xl text-center">
              At Aenigm3 Labs, we’re more than a digital agency—we’re a team of growth-obsessed problem solvers, data geeks, and creative minds on a mission to make marketing actually matter. Born during a time of uncertainty, we turned frustration into focus and built a lab where strategy meets innovation. We’re not here to chase trends or deliver fluff—we craft systems that turn traffic into conversions and insights into impact. With CRO at our core and AI powering our future, we help ambitious brands go from busy to better, and from seen to unforgettable.
            </p>
          </div>

          {/* Right - Image */}
          <div className="w-full md:w-1/2 max-w-md flex justify-center">
            <img
              src="/about/about1.png"
              alt="Who We Are"
              className="w-30 h-auto rounded-lg"
            />
          </div>
        </div>
      </section>


      {/* Our Mission */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center border-b bg-gray-50">
        <h2 className="text-4xl font-bold mb-6">Our <span className="text-pink-500">Mission</span></h2>
        <p className="max-w-2xl mx-auto">
          At Aenigm3 Labs, our mission is simple: to turn digital noise into meaningful results. We exist to help ambitious brands stop guessing and start growing—by replacing outdated marketing fluff with data-driven clarity, smarter strategy, and next-gen tools like AI. We're not just about getting more clicks or traffic—we’re here to optimize every interaction, every funnel, every experience, so your business gets more of what actually matters: conversions, revenue, and sustainable growth. We build systems that evolve, strategies that scale, and campaigns that work—because growth isn’t just a goal, it’s our obsession.
        </p>
      </section>

      {/* Why Us */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b">
        <h2 className="text-4xl font-bold text-center mb-12">Why <span className="text-pink-500">Us </span></h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
            <img src="/about/about4.png" alt="Result-Oriented Approach" className="mx-auto mb-4 w-30 h-30" />
            <h3 className="text-xl font-semibold mb-2">Result-Oriented Approach</h3>
            <div className="w-48 h-0.5 bg-gray-300 mx-auto my-4"></div>
            <p className="text-gray-600 text-base">
              We don't chase vanity metrics. Every strategy we design is rooted in performance—focusing on what truly matters: growth, conversions, and ROI. Your success is the only benchmark that counts.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
            <img src="/about/about3.png" alt="Customized Strategies" className="mx-auto mb-4 w-30 h-30" />
            <h3 className="text-xl font-semibold mb-2">Customized Strategies</h3>
            <div className="w-48 h-0.5 bg-gray-300 mx-auto my-4"></div>
            <p className="text-gray-600 text-base">
              One-size-fits-all doesn't work. We analyze your business, audience, and goals to craft tailor-made marketing blueprints that drive targeted results and scale with you.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
            <img src="/about/about2.png" alt="Transparency & Accountability" className="mx-auto mb-4 w-25 h-25" />
            <h3 className="text-xl font-semibold mb-2">Transparency & Accountability</h3>
            <div className="w-48 h-0.5 bg-gray-300 mx-auto my-4"></div>
            <p className="text-gray-600 text-base">
              We believe in honest, data-backed reporting. You’ll always know what’s working, what’s not, and what we’re doing about it—because your trust is our most valuable metric.
            </p>
          </div>
        </div>
      </section>



      {/* What We Solve */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center border-b">
        <h2 className="text-4xl font-bold mb-12">What We <span className="text-pink-600">Solve</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card key={index} className="py-6 px-4">
              <CardContent className="flex flex-col items-center gap-4">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <AlertTriangle className="text-yellow-500 w-10 h-10" />
                </motion.div>
                <h3 className="text-xl font-semibold text-center">
                  {item.title}
                </h3>
                <div className="w-48 h-0.5 bg-gray-200" />
                <p className="text-base text-gray-600 max-w-xs">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How We Drive Revenue */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center border-b">
        <h2 className="text-4xl font-bold mb-12">
          How We Drive <span className="text-pink-600">Revenue</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Left Card: Digital Marketing Solutions */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">Digital Marketing Solutions</h3>
            <p className="text-gray-600 text-sm mb-4">
              At Aenigm3Labs, we architect performance-driven strategies built to convert—not just attract.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <div>
                  <strong>Social Media Marketing</strong><br />
                  Smarter, engagement-focused campaigns that convert followers into leads.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <div>
                  <strong>Search Engine Optimization</strong><br />
                  Visibility meets conversion—optimized for both ranking and results.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <div>
                  <strong>PPC Advertising</strong><br />
                  Paid ads crafted with CRO in mind—more ROI, less waste.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <div>
                  <strong>Website Optimization</strong><br />
                  We make websites work harder—better UX, lower bounce, higher conversions.
                </div>
              </li>
            </ul>
          </div>

          {/* Right Card: Performance Analysis */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">Performance Analysis</h3>
            <p className="text-gray-600 text-sm mb-4">
              We turn data into direction—refining strategies for scalable growth.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <div>
                  <strong>Engagement Metrics</strong><br />
                  We track what matters—actual interactions, not vanity likes.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <div>
                  <strong>ROI Measurement</strong><br />
                  Every tactic is tracked against outcomes to ensure your money works harder.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <div>
                  <strong>Continuous Refinement</strong><br />
                  We optimize in real-time using behavior data and AI feedback loops.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Leadership Team */}
      <section>
      <LeadershipTeam/>
      <div className="max-w-9xl mx-auto border-b border-gray-300" />
      </section>
      
    </main>
  );
}
