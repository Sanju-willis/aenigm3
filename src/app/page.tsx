// src\app\page.tsx

import React from 'react';
import { Metadata } from 'next';
import SecondaryNav from '@/components/com-layout/SecondaryNav';
import HeroSection from '@/components/landing-page/1 - HeroSection';
import WhyMarketingSection from '@/components/landing-page/2- WhyMarketingSection';
import BigMistakesSection from '@/components/landing-page/5 - BigMistakesSection';
import CROProcessSection from '@/components/landing-page/6 - CROProcessSection';
import IsCRORightSection from '@/components/landing-page/7 - IsCRORightSection';
import CROQuestionsSection from '@/components/landing-page/8 - CROQuestionsSection';
import CROServicesSection from '@/components/landing-page/9 - ServicesSection';
import GrowRevenueSection from '@/components/landing-page/10 - GrowRevenueSection';
import WhyDigitalMarketingSection from '@/components/landing-page/3 - MarketingAloneSection';
import PowerOfCROSection from '@/components/landing-page/4 - PowerOfCROSection';



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
      <div className="max-w-5xl mx-auto border-b border-gray-300" />
      </section>

      {/* Sticky secondary nav */}
      <SecondaryNav />      <section id="why-marketing">
        <WhyMarketingSection />
        <div className="max-w-5xl mx-auto border-b border-gray-300" />
      </section>

      <section id="why-digital-marketing">
        <WhyDigitalMarketingSection />
        <div className="max-w-5xl mx-auto border-b border-gray-300" />
      </section>

      <section id="power-of-cro">
        <PowerOfCROSection />
        <div className="max-w-5xl mx-auto border-b border-gray-300" />
      </section>

      <section id="big-mistakes">
        <BigMistakesSection />
        <div className="max-w-5xl mx-auto border-b border-gray-300" />
      </section>

      <section id="cro-process">
        <CROProcessSection />
        <div className="max-w-5xl mx-auto border-b border-gray-300" />
      </section>

      <section id="is-cro-right">
        <IsCRORightSection />
        <div className="max-w-5xl mx-auto border-b border-gray-300" />
      </section>

      <section id="cro-questions">
        <CROQuestionsSection />
        <div className="max-w-5xl mx-auto border-b border-gray-300" />
      </section>

      <section id="cro-services">
        <CROServicesSection />
        <div className="max-w-5xl mx-auto border-b border-gray-300" />
      </section>

      <section id="grow-revenue">
        <GrowRevenueSection />
      </section>
     
    </main>
  );
}
