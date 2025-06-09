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

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? 'Unknown' : date.toLocaleDateString();
}

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
        <div className="rounded-2xl border border-border bg-white dark:bg-zinc-900 shadow-md p-6 space-y-4">
          <h2 className="text-lg font-bold">Categories</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 text-sm rounded-full border transition-all ${
                !selectedCategory
                  ? 'bg-primary text-white'
                  : 'hover:bg-muted hover:text-foreground'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => setSelectedCategory(cat._id)}
                className={`px-3 py-1.5 text-sm rounded-full border transition-all ${
                  selectedCategory === cat._id
                    ? 'bg-primary text-white'
                    : 'hover:bg-muted hover:text-foreground'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      }
    >
      {filteredPosts.map((post) => (
        <Link
          key={post._id}
          href={`/blog/${post.slug.current}`}
          className="group rounded-2xl border border-border overflow-hidden bg-white dark:bg-zinc-900 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
        >
          {post.mainImage?.asset?.url && (
            <div className="aspect-[16/9] overflow-hidden">
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                width={600}
                height={340}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}

          <div className="p-4 space-y-2 flex flex-col h-full">
            <h2 className="text-sm font-semibold group-hover:text-primary transition-colors text-balance line-clamp-2">
              {post.title}
            </h2>

            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              {post.author?.image?.asset?.url && (
                <Image
                  src={post.author.image.asset.url}
                  alt={post.author.name}
                  width={20}
                  height={20}
                  className="rounded-full w-5 h-5 object-cover"
                />
              )}
              {post.author?.name && <span>{post.author.name}</span>}
              <span className="mx-1">·</span>
              <span>{formatDate(post.publishedAt)}</span>
            </div>

            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {post.categories.map((cat) => (
                  <span
                    key={cat._id}
                    className="text-[10px] px-2 py-0.5 bg-muted rounded-full text-muted-foreground"
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
