// src\app\blog\BlogListLayout.tsx
'use client';

import { ReactNode } from 'react';
import { interTight } from '@/utils/fonts';

interface BlogListLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

export default function BlogListLayout({ children, sidebar }: BlogListLayoutProps) {
  return (
    <section
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-4 gap-10 font-sans ${interTight.variable}`}
    >
      <div className="lg:col-span-3 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {children}
      </div>
      <aside className="lg:col-span-1">{sidebar}</aside>
    </section>
  );
}
