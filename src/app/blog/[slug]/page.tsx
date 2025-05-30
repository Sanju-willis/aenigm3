import { client } from '@/lib/sanity';
import { PortableText, PortableTextBlock } from '@portabletext/react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { components } from '@/components/sanity/PortableText';
import BlogLayout from '@/components/blog/BlogLayout';

export const dynamic = 'force-dynamic';

type Heading = {
  text: string;
  id: string;
  level: 'h1' | 'h2' | 'h3';
};

type Post = {
  title: string;
  body: PortableTextBlock[];
  publishedAt: string;
  mainImage?: { asset?: { url: string } };
  author?: {
    name: string;
    image?: { asset?: { url: string } };
  };
};

function extractText(children: ReactNode): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(extractText).join(' ');
  if (typeof children === 'object' && children && 'props' in children) {
    // @ts-ignore
    return extractText(children.props?.children);
  }
  return '';
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post: Post | null = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      publishedAt,
      mainImage {
        asset -> { url }
      },
      author -> {
        name,
        image {
          asset -> { url }
        }
      }
    }`,
    { slug }
  );

  if (!post) notFound();

  const headingIdMap = new Map<string, number>();

  const headings: Heading[] = post.body
    .filter(
      (block): block is PortableTextBlock & { style: 'h1' | 'h2' | 'h3' } =>
        block._type === 'block' &&
        typeof block.style === 'string' &&
        ['h1', 'h2', 'h3'].includes(block.style) &&
        Array.isArray(block.children)
    )
    .map((block) => {
      const rawText = block.children
        .map((child) => typeof child.text === 'string' ? child.text : '')
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
        level: block.style as 'h1' | 'h2' | 'h3',
      };
    });

  return (
    <BlogLayout headings={headings}>
      {post.mainImage?.asset?.url && (
        <Image
          priority
          src={post.mainImage.asset.url}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-auto rounded-xl shadow mb-6 object-cover"
        />
      )}

      <h1 className="text-4xl font-bold mt-2 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {new Date(post.publishedAt).toDateString()}
      </p>

      {post.author?.name && (
        <div className="flex items-center gap-2 mb-6">
          {post.author.image?.asset?.url && (
            <Image
              src={post.author.image.asset.url}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full object-cover w-8 h-8"
            />
          )}
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {post.author.name}
          </span>
        </div>
      )}

      <PortableText value={post.body} components={components} />
    </BlogLayout>
  );
}
