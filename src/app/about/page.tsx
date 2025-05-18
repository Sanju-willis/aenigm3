// src\app\about\page.tsx
import React from 'react';
import Link from 'next/link';
import OurPresence from '@/components/landing-page/OurPresence';

export default function AboutUsPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center border-b">
        <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <img src="/about/who-we-are.jpg" alt="Who We Are" className="mx-auto w-64 h-auto rounded-lg" />
      </section>

      {/* Our Mission */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center border-b bg-gray-50">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="max-w-2xl mx-auto">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </section>

      {/* Why Us */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center border-b">
        <h2 className="text-4xl font-bold mb-12">Why Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Result-Oriented Approach', 'Customized Strategies', 'Transparency and Accountability'].map((title) => (
            <div key={title} className="bg-gray-50 p-6 rounded-lg">
              <img src="/about/why-us.jpg" alt={title} className="mx-auto mb-4 w-16 h-16" />
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm">Lorem Ipsum has been the standard dummy text since the 1500s.</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Solve */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center border-b bg-gray-50">
        <h2 className="text-4xl font-bold mb-12">What We Solve</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Influencer Marketing Inefficiencies', desc: 'Fails to drive actual sales.' },
            { title: 'Website Performance Issues', desc: 'Gets traffic but no leads.' },
            { title: 'Social Media Challenges', desc: 'Low engagement and no conversions.' },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white p-4 rounded-lg shadow">
              <img src="/about/problem-icon.png" alt="Problem" className="mx-auto mb-2 w-12 h-12" />
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Drive Revenue */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center border-b">
        <h2 className="text-4xl font-bold mb-12">
          How We Drive <span className="text-pink-600">Revenue</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-4 text-center">Digital Marketing Solutions</h3>
            <ul className="space-y-2">
              <li>✅ Social Media Marketing</li>
              <li>✅ SEO</li>
              <li>✅ PPC Advertising</li>
              <li>✅ Website Optimization</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-4 text-center">Performance Analysis</h3>
            <ul className="space-y-2">
              <li>✅ Engagement Metrics</li>
              <li>✅ ROI Measurement</li>
              <li>✅ Continuous Refinement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proven Results */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center border-b bg-gray-50">
        <div className="text-3xl mb-2">⭐⭐⭐⭐⭐</div>
        <h2 className="text-4xl font-bold mb-4">
          Proven <span className="text-pink-600">Results</span>
        </h2>
        <p>We deliver measurable outcomes for our clients.</p>
      </section>

      {/* History */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center border-b">
        <h2 className="text-4xl font-bold mb-8">
          History of <span className="text-pink-600">Aenigm3Labs</span>
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">Founding Story</h3>
            <p className="text-sm">Lorem Ipsum story text here.</p>
          </div>
          <div>
            <h3 className="font-semibold">Milestones</h3>
            <p className="text-blue-600 font-semibold">Partnership with Founder Institute</p>
            <p className="text-sm">Milestone description.</p>
            <p className="text-blue-600 font-semibold mt-2">Client Successes</p>
            <p className="text-sm">Client success description.</p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center border-b bg-gray-50">
        <h2 className="text-4xl font-bold mb-12">
          Meet Our <span className="text-pink-600">Leadership Team</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Sanju Peramuna', role: 'Co-Founder / CEO', linkedin: '#' },
            { name: 'Chamo Hewawasam', role: 'Co-Founder / COO', linkedin: '#' },
            { name: 'Chrislo Perera', role: 'Chief Admin Officer', linkedin: '#' },
            { name: 'Sandali Perera', role: 'Project Manager', linkedin: '#' },
            { name: 'Ann Thilangi', role: 'Digital Strategist', linkedin: '#' },
            { name: 'Anjana Kalpa', role: 'Creative Designer', linkedin: '#' },
            { name: 'Lashen Yasawardhana', role: 'Intern', linkedin: '#' },
          ].map((person) => (
            <div key={person.name} className="bg-white p-4 rounded-lg shadow">
              <img
                src={`/about/team/${person.name.toLowerCase().replace(' ', '-')}.jpg`}
                alt={person.name}
                className="mx-auto mb-2 w-24 h-24 rounded-full object-cover"
              />
              <h3 className="font-semibold">{person.name}</h3>
              <p className="text-sm">{person.role}</p>
              <Link
                href={person.linkedin}
                target="_blank"
                className="inline-flex items-center gap-1 mt-2 text-blue-600 hover:text-blue-800"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 
                  0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 
                  1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 
                  0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 
                  7 2.476v6.759z" />
                </svg>
                LinkedIn
              </Link>
            </div>
          ))}
        </div>
      </section>

      <OurPresence />
    </main>
  );
}
