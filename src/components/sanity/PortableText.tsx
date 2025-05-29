import { PortableTextComponents } from '@portabletext/react';
import { ReactNode } from 'react';

function extractText(children: ReactNode): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) {
    return children.map(child => extractText(child)).join(' ');
  }
  if (typeof children === 'object' && children !== null && 'props' in children) {
    // @ts-ignore
    return extractText(children.props?.children);
  }
  return '';
}

export const components: PortableTextComponents = {
  block: {
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
  },
};
