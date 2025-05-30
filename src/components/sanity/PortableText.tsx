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
      return <h1 id={id} className="scroll-mt-32 text-3xl font-bold mt-14 mb-6">{children}</h1>;
    },
    h2: ({ children }) => {
      const text = extractText(children);
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '') || 'section';
      return <h2 id={id} className="scroll-mt-32 text-2xl font-bold mt-12 mb-4">{children}</h2>;
    },
    h3: ({ children }) => {
      const text = extractText(children);
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '') || 'section';
      return <h3 id={id} className="scroll-mt-32 text-xl font-semibold mt-8 mb-2">{children}</h3>;
    },
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic text-gray-600 dark:text-gray-300 my-4">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-base leading-relaxed my-4">{children}</p>
    ),
  },
  types: {
    image: ({ value }: any) => {
      const url = value?.asset ? urlFor(value).width(800).height(400).url() : null;
      if (!url) return null;

      return (
        <div className="my-6">
          <Image
            src={url}
            alt={value.alt || 'Blog image'}
            width={800}
            height={400}
            className="rounded-lg w-full h-auto object-cover"
          />
          {value.caption && (
            <p className="text-sm text-muted-foreground mt-2 text-center">{value.caption}</p>
          )}
        </div>
      );
    },

    // Embedded YouTube block (assumes _type: 'youtube' in Sanity)
    youtube: ({ value }: any) => {
      const url = `https://www.youtube.com/embed/${value?.videoId}`;
      return (
        <div className="my-8 aspect-video">
          <iframe
            src={url}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 my-4">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="mb-2">{children}</li>
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
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      );
    },
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
};
