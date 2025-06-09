// src\app\blog\[slug]\page.tsx
import { client } from '@/lib/sanity';
import { notFound } from 'next/navigation';
import BlogLayout from './BlogLayout';
import PostContent from './PostContent';
import { PortableTextBlock } from '@portabletext/react';


export const dynamic = 'force-dynamic';

function extractHeadings(blocks: PortableTextBlock[]) {
  const headingIdMap = new Map<string, number>();

  return blocks
    .filter(
      (block): block is PortableTextBlock & { style: 'h1' | 'h2' | 'h3' } =>
        block._type === 'block' &&
        typeof block.style === 'string' &&
        ['h1', 'h2', 'h3'].includes(block.style) &&
        Array.isArray(block.children)
    )
    .map((block) => {
      const rawText = block.children
        .map((child: any) => typeof child.text === 'string' ? child.text : '')
        .join(' ')
        .trim();

      const baseId = rawText
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9\-]/g, '') || 'section';

      const count = headingIdMap.get(baseId) || 0;
      headingIdMap.set(baseId, count + 1);

      const id = count === 0 ? baseId : `${baseId}-${count}`;

      return {
        text: rawText,
        id,
        level: block.style,
      };
    });
}

// ✅ FIX: update the function signature to avoid type error
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title, body, publishedAt,
      mainImage { asset -> { url } },
      author -> { name, image { asset -> { url } } }
    }`,
    { slug }
  );

  if (!post) notFound();

  const headings = extractHeadings(post.body);

  return (
    <BlogLayout headings={headings}author={post.author}>
      <PostContent post={post} headings={headings} />
    </BlogLayout>
  );
}
