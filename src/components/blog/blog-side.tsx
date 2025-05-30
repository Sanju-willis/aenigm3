'use client';

import { Heading } from '@/types/heading';

interface BlogSidebarProps {
  headings: Heading[];
  activeId: string | null;
}

export default function BlogSidebar({ headings, activeId }: BlogSidebarProps) {
  return (
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
  );
}