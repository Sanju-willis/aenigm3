// src\components\blog\BlogLayout.tsx
'use client';

import { Heading } from '@/types/heading';
import { useEffect, useRef, useState } from 'react';
import BlogSidebar from './blog-side';

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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_280px] gap-8 px-10 py-12 antialiased">
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

        <BlogSidebar headings={headings} activeId={activeId} />
      </div>
    </>
  );
}
