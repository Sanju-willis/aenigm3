'use client';

import { Heading } from '@/types/heading';
import { useEffect, useRef, useState } from 'react';

interface BlogLayoutProps {
  children: React.ReactNode;
  headings: Heading[];
}

export default function BlogLayout({ children, headings }: BlogLayoutProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      rootMargin: '0px 0px -80% 0px',
      threshold: 1.0,
    });

    const targets = document.querySelectorAll('h1, h2, h3');
    targets.forEach((el) => observer.current?.observe(el));

    return () => observer.current?.disconnect();
  }, []);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 p-6 antialiased">
      <article className="prose prose-lg dark:prose-invert col-span-1 lg:col-span-3">
        {children}
      </article>

      {/* TOC */}
      <aside
        className="hidden lg:block col-span-1 sticky top-24 h-fit border p-4 rounded-lg shadow-sm bg-white dark:bg-gray-900"
        aria-label="Table of contents"
      >
        <h2 className="text-md font-semibold mb-3 text-gray-700 dark:text-gray-200">
          On this page
        </h2>
        <ul className="space-y-2 text-sm">
          {headings.map((h) => (
            <li
              key={h.id}
              className={`ml-${h.level === 'h3' ? 6 : h.level === 'h2' ? 3 : 0}`}
            >
              <a
                href={`#${h.id}`}
                className={`block hover:underline ${
                  activeId === h.id
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
