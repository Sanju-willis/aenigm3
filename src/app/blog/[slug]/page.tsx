import { client } from '@/lib/sanity';
import { PortableText, PortableTextBlock, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

export const dynamic = 'force-dynamic';

type Heading = {
  text: string;
  id: string;
  level: 'h2' | 'h3';
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

// Util: safely extract plain text from ReactNode
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
      (block): block is PortableTextBlock & { style: 'h2' | 'h3' } =>
        block._type === 'block' &&
        typeof block.style === 'string' &&
        ['h2', 'h3'].includes(block.style) &&
        typeof block.children?.[0]?.text === 'string'
    )
    .map((block) => {
      const rawText = block.children?.[0]?.text ?? '';
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
        level: block.style as 'h2' | 'h3',
      };
    });

  const components: PortableTextComponents = {
    types: {
      image: ({ value }) => {
        const url = value?.asset?.url;
        if (!url) return null;
        return (
          <Image
            src={url}
            alt={value.alt || 'Post image'}
            width={800}
            height={400}
            className="rounded-lg my-4"
          />
        );
      },
    },
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
      normal: ({ children }) => (
        <p className="text-base leading-relaxed my-4">{children}</p>
      ),
    },
    marks: {
      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      link: ({ value, children }) => (
        <a href={value.href} className="text-blue-600 underline" target="_blank" rel="noreferrer">
          {children}
        </a>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc list-inside space-y-2 my-4">{children}</ul>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li>{children}</li>,
    },
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row p-6 gap-8">
      {/* Main Content */}
      <article className="prose max-w-none lg:w-3/4">
        {post.mainImage?.asset?.url && (
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg mb-6 object-cover"
          />
        )}

        <h1>{post.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          {new Date(post.publishedAt).toDateString()}
        </p>

        {/* Author Info */}
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

        {/* Rich Text Content */}
        <PortableText value={post.body} components={components} />
      </article>

      {/* Sidebar TOC */}
      <aside className="w-full lg:w-1/4 sticky top-20 h-fit border p-4 rounded-lg shadow-sm">
        <h2 className="text-md font-semibold mb-3">On this page</h2>
        <ul className="space-y-2 text-sm">
          {headings.map((h) => (
            <li key={h.id} className={`ml-${h.level === 'h3' ? 4 : 0}`}>
              <a
                href={`#${h.id}`}
                className="text-gray-600 dark:text-gray-300 hover:underline"
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
