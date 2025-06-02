// src\app\blog\BlogList.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlogListLayout from './BlogListLayout';

type Category = {
  _id: string;
  title: string;
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: { asset: { url: string } };
  author?: {
    name: string;
    image?: { asset?: { url: string } };
  };
  categories?: Category[];
};

export default function BlogList({
  posts,
  categories,
}: {
  posts: Post[];
  categories: Category[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? posts.filter((post) =>
        post.categories?.some((cat) => cat._id === selectedCategory)
      )
    : posts;

  return (
    <BlogListLayout
      sidebar={
        <div className="border rounded-xl p-5 shadow-sm bg-white dark:bg-zinc-900">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`w-full text-left text-sm px-3 py-2 rounded border transition ${
                  !selectedCategory
                    ? 'bg-primary text-white'
                    : 'hover:bg-primary hover:text-white'
                }`}
              >
                All
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat._id}>
                <button
                  onClick={() => setSelectedCategory(cat._id)}
                  className={`w-full text-left text-sm px-3 py-2 rounded border transition ${
                    selectedCategory === cat._id
                      ? 'bg-primary text-white'
                      : 'hover:bg-primary hover:text-white'
                  }`}
                >
                  {cat.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      }
    >
      {filteredPosts.map((post) => (
        <Link
          key={post._id}
          href={`/blog/${post.slug.current}`}
          className="group rounded-xl border border-border overflow-hidden bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition"
        >
          {post.mainImage?.asset?.url && (
            <div className="aspect-[16/9] w-full overflow-hidden">
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                width={400}
                height={225}
                className="w-full h-full object-cover transition group-hover:scale-105 duration-300"
              />
            </div>
          )}

          <div className="p-4 flex flex-col justify-between h-full">
            <h2 className="text-base font-semibold mb-2 group-hover:text-primary transition text-balance">
              {post.title}
            </h2>

            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
              {post.author?.image?.asset?.url && (
                <Image
                  src={post.author.image.asset.url}
                  alt={post.author.name}
                  width={20}
                  height={20}
                  className="rounded-full object-cover w-5 h-5"
                />
              )}
              {post.author?.name && <span>{post.author.name}</span>}
              <span className="mx-1">·</span>
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>

            {post.categories && (
              <div className="flex flex-wrap gap-2 mt-auto">
                {post.categories.map((cat) => (
                  <span
                    key={cat._id}
                    className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-zinc-800 rounded-full text-gray-600 dark:text-gray-300"
                  >
                    {cat.title}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Link>
      ))}
    </BlogListLayout>
  );
}
