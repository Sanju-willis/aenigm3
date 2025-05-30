// src/components/blog/BlogLayout.tsx
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
      rootMargin: '0px 0px -60% 0px',
      threshold: 0.4,
    });

    const targets = document.querySelectorAll('h1, h2, h3');
    targets.forEach((el) => observer.current?.observe(el));

    return () => observer.current?.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) progressBar.style.width = `${scrolled}%`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-all"
      ></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 px-6 py-12 antialiased">
        <article className="prose prose-lg dark:prose-invert">
          {children}

          <div className="mt-16 text-sm text-gray-600 dark:text-gray-300">
            <p>💬 Did this help you? React below or leave a comment.</p>
            <div className="flex gap-4 mt-2">
              <button className="text-2xl">👍</button>
              <button className="text-2xl">👎</button>
              <button className="text-2xl">🔥</button>
              <button className="text-2xl">🤯</button>
            </div>
          </div>
        </article>

        <aside
          className="hidden lg:block sticky top-24 h-fit border p-5 rounded-xl shadow-sm bg-white dark:bg-gray-900 ml-auto w-full max-w-[280px]"
          aria-label="Table of contents"
        >
          <h2 className="text-base font-semibold mb-4 text-gray-700 dark:text-gray-200">
            On this page
          </h2>
          <ul className="space-y-2 text-sm">
            {headings.map((h) => (
              <li
                key={h.id}
                className={`pl-${h.level === 'h3' ? 6 : h.level === 'h2' ? 3 : 0}`}
              >
                <a
                  href={`#${h.id}`}
                  title={`Go to section: ${h.text}`}
                  className={`block hover:underline transition-colors duration-200 ${
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

          <div className="mt-6">
            <a
              href="#top"
              className="block text-center text-xs mt-4 text-blue-500 hover:underline"
            >
              ⬆ Back to top
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
