// src\app\about\page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import OurPresence from '@/components/about-page/OurPresence';
import LeadershipTeam from '@/components/about-page/team';
import Hexagon from '@/components/about-page/Hexagon';
import AboutHero from '@/components/about-page/Hero';
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AboutUsPage() {
 
  return (
    <main className="bg-white">
      {/* Hero section */}
      <section id="about-hero">
        <AboutHero />
        <div className="max-w-5xl mx-auto border-b border-gray-300" />
      </section>
      {/* Hexagon Section */}
      <section id="hexagon">
        <Hexagon />
        <div className="max-w-5xl mx-auto border-b border-gray-300" />
      </section>
      {/* Leadership Team */}
      <section id="leadership-team">
        <LeadershipTeam />
        <div className="max-w-5xl mx-auto border-b border-gray-300" />
      </section>

    </main>
  );
}
