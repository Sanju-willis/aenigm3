'use client';

import React, { useEffect, useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const sections = [
  { id: 'conversion-problem', label: 'Conversion Problem' },
  { id: 'why-marketing', label: 'Why Marketing' },
  { id: 'big-mistakes', label: 'Big Mistakes' },
  { id: 'cro-process', label: 'CRO Process' },
  { id: 'is-cro-right', label: 'Is CRO Right?' },
  { id: 'cro-questions', label: 'Questions' },
  { id: 'cro-services', label: 'Services' },
  { id: 'grow-revenue', label: 'Grow Revenue' },
];

export default function SecondaryNav() {
  const [active, setActive] = useState(sections[0].id);
  const [showNav, setShowNav] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.querySelector('section#hero');
      if (heroEl) {
        const heroBottom = heroEl.getBoundingClientRect().bottom;
        setShowNav(heroBottom <= 0);
      }

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(section.id);
            break;
          }
        }
      }

      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div
        className={`sticky top-16 z-40 bg-white shadow-sm border-y transform transition-transform duration-300 ${
          showNav ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 flex space-x-6 overflow-x-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative whitespace-nowrap py-3 px-2 text-sm font-medium ${
                active === section.id ? 'text-blue-600' : 'text-gray-500'
              } hover:text-blue-600 transition`}
            >
              {section.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 transform transition-transform duration-300 ${
                  active === section.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-600 p-3 text-white shadow-lg hover:bg-blue-500 transition"
          aria-label="Back to top"
        >
          <ChevronUpIcon className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
