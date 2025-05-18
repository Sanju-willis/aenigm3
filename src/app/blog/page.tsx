// src\app\blog\page.tsx
import { client } from '@/lib/sanity';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default async function BlogListPage() {
  const categories = await client.fetch(`
    *[_type == "category"]{
      _id,
      title
    }
  `);

  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      slug,
      publishedAt,
      mainImage {
        asset -> { url }
      },
      categories[]->{
        _id,
        title
      }
    }
  `);

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

      {/* Category tabs */}
      <div className="flex gap-3 flex-wrap mb-8 justify-center">
        {categories.map((cat: any) => (
          <button
            key={cat._id}
            className="px-4 py-2 border border-border rounded-full text-sm hover:bg-primary hover:text-white transition"
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="group border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white dark:bg-zinc-900"
          >
            {post.mainImage?.asset?.url && (
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1 group-hover:text-primary">{post.title}</h2>
              <p className="text-xs text-muted-foreground mb-2">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.categories?.map((cat: any) => (
                  <span
                    key={cat._id}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-gray-600 dark:text-gray-300"
                  >
                    {cat.title}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
