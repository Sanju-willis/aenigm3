import { client } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

// 👇 Handle async params properly (Next.js 15)
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      publishedAt,
      mainImage {
        asset -> { url }
      }
    }`,
    { slug }
  );

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <article className="prose max-w-2xl mx-auto p-6">
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
      <p className="text-sm text-gray-500">{new Date(post.publishedAt).toDateString()}</p>
      <PortableText value={post.body} />
    </article>
  );
}
