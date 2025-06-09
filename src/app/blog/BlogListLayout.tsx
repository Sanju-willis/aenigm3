// src\app\blog\BlogListLayout.tsx
'use client';

import { ReactNode } from 'react';
import { interTight } from '@/utils/fonts';

interface BlogListLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

// BlogListLayout.tsx
export default function BlogListLayout({ children, sidebar }: BlogListLayoutProps) {
  return (
    <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 ${interTight.variable}`}>
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {children}
      </div>
      <aside className="sticky top-24 h-fit">{sidebar}</aside>
    </section>
  );
}

