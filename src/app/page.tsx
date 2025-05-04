// src/app/page.tsx

import React from 'react';
import { Metadata } from 'next';
import SecondaryNav from '@/components/SecondaryNav';
import HeroSection from '@/components/HeroSection';
import ConversionProblemSection from '@/components/ConversionSection';
import WhyMarketingSection from '@/components/WhyMarketingSection';
import BigMistakesSection from '@/components/BigMistakesSection';
import CROProcessSection from '@/components/CROProcessSection';
import IsCRORightSection from '@/components/IsCRORightSection';
import CROQuestionsSection from '@/components/CROQuestionsSection';
import CROServicesSection from '@/components/CROServicesSection';
import GrowRevenueSection from '@/components/GrowRevenueSection';

export const metadata: Metadata = {
  title: 'Conversion Rate Optimization - Aenigm3 Labs',
  description:
    "Stop wasting money on marketing agencies that don't convert. Our data-driven CRO process helps you achieve better results.",
};

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero section */}
      <section id="hero">
    	<HeroSection />
      </section>

      {/* Sticky secondary nav */}
      <SecondaryNav />

      {/* Page sections with IDs */}
      <section id="conversion-problem">
        <ConversionProblemSection />
      </section>

      <section id="why-marketing">
        <WhyMarketingSection />
      </section>

      <section id="big-mistakes">
        <BigMistakesSection />
      </section>

      <section id="cro-process">
        <CROProcessSection />
      </section>

      <section id="is-cro-right">
        <IsCRORightSection />
      </section>

      <section id="cro-questions">
        <CROQuestionsSection />
      </section>

      <section id="cro-services">
        <CROServicesSection />
      </section>

      <section id="grow-revenue">
        <GrowRevenueSection />
      </section>
    </main>
  );
}
