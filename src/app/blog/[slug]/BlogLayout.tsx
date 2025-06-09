// src\app\blog\[slug]\BlogLayout.tsx
'use client';

import { Heading } from '@/types/heading';
import { useEffect, useRef, useState } from 'react';
import BlogSidebar from './blog-side';

interface BlogLayoutProps {
  children: React.ReactNode;
  headings: Heading[];
  author: {
    name: string;
    image?: { asset?: { url: string } };
    bio?: string;
  };
}


export default function BlogLayout({ children, headings, author }: BlogLayoutProps) {
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
      {/* Scroll Progress Bar */}
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-all"
      />

      {/* Main Layout */}
<div className="w-full px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-[280px_2fr] gap-6 py-5">
        {/* Sidebar */}
        <BlogSidebar headings={headings} activeId={activeId} />
        {/* Blog Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {children}

          {/* Emoji Reactions */}
          <div className="mt-20 border-t pt-8">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              💬 Did this help you? React below or leave a comment.
            </p>
            
          </div>

          {/* Author Bio */}
<div className="mt-16 pt-8 border-t text-sm text-gray-600 dark:text-gray-400 flex gap-4 items-start">
  {author.image?.asset?.url && (
    <img
      src={author.image.asset.url}
      alt={author.name}
      className="w-12 h-12 rounded-full object-cover mt-1"
    />
  )}
  <div>
    <p><strong>{author.name}</strong></p>
    {author.bio && <p className="mt-1">{author.bio}</p>}
  </div>
</div>


          {/* Similar Articles (Placeholder) */}
          <div className="mt-20 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4">Similar articles</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">[Article 1 Card]</div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">[Article 2 Card]</div>
            </div>
          </div>
        </article>

        
      </div>
    </>
  );
}
