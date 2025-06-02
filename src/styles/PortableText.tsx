// src\styles\PortableText.tsx
import { PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import { ReactNode } from 'react';
import { urlFor } from '@/lib/sanityImage';

function extractText(children: ReactNode): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(extractText).join(' ');
  if (typeof children === 'object' && children !== null && 'props' in children) {
    // @ts-ignore
    return extractText(children.props?.children);
  }
  return '';
}

export const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => {
      const text = extractText(children);
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '') || 'section';
      return (
        <h1
          id={id}
          className="scroll-mt-32 text-5xl font-extrabold tracking-tight leading-tight mt-16 mb-8"
        >
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      const text = extractText(children);
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '') || 'section';
      return (
        <h2
          id={id}
          className="scroll-mt-28 text-3xl font-bold leading-snug mt-14 mb-6"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const text = extractText(children);
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '') || 'section';
      return (
        <h3
          id={id}
          className="scroll-mt-24 text-2xl font-semibold leading-snug mt-10 mb-4"
        >
          {children}
        </h3>
      );
    },
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-5 italic text-gray-600 dark:text-gray-300 text-lg leading-relaxed my-6">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-lg leading-8 my-6 text-gray-800 dark:text-gray-200">
        {children}
      </p>
    ),
  },
  types: {
    image: ({ value }: any) => {
      const url = value?.asset ? urlFor(value).width(700).height(400).url() : null;
      if (!url) return null;

      return (
    <div className="my-8 mx-auto w-full max-w-3xl">
  <Image
    src={url}
    alt={value.alt || 'Blog image'}
    width={700}
    height={400}
    loading="lazy"
    className="rounded-xl w-full h-auto object-cover"
  />
  {value.caption && (
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
      {value.caption}
    </p>
  )}
</div>
      );
    },
    youtube: ({ value }: any) => {
      const url = `https://www.youtube.com/embed/${value?.videoId}`;
      return (
        <div className="my-10 aspect-video">
          <iframe
            src={url}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 my-4 space-y-2 text-base leading-7 text-gray-800 dark:text-gray-200">
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="ml-2">{children}</li>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const rel = value.href.startsWith('http') ? 'noopener noreferrer' : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          target="_blank"
          className="text-blue-600 dark:text-blue-400 underline underline-offset-2 hover:text-blue-800 dark:hover:text-blue-300"
        >
          {children}
        </a>
      );
    },
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 text-pink-600 dark:text-pink-400 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
};
