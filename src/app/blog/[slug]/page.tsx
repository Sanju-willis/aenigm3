import { client } from '@/lib/sanity';
import { PortableText, PortableTextBlock } from '@portabletext/react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

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
    const baseId = rawText.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '') || 'section';
    const count = headingIdMap.get(baseId) || 0;
    headingIdMap.set(baseId, count + 1);

    const id = count === 0 ? baseId : `${baseId}-${count}`;

    return {
      text: rawText,
      id,
      level: block.style as 'h2' | 'h3',
    };
  });


  // Handle PortableText custom blocks
  const components = {
    types: {
      image: ({ value }: any) => {
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
          {headings
            .filter((h) => h.id)
            .map((h) => (
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
