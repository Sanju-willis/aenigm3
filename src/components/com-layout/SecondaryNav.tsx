// src\components\com-layout\SecondaryNav.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const sections = [
  { id: 'why-marketing', label: 'Why Marketing' },
  { id: 'why-digital-marketing', label: 'Why Digital Marketing' },
  { id: 'power-of-cro', label: 'Power of CRO' },
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
      const secondSection = document.getElementById('why-marketing');
      if (secondSection) {
        const sectionOffsetTop = secondSection.offsetTop;
        const currentScroll = window.scrollY || window.pageYOffset;
        setShowNav(currentScroll >= sectionOffsetTop - 100); // Show 10px before section
      }

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
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
      {/* Only visible on md and above screens */}
      <div
        className={`hidden md:flex justify-center sticky top-20 z-40 bg-blue-50 shadow border rounded-full w-auto max-w-6xl mx-auto px-4 py-3 transform transition-transform duration-300 ${
          showNav ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}
      >
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-4 overflow-x-auto no-scrollbar">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative whitespace-nowrap text-xs sm:text-sm font-medium px-2 py-1 ${
                active === section.id ? 'text-blue-600' : 'text-gray-500'
              } hover:text-brandblue transition`}
            >
              {section.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-0.5 w-full bg-brandblue transform transition-transform duration-300 ${
                  active === section.id ? 'scale-x-100' : 'scale-x-0'
                }`}
                style={{ transformOrigin: 'left' }}
              />
            </button>
          ))}
        </div>
      </div>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-brandblue p-3 text-white shadow-lg hover:bg-brandblue/90 transition"
          aria-label="Back to top"
        >
          <ChevronUpIcon className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
