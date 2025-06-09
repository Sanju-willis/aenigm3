// src\app\blog\[slug]\PostContent.tsx
'use client';

import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { components } from '@/styles/PortableText';
import { Post, Heading } from '@/types/post';

export default function PostContent({ post, headings }: { post: Post; headings: Heading[] }) {
  return (
    <>
      {post.mainImage?.asset?.url && (
        <Image
          priority
          src={post.mainImage.asset.url}
          alt={`Cover image for ${post.title}`}
          width={400}
          height={300}
          className="w-full max-w-3xl mx-auto h-auto rounded-xl shadow mb-6 object-cover"
        />
      )}

      <h1 id="top" className="text-3xl font-bold mt-2 mb-2">
        {post.title}
      </h1>

      {/* Meta Info */}
      <div className="flex items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-300">
        {post.author?.image?.asset?.url && (
          <Image
            src={post.author.image.asset.url}
            alt={`Avatar of ${post.author.name}`}
            width={32}
            height={32}
            className="rounded-full object-cover w-8 h-8"
          />
        )}
        <div>
          {post.author?.name && <p>{post.author.name}</p>}
          <p className="text-xs">
            {new Date(post.publishedAt).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>

      <PortableText value={post.body} components={components} />
    </>
  );
}
