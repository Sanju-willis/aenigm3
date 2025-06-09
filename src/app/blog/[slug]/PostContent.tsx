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
          alt={post.title}
          width={400}
          height={300}
className="w-full max-w-3xl mx-auto h-auto rounded-xl shadow mb-6 object-cover"
        />
      )}

      <h1 className="text-3xl font-bold mt-2 mb-2">{post.title}</h1>
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
              className="rounded-full object-cover w-6 h-8"
            />
          )}
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {post.author.name}
          </span>
        </div>
      )}

      <PortableText value={post.body} components={components} />
    </>
  );
}
